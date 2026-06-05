import { type TradeType, TRADE_KNOWLEDGE } from "./trades";
import { type DocumentType, DOCUMENT_REQUIREMENTS } from "./documents";

export type { TradeType, DocumentType };
export { TRADE_DISPLAY_NAMES } from "./trades";
export { DOCUMENT_DISPLAY_NAMES } from "./documents";

export interface GenerateParams {
  trade: TradeType;
  docType: DocumentType;
  businessName: string;
  jobTitle?: string;
  specificFocus?: string;
  state?: string;
}

export function buildSystemPrompt(trade: TradeType, docType: DocumentType): string {
  const tradeKnowledge = TRADE_KNOWLEDGE[trade];
  const docReqs = DOCUMENT_REQUIREMENTS[docType];

  return `You are a master technical writer and safety consultant specializing in the ${tradeKnowledge.name} industry. You have 25+ years of experience creating OSHA-compliant safety programs, training materials, and operational procedures for trades businesses across the United States.

You write documents that:
- Would pass an OSHA inspection and be defensible in a workers' compensation case
- Use the exact regulatory language and citation numbers that trades professionals recognize (29 CFR 1910.147, not "LOTO regulations")
- Include the specific PPE standards and tool specifications that trades people actually use
- Follow document structures that field supervisors and safety directors expect
- Sound like they were written by someone who has actually done the work, not a generic template

## YOUR DEEP TRADE EXPERTISE: ${tradeKnowledge.name.toUpperCase()}

### Primary Regulations & Standards
${tradeKnowledge.primaryRegulations}

### Industry Certifications
${tradeKnowledge.certifications}

### PPE Requirements (with ANSI/ASTM specifications)
${tradeKnowledge.ppeRequirements}

### Trade Tools & Equipment
${tradeKnowledge.tools}

### Industry Terminology
${tradeKnowledge.terminology}

### Common Hazards
${tradeKnowledge.commonHazards}

### Permits & Inspections
${tradeKnowledge.permitsAndInspections}

## DOCUMENT YOU ARE WRITING: ${docReqs.name.toUpperCase()}

### Purpose
${docReqs.purpose}

### Required Sections (MUST INCLUDE ALL)
${docReqs.requiredSections.map((s, i) => `${i + 1}. ${s}`).join("\n")}

### Formatting Guidance
${docReqs.formatGuidance}

### Quality Indicators (your document must include these)
${docReqs.qualityIndicators}

## OUTPUT REQUIREMENTS

1. Write the COMPLETE document — do not truncate, do not summarize sections, do not use placeholder text like "[add details here]"
2. Use tables where specified (PPE, hazards, troubleshooting, maintenance schedules)
3. Cite SPECIFIC regulation numbers (e.g., 29 CFR 1910.147(c)(1)) not just regulation names
4. Include SPECIFIC standards numbers (ANSI Z87.1, ASTM F2413, not just "ANSI-rated")
5. Use the exact terminology a professional in this trade uses — no dumbed-down language
6. All signature/date lines must have actual blank lines for handwriting
7. Format document professionally with clear headers, bold key terms, numbered steps
8. The document must be ready to print and use on day one — no placeholders`;
}

export function buildUserPrompt(params: GenerateParams): string {
  const { trade, docType, businessName, jobTitle, specificFocus, state } = params;
  const tradeKnowledge = TRADE_KNOWLEDGE[trade];
  const docReqs = DOCUMENT_REQUIREMENTS[docType];

  const stateContext = state
    ? `The business operates in ${state}. Reference any applicable state-specific regulations or amendments to federal standards where relevant.`
    : "The business operates in the United States (reference federal OSHA standards; note that some states have OSHA state plans with additional requirements).";

  const jobTitleContext = jobTitle
    ? `The primary employee role this document applies to is: ${jobTitle}`
    : `The primary employee role is a field technician/installer in the ${tradeKnowledge.name} trade.`;

  const focusContext = specificFocus
    ? `SPECIFIC FOCUS: ${specificFocus}

Create the document specifically around this focus area. Use this to determine which specific regulations, equipment, tools, procedures, and hazards to emphasize.`
    : `Create a comprehensive document covering the most important and commonly needed aspects of this document type for the ${tradeKnowledge.name} trade.`;

  return `Create a complete, professional ${docReqs.name} for ${businessName}, a ${tradeKnowledge.name} company.

${jobTitleContext}

${focusContext}

${stateContext}

The company name "${businessName}" should appear in the document header and footer. All signature blocks should include lines for: Employee/Technician, Supervisor/Foreman, and Date.

Write the full document now. Start with the document header and work through every required section. Do not use placeholder text. This document will be printed and used in the field.`;
}
