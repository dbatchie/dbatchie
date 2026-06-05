"use client";

import { useState, useRef, useCallback } from "react";
import { FileText, Loader2, Copy, CheckCircle, Download, AlertCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TradeType, DocumentType } from "@/lib/prompts";

const TRADES: { value: TradeType; label: string; icon: string }[] = [
  { value: "hvac", label: "HVAC", icon: "❄️" },
  { value: "plumbing", label: "Plumbing", icon: "🔧" },
  { value: "electrical", label: "Electrical", icon: "⚡" },
  { value: "roofing", label: "Roofing", icon: "🏠" },
  { value: "landscaping", label: "Landscaping", icon: "🌿" },
  { value: "general", label: "General Contracting", icon: "🏗️" },
];

const DOC_TYPES: { value: DocumentType; label: string; description: string }[] = [
  { value: "safety_sop", label: "Safety SOP", description: "OSHA-compliant safety procedure with PPE tables, hazard analysis, and sign-offs" },
  { value: "onboarding_checklist", label: "Onboarding Checklist", description: "90-day structured new hire checklist with training milestones and certifications" },
  { value: "service_procedure", label: "Service Procedure", description: "Step-by-step field procedure with specs, troubleshooting, and QC hold points" },
  { value: "employee_handbook", label: "Handbook Section", description: "Formal policy with definitions, responsibilities, and acknowledgment page" },
  { value: "equipment_sop", label: "Equipment SOP", description: "Operating procedure with LOTO, pre-op checklist, and maintenance schedule" },
  { value: "training_material", label: "Training Module", description: "Structured training with objectives, knowledge check questions, and skills assessment" },
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

type GenerateStatus = "idle" | "generating" | "done" | "error";

export default function GeneratePage() {
  const [trade, setTrade] = useState<TradeType | "">("");
  const [docType, setDocType] = useState<DocumentType | "">("");
  const [businessName, setBusinessName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [specificFocus, setSpecificFocus] = useState("");
  const [state, setState] = useState("");

  const [status, setStatus] = useState<GenerateStatus>("idle");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const abortRef = useRef<AbortController | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!trade || !docType || !businessName.trim()) return;

    setStatus("generating");
    setOutput("");
    setError("");

    abortRef.current = new AbortController();

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trade, docType, businessName: businessName.trim(), jobTitle, specificFocus, state }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || `Error ${res.status}`);
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setOutput((prev) => prev + decoder.decode(value, { stream: true }));
      }

      setStatus("done");
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        setStatus("idle");
        return;
      }
      setError(err instanceof Error ? err.message : "Generation failed");
      setStatus("error");
    }
  }, [trade, docType, businessName, jobTitle, specificFocus, state]);

  const handleStop = () => {
    abortRef.current?.abort();
    setStatus("idle");
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const tradeName = trade.toUpperCase();
    const docName = docType.replace(/_/g, "-");
    const biz = businessName.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "");
    const filename = `${biz}-${tradeName}-${docName}.txt`;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const canGenerate = trade && docType && businessName.trim() && status !== "generating";
  const isGenerating = status === "generating";
  const hasOutput = output.length > 0;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-900">FieldDocs</span>
          </a>
          <span className="text-sm text-slate-500 bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-medium border border-orange-100">
            Document Generator
          </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-8">
          {/* Form Panel */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Generate a Document</h1>
              <p className="text-slate-500 mt-1 text-sm">
                Trade-specific documents built for the field — not generic templates.
              </p>
            </div>

            {/* Trade Selection */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Trade <span className="text-orange-600">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {TRADES.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setTrade(t.value)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all",
                      trade === t.value
                        ? "border-orange-500 bg-orange-50 text-orange-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    <span className="text-base leading-none">{t.icon}</span>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Document Type */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Document Type <span className="text-orange-600">*</span>
              </label>
              <div className="space-y-2">
                {DOC_TYPES.map((d) => (
                  <button
                    key={d.value}
                    onClick={() => setDocType(d.value)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-lg border transition-all",
                      docType === d.value
                        ? "border-orange-500 bg-orange-50"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    <div className={cn("text-sm font-medium", docType === d.value ? "text-orange-700" : "text-slate-700")}>
                      {d.label}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">{d.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Business Name <span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Apex HVAC Services"
                className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Optional Fields */}
            <details className="group">
              <summary className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer list-none hover:text-slate-800">
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                Optional: Customize further
              </summary>
              <div className="mt-3 space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Job Title</label>
                  <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g. HVAC Installation Technician"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                    Specific Focus
                  </label>
                  <textarea
                    value={specificFocus}
                    onChange={(e) => setSpecificFocus(e.target.value)}
                    placeholder="e.g. Refrigerant recovery and recycling procedure for residential split systems"
                    rows={3}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">State</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
                  >
                    <option value="">Any state (federal standards)</option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
            </details>

            {/* Generate Button */}
            <div className="space-y-2">
              {isGenerating ? (
                <button
                  onClick={handleStop}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-300 transition-colors"
                >
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Generating… Click to stop
                </button>
              ) : (
                <button
                  onClick={handleGenerate}
                  disabled={!canGenerate}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm transition-all",
                    canGenerate
                      ? "bg-orange-600 hover:bg-orange-700 text-white shadow-sm hover:shadow-md"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  )}
                >
                  <FileText className="w-4 h-4" />
                  Generate Document
                </button>
              )}
              {status === "error" && (
                <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <p className="text-xs text-red-700">{error}</p>
                </div>
              )}
            </div>

            <p className="text-xs text-slate-400 text-center">
              Uses ~1 credit per document. Each document is unique to your business.
            </p>
          </div>

          {/* Output Panel */}
          <div className="flex flex-col">
            {hasOutput ? (
              <div className="flex flex-col h-full">
                {/* Toolbar */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {status === "done" && (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Complete
                      </span>
                    )}
                    {isGenerating && (
                      <span className="flex items-center gap-1.5 text-xs font-medium text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Writing…
                      </span>
                    )}
                    <span className="text-xs text-slate-400">{output.length.toLocaleString()} chars</span>
                  </div>
                  {status === "done" && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        {copied ? (
                          <><CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> Copied</>
                        ) : (
                          <><Copy className="w-3.5 h-3.5" /> Copy</>
                        )}
                      </button>
                      <button
                        onClick={handleDownload}
                        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-orange-600 border border-orange-600 rounded-lg hover:bg-orange-700 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> Download .txt
                      </button>
                    </div>
                  )}
                </div>

                {/* Document Output */}
                <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                  <div className="h-full overflow-y-auto p-6 sm:p-8">
                    <pre
                      className="text-sm text-slate-800 font-mono leading-relaxed whitespace-pre-wrap break-words"
                    >
                      {output}
                      {isGenerating && (
                        <span className="inline-block w-2 h-4 bg-orange-500 ml-0.5 animate-pulse align-middle" />
                      )}
                    </pre>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center bg-white border-2 border-dashed border-slate-200 rounded-xl min-h-[500px]">
                <div className="text-center max-w-xs">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-orange-400" />
                  </div>
                  <h2 className="text-base font-semibold text-slate-700 mb-2">
                    Your document will appear here
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Select your trade and document type, enter your business name, then hit Generate.
                    Documents include regulatory citations, PPE specs, and proper professional structure.
                  </p>
                  <div className="mt-6 space-y-2 text-left">
                    {[
                      "Specific OSHA CFR citations",
                      "ANSI/ASTM rated PPE tables",
                      "Trade-specific terminology",
                      "Ready to print and use",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
