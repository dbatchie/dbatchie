export type DocumentType =
  | "safety_sop"
  | "onboarding_checklist"
  | "service_procedure"
  | "employee_handbook"
  | "equipment_sop"
  | "training_material";

export const DOCUMENT_DISPLAY_NAMES: Record<DocumentType, string> = {
  safety_sop: "Safety SOP",
  onboarding_checklist: "Onboarding Checklist",
  service_procedure: "Service Procedure",
  employee_handbook: "Employee Handbook Section",
  equipment_sop: "Equipment Operating Procedure",
  training_material: "Training Material",
};

interface DocumentRequirements {
  name: string;
  purpose: string;
  requiredSections: string[];
  formatGuidance: string;
  qualityIndicators: string;
}

export const DOCUMENT_REQUIREMENTS: Record<DocumentType, DocumentRequirements> = {
  safety_sop: {
    name: "Safety Standard Operating Procedure (SOP)",
    purpose:
      "Establish written, legally defensible safety procedures that protect workers and demonstrate OSHA compliance. These documents are referenced in OSHA inspections and workers' comp claims.",
    requiredSections: [
      "Document header with number, revision, date, preparer/approver signature lines",
      "1. PURPOSE — What hazard or activity this SOP addresses",
      "2. SCOPE — Who this applies to (job titles, locations, conditions)",
      "3. REGULATORY COMPLIANCE — Specific CFR citations, NFPA/ANSI standards, state regulations",
      "4. REQUIRED PPE — Table format: PPE item | Specification | Purpose. Cite ANSI/ASTM standards for each item.",
      "5. REQUIRED TOOLS AND EQUIPMENT — Specific equipment with ratings/certifications",
      "6. HAZARD IDENTIFICATION — Table: Hazard | Severity | Likelihood | Control Measure",
      "7. PRE-TASK SAFETY CHECKLIST — Numbered checklist items (checkbox format)",
      "8. PROCEDURE — Numbered steps, each with safety note where relevant. Include STOP points for critical safety verifications.",
      "9. POST-TASK REQUIREMENTS — Cleanup, documentation, inspection, reporting",
      "10. EMERGENCY PROCEDURES — Step-by-step response to likely emergencies (injury, fire, release, etc.)",
      "11. TRAINING REQUIREMENTS — Who must be trained, how often, documentation",
      "12. DOCUMENTATION AND RECORDKEEPING — What to document, how long to retain records",
      "SIGN-OFF SECTION — Technician, supervisor, date with printed and signature lines",
    ],
    formatGuidance:
      "Use professional document formatting with clear section headers. PPE and hazard sections must use tables. Steps must be numbered. Include specific regulatory citation numbers (e.g., 29 CFR 1910.147) not just regulation names. Signature blocks at end.",
    qualityIndicators:
      "Specific CFR section numbers, ANSI/ASTM standard numbers, actual PPE specifications (e.g., 'ANSI/ISEA 105 Level A4' not just 'cut gloves'), numbered procedural steps, emergency contact information field, dated revision history.",
  },

  onboarding_checklist: {
    name: "New Employee Onboarding Checklist",
    purpose:
      "Structured onboarding program ensuring new field technicians receive required safety training, company orientation, tools/equipment orientation, and reach competency milestones on time.",
    requiredSections: [
      "Document header with employee name, start date, position, supervisor",
      "DAY 1 CHECKLIST — Company orientation, HR paperwork, safety orientation, PPE issuance",
      "WEEK 1 CHECKLIST — Tool familiarity, vehicle/equipment orientation, shadow experienced tech, company systems",
      "WEEKS 2-4 CHECKLIST — Supervised fieldwork, trade-specific safety training, company procedures review",
      "30-DAY MILESTONE — Performance check, competency assessment items",
      "60-DAY MILESTONE — Increasing independence, specialized training",
      "90-DAY MILESTONE — Full competency review, probation completion, certification verification",
      "REQUIRED CERTIFICATIONS TRACKER — Certification name | Required by | Obtained date | Expiration",
      "REQUIRED TRAINING TRACKER — Training topic | Method | Date completed | Trainer sign-off",
      "SAFETY ACKNOWLEDGMENTS — OSHA rights, company safety policies, hazard communication, PPE policy",
      "EQUIPMENT CHECKOUT LOG — Tool/equipment | Issue date | Condition | Signature",
      "SIGN-OFF — Employee, supervisor, HR signature with dates",
    ],
    formatGuidance:
      "Use checkbox format extensively. Group by time period. Include fields for dates completed and supervisor initials. Certification tracker must include expiration dates. Safety acknowledgments must have separate signature lines for each policy.",
    qualityIndicators:
      "Trade-specific training items (not generic), specific certification names with issuing bodies, 90-day structured timeline, equipment checkout log with condition documentation, separate sign-offs for each major section.",
  },

  service_procedure: {
    name: "Field Service Procedure",
    purpose:
      "Step-by-step technical procedure for performing a specific service task in the field. Ensures consistent quality across all technicians, reduces callbacks, and provides reference for less experienced technicians.",
    requiredSections: [
      "Document header with procedure number, equipment type, revision, date",
      "APPLICABLE EQUIPMENT — Makes/models this procedure applies to (or 'all residential split systems')",
      "PREREQUISITES — Required certifications, prior steps, or conditions before starting",
      "REQUIRED TOOLS — Specific tools with specifications (e.g., 'torque wrench: 10-60 ft-lbs')",
      "REQUIRED MATERIALS/PARTS — Part numbers where applicable, quantities, specifications",
      "SAFETY PRECAUTIONS — Hazards specific to this procedure (brief, linked to full safety SOP)",
      "STEP-BY-STEP PROCEDURE — Numbered steps. At technical steps include: expected measurements/readings, pass/fail criteria, troubleshooting notes.",
      "QUALITY CHECK POINTS — Verification steps during procedure (marked as QC HOLD POINT)",
      "TESTING AND VERIFICATION — How to verify successful completion with pass criteria",
      "COMMON PROBLEMS AND SOLUTIONS — Troubleshooting table: Problem | Likely Cause | Corrective Action",
      "DOCUMENTATION — What to record on work order/service ticket",
      "ESTIMATED TIME — Time ranges for each major phase",
    ],
    formatGuidance:
      "Numbered steps are mandatory. Include specific measurements (torque specs, pressures, temperatures, voltages). Mark QC hold points clearly. Troubleshooting table is essential. Expected values and pass/fail criteria make this document genuinely useful in the field.",
    qualityIndicators:
      "Specific numeric values (not 'tighten appropriately' — use actual torque specs), pass/fail criteria, troubleshooting table, part numbers, time estimates, QC hold points, equipment-specific details.",
  },

  employee_handbook: {
    name: "Employee Handbook Section",
    purpose:
      "Formal company policy document that establishes clear expectations, protects the company legally, and provides employees with written reference for company rules and procedures.",
    requiredSections: [
      "POLICY TITLE and policy number",
      "EFFECTIVE DATE and revision history table",
      "POLICY STATEMENT — Clear statement of the company's position/rule",
      "PURPOSE — Why this policy exists",
      "SCOPE — Who this policy applies to",
      "DEFINITIONS — Key terms defined precisely",
      "POLICY DETAILS — The actual rules, organized in numbered sub-sections",
      "EMPLOYEE RESPONSIBILITIES — What employees must do",
      "SUPERVISOR RESPONSIBILITIES — What supervisors must do",
      "COMPANY RESPONSIBILITIES — What the company commits to provide",
      "CONSEQUENCES FOR VIOLATION — Progressive discipline or immediate termination offenses",
      "REPORTING PROCEDURES — How to report violations, incidents, or concerns",
      "EXCEPTIONS AND APPROVALS — Process for requesting exceptions",
      "ACKNOWLEDGMENT PAGE — Employee signature, date, acknowledgment of receipt and understanding",
    ],
    formatGuidance:
      "Formal, precise language. Use numbered sub-sections (3.1, 3.2, etc.) for policy details. Definitions section ensures no ambiguity. Consequences must be specific enough to be enforceable. Acknowledgment page is legally important — keep separate for filing.",
    qualityIndicators:
      "Policy number and revision tracking, specific consequences (not vague), definitions for trade-specific or legal terms, reference to applicable laws where relevant, supervisor and employee responsibility distinction, acknowledgment page.",
  },

  equipment_sop: {
    name: "Equipment Operating Procedure (EOP)",
    purpose:
      "Standardized operating procedure for a specific piece of equipment. Ensures safe and correct operation, prevents equipment damage, and provides reference for new operators.",
    requiredSections: [
      "Document header with equipment name, make/model, asset ID, location, revision",
      "EQUIPMENT DESCRIPTION — Brief description, purpose, capacity/specifications",
      "REQUIRED OPERATOR QUALIFICATIONS — Training, certifications, experience required before operation",
      "HAZARDS SPECIFIC TO THIS EQUIPMENT — Energy sources, pinch points, stored energy, etc.",
      "REQUIRED PPE — Specific to this equipment",
      "PRE-OPERATION INSPECTION CHECKLIST — Daily inspection items (numbered, checkbox format)",
      "STARTUP PROCEDURE — Numbered step-by-step sequence",
      "OPERATING PROCEDURES — Normal operation steps and parameters",
      "SHUTDOWN PROCEDURE — Proper shutdown sequence (normal and emergency)",
      "LOCKOUT/TAGOUT PROCEDURE — Energy isolation specific to this equipment (all energy sources)",
      "PREVENTIVE MAINTENANCE SCHEDULE — Table: Task | Frequency | Responsible | Last Date | Next Date",
      "TROUBLESHOOTING — Common problems and solutions table",
      "EMERGENCY PROCEDURES — Equipment-specific emergencies",
      "DOCUMENTATION — Operating log, maintenance log requirements",
      "SIGN-OFF — Operator training sign-off with date",
    ],
    formatGuidance:
      "Pre-operation checklist must be checkbox format for daily use. LOTO procedure must list EVERY energy source (electrical, pneumatic, hydraulic, gravity, thermal, chemical). Maintenance schedule must be a table with specific frequencies. Startup and shutdown must be exact numbered sequences.",
    qualityIndicators:
      "Equipment-specific LOTO procedure with all energy sources identified, daily inspection checklist in usable checkbox format, specific operating parameters (pressures, speeds, temperatures), maintenance table with frequencies, troubleshooting table.",
  },

  training_material: {
    name: "Training Module",
    purpose:
      "Structured training curriculum for teaching a skill, safety practice, or procedure to new or existing employees. Supports OSHA training documentation requirements and ensures consistent knowledge transfer.",
    requiredSections: [
      "TRAINING MODULE HEADER — Title, version, date, duration, target audience",
      "LEARNING OBJECTIVES — 3-5 specific, measurable outcomes using action verbs (identify, demonstrate, calculate, perform)",
      "PREREQUISITES — Prior knowledge or training required",
      "INSTRUCTOR NOTES — Guidance for whoever delivers this training",
      "MODULE 1: [TOPIC] — Instructional content with key points, definitions, diagrams described",
      "MODULE 2: [TOPIC] — Continue with additional content modules as needed",
      "REGULATORY REQUIREMENTS — OSHA, EPA, or other regulatory basis for this training",
      "HANDS-ON PRACTICE COMPONENT — Specific exercises, scenarios, or demonstrations required",
      "KNOWLEDGE CHECK — 10-15 multiple choice or true/false questions covering learning objectives",
      "SKILLS ASSESSMENT CHECKLIST — Observable, measurable performance criteria for practical evaluation",
      "TRAINING RECORD — Sign-off sheet with trainee name, date, trainer, score/pass/fail",
      "REFERENCES — Regulations, standards, manufacturer documentation referenced",
    ],
    formatGuidance:
      "Learning objectives must use Bloom's taxonomy action verbs (identify, demonstrate, calculate, explain, apply). Knowledge check questions must be specific and tied to objectives. Skills assessment must have observable pass/fail criteria, not vague standards. Training record must include space for remediation if initial attempt fails.",
    qualityIndicators:
      "Measurable learning objectives, regulatory basis cited, knowledge check questions with answer key (instructor version), observable skills assessment criteria, training documentation that satisfies OSHA recordkeeping, specific knowledge check questions not generic.",
  },
};
