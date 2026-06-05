export type TradeType =
  | "hvac"
  | "plumbing"
  | "electrical"
  | "roofing"
  | "landscaping"
  | "general";

export const TRADE_DISPLAY_NAMES: Record<TradeType, string> = {
  hvac: "HVAC",
  plumbing: "Plumbing",
  electrical: "Electrical",
  roofing: "Roofing",
  landscaping: "Landscaping",
  general: "General Contracting",
};

interface TradeKnowledge {
  name: string;
  primaryRegulations: string;
  certifications: string;
  ppeRequirements: string;
  tools: string;
  terminology: string;
  commonHazards: string;
  permitsAndInspections: string;
}

export const TRADE_KNOWLEDGE: Record<TradeType, TradeKnowledge> = {
  hvac: {
    name: "HVAC (Heating, Ventilation & Air Conditioning)",
    primaryRegulations: `
- EPA Section 608: Required technician certification for all refrigerant handling. Class I, II, III, and Universal certifications. Venting refrigerants is a federal violation (40 CFR Part 82), fines up to $44,539/day.
- OSHA 29 CFR 1910.147: Lockout/Tagout (LOTO) mandatory before accessing any electrical or refrigerant components. Six-step LOTO procedure: notify, locate energy sources, isolate, apply locks, verify zero energy, proceed.
- OSHA 29 CFR 1910.303: General electrical safety — all electrical work on HVAC units must comply with NEC.
- ASHRAE Standard 15: Safety Standard for Refrigeration Systems — refrigerant leak detection, equipment room ventilation, emergency procedures.
- ASHRAE Standard 62.1: Ventilation for Acceptable Indoor Air Quality — used for commercial ductwork design.
- ASHRAE Standard 90.1: Energy Standard — minimum SEER/EER requirements for new installations.
- NFPA 70 (NEC): Electrical connections, disconnect requirements, wire sizing.
- IMC (International Mechanical Code): Equipment installation, clearances, ductwork specs.
- DOT Regulations: Recovery cylinders must be DOT-approved, filled max 80% by weight.`,
    certifications: `
- EPA 608 Universal Certification (required for refrigerant work)
- NATE (North American Technician Excellence) certification
- State contractor license (varies by state — many require journeyman + master)
- OSHA 10 or OSHA 30 Construction/General Industry
- Electrical license (if performing line-voltage electrical work)`,
    ppeRequirements: `
- Safety glasses: ANSI Z87.1 rated, always required on job site
- Chemical-resistant gloves: Neoprene or nitrile, minimum 8 mil — refrigerant contact causes frostbite and chemical burns
- Face shield: ANSI Z87.1 when working with pressurized refrigerant lines
- Cut-resistant gloves: ANSI/ISEA 105-2016 Level A4 when handling sheet metal ductwork
- Steel-toed boots: ASTM F2413 I/75 C/75 rated
- Hearing protection: ANSI S3.19 NRR 25+ when operating equipment
- Hard hat: ANSI Z89.1 Type II Class E when working near overhead hazards
- Knee pads: For work in crawl spaces or mechanical rooms`,
    tools: `
- Manifold gauge set (rated for specific refrigerant: R-410A, R-32, R-454B, R-22, R-407C)
- EPA-certified refrigerant recovery machine (UL/ETL listed)
- Recovery cylinders (DOT approved, yellow/grey for mixed, grey for R-410A)
- Refrigerant scale: ±0.1 oz accuracy minimum (required for charging by weight)
- Vacuum pump: 2+ CFM, target <500 microns, verify with micron gauge
- Micron gauge (electronic vacuum gauge)
- Digital manifold with Bluetooth data logging
- Clamp meter (TRMS, min 600V CAT III rating)
- Multimeter (TRMS, min 600V CAT III)
- Combustion analyzer (CO, O2, flue temp — for furnace/boiler work)
- Nitrogen supply with regulator (pressure testing and purging)
- Tube cutter, flaring tool, swaging tool
- Torch (MAP-Pro or oxy-acetylene) for copper brazing`,
    terminology: `
- Superheat: Refrigerant temperature above saturation point at evaporator outlet (target varies: 6-12°F for fixed orifice, 6-10°F for TXV)
- Subcooling: Refrigerant temperature below saturation point at condenser outlet (typically 10-15°F)
- SEER2 (Seasonal Energy Efficiency Ratio 2): New efficiency standard replacing SEER as of Jan 2023
- EER: Energy Efficiency Ratio at 95°F outdoor, rated cooling output
- HSPF2: Heating Seasonal Performance Factor (heat pump heating efficiency)
- CFM: Cubic feet per minute (airflow measurement)
- ESP: External Static Pressure (duct system resistance, typically 0.5" w.c. design)
- TXV/EEV: Thermostatic/Electronic Expansion Valve — metering device
- R-410A: Common residential refrigerant (being phased out, replaced by R-454B, R-32)
- R-22: Legacy refrigerant, no longer manufactured in US since 2020 — reclaim only
- Line set: Refrigerant copper tubing between condensing unit and air handler
- Micron level: Vacuum depth — 300-500 microns typical for clean system
- Heat gain/load: BTU/hr calculated from Manual J
- ACCA Manual J: Industry standard for residential load calculation
- ACCA Manual D: Duct design standard`,
    commonHazards: `
- Refrigerant exposure: Frostbite, asphyxiation (R-410A/R-32 displace oxygen), toxic decomposition products at high temp
- Electrical shock: 240V single-phase, 208/230V three-phase — always verify lockout before touching components
- Pressure hazards: Systems can be at 400+ PSI (R-410A high side at 130°F ambient) — never use torch near pressurized refrigerant
- Carbon monoxide: Incomplete combustion in gas furnaces — always test CO levels
- Fall hazards: Roof-mounted units, attic work — fall protection required per OSHA 1910.23
- Burn hazards: Torch work, hot surfaces (flue pipes, heat exchangers)
- Confined space: Some mechanical rooms qualify as permit-required confined spaces`,
    permitsAndInspections: `
- Mechanical permit: Required for new equipment installation, replacement in most jurisdictions
- Electrical permit: Required for new disconnect, new wiring, panel work
- AHJ (Authority Having Jurisdiction): Local building/mechanical inspector
- Rough-in inspection: Before concealing ductwork or wiring
- Final inspection: After complete installation
- Refrigerant log: Must maintain EPA 608-required service records`,
  },

  plumbing: {
    name: "Plumbing",
    primaryRegulations: `
- OSHA 29 CFR 1926.652: Excavation and trenching — protective systems required in trenches 5+ feet deep. Type A, B, C soil classifications. Cave-in is leading cause of excavation fatalities.
- OSHA 29 CFR 1926.502: Fall protection — required at 6 feet in construction environments.
- OSHA 29 CFR 1910.138: Hand protection requirements.
- IPC (International Plumbing Code): Adopted by most states with local amendments. Governs pipe sizing, venting, fixture units.
- UPC (Uniform Plumbing Code): Used in western states. Alternative to IPC.
- IAPMO (International Association of Plumbing and Mechanical Officials): Code compliance authority.
- Lead and Copper Rule (LCR): EPA regulation — no lead solder or fittings in potable water systems since 1986. California AB1953: max 0.25% lead by weight.
- State-specific plumbing codes: Many states have amendments to IPC/UPC.
- Backflow prevention: ASSE 1013, ASSE 1015, ASSE 1020 standards for different hazard levels.`,
    certifications: `
- Journeyman Plumber license (state-issued, apprenticeship completion + exam)
- Master Plumber license (additional experience + exam, required to pull permits in most states)
- Backflow Prevention Assembly Tester certification (ASSE 5110 or state equivalent)
- Gas piping endorsement (many states require separate certification)
- OSHA 10 or 30 Construction Safety`,
    ppeRequirements: `
- Safety glasses: ANSI Z87.1 — always required; critical during drain cleaning (splash hazard)
- Face shield: ANSI Z87.1 when using hydro-jetter or chemical drain cleaners
- Chemical-resistant gloves: When handling drain chemicals, solvents, or sewage
- Cut-resistant gloves: ANSI/ISEA 105 Level A4 when cutting pipe
- Steel-toed boots: ASTM F2413 I/75 C/75
- Knee pads: Foam or hard-shell for tile and floor work
- Rubber gloves: For working on drain/waste/vent (sewage exposure)
- Respiratory protection: N95 minimum when working near sewer gas or in confined spaces`,
    tools: `
- Pipe cutters: Copper, PVC, CPVC, PEX, steel pipe sizes
- Press tool: Milwaukee M18, Ridgid RP 340 — ProPress fittings, Viega MegaPress
- Propane/MAP-Pro torch with sweat fitting kit
- PEX crimping or expansion tool (ASTM F1807 crimp or ASTM F1960 expansion)
- Drain snake: 1/4" for sinks, 3/8" for tubs, 1/2"-3/4" for mainlines
- Hydro-jetter (3,000-4,000 PSI for residential, 4,000+ for commercial)
- Pipe wrench (10", 14", 18" — always use two)
- Pipe threader (hand or power — Ridgid 300 or equivalent)
- Channel-lock pliers (Channellock 440, 460)
- Push-fit tool set (SharkBite removal tool)
- Pressure test gauge: 0-100 PSI, test at 1.5× working pressure
- Camera inspection system (push rod or self-leveling)
- Gas leak detector (combustible gas detector)`,
    terminology: `
- DFU (Drainage Fixture Units): Measure of drainage load. Lavatory = 1 DFU, WC = 4 DFU.
- WFU (Water Supply Fixture Units): Measure of water supply demand.
- GPM (Gallons Per Minute): Flow rate — showers typically 1.8-2.5 GPM, hose bibs 2-4 GPM
- PSI: Pounds per square inch — residential water pressure 40-80 PSI typical (code max varies 80-100 PSI)
- PRV: Pressure Reducing Valve — required when supply pressure exceeds 80 PSI
- P-trap: Water seal device preventing sewer gas intrusion (minimum 2" water seal)
- AAV (Air Admittance Valve): One-way vent — check local code for approval
- Wet vent: Vent that also serves as drain — code-specific sizing
- Stack vent / stack: Vertical DWV pipe
- ABS: Acrylonitrile Butadiene Styrene — black drain pipe
- PEX-A, PEX-B, PEX-C: Different crosslinking methods — PEX-A is most flexible
- Schedule 40 vs Schedule 80 PVC: Wall thickness — Sch 80 for pressure/mechanical protection
- Expansion loop: Required for PEX and copper to accommodate thermal expansion
- Thermal expansion tank: Required with check valves and PRVs on water heaters`,
    commonHazards: `
- Sewer gas exposure: H2S (hydrogen sulfide) — odorless at high concentrations, rapidly fatal. If you smell rotten eggs stop work immediately.
- Methane: Explosive in 5-15% concentration in air
- Water scalding: Water heaters set above 120°F, steam exposure
- Legionella: In water systems between 68-122°F — domestic hot water should be stored at 140°F
- Silica dust: From cutting concrete and masonry — N95 minimum, wet-cutting preferred
- Lead pipe: Pre-1986 construction — use respirator and PPE when disturbing
- Confined space: Manholes, crawl spaces, large tanks — permit-required entry procedures
- Chemical burns: Drain cleaners (lye/HCl), solvents — follow SDS
- Excavation cave-in: Most common fatal plumbing hazard`,
    permitsAndInspections: `
- Plumbing permit: Required for new systems, additions, water heater replacement in most jurisdictions
- Rough-in inspection: Before concealing any rough plumbing
- Water pressure test: Typically 150 PSI for 15 minutes on water supply
- Air/water test on DWV: 5" water column for drain/waste/vent systems
- Final inspection: After all fixtures installed, water on, all drains tested
- Backflow preventer test: Annual testing required in commercial and irrigation applications`,
  },

  electrical: {
    name: "Electrical",
    primaryRegulations: `
- NFPA 70E (Standard for Electrical Safety in the Workplace): Arc flash and shock hazard analysis, energized electrical work permits, PPE categories (Cat 1-4), approach boundaries (Limited, Restricted, Prohibited).
- NEC 2023 (NFPA 70 National Electrical Code): Adopted by most jurisdictions with local amendments. Governs all electrical installations.
- OSHA 29 CFR 1910.147: Lockout/Tagout — must de-energize before working on electrical equipment. Verification with voltmeter before touching.
- OSHA 29 CFR 1910.333: Electrical safety-related work practices — energized work only when infeasible to de-energize.
- OSHA 29 CFR 1910.269: Electric power generation/distribution — utility work.
- OSHA 29 CFR 1926.416/417: Electrical safety in construction.
- ANSI Z535: Safety sign and label standards.
- IEEE 1584: Arc flash hazard calculations.
- ANSI/NETA ATS: Acceptance testing for electrical equipment.`,
    certifications: `
- State Journeyman Electrician license (apprenticeship + exam)
- State Master/Electrical Contractor license (journeyman + additional experience + exam)
- OSHA 30-Hour Construction or General Industry
- NFPA 70E Qualified Person training (site-specific)
- Arc flash training: Initial and annual refresher
- NETA certification (for testing and commissioning work)
- BICSI (for low-voltage/communications work)`,
    ppeRequirements: `
- Arc flash protection (per NFPA 70E hazard analysis):
  - PPE Cat 1 (4 cal/cm²): Arc-rated long-sleeve shirt and pants, face shield
  - PPE Cat 2 (8 cal/cm²): Arc-rated shirt/pants or coverall, arc-rated face shield, balaclava
  - PPE Cat 3 (25 cal/cm²): Arc flash suit over arc-rated clothing, arc-rated face shield
  - PPE Cat 4 (40 cal/cm²): Full arc flash suit, arc-rated face shield (max rating of suit)
- Rubber insulating gloves (ASTM D120):
  - Class 00: 500V max — low-voltage work
  - Class 0: 1,000V max
  - Class 1: 7,500V max
  - Class 2: 17,000V max — required for most residential/commercial
  - Always use leather protectors over rubber gloves
- Safety glasses: ANSI Z87.1 — always required
- Hard hat: ANSI Z89.1 Type II Class E (electrical-rated)
- Steel-toed boots: ASTM F2413 I/75 EH (electrical hazard rated)
- Non-conductive tools when working in proximity to energized conductors`,
    tools: `
- Multimeter: FLUKE 87V or equivalent, CAT IV 600V rating minimum
- Clamp meter: True RMS, 600A minimum
- Non-contact voltage tester: Klein NCVT-3 or equivalent — verify dead before touching
- Megohmmeter (Megger): For insulation resistance testing of motors, cables
- Phase rotation meter: Three-phase work
- Circuit tracer/wire tracer
- Power quality analyzer: For harmonic/PQ investigations
- Thermal imaging camera: Panel inspections, connection issues
- Cable pulling equipment: Fish tape, wire mesh grips, conduit benders (hand and mechanical)
- Knockout punch set
- Wire strippers (auto and manual), crimping tools
- Torque screwdrivers and drivers (NEC requires torquing to terminal specs)
- Label maker: NEC 408.4 requires panel circuit directory`,
    terminology: `
- Ampacity: Maximum current-carrying capacity of a conductor (based on conductor size, insulation type, ambient temp, conduit fill)
- Voltage drop: Voltage loss due to conductor resistance. NEC recommends max 3% branch circuit, 5% total (feeder + branch)
- Service entrance: Point where utility connects to premises wiring. Main breaker/disconnect here.
- Feeder: Conductors between service equipment and branch circuit overcurrent protection
- Branch circuit: Conductors from overcurrent device to outlets/loads
- OCPD (Overcurrent Protection Device): Breaker or fuse
- AFCI (Arc Fault Circuit Interrupter): Required in NEC 2023 for all 15/20A 120V circuits in dwelling units
- GFCI (Ground Fault Circuit Interrupter): Required per NEC 210.8 in bathrooms, kitchens, garages, outdoors, basements
- Bonding: Connecting metal parts to ensure common potential (not same as grounding)
- Grounding: Connecting system to earth reference
- Arc flash: High-energy discharge — temperatures to 35,000°F, overpressure wave, molten copper spray
- Arc blast: Pressure wave from arc flash — can cause fatal blunt trauma
- SWD (Switching Duty): Breaker rated to switch motor loads
- KAIC: Kiloamperes Interrupting Capacity — breaker must exceed available fault current
- Available fault current (AFC): Must be calculated and labeled on all panels (NEC 110.24)`,
    commonHazards: `
- Electric shock: 10mA paralyzes muscles, 100mA can be fatal. Wet conditions lower skin resistance to ~1,000Ω (dry ~100,000Ω)
- Arc flash: Most deadly electrical hazard. Caused by accidental contact between phases or ground. Energy release can be 40+ cal/cm²
- Arc blast: Pressure wave from arc flash — can be fatal at close range
- Electrocution: #1 fatal electrical hazard. Always verify de-energized with meter
- Burns: From arc flash radiation and direct contact
- Fire: Overloaded circuits, loose connections, arcing faults
- Fall hazard: Working on elevated panels or in electrical rooms
- Explosion: Battery rooms, confined spaces with flammable vapors`,
    permitsAndInspections: `
- Electrical permit: Required for new wiring, panel work, service entrance work, EVSE installation
- Rough-in inspection: Before covering wiring in walls/ceilings
- Service inspection: Before utility connection
- Final inspection: All cover plates, panel directory, GFCI/AFCI tested
- Available fault current must be calculated and posted (NEC 110.24)
- Annual NFPA 70E training and arc flash study updates every 5 years`,
  },

  roofing: {
    name: "Roofing",
    primaryRegulations: `
- OSHA 29 CFR 1926.502: Fall protection systems — MANDATORY at 6 feet for residential, 6 feet for all construction. Leading cause of roofing fatalities.
- OSHA 29 CFR 1926.501: Duty to have fall protection — unprotected sides and edges, leading edges, roofing work.
- OSHA 29 CFR 1926.503: Fall protection training — must document who trained, date, content.
- OSHA 29 CFR 1926.100: Head protection requirements.
- OSHA 29 CFR 1926.451: Scaffolding standards.
- ANSI Z359.11: Personal Fall Arrest System (PFAS) requirements.
- ANSI Z359.14: Self-Retracting Devices (SRD).
- IRC (International Residential Code) Chapter 9: Roof assemblies, underlayment, sheathing.
- IBC (International Building Code): Commercial roofing.
- FM Global Property Loss Prevention Datasheets: Wind uplift requirements for commercial flat roofing.`,
    certifications: `
- OSHA 30-Hour Construction
- Roofing contractor license (state-specific — varies widely)
- NRCA ProCertification (National Roofing Contractors Association)
- GAF Master Elite Contractor certification (asphalt shingles)
- CertainTeed SELECT ShingleMaster
- SPFA Professional Roofing Applicator (spray polyurethane foam)
- NRCA Licensed Roof Observer (LRO)`,
    ppeRequirements: `
- Personal Fall Arrest System (PFAS):
  - Full-body harness: ANSI Z359.11 rated, inspected before each use
  - Self-retracting lifeline (SRL): ANSI Z359.14, 6-foot maximum free fall
  - Anchor point: Rated for 5,000 lbs per person (or 2× maximum arresting force)
  - Lanyard: 6-foot shock-absorbing, reduces peak arresting force to 900 lbs
- Hard hat: ANSI Z89.1 Type II Class C minimum; Class E if any electrical risk
- Safety glasses: ANSI Z87.1 — always
- Non-slip boots: ASTM F2892 rated, high traction soles (Vibram or equivalent)
- Cut-resistant gloves: ANSI/ISEA 105 Level A4 — for handling shingles, sheet metal
- High-visibility vest: ANSI/ISEA 107 Class 2 when working near traffic
- Knee pads: When walking on steep slopes
- Hearing protection: ANSI S3.19 NRR 25+ when operating nail guns`,
    tools: `
- Roofing nail gun (coil or strip): Paslode, Bostitch, Senco — set depth per manufacturer
- Roofing hammer: 22oz with hatchet end
- Pry bar/flat bar: For tear-off
- Utility knife: Roofing hook blade (#60 or #65 hook)
- Chalk line reel and chalk
- Tin snips: Aviation-style (left, right, straight cut)
- Tape measure: 25-foot minimum
- Square (speed square, framing square)
- Caulk gun: For sealant and adhesive
- Trowel: For setting membrane flashing
- Heat gun or propane torch: For modified bitumen, TPO heat welds
- Hot-air welder (Leister or equivalent): For TPO/PVC membrane
- Safety railing/warning line system
- Roof jacks (brackets): For steep slopes above 8:12 pitch
- Ladder leveler for uneven ground`,
    terminology: `
- Pitch: Rise over run ratio. 4:12 = 4 inches rise per 12 inches of run. Walkable up to 6:12 without roof jacks; 8:12+ requires safety ropes.
- Low-slope: < 2:12 pitch. Requires different materials (TPO, EPDM, modified bitumen, PVC)
- Steep-slope: > 2:12. Asphalt shingles, tile, metal, wood shake
- Square: 100 square feet of roof material
- Exposure: Visible portion of each shingle course
- Valley: Junction of two sloping roof planes. Open valley (metal) or closed valley (woven/cut)
- Ridge: Highest point of roof where two slopes meet
- Eave: Lower edge of roof overhang
- Rake: Sloping edge of roof at gable end
- Fascia: Vertical board at eave/rafter end
- Soffit: Horizontal underside of eave overhang
- Flashing: Metal or membrane sealing roof penetrations (pipes, chimneys, walls, valleys)
- Step flashing: L-shaped pieces at wall-to-roof intersections
- Ice & Water Shield: Self-adhering waterproof membrane, required in first 24" inside exterior wall and in valleys (IRC R905.2.8)
- Drip edge: Metal flashing at eave and rake edges — required by IRC R905.2.8.5
- OSB vs CDX plywood: Common sheathing materials — OSB susceptible to delamination if wet
- Starter strip: First course at eave — seals tabs and prevents wind uplift
- Hip: Sloping ridge where two sloping roof planes meet at an angle`,
    commonHazards: `
- Falls from height: #1 cause of roofing fatalities. In 2022, 34% of construction fatalities were falls. 6-foot fall can be fatal.
- Falls through fragile surfaces: Skylights, older roofing materials, deteriorated decking
- Struck-by: Tools/materials falling on workers below — establish exclusion zones
- Heat stress: Roofers work in direct sun. Wet bulb globe temperature (WBGT) monitoring recommended above 85°F.
- Cold stress/hypothermia: Wet cold conditions — hypothermia occurs at 50°F with rain/wind
- Nail gun puncture: High incidence — always keep fingers clear of nail path
- Chemical exposure: Solvents (adhesives), asphalt fumes (modified bitumen), spray foam
- Fire: Torch application near combustibles — fire watch for 30+ minutes after torch work
- Electrical: Overhead power lines — maintain 10-foot minimum clearance`,
    permitsAndInspections: `
- Building permit: Required for full reroof in most jurisdictions; check local rules for overlays
- Structural inspection: When decking shows damage or for structural work
- Final inspection: After completion — AHJ verifies code compliance
- Special inspections: Required on commercial projects, wind-uplift rated assemblies
- Manufacturer's inspection: Required to maintain warranty on commercial systems (FM Global approved)`,
  },

  landscaping: {
    name: "Landscaping",
    primaryRegulations: `
- OSHA 29 CFR 1928.51: Rollover Protective Structures (ROPS) for agricultural tractors — also applied to compact tractors used in landscaping.
- OSHA 29 CFR 1910.243: Guarding of portable powered tools — guard requirements for mowers, trimmers, chippers.
- OSHA 29 CFR 1910.215: Abrasive wheel machinery — applicable to grinders, blade sharpeners.
- OSHA Heat Illness Prevention Campaign: Rest, water, shade — first 14 days of heat exposure most dangerous.
- EPA FIFRA (Federal Insecticide, Fungicide, Rodenticide Act): Governs pesticide purchase, use, recordkeeping.
- EPA Restricted-Use Pesticides: Require licensed applicator (Pesticide Applicator License, state-issued).
- ANSI Z133.1: Safety requirements for arboricultural operations (tree work).
- DOT regulations: For trailers/vehicles transporting equipment.
- Noise-Induced Hearing Loss: OSHA 29 CFR 1910.95 — action level 85 dBA, 90 dBA PEL for 8 hours.
- Chainsaw: OSHA recommends EN ISO 11681 compliant chainsaw chaps.`,
    certifications: `
- Pesticide Applicator License (state-issued, required for restricted-use pesticide application)
- ISA Certified Arborist (for tree work)
- OSHA 10-Hour General Industry or Construction
- Irrigation Association Certified Irrigation Technician (CIT)
- NALP Landscape Industry Certified Technician
- CPR/First Aid (recommended for crews working in heat)`,
    ppeRequirements: `
- Eye protection: ANSI Z87.1 rated safety glasses always required; face shield for chipper/stump grinder operation
- Hearing protection: ANSI S3.19 NRR 25+ for all power equipment operation (chainsaws, mowers, trimmers produce 90-106 dBA)
- Chainsaw chaps: ASTM F1818 or ANSI/ISEA 125 Level 1 — wrap-around style preferred; mandatory when operating chainsaw
- Cut-resistant gloves: ANSI/ISEA 105 Level A4 for chainsaw and trimmer work
- Steel-toed boots: ASTM F2413 I/75 C/75; chainsaw-protective footwear (ASTM F1818) for chainsaw operation
- Chemical-resistant gloves and apron: When mixing/applying pesticides or fertilizers — follow SDS and label PPE requirements
- Respirator: N95 minimum for dust (compost, mulch work); half-face respirator with appropriate cartridges for pesticide application
- High-vis vest: ANSI/ISEA 107 Class 2 when working near traffic
- Gloves: Work gloves always; escalate to cut-resistant for sharp tools`,
    tools: `
- Zero-turn mower (ZTR): Check ROPS deployment, seatbelt, operator presence control
- Walk-behind mower: Check blade brake clutch, discharge guard
- String trimmer (STIHL, Echo, Husqvarna): Line selection, guard position
- Chainsaw: Bar length, chain tension, chain brake operation check
- Wood chipper: Feed rate, in-feed chute guard, never push material with hands or feet
- Backpack blower/vacuum: Debris direction control
- Skid steer loader: ROPS, seatbelt, operator manual review before each operator
- Mini excavator/compact excavator: One-call 811 before digging
- Stump grinder: Debris throw zone (50 feet), PPE for operators and bystanders
- Spray equipment: Pump-up sprayers, power sprayers, boom sprayers
- Irrigation tools: Wire locator, pipe pressure tester, manifold kit
- Edger: Guard position, blade condition check`,
    terminology: `
- Hardscaping: Non-living landscape elements (pavers, retaining walls, water features, concrete)
- Softscaping: Living elements (plants, sod, trees, mulch)
- Grading: Establishing slope/elevation — positive drainage away from structures (minimum 6" in 10 feet)
- Topsoil: Top 2-12" of soil — organic matter content critical for plant health
- pH: Soil acidity/alkalinity — most turf/plants prefer 6.0-7.0; affects nutrient availability
- NPK: Nitrogen-Phosphorus-Potassium fertilizer ratio (e.g., 28-0-4 lawn fertilizer)
- Pre-emergent: Herbicide applied before seed germination — timing is critical (soil temp 50-55°F)
- Post-emergent: Herbicide applied to existing weeds — selective vs non-selective
- Drip irrigation: Low GPH emitters, efficient water use — zone pressure 15-30 PSI
- Pop-up spray heads: Higher GPM, 180° or 360° patterns
- Rotor heads: Rotating, cover larger areas, lower PR (precipitation rate)
- ET (Evapotranspiration): Water lost by evaporation + transpiration — irrigation scheduling based on ET
- Aeration: Core or spike aeration to reduce compaction, typically in fall for cool-season, spring for warm-season grass
- Overseeding: Seeding into existing turf for thickening
- Mulching: 2-3" depth, keep away from plant crowns and tree trunk flares`,
    commonHazards: `
- Heat stroke: Core body temp >104°F — OSHA cites heat as cause of ~40 worker deaths/year. Acclimatize workers over 14 days.
- Struck-by (flying debris): Mowers and chippers project debris at high velocity — exclusion zones mandatory
- Rollover (tractors/ZTR): Leading cause of agricultural fatalities — ROPS deployment is mandatory
- Chainsaw injury: Kickback is most common — always hold with two hands, use kickback zone awareness
- Pesticide exposure: Skin absorption, inhalation, eye contact — always read label, follow re-entry intervals
- Electrical contact: Trimmer/chainsaw contact with buried lines, buried utility damage
- Musculoskeletal: Lifting, repetitive motion — use proper mechanics, mechanical assists when available
- Sun exposure: UV radiation — sunscreen SPF 30+, UV-blocking garments recommended
- Insect stings/bites: Worker bee and wasp allergy awareness — EpiPens on site if any worker has known allergy`,
    permitsAndInspections: `
- Pesticide application log: Required by EPA FIFRA — date, location, product, rate, applicator name
- Building/grading permit: Required for significant grading, retaining walls > local height limit
- Irrigation permit: Required in some municipalities
- Tree removal permit: Required in many municipalities for removal of significant trees
- Right-of-way permit: Required for work in public right-of-way
- SWPPP (Stormwater Pollution Prevention Plan): Required on larger disturbed areas`,
  },

  general: {
    name: "General Contracting",
    primaryRegulations: `
- OSHA 29 CFR 1926 (Construction Industry Standards): The primary standard governing all general contracting work.
- OSHA 29 CFR 1926.501-503: Fall protection — mandatory at 6 feet, training required, documentation mandatory.
- OSHA 29 CFR 1926.651-652: Excavation and trenching — protective systems, competent person required.
- OSHA 29 CFR 1926.350: Welding, cutting and brazing — fire watch, hot work permit.
- OSHA 29 CFR 1926.1101: Asbestos — regulated areas, air monitoring, training (ACM in pre-1981 construction).
- OSHA 29 CFR 1926.62: Lead — blood lead monitoring, PEL 50 µg/m³ (action level 30 µg/m³).
- OSHA 29 CFR 1926.1153: Respirable crystalline silica — engineering controls, exposure assessment.
- IBC (International Building Code): Commercial and multi-family construction.
- IRC (International Residential Code): One and two-family dwellings.
- NFPA 241: Safeguarding Construction, Alteration, and Demolition Operations — fire prevention.
- EPA RRP Rule: Renovation, Repair and Painting Rule — lead-safe practices in pre-1978 housing.`,
    certifications: `
- General Contractor license (state-specific — bonding and insurance typically required)
- OSHA 30-Hour Construction
- OSHA 30 Competent Person training (excavation, scaffolding, fall protection)
- EPA Lead Renovator certification (RRP Rule — required for pre-1978 housing disturbing >6 sq ft interior or 20 sq ft exterior paint)
- Asbestos Supervisor certification (if work may disturb ACM)
- First Aid/CPR
- HAZWOPER (if environmental remediation involved)`,
    ppeRequirements: `
- Hard hat: ANSI Z89.1 Type II Class E (electrical areas) or Class C (no electrical) — required on all active job sites
- Safety glasses: ANSI Z87.1 — always on job site
- High-visibility vest: ANSI/ISEA 107 Class 2 on all active construction sites; Class 3 near traffic
- Steel-toed boots: ASTM F2413 I/75 C/75 EH
- Work gloves: Task-specific (leather, cut-resistant, chemical-resistant)
- Hearing protection: NRR 25+ near heavy equipment, jackhammers, nail guns
- Respiratory protection: N95 for general dust; half-face with P100 cartridges for silica and lead dust; supplied-air for confined spaces
- Fall protection harness: When working at or above 6 feet — ANSI Z359.11`,
    tools: `
- Circular saw: Blade guard in place, correct blade for material
- Reciprocating saw: Blade selection for material; no free-hand cutting through walls without utility check
- Angle grinder: Guard in place, correct disc for application; face shield required
- Powder-actuated fastener tool: License/training required in some states; ear and eye protection mandatory
- Excavator/skid steer: Operator training, daily pre-operation inspection, spotter for blind spots
- Concrete saw/core drill: Wet-cutting for silica control; N95 minimum
- Scaffolding: Must be erected by competent person; 4:1 height-to-base ratio; guardrails required > 10 feet
- Ladders: Inspected before each use; 3-point contact; 4:1 angle; extend 3 feet above landing
- Air compressor/pneumatic nailers: OSHA-compliant ASME pressure vessel; PPE per fastener tool
- Measuring tools: Laser level, transit level, total station for layout`,
    terminology: `
- WBS (Work Breakdown Structure): Hierarchical decomposition of project scope into work packages
- RFI (Request for Information): Formal question to architect/engineer for clarification
- Submittal: Shop drawings, product data, samples submitted for approval before procurement
- Change order (CO): Written modification to contract scope, cost, or schedule
- Punch list: List of items to complete/correct before substantial completion
- Substantial completion: Project is sufficiently complete for owner's intended use — certificate issued
- Certificate of Occupancy (CO): Local authority confirms building is safe for occupancy
- Lien waiver: Document releasing right to file mechanic's lien upon payment
- Mechanic's lien: Legal claim against property for unpaid work/materials
- Retainage: Percentage (typically 5-10%) withheld until substantial completion
- Critical path: Sequence of tasks that determines project duration
- AHJ (Authority Having Jurisdiction): Local building official or inspector
- SWPPP: Stormwater Pollution Prevention Plan — required for disturbed areas >1 acre
- JSA (Job Safety Analysis): Pre-task hazard identification and mitigation planning
- Toolbox talk: Brief (5-10 min) daily safety meeting
- Competent person: OSHA designation — person capable of identifying hazards and with authority to take corrective action`,
    commonHazards: `
- The Fatal Four (OSHA): Falls (38.4%), Struck-by (9.4%), Caught-in/between (8.3%), Electrocution (5.9%) — responsible for 60% of construction fatalities
- Falls from ladders, scaffolding, elevated surfaces, floor openings
- Excavation cave-in: Can exert 100+ PSI pressure — soil type determines protective system
- Silica dust: From concrete cutting/drilling — leads to silicosis and lung cancer; OSHA PEL 50 µg/m³ TWA
- Lead dust: Pre-1978 construction; can cause permanent neurological damage
- Asbestos: Pre-1981 construction — mesothelioma risk; requires certified abatement if friable
- Struck-by: Cranes, vehicles, falling tools/materials — exclusion zones and PPE critical
- Heat illness: Progression from heat cramps → heat exhaustion → heat stroke (fatal if untreated)
- Chemical exposure: Solvents, adhesives, sealants, cleaning agents — SDS review mandatory`,
    permitsAndInspections: `
- Building permit: Required for new construction, additions, structural alterations
- Mechanical, electrical, plumbing permits: Sub-trade permits required before sub-trade work
- Grading/earthwork permit: For significant site work
- Demolition permit: Required before demolition, may require asbestos/lead survey first
- Framing inspection: Before covering structural framing
- Rough-in inspections: Electrical, plumbing, mechanical before drywall
- Insulation inspection: Before covering insulation
- Final inspection: Prerequisite for Certificate of Occupancy
- Special inspections: Structural concrete, steel connections, high-strength bolts per IBC Chapter 17`,
  },
};
