window.QUESTION_BANK = [
  {
    "id": "SYS-001",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A regional health network is replacing its referral-management system. Physicians request faster specialist matching, schedulers want fewer duplicate entries, and compliance staff require a complete record of referral decisions. Early interviews reveal that each group uses different definitions of an “urgent” referral. What should the analyst do before finalizing requirements?",
    "options": [
      "Document each department’s preferred workflow separately and allow the development team to reconcile differences during design.",
      "Facilitate a cross-functional requirements session to define shared business rules, resolve conflicting terms, and identify required exceptions.",
      "Prioritize the compliance department’s definition because regulatory stakeholders should determine all workflow terminology.",
      "Build the referral interface around the physician workflow first, then refine scheduling and compliance needs during acceptance testing."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Elicitation",
      "Stakeholder",
      "Analysis"
    ],
    "reference": "Systems Analysis; Requirements Gathering"
  },
  {
    "id": "SYS-002",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A financial-services company is redesigning its customer portal. Stakeholders require customers to view account balances, submit service requests, and download statements. They also require the portal to remain available during peak hours and display requested account information within three seconds. Which statement BEST classifies these requirements?",
    "options": [
      "Account access and response time are both functional requirements because each describes a user-facing system capability.",
      "Account access is nonfunctional because it describes a service quality expectation rather than a technical process.",
      "Viewing balances and submitting requests are functional requirements, while availability and response time are nonfunctional requirements.",
      "Availability is a stakeholder requirement, while response time is an implementation requirement that belongs only in physical design."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Functional",
      "vs.",
      "Nonfunctional",
      "Requirements"
    ],
    "reference": "Systems Analysis; Requirements Specification"
  },
  {
    "id": "SYS-003",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A warehouse manager states that all outbound shipments are scanned, verified, and approved before loading. During observation, an analyst finds that employees skip verification during late-afternoon rush periods because the process creates a bottleneck. Which interpretation is MOST appropriate?",
    "options": [
      "The observed exception should be analyzed because actual workflow behavior may reveal an undocumented requirement, control weakness, or process inefficiency.",
      "The official procedure should be treated as the complete requirement because documented processes are more reliable than temporary employee behavior.",
      "The analyst should remove the verification step immediately because repeated bypassing proves that it provides no business value.",
      "The observed behavior should be excluded from analysis because informal workarounds are outside the scope of system requirements."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Observation",
      "Workflow",
      "Analysis"
    ],
    "reference": "Requirements Gathering; Business Process Analysis"
  },
  {
    "id": "SYS-004",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "In a data flow diagram, which component represents a person, department, organization, or external system that sends data to or receives data from the system being modeled?",
    "options": [
      "Data store",
      "Process",
      "Data flow",
      "External entity"
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Data",
      "Flow",
      "Diagrams"
    ],
    "reference": "Structured Analysis; Data Flow Diagram Components"
  },
  {
    "id": "SYS-005",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturer has funding for a production-planning system and confirms that its existing infrastructure can support the new software. Supervisors, however, believe the system will reduce their discretion in assigning work and have begun encouraging employees to continue using spreadsheets. Which issue presents the greatest feasibility concern?",
    "options": [
      "Technical feasibility, because supervisors may not have the skills needed to operate the proposed software environment.",
      "Organizational feasibility, because adoption depends on stakeholder acceptance, workflow fit, and readiness to change.",
      "Financial feasibility, because resistance may increase costs enough to make the project economically unsound.",
      "Schedule feasibility, because implementation should be postponed until all supervisors agree on the preferred workflow."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Feasibility",
      "Analysis",
      "Organizational",
      "Feasibility"
    ],
    "reference": "Feasibility Study; Organizational Change"
  },
  {
    "id": "SYS-006",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team delivers an insurance-claims application that matches the approved specifications and passes integration testing. During pilot use, adjusters report that routine claims require several additional screens and cannot be completed within expected service-time targets. Which conclusion BEST describes the result?",
    "options": [
      "Verification failed because the application did not conform to its approved technical specifications.",
      "Organizational feasibility failed because pilot users disagreed with the application’s workflow.",
      "Verification may have succeeded, but validation identified that the system does not adequately support real user needs.",
      "Financial feasibility failed because inefficient workflows will eventually increase operating costs."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Validation",
      "vs.",
      "Verification"
    ],
    "reference": "Systems Testing; User Acceptance Testing"
  },
  {
    "id": "SYS-007",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Executives want a high-level view of a new payroll system before reviewing detailed process models. They want to see the payroll system as a single unit, identify outside entities such as employees and tax agencies, and understand the major information exchanged with each. Which artifact BEST meets this need?",
    "options": [
      "A context diagram representing the system boundary and its primary external data flows.",
      "A Level-2 data flow diagram identifying internal payroll calculations, data stores, and exception-handling processes.",
      "An entity relationship diagram showing employee, payroll, deduction, and tax-reporting entities with cardinality.",
      "A UML class diagram describing payroll objects, their methods, and inheritance relationships."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Context",
      "Diagram"
    ],
    "reference": "Structured Analysis; Context Diagrams"
  },
  {
    "id": "SYS-008",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A university is building a student-advising portal. Advisors can identify the information they need but cannot agree on the most effective navigation flow, screen layout, or alert presentation. They believe they would provide better feedback after interacting with an early version. Which approach is MOST appropriate?",
    "options": [
      "Complete the data model before discussing user-interface needs because screen design should follow database development.",
      "Require advisors to submit final interface specifications before development so scope changes can be avoided.",
      "Implement the full portal first and collect feedback after users have adapted to the completed workflow.",
      "Develop an interactive prototype that enables advisors to evaluate and refine interface assumptions before final design."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Prototyping"
    ],
    "reference": "Alternative Development Approaches; Prototyping"
  },
  {
    "id": "SYS-009",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Midway through development of a customer-support platform, marketing requests a loyalty-program feature that was not part of the approved project scope. The feature may be useful, but it would require additional integrations and delay the planned launch. What should the project manager do FIRST?",
    "options": [
      "Add the feature because customer-facing functionality generally produces greater business value than internal workflow improvements.",
      "Evaluate the request through formal change control, including its business value, technical impact, schedule effect, and resource requirements.",
      "Reject the request because requirements approved during analysis should not be modified once development begins.",
      "Move the feature directly into maintenance planning because requests made after design should never affect active development."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Scope",
      "Management",
      "Change",
      "Control"
    ],
    "reference": "Requirements Management; Systems Proposal"
  },
  {
    "id": "SYS-010",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst documents that an order-management system must capture customer details, validate available inventory, route high-value orders for approval, and generate fulfillment notifications. The documentation does not identify database software, hosting platforms, programming languages, or network components. What has the analyst MOST likely produced?",
    "options": [
      "A physical design defining the technical environment needed to construct and deploy the system.",
      "A feasibility study comparing alternative technologies and estimating their organizational and financial effects.",
      "A logical design describing required processes, business rules, inputs, and outputs independently of implementation technology.",
      "A maintenance plan identifying expected corrective, adaptive, and perfective changes after deployment."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Logical",
      "vs.",
      "Physical",
      "Design"
    ],
    "reference": "Systems Design; Logical Design"
  },
  {
    "id": "SYS-011",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A purchasing application requires users to enter a supplier identification number before submitting a purchase request. The system checks that the number contains the required number of digits, exists in the supplier database, and is active for the requesting department. What is the PRIMARY purpose of these checks?",
    "options": [
      "To prevent invalid or unauthorized data from entering the transaction process and affecting downstream records.",
      "To ensure that every purchase request is approved by the supplier before internal processing begins.",
      "To verify that the procurement system was developed according to the original technical design specification.",
      "To establish that the organization has sufficient infrastructure to support the purchasing workflow."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Input",
      "Controls",
      "Data",
      "Integrity"
    ],
    "reference": "System Controls; Input Validation"
  },
  {
    "id": "SYS-012",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hospital activates a replacement patient-registration system at one outpatient clinic, monitors its performance for several weeks, and addresses workflow issues before expanding the system to all remaining clinics. Which conversion strategy is being used?",
    "options": [
      "Parallel conversion",
      "Direct conversion",
      "Phased conversion",
      "Pilot conversion"
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Conversion",
      "Strategies"
    ],
    "reference": "System Implementation; Conversion Approaches"
  },
  {
    "id": "SYS-013",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer’s database design must reflect that one customer may place many orders over time, while each individual order is associated with one customer. Which relationship should be represented between the Customer and Order entities?",
    "options": [
      "A one-to-one relationship, because each order identifies only one customer account.",
      "A one-to-many relationship from Customer to Order, because a customer may be associated with multiple orders.",
      "A many-to-many relationship, because customers can purchase multiple products through multiple transactions.",
      "A recursive relationship, because one order may contain several line items belonging to the same transaction."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Entity",
      "Relationship",
      "Diagrams",
      "Cardinality"
    ],
    "reference": "Data Modeling; Entity Relationship Diagrams"
  },
  {
    "id": "SYS-014",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A payroll application has passed unit, integration, and system testing. Before organization-wide deployment, payroll specialists process realistic pay periods, examine exception reports, and test unusual circumstances such as retroactive wage adjustments. What is the PRIMARY purpose of this activity?",
    "options": [
      "To determine whether the selected infrastructure can support production-level network and storage requirements.",
      "To confirm that each individual software module conforms to coding standards established during development.",
      "To validate that the completed system supports real operational requirements under representative business conditions.",
      "To compare outputs from the replacement system and legacy system during a parallel conversion period."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "User",
      "Acceptance",
      "Testing"
    ],
    "reference": "Testing and Implementation; Validation"
  },
  {
    "id": "SYS-015",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Nine months after deploying a new claims-processing system, executives compare actual cycle-time reduction, error rates, user productivity, and operating costs with estimates used to justify the project. What question are they primarily attempting to answer?",
    "options": [
      "Whether the system delivered the intended business benefits and what lessons should inform future projects.",
      "Whether the original system requirements were complete before the team began developing the physical design.",
      "Whether all application modules continue to conform to programming standards established during testing.",
      "Whether the organization should restart feasibility analysis before entering the system-maintenance phase."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Benefits",
      "Realization"
    ],
    "reference": "System Evaluation; Maintenance"
  },
  {
    "id": "SYS-016",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A county government is replacing its permit-tracking system. Planning staff, inspectors, clerks, and IT personnel use different definitions of permit status and disagree about which exceptions require escalation. Management wants a structured method for resolving disagreements quickly while producing a shared, documented set of requirements. Which approach is MOST appropriate?",
    "options": [
      "Conduct separate interviews with each department, then allow developers to reconcile conflicting terms while preparing the physical design.",
      "Survey all county employees and select the requirements most frequently requested, regardless of how responsibilities differ across departments.",
      "Use a facilitated joint application design session to define common terminology, resolve conflicts, and document agreed business rules.",
      "Build a prototype based on the inspectors’ workflow because inspection decisions represent the highest-risk portion of the permit process."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Joint",
      "Application",
      "Design",
      "Requirements",
      "Reconciliation"
    ],
    "reference": "Requirements Gathering; Stakeholder Collaboration"
  },
  {
    "id": "SYS-017",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A developer joins a retail-ordering project and needs to determine whether the field SHIPMENT_STATUS accepts abbreviations, which values are valid, what its maximum length is, and which process updates it. Which project artifact should the developer consult FIRST?",
    "options": [
      "A data dictionary containing field definitions, formats, allowable values, sources, and business usage rules.",
      "A context diagram showing the ordering system boundary and the external entities that exchange shipping information.",
      "A use-case model identifying the major functions available to customers, warehouse staff, and fulfillment managers.",
      "A project schedule listing planned development milestones, testing dates, staffing assignments, and implementation dependencies."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Dictionary",
      "Metadata"
    ],
    "reference": "System Design Documentation; Data Definitions"
  },
  {
    "id": "SYS-018",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A distributor needs a replacement returns-processing application within four months because its current vendor will discontinue support. The organization can dedicate experienced users and developers full-time, requirements are reasonably well understood, and management accepts the use of reusable components and development tools. Which approach is MOST suitable?",
    "options": [
      "A traditional life-cycle approach emphasizing complete documentation and formal approval before each development phase begins.",
      "A direct conversion approach that focuses primarily on the timing of implementation rather than the method used to develop the system.",
      "A parallel-development approach in which all major modules are built independently and integrated only near the planned deployment date.",
      "A rapid application development approach using intensive user participation, reusable components, and compressed development cycles."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Rapid",
      "Application",
      "Development",
      "Time",
      "Constraints"
    ],
    "reference": "Alternative Development Approaches; Rapid Application Development"
  },
  {
    "id": "SYS-019",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturer has completed preliminary analysis of a new maintenance-management system. Executives ask for a decision document that compares building custom software, purchasing a package, and outsourcing the platform. They want projected benefits, costs, risks, implementation implications, and a recommendation. What should the analyst prepare?",
    "options": [
      "A test plan describing the scenarios, expected results, and acceptance criteria used after software development is complete.",
      "A systems proposal comparing feasible alternatives and recommending the option that best supports organizational objectives.",
      "A data dictionary defining the field formats, ranges, and relationships required by the preferred database design.",
      "A project charter that identifies the project sponsor, initial objectives, and governance structure before detailed analysis begins."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Systems",
      "Proposal",
      "Alternative",
      "Evaluation"
    ],
    "reference": "Feasibility Study; Systems Proposal"
  },
  {
    "id": "SYS-020",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A mid-sized distributor needs a warehouse-management system. Its workflows mostly follow industry standards, but it needs limited customization for regional reports and integration with an existing accounting platform. The company wants to reduce implementation time while preserving flexibility for genuine business differences. Which strategy is MOST appropriate?",
    "options": [
      "Build the full system internally because any customization requirement makes commercial software unsuitable for operational use.",
      "Continue using spreadsheets until the company can fund a custom system designed around every existing warehouse procedure.",
      "Evaluate configurable commercial packages first, then use limited customization or integration work to address documented gaps.",
      "Outsource all warehouse operations because internally managed accounting systems cannot exchange information with vendor-hosted applications."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Build",
      "vs.",
      "Buy",
      "Application",
      "Packages"
    ],
    "reference": "Alternative Systems-Building Approaches; Application Software Packages"
  },
  {
    "id": "SYS-021",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer contracts with a vendor to host and enhance its customer-loyalty platform. The vendor will process customer profiles, maintain integrations, and develop requested features. Before signing the agreement, which action would MOST directly reduce the risk of losing control over essential information-system capabilities?",
    "options": [
      "Require the vendor to use the retailer’s preferred interface design so internal users experience fewer visual changes after implementation.",
      "Allow the vendor to determine system requirements because it has greater technical expertise in loyalty-program platforms.",
      "Limit stakeholder involvement after contracting because vendor-managed applications require fewer internal governance activities.",
      "Establish contractual terms for data ownership, service levels, security responsibilities, performance measures, and transition support."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Outsourcing",
      "Vendor",
      "Governance"
    ],
    "reference": "Outsourcing; Information-System Governance"
  },
  {
    "id": "SYS-022",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team has tested reservation, payment, and notification modules independently. The next concern is whether successful payment authorization correctly updates the reservation record and triggers the appropriate customer message. Which testing activity should occur NEXT?",
    "options": [
      "Integration testing to determine whether separately tested modules exchange data and operate correctly as a combined workflow.",
      "Unit testing to confirm that each method within the reservation, payment, and notification modules satisfies its detailed design rules.",
      "User acceptance testing to determine whether representative employees believe the complete application supports daily business needs.",
      "Post-implementation evaluation to compare actual benefits and costs with the estimates used to approve the project."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Testing",
      "Integration",
      "Testing"
    ],
    "reference": "Systems Testing; Implementation"
  },
  {
    "id": "SYS-023",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst decomposes a context diagram for an online ordering system into a Level-1 data flow diagram. The context diagram shows Customer Order as an incoming data flow, but no Level-1 process receives that flow or shows how it enters the system. Which issue is MOST likely present?",
    "options": [
      "The database has not been normalized because order information should be stored in one relation before appearing in any process.",
      "The diagrams are unbalanced because external data flows shown at the higher level should be accounted for in the decomposition.",
      "The system boundary is too broad because a context diagram should show internal processes rather than external entities.",
      "The data dictionary is incomplete because Level-1 diagrams should omit all information received from external systems."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Balancing"
    ],
    "reference": "Structured Analysis; Data Flow Diagram Decomposition"
  },
  {
    "id": "SYS-024",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A purchasing system generates a daily report listing transactions that exceed approval limits, lack supplier tax information, or were approved outside standard business hours. Department managers review the report and investigate unusual items before payment is released. What is the PRIMARY role of this report?",
    "options": [
      "It functions as a conversion control by comparing purchasing results from the legacy system and replacement system.",
      "It functions as an input control by preventing incomplete purchase requests from entering the purchasing workflow.",
      "It functions as an output control by highlighting exceptions that require management review and follow-up.",
      "It functions as a feasibility control by estimating whether purchasing activities can operate within approved budget limits."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Exception",
      "Reports",
      "Output",
      "Controls"
    ],
    "reference": "System Controls; Output Controls"
  },
  {
    "id": "SYS-025",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "After implementation of a payroll system, developers correct an intermittent overtime-calculation defect. Several months later, they revise tax-withholding logic to comply with a new state tax law. Which classification is MOST accurate?",
    "options": [
      "The overtime correction is adaptive maintenance, while the tax-law revision is corrective maintenance.",
      "Both changes are perfective maintenance because each increases the usefulness of an already functioning system.",
      "Both changes are preventive maintenance because each reduces the likelihood of future operational disruption.",
      "The overtime correction is corrective maintenance, while the tax-law revision is adaptive maintenance."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Corrective",
      "vs.",
      "Adaptive",
      "Maintenance"
    ],
    "reference": "System Maintenance; Types of Maintenance"
  },
  {
    "id": "SYS-026",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A transportation application passes technical testing and generates mathematically accurate bus routes. Before district-wide rollout, bus coordinators identify a common situation involving students who temporarily require specialized transportation that the system cannot accommodate. Which action would MOST directly improve validation?",
    "options": [
      "Repeat verification testing to confirm that route-generation logic matches the approved technical design specification.",
      "Expand representative user scenarios to include recurring operational exceptions and assess whether the system supports real work needs.",
      "Conduct a new technical feasibility study to determine whether buses and drivers can reliably access the application network.",
      "Use phased conversion so system functions are introduced in sequence before users evaluate the completed workflow."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "User",
      "Acceptance",
      "Testing",
      "Validation"
    ],
    "reference": "Testing and Implementation; Validation"
  },
  {
    "id": "SYS-027",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Which UML artifact is designed to represent classes, their attributes, operations, and relationships such as inheritance or association?",
    "options": [
      "Class diagram",
      "Use-case diagram",
      "Context diagram",
      "Data flow diagram"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Class",
      "Diagrams"
    ],
    "reference": "Object-Oriented Analysis and Design; UML"
  },
  {
    "id": "SYS-028",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hotel chain plans to retire its legacy reservation system at midnight on a low-demand weekend and begin using the replacement application immediately. Management accepts that no simultaneous output comparison will be available and has prepared contingency procedures in case major problems occur. Which conversion strategy is being used?",
    "options": [
      "Pilot conversion, because the new application is first introduced at one selected hotel before organization-wide deployment.",
      "Parallel conversion, because the old and new applications operate simultaneously until outputs have been verified.",
      "Direct conversion, because the organization transitions from the old system to the new system at a defined cutover time.",
      "Phased conversion, because individual reservation functions are introduced in planned increments across the organization."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Direct",
      "Conversion",
      "Implementation",
      "Risk"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-029",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A human-resources application functions correctly and complies with all current policies, but employees request a redesigned benefits-enrollment dashboard that reduces the number of screens required for common tasks. Which type of maintenance is MOST accurately represented?",
    "options": [
      "Corrective maintenance, because redesigning interface screens repairs an error in the original application logic.",
      "Perfective maintenance, because the requested change improves usability or performance without correcting a defect.",
      "Adaptive maintenance, because employee preferences represent an external environmental change requiring system compliance.",
      "Preventive maintenance, because the redesigned dashboard is intended primarily to reduce the probability of future technical failures."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Perfective",
      "Maintenance",
      "Usability"
    ],
    "reference": "System Maintenance; Perfective Maintenance"
  },
  {
    "id": "SYS-030",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Nine months after deploying a claims-processing system, executives compare actual cycle-time reduction, error rates, user productivity, and operating costs with the original estimates used to approve the project. What question are they primarily attempting to answer?",
    "options": [
      "Whether the original requirements were sufficiently detailed before the team began creating physical design specifications.",
      "Whether each module continues to follow internal coding standards established during unit and integration testing.",
      "Whether the legacy claims system should remain operational for continued comparison with the replacement application.",
      "Whether the system achieved expected organizational benefits and what lessons should guide future project decisions."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Benefits",
      "Realization"
    ],
    "reference": "System Evaluation; Project Review"
  },
  {
    "id": "SYS-031",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A claims-processing team states during interviews that every complex claim is reviewed by a supervisor before payment is released. An analyst observing the process finds that experienced adjusters frequently bypass review when deadlines are tight, using an informal message to notify supervisors later. What should the analyst do FIRST?",
    "options": [
      "Treat the written procedure as definitive because informal practices should not influence formal system requirements.",
      "Investigate why the workaround occurs and determine whether it reflects a legitimate exception, control weakness, or process bottleneck.",
      "Remove supervisor review from the proposed system because the observed practice demonstrates that approval is unnecessary.",
      "Require all adjusters to follow the documented procedure before continuing requirements analysis of the claims workflow."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Elicitation",
      "Interviews",
      "vs.",
      "Observation"
    ],
    "reference": "Requirements Gathering; Workflow Analysis"
  },
  {
    "id": "SYS-032",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturer selects a production-scheduling application that meets technical and budget requirements. During pilot testing, supervisors report that the system assigns work in a sequence that conflicts with established safety inspections and union work rules. Which concern is MOST directly raised?",
    "options": [
      "Technical feasibility, because the application may need more servers to calculate schedules at production scale.",
      "Financial feasibility, because adapting scheduling rules could increase project costs beyond the original estimate.",
      "Schedule feasibility, because the rollout should be delayed until all production teams complete additional training.",
      "Operational feasibility, because the proposed solution may not fit required work practices and organizational procedures."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Operational",
      "Feasibility",
      "Business",
      "Process",
      "Fit"
    ],
    "reference": "Feasibility Analysis; Organizational Change"
  },
  {
    "id": "SYS-033",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst creates a Level-1 data flow diagram for an online order system. The diagram separates the high-level “Process Order” activity into Validate Payment, Check Inventory, Create Shipment, and Update Customer Account. What is the PRIMARY purpose of this decomposition?",
    "options": [
      "To show the major internal processes that transform data while retaining the system’s higher-level information flows.",
      "To identify physical database tables and establish the primary and foreign keys needed for order management.",
      "To document the software classes, methods, and inheritance structures required during object-oriented programming.",
      "To define the implementation schedule and dependencies for completing individual development modules."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Process",
      "Decomposition"
    ],
    "reference": "Structured Analysis; Data Flow Diagrams"
  },
  {
    "id": "SYS-034",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A university database must represent that students can enroll in many courses and each course can include many students. The system must also record the semester, grade, and enrollment status for every individual student-course pairing. Which design is MOST appropriate?",
    "options": [
      "Add CourseID directly to the Student entity because one student can enroll in multiple courses during a semester.",
      "Add StudentID directly to the Course entity because each course is associated with a roster of enrolled students.",
      "Create an Enrollment associative entity that links Student and Course while storing attributes specific to each enrollment.",
      "Create separate StudentCourse and CourseStudent entities so each direction of the relationship can be managed independently."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Entity",
      "Relationship",
      "Diagrams",
      "Associative",
      "Entities"
    ],
    "reference": "Data Modeling; Entity Relationship Diagrams"
  },
  {
    "id": "SYS-035",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hospital is selecting features for a new patient-portal release. The team identifies appointment scheduling, secure messaging, bill payment, and a wellness-content library. Budget limits make it impossible to include all four in the initial release. Which approach BEST supports a defensible prioritization decision?",
    "options": [
      "Select features requested most often by users because frequency of requests is the sole measure of business importance.",
      "Classify requirements by necessity, value, risk, dependency, and regulatory impact before agreeing on release scope with stakeholders.",
      "Include all features in the design specification, then allow developers to defer lower-priority functions if implementation becomes difficult.",
      "Implement only the lowest-complexity features first because rapid delivery is more important than the operational value of a feature."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Prioritization",
      "MoSCoW",
      "Analysis"
    ],
    "reference": "Requirements Management; Project Scope"
  },
  {
    "id": "SYS-036",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A city is developing an online permit application. Users agree on required information but differ on whether applicants should complete one long form or a guided sequence of shorter steps. The design team wants feedback before investing in full development. Which action is MOST appropriate?",
    "options": [
      "Finalize the screen flow using the process preferred by senior management because consistency reduces later design changes.",
      "Build database tables first because interface choices should be made only after storage structures are technically complete.",
      "Use a survey asking applicants to choose between written descriptions of the two workflow alternatives.",
      "Develop a limited interactive prototype that lets representative applicants attempt each workflow and provide targeted feedback."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Prototyping",
      "Requirements",
      "Validation"
    ],
    "reference": "Alternative Development Approaches; Prototyping"
  },
  {
    "id": "SYS-037",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer is evaluating a new fraud-detection system. The proposal estimates software licensing, implementation, training, and support costs, along with expected reductions in fraudulent refunds and chargebacks. Which analysis is MOST directly being performed?",
    "options": [
      "Requirements traceability, linking proposed system functions to stakeholder needs and approved business requirements.",
      "Technical feasibility, determining whether the company’s existing infrastructure can run the fraud-detection platform.",
      "Cost-benefit analysis, comparing expected financial and operational gains against total project and operating costs.",
      "User acceptance testing, confirming that front-line employees can successfully complete fraud-review scenarios."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Systems",
      "Proposal",
      "Cost-Benefit",
      "Analysis"
    ],
    "reference": "Feasibility Study; Systems Proposal"
  },
  {
    "id": "SYS-038",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team prepares test cases that compare completed software functions against the approved design specification. The test cases verify that each required calculation, validation rule, and report has been implemented as documented. Which question are the team’s tests primarily intended to answer?",
    "options": [
      "Was the system built according to its approved specifications?",
      "Does the completed system fully support all real-world user needs and operational exceptions?",
      "Will employees accept the organizational changes required by the new workflow after implementation?",
      "Does the project continue to provide sufficient benefits to justify its planned operating costs?"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Verification",
      "Test",
      "Planning"
    ],
    "reference": "Systems Testing; Verification"
  },
  {
    "id": "SYS-039",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A utility company is replacing its billing platform but cannot tolerate inaccurate invoices. For two billing cycles, it plans to calculate customer charges using both the old and new systems and investigate material differences before retiring the legacy application. Which trade-off is MOST characteristic of this strategy?",
    "options": [
      "It reduces transition costs by eliminating duplicate processing and minimizing employee training requirements.",
      "It lowers operational risk through output comparison, but requires additional time, staffing, and duplicate system operation.",
      "It allows rollout at one representative location before broader deployment, limiting exposure to local implementation issues.",
      "It enables each billing function to be introduced separately, allowing customers to adapt gradually to incremental changes."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Parallel",
      "Conversion",
      "Risk",
      "Mitigation"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-040",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A software team releases a working version of an expense-management application every three weeks. After each release, finance staff review completed features, identify new compliance priorities, and revise the order of remaining work. Which characteristic MOST clearly distinguishes this approach from a traditional sequential life cycle?",
    "options": [
      "Requirements are documented before development begins, allowing design and testing work to be completed in defined stages.",
      "Implementation occurs at a single planned cutover date after every module has been completed and tested.",
      "Working functionality is delivered in short cycles, with priorities adjusted based on feedback and changing business needs.",
      "Systems analysts avoid involving end users until the complete application is available for final acceptance testing."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Agile",
      "Development",
      "Iterative",
      "Delivery"
    ],
    "reference": "Agile Development; Product Backlog"
  },
  {
    "id": "SYS-041",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A company introduces a new procurement application that changes approval responsibilities for department managers. The application works technically, but employees continue using email and spreadsheets because they do not understand the new process or believe the system adds value. Which intervention is MOST likely to improve adoption?",
    "options": [
      "Increase hardware capacity so the application can process a larger number of purchase requests during peak periods.",
      "Conduct another financial feasibility analysis to determine whether the project’s estimated savings remain achievable.",
      "Remove workflow controls from the application so users can continue working through familiar informal processes.",
      "Combine targeted training, leadership communication, user involvement, and feedback channels throughout the transition."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Change",
      "Management",
      "Stakeholder",
      "Engagement"
    ],
    "reference": "Organizational Feasibility; System Implementation"
  },
  {
    "id": "SYS-042",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Which artifact is MOST useful for documenting a data element’s business meaning, data type, permitted values, length, source, and the processes that create or update it?",
    "options": [
      "Data dictionary",
      "Context diagram",
      "Gantt chart",
      "Use-case diagram"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Data",
      "Dictionary"
    ],
    "reference": "System Design Documentation; Metadata"
  },
  {
    "id": "SYS-043",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hotel chain schedules a midnight cutover from its legacy reservation system to a replacement platform. Management selects the approach because operating both systems would be too costly, but it prepares backup procedures and a rollback plan in case serious failures occur. Which statement BEST describes this decision?",
    "options": [
      "It is a pilot conversion because the new system will initially operate during a limited time window before broader use.",
      "It is a direct conversion that offers a fast transition but requires strong contingency planning because risk is concentrated at cutover.",
      "It is a parallel conversion because rollback procedures allow the legacy system to resume operations after an issue is identified.",
      "It is a phased conversion because reservation functionality will be transitioned at a specific time rather than over several weeks."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Direct",
      "Conversion",
      "Contingency",
      "Planning"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-044",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A customer-service application functions correctly but becomes slow during seasonal demand peaks. Developers modify query logic, add indexing, and optimize report generation without changing business rules or correcting an existing defect. Which type of maintenance is MOST accurately represented?",
    "options": [
      "Corrective maintenance, because the system’s slow response constitutes an error that violates its original functional specification.",
      "Adaptive maintenance, because performance problems arise from an external change in the organization’s regulatory environment.",
      "Perfective maintenance, because the changes improve system performance and user experience beyond its existing operation.",
      "Preventive maintenance, because the changes are limited to backups and security controls that reduce the risk of future system failure."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Perfective",
      "Maintenance",
      "Performance",
      "Improvement"
    ],
    "reference": "System Maintenance; Maintenance Types"
  },
  {
    "id": "SYS-045",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "After deploying a new inventory system, project leaders review actual costs, schedule performance, user adoption, error rates, and realized business benefits. They also document what worked well and what should change in future projects. Which purpose BEST describes this activity?",
    "options": [
      "To repeat requirements analysis and replace the business rules approved before the system was designed.",
      "To perform unit testing on each inventory module using the technical specifications created during development.",
      "To determine whether the organization should revert to parallel conversion before beginning maintenance activities.",
      "To assess project outcomes against objectives and capture lessons that improve future system-development efforts."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Lessons",
      "Learned"
    ],
    "reference": "System Evaluation; Project Management"
  },
  {
    "id": "SYS-046",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "During design of a claims-management system, a developer questions why a complex exception-routing feature is included. The project manager locates an approved requirement from the compliance department, the corresponding workflow rule, and the design component that implements it. Which practice is MOST directly demonstrated?",
    "options": [
      "Version control, because the project maintains separate copies of requirements and design documents over time.",
      "Requirements traceability, because approved business needs are linked to design decisions and implemented functionality.",
      "Configuration management, because system components are grouped according to technical dependencies and release schedules.",
      "Feasibility analysis, because the project is confirming that compliance functions can be supported by available technology."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Traceability",
      "Scope",
      "Control"
    ],
    "reference": "Requirements Management; Systems Analysis"
  },
  {
    "id": "SYS-047",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A lender’s approval process depends on four conditions: credit score, debt-to-income ratio, collateral status, and requested loan amount. Analysts must document every valid combination of conditions and the resulting approval, denial, or escalation action. Which artifact would BEST support this requirement?",
    "options": [
      "A context diagram showing the lender, applicant, credit bureau, and major information exchanges.",
      "A data dictionary listing field definitions, valid ranges, and ownership for loan-application data.",
      "A use-case diagram showing how applicants and loan officers interact with the approval system.",
      "A decision table mapping combinations of conditions to the appropriate processing outcome."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Decision",
      "Tables",
      "Business",
      "Rules"
    ],
    "reference": "Structured Analysis; Decision Logic"
  },
  {
    "id": "SYS-048",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A systems analyst documents an online returns process. A process labeled “Authorize Return” receives return information from a customer, retrieves purchase details from the Order History store, and sends an authorization result to the fulfillment department. Which statement BEST describes the role of Order History?",
    "options": [
      "It is a data store because the process retrieves persisted information needed to evaluate the return request.",
      "It is an external entity because it sends historical order information into the returns-management system.",
      "It is a process because it transforms return information into a completed authorization decision.",
      "It is a control because it prevents customers from submitting returns without a valid order number."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Data",
      "Stores"
    ],
    "reference": "Structured Analysis; Data Flow Diagram Components"
  },
  {
    "id": "SYS-049",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A university finds that reimbursement requests are entered into two separate systems, printed for manual signatures, and then re-entered by accounting staff. Management wants to reduce delays and duplicate work but does not intend to alter department responsibilities or fundamentally redesign the reimbursement model. Which recommendation BEST fits this objective?",
    "options": [
      "Replace the reimbursement process with a third-party financial-service provider that handles all approvals and payments.",
      "Eliminate all approval steps because duplicated entry suggests the current controls no longer provide business value.",
      "Streamline redundant activities and integrate data capture while preserving the essential reimbursement workflow and responsibilities.",
      "Reorganize reimbursement around cross-functional teams that manage each request from submission through payment."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Process",
      "Rationalization",
      "Workflow",
      "Improvement"
    ],
    "reference": "Business Process Improvement; Systems Analysis"
  },
  {
    "id": "SYS-050",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer must implement a replacement point-of-sale system before a contractual support agreement for its legacy system expires in six months. The proposed system is affordable and technically compatible, but preliminary estimates indicate customization and employee training may require nine months. Which concern should receive the closest attention?",
    "options": [
      "Technical feasibility, because the organization must confirm that point-of-sale terminals can exchange data with the new application.",
      "Schedule feasibility, because the required implementation timeline may not be achievable within the available deadline.",
      "Organizational feasibility, because cashiers may prefer familiar screens and initially resist new transaction procedures.",
      "Operational feasibility, because the system must support refunds, promotions, and inventory updates during daily store operations."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Schedule",
      "Feasibility",
      "Project",
      "Constraints"
    ],
    "reference": "Feasibility Analysis; Project Planning"
  },
  {
    "id": "SYS-051",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A mobile banking application has several use cases, including Transfer Funds, Pay Bill, and Deposit Check. Each of these functions requires the user to complete identity verification before the transaction proceeds. The analyst wants to show that this common behavior is reused by multiple use cases. Which modeling approach is MOST appropriate?",
    "options": [
      "Create a separate external entity for Identity Verification because it exchanges authentication information with every transaction process.",
      "Add identity-verification attributes to each user object because shared behavior should be represented as stored account data.",
      "Use an inheritance relationship so each transaction use case becomes a subclass of the Identity Verification use case.",
      "Model Identity Verification as an included use case that is invoked by each transaction requiring authentication."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Use-Case",
      "Relationships",
      "Include",
      "Behavior"
    ],
    "reference": "UML; Use-Case Modeling"
  },
  {
    "id": "SYS-052",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Before finalizing requirements for a procurement system, analysts conduct a structured walkthrough with purchasing staff, finance managers, and compliance personnel. Participants review process diagrams, business rules, exception paths, and sample scenarios to identify omissions or misunderstandings. What is the PRIMARY purpose of this activity?",
    "options": [
      "To validate that documented requirements accurately reflect stakeholder needs before detailed system design begins.",
      "To verify that developers have implemented all required functions according to approved technical specifications.",
      "To select the final conversion strategy by comparing implementation risks across pilot, direct, and phased deployment.",
      "To determine whether the organization has enough infrastructure capacity to operate the completed procurement application."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Requirements",
      "Validation",
      "Walkthroughs"
    ],
    "reference": "Requirements Analysis; Stakeholder Review"
  },
  {
    "id": "SYS-053",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A purchasing system allows department managers to submit purchase requests, procurement staff to approve vendor selection, and accounts-payable staff to release payment. No employee should be able to perform all three actions for the same transaction. Which control objective is MOST directly supported?",
    "options": [
      "Data redundancy reduction, because each transaction is entered by multiple departments using separate records.",
      "Output validation, because payment reports are reviewed after transactions are processed.",
      "Segregation of duties, because key responsibilities are distributed to reduce the opportunity for error or fraud.",
      "Recovery planning, because approval and payment information can be reconstructed if the system fails."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Logical",
      "Controls",
      "Segregation",
      "of",
      "Duties"
    ],
    "reference": "System Controls; Internal Controls"
  },
  {
    "id": "SYS-054",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team needs to document the time-ordered interactions that occur when a customer submits an online order: the website validates the cart, contacts the payment service, updates inventory, and sends confirmation. Which UML artifact is MOST appropriate?",
    "options": [
      "A class diagram showing the attributes and methods associated with Customer, Order, Payment, and Inventory classes.",
      "A sequence diagram showing the ordered messages exchanged among objects or system components during the transaction.",
      "A use-case diagram identifying actors and the high-level business functions available to each actor.",
      "A deployment diagram identifying the servers, network devices, and runtime environments supporting the application."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "System",
      "Sequence",
      "Diagrams",
      "Interactions"
    ],
    "reference": "UML; Sequence Modeling"
  },
  {
    "id": "SYS-055",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An insurance company plans to replace a legacy policy-administration system. It introduces customer-policy inquiries first, then billing, then claims processing, and finally reporting. Each area is implemented across all offices before the next functional area begins. Which conversion strategy is being used?",
    "options": [
      "Pilot conversion, because one operational function is tested before all other organizational functions are activated.",
      "Parallel conversion, because existing and replacement functions operate simultaneously during each implementation period.",
      "Direct conversion, because a single system function replaces the legacy platform at a predetermined cutover time.",
      "Phased conversion, because replacement functionality is introduced in planned increments over multiple implementation stages."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Phased",
      "Conversion",
      "Implementation",
      "Planning"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-056",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A financial firm performs nightly encrypted backups of transaction data, stores copies in a separate geographic location, and tests restoration procedures each quarter. The firm’s primary objective is to ensure that critical information can be recovered after hardware failure, ransomware, or a major site disruption. Which control category is MOST directly represented?",
    "options": [
      "Recovery controls, because the procedures support restoration of systems and data after an interruption or loss event.",
      "Input controls, because encrypted backup files prevent unauthorized values from being entered into transaction records.",
      "Authorization controls, because only approved users may create new backup copies or review archived transaction information.",
      "Output controls, because recovery testing confirms that reports generated after an outage remain accurate and complete."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recovery",
      "Controls",
      "Backup",
      "Procedures"
    ],
    "reference": "System Controls; Business Continuity"
  },
  {
    "id": "SYS-057",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer specifies that customers may return products within 30 days unless the purchase is marked final sale, while electronics valued above $500 require manager approval before a refund is issued. How should these statements MOST appropriately be classified?",
    "options": [
      "Nonfunctional requirements, because they define the expected quality and reliability of the customer-return application.",
      "Technical constraints, because they determine how the database must store order and product information.",
      "Business rules, because they establish policies and conditions that guide system behavior and transaction decisions.",
      "Conversion requirements, because they determine which historical return records must be moved from the legacy system."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Requirement",
      "Types",
      "Business",
      "Rules"
    ],
    "reference": "Requirements Specification; Business Rules"
  },
  {
    "id": "SYS-058",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A nationwide retailer wants input from thousands of store employees about preferred features for a new scheduling application. Leadership primarily needs broad, comparable feedback about common pain points rather than detailed explanations of unusual local workflows. Which method is MOST appropriate?",
    "options": [
      "Conduct direct observation at every store because observed behavior is the only reliable source of requirements information.",
      "Use a standardized survey to collect consistent responses from a large and geographically distributed employee population.",
      "Build a high-fidelity prototype for every store location before collecting any feedback about scheduling needs.",
      "Hold a single facilitated requirements workshop with headquarters managers and use their decisions to represent all stores."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Elicitation",
      "Surveys"
    ],
    "reference": "Requirements Gathering; Survey Methods"
  },
  {
    "id": "SYS-059",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A requirement for an expense-reporting system states, “The system should be easy to use and process reimbursements quickly.” Before design begins, the project manager asks the team to revise it. Which revision would MOST improve the requirement’s quality?",
    "options": [
      "“The system will provide a modern interface that employees prefer to the current expense-reporting application.”",
      "“The system will process all reimbursement requests using the fastest available method selected by the development team.”",
      "“The system will include streamlined reimbursement features appropriate for employees, managers, and finance personnel.”",
      "“The system will allow employees to submit a standard expense report in no more than five minutes under normal operating conditions.”"
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Acceptance",
      "Criteria",
      "Requirements",
      "Quality"
    ],
    "reference": "Requirements Specification; Testing Preparation"
  },
  {
    "id": "SYS-060",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A logistics company deployed route-optimization software to reduce fuel costs and late deliveries. Six months later, executives review fuel consumption, on-time delivery rates, dispatcher workload, user feedback, and the cost of maintaining the platform. Which activity are they primarily performing?",
    "options": [
      "A post-implementation evaluation to determine whether realized outcomes align with expected benefits and operational objectives.",
      "A feasibility study to decide whether the organization should proceed with initial development of route-optimization capabilities.",
      "A unit-testing review to determine whether individual route-calculation methods conform to detailed technical specifications.",
      "A requirements-elicitation session to identify which operational workflows should be documented before system analysis begins."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Post-Implementation",
      "Evaluation",
      "Operational",
      "Metrics"
    ],
    "reference": "System Evaluation; Benefits Realization"
  },
  {
    "id": "SYS-061",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturer replaces separate sales, inventory, scheduling, shipping, and billing handoffs with a shared order-management platform. A cross-functional team now manages each customer order from receipt through delivery, using common information and performance measures. Which type of organizational change is MOST accurately represented?",
    "options": [
      "Automation, because technology now performs selected steps within the existing departmental workflow.",
      "Rationalization of procedures, because duplicate forms and manual approvals have been removed without changing responsibilities.",
      "Business process redesign, because the organization has restructured work around an end-to-end process rather than functional departments.",
      "Direct conversion, because the organization is replacing a legacy system with a new application at a specified transition point."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Business",
      "Process",
      "Redesign",
      "Cross-Functional",
      "Workflow"
    ],
    "reference": "Business Process Improvement; Systems Analysis"
  },
  {
    "id": "SYS-062",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A financial institution needs to document a loan-review policy in which different actions occur depending on credit score, collateral status, debt-to-income ratio, and the requested amount. Analysts want a visual model that shows alternative decision paths and their resulting actions. Which artifact is MOST appropriate?",
    "options": [
      "A decision tree showing conditional branches and the outcomes associated with each combination of business conditions.",
      "A context diagram showing the applicant, credit bureau, loan officer, and major information flows across the system boundary.",
      "A data dictionary defining the data types, valid ranges, and source systems for each loan-application field.",
      "A Gantt chart identifying the sequence, duration, and dependencies of tasks required to implement the loan-review system."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Decision",
      "Trees",
      "Business",
      "Rules"
    ],
    "reference": "Structured Analysis; Decision Logic"
  },
  {
    "id": "SYS-063",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer plans to implement a demand-forecasting platform that processes sales data from thousands of stores every hour. The software meets functional needs, but analysts are uncertain whether current servers, network capacity, and database performance can support the projected workload. Which feasibility question is MOST directly being evaluated?",
    "options": [
      "Whether store managers will accept algorithm-generated recommendations and modify their ordering practices.",
      "Whether projected inventory savings will exceed licensing, implementation, and support costs over the project life cycle.",
      "Whether the required implementation deadline can be met before the retailer’s holiday-season planning begins.",
      "Whether available infrastructure and technical resources can support the system’s expected processing requirements."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Technical",
      "Feasibility",
      "Capacity",
      "Planning"
    ],
    "reference": "Feasibility Analysis; Technical Requirements"
  },
  {
    "id": "SYS-064",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst models a vendor-payment process. The Accounts Payable process retrieves invoice data from the Invoice Repository, sends approved-payment information to the Bank Interface, and updates the Vendor Account record. Which statement BEST describes a data flow in this model?",
    "options": [
      "It is a stored collection of related records used by multiple processes over time.",
      "It represents information moving between a process, data store, external entity, or another process.",
      "It is a control mechanism that prevents unauthorized payment requests from being processed.",
      "It identifies a person or organization outside the system boundary that exchanges information with the application."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Data",
      "Movement"
    ],
    "reference": "Structured Analysis; Data Flow Diagram Components"
  },
  {
    "id": "SYS-065",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hospital defines the following requirement for a patient-portal project: “Patients must be able to review laboratory results after the ordering provider releases them.” Which addition would MOST improve the requirement’s testability without changing its intended function?",
    "options": [
      "State that the portal should provide patients with a modern and intuitive experience when reviewing results.",
      "Specify that developers should use the most secure available technology for displaying released laboratory information.",
      "Define measurable conditions, such as permitted users, release status, result types, and expected display time after release.",
      "Require the project team to complete all portal interface designs before laboratory-result functionality is implemented."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Functional",
      "Requirements",
      "Acceptance",
      "Criteria"
    ],
    "reference": "Requirements Specification; Requirements Quality"
  },
  {
    "id": "SYS-066",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A bank plans to introduce a new mortgage-processing platform at one regional office before expanding it to all branches. During the initial rollout, analysts will monitor processing time, approval accuracy, employee training needs, and integration with document-management systems. What is the PRIMARY advantage of this approach?",
    "options": [
      "It limits initial exposure and allows operational issues to be identified before broader deployment.",
      "It eliminates the need for formal testing because production users will identify defects during normal operations.",
      "It ensures that both the old and new systems will produce identical outputs throughout the implementation period.",
      "It allows each mortgage-processing function to be activated at the same time across every branch."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Pilot",
      "Conversion",
      "Risk",
      "Reduction"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-067",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A logistics company is evaluating a fleet-tracking system. The proposal estimates implementation and support costs, expected reductions in fuel use, fewer missed deliveries, lower overtime, and improved customer retention. Which purpose is MOST directly served by this analysis?",
    "options": [
      "Determining whether the organization has enough technical staff to operate and maintain the proposed platform.",
      "Comparing anticipated organizational benefits with the total costs and risks of acquiring, operating, and supporting the system.",
      "Identifying the business rules that determine how delivery exceptions should be routed to supervisors.",
      "Confirming that completed software modules comply with detailed technical specifications before user acceptance testing."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Feasibility",
      "Analysis",
      "Cost-Benefit",
      "Evaluation"
    ],
    "reference": "Systems Proposal; Cost-Benefit Analysis"
  },
  {
    "id": "SYS-068",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer stores customer information in a Customer table and purchase information in an Order table. Each order must reference the customer who placed it, while each customer may be associated with many orders. Which implementation best preserves this relationship?",
    "options": [
      "Use the same primary key in both tables so all customer and order records share one identifier.",
      "Store the customer’s name as the primary key in the Order table to avoid creating additional reference fields.",
      "Create a separate table for each customer so all related orders are stored with the customer record.",
      "Include CustomerID as a foreign key in the Order table that references the primary key in the Customer table."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Modeling",
      "Primary",
      "and",
      "Foreign",
      "Keys"
    ],
    "reference": "Database Design; Entity Relationship Diagrams"
  },
  {
    "id": "SYS-069",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A procurement system allows employees to create purchase requests, supervisors to approve requests up to assigned limits, and finance personnel to release payment. The system denies approval attempts when a user lacks the required role or when the request exceeds the user’s authorization threshold. Which control is MOST directly represented?",
    "options": [
      "Authentication control, because users must prove their identity before gaining access to the application.",
      "Input validation control, because request amounts are checked before entering the procurement database.",
      "Authorization control, because system permissions determine what approved users are allowed to do.",
      "Recovery control, because transaction histories can be restored after a system interruption or data loss event."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "System",
      "Controls",
      "Authorization"
    ],
    "reference": "Internal Controls; Access Management"
  },
  {
    "id": "SYS-070",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team demonstrates newly completed inventory features to warehouse supervisors at the end of a two-week cycle. Supervisors identify a changed priority involving damaged-goods processing, and the product owner revises upcoming work accordingly. What Agile event or practice is MOST clearly illustrated?",
    "options": [
      "A sprint review used to inspect completed work and adapt future priorities based on stakeholder feedback.",
      "A project closeout meeting used to compare final benefits, costs, and lessons learned after implementation.",
      "A parallel-conversion review used to compare transactions processed in legacy and replacement systems.",
      "A requirements walkthrough used to finalize all business rules before detailed system design begins."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Agile",
      "Development",
      "Sprint",
      "Review"
    ],
    "reference": "Agile Development; Iterative Delivery"
  },
  {
    "id": "SYS-071",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A team is modeling a travel-booking system. Customers search flights and reserve itineraries, travel agents modify bookings on behalf of customers, and payment processors authorize transactions. Which statement BEST describes the role of these entities in a use-case diagram?",
    "options": [
      "They are data stores because the booking application retrieves and updates information associated with each activity.",
      "They are actors because they interact with the system to initiate, receive, or support system functionality.",
      "They are subclasses because each one inherits the booking system’s transaction methods and customer records.",
      "They are processes because they transform reservation information into confirmed travel itineraries."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Use-Case",
      "Diagrams",
      "Actors"
    ],
    "reference": "UML; Use-Case Modeling"
  },
  {
    "id": "SYS-072",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An organization’s order-management application currently operates correctly. Developers review aging code, replace a library that will soon lose vendor support, improve logging, and strengthen automated monitoring to reduce the likelihood of future outages. Which type of maintenance is MOST accurately represented?",
    "options": [
      "Corrective maintenance, because the organization is repairing defects that are already causing incorrect transaction results.",
      "Adaptive maintenance, because the organization is changing functionality to comply with a new legal or regulatory requirement.",
      "Perfective maintenance, because the organization is adding new user-facing features that improve operational capabilities.",
      "Preventive maintenance, because the work is intended to reduce the risk of future failures or degradation."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Preventive",
      "Maintenance"
    ],
    "reference": "System Maintenance; Maintenance Types"
  },
  {
    "id": "SYS-073",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer is planning the first release of a mobile ordering application. Stakeholders want loyalty rewards, delivery tracking, saved payment methods, product search, and accessibility improvements. The team has limited capacity and notes that delivery tracking depends on core order-status functionality that has not yet been built. Which prioritization approach is MOST appropriate?",
    "options": [
      "Select the features with the shortest estimated development time so users can see visible progress as early as possible.",
      "Prioritize requirements using business value, regulatory needs, risk, stakeholder impact, and technical dependencies.",
      "Implement all requested functionality in the first release because partially completed digital services may disappoint customers.",
      "Defer all customer-facing requirements until internal reporting and administrative features are completed and stabilized."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Prioritization",
      "Dependencies"
    ],
    "reference": "Requirements Management; Project Scope"
  },
  {
    "id": "SYS-074",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team needs to document how objects interact when a customer places an online order. The model must show the order in which the website validates the cart, requests payment authorization, updates inventory, and sends confirmation. Which UML diagram BEST satisfies this need?",
    "options": [
      "A sequence diagram showing time-ordered messages exchanged among relevant objects or components.",
      "A class diagram showing the attributes, methods, and inheritance relationships of customer, order, inventory, and payment classes.",
      "A deployment diagram showing the application servers, databases, network segments, and runtime environments supporting the transaction.",
      "A use-case diagram showing high-level interactions between customers, warehouse staff, payment providers, and the ordering system."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Sequence",
      "Diagrams",
      "Object",
      "Interaction"
    ],
    "reference": "UML; Sequence Modeling"
  },
  {
    "id": "SYS-075",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Following implementation of a new enterprise purchasing system, project leaders compare planned and actual costs, adoption rates, processing times, control exceptions, and realized savings. They also document which implementation decisions improved outcomes and which created avoidable delays. What is the PRIMARY purpose of this activity?",
    "options": [
      "To determine whether detailed system requirements should be replaced before the organization begins maintaining the new application.",
      "To assess realized outcomes against project objectives and capture lessons that can improve future development initiatives.",
      "To verify that every procurement module continues to comply with coding standards established during technical testing.",
      "To determine whether the organization should return to parallel conversion before adding any future purchasing-system enhancements."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Lessons",
      "Learned"
    ],
    "reference": "System Evaluation; Benefits Realization"
  },
  {
    "id": "SYS-076",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hospital is replacing its surgical-scheduling system. Surgeons, nursing leaders, operating-room coordinators, and billing staff disagree about how urgent cases should be classified and when a scheduled procedure may be reassigned. Management wants a structured process that produces shared decisions within several days rather than separate departmental recommendations. Which approach is MOST appropriate?",
    "options": [
      "Interview each stakeholder group separately, document differences, and allow the design team to select one preferred workflow.",
      "Conduct a facilitated joint application design session focused on resolving definitions, exceptions, responsibilities, and shared business rules.",
      "Distribute a survey to all affected employees and prioritize whichever scheduling rules receive the largest number of responses.",
      "Develop the surgical-scheduling database first, then ask each department to adapt its procedures to the resulting data structure."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Joint",
      "Application",
      "Design",
      "Stakeholder",
      "Alignment"
    ],
    "reference": "Requirements Gathering; Joint Application Design"
  },
  {
    "id": "SYS-077",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retail-return system includes a standard Return Merchandise use case. In unusual situations, such as a missing receipt or damaged product, a manager review may be required before the return can proceed. The analyst wants to show that the review occurs only under specific conditions and is not part of every return. Which modeling approach is BEST?",
    "options": [
      "Model Manager Review as an included use case because all return transactions should invoke it before completion.",
      "Treat Manager Review as an external actor because managers participate in the return process and may approve exceptions.",
      "Create a separate class for Manager Review because conditional workflow behavior should be modeled only through object methods.",
      "Model Manager Review as an extending use case that adds conditional behavior to the standard return transaction."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Use-Case",
      "Relationships",
      "Extending",
      "Behavior"
    ],
    "reference": "UML; Use-Case Modeling"
  },
  {
    "id": "SYS-078",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A transportation company needs dispatch software. Most required functionality is available in established commercial products, but the company’s proprietary routing algorithm provides a competitive advantage and must remain under internal control. Which strategy BEST balances implementation speed with strategic differentiation?",
    "options": [
      "Acquire a commercial package for standard dispatch capabilities while integrating internally developed components for proprietary routing logic.",
      "Build every function internally because commercial applications cannot exchange data with custom routing modules.",
      "Outsource the entire platform and provide the routing algorithm to the vendor so one organization manages all development decisions.",
      "Retain the legacy system because using a commercial package would require the company to change any existing dispatch workflow."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Build",
      "vs.",
      "Buy",
      "Strategic",
      "Fit"
    ],
    "reference": "Alternative Systems-Building Approaches; Application Packages"
  },
  {
    "id": "SYS-079",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst is reviewing a data flow diagram for a purchase-order system. One process is labeled “Purchase Order,” receives requisition data, accesses supplier records, and produces an approved order. Which revision would MOST improve the diagram’s clarity?",
    "options": [
      "Replace the process with an external entity because purchase orders are exchanged with suppliers outside the system boundary.",
      "Rename the process using a data noun because data flow diagrams should distinguish processes from actions through static terminology.",
      "Rename the process with an action-oriented label such as “Authorize Purchase Order” to show how input data is transformed.",
      "Move supplier records outside the system boundary because data stores should not connect to a process that produces an output document."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Process",
      "Definition"
    ],
    "reference": "Structured Analysis; Data Flow Diagram Components"
  },
  {
    "id": "SYS-080",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A financial-services firm is selecting requirements for the first release of a client-onboarding platform. Sales teams want a simplified digital application, while compliance staff require identity verification and record-retention controls. Development capacity is limited. Which approach BEST supports an appropriate release decision?",
    "options": [
      "Implement the sales workflow first because client-facing convenience generally creates the clearest measurable business benefit.",
      "Treat mandatory regulatory controls as baseline requirements, then prioritize remaining features by value, risk, dependencies, and stakeholder impact.",
      "Include every requested feature in the first release because partial implementation may produce inconsistent customer experiences.",
      "Defer compliance features until after launch because identity verification can be added through maintenance updates without affecting onboarding."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Prioritization",
      "Regulatory",
      "Constraints"
    ],
    "reference": "Requirements Management; Business Rules"
  },
  {
    "id": "SYS-081",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A university is replacing its student-information system. It plans to introduce admissions functionality first, followed by registration, financial aid, and degree-audit processing. Each function will be deployed across all campuses before the next one begins. Which conversion strategy is MOST accurately described?",
    "options": [
      "Pilot conversion, because a single system function is tested before the complete platform is introduced organization-wide.",
      "Parallel conversion, because each new function must run simultaneously with its counterpart in the legacy system.",
      "Direct conversion, because the university has identified a specific time at which the replacement system becomes operational.",
      "Phased conversion, because the replacement system is introduced in planned functional increments over time."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Phased",
      "Conversion",
      "Implementation",
      "Strategy"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-082",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A design team has already documented required reports, workflow rules, user roles, and data relationships for a new claims application. It now selects a cloud database platform, defines encryption standards, specifies server capacity, and determines network connectivity between offices. Which stage of design is being performed?",
    "options": [
      "Physical design, because implementation technologies and technical infrastructure are being specified.",
      "Logical design, because the team is defining what information and business processes the system must support.",
      "Requirements elicitation, because stakeholders are identifying missing operational needs before design begins.",
      "Post-implementation evaluation, because technical performance is being compared with expected project benefits."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Physical",
      "Design",
      "Technical",
      "Architecture"
    ],
    "reference": "Systems Design; Physical Design"
  },
  {
    "id": "SYS-083",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A city develops a clickable prototype for a new online parking-permit application. Residents can complete simulated submissions, but the prototype does not store real permits, process payments, or integrate with enforcement systems. What is the PRIMARY value of this prototype at the current stage?",
    "options": [
      "It proves that the final technical architecture can support production-level transaction volume and data-security requirements.",
      "It establishes that all required system integrations function correctly under real operating conditions.",
      "It allows users to evaluate navigation, terminology, and workflow assumptions before expensive development decisions are finalized.",
      "It permits the city to replace formal acceptance testing because representative users have already interacted with the proposed interface."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Prototyping",
      "Interface",
      "Validation"
    ],
    "reference": "Alternative Development Approaches; Prototyping"
  },
  {
    "id": "SYS-084",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A payroll application has completed unit and integration testing. The quality team now processes full pay cycles using realistic employee records, deductions, tax rules, direct deposits, and generated reports in a controlled environment before end users perform acceptance testing. What type of testing is MOST directly being conducted?",
    "options": [
      "Unit testing, because individual calculation methods are being evaluated against their detailed technical specifications.",
      "System testing, because the complete integrated application is being evaluated against overall functional and operational requirements.",
      "User acceptance testing, because payroll specialists are determining whether the application supports their routine business processes.",
      "Post-implementation testing, because production metrics are being used to evaluate whether expected benefits were realized."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "System",
      "Testing",
      "End-to-End",
      "Workflows"
    ],
    "reference": "Testing and Implementation; System Testing"
  },
  {
    "id": "SYS-085",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer plans to replace a store-inventory application before its busiest holiday period. The project team identifies the risk that synchronization failures could cause inaccurate stock availability during launch. Which response BEST represents an appropriate contingency plan?",
    "options": [
      "Increase the project budget so the new application can be implemented without conducting additional risk analysis.",
      "Remove inventory synchronization from the release scope because high-impact risks should always be eliminated rather than managed.",
      "Continue implementation without additional preparation because technical testing will guarantee that synchronization failures cannot occur.",
      "Define fallback procedures, monitoring thresholds, response responsibilities, and criteria for temporarily reverting to the legacy process."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Risk",
      "Assessment",
      "Contingency",
      "Planning"
    ],
    "reference": "System Implementation; Project Risk Management"
  },
  {
    "id": "SYS-086",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An insurance company must document claim-routing rules involving policy status, loss amount, fraud indicators, prior claims, and jurisdiction. Analysts need to ensure that every relevant combination of conditions produces a defined routing action. Which artifact is MOST suitable?",
    "options": [
      "A decision table that maps combinations of business conditions to their corresponding processing outcomes.",
      "A context diagram that shows claims adjusters, policyholders, external investigators, and information flows across the system boundary.",
      "A use-case diagram that identifies the major actions available to policyholders, claims representatives, and supervisors.",
      "An entity relationship diagram that models the relationships among policies, claims, customers, and payment records."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Decision",
      "Tables",
      "Complex",
      "Rules"
    ],
    "reference": "Structured Analysis; Decision Logic"
  },
  {
    "id": "SYS-087",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A procurement application records the user ID, timestamp, original amount, revised amount, and approval status whenever a purchase request is modified. Managers use this information to investigate unusual transactions and verify that changes occurred through authorized channels. Which control objective is MOST directly supported?",
    "options": [
      "Availability, because the application ensures that purchasing data remains accessible during peak processing periods.",
      "Authentication, because the system verifies the identity of every user before allowing access to purchasing functions.",
      "Accountability, because recorded activity allows the organization to trace actions and changes to specific users.",
      "Data redundancy reduction, because the system prevents duplicate copies of purchase-request information from being stored."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Audit",
      "Trails",
      "Accountability"
    ],
    "reference": "System Controls; Audit Controls"
  },
  {
    "id": "SYS-088",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Before deploying a new donor-management system, a nonprofit transfers constituent records from a legacy database. During test migration, analysts compare record counts, duplicate rates, missing fields, and selected transaction histories between the old and new systems. What is the PRIMARY purpose of this activity?",
    "options": [
      "To determine whether the new system’s user-interface design is intuitive for fundraising staff and volunteers.",
      "To verify that migrated data is complete, accurate, and appropriately transformed before production cutover.",
      "To assess whether the organization has sufficient funding to maintain both the legacy and replacement databases indefinitely.",
      "To identify future feature requests that should be added after the donor-management system enters maintenance."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Migration",
      "Reconciliation"
    ],
    "reference": "System Implementation; Data Conversion"
  },
  {
    "id": "SYS-089",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "After deploying a new employee-expense system, executives find that processing time improved as expected, but adoption remains low among field personnel because the mobile interface was excluded from the original scope. During the review, what should leadership MOST appropriately assess?",
    "options": [
      "Whether the original database design should be replaced before any additional requirements are considered.",
      "Whether developers should repeat unit testing on reimbursement calculations before analyzing user-adoption outcomes.",
      "Whether the organization should immediately abandon the completed system and restore the prior paper-based workflow.",
      "Whether the omitted mobile capability materially affects benefit realization and should be evaluated through formal enhancement planning."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Scope",
      "Governance"
    ],
    "reference": "System Evaluation; Benefits Realization"
  },
  {
    "id": "SYS-090",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Which SDLC phase focuses primarily on defining the business problem, gathering information requirements, assessing alternatives, and determining what the proposed information system must accomplish?",
    "options": [
      "Systems design",
      "Implementation",
      "Systems analysis",
      "Maintenance"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "SDLC",
      "Phases"
    ],
    "reference": "Systems Development Life Cycle; Systems Analysis"
  },
  {
    "id": "SYS-091",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A health insurer is replacing its prior-authorization system. Analysts review policy manuals, denial letters, audit findings, call-center scripts, and existing workflow guides before interviewing employees. The team wants to identify formal rules, recurring exceptions, and terminology that may not be consistently described by users. What is the PRIMARY advantage of this approach?",
    "options": [
      "It eliminates the need to consult stakeholders because official documentation fully reflects current operational practice.",
      "It provides an initial evidence base for requirements and helps analysts prepare targeted questions for later stakeholder discussions.",
      "It confirms that the replacement system will meet all user needs because written procedures are more reliable than observed workflows.",
      "It determines the physical database structure required to store authorization decisions before logical requirements are finalized."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Elicitation",
      "Document",
      "Analysis"
    ],
    "reference": "Requirements Gathering; Business Process Analysis"
  },
  {
    "id": "SYS-092",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A project requirement for a customer-service portal states, “The system should quickly display relevant account information in an easy-to-use format.” Before approving the requirement, the project manager asks for revision. Which change would MOST improve its quality?",
    "options": [
      "Specify that developers should use a modern interface framework selected by the technical architecture team.",
      "Replace “easy-to-use” with “user-friendly” so the requirement uses terminology familiar to business stakeholders.",
      "Require account information to be displayed using the same color scheme as the organization’s current customer portal.",
      "Define measurable response-time targets, identified account data, representative user tasks, and criteria for successful completion."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Requirements",
      "Quality",
      "Ambiguity"
    ],
    "reference": "Requirements Specification; Acceptance Criteria"
  },
  {
    "id": "SYS-093",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A distribution company introduces handheld scanners that automatically capture package IDs, update delivery status, and transmit proof of delivery to the central system. Drivers still follow the same route-assignment process, delivery sequence, and exception-handling procedures used before implementation. Which type of organizational change is MOST accurately represented?",
    "options": [
      "Automation, because technology performs existing tasks more efficiently without substantially redesigning the underlying workflow.",
      "Rationalization of procedures, because the company has eliminated redundant approval layers and reassigned responsibility across departments.",
      "Business process redesign, because drivers now perform a fundamentally different end-to-end delivery process.",
      "A paradigm shift, because the company has redefined its business model and customer relationship strategy."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Business",
      "Process",
      "Automation"
    ],
    "reference": "Organizational Change; Systems Analysis"
  },
  {
    "id": "SYS-094",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst is modeling a university tuition-payment system. The model includes Student, Payment Processor, Student Account Database, and Record Payment. Which item should be represented as an external entity rather than a process or data store?",
    "options": [
      "Student Account Database, because it stores balances, payment history, and account status for later retrieval.",
      "Record Payment, because it transforms payment details into updated account information and receipt data.",
      "Payment Processor, because it exchanges authorization and settlement information with the tuition-payment system.",
      "Payment Confirmation, because it represents information generated after a successful transaction is completed."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "External",
      "Entities"
    ],
    "reference": "Structured Analysis; Data Flow Diagram Components"
  },
  {
    "id": "SYS-095",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A nonprofit’s grant-management system allows program staff to submit reimbursement requests, finance staff to approve payments, and accounting staff to reconcile completed disbursements. Management wants to prevent any one employee from initiating, approving, and recording the same payment. Which design principle MOST directly supports this objective?",
    "options": [
      "Require all reimbursement requests to be stored in a centralized data repository before finance staff review them.",
      "Assign separate transaction permissions to distinct roles so key activities are divided among independent employees.",
      "Add an exception report that identifies reimbursement requests processed outside normal business hours.",
      "Require a parallel conversion period before the organization begins using the new grant-management system."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "System",
      "Controls",
      "Segregation",
      "of",
      "Duties"
    ],
    "reference": "Internal Controls; Authorization"
  },
  {
    "id": "SYS-096",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A city develops a clickable prototype for a new business-license portal. Stakeholders successfully navigate forms and provide feedback on terminology and screen flow, but the prototype does not integrate with payment processing, identity verification, or the municipal records system. Which conclusion is MOST appropriate?",
    "options": [
      "The prototype demonstrates that the complete production system will meet performance, security, and integration requirements.",
      "The prototype can replace user acceptance testing because representative users have already reviewed the proposed workflow.",
      "The prototype confirms that all database structures and validation rules are ready for production deployment.",
      "The prototype is useful for refining interface assumptions, but additional design and testing are needed before production use."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Prototype",
      "Evaluation",
      "Technical",
      "Limitations"
    ],
    "reference": "Alternative Development Approaches; Prototyping"
  },
  {
    "id": "SYS-097",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A consulting firm maintains records for Consultants and Projects. A consultant may be assigned to no projects during a given month, while every active project must have at least one assigned consultant. Which statement BEST describes the relationship constraint?",
    "options": [
      "Consultant participation is mandatory because every consultant must be connected to at least one active project.",
      "Project participation is optional because projects can exist before consultants are assigned to them.",
      "Consultant participation is optional, while active project participation requires at least one related consultant assignment.",
      "Both entities require mandatory participation because a many-to-many relationship cannot include optional associations."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Entity",
      "Relationship",
      "Diagrams",
      "Optionality"
    ],
    "reference": "Data Modeling; Entity Relationships"
  },
  {
    "id": "SYS-098",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturer is considering predictive-maintenance software. The expected reduction in unplanned downtime is significant, but annual licensing, sensor replacement, integration, and support costs are higher than initially estimated. Which analysis would MOST directly help management determine whether the investment remains justified?",
    "options": [
      "Compare projected financial and operational benefits with all implementation and recurring operating costs over the system’s expected life.",
      "Determine whether maintenance supervisors are willing to replace existing inspection routines with sensor-based recommendations.",
      "Evaluate whether current network bandwidth can transmit equipment data from each production line at the required frequency.",
      "Confirm whether the implementation schedule can be completed before the manufacturer’s planned expansion of a second facility."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Feasibility",
      "Analysis",
      "Economic",
      "Feasibility"
    ],
    "reference": "Systems Proposal; Cost-Benefit Analysis"
  },
  {
    "id": "SYS-099",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A project team maintains a matrix linking each approved business requirement to design components, test cases, and implementation deliverables. During testing, a quality analyst identifies a requirement that has no associated test case. What is the MOST appropriate interpretation?",
    "options": [
      "The requirement should be removed because any requirement lacking a test case is probably unnecessary.",
      "The traceability matrix has identified a coverage gap that should be addressed before release approval.",
      "The design phase should restart because requirements and technical specifications cannot coexist in the same project artifact.",
      "The project should move immediately to maintenance because requirements traceability is only useful after production deployment."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Traceability",
      "Testing"
    ],
    "reference": "Requirements Management; Test Planning"
  },
  {
    "id": "SYS-100",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An airline needs to document refund decisions based on ticket type, cancellation timing, loyalty status, and whether a disruption was caused by the airline. Analysts must ensure that each relevant combination produces a defined outcome, such as full refund, travel credit, or no refund. Which artifact is MOST suitable?",
    "options": [
      "A context diagram showing passengers, travel agents, payment processors, and airline systems exchanging refund information.",
      "A use-case diagram identifying actors and high-level functions such as Request Refund and Review Eligibility.",
      "A decision table mapping combinations of conditions to the appropriate refund-processing action.",
      "A data dictionary defining the format and allowed values for ticket, passenger, and refund transaction fields."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Decision",
      "Tables",
      "Business",
      "Rules"
    ],
    "reference": "Structured Analysis; Decision Logic"
  },
  {
    "id": "SYS-101",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A company introduces a new procurement workflow that requires managers to approve requests through the system rather than by email. Technical testing is successful, but managers report uncertainty about approval limits, escalation rules, and how the change affects their responsibilities. Which action would MOST directly address the adoption risk?",
    "options": [
      "Add more procurement reports so managers can compare their prior email approvals with system-generated transaction histories.",
      "Increase server capacity so the workflow can process a larger number of purchase requests during peak periods.",
      "Delay training until after deployment so employees can apply instruction to actual production transactions.",
      "Provide role-specific communication, training, practice scenarios, and channels for feedback before and during implementation."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Change",
      "Management",
      "Communication",
      "Planning"
    ],
    "reference": "Organizational Feasibility; Implementation"
  },
  {
    "id": "SYS-102",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A credit union stores encrypted transaction backups at a geographically separate facility, maintains documented recovery procedures, and conducts periodic restoration drills. The organization wants to minimize disruption if ransomware, hardware failure, or a regional outage affects its primary data center. Which control objective is MOST directly supported?",
    "options": [
      "Recovery and continuity, because the organization can restore critical systems and information after a significant disruption.",
      "Input validation, because backup encryption prevents invalid transaction values from being entered into production records.",
      "Authorization, because only designated administrators can review backup documentation and recovery schedules.",
      "Output verification, because restored reports can be compared with reports generated before the system interruption."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recovery",
      "Controls",
      "Business",
      "Continuity"
    ],
    "reference": "System Controls; Recovery Planning"
  },
  {
    "id": "SYS-103",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A product team is preparing its next development cycle for a claims-tracking application. Several backlog items are broad, lack acceptance criteria, and have unclear dependencies on external data sources. Before selecting items for the next iteration, what should the team do?",
    "options": [
      "Begin development on the highest-visibility items because technical uncertainty can be resolved during coding.",
      "Freeze the backlog because revisions before iteration planning make prior estimates unreliable.",
      "Refine the backlog by clarifying scope, acceptance criteria, dependencies, and relative priority with relevant stakeholders.",
      "Move all unclear requirements to post-implementation maintenance because active development should use only fully completed design documents."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Agile",
      "Development",
      "Backlog",
      "Refinement"
    ],
    "reference": "Agile Development; Iterative Planning"
  },
  {
    "id": "SYS-104",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Which activity is MOST clearly part of physical system design rather than logical system design?",
    "options": [
      "Identifying which employees must approve purchase requests exceeding established financial thresholds.",
      "Selecting database software, defining server capacity, and specifying network connections between office locations.",
      "Determining what customer information must be available to service representatives during a support interaction.",
      "Defining business rules that determine when a refund requires manager review before processing."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "Physical",
      "Design"
    ],
    "reference": "Systems Design; Physical Design"
  },
  {
    "id": "SYS-105",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "One year after implementing a warehouse-management system, executives review fulfillment speed, inventory accuracy, overtime expense, user adoption, maintenance costs, and customer-service metrics. They also compare results with the project’s original targets and document decisions that affected the rollout. What is the PRIMARY purpose of this activity?",
    "options": [
      "To determine whether the completed system produced expected benefits and to capture lessons for future information-system projects.",
      "To repeat requirements gathering because implementation results should replace all business requirements documented during analysis.",
      "To verify that each warehouse module conforms to detailed coding standards established during technical development.",
      "To determine whether the organization should restart conversion planning before introducing any future system enhancements."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Benefits",
      "Realization"
    ],
    "reference": "System Evaluation; Project Review"
  },
  {
    "id": "SYS-106",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A university is replacing its research-grant system. Faculty want flexible budget transfers between grant categories, while finance staff require approvals before any transfer exceeding a fixed threshold. Both groups agree that the current process is slow, but they disagree about when oversight is necessary. What should the analyst do before documenting the final requirement?",
    "options": [
      "Select the finance workflow because financial controls should take precedence over operational convenience in all system decisions.",
      "Create two separate transfer processes and allow users to select either approach based on departmental preference.",
      "Facilitate a structured review of the underlying policy, exceptions, risk tolerance, and approval objectives with both stakeholder groups.",
      "Defer the disagreement until user acceptance testing because operational users can identify the preferred rule after implementation."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Requirements",
      "Elicitation",
      "Conflict",
      "Resolution"
    ],
    "reference": "Requirements Gathering; Stakeholder Analysis"
  },
  {
    "id": "SYS-107",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A customer-service application requires employees to select a valid account number before creating a service request. The application checks that the number exists in the customer database and prevents the request from being saved if no matching account is found. Which control objective is MOST directly supported?",
    "options": [
      "Referential integrity, because each service request is linked to an existing customer account rather than an invalid or orphaned reference.",
      "Recovery capability, because the system can recreate a request after a customer account is deleted or transferred.",
      "Output reconciliation, because service-request reports can be compared with customer-account reports before release.",
      "Segregation of duties, because one employee creates service requests while another maintains customer-account records."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Validation",
      "Referential",
      "Integrity"
    ],
    "reference": "System Controls; Data Integrity"
  },
  {
    "id": "SYS-108",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A new privacy regulation requires a claims platform to retain consent records for a longer period. The project manager uses a traceability matrix to identify affected requirements, database fields, reports, interfaces, test cases, and operating procedures. What is the PRIMARY value of this activity?",
    "options": [
      "It verifies that all users received sufficient training before the revised retention rule enters production.",
      "It replaces technical testing because affected system components have already been identified through documentation.",
      "It determines whether the regulation should be treated as an optional future enhancement rather than a required scope change.",
      "It supports impact analysis by identifying the system elements that may require coordinated modification and retesting."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Requirements",
      "Traceability",
      "Impact",
      "Analysis"
    ],
    "reference": "Requirements Management; Change Control"
  },
  {
    "id": "SYS-109",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A Level-1 data flow diagram shows a process labeled “Determine Credit Eligibility.” The process receives applicant information, retrieves credit-policy rules, and produces an approval, denial, or manual-review decision. Analysts need a detailed description of the logic used inside that process. Which artifact is MOST appropriate?",
    "options": [
      "A deployment diagram showing servers, database instances, and network connections that support the credit-review application.",
      "A process specification using structured English, a decision table, or a decision tree to describe the internal decision logic.",
      "A context diagram identifying applicants, credit bureaus, underwriters, and other entities outside the system boundary.",
      "A use-case diagram documenting high-level interactions between applicants, loan officers, and the credit-review system."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Structured",
      "Analysis",
      "Process",
      "Specifications"
    ],
    "reference": "Structured Analysis; Process Modeling"
  },
  {
    "id": "SYS-110",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A project team has completed requirements analysis for a new inventory application. Stakeholders approve the documented requirements, and the project manager establishes a formal baseline before design begins. What is the PRIMARY purpose of creating this baseline?",
    "options": [
      "To prevent any future requirement changes, regardless of new regulations, business priorities, or evidence identified during development.",
      "To ensure that developers can begin programming before the design team evaluates process rules, data requirements, and interfaces.",
      "To establish an agreed reference point against which proposed changes can be evaluated for scope, cost, schedule, and risk impact.",
      "To transfer responsibility for defining business requirements from stakeholders to the development team after initial approval."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Requirements",
      "Baseline",
      "Scope",
      "Stability"
    ],
    "reference": "Requirements Management; Project Scope"
  },
  {
    "id": "SYS-111",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A delivery company is considering route-optimization software. The proposed system is technically compatible and financially attractive, but dispatchers worry that suggested routes may conflict with local delivery restrictions, driver experience, and customer-specific preferences. Which activity would MOST directly assess whether the system can operate successfully in practice?",
    "options": [
      "Evaluate representative routing scenarios with dispatchers and drivers to determine whether system recommendations fit real operational constraints.",
      "Compare licensing costs with projected fuel savings to determine whether the investment is likely to produce a positive return.",
      "Confirm that the organization’s cloud environment has sufficient storage and processing capacity for GPS and route data.",
      "Define a phased conversion sequence that introduces route planning, dispatch, and reporting at different implementation stages."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Feasibility",
      "Analysis",
      "Operational",
      "Metrics"
    ],
    "reference": "Feasibility Study; Operational Feasibility"
  },
  {
    "id": "SYS-112",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A payroll system must support retroactive wage adjustments, multiple state tax jurisdictions, and different pay schedules. Before deployment, payroll specialists execute predefined scenarios with expected results that were approved during requirements analysis. Which statement BEST describes the purpose of this testing?",
    "options": [
      "It confirms that developers followed coding conventions and module-level technical standards during implementation.",
      "It determines whether the proposed payroll architecture can scale to support additional employees in future years.",
      "It compares production results from the legacy and replacement applications during a parallel conversion period.",
      "It evaluates whether the completed system meets agreed acceptance criteria under realistic business conditions."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "User",
      "Acceptance",
      "Testing",
      "Acceptance",
      "Criteria"
    ],
    "reference": "Testing and Implementation; Validation"
  },
  {
    "id": "SYS-113",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer’s return policy changes frequently because of seasonal promotions, product categories, and regulatory requirements. The system currently embeds each rule directly within application code, making updates slow and error-prone. Which design choice would MOST improve maintainability?",
    "options": [
      "Store all return-policy exceptions in a separate spreadsheet maintained by sales managers outside the information system.",
      "Externalize configurable business rules so authorized personnel can update policy conditions without modifying core transaction code.",
      "Replace return-policy logic with manual review for every customer request, regardless of transaction value or product category.",
      "Move all policy decisions into the database schema because data structures should control workflow behavior without application logic."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Business",
      "Rules",
      "Rule",
      "Maintenance"
    ],
    "reference": "Requirements Specification; Business Rules"
  },
  {
    "id": "SYS-114",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst’s data flow diagram shows a Customer entity sending an order directly into the Order Database without passing through any process. The analyst argues that the database simply records what the customer submits. What is the MOST appropriate revision?",
    "options": [
      "Retain the direct flow because external entities may write data to system stores whenever transactions originate outside the organization.",
      "Replace the Order Database with an external entity because customer orders become external once they are submitted.",
      "Add a process, such as Capture Order, because data stores should be accessed through processes rather than directly by external entities.",
      "Remove the customer from the diagram because all data flows should begin within the system boundary and end at a data store."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Data",
      "Stores"
    ],
    "reference": "Structured Analysis; DFD Rules"
  },
  {
    "id": "SYS-115",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A regional clinic is comparing a subscription-based electronic scheduling package with a custom-built solution. The package has lower initial cost but recurring subscription fees, configuration limits, and vendor-dependence concerns. The custom option has higher development cost but may better fit specialized workflows. Which comparison is MOST appropriate?",
    "options": [
      "Evaluate total cost of ownership, implementation risk, functional fit, integration needs, future flexibility, and vendor-dependence for both alternatives.",
      "Select the package because lower initial cost is generally the strongest indicator that a system alternative will create long-term value.",
      "Select the custom solution because specialized workflows cannot be supported through configurable commercial applications.",
      "Delay the decision until user acceptance testing because alternative selection should occur only after working software is available."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Build",
      "vs.",
      "Buy",
      "Total",
      "Cost",
      "of",
      "Ownership"
    ],
    "reference": "Alternative Systems-Building Approaches; Systems Proposal"
  },
  {
    "id": "SYS-116",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team completes a customer-notification feature during a sprint. The feature appears to work in a demonstration, but automated tests are incomplete, security review has not occurred, and documentation remains unfinished. The team’s agreed definition of done includes all three activities. How should the feature be classified?",
    "options": [
      "Complete, because visible functionality is the primary criterion for determining whether a sprint item has been delivered.",
      "Ready for deployment, because documentation and security review can be completed during post-implementation maintenance.",
      "Complete but deferred, because testing is relevant only when a feature introduces database or integration changes.",
      "Not done, because the team has not satisfied the agreed quality and completion criteria for the backlog item."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Agile",
      "Development",
      "Definition",
      "of",
      "Done"
    ],
    "reference": "Agile Development; Iterative Delivery"
  },
  {
    "id": "SYS-117",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A bank pilots a replacement loan-origination system at one branch. The pilot meets performance targets, but employees identify two workflow changes that improve processing speed and reduce duplicate data entry. What should the project team do before expanding deployment?",
    "options": [
      "Begin immediate rollout because the pilot has already demonstrated that the system is technically stable and operationally viable.",
      "Evaluate the proposed workflow improvements, incorporate justified changes, and retest affected processes before broader implementation.",
      "Preserve the original workflow because pilot users should adapt to approved design decisions rather than influence the final configuration.",
      "End the pilot and convert all branches in parallel so the organization can compare the two systems under the same workload."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Conversion",
      "Strategies",
      "Pilot",
      "Evaluation"
    ],
    "reference": "System Implementation; Pilot Conversion"
  },
  {
    "id": "SYS-118",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A chief operating officer requests a dashboard showing average order cycle time, fulfillment accuracy, inventory exceptions, and delayed shipments by region. Before selecting visualizations or technology, what should the analyst clarify FIRST?",
    "options": [
      "Which cloud provider can host the dashboard with the lowest projected storage and networking cost.",
      "Whether the dashboard should be introduced through direct, phased, parallel, or pilot conversion.",
      "The decisions the executive will make, required metrics, data sources, timing, drill-down needs, and acceptable accuracy levels.",
      "Whether warehouse employees prefer a web-based dashboard or a mobile dashboard for daily operational reporting."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Information",
      "Requirements",
      "Management",
      "Reporting"
    ],
    "reference": "Systems Analysis; Information Requirements"
  },
  {
    "id": "SYS-119",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "In an entity relationship diagram, what term describes the minimum and maximum number of instances of one entity that can be associated with an instance of another entity?",
    "options": [
      "Cardinality",
      "Normalization",
      "Encapsulation",
      "Decomposition"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Entity",
      "Relationship",
      "Diagrams"
    ],
    "reference": "Data Modeling; Entity Relationship Diagrams"
  },
  {
    "id": "SYS-120",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Six months after implementing a customer-service platform, executives find that call time has improved but first-contact resolution remains below the project target. Analysis shows that agents cannot easily access prior interaction history during complex calls. What is the MOST appropriate next step?",
    "options": [
      "Close the project because the system has achieved some benefits and post-implementation findings should not change the completed solution.",
      "Use the review findings to prioritize a targeted enhancement that addresses access to interaction history and reassess outcomes after implementation.",
      "Repeat the original feasibility study because unmet performance targets indicate that the project should return to initial planning.",
      "Replace all customer-service agents with automated chat tools because the platform has not produced the expected operational result."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Corrective",
      "Action"
    ],
    "reference": "System Evaluation; Benefits Realization"
  },
  {
    "id": "SYS-121",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A regional utility is redesigning its outage-management system. Dispatchers, field crews, customer-service staff, and safety officers disagree about how outage priority should be assigned during severe weather. Leadership wants a facilitated process that resolves conflicting definitions, identifies exceptions, and produces jointly approved business rules within a limited timeframe. Which method is MOST appropriate?",
    "options": [
      "Conduct separate interviews with each department and ask the development team to reconcile differences after logical design begins.",
      "Hold a structured joint application design session with representative stakeholders, a facilitator, and documented decision rules.",
      "Distribute a survey to all employees and select the most frequently preferred definition of outage priority.",
      "Build a prototype using the dispatchers’ preferred workflow, then require the remaining groups to adjust their procedures."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Elicitation",
      "Joint",
      "Application",
      "Design"
    ],
    "reference": "Requirements Gathering; Stakeholder Collaboration"
  },
  {
    "id": "SYS-122",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A data flow diagram for a loan application system shows an Applicant sending completed loan data directly into the Loan Application Database. The analyst explains that the applicant is simply entering information that must be stored for later review. Which revision BEST follows standard DFD conventions?",
    "options": [
      "Retain the direct flow because external entities may write transaction data directly to a system’s internal data stores.",
      "Replace the database with an external entity because submitted applications originate from outside the system boundary.",
      "Remove the applicant because external entities should not appear on a data flow diagram once data enters the system.",
      "Add a process such as Capture Loan Application between the Applicant and the Loan Application Database."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Process",
      "Boundaries"
    ],
    "reference": "Structured Analysis; Data Flow Diagram Rules"
  },
  {
    "id": "SYS-123",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A new state regulation requires a pharmacy system to display additional counseling information before certain prescriptions are released. The project manager traces the change from the regulation to affected requirements, interface elements, data fields, training materials, test cases, and operational procedures. What is the PRIMARY purpose of this activity?",
    "options": [
      "To identify the scope and downstream effects of the required change before approving implementation work.",
      "To demonstrate that the existing system has already satisfied the new regulation through prior acceptance testing.",
      "To determine whether the regulation can be deferred until the next planned maintenance cycle without affecting compliance.",
      "To replace stakeholder review because all affected system components have been identified through formal documentation."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Requirements",
      "Traceability",
      "Change",
      "Impact"
    ],
    "reference": "Requirements Management; Change Control"
  },
  {
    "id": "SYS-124",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturing firm is evaluating an automated quality-inspection platform. The technology performs accurately in controlled demonstrations, and the projected savings are favorable. Plant supervisors, however, report that the recommended inspection sequence may interfere with mandatory safety checks and union-defined work assignments. Which question should receive the greatest attention?",
    "options": [
      "Whether the platform can be purchased under the approved capital budget without reducing funds for unrelated projects.",
      "Whether the existing production network can transmit inspection images to the central platform during peak operating periods.",
      "Whether the proposed system can be integrated into actual work practices, responsibilities, and required operating procedures.",
      "Whether the implementation team can complete database configuration before the planned production shutdown ends."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Feasibility",
      "Analysis",
      "Operational",
      "Feasibility"
    ],
    "reference": "Feasibility Study; Organizational Change"
  },
  {
    "id": "SYS-125",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer is defining the first release of a mobile ordering application. Stakeholders request saved payment methods, loyalty rewards, delivery tracking, product search, accessibility improvements, and order-status updates. The team has limited capacity, and delivery tracking depends on order-status data that does not yet exist. Which approach BEST supports a defensible release decision?",
    "options": [
      "Implement the most visually appealing features first because early customer attention is the primary indicator of release value.",
      "Prioritize items using business value, regulatory needs, risks, dependencies, and stakeholder impact before finalizing scope.",
      "Include all requested functions in the initial release because partial functionality will create inconsistent user expectations.",
      "Defer all customer-facing features until internal reporting and administrative functions are fully designed and stabilized."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Prioritization",
      "Dependencies"
    ],
    "reference": "Requirements Management; Release Planning"
  },
  {
    "id": "SYS-126",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A city is designing an online business-license portal. Applicants can explain what information they must submit but disagree about whether the process should use one extended form or several guided stages. Before investing in full implementation, the city wants evidence about which approach users can complete accurately. What should the team do?",
    "options": [
      "Create an interactive prototype that lets representative applicants attempt both workflows and provide focused feedback.",
      "Finalize the form structure using the workflow preferred by the licensing director because policy ownership determines interface quality.",
      "Complete the database schema first because interface testing is meaningful only after production data structures are implemented.",
      "Deploy the complete system to a small group of users because a prototype cannot provide reliable information about workflow usability."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Prototyping",
      "Requirement",
      "Validation"
    ],
    "reference": "Alternative Development Approaches; Prototyping"
  },
  {
    "id": "SYS-127",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A procurement system requires users to select a supplier from an approved-vendor list before submitting a purchase request. It rejects expired supplier accounts, missing tax identifiers, and requests that exceed the requester’s allowed purchasing category. Which objective is MOST directly supported by these controls?",
    "options": [
      "Recovery capability, because invalid supplier information can be restored after a system interruption.",
      "Output reconciliation, because purchase orders are compared with supplier invoices before payment.",
      "Data integrity, because the system prevents incomplete, invalid, or unauthorized information from entering transactions.",
      "Segregation of duties, because purchase requests are divided among multiple employees before authorization."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "System",
      "Controls",
      "Input",
      "Validation"
    ],
    "reference": "Controls in System Design; Data Integrity"
  },
  {
    "id": "SYS-128",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An analyst documents that a grant-management system must capture award restrictions, route amendment requests according to funding thresholds, and produce sponsor-compliance reports. The work does not identify programming languages, server capacity, database products, cloud providers, or network architecture. What has the analyst primarily produced?",
    "options": [
      "A deployment plan defining how the completed application will be rolled out to users and supported after cutover.",
      "A physical design specifying the technical components required to construct and operate the proposed system.",
      "A logical design describing business processes, data needs, rules, and outputs without selecting implementation technology.",
      "A feasibility proposal comparing alternative solutions, expected costs, organizational risks, and implementation schedules."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Logical",
      "vs.",
      "Physical",
      "Design"
    ],
    "reference": "System Design; Logical and Physical Design"
  },
  {
    "id": "SYS-129",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "An insurance company must document claims-routing rules involving policy status, injury severity, fraud indicators, prior claims, and jurisdiction. Analysts need to ensure that every meaningful combination of conditions leads to a defined action, such as automatic payment, specialist review, or investigation. Which artifact is MOST suitable?",
    "options": [
      "A decision table mapping combinations of conditions to corresponding processing actions.",
      "A context diagram identifying policyholders, adjusters, investigators, and major information exchanges.",
      "A use-case diagram showing which actors can submit, review, investigate, or close claims.",
      "An entity relationship diagram modeling relationships among policies, claims, customers, and payments."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Decision",
      "Tables",
      "Complex",
      "Business",
      "Rules"
    ],
    "reference": "Structured Analysis; Decision Logic"
  },
  {
    "id": "SYS-130",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hotel chain plans to discontinue its legacy reservation system at midnight during a low-demand period and activate the replacement system immediately. Operating both systems would be too costly, so management prepares manual fallback procedures, staffing coverage, and a rollback plan. Which statement BEST characterizes this approach?",
    "options": [
      "It is pilot conversion because the organization limits the rollout to a selected time period before full deployment.",
      "It is phased conversion because reservation functions are introduced in a controlled sequence over multiple releases.",
      "It is parallel conversion because rollback capability allows the prior system to remain available after cutover.",
      "It is direct conversion, which concentrates risk at a defined cutover and requires strong contingency planning."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Direct",
      "Conversion",
      "Contingency",
      "Planning"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-131",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A payroll application is modified to comply with a revised state-tax rule. Developers test the new calculation successfully, but the quality team also reruns tests for overtime calculations, deductions, direct deposit, and payroll reporting because these functions could be affected indirectly. What type of testing is being performed?",
    "options": [
      "Unit testing, because a single newly revised tax-calculation method is being evaluated in isolation.",
      "Regression testing, because previously functioning capabilities are retested after a change to detect unintended effects.",
      "User acceptance testing, because payroll specialists are reviewing the revised application under representative working conditions.",
      "Integration testing, because the project is confirming that separate applications can exchange information across organizational boundaries."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Testing",
      "Regression",
      "Testing"
    ],
    "reference": "System Maintenance; Testing"
  },
  {
    "id": "SYS-132",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A new developer must determine the permitted values, character length, business meaning, source, and update rules for a field named CLAIM_DISPOSITION. The developer also needs to know which processes create or modify that field. Which artifact should be reviewed FIRST?",
    "options": [
      "A data dictionary documenting the field’s definition, format, allowable values, source, ownership, and usage.",
      "A context diagram showing the system boundary and high-level exchanges among claimants, adjusters, and payment services.",
      "A use-case model describing the system functions available to claim representatives, supervisors, and policyholders.",
      "A project schedule showing design milestones, development assignments, testing activities, and planned implementation dates."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Dictionary",
      "Metadata"
    ],
    "reference": "System Design Documentation; Data Definitions"
  },
  {
    "id": "SYS-133",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Eight months after implementing route-optimization software, a delivery company finds that fuel use has declined but customer complaints about missed delivery windows have increased. Executives compare results with original business objectives and identify that driver-specific delivery restrictions were not adequately included in the final design. What is the MOST appropriate next step?",
    "options": [
      "Close the project because partial achievement of expected benefits means the implementation has been sufficiently successful.",
      "Restart feasibility analysis because any unmet performance target invalidates all original requirements and project decisions.",
      "Use the findings to plan a targeted enhancement addressing delivery restrictions, then reassess results after implementation.",
      "Remove route optimization from production because operational feedback should not affect a system that passed acceptance testing."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Benefits",
      "Realization"
    ],
    "reference": "System Evaluation; Project Review"
  },
  {
    "id": "SYS-134",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Which UML diagram is designed to show the time-ordered messages exchanged among objects or components during a transaction, such as validating a cart, authorizing payment, updating inventory, and sending an order confirmation?",
    "options": [
      "Use-case diagram",
      "Sequence diagram",
      "Class diagram",
      "Deployment diagram"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "UML",
      "Sequence",
      "Diagrams"
    ],
    "reference": "UML; Interaction Modeling"
  },
  {
    "id": "SYS-135",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A financial firm stores encrypted transaction backups at a geographically separate site, maintains documented recovery procedures, and conducts quarterly restoration drills. The organization’s goal is to minimize disruption if ransomware, hardware failure, or a regional outage affects its primary data center. Which control objective is MOST directly supported?",
    "options": [
      "Authorization, because designated administrators control who can view recovery documentation and initiate restoration procedures.",
      "Input validation, because backup encryption prevents invalid values from entering live transaction records.",
      "Output verification, because restored reports can be compared against reports generated before the interruption.",
      "Recovery and continuity, because systems and critical information can be restored after a significant disruption."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recovery",
      "Controls",
      "Business",
      "Continuity"
    ],
    "reference": "System Controls; Recovery and Continuity Planning"
  },
  {
    "id": "SYS-136",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hospital is redesigning its discharge-planning system. Case managers want discharge orders to be released as soon as clinical criteria are met, while compliance staff require additional documentation for certain high-risk patients. Both groups agree that delays are costly, but they disagree about which cases require enhanced review. What should the systems analyst do FIRST?",
    "options": [
      "Document both workflows separately and allow developers to determine which one is technically easier to implement.",
      "Prioritize the compliance workflow because all regulatory stakeholders should control operational process design.",
      "Facilitate a review of policy requirements, exception criteria, risk thresholds, and workflow objectives with both stakeholder groups.",
      "Create a prototype using the case-manager workflow and ask compliance staff to identify issues after acceptance testing begins."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Requirements",
      "Conflict",
      "Business",
      "Rules"
    ],
    "reference": "Requirements Analysis; Stakeholder Reconciliation"
  },
  {
    "id": "SYS-137",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A context diagram for a customer-return system shows Return Request as an incoming data flow from Customer and Return Authorization as an outgoing flow to Customer. In the Level-1 DFD, analysts model Validate Purchase, Evaluate Return Policy, and Issue Refund, but no process receives Return Request. Which conclusion is MOST appropriate?",
    "options": [
      "The diagrams are unbalanced because the lower-level model should account for external flows shown in the context diagram.",
      "The Level-1 diagram is acceptable because data flows only need to appear at the highest level of the model.",
      "The context diagram should be removed because it does not contain enough internal process detail for implementation.",
      "The missing flow should be represented as a database table because customer requests become stored records after submission."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Flow",
      "Diagrams",
      "Balancing"
    ],
    "reference": "Structured Analysis; DFD Decomposition"
  },
  {
    "id": "SYS-138",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturer is evaluating software that predicts equipment failures. The vendor’s license cost is modest, but the proposal also includes sensor upgrades, integration work, recurring cloud-storage fees, employee training, and ongoing model-maintenance expenses. Which analysis is MOST important before management concludes that the project is financially feasible?",
    "options": [
      "Determine whether operators prefer predictive alerts to their current paper-based maintenance schedule.",
      "Confirm that the production network can transmit sensor readings from all facilities at the required frequency.",
      "Compare the implementation date with the company’s planned expansion schedule and annual capital-budget cycle.",
      "Evaluate projected downtime reductions and maintenance savings against all acquisition, implementation, and recurring operating costs."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Financial",
      "Feasibility",
      "Total",
      "Cost",
      "of",
      "Ownership"
    ],
    "reference": "Feasibility Analysis; Cost-Benefit Evaluation"
  },
  {
    "id": "SYS-139",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Before design begins for a procurement application, analysts lead a session in which purchasing staff, finance managers, and compliance officers review process diagrams, exception paths, approval rules, and sample transactions. Participants identify missing conditions and clarify which role owns each decision. What is the PRIMARY purpose of this activity?",
    "options": [
      "To verify that completed software components conform to detailed technical specifications before implementation.",
      "To validate that documented requirements accurately reflect stakeholder needs and business operations.",
      "To select the physical architecture that will support procurement workflows and authorization controls.",
      "To establish a conversion schedule for replacing the existing procurement application with the new system."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Validation",
      "Stakeholder",
      "Walkthrough"
    ],
    "reference": "Requirements Analysis; Requirements Review"
  },
  {
    "id": "SYS-140",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Which UML diagram is MOST appropriate for showing how application components are deployed across servers, databases, network nodes, and execution environments?",
    "options": [
      "Use-case diagram",
      "Activity diagram",
      "Deployment diagram",
      "Sequence diagram"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "UML",
      "Deployment",
      "Diagrams"
    ],
    "reference": "UML; Physical Architecture Modeling"
  },
  {
    "id": "SYS-141",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A claims platform has passed unit tests for eligibility determination, payment calculation, and customer notification. During an integrated test, the system calculates the correct payment but fails to send a notification when the payment status changes. Which testing objective is MOST directly implicated?",
    "options": [
      "Determining whether end users consider the notification wording understandable and appropriate for customer communication.",
      "Confirming whether the platform has enough computing capacity to support peak claim volumes in production.",
      "Evaluating whether the original requirements adequately described all possible payment and notification scenarios.",
      "Verifying that separately functioning modules exchange information and trigger dependent actions correctly."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Integration",
      "Testing",
      "Interface",
      "Failures"
    ],
    "reference": "Testing and Implementation; Integration Testing"
  },
  {
    "id": "SYS-142",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "After requirements for a customer-service platform are approved, an executive requests a new analytics dashboard that would require additional data integration and delay the planned launch. The feature may be valuable, but it was not included in the original baseline. What should the project manager do FIRST?",
    "options": [
      "Assess the request through formal change control, including its value, dependencies, resource needs, schedule impact, and risk.",
      "Add the dashboard because executive requests should be incorporated whenever they could improve management reporting.",
      "Reject the request because an approved baseline means no requirements can be modified during design or development.",
      "Delay all discussion until post-implementation review because new functionality should only be considered after the original project closes."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Change",
      "Control",
      "Project",
      "Baseline"
    ],
    "reference": "Requirements Management; Scope Governance"
  },
  {
    "id": "SYS-143",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A nonprofit database tracks Donors and Donations. A donor may not yet have made a donation, but every recorded donation must be associated with one donor. Which statement BEST represents the participation constraint?",
    "options": [
      "Donor participation is mandatory because every donor must have at least one related Donation record.",
      "Donor participation is optional, while every Donation requires a related Donor.",
      "Both Donor and Donation participation are optional because the relationship is one-to-many.",
      "Both Donor and Donation participation are mandatory because donation data cannot exist without donor history."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Entity",
      "Relationship",
      "Diagrams",
      "Optionality"
    ],
    "reference": "Data Modeling; Cardinality and Participation"
  },
  {
    "id": "SYS-144",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer contracts with an external provider to host its online-order platform. The provider will maintain availability, perform updates, protect customer data, and respond to outages. Which contractual element would MOST directly help the retailer hold the provider accountable for expected performance?",
    "options": [
      "A user-interface style guide defining approved fonts, colors, screen layouts, and navigation conventions.",
      "A requirements inventory listing possible future features that the retailer may consider after deployment.",
      "A service-level agreement specifying performance targets, uptime expectations, support response times, security obligations, and remedies.",
      "A data dictionary documenting field names, valid values, and format rules for customer and order information."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Outsourcing",
      "Service-Level",
      "Agreements"
    ],
    "reference": "Outsourcing; Vendor Governance"
  },
  {
    "id": "SYS-145",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Before replacing a membership-management system, a professional association migrates member profiles, payment history, event registrations, and credential records. During testing, analysts compare record counts, duplicate rates, missing fields, selected transaction histories, and data transformations between old and new databases. What is the PRIMARY purpose of this activity?",
    "options": [
      "To measure whether employees prefer the new application’s interface to the legacy system’s screen layout.",
      "To assess whether the association has enough funding to operate the legacy and replacement systems in parallel.",
      "To identify new enhancement requests that should be added after the migration process is completed.",
      "To verify that converted data is complete, accurate, and correctly transformed before production cutover."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Migration",
      "Reconciliation"
    ],
    "reference": "System Implementation; Data Conversion"
  },
  {
    "id": "SYS-146",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A product team developing a retail-returns application receives feedback that fraud-screening rules are now more urgent than a planned feature allowing customers to customize return labels. The new fraud requirement is well understood and can fit within the next iteration. What action BEST reflects Agile practice?",
    "options": [
      "Preserve the original release plan because reprioritizing work during development creates instability and invalidates estimates.",
      "Reprioritize the backlog based on current business value and schedule the fraud-screening capability for the next feasible iteration.",
      "Complete the label-customization feature first because visible customer-facing functions should always take precedence over internal controls.",
      "Defer the fraud-screening requirement until maintenance because requirements should be considered fixed after iteration planning begins."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Agile",
      "Development",
      "Backlog",
      "Prioritization"
    ],
    "reference": "Agile Development; Product Backlog"
  },
  {
    "id": "SYS-147",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A regional bank creates encrypted backups of transaction data every night and stores copies at a separate location. Each quarter, its technology team restores selected systems into a test environment and confirms that account histories and balances can be recovered accurately. What is the PRIMARY purpose of these restoration exercises?",
    "options": [
      "To demonstrate that backup and recovery procedures can restore critical data and systems after a disruption.",
      "To confirm that users have been authorized to approve transactions exceeding their assigned financial limits.",
      "To prevent invalid account values from entering the database during high-volume daily processing periods.",
      "To compare legacy-system outputs with replacement-system outputs before converting all branches to a new platform."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recovery",
      "Controls",
      "Restore",
      "Testing"
    ],
    "reference": "System Controls; Business Continuity"
  },
  {
    "id": "SYS-148",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A design team documents that a claims-adjustment application must provide a dashboard displaying claim age, reserve balance, pending documentation, and escalation status. The team also identifies which users require each view and which actions should be available from the dashboard. What is the team primarily defining?",
    "options": [
      "A physical network architecture for hosting dashboard services and connecting branch offices.",
      "A recovery plan for restoring dashboard data after an outage or cybersecurity incident.",
      "A conversion plan for transitioning users from legacy reports to the replacement dashboard.",
      "A logical interface design describing required information, user roles, workflows, and functions independent of technology selection."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Logical",
      "Design",
      "Interface",
      "Requirements"
    ],
    "reference": "Systems Design; Logical Design"
  },
  {
    "id": "SYS-149",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Six months after deploying a new warehouse system, management finds that inventory accuracy improved, but fulfillment speed remains below target because employees still use a manual approval spreadsheet before releasing certain orders. What should leadership do MOST appropriately?",
    "options": [
      "Declare the project complete because one major benefit was achieved and process workarounds should be managed locally.",
      "Restart the full feasibility study because any unmet target invalidates the original system-selection decision.",
      "Use the review findings to assess the approval workaround, identify the underlying requirement or control issue, and plan a targeted improvement.",
      "Replace the warehouse-management system because post-implementation findings show that user behavior cannot be addressed through process or system changes."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Corrective",
      "Planning"
    ],
    "reference": "System Evaluation; Benefits Realization"
  },
  {
    "id": "SYS-150",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A distributor purchases a commercial warehouse-management package that supports most standard workflows. It must decide whether to configure available settings for regional reporting differences or commission custom code that changes the package’s core processing logic. Which principle should MOST guide the decision?",
    "options": [
      "Customization should be preferred because commercial packages are generally unable to support region-specific reporting needs.",
      "Configuration should be evaluated first because it preserves vendor-supported functionality and reduces maintenance complexity when it meets the documented need.",
      "All workflow differences should be eliminated because package implementation requires every business process to follow vendor defaults.",
      "Core package code should be modified whenever users request an enhancement, regardless of long-term upgrade or support implications."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Application",
      "Packages",
      "Configuration",
      "vs.",
      "Customization"
    ],
    "reference": "Alternative Systems-Building Approaches; Application Packages"
  },
  {
    "id": "SYS-151",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hospital is replacing its medication-reconciliation system. Nurses report that the documented workflow is followed consistently, but direct observation shows that staff frequently create handwritten notes during admission because outside medication lists arrive in inconsistent formats. Before finalizing requirements, what should the analyst do MOST appropriately?",
    "options": [
      "Exclude the handwritten notes because informal workarounds should not influence formal system requirements.",
      "Require nurses to follow the documented workflow before collecting additional information about medication reconciliation.",
      "Analyze the workaround to determine whether it reflects an unmet information need, data-quality issue, or required exception process.",
      "Replace the outside medication-list process with a single standard interface before assessing why nurses use handwritten notes."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Requirements",
      "Elicitation",
      "Observation"
    ],
    "reference": "Requirements Gathering; Business Process Analysis"
  },
  {
    "id": "SYS-152",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A team begins documenting a university financial-aid application. It first identifies the broad function “Process Financial Aid,” then divides it into Verify Eligibility, Calculate Award, Review Exceptions, and Notify Student. Which analysis technique is MOST clearly being used?",
    "options": [
      "Functional decomposition, because a broad business function is being separated into smaller, manageable subprocesses.",
      "Normalization, because repetitive financial-aid data is being reorganized to eliminate duplicate attributes and update anomalies.",
      "Encapsulation, because data and operations are being combined into objects that control access to student financial records.",
      "Deployment modeling, because the team is determining how financial-aid components will be distributed across servers and databases."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Functional",
      "Decomposition",
      "Structured",
      "Analysis"
    ],
    "reference": "Structured Analysis; Process Modeling"
  },
  {
    "id": "SYS-153",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A credit union wants to introduce a mobile account-opening application. The proposed technology is affordable, technically compatible, and strongly supported by customers. However, compliance officers identify uncertainty about whether the planned identity-verification workflow meets current anti-money-laundering and record-retention requirements. Which issue should management assess FIRST?",
    "options": [
      "Whether branch employees prefer mobile enrollment to the existing paper-based account-opening process.",
      "Whether projected new-account growth will offset the cost of mobile-development and vendor-support services.",
      "Whether the application can process identity documents quickly enough during high-volume enrollment periods.",
      "Whether the proposed workflow satisfies applicable legal, regulatory, and compliance obligations before implementation proceeds."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Feasibility",
      "Analysis",
      "Legal",
      "and",
      "Regulatory",
      "Constraints"
    ],
    "reference": "Feasibility Study; Compliance Requirements"
  },
  {
    "id": "SYS-154",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A university database stores Student records containing StudentID, university email address, legal name, date of birth, and program. Administrators state that StudentID is unique and stable, while email addresses can change if a student changes campuses or receives a new account. Which field is MOST appropriate as the primary key?",
    "options": [
      "Legal name, because names are familiar to users and can be displayed in most student-facing reports.",
      "StudentID, because it uniquely and reliably identifies each student record over time.",
      "University email address, because it is used for most communication with students and faculty.",
      "Date of birth, because it helps distinguish students with similar names and program enrollments."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Modeling",
      "Candidate",
      "Keys"
    ],
    "reference": "Data Modeling; Entity Identification"
  },
  {
    "id": "SYS-155",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A medical-device manufacturer is planning a software release. Stakeholders request an improved dashboard, automated audit trails, enhanced exports, and a new analytics module. The audit-trail requirement is necessary for an upcoming regulatory review, while the remaining requests would improve usability or decision support. How should the team prioritize the release?",
    "options": [
      "Implement the dashboard first because user-interface improvements are most visible to stakeholders and easiest to demonstrate.",
      "Treat all four features as equal because stakeholder requests should not be ranked once they have been documented.",
      "Prioritize the audit-trail requirement as mandatory, then evaluate the remaining features by value, dependency, effort, and release capacity.",
      "Delay every requested feature until after the regulatory review so the team can avoid changes to the current production environment."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Requirements",
      "Prioritization",
      "Risk-Based",
      "Planning"
    ],
    "reference": "Requirements Management; Project Scope"
  },
  {
    "id": "SYS-156",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A systems analyst is preparing a context diagram for a new hotel-reservation platform. Which element should be placed outside the system boundary as an external entity rather than inside the reservation system?",
    "options": [
      "A payment processor that exchanges authorization and settlement information with the reservation platform.",
      "A reservation-validation process that checks room availability before confirming a booking.",
      "A room-inventory data store containing property, availability, and rate information.",
      "A confirmation-generation process that creates email receipts after a reservation is completed."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "System",
      "Boundaries",
      "Context",
      "Diagrams"
    ],
    "reference": "Structured Analysis; Context Diagram"
  },
  {
    "id": "SYS-157",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A development team repeatedly postpones refactoring poorly structured code in order to complete new customer-facing features. Over time, changes take longer, defects increase, and developers struggle to estimate work accurately. Which action BEST addresses the underlying issue?",
    "options": [
      "Increase the number of features included in each sprint so delayed technical improvements can be absorbed more quickly.",
      "Freeze all business requests until every existing feature has been fully redesigned and documented.",
      "Move all refactoring activity to post-implementation maintenance because active iterations should contain only visible functionality.",
      "Allocate planned capacity for reducing technical debt while balancing it against high-value backlog items and operational risk."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Agile",
      "Development",
      "Technical",
      "Debt"
    ],
    "reference": "Agile Development; Iterative Delivery"
  },
  {
    "id": "SYS-158",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A nonprofit is replacing its donor-management system. The legacy database stores full names in one field, while the replacement system requires separate first-name, middle-name, and last-name fields. Some records contain prefixes, suffixes, or incomplete data. Before migration, what should the project team define?",
    "options": [
      "A direct-conversion schedule that moves all donor records at a single cutover time without interim validation.",
      "Explicit data-transformation, cleansing, and exception-handling rules for converting legacy records into the new structure.",
      "A use-case diagram showing how donors, staff, and payment processors interact with the new fundraising application.",
      "A post-implementation review plan focused on measuring donor retention after the replacement system has been in production."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Migration",
      "Transformation",
      "Rules"
    ],
    "reference": "System Implementation; Data Conversion"
  },
  {
    "id": "SYS-159",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A requirement for an emergency-notification platform states, “The system must handle large volumes of alerts during severe weather.” Which revision would BEST create a testable nonfunctional requirement?",
    "options": [
      "“The system shall transmit 50,000 alerts within five minutes while maintaining delivery-status reporting under defined peak-load conditions.”",
      "“The system shall use a scalable cloud architecture selected by the technical team to handle future notification demand.”",
      "“The system shall provide a reliable experience when users send emergency messages during unpredictable weather events.”",
      "“The system shall prioritize alerts based on the urgency determined by authorized emergency-management personnel.”"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Acceptance",
      "Criteria",
      "Nonfunctional",
      "Requirements"
    ],
    "reference": "Requirements Specification; Performance Criteria"
  },
  {
    "id": "SYS-160",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A chief financial officer requests a monthly dashboard showing revenue variance, overdue receivables, cash-flow projections, and regional performance. Before selecting charts or designing screen layouts, what should the analyst determine FIRST?",
    "options": [
      "Which visualization software provides the greatest number of chart types and automated formatting options.",
      "Whether the dashboard should be deployed through direct conversion or phased conversion across finance departments.",
      "What decisions the CFO will make, which metrics are needed, how current the data must be, and what drill-down capability is required.",
      "Which database platform can store the highest volume of monthly financial data at the lowest operating cost."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Output",
      "Design",
      "Management",
      "Information"
    ],
    "reference": "Systems Design; Output Requirements"
  },
  {
    "id": "SYS-161",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A payroll application permits reimbursement claims from $0.01 through $5,000.00 without supervisor approval, while any amount above $5,000.00 requires additional review. Which test set BEST applies boundary value analysis?",
    "options": [
      "Test reimbursements of $100.00, $500.00, $1,000.00, and $2,000.00 because they represent common transaction values.",
      "Test reimbursement amounts immediately below, at, and immediately above the threshold, such as $4,999.99, $5,000.00, and $5,000.01.",
      "Test only amounts above $5,000.00 because the approval workflow is the highest-risk element of the reimbursement process.",
      "Test a single reimbursement amount of $5,000.00 because one valid threshold test is sufficient to confirm the system rule."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Testing",
      "Boundary",
      "Value",
      "Analysis"
    ],
    "reference": "Test Planning; Input Validation"
  },
  {
    "id": "SYS-162",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A financial-services firm determines that its trading application must be restored within two hours after a major system outage to avoid unacceptable operational and regulatory consequences. Which disaster-recovery metric is the firm defining?",
    "options": [
      "Recovery point objective, because it specifies the maximum amount of transaction data the organization can afford to lose.",
      "Service-level agreement, because it defines the provider’s expected response time for technical support requests.",
      "Mean time between failures, because it estimates the average operating period before an application interruption occurs.",
      "Recovery time objective, because it defines the maximum acceptable time required to restore the application after disruption."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Disaster",
      "Recovery",
      "Recovery",
      "Time",
      "Objective"
    ],
    "reference": "Business Continuity; Recovery Planning"
  },
  {
    "id": "SYS-163",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A health-insurance system works as designed, but a new federal reporting rule requires additional diagnosis fields and a modified submission format. Developers update the system to comply before the new rule takes effect. Which type of maintenance is MOST accurately represented?",
    "options": [
      "Adaptive maintenance, because the system is being modified in response to an external regulatory change.",
      "Corrective maintenance, because the reporting format was previously defective and generated invalid transaction records.",
      "Perfective maintenance, because additional diagnosis fields improve usability without changing system behavior.",
      "Preventive maintenance, because the modified submission format reduces the risk of future hardware or software failure."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "System",
      "Maintenance",
      "Adaptive",
      "Maintenance"
    ],
    "reference": "System Maintenance; Maintenance Types"
  },
  {
    "id": "SYS-164",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A manufacturer is evaluating a cloud-based production-planning platform. The vendor offers strong functionality, but the contract uses proprietary data formats and charges substantial fees for extracting historical information if the company later changes providers. Which risk is MOST directly illustrated?",
    "options": [
      "Scope creep, because additional system requirements may be requested after development has begun.",
      "Parallel-processing risk, because legacy and replacement systems may produce inconsistent production schedules.",
      "Vendor lock-in, because proprietary formats and high exit costs can make switching providers difficult.",
      "Requirements volatility, because user expectations may change after production-planning features are deployed."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Build",
      "vs.",
      "Buy",
      "Vendor",
      "Lock-In"
    ],
    "reference": "Alternative Systems-Building Approaches; Outsourcing"
  },
  {
    "id": "SYS-165",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Six months after a new procurement platform is deployed, invoice-processing time has improved, but the number of duplicate-payment exceptions remains unchanged. Review findings show that some departments continue entering invoice data outside the system before uploading it later. What should project leadership do MOST appropriately?",
    "options": [
      "Close the project because the system achieved its primary cycle-time objective, leaving local departments responsible for duplicate-payment prevention.",
      "Analyze the continued workaround, identify the unmet workflow or control issue, and prioritize a targeted process or system improvement.",
      "Repeat the original feasibility study because duplicate-payment exceptions indicate that the selected solution was technically unsuitable.",
      "Replace the current system with a custom application because post-implementation adoption problems cannot be addressed through incremental changes."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Root",
      "Cause",
      "Analysis"
    ],
    "reference": "System Evaluation; Benefits Realization"
  },
  {
    "id": "SYS-166",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A state privacy law requires a health-plan application to record the purpose for which certain member information is accessed. The project manager identifies affected access logs, interface fields, reporting requirements, test cases, user procedures, and training materials before approving work. What is the PRIMARY value of this analysis?",
    "options": [
      "It determines whether the organization should delay compliance work until the next scheduled maintenance release.",
      "It confirms that the existing system has already met the new requirement because relevant components have been identified.",
      "It identifies the full scope of downstream changes needed to implement and validate the new requirement consistently.",
      "It allows the project team to replace stakeholder review with automated documentation of affected system components."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Requirements",
      "Traceability",
      "Regulatory",
      "Change"
    ],
    "reference": "Requirements Management; Change Impact Analysis"
  },
  {
    "id": "SYS-167",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Which artifact is MOST appropriate when analysts need to document a set of business rules in which several combinations of conditions lead to distinct actions?",
    "options": [
      "A decision table that maps combinations of conditions to the corresponding processing outcomes.",
      "A context diagram that shows external entities and the major information exchanged across a system boundary.",
      "A use-case diagram that identifies actors and the high-level functions available to each actor.",
      "A data dictionary that defines the format, source, and allowable values of system data elements."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Decision",
      "Tables"
    ],
    "reference": "Structured Analysis; Decision Logic"
  },
  {
    "id": "SYS-168",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A retailer frequently changes return-policy rules based on product category, purchase date, promotion status, and customer membership level. The current application embeds those rules directly in program code, requiring developer involvement for minor policy updates. Which design choice would MOST improve the system’s long-term maintainability?",
    "options": [
      "Store the rules in separate spreadsheets maintained by regional sales managers outside the transaction system.",
      "Move all return decisions into manual review so policy changes no longer require modifications to automated workflows.",
      "Combine every policy condition into a single database field so the application retrieves one reusable rule value for all returns.",
      "Externalize configurable business rules so authorized personnel can update approved policy logic without modifying core application code."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Business",
      "Rules",
      "Management",
      "Maintainability"
    ],
    "reference": "Requirements Specification; System Design"
  },
  {
    "id": "SYS-169",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A company compares two customer-service platforms. One requires a high initial implementation investment but low annual support costs. The other has minimal startup cost but recurring subscription, integration, and data-storage charges that increase with transaction volume. Which analysis is MOST appropriate?",
    "options": [
      "Select the first platform because high implementation cost generally indicates a more stable long-term technology investment.",
      "Compare total cost of ownership and expected benefits over a defined planning horizon, including recurring and variable operating costs.",
      "Select the second platform because lower startup cost is the most reliable indicator of financial feasibility.",
      "Defer the comparison until after user acceptance testing because financial effects cannot be evaluated before users access completed software."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Economic",
      "Feasibility",
      "Cost",
      "Classification"
    ],
    "reference": "Feasibility Analysis; Cost-Benefit Analysis"
  },
  {
    "id": "SYS-170",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A completed pharmacy application is tested in a controlled environment using integrated prescription, inventory, insurance, and notification workflows. Testers verify that the system performs required functions across modules before pharmacists begin formal acceptance testing. Which type of testing is MOST directly being performed?",
    "options": [
      "Unit testing, because each individual program function is being evaluated independently from related components.",
      "Regression testing, because previously tested features are being rerun after a modification to one application module.",
      "System testing, because the complete integrated application is being evaluated against overall functional requirements.",
      "User acceptance testing, because business users are confirming the completed system supports representative work scenarios."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "System",
      "Testing",
      "vs.",
      "User",
      "Acceptance",
      "Testing"
    ],
    "reference": "Testing and Implementation; Validation"
  },
  {
    "id": "SYS-171",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A chief operating officer wants a dashboard for monitoring order delays. Before choosing charts, color schemes, or dashboard software, the analyst asks which decisions the executive will make, which metrics should trigger action, how current the information must be, and whether regional drill-down is needed. What is the analyst primarily determining?",
    "options": [
      "Information and output requirements needed to support the executive’s operational decisions.",
      "The physical infrastructure required to host dashboard services and store historical order-performance data.",
      "The conversion strategy needed to replace existing operational reports with the proposed dashboard.",
      "The acceptance criteria used to determine whether the completed dashboard conforms to interface design standards."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Output",
      "Design",
      "Management",
      "Information"
    ],
    "reference": "Systems Design; Reporting Requirements"
  },
  {
    "id": "SYS-172",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A membership association migrates member records from an older database to a new platform. During test conversions, the project team finds matching record counts but discovers that some historical membership levels were converted to incorrect categories because of an outdated mapping rule. What should the team do before production cutover?",
    "options": [
      "Proceed with conversion because matching record counts demonstrate that the migration is sufficiently complete.",
      "Replace the new platform’s membership categories so they match every legacy category exactly, regardless of current business definitions.",
      "Limit validation to recently active members because historical records have little operational value after deployment.",
      "Correct the transformation rule, rerun the affected conversion, and reconcile data quality before approving the final migration."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Migration",
      "Reconciliation"
    ],
    "reference": "System Implementation; Data Conversion"
  },
  {
    "id": "SYS-173",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A product team creates a limited clickable model to test whether customers understand a new checkout workflow. After feedback, the team plans to build production-ready increments that include tested code, integrations, security controls, and deployable functionality. Which statement BEST distinguishes the two activities?",
    "options": [
      "A prototype is intended to replace requirements analysis, whereas an Agile increment is used only after all requirements are frozen.",
      "A prototype primarily explores assumptions, while a production increment is expected to meet agreed quality standards and deliver usable functionality.",
      "A prototype is used only for data modeling, whereas Agile increments are used only for interface design and customer feedback.",
      "A prototype requires full integration testing, whereas an Agile increment is not tested until the project reaches final deployment."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Agile",
      "Development",
      "Prototyping"
    ],
    "reference": "Alternative Development Approaches; Agile Methods"
  },
  {
    "id": "SYS-174",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A utility company plans to run its legacy billing system and a replacement platform for two complete billing cycles. The company will compare calculated charges, tax treatment, account balances, and exception handling before retiring the older application. Which trade-off BEST characterizes this approach?",
    "options": [
      "It minimizes staff workload because users process each billing cycle through only one operational environment.",
      "It eliminates the need for acceptance testing because output comparison provides complete evidence of operational readiness.",
      "It reduces implementation risk by enabling comparison, but requires duplicate processing, additional resources, and careful reconciliation.",
      "It allows selected customer groups to use the new system first while the remainder of the organization continues using the legacy platform."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Parallel",
      "Conversion",
      "Implementation",
      "Risk"
    ],
    "reference": "System Implementation; Conversion Strategies"
  },
  {
    "id": "SYS-175",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A hospital prepares to migrate patient-contact information to a replacement scheduling system. Analysts find duplicate patient records, inconsistent phone-number formats, outdated addresses, and missing preferred-language values. Which activity should occur before final conversion?",
    "options": [
      "Apply defined cleansing, standardization, deduplication, and exception-handling rules, then validate the corrected data.",
      "Transfer all records without modification because the replacement application can resolve inconsistent values after deployment.",
      "Delete records with incomplete values because preservation of historical information is less important than migration speed.",
      "Convert only records used during the prior year because older records are unlikely to affect future appointment scheduling."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Cleansing",
      "Data",
      "Quality"
    ],
    "reference": "Data Conversion; Data Preparation"
  },
  {
    "id": "SYS-176",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A financial institution determines that, after a major outage, it can tolerate losing no more than fifteen minutes of transaction data. Which metric is the institution defining?",
    "options": [
      "Recovery time objective, because it specifies the maximum acceptable period before the application must be restored.",
      "Mean time between failures, because it estimates the expected duration of normal operation before an interruption occurs.",
      "Service-level objective, because it specifies the vendor’s target response time for technical support incidents.",
      "Recovery point objective, because it specifies the maximum acceptable amount of data loss measured in time."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Recovery",
      "Point",
      "Objective"
    ],
    "reference": "Business Continuity; Recovery Planning"
  },
  {
    "id": "SYS-177",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A university has completed analysis for a research-administration platform. Leadership asks for a document that explains the business problem, compares feasible alternatives, estimates costs and benefits, identifies risks, and recommends an approach for approval. What should the analysis team prepare?",
    "options": [
      "A test plan describing expected results and acceptance scenarios for validating the completed platform.",
      "A systems proposal summarizing alternatives and supporting management’s selection of a preferred solution.",
      "A data dictionary defining the names, formats, valid values, and sources of proposed research-administration data elements.",
      "A deployment plan listing implementation tasks, conversion activities, user-training sessions, and production-support procedures."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Systems",
      "Proposal",
      "Alternative",
      "Evaluation"
    ],
    "reference": "Feasibility Study; Systems Proposal"
  },
  {
    "id": "SYS-178",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A lender wants a visual representation of loan-review logic in which each branch reflects a sequence of conditions, such as credit score, collateral coverage, and requested amount, leading to approval, denial, or escalation. Which artifact would BEST meet this need?",
    "options": [
      "A data-flow diagram showing how applicant information moves among verification, scoring, and underwriting processes.",
      "A class diagram defining LoanApplication, Applicant, Collateral, and UnderwritingDecision objects and their relationships.",
      "A decision tree showing alternative condition paths and the outcome associated with each route through the rules.",
      "An entity relationship diagram modeling the database relationships among applicants, applications, collateral, and loan decisions."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Decision",
      "Trees",
      "Rule",
      "Visualization"
    ],
    "reference": "Structured Analysis; Decision Logic"
  },
  {
    "id": "SYS-179",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "Six months after implementing a purchasing platform, the organization achieves faster approval times but still experiences duplicate-payment exceptions. Review findings show that some departments create invoice spreadsheets outside the system, then upload summary information later. What should leadership do MOST appropriately?",
    "options": [
      "Analyze the continued workaround to identify the underlying workflow, integration, or control gap and prioritize a focused improvement.",
      "Close the project because cycle-time improvement demonstrates that the implementation produced sufficient business value.",
      "Restart the full feasibility study because continued control exceptions invalidate the original system-selection decision.",
      "Replace the system immediately because user-created spreadsheets demonstrate that no incremental process or design change can resolve the issue."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Post-Implementation",
      "Review",
      "Root",
      "Cause",
      "Analysis"
    ],
    "reference": "System Evaluation; Benefits Realization"
  },
  {
    "id": "SYS-180",
    "category": "Systems Design & Analysis",
    "difficulty": "medium",
    "question": "A software team maintains records of approved versions of requirements, design documents, source code, test cases, and deployment packages. Before a release, the team confirms that all components are compatible, approved, and traceable to the planned version. What practice is MOST directly represented?",
    "options": [
      "Requirements elicitation, because stakeholders are providing updated information about business needs before design begins.",
      "Configuration management, because controlled versions and relationships among system components are maintained throughout development and release.",
      "Process rationalization, because duplicate development artifacts are being removed to simplify organizational workflows.",
      "Post-implementation evaluation, because deployed system outcomes are being compared against expected business benefits."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Configuration",
      "Management",
      "Change",
      "Governance"
    ],
    "reference": "System Development Controls; Configuration Management"
  },
  {
    "id": "OOP-001",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A vehicle-rental application must track each vehicle’s mileage, fuel level, maintenance status, daily rate, and availability. It must also support operations such as reserve, return, calculateCharge, and scheduleMaintenance. Which design approach BEST applies object-oriented principles?",
    "options": [
      "Create separate data-flow processes for mileage, fuel, maintenance, and reservations so each vehicle activity is documented independently.",
      "Define a Vehicle class whose objects contain vehicle-specific attributes and behaviors related to rental operations.",
      "Store vehicle information in global variables and place all rental logic in one large procedure used by every module.",
      "Represent each vehicle as an external entity because rental vehicles exchange reservation and maintenance information with the application."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Classes",
      "Objects",
      "Attributes",
      "Methods"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-002",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A payroll application stores an employee’s hourly rate as a private attribute. The rate can be changed only through an updatePayRate method that checks the manager’s authorization and confirms that the proposed rate falls within an approved range. What is the PRIMARY benefit of this design?",
    "options": [
      "It uses inheritance so all employee objects automatically receive the same pay-rate logic from a parent class.",
      "It creates polymorphism so different employee types can store unrelated versions of the hourly-rate attribute.",
      "It applies aggregation by connecting each employee object to an independent compensation object with no shared behavior.",
      "It encapsulates sensitive data and related business rules, reducing improper direct modification by other components."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Encapsulation",
      "Data",
      "Integrity"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-003",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A university system includes Student, FacultyMember, and StaffMember classes. All three require a university ID, name, email address, and authentication behavior, but each role has unique responsibilities and data. Which design would MOST effectively reduce duplicated code?",
    "options": [
      "Create a Person superclass containing shared attributes and operations, then define specialized subclasses for each university role.",
      "Use three unrelated classes so each role can independently define its own identification and authentication behavior.",
      "Store all roles in a single Student class and use optional fields to distinguish faculty and staff records.",
      "Replace the role classes with a sequence diagram showing how users exchange authentication information with the system."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Inheritance",
      "Code",
      "Reuse"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-004",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An e-commerce application accepts credit-card payments, digital-wallet payments, and bank transfers. Each payment method must support a processPayment operation, but its authorization and confirmation steps differ. Which design approach BEST supports this requirement?",
    "options": [
      "Require every payment type to follow identical authorization logic so transaction processing remains consistent.",
      "Place all payment rules in one global function that uses conditional statements to distinguish each payment type.",
      "Define a common Payment interface or superclass and allow each payment subtype to implement processPayment according to its own rules.",
      "Model each payment provider as a data store because payment transactions are retained for later audit and reconciliation."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Polymorphism",
      "Interfaces"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-005",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A hospital scheduling application allows staff to book appointments without exposing the internal logic that checks provider availability, applies visit-type restrictions, identifies conflicts, and selects appointment slots. Which object-oriented principle is MOST clearly illustrated?",
    "options": [
      "Inheritance, because appointment behavior is transferred from a broader scheduling class to each appointment instance.",
      "Abstraction, because users interact with essential functionality without needing to understand implementation details.",
      "Composition, because appointment objects permanently own all provider and patient records associated with each visit.",
      "Method overloading, because the system uses multiple unrelated versions of the same appointment-booking request."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Abstraction"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-006",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A logistics system creates a Shipment object when an order is released for fulfillment. At creation, the application assigns a shipment number, sets the status to Pending, records a destination, and initializes an empty list of packages. Which class component is MOST appropriate for this work?",
    "options": [
      "An accessor method that returns the shipment status without changing stored shipment information.",
      "A destructor that removes the shipment from memory after the first package is associated with the order.",
      "An overridden method that replaces parent-class behavior after the shipment has entered production.",
      "A constructor that establishes the object’s initial valid state when a Shipment instance is created."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Constructors",
      "Object",
      "Initialization"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-007",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A restaurant point-of-sale system models an Order containing multiple OrderLine objects. When an order is permanently deleted, its line items should not remain as independent objects because they have no meaning outside the order that created them. Which relationship BEST represents this design?",
    "options": [
      "Composition, because each OrderLine has a dependent lifecycle tied to its containing Order.",
      "Aggregation, because OrderLine objects should continue independently after their containing Order is deleted.",
      "Inheritance, because OrderLine should acquire all properties and operations from the Order class.",
      "Polymorphism, because different menu categories may respond differently when an order is canceled."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Composition",
      "Object",
      "Lifecycles"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-008",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A property-management application includes a general Lease class with a calculateMonthlyCharge method. CommercialLease objects must include common-area fees, while ResidentialLease objects include selected utilities. Which implementation is MOST appropriate?",
    "options": [
      "Add all commercial and residential calculations to one base method so every lease uses the same billing process.",
      "Create unrelated CommercialLease and ResidentialLease classes that duplicate shared tenant, property, and lease-term information.",
      "Allow each specialized subclass to override calculateMonthlyCharge while retaining shared Lease attributes and operations.",
      "Replace Lease with a data-flow diagram that documents commercial and residential billing transactions separately."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Method",
      "Overriding",
      "Subclasses"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-009",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which access modifier is MOST appropriate when an attribute should be directly available only within its own class and accessed by other classes through controlled methods?",
    "options": [
      "Public",
      "Private",
      "Static",
      "Abstract"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "Access",
      "Modifiers"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-010",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A consulting firm tracks Consultants and Projects. A consultant may contribute to multiple projects, and each project may include multiple consultants. Consultant records should remain available after a project closes, and project records should remain available when staffing changes. Which design BEST represents this relationship?",
    "options": [
      "Composition, because deleting a project should automatically delete every consultant assigned to it.",
      "Single inheritance, because consultants should derive project information from a parent Project class.",
      "Encapsulation, because consultant assignments should be hidden inside a private name attribute.",
      "An association, often represented through an Assignment object that links consultants and projects without dependent lifecycles."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Association",
      "Many-to-Many",
      "Relationships"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-011",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A development team creates an Employee class that stores employee identity information, calculates payroll, manages building-access permissions, schedules training, produces tax filings, and creates expense reports. Which revision would MOST improve cohesion?",
    "options": [
      "Split unrelated responsibilities into focused classes while keeping employee identity and directly related behavior within Employee.",
      "Add more methods to Employee so all human-resources functions remain centrally available through one comprehensive class.",
      "Make every Employee attribute public so other classes can access and modify data without controlled methods.",
      "Replace Employee with a single global procedure because multiple responsibilities cannot be represented effectively in object-oriented systems."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Cohesion",
      "Class",
      "Design"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-012",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A shipping application’s OrderService directly creates and controls a specific third-party carrier API class throughout its code. When the company changes carriers, developers must revise numerous OrderService methods. Which redesign would MOST reduce coupling?",
    "options": [
      "Add more carrier-specific methods directly to OrderService so future vendor rules remain in one central location.",
      "Move all carrier behavior into the Order object because every order must eventually be associated with a selected carrier.",
      "Depend on a carrier interface and provide carrier-specific implementations through that abstraction.",
      "Make the third-party API class public and static so all application components can use the selected carrier consistently."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Coupling",
      "Dependency",
      "Inversion"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-013",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A retail application must maintain one shared counter that assigns the next available customer-service ticket number, regardless of how many Ticket objects exist. Which implementation is MOST appropriate?",
    "options": [
      "An instance variable within each Ticket object because every ticket should maintain its own independent sequence.",
      "A static class-level field or method because the counter belongs to the Ticket class as a whole rather than any one ticket.",
      "A destructor because ticket numbers should be removed after a customer-service interaction is completed.",
      "A composition relationship because each ticket number must be permanently owned by a separate counter object."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Static",
      "Members"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-014",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A development team wants EmailNotification, SMSNotification, and PushNotification classes to guarantee that each provides a send method. The classes do not need to share stored data or a common implementation. Which construct BEST fits this requirement?",
    "options": [
      "An abstract class containing all notification data fields and default communication behavior.",
      "A composition relationship linking each notification class to one shared notification object.",
      "A static utility class storing reusable notification instances for each communication channel.",
      "An interface defining the required send operation without requiring shared implementation details."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Interface",
      "vs.",
      "Abstract",
      "Class"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-015",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A systems analyst begins modeling a veterinary-clinic application by identifying Pet, Owner, Appointment, Veterinarian, Invoice, and Prescription as core concepts. The analyst defines relevant information, responsibilities, and relationships before selecting programming languages, databases, or hosting platforms. What phase of object-oriented development is MOST clearly represented?",
    "options": [
      "Object-oriented analysis, because business-domain entities, responsibilities, and relationships are being identified before technical implementation decisions.",
      "Physical system design, because the analyst is selecting technical components, storage technologies, and infrastructure for deployment.",
      "Integration testing, because the application’s objects are being evaluated to ensure they exchange information correctly across modules.",
      "Adaptive maintenance, because the existing veterinary application is being modified in response to external environmental change."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Object-Oriented",
      "Analysis",
      "Domain",
      "Modeling"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-016",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A banking application stores an account’s current balance as a private attribute. Other components may retrieve the balance through a getBalance method, but deposits and withdrawals must occur through methods that validate the transaction amount and update the account history. Which design objective is MOST directly supported?",
    "options": [
      "Inheritance, because all account types receive the same balance value from a shared parent class.",
      "Encapsulation, because access to sensitive account data and state changes is controlled through defined operations.",
      "Aggregation, because transaction histories exist independently from the account object that created them.",
      "Polymorphism, because each account must use unrelated versions of the balance attribute."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Encapsulation",
      "Accessor",
      "and",
      "Mutator",
      "Methods"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-017",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A logistics application has Truck, Van, and Drone delivery classes. All must store an identifier, current location, and delivery status, and all must provide a calculateEstimatedArrival operation. However, each vehicle type uses a different calculation method. Which design is MOST appropriate?",
    "options": [
      "Define an abstract DeliveryVehicle class with shared attributes and an abstract calculateEstimatedArrival method implemented by each subclass.",
      "Create one global procedure that accepts every vehicle type and uses long conditional statements to determine its behavior.",
      "Store all vehicle information in a single database table and avoid creating specialized classes for different delivery methods.",
      "Define DeliveryVehicle as an interface containing location and status fields that all vehicle classes must inherit directly."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Abstract",
      "Classes",
      "Shared",
      "Behavior"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-018",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A customer-service application includes a createTicket method. Some requests require only a customer ID and issue description, while others also include an urgency level, attachment, and assigned department. The development team wants to use the same method name while allowing different parameter combinations. Which concept is MOST directly illustrated?",
    "options": [
      "Method overriding, because subclasses replace an inherited method with a specialized implementation.",
      "Inheritance, because ticket objects receive attributes and operations from a shared parent class.",
      "Method overloading, because multiple methods share a name but differ in their parameter lists.",
      "Composition, because each ticket permanently owns the staff members assigned to resolve it."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Method",
      "Overloading"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-019",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A university system links Course objects with Instructor objects. An instructor may teach different courses over time, and a course may be reassigned to another instructor. Removing a course from the schedule should not delete the instructor record. Which relationship BEST represents this model?",
    "options": [
      "Composition, because an instructor object should be destroyed whenever a related course is removed.",
      "Association, because Course and Instructor objects are related but have independent lifecycles.",
      "Inheritance, because Course should acquire the identifier and employment information of Instructor.",
      "Encapsulation, because course assignments should be stored only through private access-control methods."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Association",
      "vs.",
      "Composition"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-020",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A claims system stores AutoClaim, PropertyClaim, and LiabilityClaim objects in one collection. When the system invokes calculateSettlement on each object, the correct claim-specific calculation runs without the caller checking the object’s concrete type. What object-oriented capability is MOST directly demonstrated?",
    "options": [
      "Polymorphism, because a common operation produces behavior appropriate to each specific claim type.",
      "Aggregation, because the claims are contained in a shared collection with no individual responsibilities.",
      "Encapsulation, because each claim exposes all internal calculation details to the calling code.",
      "Static binding, because the same calculation must be selected before any claim object is created."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Polymorphism",
      "Dynamic",
      "Dispatch"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-021",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A developer creates a ReportManager class that retrieves data, formats reports, sends emails, schedules jobs, manages user permissions, and stores audit logs. Changes to any of these areas regularly require edits to the same class. Which redesign would MOST improve maintainability?",
    "options": [
      "Convert all ReportManager methods to static methods so every component can use the same shared logic.",
      "Add more responsibilities to ReportManager so all reporting-related code remains in one centralized location.",
      "Split the responsibilities into focused classes, such as ReportGenerator, ReportScheduler, NotificationService, and AuditLogger.",
      "Make all ReportManager fields public so other components can perform specialized work without creating additional objects."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Single",
      "Responsibility",
      "Principle"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-022",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An e-commerce platform sends order notifications through a messaging provider. Management wants the ability to switch among email, SMS, and third-party messaging services without changing the order-processing logic. Which design approach BEST supports this requirement?",
    "options": [
      "Add a separate conditional branch for every provider directly inside the Order class.",
      "Define a NotificationService interface and allow provider-specific classes to implement it.",
      "Store the current provider name in a public global variable so all modules can select the same notification behavior.",
      "Create a parent Order class that inherits the methods and settings of every possible messaging provider."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Interfaces",
      "Loose",
      "Coupling"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-023",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A medical-record system creates a Patient object only when a medical-record number, legal name, and date of birth have been provided in valid form. The development team wants to prevent creation of Patient objects that are missing required identifying information. Where should this validation MOST appropriately occur?",
    "options": [
      "In the constructor or factory method responsible for creating the Patient object in a valid initial state.",
      "In a destructor that checks fields when the Patient object is removed from memory after use.",
      "In an unrelated reporting method that runs after patient records are displayed to clinic staff.",
      "In a public field so any component can change identifiers if information is initially missing."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Constructors",
      "Validation"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-024",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A developer updates a TaxCalculator class. The only other class requiring modification is InvoiceService, which directly invokes TaxCalculator methods. In a UML class diagram, which relationship MOST accurately captures this situation?",
    "options": [
      "Inheritance, because InvoiceService becomes a specialized form of TaxCalculator whenever tax logic changes.",
      "Composition, because TaxCalculator cannot exist independently from the InvoiceService object that calls it.",
      "Dependency, because InvoiceService relies on TaxCalculator and may be affected by changes to its interface.",
      "Aggregation, because TaxCalculator permanently contains multiple InvoiceService objects as part of its lifecycle."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Class",
      "Diagrams",
      "Dependencies"
    ],
    "reference": "UML Class Modeling"
  },
  {
    "id": "OOP-025",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A financial system creates a Transaction object after a payment is authorized. The transaction amount, payer, timestamp, and authorization code should never change after creation; corrections must be recorded as separate reversal or adjustment transactions. What is the PRIMARY benefit of making Transaction immutable?",
    "options": [
      "It allows subclasses to replace transaction values automatically whenever payment rules change.",
      "It improves auditability and reduces accidental or unauthorized modification of completed transaction records.",
      "It eliminates the need to validate payment information before the transaction object is created.",
      "It allows a single Transaction object to represent all payments made by the same customer over time."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Immutable",
      "Objects"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-026",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which relationship best describes a Department object that contains Employee objects, while employees can continue to exist even if the department is dissolved or reorganized?",
    "options": [
      "Composition",
      "Inheritance",
      "Aggregation",
      "Overloading"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Aggregation"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-027",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A retail application initially makes DiscountedOrder inherit from Order. Later, the business requires that any order may combine multiple discount strategies, including loyalty rewards, promotional codes, and volume discounts. Which redesign is MOST flexible?",
    "options": [
      "Replace inheritance with composable discount-strategy objects that can be attached to an Order as needed.",
      "Create a separate subclass for every possible combination of promotion, loyalty status, and volume-discount rule.",
      "Move all discount fields into a public Order attribute so any external component can edit the discount calculation.",
      "Eliminate the Order class and calculate discounts entirely through a database trigger for every transaction."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Favor",
      "Composition",
      "Over",
      "Inheritance"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-028",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A document-management system expects any object derived from Document to support open, save, and archive operations. A new ReadOnlyDocument subclass throws an exception whenever save is called, even though application code routinely treats it as a standard Document. Which design concern is MOST directly raised?",
    "options": [
      "The subclass may violate substitutability because it cannot safely fulfill behavior expected of the base Document type.",
      "The system has excessive cohesion because Document methods are concentrated in one class.",
      "The system has insufficient aggregation because read-only documents cannot contain editable document components.",
      "The subclass demonstrates correct polymorphism because derived classes should always remove inherited behavior they do not need."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Liskov",
      "Substitution",
      "Principle"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-029",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A hotel-booking system must determine whether a room is available for a requested date range. The development team is deciding whether the Reservation object, Room object, or a separate AvailabilityService should own this responsibility. Which criterion is MOST useful when assigning the responsibility?",
    "options": [
      "Assign it to the class with the most methods so related logic remains centralized in the largest object.",
      "Assign it to the component that has the necessary information and can perform the task with the least unnecessary coupling.",
      "Assign it to the user-interface class because availability decisions begin when a guest submits a booking request.",
      "Assign it to a global utility function so no domain object needs to know about reservation dates or room status."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Object-Oriented",
      "Analysis",
      "Responsibility",
      "Assignment"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-030",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which statement BEST describes an abstract method in an object-oriented language?",
    "options": [
      "A method that stores a value shared by every object created from a class.",
      "A method that may be called only by objects belonging to subclasses of the current class.",
      "A method that includes a complete implementation but cannot be overridden by a derived class.",
      "A method declared without a complete implementation that subclasses are expected to provide."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Abstract",
      "Methods"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-031",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A banking application requires every Account object to maintain a nonnegative available balance unless an approved overdraft limit applies. Developers currently allow multiple services to modify the balance field directly, creating occasional inconsistencies between the balance and transaction history. Which redesign BEST protects the account’s business rules?",
    "options": [
      "Make the balance field public so all services can update it consistently without creating additional methods.",
      "Move all balance calculations into a reporting module because reports are generated after transactions are finalized.",
      "Keep balance private and require deposits, withdrawals, and adjustments to occur through methods that enforce account rules and record transactions.",
      "Create separate subclasses for deposits and withdrawals so each transaction type can directly access the account balance field."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Encapsulation",
      "Class",
      "Invariants"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-032",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A learning-management system initially creates separate subclasses for every notification combination: EmailReminder, SMSReminder, PushReminder, EmailAndSMSReminder, and EmailAndPushReminder. As new communication channels are added, the number of subclasses grows rapidly. Which redesign would MOST improve flexibility?",
    "options": [
      "Replace all notification objects with a single global procedure containing conditional statements for each possible channel combination.",
      "Use composition by allowing a reminder object to contain one or more notification-channel objects selected at runtime.",
      "Add another inheritance level for multi-channel notifications so new combinations can inherit from existing reminder subclasses.",
      "Store all delivery-channel settings in public variables so any class can add or remove channels without changing the object model."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Inheritance",
      "vs.",
      "Composition"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-033",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A tax system processes individual, corporate, and nonprofit filings. Each filing type must calculateTax, but the calculation differs according to its own rules. The processing module should handle all filings without checking every object’s specific class. Which design BEST supports this requirement?",
    "options": [
      "Define a common TaxFiling interface or superclass and invoke calculateTax polymorphically for each filing type.",
      "Store all tax rules in one Filing class and use a lengthy conditional statement to select the correct calculation.",
      "Create unrelated filing classes and require the processing module to determine each object’s class before invoking calculations.",
      "Represent filing types as data stores because tax calculations depend primarily on stored financial information."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Polymorphism",
      "Common",
      "Interface"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-034",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A customer-support system loads the same customer record twice from a database during separate service requests. The two Customer objects have identical customer IDs, names, and contact information, but they occupy different memory locations. Which statement BEST distinguishes object identity from equality?",
    "options": [
      "The objects have identical identity because they contain the same field values.",
      "The objects have different equality because they were created during different service requests.",
      "The objects cannot be compared because customer records should always be represented by one unique object in memory.",
      "The objects may be equal by value while remaining distinct objects with different identities."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Object",
      "Identity",
      "vs.",
      "Equality"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-035",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An order-processing class directly creates a specific payment-provider object whenever an order is submitted. The company wants to test alternative providers and switch vendors without changing order-processing code. Which approach BEST supports this goal?",
    "options": [
      "Make the payment-provider class static so every order uses the same globally available provider instance.",
      "Supply the order-processing class with a payment-service abstraction from outside the class rather than creating a specific provider internally.",
      "Add separate payment-provider methods to the order-processing class so all vendor-specific logic remains in one location.",
      "Store the provider name in the Order object and allow each order to select its own payment-processing implementation directly."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Dependency",
      "Injection",
      "Loose",
      "Coupling"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-036",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A shipping application has a base Delivery class with an estimatedArrival method. DroneDelivery, GroundDelivery, and FreightDelivery each calculate estimated arrival differently because of weather, traffic, routing restrictions, and loading time. Which implementation is MOST appropriate?",
    "options": [
      "Use one base estimatedArrival method containing every delivery rule and a conditional branch for each delivery category.",
      "Create a static utility function that accepts delivery objects and determines arrival time without using class-specific behavior.",
      "Allow each delivery subclass to override estimatedArrival while preserving shared delivery information in the base class.",
      "Create separate data stores for each delivery type so the system can calculate arrival time from stored data instead of object methods."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Method",
      "Overriding",
      "Dynamic",
      "Behavior"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-037",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A project-management application contains Project objects and Milestone objects. A milestone has no business meaning outside the project that created it, and deleting a project should remove its associated milestones from the application. Which relationship is MOST appropriate?",
    "options": [
      "Composition, because Milestone objects depend on the lifecycle of their containing Project object.",
      "Aggregation, because milestones should continue to exist as independent records after a project is deleted.",
      "Inheritance, because milestones should inherit all project attributes and operations from the Project class.",
      "Association, because projects and milestones should remain unrelated objects linked only through a shared project identifier."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Composition",
      "Object",
      "Lifecycles"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-038",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A Customer class stores contact information but also calculates invoices, sends marketing emails, manages support tickets, generates analytics reports, and performs database backups. The class is frequently modified for unrelated reasons. Which redesign would MOST improve cohesion?",
    "options": [
      "Add additional methods to Customer so all customer-related operations remain available through one central object.",
      "Make Customer attributes public so specialized modules can modify data without creating more classes.",
      "Replace Customer with a large utility class because object-oriented models are not appropriate for customer-management systems.",
      "Move unrelated responsibilities into focused services or classes while keeping customer identity and customer-specific behavior together."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Cohesion",
      "Responsibility",
      "Assignment"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-039",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A hospital application models InpatientVisit, OutpatientVisit, and EmergencyVisit. Each visit must have a patient ID, start time, and status, while each type calculates charges differently. The team also wants to prevent direct creation of a generic Visit object. Which design BEST fits these needs?",
    "options": [
      "Use an interface containing patient ID, start time, and status fields that all visit classes inherit directly.",
      "Use an abstract Visit class with shared fields and common behavior, while requiring subclasses to implement charge calculation.",
      "Use one concrete Visit class with optional fields for every visit type and conditional logic for all billing variations.",
      "Use composition by placing every visit inside a Patient object and eliminating separate visit classes."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Abstract",
      "Classes",
      "Shared",
      "State"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-040",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A library application needs one shared counter that generates the next available library-card number, regardless of how many Patron objects exist. Which implementation is MOST appropriate?",
    "options": [
      "An instance field in each Patron object because every patron should independently maintain the next available card number.",
      "A private field in a BorrowedBook object because library-card numbers are primarily associated with checked-out materials.",
      "A static field or method associated with the Patron class because the counter belongs to the class rather than an individual object.",
      "An overridden method in each Patron subclass because card numbers should be generated differently for students, faculty, and visitors."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Static",
      "Members"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-041",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A payment object attempts to authorize a transaction through an external provider. If the provider is unavailable, the application should preserve the order, record the failure, and allow a later retry without marking the order as paid. Which design approach BEST supports this behavior?",
    "options": [
      "Handle the failure through an exception or error result that preserves a valid pending-payment state and records the reason for retry.",
      "Mark the order as paid because payment authorization is expected to succeed once the request reaches the external provider.",
      "Delete the order object because incomplete transactions should not remain in the system after a processing failure.",
      "Retry continuously within the payment method until authorization succeeds, regardless of provider status or timeout conditions."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Exception",
      "Handling",
      "Object",
      "State"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-042",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A reporting platform defines one interface requiring classes to export PDF, export CSV, schedule reports, manage templates, email results, and archive files. Several simple dashboard widgets need only display data and do not support exporting or scheduling. Which redesign MOST follows the interface segregation principle?",
    "options": [
      "Keep the large interface because requiring additional unused methods ensures all reporting components remain consistent.",
      "Move every reporting capability into a base Widget class so interface definitions are no longer needed.",
      "Use inheritance so each widget can override unsupported methods with empty implementations.",
      "Divide the large interface into smaller role-specific interfaces that components implement only when relevant."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Interface",
      "Segregation"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-043",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A consulting firm tracks Departments and Consultants. Each department can have many consultants, but consultants may transfer between departments and must remain in the system even if a department is reorganized or eliminated. Which relationship BEST describes this model?",
    "options": [
      "Composition, because removing a department should also remove all consultant records associated with it.",
      "Aggregation, because departments contain consultants but consultant objects retain independent lifecycles.",
      "Inheritance, because each consultant should derive its department identity and management responsibilities from Department.",
      "Polymorphism, because consultants may perform different roles depending on the department that currently employs them."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Aggregation",
      "Independent",
      "Lifecycles"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-044",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A discount engine applies rules for seasonal promotions, loyalty rewards, employee discounts, and bulk purchases. New discount types are introduced regularly. Developers want to add a new rule without repeatedly editing a central conditional statement that handles every existing rule. Which design BEST follows the open-closed principle?",
    "options": [
      "Maintain one large DiscountCalculator method and add another conditional branch whenever a new discount type is introduced.",
      "Store discount names in a public array so user-interface code can determine which calculation rules apply.",
      "Define a common discount-rule abstraction and add new rule implementations without changing the code that applies existing rules.",
      "Create a new subclass of Order for each possible combination of discount rules that could apply to a transaction."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Open-Closed",
      "Principle"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-045",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which statement BEST describes the primary purpose of a constructor in an object-oriented class?",
    "options": [
      "To establish an object’s initial state when an instance is created.",
      "To provide controlled read-only access to a private attribute after an object has been created.",
      "To permanently remove an object and release its resources when the application no longer needs it.",
      "To replace inherited behavior in a subclass when a specialized version of an operation is required."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Constructors"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-046",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A pharmacy system stores a Prescription object’s refillCount as a private attribute. Refills may be issued only through an authorizeRefill method that checks expiration date, remaining refills, prescriber status, and insurance restrictions before decrementing the count. Which design objective is MOST directly supported?",
    "options": [
      "Inheritance, because every prescription type receives refill behavior from a shared superclass.",
      "Encapsulation, because state changes occur through controlled operations that preserve business rules.",
      "Aggregation, because refill records can exist independently from the prescription that generated them.",
      "Polymorphism, because each prescription object stores a different version of refillCount."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Encapsulation",
      "Invariants",
      "Controlled",
      "State",
      "Changes"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-047",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A hospital application uses a single interface requiring objects to schedule appointments, submit insurance claims, prescribe medication, and generate clinical reports. Several objects need only one or two of these capabilities. Which redesign BEST improves the model?",
    "options": [
      "Keep the unified interface so all clinical objects expose identical functionality to the application.",
      "Create one large abstract class containing default implementations for every clinical operation.",
      "Require all objects to implement unused methods with empty bodies to preserve consistency.",
      "Divide the interface into smaller role-specific interfaces that classes implement only when appropriate."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Interface",
      "Segregation",
      "Role-Specific",
      "Behavior"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-048",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A delivery application tracks StandardShipment, RefrigeratedShipment, and HazardousShipment objects. Each shipment has an identifier, origin, destination, weight, and current status, but each type follows different handling and pricing rules. Which design BEST reduces duplication while preserving specialized behavior?",
    "options": [
      "Create a Shipment superclass for common attributes and operations, then define specialized subclasses for each shipment type.",
      "Place all shipment data in one global structure and use transaction codes to distinguish handling requirements.",
      "Create unrelated classes for each shipment type and duplicate shared fields so each remains fully independent.",
      "Model shipments only as database tables because different handling rules are primarily data-storage concerns."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Inheritance",
      "Generalization"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-049",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A billing module stores CreditCardPayment, ACHPayment, and GiftCardPayment objects in the same collection. When the module calls authorize on each item, the appropriate authorization sequence runs for that payment type without the module checking its specific class. What concept is MOST directly demonstrated?",
    "options": [
      "Composition, because payment objects are grouped together within a shared billing collection.",
      "Encapsulation, because payment authorization details are hidden from users of the billing module.",
      "Polymorphism, because one operation invokes behavior appropriate to each concrete payment type.",
      "Aggregation, because payment objects retain their independent lifecycle after billing is complete."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Polymorphism",
      "Method",
      "Dispatch"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-050",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A manufacturing system contains WorkOrder objects and WorkStep objects. Each WorkStep belongs to one WorkOrder and has no operational meaning if its parent work order is permanently canceled and removed. Which relationship MOST accurately represents this design?",
    "options": [
      "Association, because WorkOrder and WorkStep should remain unrelated except through a shared identifier.",
      "Composition, because WorkStep objects depend on the lifecycle of their containing WorkOrder.",
      "Inheritance, because WorkStep should acquire all parent operations and attributes from WorkOrder.",
      "Aggregation, because WorkStep records should remain independently available after the parent work order is deleted."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Composition",
      "Lifecycle",
      "Dependency"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-051",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A retail application includes a base TaxRule class with a calculateTax method. StateTaxRule and InternationalTaxRule each require different calculations because they apply different rates, exemptions, and jurisdictional rules. Which implementation is MOST appropriate?",
    "options": [
      "Allow each specialized subclass to override calculateTax while retaining shared tax-rule attributes and operations.",
      "Add every jurisdiction’s calculation to the base method and use conditional branches for all possible tax rules.",
      "Create one TaxRule object per transaction and store calculation results without using specialized behavior.",
      "Replace the class hierarchy with a data flow diagram showing the movement of transaction data to tax authorities."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Method",
      "Overriding",
      "Specialized",
      "Behavior"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-052",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An order-processing service directly creates a specific shipping-carrier API client whenever an order is confirmed. Developers want to run unit tests using a simulated carrier and change providers later without revising order-processing logic. Which redesign BEST supports this goal?",
    "options": [
      "Make the carrier API client static so every order-processing instance uses the same provider implementation.",
      "Add a conditional statement for each shipping carrier directly within the order-confirmation method.",
      "Store the carrier provider name in each Order object and let orders call provider methods directly.",
      "Inject a carrier-service abstraction into the order-processing service and supply specific implementations externally."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Dependency",
      "Injection",
      "Testability"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-053",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A clinic application models InPersonVisit, TelehealthVisit, and HomeVisit. Every visit requires a patient identifier, scheduled time, status, and cancellation behavior, but each type calculates charges differently. The team also wants to prevent creation of a generic Visit object. Which design BEST fits?",
    "options": [
      "Use an interface containing shared data fields and require each visit type to inherit those values directly.",
      "Create one concrete Visit class with optional fields and conditional logic for every possible visit variation.",
      "Use an abstract Visit class with common state and behavior while requiring subclasses to implement charge calculation.",
      "Store visit types in a single database table and avoid representing visits through object-oriented classes."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Abstract",
      "Classes",
      "Shared",
      "State"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-054",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A CustomerAccount class stores account details but also calculates invoices, sends notifications, performs fraud checks, generates analytics reports, and manages user permissions. Developers frequently modify the class for unrelated reasons. Which change would MOST improve maintainability?",
    "options": [
      "Make all CustomerAccount fields public so specialized modules can update information without introducing new objects.",
      "Separate unrelated responsibilities into focused services or classes while keeping account-specific data and behavior together.",
      "Add additional methods to CustomerAccount so all customer-related functions remain centrally available.",
      "Replace CustomerAccount with a global utility module because large business entities should not be modeled as objects."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Cohesion",
      "Single",
      "Responsibility",
      "Principle"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-055",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A development team creates a new Invoice object only after assigning an invoice number, customer identifier, issue date, and initial status. Which class component is primarily responsible for establishing this valid initial state?",
    "options": [
      "Constructor",
      "Accessor method",
      "Destructor",
      "Overridden method"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Constructors"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-056",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A customer-service system retrieves the same customer record in two separate application requests. The resulting Customer objects contain identical customer IDs, names, and contact details but exist at different memory locations. Which statement BEST distinguishes identity from equality?",
    "options": [
      "The objects have identical identity because their field values match.",
      "The objects cannot be compared because customer information should be represented by one object at a time.",
      "The objects may be equal by value while remaining distinct objects with separate identities.",
      "The objects must be unequal because they were created during different service requests."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Object",
      "Identity",
      "vs.",
      "Equality"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-057",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A discount engine currently applies seasonal promotions, loyalty rewards, employee discounts, and volume discounts through a long conditional statement. New discount types are expected regularly. Developers want to add rules without repeatedly changing the existing calculation logic. Which design BEST follows the open-closed principle?",
    "options": [
      "Add a new branch to the central conditional statement whenever a new discount type is introduced.",
      "Store discount names in a public list and let interface code determine which calculation applies.",
      "Create a separate Order subclass for every possible combination of discount rules.",
      "Define a common discount-rule abstraction and add new implementations without modifying existing rule-processing code."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Open-Closed",
      "Principle"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-058",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A consulting firm tracks Department objects and Consultant objects. A department may contain many consultants, but consultants can transfer to another department and must remain in the system if a department is dissolved. Which relationship BEST describes this model?",
    "options": [
      "Composition, because deleting a department should delete all associated consultant records.",
      "Aggregation, because departments contain consultants while consultants retain independent lifecycles.",
      "Inheritance, because each consultant should derive management structure and identity from Department.",
      "Polymorphism, because consultants may perform different roles depending on the department where they work."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Aggregation",
      "Independent",
      "Lifecycles"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-059",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A payment service attempts to authorize an order through an external provider. If the provider is unavailable, the application must preserve the order, record the failure, and allow a later retry without incorrectly recording the order as paid. Which approach BEST supports this behavior?",
    "options": [
      "Handle the failure through an exception or error result that preserves a valid pending-payment state and captures the reason for retry.",
      "Mark the order as paid because authorization should be assumed once a request has been sent to the provider.",
      "Delete the order because incomplete payment attempts should not remain in the application after an error.",
      "Retry indefinitely within the same operation until the provider responds successfully, regardless of timeout or retry policy."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Exception",
      "Handling",
      "Object",
      "State"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-060",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which statement BEST describes an abstract method in an object-oriented language?",
    "options": [
      "A method that stores a value shared by every object created from a class.",
      "A method that can be invoked only by a subclass of the class that declares it.",
      "A method declared without a complete implementation that derived classes are expected to provide.",
      "A method with a complete implementation that cannot be changed by subclasses."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Abstract",
      "Methods"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-061",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A hotel-reservation application includes Reservation, Payment, and Invoice objects. When a reservation is confirmed, the Reservation object currently calculates taxes, applies payment rules, generates invoices, and emails guests. The development team wants responsibilities assigned to the components best equipped to perform them. Which redesign is MOST appropriate?",
    "options": [
      "Keep all activities inside Reservation because every action begins when a reservation is confirmed.",
      "Let Reservation coordinate the workflow while delegating payment authorization, invoice creation, and notification to specialized objects or services.",
      "Move all operations to a global utility class so no domain object is responsible for reservation-related behavior.",
      "Store payment, invoice, and notification information in public Reservation fields so other modules can directly update them."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Delegation",
      "Responsibility",
      "Assignment"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-062",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A shipping application creates StandardShipment, RefrigeratedShipment, and HazardousShipment objects based on information entered by a dispatcher. The creation logic includes validation, required documents, and routing setup for each shipment type. Developers want to avoid placing this logic throughout the application. Which approach is MOST appropriate?",
    "options": [
      "Add a separate conditional statement in every module that needs to create a shipment object.",
      "Make Shipment constructors public and allow all user-interface components to select subclasses directly.",
      "Store shipment-type names in a global variable so every module can determine which class it should instantiate.",
      "Use a factory or creation service that selects and initializes the appropriate shipment subtype based on validated input."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Factory",
      "Pattern",
      "Object",
      "Creation"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-063",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A pharmacy application records completed prescription-dispensing events. Once created, the medication, quantity, pharmacist identifier, timestamp, and authorization code should not be changed; corrections must be represented through documented reversal or adjustment events. Why is an immutable DispensingRecord object useful?",
    "options": [
      "It preserves the integrity of completed records and supports reliable auditing by preventing direct modification after creation.",
      "It allows each dispensing event to inherit new medication information automatically from the current prescription object.",
      "It ensures that every dispensing record can be reused for future prescriptions written for the same patient.",
      "It removes the need for validation because immutable objects cannot contain inaccurate information once stored."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Immutability",
      "Auditability"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-064",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A hospital must track which physicians have privileges at which facilities. A physician may have privileges at several facilities, and each facility may credential many physicians. The organization must also record privilege level, approval date, expiration date, and credentialing status for each physician-facility relationship. Which design is MOST appropriate?",
    "options": [
      "Add FacilityID as a single attribute in Physician because each physician should have one active facility at a time.",
      "Add PhysicianID as a single attribute in Facility because facilities should store all approved physicians directly.",
      "Create a PhysicianPrivilege association object that links Physician and Facility and stores relationship-specific details.",
      "Create separate subclasses for each possible physician-facility privilege level and assign physicians to the appropriate class."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Association",
      "Class",
      "Relationship",
      "Attributes"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-065",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A claims application stores a claim’s current status as a private field. Valid transitions include Submitted to Under Review, Under Review to Approved or Denied, and Approved to Paid. Developers want to prevent other components from assigning invalid status values directly. Which design BEST supports this requirement?",
    "options": [
      "Make the status field public so all workflow modules can modify it without requiring additional methods.",
      "Provide a transitionStatus method that validates allowed state changes before updating the private status field.",
      "Store status values in a static variable shared by every Claim object so the workflow remains consistent.",
      "Use inheritance so each possible claim status becomes a subclass with unrestricted access to the parent claim state."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Encapsulation",
      "Validation",
      "Methods"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-066",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A financial-reporting system must export reports as PDF, CSV, or spreadsheet files. The reporting module should be able to request an export without knowing the technical details of each format. Which design BEST supports this objective?",
    "options": [
      "Add exportPdf, exportCsv, and exportSpreadsheet methods directly to every report class in the system.",
      "Store the requested format in a public string and let each report component decide how to create output files.",
      "Create a separate Report subclass for every possible export format and require callers to select the correct subclass.",
      "Define a ReportExporter interface and provide format-specific implementations that the reporting module can use interchangeably."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Interfaces",
      "Substitutability"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-067",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A lending application creates LoanApplication objects only when an applicant identifier, requested amount, loan type, and submission date are present and valid. The team wants every created object to begin in a consistent state and avoid partially initialized applications. Which approach is MOST appropriate?",
    "options": [
      "Enforce required values and initial business rules in the constructor or a controlled factory method before returning the new object.",
      "Allow incomplete objects to be created, then rely on later reporting processes to identify missing application information.",
      "Store all required application values as public fields so user-interface components can complete them in any sequence.",
      "Use a destructor to verify required fields when the object is removed from memory after processing."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Constructors",
      "Class",
      "Invariants"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-068",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A company models Employee, Manager, and SalesRepresentative objects. Managers and sales representatives share employee identity information, payroll data, and login behavior, but managers approve time records while sales representatives calculate commissions. Which statement BEST justifies using inheritance?",
    "options": [
      "Managers and sales representatives are composed of employee objects that must be destroyed when an employee record is deleted.",
      "Employee objects should be stored in a shared collection because all employees require identical runtime behavior.",
      "Manager and SalesRepresentative are specialized kinds of Employee that can inherit common attributes and operations while adding their own behavior.",
      "Employee, Manager, and SalesRepresentative should be unrelated classes because their job duties differ across the organization."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Inheritance",
      "“Is-a”",
      "Relationship"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-069",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An inventory system directly calls methods from a specific barcode-scanner vendor library throughout its receiving and stock-count modules. When the organization evaluates a different scanner vendor, developers discover that multiple classes must be rewritten. Which improvement would MOST reduce the system’s coupling?",
    "options": [
      "Add scanner-specific conditional logic to every receiving and stock-count method so both vendors can be supported.",
      "Define a scanner abstraction and route vendor-specific implementations through that stable interface.",
      "Make the existing scanner library globally accessible so every module uses one consistent vendor-specific API.",
      "Store barcode-scan results in a new database table so scanner changes no longer affect application behavior."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Coupling",
      "Interface-Based",
      "Design"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-070",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A web application creates temporary objects while generating a complex analytics report. Once the report is sent to the user, those temporary objects are no longer referenced by any active component. In an environment with automatic memory management, what generally happens next?",
    "options": [
      "The objects become static class members so they can be reused for later reports.",
      "The objects are converted into immutable records to preserve the report’s historical state.",
      "The objects are immediately deleted by the application’s constructor logic when report generation ends.",
      "The runtime may reclaim their memory through garbage collection when it determines they are no longer reachable."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Object",
      "Lifecycle",
      "Garbage",
      "Collection"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-071",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A base Notification class defines a send method. EmailNotification provides its own send implementation using an email server, while SMSNotification provides a different send implementation using a messaging gateway. Which concept is MOST directly illustrated?",
    "options": [
      "Method overriding, because subclasses provide specialized implementations of an inherited operation.",
      "Method overloading, because the same method name appears with different parameter lists in the same class.",
      "Aggregation, because notification objects are stored together within an application-level collection.",
      "Encapsulation, because notification delivery details are stored in public fields available to all modules."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Overriding",
      "vs.",
      "Overloading"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-072",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A class diagram for an online marketplace indicates that each Order is associated with exactly one Customer, while each Customer may be associated with zero or many Orders. Which notation concept expresses these quantities on the association?",
    "options": [
      "Visibility, which indicates whether class attributes and operations are public, private, or protected.",
      "Dependency, which indicates that a change in one class may affect another class that uses it.",
      "Multiplicity, which specifies how many instances of one class can be associated with an instance of another class.",
      "Generalization, which identifies a parent-child relationship in which one class inherits attributes and operations from another."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Class",
      "Diagrams",
      "Multiplicity"
    ],
    "reference": "UML Class Modeling"
  },
  {
    "id": "OOP-073",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A document-management system handles Draft, Submitted, Approved, and Archived documents. Each state permits different actions: drafts can be edited, submitted documents can be reviewed, approved documents can be published, and archived documents are read-only. The current design uses a large conditional statement throughout the application. Which redesign would MOST improve maintainability?",
    "options": [
      "Make every document field public so interface components can determine allowable actions without relying on document logic.",
      "Represent document states through dedicated state objects or controlled transition logic that encapsulates allowed behavior by status.",
      "Create a separate database table for each state so the application can infer permitted actions based on storage location.",
      "Delete prior document states whenever a new state is entered so the document has only one active value at any time."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "State",
      "Pattern",
      "Behavior",
      "by",
      "State"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-074",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "In an object-oriented language, which access level is commonly used when a member should be available within its own class and to subclasses, but not generally accessible to unrelated classes?",
    "options": [
      "Public",
      "Private",
      "Static",
      "Protected"
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Protected",
      "Access"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-075",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A transferFunds method requires that the source account exist, the transfer amount be positive, and the account have sufficient available funds before the method executes. These conditions are checked before any balance changes occur. What are these conditions MOST accurately called?",
    "options": [
      "Postconditions, because they describe the state that must be true after the transfer completes.",
      "Invariants, because they are rules that must remain true for every account object throughout its entire lifecycle.",
      "Preconditions, because they must be satisfied before the method can perform its operation.",
      "Dependencies, because the transfer method relies on the account database and transaction-history service."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Design",
      "by",
      "Contract",
      "Preconditions"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-076",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A retailer’s checkout system calculates shipping charges using standard, expedited, same-day, and regional-carrier rules. The applicable rule may change based on customer selection, delivery location, and inventory availability. Developers want to avoid placing all shipping logic in one large conditional statement. Which design BEST supports this requirement?",
    "options": [
      "Create separate subclasses of Order for every possible shipping method and customer-location combination.",
      "Define a common shipping-calculation interface and allow the Order to use the appropriate strategy at runtime.",
      "Store the selected shipping method in a public field and let user-interface code perform the rate calculation.",
      "Move all shipping rules into a database trigger so order objects no longer need to coordinate shipping behavior."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Strategy",
      "Pattern",
      "Runtime",
      "Behavior",
      "Selection"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-077",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A proposal-management application duplicates an existing Proposal object to create a new draft. Each proposal contains a mutable list of attached documents. The new draft should begin with copies of the attachments, but editing or removing an attachment in the draft must not alter the original proposal’s attachments. Which approach is MOST appropriate?",
    "options": [
      "Copy only the Proposal reference because both proposals should share a common attachment collection until one is submitted.",
      "Create a shallow copy so the new Proposal has a different object identity while retaining references to the same attachment objects.",
      "Create an independent copy of the attachment collection and its mutable contents so changes in one proposal do not affect the other.",
      "Store the attachment list as a static class member so all Proposal objects use one centralized set of document references."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Deep",
      "Copy",
      "vs.",
      "Shared",
      "References"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-078",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A reporting application uses a base Exporter class with an export method that returns a generated file. A new NullExporter subclass is introduced for users who opt out of file creation, but it throws an unsupported-operation error whenever export is called. Existing code expects every Exporter to successfully return an export result. What is the primary design concern?",
    "options": [
      "The subclass may violate substitutability because it cannot fulfill behavior expected from the base Exporter contract.",
      "The subclass demonstrates appropriate abstraction because opt-out behavior should always remove inherited methods.",
      "The system has excessive aggregation because the reporting application contains multiple exporter objects.",
      "The base class should be made static because subclasses should not determine how files are generated."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Liskov",
      "Substitution",
      "Principle"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-079",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "When a warehouse item falls below its reorder threshold, the inventory application must notify purchasing, update a replenishment dashboard, and optionally alert a regional manager. The development team wants to add or remove notification recipients without revising the inventory-item class each time. Which design BEST supports this goal?",
    "options": [
      "Add separate notification methods for purchasing, dashboards, and managers directly to the InventoryItem class.",
      "Store all recipient addresses in public InventoryItem fields so external components can decide when to send alerts.",
      "Create a global notification procedure that checks every inventory item each minute for changes in stock level.",
      "Allow interested components to subscribe to inventory-status events and react when a reorder condition is published."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Observer",
      "Pattern",
      "Event-Driven",
      "Design"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-080",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A clinical-order class contains methods for validating dosage, calculating a refill date, formatting an internal audit message, and submitting the final order. External components should be able to submit an order but should not call low-level audit-formatting logic directly. Which design BEST reflects appropriate method visibility?",
    "options": [
      "Make every method public so external modules can reuse each step whenever they need to assemble an order.",
      "Expose the intended public operation while keeping internal helper methods private or otherwise restricted to the class’s implementation.",
      "Make all methods protected so only subclasses and unrelated service classes can invoke order-processing behavior.",
      "Move all helper methods to global functions because private methods cannot participate in a complete business workflow."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Method",
      "Visibility",
      "API",
      "Design"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-081",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An insurance system processes several claim types through the same overall sequence: validate submission, calculate coverage, determine settlement, and notify the claimant. The coverage and settlement calculations vary by claim type, but the sequence should remain consistent. Which design BEST captures this requirement?",
    "options": [
      "Use one large conditional statement inside every claim object to determine which sequence applies to each transaction.",
      "Create unrelated claim classes and duplicate the full processing sequence so each can be changed independently.",
      "Define a base workflow that controls the common sequence while allowing subclasses to implement the variable calculation steps.",
      "Store the entire sequence in a database table and require every claim object to interpret the workflow dynamically at runtime."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Template",
      "Method",
      "Pattern",
      "Shared",
      "Algorithm",
      "Structure"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-082",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A payroll system represents money using a MonetaryAmount object containing a currency and amount. Developers want arithmetic operations, such as add or subtract, to avoid altering an existing amount unexpectedly when the same value is used by multiple calculations. Which design is MOST appropriate?",
    "options": [
      "Make MonetaryAmount immutable so arithmetic operations return new values rather than changing the existing object.",
      "Store the currency and amount as public fields so all payroll modules can update a single shared monetary value.",
      "Use inheritance to create separate classes for every possible numeric amount used in payroll calculations.",
      "Maintain one static MonetaryAmount object for each currency so all calculations share the same mutable balance."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Immutable",
      "Value",
      "Objects"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-083",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A booking system models Reservation and Guest. A Reservation must retrieve information about its Guest, but Guest objects do not need to access a list of reservations for the feature currently being designed. Which relationship representation is MOST appropriate?",
    "options": [
      "Composition, because deleting a reservation should automatically delete the guest record associated with it.",
      "Inheritance, because Reservation is a specialized type of Guest with additional booking information.",
      "A bidirectional association, because all related classes should be able to access each other symmetrically.",
      "A unidirectional association from Reservation to Guest, reflecting the required access without adding unnecessary dependency."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Association",
      "Direction",
      "Navigability"
    ],
    "reference": "UML Class Modeling"
  },
  {
    "id": "OOP-084",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A document-review system must support actions such as approve, reject, assign reviewer, and request revision. Users also need the ability to undo certain actions, and the application must maintain an audit trail of what operations occurred. Which design BEST supports these requirements?",
    "options": [
      "Store all document changes as direct updates to public fields so the latest values always replace prior state.",
      "Represent user actions as command objects that can execute, record necessary context, and potentially support reversal or audit logging.",
      "Create a subclass of Document for every possible sequence of review actions that a user may perform.",
      "Use a static utility class that changes document status values without retaining information about the operation that caused each change."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Command",
      "Pattern",
      "Undo",
      "Operations"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-085",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A service-oriented application uses interfaces for payment, notifications, tax calculation, and inventory lookup. Developers want one controlled location where concrete implementations are selected and connected before the application begins handling requests. What is the primary purpose of this arrangement?",
    "options": [
      "It eliminates the need for interfaces because all dependencies are selected before the first user request is processed.",
      "It allows each domain object to create whatever concrete dependencies it requires during normal business processing.",
      "It centralizes application wiring so components can depend on abstractions while concrete implementations are configured in one place.",
      "It ensures that every service becomes a singleton because centralized initialization requires only one object of each class."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Composition",
      "Root",
      "Dependency",
      "Management"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-086",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A SeatReservation object may be in Available, Held, Confirmed, or Cancelled status. A confirmed reservation must have a payment authorization code, while a cancelled reservation must not remain linked to an active boarding pass. Which practice BEST protects these rules throughout the object’s lifecycle?",
    "options": [
      "Enforce invariant checks within controlled state-transition methods before permitting the object to move between statuses.",
      "Allow external modules to set status fields directly because each module understands its own operational responsibility.",
      "Store all status values in a database table and assume that valid relational constraints will enforce every application-level rule.",
      "Create a subclass for each possible state and allow all subclasses to modify related fields without a shared transition policy."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Class",
      "Invariants",
      "State",
      "Consistency"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-087",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A class contains three methods named calculateFee: one accepts an account ID, one accepts an account ID and transaction amount, and one accepts an account ID, transaction amount, and fee category. What concept is illustrated?",
    "options": [
      "Method overriding",
      "Encapsulation",
      "Inheritance",
      "Method overloading"
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Method",
      "Overloading"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-088",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A new shipping platform expects all carrier integrations to implement a ShipCarrier interface with methods such as createLabel and trackPackage. A legacy carrier library uses incompatible method names and data formats, but replacing it is not currently feasible. Which solution BEST enables integration without changing either core system extensively?",
    "options": [
      "Rewrite the new platform so it calls the legacy library’s methods directly throughout the order-fulfillment code.",
      "Create an adapter that translates the expected ShipCarrier interface into calls understood by the legacy carrier library.",
      "Make the legacy library inherit from the new platform’s shipping interface even though its methods and data structures are incompatible.",
      "Store legacy shipping responses in a global data structure and require fulfillment modules to interpret them independently."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Adapter",
      "Pattern",
      "Legacy",
      "Integration"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-089",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An order-processing component retrieves a customer’s address by calling order.getCustomer().getProfile().getAddress().getPostalCode(). Developers want to reduce fragile chains of object navigation and minimize knowledge of distant object structures. Which revision BEST reflects the Law of Demeter?",
    "options": [
      "Make all nested objects public so the order-processing component can access every property directly.",
      "Replace Customer, Profile, and Address with one large Order object that stores all customer and delivery data.",
      "Provide a focused method on an appropriate direct collaborator, such as order.getDeliveryPostalCode(), rather than traversing multiple object relationships.",
      "Add static methods to each nested class so the postal code can be retrieved without creating intermediate object references."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Demeter",
      "Principle",
      "Limited",
      "Knowledge"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-090",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which term refers to the collection of current attribute values held by an object at a particular point in time?",
    "options": [
      "Object state",
      "Class hierarchy",
      "Method signature",
      "Dependency graph"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Object",
      "State"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-091",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A patient-portal application stores a user’s security-answer responses and account-recovery settings. Developers want other components to request a password-reset verification without exposing the stored answers or allowing external code to alter them directly. Which design BEST supports this requirement?",
    "options": [
      "Store recovery answers in public fields so authentication services can read and update them without calling additional methods.",
      "Keep recovery data private and expose a controlled verification operation that returns only the result needed by authorized callers.",
      "Create separate subclasses for each security answer so external authentication components can select the correct answer object.",
      "Move all recovery information into a global variable because account recovery must be accessible throughout the application."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Encapsulation",
      "Information",
      "Hiding"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-092",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A travel-booking application creates Itinerary objects that may include flights, hotels, rental cars, travelers, insurance options, loyalty details, and special accommodations. Many combinations are valid, and developers want to avoid a constructor with a long, error-prone parameter list. Which approach is MOST appropriate?",
    "options": [
      "Make every itinerary property public so calling code can assign values in any order after creating a blank object.",
      "Create a distinct subclass for every possible combination of travel services a customer might select.",
      "Use one constructor containing every potential field, including optional values that callers must pass as null when unused.",
      "Use a builder that incrementally assembles a valid Itinerary while making optional selections explicit and readable."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Builder",
      "Pattern",
      "Complex",
      "Object",
      "Construction"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-093",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A business application includes Employee, Contractor, and Intern records. All require a name, contact information, organization identifier, and login behavior, but each has different compensation and access rules. Which design BEST uses inheritance appropriately?",
    "options": [
      "Define a shared Person or WorkforceMember superclass for common state and behavior, then specialize it for each workforce type.",
      "Create a single Employee class with public fields for every possible contractor and intern attribute, even when most do not apply.",
      "Keep all workforce types unrelated because differences in compensation and access rules prevent any shared design.",
      "Store the common fields in a global utility class and require every workforce object to retrieve them during runtime."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Inheritance",
      "Base-Class",
      "Reuse"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-094",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A document system must calculate storage retention dates for ClinicalDocument, FinancialDocument, and LegalDocument objects. Each type follows a different rule, but the archival module should process all documents through one common operation without inspecting their concrete class. Which design BEST fits?",
    "options": [
      "Place every retention rule in one utility function that switches behavior based on a document-type string.",
      "Require the archival module to cast each object to its specific class before calculating its retention date.",
      "Define a common retention-calculation operation that each document subtype implements according to its own rules.",
      "Store all retention periods in public document fields and allow the archival module to update them directly."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Polymorphism",
      "Subtype",
      "Behavior"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-095",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A payment application supports fraud screening through several optional checks, including address verification, device reputation, velocity monitoring, and sanctions screening. Different payment channels require different combinations of checks, and rules may change frequently. Which design is MOST flexible?",
    "options": [
      "Create a separate Payment subclass for every possible combination of fraud-screening checks.",
      "Compose payment processing from configurable fraud-check components that can be added, removed, or ordered as needed.",
      "Add every possible fraud rule to one base Payment class and disable unused checks through conditional flags.",
      "Move fraud decisions to a database table so payment objects no longer participate in transaction screening."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Composition",
      "Reusable",
      "Components"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-096",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A base Notification class contains a formatMessage method. EmailNotification must format messages using HTML, SMSNotification must shorten messages to character limits, and PushNotification must include a title and compact body. Which implementation is MOST appropriate?",
    "options": [
      "Let each notification subclass override formatMessage while preserving shared delivery metadata in the base class.",
      "Create a static formatting function that accepts notification types and contains conditional logic for every delivery channel.",
      "Put all message formatting rules into the EmailNotification class because email supports the broadest range of content.",
      "Require all notification types to use the same formatting logic so callers receive identical content across channels."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Method",
      "Overriding",
      "Inheritance"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-097",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A customer-management system stores Customer objects in a hash-based collection. Developers define two Customer objects as equal whenever they have the same immutable customer ID, even if other fields such as mailing address differ. Which additional design requirement is MOST important?",
    "options": [
      "The customer ID should be public so any module can change it whenever account information is updated.",
      "Equality should compare every mutable field so two customers are considered equal only if all stored values match exactly.",
      "Customer objects should inherit from the collection class so identity comparisons occur automatically during insertion.",
      "The hash calculation should remain consistent with equality so objects considered equal produce the same hash value."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Equality",
      "Hashing"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-098",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A hotel-booking system needs to determine room availability for requested dates. The team is deciding whether this responsibility belongs in a UserInterface class, a Reservation class, a RoomInventory service, or a global helper function. Which choice BEST follows object-oriented responsibility assignment principles?",
    "options": [
      "Assign it to the user interface because availability is first requested when a guest submits a search.",
      "Use a global helper function because cross-object business rules should never belong to domain objects or services.",
      "Assign it to the component with the relevant inventory and reservation information while minimizing unnecessary dependencies.",
      "Add the logic to the Guest class because guests ultimately receive the result of an availability search."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Class",
      "Responsibilities",
      "Domain",
      "Modeling"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-099",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An order-processing service depends on a tax-calculation component. During unit testing, developers want to simulate tax outcomes without contacting the external tax provider. Which design approach BEST supports this objective?",
    "options": [
      "Make the tax provider a global singleton so every order uses the same production implementation during testing.",
      "Depend on a tax-service interface and substitute a controlled fake or mock implementation during tests.",
      "Store expected tax values directly in public Order fields so test cases can bypass tax calculation entirely.",
      "Put all tax calculations inside the Order class so external dependencies are eliminated from the test environment."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Interfaces",
      "Test",
      "Doubles"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-100",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "An insurance application processes all claim types through the same sequence: verify submission, evaluate coverage, calculate payment, record the decision, and notify the claimant. Only the evaluation and payment calculations differ between claim categories. Which design BEST captures this need?",
    "options": [
      "Define a base claim-processing algorithm that controls the common sequence while subclasses implement the variable steps.",
      "Duplicate the full claim-processing sequence in every claim subtype so each category can be maintained independently.",
      "Store process steps in public arrays and let each caller choose the order in which the operations should execute.",
      "Use a single conditional statement in the user interface to determine which claim-processing sequence should run."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Template",
      "Method",
      "Pattern"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-101",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A university models a StudentOrganization and its Members. Students may join or leave organizations, belong to several organizations, and remain in the university system even if an organization dissolves. Which relationship BEST represents this model?",
    "options": [
      "Composition, because member records should be deleted whenever a student organization is removed.",
      "Inheritance, because each member should derive organization information from StudentOrganization.",
      "Encapsulation, because organization membership should be stored only in private student fields.",
      "Aggregation or association, because members and organizations have related but independent lifecycles."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Aggregation",
      "vs.",
      "Composition"
    ],
    "reference": "Object-Oriented Analysis and Design"
  },
  {
    "id": "OOP-102",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which statement BEST describes an abstract class?",
    "options": [
      "A class that cannot contain implemented methods or shared state.",
      "A class whose objects are automatically shared across all parts of an application.",
      "A class intended to provide common behavior or state but not necessarily instantiated directly.",
      "A class that contains only static methods and cannot participate in inheritance."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Abstract",
      "Classes"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-103",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A prescription-submission service sends requests to an external insurance system. If the external system returns an invalid response, the application must avoid creating a partially approved prescription, preserve diagnostic details, and allow the transaction to be reviewed or retried. Which approach is MOST appropriate?",
    "options": [
      "Ignore the invalid response and mark the prescription approved because an external system received the submission request.",
      "Handle the failure explicitly, preserve a valid pending or failed state, record diagnostic information, and follow a defined retry or review path.",
      "Delete the prescription request immediately so partial information cannot remain in the application after an external failure.",
      "Retry the request indefinitely without recording errors because temporary external failures should always resolve automatically."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Exception",
      "Handling",
      "Fail-Safe",
      "Design"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "OOP-104",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "A reporting service directly depends on a specific PDF library. When the organization adds spreadsheet and web-export options, many reporting methods must be revised. Which redesign BEST follows the dependency inversion principle?",
    "options": [
      "Make the reporting service depend on an export abstraction, with PDF, spreadsheet, and web exporters supplied as implementations.",
      "Add more PDF-library methods to the reporting service so all export logic remains centralized in one concrete component.",
      "Make the PDF library static so every report can access it without creating an object dependency.",
      "Store export-format names in public variables and let user-interface code call the selected library directly."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Dependency",
      "Inversion"
    ],
    "reference": "Object-Oriented Design Principles"
  },
  {
    "id": "OOP-105",
    "category": "Object-Oriented Programming Concepts",
    "difficulty": "medium",
    "question": "Which term refers to creating a new object from a class definition?",
    "options": [
      "Encapsulation",
      "Instantiation",
      "Generalization",
      "Delegation"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "Object",
      "Instantiation"
    ],
    "reference": "Object-Oriented Programming Fundamentals"
  },
  {
    "id": "DIM-001",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer stores customer name, address, loyalty tier, and order details in one large table. When a customer changes address, employees must update multiple rows because the customer has placed several orders. Occasionally, some rows are updated while others are missed. Which database-design problem is MOST directly illustrated?",
    "options": [
      "Referential-integrity failure, because orders should not be associated with customer information.",
      "An update anomaly caused by storing repeated customer information across multiple transaction records.",
      "A transaction-isolation issue caused by two users attempting to modify the same customer record simultaneously.",
      "A data-warehouse problem caused by historical order data being stored with current customer attributes."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Normalization",
      "Update",
      "Anomalies"
    ],
    "reference": "Database Design; Normalization"
  },
  {
    "id": "DIM-002",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A university database stores student records using StudentID, full name, birth date, program, and university email. StudentID is unique and remains unchanged throughout enrollment, while email addresses may change when accounts are replaced or students transfer campuses. Which field is MOST appropriate as the primary key?",
    "options": [
      "Full name, because it is the most recognizable field when faculty search for student information.",
      "University email, because it is used for most system communication and login processes.",
      "Birth date, because it helps distinguish students who share similar names or academic programs.",
      "StudentID, because it provides a stable, unique identifier for each student record."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Primary",
      "Keys",
      "Entity",
      "Integrity"
    ],
    "reference": "Relational Databases; Keys"
  },
  {
    "id": "DIM-003",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A clinic database contains a Patient table and an Appointment table. Every appointment must be associated with one existing patient, but each patient may have many appointments. Which design BEST enforces this relationship?",
    "options": [
      "Store PatientID as a foreign key in Appointment that references the primary key in Patient.",
      "Store AppointmentID as a foreign key in Patient because each patient may have multiple appointment records.",
      "Use the patient’s full name as the primary key in Appointment because names provide direct identification for staff.",
      "Place patient and appointment data in one table so database relationships do not require key constraints."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Foreign",
      "Keys",
      "Referential",
      "Integrity"
    ],
    "reference": "Relational Databases; Relationships"
  },
  {
    "id": "DIM-004",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A bank customer transfers $500 from checking to savings. The system deducts the amount from checking but loses connectivity before adding it to savings. The transaction-processing system must ensure that either both updates occur or neither update is permanently recorded. Which ACID property is MOST directly involved?",
    "options": [
      "Consistency, because account balances must always follow the bank’s business rules.",
      "Isolation, because simultaneous transactions should not interfere with one another.",
      "Atomicity, because the transfer must be treated as one indivisible unit of work.",
      "Durability, because completed transactions must survive hardware or software failures."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "ACID",
      "Properties",
      "Atomicity"
    ],
    "reference": "Transaction Processing; ACID"
  },
  {
    "id": "DIM-005",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Two employees attempt to reserve the last available conference room for overlapping times. Without controls, both employees may see the room as available and complete reservations. Which transaction-processing objective MOST directly prevents this problem?",
    "options": [
      "Durability, ensuring that confirmed reservations remain stored after a system restart.",
      "Isolation, ensuring that concurrent transactions do not improperly affect each other’s intermediate results.",
      "Atomicity, ensuring that each reservation includes both room information and employee contact information.",
      "Consistency, ensuring that room names use a standardized format across the reservation database."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "ACID",
      "Properties",
      "Isolation"
    ],
    "reference": "Transaction Processing; Concurrency Control"
  },
  {
    "id": "DIM-006",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A national retailer uses one system to record individual sales, returns, inventory movements, and payment transactions in real time. Executives use a separate environment to compare multi-year sales trends across regions, product categories, and customer segments. Which statement BEST distinguishes the two systems?",
    "options": [
      "The transaction system is primarily optimized for complex historical analysis, while the analytical system focuses on daily operational updates.",
      "Both systems are data warehouses because they process structured retail data and support operational reporting.",
      "The analytical system is an OLTP platform because it stores current sales records as transactions occur.",
      "The transaction system is OLTP, while the analytical environment supports OLAP-style analysis of aggregated historical data."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "OLTP",
      "vs.",
      "OLAP"
    ],
    "reference": "Data Management; Analytical Systems"
  },
  {
    "id": "DIM-007",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A hospital combines patient billing, appointment, pharmacy, and laboratory data from several operational systems into a centralized repository for quality reporting and long-term trend analysis. Before loading the data, the team standardizes dates, resolves duplicate identifiers, and transforms source fields into common formats. What process is MOST directly being performed?",
    "options": [
      "Extract, transform, and load operations that prepare data from multiple sources for analytical use.",
      "Data replication that copies each source database without changing field definitions or data quality.",
      "Transaction logging that records every operational update for use in rollback and recovery procedures.",
      "Referential-integrity enforcement that prevents users from creating records without a matching primary-key value."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Warehouse",
      "ETL"
    ],
    "reference": "Data Warehousing; ETL Processes"
  },
  {
    "id": "DIM-008",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A health system finds that different departments define “active patient” differently in dashboards and reports. Finance counts patients with a billable encounter in the last year, while clinical operations counts patients with any open care plan. Leadership wants one approved definition, documented ownership, and a process for resolving future data-definition conflicts. What is MOST appropriate?",
    "options": [
      "Allow each department to continue using its preferred definition because reporting needs differ by organizational function.",
      "Move all dashboard calculations into a single spreadsheet maintained by the finance department.",
      "Establish data-governance roles, common definitions, ownership responsibilities, and procedures for managing shared data standards.",
      "Require every dashboard to display raw source data so users can determine their own interpretation of “active patient.”"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Governance",
      "Data",
      "Ownership"
    ],
    "reference": "Data Governance; Information Management"
  },
  {
    "id": "DIM-009",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A customer-support database contains millions of service requests. Agents frequently search by account number and open-case status, but those searches now take several seconds during peak periods. The data itself is accurate, and the organization does not want to change the underlying business rules. Which action would MOST directly improve retrieval performance?",
    "options": [
      "Denormalize every support table so customer, case, and agent information is stored in a single record.",
      "Create appropriate indexes on frequently searched fields such as account number and case status.",
      "Replace relational storage with a spreadsheet because spreadsheets allow faster sorting of large operational datasets.",
      "Remove historical requests from the database because indexes cannot improve performance for active customer-service records."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Indexing",
      "Query",
      "Performance"
    ],
    "reference": "Database Performance; Indexes"
  },
  {
    "id": "DIM-010",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A web application builds database queries by directly combining user-entered search text with SQL commands. Security staff warn that an attacker could enter specially constructed input that changes the intended query and exposes unauthorized records. Which safeguard is MOST appropriate?",
    "options": [
      "Encrypt the database server’s hard drive so query text cannot be read after records are stored.",
      "Increase the database’s processing capacity so malicious queries complete more quickly and do not affect other users.",
      "Allow only administrators to search records because ordinary users should not interact with database-driven applications.",
      "Use parameterized queries and validate input so user values are treated as data rather than executable SQL instructions."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "SQL",
      "Injection",
      "Input",
      "Validation"
    ],
    "reference": "Database Security; Application Security"
  },
  {
    "id": "DIM-011",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which goal is MOST closely associated with database normalization?",
    "options": [
      "Organizing data to reduce unnecessary redundancy and minimize insertion, update, and deletion anomalies.",
      "Combining all related business information into one large table to make reports easier to construct.",
      "Replacing primary and foreign keys with descriptive text fields that users can understand more easily.",
      "Storing frequently updated and historical data together so transactional and analytical queries use the same structure."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Database",
      "Normal",
      "Forms"
    ],
    "reference": "Relational Database Design; Normalization"
  },
  {
    "id": "DIM-012",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A nonprofit imports donor records from several fundraising events. Most records include a valid email address, but many are missing donation amounts or have amounts entered in the wrong currency. Before using the data for financial reporting, which data-quality concerns are MOST directly present?",
    "options": [
      "Timeliness and uniqueness, because records were collected at different events and may not be sorted chronologically.",
      "Validity and referential integrity, because donor records should be linked to a separate fundraising-event table.",
      "Completeness and accuracy, because required values are missing and some recorded values do not correctly represent donations.",
      "Consistency and availability, because users may interpret event names differently and reports may not be accessible during peak periods."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Quality",
      "Completeness",
      "vs.",
      "Accuracy"
    ],
    "reference": "Data Quality Management"
  },
  {
    "id": "DIM-013",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A financial firm determines that after an outage it can tolerate losing no more than ten minutes of transaction data. It configures frequent transaction-log backups and replication so the most recent recoverable data is always within that limit. Which recovery-planning objective is the organization addressing?",
    "options": [
      "Recovery time objective, which defines the maximum downtime before the application must be operational again.",
      "Recovery point objective, which defines the maximum acceptable amount of data loss measured in time.",
      "Mean time between failures, which estimates how long the system should operate before another interruption occurs.",
      "Service-level objective, which defines the expected response time for technical-support requests from employees."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Backup",
      "Strategy",
      "Recovery",
      "Point",
      "Objective"
    ],
    "reference": "Data Recovery; Business Continuity"
  },
  {
    "id": "DIM-014",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "An e-commerce company collects product information from thousands of sellers. Different product categories include widely varying attributes: clothing may have size and fabric fields, while electronics may have voltage, storage capacity, and connectivity details. The company needs flexible storage without requiring every product record to contain the same fixed columns. Which approach is MOST appropriate?",
    "options": [
      "Use a strictly normalized relational table with one predefined set of columns for every product category.",
      "Store all product attributes in a plain-text field so applications can display the information without schema constraints.",
      "Use a spreadsheet-based repository because unstructured product attributes are easier to manage outside a database.",
      "Use a document-oriented NoSQL database that supports flexible, category-specific attributes within product records."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "NoSQL",
      "Databases",
      "Flexible",
      "Schemas"
    ],
    "reference": "Database Models; NoSQL"
  },
  {
    "id": "DIM-015",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which SQL category is primarily used to create, alter, or remove database structures such as tables, columns, and indexes?",
    "options": [
      "Data Definition Language",
      "Data Manipulation Language",
      "Data Control Language",
      "Transaction Control Language"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Data",
      "Definition",
      "Language"
    ],
    "reference": "SQL; Database Management Systems"
  },
  {
    "id": "DIM-016",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A university database records student enrollment in course sections. A student may enroll in many sections, and each section may include many students. The Enrollment table also stores grade option, enrollment date, and final grade. Which key design is MOST appropriate if the university wants to prevent duplicate enrollment in the same section?",
    "options": [
      "Use StudentID alone as the primary key because each student should appear only once in the enrollment table.",
      "Use SectionID alone as the primary key because each section should contain one consolidated enrollment record.",
      "Use a composite primary key consisting of StudentID and SectionID, or a surrogate key with a unique constraint on that pair.",
      "Use CourseName and StudentName as the primary key because these fields are more understandable to faculty users."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Composite",
      "Keys",
      "Associative",
      "Tables"
    ],
    "reference": "Relational Database Design; Keys and Relationships"
  },
  {
    "id": "DIM-017",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A clinic stores AppointmentID, PatientID, PatientName, ProviderID, ProviderName, and AppointmentDate in one table. Analysts note that PatientName depends on PatientID and ProviderName depends on ProviderID, rather than directly on AppointmentID. What database-design concern is MOST directly raised?",
    "options": [
      "The table may contain transitive dependencies that create redundancy and update anomalies.",
      "The table lacks a primary key because AppointmentID cannot uniquely identify an appointment.",
      "The table violates atomicity because patient and provider names are stored as text values.",
      "The table cannot support referential integrity because it contains more than one identifier field."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Functional",
      "Dependencies",
      "Third",
      "Normal",
      "Form"
    ],
    "reference": "Relational Database Design; Normalization"
  },
  {
    "id": "DIM-018",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer wants a report showing every customer who has placed at least one order, along with the details of those orders. Customers without orders should not appear in the report. Which SQL join BEST matches this requirement?",
    "options": [
      "A LEFT OUTER JOIN from Customer to Order, because every customer must appear whether or not an order exists.",
      "An INNER JOIN between Customer and Order, because only matching customer-order records should be returned.",
      "A CROSS JOIN between Customer and Order, because each customer should be paired with every order before filtering.",
      "A FULL OUTER JOIN between Customer and Order, because unmatched records from both tables should appear in the report."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "SQL",
      "Joins"
    ],
    "reference": "SQL; Relational Queries"
  },
  {
    "id": "DIM-019",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A hospital billing system applies a payment only after validating that the account exists, the payment amount is nonnegative, and the account balance is updated according to established business rules. If a transaction would leave the account in an invalid state, the database rejects it. Which ACID property is MOST directly represented?",
    "options": [
      "Atomicity, because every payment update must be treated as one indivisible transaction.",
      "Isolation, because concurrent billing activities should not expose unfinished changes to other users.",
      "Durability, because completed payment records must survive a system restart or hardware failure.",
      "Consistency, because each completed transaction must preserve defined integrity constraints and business rules."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Database",
      "Transactions",
      "Consistency"
    ],
    "reference": "Transaction Processing; ACID Properties"
  },
  {
    "id": "DIM-020",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer’s analytics team wants sales reports to preserve the region assigned to each store at the time a sale occurred, even if the store is reassigned to a new district later. Executives need accurate historical comparisons by the district structure in effect during each reporting period. Which data-warehouse design need is MOST directly involved?",
    "options": [
      "Managing slowly changing dimensions so historical attribute values can be retained appropriately.",
      "Enforcing transaction isolation so current store updates do not block sales-entry transactions.",
      "Creating a clustered index so district changes can be retrieved more quickly by operational users.",
      "Applying referential-integrity constraints so each store can be associated with only one sales transaction."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Warehouses",
      "Slowly",
      "Changing",
      "Dimensions"
    ],
    "reference": "Data Warehousing; Historical Analysis"
  },
  {
    "id": "DIM-021",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A global manufacturer maintains separate customer records in sales, support, billing, and shipping systems. The same organization may appear under slightly different names and identifiers in each system, causing duplicate outreach and inconsistent account reporting. Which initiative would MOST directly address this issue?",
    "options": [
      "Create additional transactional databases so each department can maintain more detailed versions of its customer records.",
      "Implement master data management to establish governed, reconciled customer identities shared across systems.",
      "Move all customer information into a data lake without defining standard identifiers or ownership responsibilities.",
      "Require each department to export monthly spreadsheets and manually compare customer names before reporting."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Governance",
      "Master",
      "Data",
      "Management"
    ],
    "reference": "Data Governance; Master Data Management"
  },
  {
    "id": "DIM-022",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A finance analyst needs a report showing total monthly reimbursement expense for each department. The source table contains one record per reimbursement request, with DepartmentID, SubmissionDate, and ApprovedAmount. Which SQL capability is MOST directly needed?",
    "options": [
      "A GROUP BY operation combined with aggregate functions such as SUM to calculate totals by department and month.",
      "A DELETE statement to remove duplicate reimbursement requests before calculating department-level expenses.",
      "A CREATE TABLE statement to generate a separate reimbursement table for each department.",
      "A CROSS JOIN operation to pair each reimbursement request with every department before summarization."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "SQL",
      "Aggregation",
      "GROUP",
      "BY"
    ],
    "reference": "SQL; Aggregate Queries"
  },
  {
    "id": "DIM-023",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A research database contains identifiable participant information, consent records, and de-identified analytic data. Analysts need access only to the de-identified dataset, while study coordinators need limited access to contact information for enrolled participants. Which access-control principle BEST supports this design?",
    "options": [
      "Grant all study staff full database access so collaboration is not slowed by permission requests.",
      "Allow users to inherit all privileges held by their department manager unless an administrator removes specific permissions.",
      "Assign access based on the minimum permissions needed for each role to perform its defined responsibilities.",
      "Restrict all access to database administrators and require every researcher to request exported files for each analysis."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Security",
      "Least",
      "Privilege"
    ],
    "reference": "Database Security; Access Control"
  },
  {
    "id": "DIM-024",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A business-intelligence team generates a dashboard that repeatedly combines large sales, product, customer, and calendar tables. The queries are accurate but slow, and the dashboard data is refreshed nightly rather than updated transaction by transaction. Which approach may reasonably improve reporting performance while accepting controlled redundancy?",
    "options": [
      "Denormalize selected reporting structures or build summary tables designed for frequent analytical queries.",
      "Remove all keys and relationships so reporting queries no longer need to join tables.",
      "Replace historical sales data with only the most recent transaction from each customer.",
      "Convert every operational table into an unstructured text file to avoid relational-query overhead."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Denormalization",
      "Reporting",
      "Performance"
    ],
    "reference": "Database Design; Performance Trade-offs"
  },
  {
    "id": "DIM-025",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "An emergency department dashboard displays patient-bed availability, staffing status, and waiting-room volume. The data is accurate when extracted, but refreshes only every six hours, causing managers to make decisions using information that no longer reflects current conditions. Which data-quality dimension is MOST directly deficient?",
    "options": [
      "Completeness, because the dashboard may not include every relevant patient or staffing record.",
      "Timeliness, because the information is not current enough for the decision context.",
      "Uniqueness, because repeated records may exist across emergency department source systems.",
      "Validity, because displayed values may not conform to permitted formats or ranges."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Quality",
      "Timeliness"
    ],
    "reference": "Data Quality Management"
  },
  {
    "id": "DIM-026",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A law firm performs a full backup of its document repository each Sunday and incremental backups every evening that capture only files changed since the last backup. On Thursday morning, the repository must be restored after hardware failure. Which restoration sequence is typically required?",
    "options": [
      "Restore only the most recent incremental backup because it contains every file modified during the week.",
      "Restore the Sunday full backup, then apply each subsequent incremental backup in chronological order.",
      "Restore the Sunday full backup and the Thursday incremental backup only, because earlier increments are included automatically.",
      "Restore all historical full backups because the latest full backup may not contain documents that changed during the current week."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Database",
      "Backup",
      "Full",
      "vs.",
      "Incremental",
      "Backup"
    ],
    "reference": "Data Recovery; Backup Strategies"
  },
  {
    "id": "DIM-027",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A hospital wants analysts to query a simplified dataset containing patient age group, diagnosis category, encounter date, and length of stay, while preventing them from accessing names, addresses, and medical-record numbers. Which database feature BEST supports this requirement?",
    "options": [
      "A view that exposes only approved, de-identified columns and can be granted to the analyst role.",
      "A foreign key that links the analyst account to the patient table while preventing duplicate patient records.",
      "A transaction log that records every query performed against the complete patient database.",
      "An index that speeds retrieval of diagnosis and encounter data from the underlying patient table."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Database",
      "Views",
      "Data",
      "Access"
    ],
    "reference": "SQL; Views and Security"
  },
  {
    "id": "DIM-028",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which SQL category includes commands such as SELECT, INSERT, UPDATE, and DELETE?",
    "options": [
      "Data Control Language",
      "Data Definition Language",
      "Data Manipulation Language",
      "Transaction Control Language"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Data",
      "Manipulation",
      "Language"
    ],
    "reference": "SQL; Database Management Systems"
  },
  {
    "id": "DIM-029",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Two procurement employees open the same purchase request. One changes the quantity from 10 to 12, while the other changes it from 10 to 15. Without appropriate concurrency controls, the second save may overwrite the first employee’s change without warning. Which problem is MOST directly illustrated?",
    "options": [
      "A lost update caused by concurrent transactions modifying the same record.",
      "A referential-integrity violation caused by an order referencing a missing supplier.",
      "A phantom read caused by a query returning a newly inserted set of purchase requests.",
      "A normalization anomaly caused by storing supplier details in the purchase-request table."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Concurrency",
      "Control",
      "Lost",
      "Updates"
    ],
    "reference": "Transaction Processing; Concurrency"
  },
  {
    "id": "DIM-030",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A manufacturer collects sensor streams, maintenance logs, image files, engineering documents, and structured production records. Data scientists want to retain the raw data for future analysis even though different teams may apply different structures and interpretations later. Which platform characteristic is MOST appropriate?",
    "options": [
      "A normalized operational database requiring each incoming record to follow one predefined schema before storage.",
      "A data lake that stores diverse raw data and supports schema-on-read when users analyze it for particular purposes.",
      "A spreadsheet repository that allows each engineering team to define its own workbook structure.",
      "A transaction-processing platform optimized for high-volume point-of-sale entries and immediate account updates."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Lakes",
      "Schema-on-Read"
    ],
    "reference": "Modern Data Platforms; Data Lakes"
  },
  {
    "id": "DIM-031",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A university stores enrollment data in a table with the composite key StudentID and CourseID. The table also includes StudentName, CourseTitle, InstructorName, and FinalGrade. Analysts note that StudentName depends only on StudentID, while CourseTitle and InstructorName depend only on CourseID. Which database-design concern is MOST directly raised?",
    "options": [
      "The table lacks entity integrity because composite keys cannot uniquely identify enrollment records.",
      "The table contains partial dependencies that should be separated to reduce redundant storage and update anomalies.",
      "The table violates transaction isolation because student and course information may be modified by different users.",
      "The table should use a document-oriented database because relational tables cannot represent many-to-many enrollment data."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Second",
      "Normal",
      "Form",
      "Partial",
      "Dependency"
    ],
    "reference": "Relational Database Design; Normalization"
  },
  {
    "id": "DIM-032",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A clinic allows patients to create online accounts using an email address. Staff want to prevent two active patient accounts from being created with the same verified email while still allowing patients to update their address, phone number, and insurance information. Which database feature MOST directly supports this requirement?",
    "options": [
      "A foreign-key constraint linking the email field to the patient’s medical-record number.",
      "A clustered index on the email column to improve lookup speed during account registration.",
      "A transaction log that records each email update for recovery after database failure.",
      "A unique constraint on the verified-email field to prevent duplicate active account values."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Unique",
      "Constraints",
      "Data",
      "Integrity"
    ],
    "reference": "Relational Database Design; Integrity Constraints"
  },
  {
    "id": "DIM-033",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer needs a report listing every product in its catalog, including products that have never been ordered, along with any matching order-line information when sales exist. Which SQL join BEST satisfies this requirement?",
    "options": [
      "A LEFT OUTER JOIN from Product to OrderLine, preserving all products whether or not matching sales records exist.",
      "An INNER JOIN between Product and OrderLine, returning only products that appear in at least one completed order.",
      "A CROSS JOIN between Product and OrderLine, pairing each catalog item with every historical sales record.",
      "A SELF JOIN on Product, comparing each item with other products in the same category."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "SQL",
      "Joins",
      "Outer",
      "Joins"
    ],
    "reference": "SQL; Relational Queries"
  },
  {
    "id": "DIM-034",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A bank confirms a mortgage payment and displays a successful receipt to the customer. Seconds later, the database server loses power. When service is restored, the completed payment remains recorded and the account balance reflects the transaction. Which ACID property is MOST directly demonstrated?",
    "options": [
      "Atomicity, because the mortgage payment was processed as one indivisible set of related updates.",
      "Consistency, because the completed transaction preserved all account rules and balance constraints.",
      "Durability, because a committed transaction survived a system failure after confirmation.",
      "Isolation, because other account transactions did not read the payment while it was still being processed."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "ACID",
      "Properties",
      "Durability"
    ],
    "reference": "Transaction Processing; ACID Properties"
  },
  {
    "id": "DIM-035",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A financial-services firm publishes a dashboard showing loan-default rates by region. Before executives use it for strategic planning, they ask where each metric originated, which transformations were applied, which source system supplied it, and who approved the calculation. What capability is MOST directly needed?",
    "options": [
      "Data masking to prevent sensitive borrower details from appearing in executive reporting outputs.",
      "Data lineage documentation showing the origin, movement, transformation, and stewardship of each reported metric.",
      "Database normalization to separate default-rate calculations from borrower-identification fields in operational tables.",
      "Transaction isolation to prevent simultaneous dashboard queries from producing inconsistent regional totals."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Lineage",
      "Governance"
    ],
    "reference": "Data Governance; Metadata Management"
  },
  {
    "id": "DIM-036",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A hospital loads laboratory data into an enterprise data warehouse. During validation, analysts discover that one source system records glucose in milligrams per deciliter while another stores millimoles per liter. The warehouse currently combines both values without conversion. What should occur before analytical reporting proceeds?",
    "options": [
      "Add more indexes to the warehouse tables so glucose values can be retrieved more quickly during reporting.",
      "Retain both measures without changes because historical source values should never be transformed during ETL.",
      "Move glucose results into a separate operational database because warehouses should not store laboratory information.",
      "Define and apply transformation rules that standardize units while preserving source provenance and validation controls."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "ETL",
      "Data",
      "Transformation",
      "Errors"
    ],
    "reference": "Data Warehousing; ETL Processes"
  },
  {
    "id": "DIM-037",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A payment processor stores ten years of transaction history in one table containing billions of records. Most operational queries retrieve only transactions from the current month, while compliance audits periodically examine older periods. Which approach may MOST directly improve performance and administration?",
    "options": [
      "Partition the transaction table by date so current and historical ranges can be managed and queried more efficiently.",
      "Remove historical transactions after one year so all remaining records fit into a single high-speed operational table.",
      "Duplicate every transaction into separate tables for each application user to reduce concurrent access to shared records.",
      "Replace relational storage with spreadsheet files because large historical datasets are easier to review outside a DBMS."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Partitioning",
      "Large-Table",
      "Performance"
    ],
    "reference": "Database Performance; Data Partitioning"
  },
  {
    "id": "DIM-038",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A business-intelligence team routinely scans billions of sales records but usually retrieves only a few attributes, such as transaction date, product category, revenue, and region. The workload is primarily read-heavy aggregation rather than frequent row-by-row updates. Which storage approach is MOST appropriate?",
    "options": [
      "A row-oriented operational database optimized for frequent insertion and retrieval of complete individual transactions.",
      "A document database that stores all sales attributes as flexible nested records without requiring analytical query planning.",
      "A column-oriented analytical store optimized for scanning and aggregating selected fields across large datasets.",
      "A spreadsheet-based repository because executives primarily need summarized totals rather than transaction-level detail."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Row-Oriented",
      "vs.",
      "Column-Oriented",
      "Storage"
    ],
    "reference": "Analytical Databases; Data Warehousing"
  },
  {
    "id": "DIM-039",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A customer-support team needs to verify the last four digits of a customer’s payment card during service calls, but representatives should not be able to view the complete card number. Which control BEST supports this operational requirement?",
    "options": [
      "Encrypt the entire customer database while allowing all support representatives to decrypt payment-card records when needed.",
      "Use data masking that displays only approved portions of the card number while concealing sensitive digits.",
      "Apply a foreign-key constraint linking card records to customer accounts so invalid card references cannot be created.",
      "Store the card number in a separate table and prohibit support staff from viewing any payment information during customer calls."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Masking",
      "Privacy",
      "Controls"
    ],
    "reference": "Database Security; Privacy Protection"
  },
  {
    "id": "DIM-040",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A web application stores user passwords. Security architects want to verify future login attempts without retaining passwords in a form that can be directly recovered if the credential database is compromised. Which approach is MOST appropriate?",
    "options": [
      "Encrypt passwords with a shared key so administrators can recover them when users forget their credentials.",
      "Store passwords in plaintext within a protected table because access controls can prevent unauthorized database viewing.",
      "Split passwords across several database columns so no single field contains the complete credential value.",
      "Store salted password hashes and compare the hash of each login attempt with the stored value."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Hashing",
      "vs.",
      "Encryption"
    ],
    "reference": "Database Security; Credential Protection"
  },
  {
    "id": "DIM-041",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A university database contains a GraduationDate field. For some students, the field is blank because they are still enrolled; for others, it is blank because historical records were imported without graduation information. Why should the institution distinguish these cases?",
    "options": [
      "A blank or NULL value can represent different business meanings, so the data model should distinguish “not yet applicable” from “unknown or missing.”",
      "NULL values should always be converted to zero because relational databases cannot perform calculations using incomplete records.",
      "A missing graduation date automatically indicates a referential-integrity violation between Student and DegreeProgram tables.",
      "The database should remove all students with blank graduation dates because incomplete values cannot be included in academic reporting."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "NULL",
      "Values",
      "Data",
      "Semantics"
    ],
    "reference": "Relational Databases; Data Quality"
  },
  {
    "id": "DIM-042",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A global manufacturer has hundreds of data sets across finance, supply chain, sales, and engineering systems. Analysts frequently recreate reports because they cannot determine what data already exists, who owns it, how current it is, or whether it is approved for reuse. Which initiative would MOST directly address this problem?",
    "options": [
      "Create a data lake that stores copies of every source file without recording ownership, definitions, or quality status.",
      "Require each department to maintain separate spreadsheets describing its tables, reports, and local definitions.",
      "Implement a data catalog containing searchable metadata, ownership, business definitions, lineage, and data-quality information.",
      "Consolidate all historical records into one transactional database so analysts no longer need to search across multiple systems."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Catalogs",
      "Discoverability"
    ],
    "reference": "Data Governance; Metadata Management"
  },
  {
    "id": "DIM-043",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A purchasing application creates a purchase order, reserves budget funds, updates inventory forecasts, and records an audit event. If any step fails, the organization wants all related database changes undone so no partial transaction remains. Which transaction-control approach BEST supports this requirement?",
    "options": [
      "Execute each update separately and rely on daily backups to restore incorrect data if a later step fails.",
      "Enclose the related operations in one transaction and issue a rollback if any required step cannot complete successfully.",
      "Use a SELECT statement before each update so the system can confirm that the affected tables exist.",
      "Apply an index to all transaction tables so updates complete faster and therefore cannot be interrupted."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "SQL",
      "Transactions",
      "Commit",
      "and",
      "Rollback"
    ],
    "reference": "SQL; Transaction Control"
  },
  {
    "id": "DIM-044",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A legal-services firm stores client communications, signed agreements, litigation records, and internal work product. Different categories must be retained for different periods, placed on legal hold when disputes arise, and defensibly deleted when retention obligations expire. What is MOST directly needed?",
    "options": [
      "A retention and records-management policy supported by classification, legal-hold, and defensible-disposition controls.",
      "A transactional database that keeps all records indefinitely so no document is ever deleted or archived.",
      "A data-warehouse design that aggregates all case information for long-term strategic reporting by firm leadership.",
      "A normalization project that separates client names, agreement details, and document metadata into related relational tables."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Retention",
      "Records",
      "Management"
    ],
    "reference": "Data Governance; Information Lifecycle Management"
  },
  {
    "id": "DIM-045",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which constraint ensures that a foreign-key value in one table must correspond to an existing primary-key value in a related table, unless the relationship permits a null reference?",
    "options": [
      "Domain integrity",
      "Entity integrity",
      "Referential integrity",
      "Transaction isolation"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Referential",
      "Integrity"
    ],
    "reference": "Relational Databases; Integrity Constraints"
  },
  {
    "id": "DIM-046",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A university stores DepartmentID, DepartmentName, ChairID, ChairName, and ChairEmail in one Department table. Each department has one chair, but a chair’s name and email depend on ChairID rather than directly on DepartmentID. The university wants to reduce duplicate chair information and avoid inconsistent updates. Which design change is MOST appropriate?",
    "options": [
      "Replace DepartmentID with ChairName as the primary key because chair names are more recognizable to faculty users.",
      "Store chair information in a separate Chair table and reference ChairID from the Department table.",
      "Add ChairName and ChairEmail to every course record so users can identify department leadership without joins.",
      "Keep all chair details in the Department table because one chair is associated with each department at a given time."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Third",
      "Normal",
      "Form",
      "Transitive",
      "Dependencies"
    ],
    "reference": "Relational Database Design; Normalization"
  },
  {
    "id": "DIM-047",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A customer-service manager needs a report listing open cases assigned to the Midwest region that were created within the last seven days. The source table contains CaseID, Status, Region, CreatedDate, and AssignedAgent. Which SQL capability is MOST directly needed to restrict the returned records to the required conditions?",
    "options": [
      "An ORDER BY clause that arranges matching cases by creation date or assigned agent.",
      "A GROUP BY clause that summarizes all open cases according to region and date.",
      "A JOIN operation that combines customer-service cases with an unrelated table before filtering results.",
      "A WHERE clause that applies criteria for status, region, and creation date."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "SQL",
      "Filtering",
      "WHERE",
      "Clause"
    ],
    "reference": "SQL; Query Construction"
  },
  {
    "id": "DIM-048",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer designs a sales warehouse for executive reporting. Analysts want to measure revenue, quantity sold, and discount amount by date, store, product, and customer segment. Which structure BEST fits a dimensional model?",
    "options": [
      "Store each metric in a separate operational table and require reports to reconstruct sales activity from transaction logs.",
      "Use one wide table containing all sales facts and all descriptive attributes without separate keys or dimensional organization.",
      "Create a Sales fact table linked to Date, Store, Product, and Customer Segment dimension tables.",
      "Create only dimension tables because analytical reporting should avoid storing numerical measures in the warehouse."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Warehousing",
      "Fact",
      "and",
      "Dimension",
      "Tables"
    ],
    "reference": "Data Warehousing; Dimensional Modeling"
  },
  {
    "id": "DIM-049",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A hospital wants quality-improvement analysts to study readmission patterns by diagnosis category, age group, and length of stay. The analysts should not see patient names, dates of birth, addresses, or medical-record numbers. Which solution BEST supports this requirement?",
    "options": [
      "Create a de-identified database view exposing only approved analytical fields and grant analysts access to that view.",
      "Give analysts access to the full patient table but require them to avoid selecting identifying columns in their queries.",
      "Export complete patient data to spreadsheets and ask analysts to delete identifying columns before beginning analysis.",
      "Encrypt the patient table and allow analysts to decrypt it whenever they need to evaluate readmission trends."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Database",
      "Views",
      "Principle",
      "of",
      "Least",
      "Privilege"
    ],
    "reference": "SQL; Views and Access Control"
  },
  {
    "id": "DIM-050",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A distributor wants to identify every supplier that has not provided any shipments during the current quarter. The Supplier table contains all approved suppliers, while the Shipment table contains only suppliers that have submitted shipments. Which query approach is MOST appropriate?",
    "options": [
      "Use an INNER JOIN and filter for shipment records with a null shipment date.",
      "Use a CROSS JOIN so every supplier is paired with every shipment before identifying missing matches.",
      "Use a SELF JOIN on Supplier because inactive suppliers must be compared with other suppliers in the same category.",
      "Use a LEFT OUTER JOIN from Supplier to Shipment and identify suppliers without matching current-quarter shipments."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "SQL",
      "Joins",
      "Unmatched",
      "Records"
    ],
    "reference": "SQL; Outer Joins"
  },
  {
    "id": "DIM-051",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A national retailer combines customer data from online, store, and call-center systems. One system stores state names as full text, another uses postal abbreviations, and a third uses inconsistent capitalization. The values are generally correct, but reporting groups the same state into multiple categories. Which data-quality dimension is MOST directly affected?",
    "options": [
      "Completeness, because each customer record should contain every possible geographic attribute.",
      "Consistency, because equivalent values are represented differently across systems.",
      "Timeliness, because geographic information may not have been refreshed recently enough for reporting.",
      "Uniqueness, because multiple customer records may contain the same state value."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Quality",
      "Consistency"
    ],
    "reference": "Data Quality Management"
  },
  {
    "id": "DIM-052",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A billing clerk updates a customer’s account balance but has not yet completed the transaction. Before the clerk commits or rolls back the change, another employee’s report reads the temporary balance and uses it to make a collection decision. Which concurrency problem is MOST directly illustrated?",
    "options": [
      "A lost update, because one user’s saved value overwrites another user’s modification.",
      "A phantom read, because new records appear when the same query is executed twice within one transaction.",
      "A dirty read, because one transaction reads data written by another transaction that has not been committed.",
      "A deadlock, because two transactions are waiting indefinitely for each other to release locked resources."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Transaction",
      "Isolation",
      "Dirty",
      "Reads"
    ],
    "reference": "Transaction Processing; Concurrency Control"
  },
  {
    "id": "DIM-053",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A health system’s reports frequently contain conflicting definitions for “active patient,” “encounter,” and “readmission.” Leadership assigns clinical, financial, and operational representatives responsibility for approving business definitions, monitoring quality, and resolving disputes about shared data. What role are these representatives primarily performing?",
    "options": [
      "Data stewardship, because they are accountable for defined data standards, quality, and appropriate use within their domains.",
      "Database administration, because they are responsible for installing database software and tuning indexes for performance.",
      "Systems analysis, because they are documenting requirements for a replacement clinical information system.",
      "Transaction processing, because they are validating individual patient encounters before records are saved."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Governance",
      "Data",
      "Stewardship"
    ],
    "reference": "Data Governance; Roles and Responsibilities"
  },
  {
    "id": "DIM-054",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A customer-support platform contains millions of case records. Agents frequently search for open cases using AccountID and CaseStatus, but searches are slow during peak hours. Analysts determine that the most common query filters on both fields together. Which action would MOST directly improve performance?",
    "options": [
      "Remove AccountID from the case table so the system no longer needs to compare customer records during search.",
      "Create a composite index aligned with the common AccountID and CaseStatus search pattern.",
      "Replace the relational database with a spreadsheet because spreadsheets can sort customer-service data more quickly.",
      "Denormalize all customer and case data into one unindexed table to reduce the number of joins."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Index",
      "Design",
      "Query",
      "Optimization"
    ],
    "reference": "Database Performance; Indexes"
  },
  {
    "id": "DIM-055",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A research organization maintains participant identifiers, consent forms, laboratory results, and de-identified statistical data. Study coordinators need access to participant contact data, laboratory staff need limited access to sample identifiers, and statisticians need only de-identified records. Which access approach BEST supports this requirement?",
    "options": [
      "Grant every researcher full database access because scientific collaboration requires complete visibility across all data sets.",
      "Allow each user to request access to individual records whenever needed, without defining permissions by job role.",
      "Restrict all access to database administrators and provide researchers only manually exported reports.",
      "Implement role-based access control that grants each group permissions aligned with its defined responsibilities."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Database",
      "Security",
      "Role-Based",
      "Access",
      "Control"
    ],
    "reference": "Access Control; Database Security"
  },
  {
    "id": "DIM-056",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A manufacturer collects equipment sensor streams, maintenance logs, image files, engineering documents, and structured production records. Data scientists want to retain raw information for future exploration, while finance teams require curated, consistent reporting on production cost and output. Which architecture BEST supports both needs?",
    "options": [
      "Use only a transactional database because it can support raw sensor ingestion and executive reporting without additional design.",
      "Store all data in one spreadsheet repository so every department can organize information according to local preferences.",
      "Use a data lake for diverse raw data and a curated warehouse or analytical layer for governed reporting.",
      "Use separate departmental databases and prohibit data sharing so source systems remain independent and unchanged."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Lake",
      "vs.",
      "Data",
      "Warehouse"
    ],
    "reference": "Modern Data Platforms; Analytical Data Management"
  },
  {
    "id": "DIM-057",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which database constraint is MOST appropriate when a field must contain a value within a permitted range, such as an employee performance score from 1 through 5?",
    "options": [
      "A CHECK constraint that enforces an allowed condition or range for stored values.",
      "A FOREIGN KEY constraint that requires the score to match a primary key in another table.",
      "A UNIQUE constraint that prevents two employees from receiving the same performance score.",
      "A NOT NULL constraint that ensures every employee record includes at least one score value."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Database",
      "Constraints"
    ],
    "reference": "Relational Databases; Integrity Constraints"
  },
  {
    "id": "DIM-058",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A law firm performs a full backup every Sunday and a differential backup every evening. On Friday afternoon, a server failure requires restoration. Differential backups contain all changes made since the most recent full backup. Which restoration sequence is typically required?",
    "options": [
      "Restore only the most recent differential backup because it includes the full history of all documents.",
      "Restore every differential backup from Monday through Friday in chronological order.",
      "Restore the latest full backup, then restore the most recent differential backup.",
      "Restore all prior full backups because earlier backup sets may contain records not present in the latest one."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Backup",
      "Strategies",
      "Differential",
      "Backups"
    ],
    "reference": "Data Recovery; Backup and Restore"
  },
  {
    "id": "DIM-059",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A sales manager needs a report showing product categories whose total quarterly revenue exceeds $500,000. The source table contains one row per sales transaction. Which SQL capability is MOST directly needed after grouping transactions by category?",
    "options": [
      "A WHERE clause filtering individual sales rows by category revenue before aggregation occurs.",
      "A HAVING clause filtering grouped category results based on the calculated total revenue.",
      "An ORDER BY clause sorting categories from highest to lowest revenue after all results are returned.",
      "A CROSS JOIN pairing every sales transaction with every available product category before summarization."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "SQL",
      "Aggregation",
      "HAVING",
      "Clause"
    ],
    "reference": "SQL; Aggregate Queries"
  },
  {
    "id": "DIM-060",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A consulting firm stores public marketing materials, internal operating procedures, client financial records, and legal case documents. Security leadership wants controls that reflect the sensitivity and handling requirements of each information type. What should the organization establish FIRST?",
    "options": [
      "A retention schedule that deletes all data after a fixed period regardless of business purpose or legal obligation.",
      "A database-indexing strategy that accelerates retrieval of confidential records during internal reporting.",
      "A full backup policy that copies every file to the same storage location each evening.",
      "A data-classification framework defining categories, handling rules, access expectations, and protection requirements."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Classification",
      "Information",
      "Security"
    ],
    "reference": "Data Governance; Information Classification"
  },
  {
    "id": "DIM-061",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A clinic stores a patient’s phone numbers in one field as “home: 555-0101; mobile: 555-0188.” Staff struggle to search for patients with mobile numbers, validate formats consistently, and update one phone number without rewriting the entire field. Which database-design improvement MOST directly addresses this problem?",
    "options": [
      "Add an index to the combined phone-number field so the database can retrieve partial text values more quickly.",
      "Move all phone information into a data warehouse because contact details are primarily needed for historical reporting.",
      "Store each phone number as an atomic value in a related contact-method table with a defined phone type.",
      "Replace the patient record with a document database because relational tables cannot represent multiple phone numbers."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "First",
      "Normal",
      "Form",
      "Atomic",
      "Values"
    ],
    "reference": "Relational Database Design; Normalization"
  },
  {
    "id": "DIM-062",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A manufacturer’s supplier records include legal name, tax identifier, and internal supplier number. Legal names may change after mergers, and tax identifiers may be corrected after onboarding. The organization wants a stable identifier that can remain unchanged even when business attributes are updated. Which design is MOST appropriate?",
    "options": [
      "Assign a surrogate key generated by the system and retain legal name and tax identifier as separate business attributes.",
      "Use the supplier’s legal name as the primary key because it is the most recognizable value for procurement staff.",
      "Use the tax identifier as the only key because government-issued identifiers should never be corrected or replaced.",
      "Use the current supplier number as a composite key together with legal name to preserve historical identification."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Surrogate",
      "Keys",
      "Natural",
      "Keys"
    ],
    "reference": "Relational Database Design; Keys"
  },
  {
    "id": "DIM-063",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "An executive dashboard initially shows total revenue by region. A vice president selects the Midwest, then drills into individual states, stores, product categories, and specific promotional periods to investigate a revenue decline. Which analytical capability is MOST directly being used?",
    "options": [
      "Transaction rollback, because the executive is reversing previously committed sales records to examine the source data.",
      "Data normalization, because the dashboard separates regional totals into smaller relational tables for each analysis level.",
      "Batch processing, because historical sales are being recalculated outside the operational transaction system.",
      "Drill-down, because the user moves from summarized information to progressively more detailed levels of analysis."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "OLAP",
      "Drill-Down",
      "Analysis"
    ],
    "reference": "Data Warehousing; Analytical Processing"
  },
  {
    "id": "DIM-064",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A finance application runs the same complex revenue query every morning across several years of transaction data. The calculation joins multiple tables and aggregates millions of rows, but the underlying data changes only overnight. Which approach would MOST reasonably improve dashboard response time?",
    "options": [
      "Replace all transaction tables with spreadsheets so the finance team can calculate totals using desktop formulas.",
      "Create and refresh a materialized view or precomputed summary that stores the expensive query result for repeated access.",
      "Remove historical transactions after one month because analytical dashboards should use only current-period information.",
      "Disable integrity constraints during reporting hours so complex joins can execute without relational validation overhead."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Materialized",
      "Views",
      "Reporting",
      "Performance"
    ],
    "reference": "Database Performance; Reporting Optimization"
  },
  {
    "id": "DIM-065",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A public-health agency publishes a dashboard showing vaccination rates by county. Before relying on the figures, analysts need to know which source registries supplied the data, when records were extracted, what transformations occurred, and which quality checks were performed. What capability is MOST directly needed?",
    "options": [
      "Data replication, so the agency can keep identical copies of all registry data in multiple production systems.",
      "Data masking, so sensitive patient identifiers are hidden before county-level dashboard metrics are displayed.",
      "Data provenance and lineage documentation showing the origin, processing history, and stewardship of reported information.",
      "Database normalization separating vaccination records from county names and demographic categories in operational source tables."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Provenance",
      "Auditability"
    ],
    "reference": "Data Governance; Metadata and Lineage"
  },
  {
    "id": "DIM-066",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Two purchasing-system transactions each lock a different supplier record. Transaction A then waits for the record locked by Transaction B, while Transaction B waits for the record locked by Transaction A. Neither transaction can continue without intervention. Which problem is MOST directly illustrated?",
    "options": [
      "A deadlock, because transactions are waiting indefinitely for resources held by one another.",
      "A dirty read, because one transaction is reading data that another transaction has changed but not committed.",
      "A lost update, because one employee’s supplier modification overwrites another employee’s completed update.",
      "A phantom read, because a repeated query returns new supplier records inserted by another transaction."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Deadlocks",
      "Concurrency",
      "Control"
    ],
    "reference": "Transaction Processing; Concurrency"
  },
  {
    "id": "DIM-067",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A global retailer stores customer records in e-commerce, loyalty, support, and billing systems. The same customer may appear under different spellings, addresses, and account numbers. Leadership wants a trusted enterprise representation that reconciles duplicates while preserving links to source records. What is MOST appropriate?",
    "options": [
      "Require each department to maintain its own customer records and use monthly spreadsheet comparisons for reconciliation.",
      "Establish master data management processes that match, merge, govern, and maintain a trusted customer “golden record.”",
      "Move all customer records into a raw data lake and let analysts choose whichever source version best fits each report.",
      "Delete duplicate-looking records from all systems without maintaining source lineage or resolving conflicting attribute values."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Master",
      "Data",
      "Management",
      "Golden",
      "Record"
    ],
    "reference": "Data Governance; Master Data Management"
  },
  {
    "id": "DIM-068",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A health system allows clinicians to access patient records through a web application from multiple clinics. Security leaders want to prevent network attackers from reading patient information while it moves between user browsers and the application servers. Which control MOST directly addresses this risk?",
    "options": [
      "Encrypt database backups stored in an off-site repository so archived records remain protected after a storage breach.",
      "Apply role-based access control so clinicians can view only patients assigned to their care team.",
      "Use data masking so only selected portions of patient identifiers are displayed on clinician screens.",
      "Use transport-layer encryption, such as TLS, to protect data while it travels across the network."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Encryption",
      "in",
      "Transit",
      "Data",
      "Security"
    ],
    "reference": "Database Security; Information Protection"
  },
  {
    "id": "DIM-069",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer’s customer dimension includes region. When a customer moves from the Northeast to the Southwest, executives still want historical sales reports to reflect the region assigned when each purchase occurred. Which data-warehouse approach BEST supports this reporting need?",
    "options": [
      "Overwrite the existing region value so all historical purchases reflect the customer’s current location.",
      "Store region only in the sales fact table and remove it from the customer dimension to eliminate update complexity.",
      "Use a slowly changing dimension approach that preserves appropriate historical versions of customer-region attributes.",
      "Exclude customers who change regions from historical reporting because their data cannot be accurately categorized."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Slowly",
      "Changing",
      "Dimensions",
      "Historical",
      "Reporting"
    ],
    "reference": "Data Warehousing; Dimensional Modeling"
  },
  {
    "id": "DIM-070",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "An employee database stores employment status using values such as Active, Leave, Retired, and Terminated. Managers want to prevent accidental entries such as “Actve,” “Temporary,” or blank values when those are not permitted by organizational policy. Which control MOST directly supports this requirement?",
    "options": [
      "A domain constraint or lookup relationship limiting EmploymentStatus to approved values.",
      "A foreign-key constraint linking each employee to the primary key of an unrelated payroll transaction record.",
      "A transaction log recording every status update after it has been saved to the employee table.",
      "A clustered index that stores employee records in the same physical order as employment-status values."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Validation",
      "Domain",
      "Integrity"
    ],
    "reference": "Relational Databases; Integrity Constraints"
  },
  {
    "id": "DIM-071",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A sales director needs a report that shows each salesperson’s monthly revenue, the regional average for that month, and the salesperson’s rank within the region. The director does not want to collapse individual salesperson rows into one row per region. Which SQL capability is MOST appropriate?",
    "options": [
      "A CROSS JOIN that pairs each salesperson with all other salespeople in the same region before computing totals.",
      "Window functions that calculate aggregates and rankings across related rows while retaining individual salesperson records.",
      "A DELETE statement that removes lower-performing salesperson records before calculating regional averages.",
      "A GROUP BY clause that returns only one summarized record for each region and month."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "SQL",
      "Window",
      "Functions",
      "Analytical",
      "Queries"
    ],
    "reference": "SQL; Advanced Querying"
  },
  {
    "id": "DIM-072",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A law firm’s document system has a standard retention rule that deletes closed-case records after seven years. A client becomes involved in litigation during year six, and relevant records may be needed as evidence. What should the firm do MOST appropriately?",
    "options": [
      "Continue scheduled deletion because the standard retention policy was approved before the litigation began.",
      "Transfer the records to a data warehouse because analytical systems are exempt from records-retention requirements.",
      "Remove the records from normal backups because litigation materials should remain available only in the active case system.",
      "Place relevant records on legal hold to suspend routine deletion until the matter and preservation obligations are resolved."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Retention",
      "Legal",
      "Hold"
    ],
    "reference": "Information Lifecycle Management; Records Management"
  },
  {
    "id": "DIM-073",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A customer-service table contains tens of millions of records. Nearly every row has Status = 'Closed', while only a small fraction have Status = 'Open'. Agents frequently search for open cases assigned to a particular queue. Which index-design consideration is MOST relevant?",
    "options": [
      "Indexes are unnecessary because a field with few distinct values cannot appear in any useful query plan.",
      "A full-table scan is always preferable because indexing status values creates duplicate records in the database.",
      "An index aligned with selective query predicates, such as queue and open status, may improve retrieval of the relatively small active-case subset.",
      "The table should be denormalized into one record per queue so the database no longer needs to filter by case status."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Query",
      "Optimization",
      "Index",
      "Selectivity"
    ],
    "reference": "Database Performance; Indexes"
  },
  {
    "id": "DIM-074",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which SQL statement category is primarily used to grant or revoke permissions on database objects such as tables, views, and procedures?",
    "options": [
      "Data Control Language",
      "Data Definition Language",
      "Data Manipulation Language",
      "Transaction Control Language"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Data",
      "Manipulation",
      "vs.",
      "Data",
      "Control"
    ],
    "reference": "SQL; Database Management Systems"
  },
  {
    "id": "DIM-075",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retail database contains a field for delivery date. Most records contain a value, but some include impossible dates, such as February 30, while others contain text values where a valid date should appear. Which data-quality dimension is MOST directly compromised?",
    "options": [
      "Timeliness, because delivery dates may not be updated frequently enough for daily logistics decisions.",
      "Validity, because some stored values do not conform to the required date format or permissible calendar values.",
      "Uniqueness, because several orders may legitimately share the same delivery date.",
      "Completeness, because every order record should include multiple historical delivery dates rather than one current value."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Quality",
      "Validity"
    ],
    "reference": "Data Quality Management"
  },
  {
    "id": "DIM-076",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A university stores instructor information only in a CourseAssignment table. A newly hired instructor cannot be entered into the database until the instructor is assigned to at least one course section. The university wants to store instructor records independently of current teaching assignments. Which design issue is MOST directly illustrated?",
    "options": [
      "A deletion anomaly caused by removing the final assignment associated with an instructor.",
      "An insertion anomaly caused by requiring an unrelated course assignment before creating an instructor record.",
      "A referential-integrity failure caused by assigning an instructor to more than one course section.",
      "A transaction-isolation problem caused by multiple departments entering instructor information simultaneously."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Database",
      "Normalization",
      "Insertion",
      "Anomalies"
    ],
    "reference": "Relational Database Design; Normalization"
  },
  {
    "id": "DIM-077",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "An Employee table contains EmployeeID, EmployeeName, and ManagerID, where ManagerID references another EmployeeID in the same table. A human-resources analyst needs a report showing each employee alongside the name of that employee’s manager. Which SQL technique is MOST appropriate?",
    "options": [
      "A CROSS JOIN between Employee and Manager because every employee should be paired with all potential managers.",
      "A LEFT OUTER JOIN between Employee and Department because managers normally belong to separate organizational entities.",
      "A UNION query combining employee rows and manager rows into one result set with a shared column structure.",
      "A self join that treats Employee as both the employee source and the manager source using the ManagerID relationship."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "SQL",
      "Joins",
      "Self",
      "Joins"
    ],
    "reference": "SQL; Relational Queries"
  },
  {
    "id": "DIM-078",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A travel-booking system reserves a hotel room, charges a customer’s card, creates a confirmation record, and updates room availability. If the credit-card authorization fails after the room is temporarily held, the system must avoid leaving the room unavailable without a confirmed booking. Which design principle is MOST important?",
    "options": [
      "Treat the related updates as one transaction so all changes succeed together or are rolled back together.",
      "Separate each update into independent transactions so room availability can be changed before payment authorization occurs.",
      "Use a scheduled batch process to reconcile incomplete reservations after the end of each business day.",
      "Store reservation details in a document database because flexible schemas prevent partial booking records."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Transaction",
      "Processing",
      "Atomicity"
    ],
    "reference": "Transaction Processing; ACID Properties"
  },
  {
    "id": "DIM-079",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer is designing a sales fact table for trend reporting. Executives want to analyze revenue by individual transaction, product, store, customer segment, and calendar date. Before selecting measures and dimension keys, what should the data-warehouse team define FIRST?",
    "options": [
      "The indexing strategy for every dimension table used in executive dashboards.",
      "The visual format for reports that will display monthly revenue and sales trends.",
      "The grain, or exact level of detail represented by each row in the fact table.",
      "The backup schedule for historical sales data retained in the warehouse environment."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Warehouse",
      "Grain"
    ],
    "reference": "Data Warehousing; Fact Tables"
  },
  {
    "id": "DIM-080",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A health system finds that no department is accountable for correcting inaccurate provider-directory information shared across scheduling, billing, and patient-portal systems. Errors persist because each team assumes another group owns the data. Which action would MOST directly address the problem?",
    "options": [
      "Give every department unrestricted authority to update provider data whenever it discovers an inconsistency.",
      "Assign formal data ownership and stewardship responsibilities for provider-directory definitions, quality, and remediation.",
      "Consolidate all provider information into a spreadsheet maintained by the scheduling department.",
      "Remove provider-directory data from the patient portal until all source systems use the same software platform."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Governance",
      "Data",
      "Ownership"
    ],
    "reference": "Data Governance; Stewardship"
  },
  {
    "id": "DIM-081",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A web-based claims portal lets users search for claims by policy number. Developers build SQL statements by concatenating the user’s entered value directly into the query string. Which revision MOST directly reduces the risk that malicious input could alter the intended query?",
    "options": [
      "Use parameterized queries that bind user input as data rather than incorporating it directly into executable SQL syntax.",
      "Encrypt the claims table so users cannot interpret any records returned by a search query.",
      "Add an index to PolicyNumber so the database resolves search requests before malicious text can be processed.",
      "Move the search function into a nightly batch process so users cannot submit database queries in real time."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "SQL",
      "Injection",
      "Secure",
      "Query",
      "Construction"
    ],
    "reference": "Database Security; Application Security"
  },
  {
    "id": "DIM-082",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A nonprofit combines donor records from event registration, online giving, and volunteer systems. Some supporters appear three times because one system uses a nickname, another includes a middle initial, and a third contains an outdated email address. Which data-quality dimension is MOST directly compromised?",
    "options": [
      "Validity, because donor names and addresses may not follow the required data-entry format.",
      "Timeliness, because donor records were collected through systems at different points in time.",
      "Completeness, because some donor profiles may not include every attribute needed for fundraising reports.",
      "Uniqueness, because one real-world donor is represented by multiple records across the organization."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Quality",
      "Uniqueness"
    ],
    "reference": "Data Quality Management"
  },
  {
    "id": "DIM-083",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A research organization stores identifiable participant data, consent information, laboratory results, and derived study variables in several related tables. Analysts need a simplified dataset containing only approved de-identified variables and calculated measures. Which database feature BEST supports this need?",
    "options": [
      "A trigger that automatically updates all participant records whenever analysts submit a query.",
      "A transaction log that records analyst access to every field in the underlying research tables.",
      "A view that presents selected approved fields and transformations while restricting direct access to sensitive tables.",
      "A clustered index that organizes participant records by study identifier for faster retrieval during analysis."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Views",
      "Security",
      "and",
      "Simplification"
    ],
    "reference": "SQL; Views"
  },
  {
    "id": "DIM-084",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A purchasing application allows multiple employees to edit supplier contracts. The database team wants to reduce the chance that two transactions each hold a lock needed by the other, causing both to wait indefinitely. Which strategy MOST directly helps prevent this situation?",
    "options": [
      "Allow transactions to read uncommitted values so they do not need to wait for locked records.",
      "Require transactions to acquire commonly needed resources in a consistent order or use timeout and deadlock-detection policies.",
      "Remove all locking because concurrent users should be able to modify supplier contracts independently.",
      "Commit every field update immediately so no transaction can contain more than one database operation."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Concurrency",
      "Control",
      "Deadlock",
      "Prevention"
    ],
    "reference": "Transaction Processing; Concurrency"
  },
  {
    "id": "DIM-085",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer wants sales reports to show the sales territory assigned to each store at the time a transaction occurred, even after the store is reassigned to a different regional manager. Which approach BEST preserves this historical reporting requirement?",
    "options": [
      "Overwrite the current territory value in the store dimension whenever a manager reassignment occurs.",
      "Store only the latest territory value in the sales fact table so all reports reflect the current organizational structure.",
      "Delete historical territory assignments after each annual reporting cycle to reduce warehouse storage requirements.",
      "Preserve historical dimension versions so transactions remain associated with the territory values effective at the time of sale."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Slowly",
      "Changing",
      "Dimensions",
      "Historical",
      "Accuracy"
    ],
    "reference": "Data Warehousing; Dimensional Modeling"
  },
  {
    "id": "DIM-086",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which SQL statement is primarily used to modify the definition of an existing table, such as adding a new column or changing a column’s data type?",
    "options": [
      "ALTER TABLE",
      "UPDATE",
      "SELECT",
      "COMMIT"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "SQL",
      "DDL"
    ],
    "reference": "SQL; Database Management Systems"
  },
  {
    "id": "DIM-087",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A financial organization stores sensitive account information in a database hosted by a third-party cloud provider. Security leaders want protection if storage media, database files, or backups are accessed without authorization. Which control MOST directly addresses this risk?",
    "options": [
      "Apply a CHECK constraint to ensure account balances fall within approved numeric ranges.",
      "Use a foreign key to ensure each account transaction references an existing customer record.",
      "Encrypt data at rest, including database storage and backups, with appropriate key-management controls.",
      "Create materialized views so frequently requested account summaries can be retrieved more quickly."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Encryption",
      "At",
      "Rest"
    ],
    "reference": "Database Security; Information Protection"
  },
  {
    "id": "DIM-088",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A company database stores PurchaseOrder records that reference Supplier records. A database administrator considers enabling cascading deletion so deleting a supplier would automatically delete all associated purchase orders. Which concern is MOST appropriate?",
    "options": [
      "Cascading deletion should always be enabled because it prevents orphaned purchase orders and simplifies data management.",
      "The organization should evaluate whether historical purchase orders must be retained, because automatic deletion could remove audit and financial records.",
      "Cascading deletion is unnecessary because foreign keys prevent any supplier record from ever being deleted.",
      "The organization should replace the foreign key with a text field containing the supplier name to preserve historical transactions."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Referential",
      "Integrity",
      "Cascading",
      "Actions"
    ],
    "reference": "Relational Databases; Foreign Keys"
  },
  {
    "id": "DIM-089",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A firm performs a full database backup every Saturday night and incremental backups each weekday evening. On Friday morning, the database fails. Incremental backups capture only changes since the most recent backup of any type. Which restoration sequence is typically required?",
    "options": [
      "Restore only the Thursday incremental backup because it contains every change made after the Saturday full backup.",
      "Restore every historical full backup before applying any incremental backups from the current week.",
      "Restore the Saturday full backup and then apply only the Friday backup, because it contains all cumulative weekday changes.",
      "Restore the Saturday full backup, then apply each subsequent incremental backup in chronological order."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Backup",
      "and",
      "Recovery",
      "Incremental",
      "Backups"
    ],
    "reference": "Data Recovery; Backup Strategies"
  },
  {
    "id": "DIM-090",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A consulting firm stores public brochures, internal procedures, confidential client financial data, and privileged legal documents. Leadership wants access, retention, sharing, and protection requirements to vary according to the sensitivity of each information type. What should the firm establish FIRST?",
    "options": [
      "A data-classification framework that defines sensitivity categories and corresponding handling, access, and protection requirements.",
      "A single retention rule that deletes all data after the same fixed period regardless of client obligations or legal requirements.",
      "A database index on confidential files so sensitive records can be located more quickly during compliance reviews.",
      "A full backup procedure that stores all information categories together in one shared archive without differentiated controls."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Classification",
      "Handling",
      "Controls"
    ],
    "reference": "Data Governance; Information Security"
  },
  {
    "id": "DIM-091",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A university stores course, instructor, and department information in a single CourseOffering table. When the final course taught by a particular instructor is removed, the instructor’s contact information and department assignment are also lost. The university wants to retain instructor records even when no current course offering exists. Which issue is MOST directly illustrated?",
    "options": [
      "A transaction-isolation problem caused by multiple users deleting course offerings at the same time.",
      "A deletion anomaly caused by storing instructor information only within course-offering records.",
      "A referential-integrity failure caused by assigning one instructor to more than one course section.",
      "A data-warehouse problem caused by mixing operational and historical academic information in one table."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Database",
      "Normalization",
      "Deletion",
      "Anomalies"
    ],
    "reference": "Relational Database Design; Normalization"
  },
  {
    "id": "DIM-092",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A hospital needs a report showing each physician and all active clinical trials in which the physician participates. Physicians may participate in multiple trials, and each trial may include multiple physicians. The database uses a PhysicianTrial table containing PhysicianID, TrialID, role, and start date. Which query approach is MOST appropriate?",
    "options": [
      "Join Physician directly to ClinicalTrial because many-to-many relationships do not require an intermediary table.",
      "Use a cross join between Physician and ClinicalTrial, then filter results by trial status and physician specialty.",
      "Join Physician to PhysicianTrial and then to ClinicalTrial using the linking keys in the association table.",
      "Use a self join on Physician because each physician may be associated with more than one clinical-trial record."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "SQL",
      "Joins",
      "Many-to-Many",
      "Relationships"
    ],
    "reference": "SQL; Relational Queries"
  },
  {
    "id": "DIM-093",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A purchasing manager runs a report showing all open purchase requests above $10,000. While the manager is reviewing the report, another employee inserts several new qualifying requests. When the manager reruns the same query within the same transaction, the new rows now appear. Which concurrency phenomenon is MOST directly illustrated?",
    "options": [
      "A phantom read, because a repeated query returns additional rows that satisfy the same search condition.",
      "A dirty read, because the report contains values written by a transaction that has not yet been committed.",
      "A lost update, because one employee’s change overwrites another employee’s completed modification.",
      "A deadlock, because two transactions are waiting for one another to release locked purchase-request records."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "ACID",
      "Properties",
      "Isolation",
      "Levels"
    ],
    "reference": "Transaction Processing; Concurrency Control"
  },
  {
    "id": "DIM-094",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A retailer builds an analytical database in which a Sales fact table contains revenue, quantity, and discount measures. It links to dimensions for Date, Product, Store, Customer Segment, and Promotion. The goal is to support intuitive reporting and fast aggregation across business dimensions. Which modeling approach is MOST clearly represented?",
    "options": [
      "A fully normalized operational schema designed primarily for high-volume transaction updates.",
      "A document-oriented database supporting flexible product attributes without predefined relationships.",
      "A data lake retaining raw source records for later exploratory analysis under schema-on-read principles.",
      "A star schema organizing a central fact table around descriptive dimension tables."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Warehouses",
      "Star",
      "Schemas"
    ],
    "reference": "Dimensional Modeling; Fact and Dimension Tables"
  },
  {
    "id": "DIM-095",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A financial organization finds that different reports use “net revenue” to mean different calculations. Some reports subtract refunds only, while others subtract refunds, promotional credits, and payment-processing fees. Leadership wants a single approved definition that analysts can locate and apply consistently. Which artifact would MOST directly address this need?",
    "options": [
      "A transaction log documenting every historical update to revenue records across source systems.",
      "A business glossary defining approved terms, calculation logic, ownership, and intended use.",
      "A database index on revenue fields so financial reports can be generated with lower query latency.",
      "A backup-retention schedule specifying how long revenue data must be retained before deletion."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Governance",
      "Business",
      "Glossaries"
    ],
    "reference": "Data Governance; Metadata Management"
  },
  {
    "id": "DIM-096",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A healthcare organization wants to report the number of unique patients who had at least one emergency-department visit during each calendar month. The Visits table includes PatientID, VisitDate, VisitType, and FacilityID, and individual patients may have multiple visits in one month. Which SQL technique is MOST directly needed?",
    "options": [
      "Group records by month and use COUNT(DISTINCT PatientID) to avoid counting repeat visits by the same patient.",
      "Use a DELETE statement to remove all but the first visit recorded for each patient before generating monthly totals.",
      "Use a CROSS JOIN between Patients and Visits so every patient is evaluated against every month in the reporting period.",
      "Create a separate Patient table for each month so unique patient counts can be calculated without aggregation."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "SQL",
      "Aggregation",
      "DISTINCT",
      "Counts"
    ],
    "reference": "SQL; Aggregate Queries"
  },
  {
    "id": "DIM-097",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A financial system allows accounts-payable staff to enter invoices, purchasing staff to approve purchase orders, and treasury staff to release payments. Management wants access rights to align with job responsibilities and prevent one user from completing all stages of the same transaction. Which access-control model BEST supports this objective?",
    "options": [
      "Give all finance employees administrative access, then use audit reports to identify inappropriate transactions after processing.",
      "Allow users to request temporary access to any function whenever a transaction requires additional approval.",
      "Assign permissions to defined roles and separate critical transaction privileges across those roles.",
      "Restrict all system access to database administrators and require departments to submit manual requests for every transaction."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Role-Based",
      "Access",
      "Control",
      "Separation",
      "of",
      "Duties"
    ],
    "reference": "Database Security; Access Management"
  },
  {
    "id": "DIM-098",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A call-center application displays customer account information to support representatives. Representatives need to confirm the last four digits of a bank account but should never see the complete account number, even while viewing live customer records. Which control BEST meets this requirement?",
    "options": [
      "Encrypt all account records and provide representatives with the encryption key during each customer interaction.",
      "Move bank-account data to an offline archive so representatives cannot access any payment information during service calls.",
      "Replace account numbers with random values in the production database so the original information is unavailable to all users.",
      "Apply dynamic data masking that reveals only authorized portions of the value based on the user’s role."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Data",
      "Masking",
      "Dynamic",
      "Privacy",
      "Controls"
    ],
    "reference": "Database Security; Privacy Protection"
  },
  {
    "id": "DIM-099",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A manufacturer integrates order data from regional subsidiaries. One system identifies a customer using a numeric code, another uses an alphanumeric account ID, and a third uses separate country and local-account fields. The integration team wants downstream applications to process customer records through a consistent enterprise format. What is the MOST appropriate approach?",
    "options": [
      "Require every regional system to preserve its existing field definitions so local applications remain unchanged.",
      "Define a canonical customer-data model and transform each source format into that common representation during integration.",
      "Store all customer identifiers in one free-text field so downstream applications can interpret each local format as needed.",
      "Export monthly spreadsheets from every subsidiary and manually reconcile customer identifiers before each enterprise report."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Integration",
      "Canonical",
      "Data",
      "Models"
    ],
    "reference": "Enterprise Data Integration; Data Architecture"
  },
  {
    "id": "DIM-100",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A patient-registration system accepts a validly formatted postal code for a patient’s address. Later, staff discover that the postal code belongs to a different city than the one recorded in the address field. Which data-quality issue is MOST directly demonstrated?",
    "options": [
      "A completeness issue, because the record should contain more than one geographic attribute.",
      "A timeliness issue, because address information may not have been refreshed recently enough.",
      "An accuracy issue, because the stored value may conform to format rules but does not correctly represent the patient’s actual address.",
      "A uniqueness issue, because several patients may reside within the same postal-code area."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Quality",
      "Accuracy",
      "vs.",
      "Validity"
    ],
    "reference": "Data Quality Management"
  },
  {
    "id": "DIM-101",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "An online retailer maintains a primary database in one cloud region and a synchronized secondary database in another region. If the primary region experiences a major outage, the company can redirect application traffic to the secondary environment with minimal interruption. What capability is MOST directly being supported?",
    "options": [
      "High availability and disaster resilience through database replication and failover capability.",
      "Data normalization by separating live and backup records into different database environments.",
      "Transaction isolation by ensuring that concurrent users access different cloud regions during peak traffic.",
      "Data masking by preventing users in one geographic region from viewing sensitive records stored in another."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Database",
      "Replication",
      "Availability"
    ],
    "reference": "Database Architecture; High Availability"
  },
  {
    "id": "DIM-102",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A hospital creates a view joining patient, provider, and appointment tables for scheduling staff. The view includes calculated fields, grouped appointment totals, and data from multiple source tables. Staff ask whether they can directly update all underlying appointment fields through the view. What should the database team explain?",
    "options": [
      "All views are automatically writable because they are stored database objects rather than query definitions.",
      "Views cannot be used for access control because users always retain direct rights to all underlying tables.",
      "A view is always read-only whenever it references more than one table, regardless of its structure or DBMS capabilities.",
      "Complex views containing joins, aggregations, or calculated results may be non-updatable or subject to database-specific restrictions."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "SQL",
      "Views",
      "Updatable",
      "vs.",
      "Read-Only",
      "Data"
    ],
    "reference": "SQL; Views and Data Access"
  },
  {
    "id": "DIM-103",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A healthcare organization maintains patient billing records that must remain available for regulatory review but are rarely needed for day-to-day operations after several years. The operational database has slowed as historical records accumulate. Which strategy BEST balances access needs and performance?",
    "options": [
      "Delete all historical billing data once it is no longer used by frontline staff.",
      "Archive eligible historical records to governed long-term storage while preserving retention, retrieval, and audit requirements.",
      "Copy historical billing records into personal spreadsheets maintained by each department for future reference.",
      "Keep all records in the operational database because any separation of historical data creates automatic compliance risk."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Data",
      "Retention",
      "Archiving"
    ],
    "reference": "Information Lifecycle Management; Records Management"
  },
  {
    "id": "DIM-104",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "Which SQL command makes the changes in the current transaction permanent?",
    "options": [
      "ROLLBACK",
      "SAVEPOINT",
      "COMMIT",
      "GRANT"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "SQL",
      "Transaction",
      "Control"
    ],
    "reference": "SQL; Transaction Management"
  },
  {
    "id": "DIM-105",
    "category": "Data & Information Management",
    "difficulty": "medium",
    "question": "A nonprofit database allows volunteers to enter donation records before a donor profile has been selected. This creates transaction rows with no donor identifier, making it impossible to determine who made certain contributions. Which design control would MOST directly prevent this issue?",
    "options": [
      "Require a non-null donor foreign key that references an existing donor record before a donation can be saved.",
      "Add an index to the donation date so staff can retrieve contributions more quickly during fundraising reporting.",
      "Store donor names as free text in the donation record so staff can enter contributions without needing a donor profile.",
      "Move all donation records to a data warehouse because analytical systems do not require operational integrity constraints."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Database",
      "Design",
      "Entity",
      "Integrity"
    ],
    "reference": "Relational Databases; Integrity Constraints"
  },
  {
    "id": "PM-001",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A regional hospital is considering a new operating-room scheduling system. Before detailed requirements gathering begins, executives want a document that formally identifies the business problem, project sponsor, high-level objectives, major constraints, initial budget assumptions, and authority to begin the work. Which project artifact is MOST appropriate?",
    "options": [
      "A work breakdown structure that decomposes all planned project work into deliverable-based components.",
      "A project charter that formally authorizes the initiative and establishes its initial purpose, scope, and governance.",
      "A risk register that lists potential threats, likelihood estimates, response plans, and assigned risk owners.",
      "A sprint backlog that prioritizes user stories for the first development iteration."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Charter",
      "Sponsor",
      "Authorization"
    ],
    "reference": "Project Initiation; Project Charter"
  },
  {
    "id": "PM-002",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A university is implementing a new student-advising platform. The project manager needs to organize the total project scope into manageable deliverables and work packages, including requirements analysis, interface design, data conversion, training, testing, and rollout. Which planning tool BEST supports this objective?",
    "options": [
      "A Gantt chart that displays project activities across a calendar timeline with planned start and end dates.",
      "A stakeholder register that identifies affected groups, their interests, and preferred communication methods.",
      "A risk matrix that classifies uncertain events by probability, impact, and response priority.",
      "A work breakdown structure that decomposes the complete project scope into smaller, controllable components."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Work",
      "Breakdown",
      "Structure",
      "Scope",
      "Planning"
    ],
    "reference": "Project Planning; Work Breakdown Structure"
  },
  {
    "id": "PM-003",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A software project has several linked activities. If a delay in database migration would delay interface testing, user acceptance testing, and final deployment, the project manager identifies the migration activity as having zero schedule flexibility. What does this MOST directly indicate?",
    "options": [
      "The activity lies on the critical path, meaning delay to the activity will delay the overall project completion date.",
      "The activity is a project milestone, meaning it has no duration but marks the completion of a major deliverable.",
      "The activity has a high resource risk, meaning additional team members must be assigned before work can begin.",
      "The activity is outside project scope, meaning it should be completed only if time remains before deployment."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Critical",
      "Path",
      "Schedule",
      "Management"
    ],
    "reference": "Project Scheduling; Critical Path Method"
  },
  {
    "id": "PM-004",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "During development of a customer-service platform, a vice president requests predictive analytics capabilities that were not part of the approved scope. The feature could provide value but would require new data sources, additional development time, and specialized testing. What should the project manager do FIRST?",
    "options": [
      "Add the feature because executive requests should be incorporated whenever they may improve management decision-making.",
      "Defer the feature automatically to maintenance because approved project scope cannot be modified during development.",
      "Evaluate the request through formal change control, including business value, technical impact, cost, schedule, and risk.",
      "Ask developers to begin building the feature while stakeholders decide whether to revise the project budget."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Scope",
      "Baseline",
      "Change",
      "Control"
    ],
    "reference": "Scope Management; Change Governance"
  },
  {
    "id": "PM-005",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A retail company is implementing a replacement point-of-sale system before the holiday season. The project team identifies the risk that store-network instability could interrupt transactions during rollout. The project manager wants the risk documented with likelihood, impact, response actions, warning indicators, and an accountable owner. Which artifact should be updated?",
    "options": [
      "The data dictionary, because it defines the fields and allowed values used within point-of-sale transactions.",
      "The risk register, because it records identified risks, planned responses, assigned ownership, and monitoring information.",
      "The project charter, because it establishes the original business case and authorizes the project sponsor.",
      "The work breakdown structure, because it divides all project deliverables into smaller technical work packages."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Risk",
      "Register",
      "Risk",
      "Ownership"
    ],
    "reference": "Risk Management; Risk Planning"
  },
  {
    "id": "PM-006",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A health system plans to migrate patient data to a new platform. The project team determines that a particular legacy-data source is too unreliable to convert safely within the available timeline, so leadership decides to exclude that source from the initial release and continue using a controlled manual process temporarily. Which risk-response strategy is MOST directly illustrated?",
    "options": [
      "Risk acceptance, because the organization recognizes the data issue but takes no specific action before deployment.",
      "Risk transfer, because responsibility for the unreliable data source is assigned to an external vendor.",
      "Risk mitigation, because the project team reduces likelihood through additional conversion testing and data-cleaning activities.",
      "Risk avoidance, because the project changes scope to eliminate exposure to the unacceptable migration risk."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Risk",
      "Response",
      "Strategies"
    ],
    "reference": "Risk Management; Response Planning"
  },
  {
    "id": "PM-007",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A hospital is deploying a new medication-ordering system. Physicians want concise updates on clinical workflow changes, pharmacists need detailed testing schedules, executives want status summaries, and nursing staff need training information before go-live. What should the project manager develop to address these different needs systematically?",
    "options": [
      "A procurement plan defining vendor-selection criteria, contract deliverables, and purchasing responsibilities.",
      "A quality-management plan specifying test methods, defect thresholds, and acceptance standards.",
      "A stakeholder communication plan identifying audiences, information needs, timing, delivery channels, and responsible communicators.",
      "A work breakdown structure that assigns detailed activities to project team members according to project phase."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Stakeholder",
      "Analysis",
      "Communication",
      "Planning"
    ],
    "reference": "Stakeholder Management; Communication Planning"
  },
  {
    "id": "PM-008",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project plan identifies “Requirements Approved,” “Data Migration Complete,” “User Acceptance Testing Complete,” and “Production Go-Live” as major checkpoints. These items have no planned duration but are used to assess whether the project has reached important decision points. What are these items MOST accurately called?",
    "options": [
      "Milestones, because they mark significant events or completion points in the project schedule.",
      "Work packages, because they represent the lowest-level units of work assigned to project staff.",
      "Dependencies, because they identify tasks that cannot begin until a previous activity is completed.",
      "Baseline variances, because they measure differences between planned and actual project performance."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Milestones",
      "Schedule",
      "Tracking"
    ],
    "reference": "Project Scheduling; Milestones"
  },
  {
    "id": "PM-009",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A software project is behind schedule because two critical integration tasks require the same database specialist during the same week. Adding more developers would not help because the work requires specialized knowledge and cannot be divided effectively. Which project-management issue is MOST directly present?",
    "options": [
      "Scope creep, because additional requirements have expanded the amount of work beyond the approved baseline.",
      "Stakeholder conflict, because different departments are competing to define the preferred technical solution.",
      "Quality risk, because the database specialist may introduce defects when completing multiple tasks.",
      "A resource constraint, because limited availability of a required specialist affects the project schedule."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Resource",
      "Constraints",
      "Schedule",
      "Trade-Offs"
    ],
    "reference": "Project Scheduling; Resource Management"
  },
  {
    "id": "PM-010",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project has planned to complete 60% of its work by the end of the month. The team has actually completed 45% of the planned scope, although spending is close to the original budget. Which conclusion is MOST appropriate?",
    "options": [
      "The project is ahead of schedule because actual spending has not exceeded the planned budget.",
      "The project is behind schedule because completed work is less than the amount planned for this point in time.",
      "The project is over budget because any delay automatically increases actual project cost beyond the baseline.",
      "The project is within scope because the amount of completed work does not affect schedule performance."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Earned",
      "Value",
      "Schedule",
      "Performance"
    ],
    "reference": "Project Monitoring and Control; Earned Value Management"
  },
  {
    "id": "PM-011",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A development team is preparing for its next iteration of a claims-processing application. Several backlog items have unclear acceptance criteria, uncertain dependencies, and incomplete estimates. Before selecting work for the upcoming sprint, what should the team do?",
    "options": [
      "Begin development on the highest-visibility backlog items because requirements can be clarified after coding has started.",
      "Freeze the backlog until all future project releases have been fully estimated and approved by executive leadership.",
      "Refine backlog items with stakeholders by clarifying scope, acceptance criteria, dependencies, and relative priority.",
      "Move incomplete backlog items directly to maintenance because active iterations should include only previously completed features."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Agile",
      "Project",
      "Management",
      "Product",
      "Backlog"
    ],
    "reference": "Agile Planning; Product Backlog"
  },
  {
    "id": "PM-012",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Which project-management tool is MOST commonly used to display activities against a calendar timeline, including planned durations, start dates, finish dates, and overlapping work?",
    "options": [
      "Gantt chart",
      "Risk register",
      "Stakeholder matrix",
      "Data-flow diagram"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Gantt",
      "Charts"
    ],
    "reference": "Project Scheduling; Gantt Charts"
  },
  {
    "id": "PM-013",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A company is building a new expense-reporting system. Before development begins, finance leaders define measurable conditions for acceptance, including maximum processing time, required approval-routing accuracy, supported receipt formats, and expected error handling. What is the PRIMARY purpose of defining these conditions early?",
    "options": [
      "To assign individual development tasks to team members according to their technical specialization.",
      "To estimate the number of employees who will require training before the system is deployed.",
      "To determine whether the project should use a phased, parallel, pilot, or direct conversion strategy.",
      "To establish objective criteria for verifying that project deliverables satisfy agreed business and quality requirements."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Quality",
      "Management",
      "Acceptance",
      "Criteria"
    ],
    "reference": "Quality Planning; Project Validation"
  },
  {
    "id": "PM-014",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "After a new inventory system is deployed, the project manager conducts a structured review of schedule variance, cost performance, defects, stakeholder feedback, vendor coordination, and implementation decisions. The team documents practices that should be repeated and problems that should be avoided in later projects. What is the PRIMARY purpose of this activity?",
    "options": [
      "To reopen requirements analysis and replace all business rules that were approved before design began.",
      "To capture lessons learned and assess project performance so future initiatives can be managed more effectively.",
      "To repeat unit testing on completed software modules using the original technical design specifications.",
      "To determine whether the legacy system should remain active indefinitely as a permanent backup environment."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Closeout",
      "Lessons",
      "Learned"
    ],
    "reference": "Project Closeout; Continuous Improvement"
  },
  {
    "id": "PM-015",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team discovers that a planned interface with an external vendor cannot meet required security standards without substantial redesign. The issue exceeds the project manager’s delegated authority because it may affect budget, launch timing, and contractual obligations. What should the project manager do MOST appropriately?",
    "options": [
      "Proceed with the existing interface because technical issues should be resolved by developers without involving governance stakeholders.",
      "Remove the security requirement because integration delays are more damaging than compliance risks during implementation.",
      "Delay all work on unrelated project activities until the vendor resolves the issue independently.",
      "Escalate the issue through the established governance process with documented impact, options, and a recommendation for decision-makers."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Project",
      "Governance",
      "Escalation"
    ],
    "reference": "Governance; Issue Management"
  },
  {
    "id": "PM-016",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A regional insurer is implementing a claims-document platform. The project team has identified high-level goals, but departments continue requesting unrelated workflow improvements, reporting enhancements, and integrations. The project manager needs a document that clearly defines included deliverables, exclusions, acceptance boundaries, and major assumptions before detailed planning proceeds. Which artifact is MOST appropriate?",
    "options": [
      "A risk register documenting uncertain events, response strategies, owners, and monitoring triggers.",
      "A stakeholder register listing affected groups, interests, influence levels, and communication preferences.",
      "A project scope statement defining project boundaries, deliverables, exclusions, assumptions, and constraints.",
      "A sprint backlog containing prioritized development tasks selected for the next iteration."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Project",
      "Scope",
      "Statement",
      "Deliverables"
    ],
    "reference": "Scope Management; Project Planning"
  },
  {
    "id": "PM-017",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team cannot begin user acceptance testing until integrated system testing is complete and all critical defects have been resolved. The project schedule shows that acceptance testing begins immediately after integrated testing finishes. Which dependency relationship is MOST directly represented?",
    "options": [
      "Finish-to-start, because the successor activity cannot begin until the predecessor activity is completed.",
      "Start-to-start, because both testing activities must begin at the same scheduled time to maintain project momentum.",
      "Finish-to-finish, because both testing activities must be completed on the same date before implementation begins.",
      "Start-to-finish, because acceptance testing must begin before integrated testing can be formally closed."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Dependencies",
      "Finish-to-Start",
      "Relationships"
    ],
    "reference": "Project Scheduling; Activity Dependencies"
  },
  {
    "id": "PM-018",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A retailer plans to launch a new point-of-sale system before the holiday season. The project team identifies a risk that store-network instability may interrupt payment processing during rollout. What response BEST represents risk mitigation rather than avoidance, transfer, or simple acceptance?",
    "options": [
      "Remove all real-time payment functions from the initial release and continue using the legacy payment terminal indefinitely.",
      "Purchase insurance that compensates the retailer for revenue lost during a payment-processing interruption.",
      "Document the risk but take no additional action because network failures cannot be completely eliminated.",
      "Conduct network stress testing, upgrade weak locations, establish fallback procedures, and monitor performance before launch."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Risk",
      "Mitigation",
      "Contingency",
      "Planning"
    ],
    "reference": "Risk Management; Response Strategies"
  },
  {
    "id": "PM-019",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A hospital project involves IT, nursing, pharmacy, compliance, and vendor staff. Team members repeatedly ask who has authority to approve medication-workflow changes, who performs training, who must be consulted on policy, and who only needs status updates. Which tool would MOST directly clarify these responsibilities?",
    "options": [
      "A work breakdown structure assigning project work into deliverable-based packages.",
      "A RACI matrix identifying who is Responsible, Accountable, Consulted, and Informed for key activities.",
      "A Gantt chart showing scheduled activities, dependencies, milestones, and expected completion dates.",
      "A risk heat map categorizing identified risks by their probability and potential project impact."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "RACI",
      "Matrix",
      "Accountability"
    ],
    "reference": "Project Governance; Responsibility Assignment"
  },
  {
    "id": "PM-020",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project is forecast to finish six weeks late. Management asks whether the team can shorten the timeline without reducing scope. The project manager identifies two activities—interface design and development of unrelated reporting modules—that were originally planned sequentially but could partially overlap with additional coordination. Which technique is MOST directly being considered?",
    "options": [
      "Crashing, because additional personnel and paid resources would be added to shorten activity durations.",
      "Scope reduction, because lower-priority requirements would be removed to meet the original deadline.",
      "Fast tracking, because activities originally planned in sequence would be performed partially in parallel.",
      "Risk transfer, because schedule responsibility would be assigned to an external vendor under a revised contract."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Schedule",
      "Compression",
      "Fast",
      "Tracking"
    ],
    "reference": "Project Scheduling; Schedule Compression"
  },
  {
    "id": "PM-021",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager compares actual spending, completed work, and elapsed schedule time with the approved plan for a new billing system. Several requirements have been formally approved through change control since planning began. Which baseline should be updated to ensure performance reporting remains meaningful?",
    "options": [
      "The integrated project baseline, including approved scope, schedule, and cost changes.",
      "The initial project charter, because it should always remain unchanged after project authorization.",
      "The stakeholder register, because it records affected parties and their influence over project decisions.",
      "The risk register, because all approved changes should automatically be categorized as project risks."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Baseline",
      "Performance",
      "Measurement"
    ],
    "reference": "Project Monitoring and Control; Baselines"
  },
  {
    "id": "PM-022",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project has completed work valued at $240,000 according to the approved plan, but actual spending for that work totals $300,000. Which conclusion is MOST appropriate?",
    "options": [
      "The project is ahead of schedule because actual spending is greater than the planned value of completed work.",
      "The project is over budget for the work accomplished because actual cost exceeds earned value.",
      "The project is under budget because the team has completed more work than originally planned.",
      "The project has a positive cost variance because its actual expenditures are higher than expected."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Earned",
      "Value",
      "Cost",
      "Performance"
    ],
    "reference": "Project Monitoring and Control; Earned Value Management"
  },
  {
    "id": "PM-023",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A product team is selecting work for a two-week sprint. The team wants a concise statement describing the business outcome the sprint should achieve, helping members make trade-offs if unexpected work emerges. Which Agile concept MOST directly serves this purpose?",
    "options": [
      "A product roadmap showing anticipated releases and strategic themes over several months or quarters.",
      "A burndown chart showing the amount of remaining work across the duration of the current sprint.",
      "A definition of done describing quality conditions required before a backlog item can be considered complete.",
      "A sprint goal describing the intended outcome and shared purpose of the selected sprint work."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Agile",
      "Planning",
      "Sprint",
      "Goal"
    ],
    "reference": "Agile Project Management; Sprint Planning"
  },
  {
    "id": "PM-024",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A manufacturer needs a specialized forecasting system. Building internally would provide maximum flexibility but require eighteen months of development; buying a package would be faster but require configuration and vendor support. Before selecting an approach, what should the project team evaluate MOST comprehensively?",
    "options": [
      "Whether the internal development team prefers using its current programming tools instead of learning a package configuration system.",
      "Whether executives can defer all reporting requirements until the solution has been deployed in production.",
      "Strategic fit, total cost of ownership, delivery timeline, vendor risks, integration needs, and internal capability.",
      "Whether a pilot conversion can eliminate the need to assess ongoing vendor maintenance and contractual obligations."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Procurement",
      "Management",
      "Make-or-Buy",
      "Analysis"
    ],
    "reference": "Project Procurement; Vendor Selection"
  },
  {
    "id": "PM-025",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "During testing, a vendor informs the project team that a required interface cannot meet encryption standards without significant redesign. The issue threatens compliance, budget, and launch timing, and the project manager lacks authority to alter the vendor contract. What should the project manager do FIRST?",
    "options": [
      "Document the issue, analyze its impacts and options, and escalate it through the established governance process.",
      "Approve the vendor’s existing interface because functional testing has already confirmed that transactions can be exchanged.",
      "Remove encryption requirements from the project scope because the redesign would delay the planned implementation date.",
      "Suspend all project work until the vendor independently proposes a replacement technical solution."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Issue",
      "Management",
      "Escalation"
    ],
    "reference": "Governance; Issue and Decision Management"
  },
  {
    "id": "PM-026",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A development organization reviews coding practices, peer-review procedures, test standards, and defect-prevention activities throughout a project. Separately, testers inspect completed software for errors and compare results with acceptance criteria. Which statement BEST distinguishes these activities?",
    "options": [
      "Quality assurance focuses on inspecting completed deliverables, while quality control focuses on improving the processes used to create them.",
      "Quality assurance focuses on improving processes that prevent defects, while quality control evaluates completed work for defects.",
      "Both activities are limited to user acceptance testing because quality can only be measured after users evaluate the complete system.",
      "Both activities primarily determine whether the project remains within its approved cost and schedule baselines."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Quality",
      "Assurance",
      "vs.",
      "Quality",
      "Control"
    ],
    "reference": "Quality Management; Process and Deliverable Quality"
  },
  {
    "id": "PM-027",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Which Agile artifact typically displays remaining work over the duration of a sprint or release, helping the team assess whether it is progressing toward completion?",
    "options": [
      "Risk register",
      "Product roadmap",
      "Stakeholder matrix",
      "Burndown chart"
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Burndown",
      "Charts"
    ],
    "reference": "Agile Project Management; Monitoring Progress"
  },
  {
    "id": "PM-028",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A company is implementing a new expense-management system. Finance leaders support the initiative, but field employees are concerned that the new mobile submission process will increase scrutiny and reduce flexibility. Which action would MOST likely improve stakeholder engagement and adoption?",
    "options": [
      "Delay all communication until the system is fully developed so employees react only to final approved workflows.",
      "Require employees to use the new application immediately after launch without training to prevent continued reliance on old processes.",
      "Involve representative users early, explain the rationale and benefits, provide role-specific training, and address feedback visibly.",
      "Limit employee participation because implementation decisions should be controlled exclusively by project sponsors and finance leadership."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Stakeholder",
      "Engagement",
      "Resistance",
      "Management"
    ],
    "reference": "Stakeholder Management; Change Enablement"
  },
  {
    "id": "PM-029",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project schedule assigns the same database architect to three tasks planned for the same week. The architect cannot work on all three simultaneously, and two activities are not on the critical path. What action BEST reflects resource leveling?",
    "options": [
      "Adjust task timing within available float to resolve the resource conflict while minimizing impact on the overall project schedule.",
      "Add every planned task to the critical path so the database architect’s workload receives executive attention.",
      "Reduce project scope by eliminating all activities requiring database-architecture expertise.",
      "Ignore the conflict because noncritical activities can be completed at any time without affecting staff availability."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Resource",
      "Leveling",
      "Schedule",
      "Trade-Offs"
    ],
    "reference": "Resource Management; Schedule Optimization"
  },
  {
    "id": "PM-030",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A company has deployed a vendor-built customer portal. Before formally closing the project, the project manager verifies that contracted deliverables were accepted, outstanding invoices are resolved, support obligations are documented, and procurement records are complete. What activity is MOST directly being performed?",
    "options": [
      "Scope validation, because stakeholders are determining whether all requested features should be added before final delivery.",
      "Contract closure, because the organization is confirming fulfillment of vendor obligations and completing procurement administration.",
      "Risk avoidance, because unresolved vendor issues are being removed from the project before transition to operations.",
      "Sprint retrospective, because the project team is reflecting on work practices after a completed iteration."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Closeout",
      "Contract",
      "Closure"
    ],
    "reference": "Project Closeout; Procurement Management"
  },
  {
    "id": "PM-031",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A health system is implementing a replacement electronic-prescribing platform. The project team identifies a moderate likelihood that a vendor interface may require unplanned security remediation before go-live. Rather than changing scope now, leadership sets aside additional budget and schedule capacity specifically for this potential work. Which risk-management practice is MOST directly represented?",
    "options": [
      "Contingency reserve planning, because resources are allocated to address a recognized risk if it occurs.",
      "Risk avoidance, because the organization is eliminating the vendor interface before the risk can materialize.",
      "Risk transfer, because the organization is assigning all future remediation responsibility to the vendor.",
      "Passive risk acceptance, because the team has documented the risk but has not selected a response strategy."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Risk",
      "Response",
      "Contingency",
      "Reserves"
    ],
    "reference": "Risk Management; Cost and Schedule Planning"
  },
  {
    "id": "PM-032",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A software project schedules user-training preparation to begin five business days before final system testing is expected to finish. Training materials can be drafted using stable workflows, but final examples cannot be completed until testing confirms the system behavior. What scheduling concept is MOST directly represented?",
    "options": [
      "A finish-to-finish dependency, because both activities must end at approximately the same time.",
      "A lead, because the successor activity begins before the predecessor activity is fully complete.",
      "A lag, because the training activity is delayed for a fixed period after testing begins.",
      "A milestone dependency, because training preparation has no duration until test results are approved."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Schedule",
      "Lead",
      "and",
      "Lag"
    ],
    "reference": "Project Scheduling; Activity Relationships"
  },
  {
    "id": "PM-033",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "During implementation of a customer portal, several department leaders request small enhancements that each appear manageable. Collectively, the additions would require new testing, revised training, and a later launch date. The project manager has not received formal approval for any of them. What is the MOST appropriate action?",
    "options": [
      "Implement the highest-value requests because small enhancements should not require executive review.",
      "Defer all requests to maintenance because any scope change during development is inherently unacceptable.",
      "Consolidate the requests, assess their cumulative impact, and route them through the established change-control process.",
      "Ask developers to estimate each request independently and begin work on those with the shortest implementation time."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Scope",
      "Creep",
      "Change",
      "Governance"
    ],
    "reference": "Scope Management; Integrated Change Control"
  },
  {
    "id": "PM-034",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A product team completed 32 story points in Sprint 1, 29 in Sprint 2, 31 in Sprint 3, and 30 in Sprint 4. The product owner wants a practical estimate of how much work the team can likely complete in an upcoming sprint, assuming similar staffing and complexity. Which measure is MOST useful?",
    "options": [
      "The total number of features in the product roadmap.",
      "The team’s recent average velocity based on completed story points.",
      "The number of stakeholders attending the most recent sprint review.",
      "The cumulative project budget remaining for the current release."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Agile",
      "Metrics",
      "Velocity"
    ],
    "reference": "Agile Project Management; Iteration Planning"
  },
  {
    "id": "PM-035",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A financial-services company is deciding whether to invest additional effort in automated testing, peer review, and early security checks during development. The project sponsor argues that preventing defects before release may reduce expensive production incidents and rework later. Which quality-management principle BEST supports this investment?",
    "options": [
      "Prevention costs can be justified when they reduce the larger costs associated with failures, rework, and operational defects.",
      "Quality should be assessed only after deployment because users provide the most reliable evidence of system performance.",
      "Testing should replace peer review because defects identified by developers are less meaningful than defects found by end users.",
      "Project quality is determined primarily by whether the team completes work within the original budget and schedule."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Quality",
      "Management",
      "Cost",
      "of",
      "Quality"
    ],
    "reference": "Quality Planning; Defect Prevention"
  },
  {
    "id": "PM-036",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager maps stakeholders for a new clinical-documentation system. The chief medical officer has high authority and high interest, while a large group of occasional users has low authority but moderate concern about workflow changes. How should the project manager generally engage the chief medical officer?",
    "options": [
      "Monitor with minimal communication because executive stakeholders are less affected by operational details.",
      "Keep satisfied with occasional summaries because high-authority stakeholders should not be involved in project decisions.",
      "Manage closely through frequent engagement, decision support, and timely communication on major risks and trade-offs.",
      "Provide only end-of-project updates because senior leaders should avoid influencing requirements and implementation planning."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Stakeholder",
      "Power-Interest",
      "Analysis"
    ],
    "reference": "Stakeholder Management; Engagement Planning"
  },
  {
    "id": "PM-037",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project is projected to finish late. The project manager determines that one critical-path testing activity could be shortened by hiring an experienced external testing firm, although this would increase project cost. Which schedule-compression technique is MOST directly being considered?",
    "options": [
      "Fast tracking, because activities are being performed in parallel that were originally planned sequentially.",
      "Crashing, because additional resources are being applied to shorten the duration of a critical-path activity.",
      "Resource leveling, because task timing is being adjusted to resolve overallocated staff assignments.",
      "Scope validation, because stakeholders are reviewing whether late requirements remain within project boundaries."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Schedule",
      "Compression",
      "Crashing"
    ],
    "reference": "Project Scheduling; Schedule Compression"
  },
  {
    "id": "PM-038",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team uses weekly status reports, but leadership complains that serious issues are sometimes discovered too late. The project manager wants a process that requires immediate notification when security defects, budget overruns, or schedule delays exceed preapproved limits. What should be added?",
    "options": [
      "Escalation thresholds and communication triggers defining which conditions require accelerated reporting and to whom.",
      "A larger work breakdown structure so every project task can be assigned to a separate technical team member.",
      "A more detailed data dictionary so project reports use consistent terminology for technical and business fields.",
      "A longer sprint duration so teams have more time to resolve issues before stakeholders are informed."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Communications",
      "Escalation",
      "Thresholds"
    ],
    "reference": "Communication Management; Governance"
  },
  {
    "id": "PM-039",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager discovers that one database administrator is scheduled for two noncritical tasks during the same week. Both tasks have available float, and the project completion date does not need to change. Which action BEST reflects resource smoothing?",
    "options": [
      "Add both tasks to the critical path so the administrator’s workload becomes a project-level priority.",
      "Delay one noncritical task within its available float to eliminate the overload without extending the final project date.",
      "Reduce project scope by removing the task with lower stakeholder visibility.",
      "Assign both tasks to the database administrator and rely on overtime to maintain the original schedule."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Resource",
      "Management",
      "Resource",
      "Smoothing"
    ],
    "reference": "Resource Management; Schedule Optimization"
  },
  {
    "id": "PM-040",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project has a planned value of $400,000 by the end of the quarter, but the value of completed work is only $320,000. Actual cost is $330,000. Which conclusion about schedule performance is MOST appropriate?",
    "options": [
      "The project is ahead of schedule because actual cost is lower than planned value.",
      "The project is exactly on schedule because actual cost and earned value are close.",
      "The project is behind schedule because earned value is lower than planned value.",
      "The project is over budget because planned value exceeds actual cost."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Earned",
      "Value",
      "Schedule",
      "Variance"
    ],
    "reference": "Project Monitoring and Control; Earned Value Management"
  },
  {
    "id": "PM-041",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "At the end of a sprint, a software team discusses why testing was delayed, identifies that acceptance criteria were often unclear, and agrees to refine backlog items earlier before future sprint planning. Which Agile event is MOST directly represented?",
    "options": [
      "Sprint review, because the team is demonstrating completed work to stakeholders and reprioritizing product features.",
      "Daily stand-up, because team members are reporting progress, blockers, and plans for the next workday.",
      "Backlog grooming, because the team is selecting which future requirements should be included in the next release.",
      "Sprint retrospective, because the team is evaluating its process and identifying improvements for future work."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Agile",
      "Retrospectives",
      "Continuous",
      "Improvement"
    ],
    "reference": "Agile Project Management; Retrospectives"
  },
  {
    "id": "PM-042",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A government agency needs a vendor to build a secure public-records portal. The agency wants prospective vendors to describe their technical approach, implementation plan, staffing model, security controls, pricing, prior experience, and support commitments before selection. Which procurement document is MOST appropriate?",
    "options": [
      "A request for proposal inviting vendors to submit comprehensive solutions against defined requirements and evaluation criteria.",
      "A project charter authorizing the agency’s internal team to begin initial feasibility analysis and stakeholder identification.",
      "A risk register documenting potential vendor failures, cost overruns, and security issues after contract award.",
      "A work breakdown structure decomposing the selected vendor’s development tasks into internal project work packages."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Procurement",
      "Request",
      "for",
      "Proposal"
    ],
    "reference": "Procurement Management; Vendor Selection"
  },
  {
    "id": "PM-043",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager needs approval to extend the launch date because a required data-conversion issue could affect regulatory reporting. The decision affects budget, compliance, operational readiness, and vendor commitments. Which governance body is MOST likely to make or authorize this cross-functional decision?",
    "options": [
      "The daily development stand-up, because technical contributors understand the data-conversion issue most closely.",
      "The project steering committee or designated executive sponsor group with authority over major scope, funding, and timeline decisions.",
      "The user acceptance-testing team, because end users are responsible for approving whether a release date should change.",
      "The configuration-management repository, because it stores approved versions of technical and project documentation."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Governance",
      "Decision",
      "Rights"
    ],
    "reference": "Governance; Steering Committees"
  },
  {
    "id": "PM-044",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A new inventory application has been deployed successfully. Before closing the project, the team transfers system documentation, support procedures, monitoring responsibilities, known-issue logs, and vendor contacts to the operations group. What is the PRIMARY purpose of this activity?",
    "options": [
      "To restart requirements analysis using operational staff as the primary source of future feature requests.",
      "To complete operational handover so the support organization can maintain and manage the system after project closure.",
      "To perform regression testing on every software module before any maintenance activity is permitted.",
      "To replace the project charter with a new risk register focused exclusively on post-deployment incidents."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Closeout",
      "Operational",
      "Handover"
    ],
    "reference": "Project Closeout; Transition to Operations"
  },
  {
    "id": "PM-045",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team rates each identified risk according to the likelihood that it will occur and the severity of its potential effect on project objectives. What is this analysis MOST commonly used to determine?",
    "options": [
      "Which risks should receive the highest response priority based on their relative exposure.",
      "Which project tasks belong on the critical path and therefore have no schedule float.",
      "Which stakeholders should be removed from communications because they have limited authority.",
      "Which work packages should be outsourced to vendors rather than completed by internal staff."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Risk",
      "Probability",
      "and",
      "Impact"
    ],
    "reference": "Risk Management; Risk Assessment"
  },
  {
    "id": "PM-046",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A regional bank is considering a replacement fraud-monitoring platform. Executives want to understand the current problem, expected benefits, strategic alignment, estimated investment, major risks, and consequences of taking no action before authorizing a project. Which artifact would MOST directly support this decision?",
    "options": [
      "A business case presenting the rationale, expected value, costs, risks, and strategic justification for the proposed initiative.",
      "A work breakdown structure dividing development, testing, conversion, and training into detailed work packages.",
      "A sprint backlog listing prioritized fraud-monitoring features for the first two Agile iterations.",
      "A defect log documenting issues identified during integration testing of the replacement platform."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Initiation",
      "Business",
      "Case"
    ],
    "reference": "Project Initiation; Business Case Development"
  },
  {
    "id": "PM-047",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team completes a new reporting module for a healthcare system. Before marking the module as formally complete, the project manager asks designated business representatives to review the delivered functionality against previously approved acceptance criteria. What process is MOST directly being performed?",
    "options": [
      "Scope definition, because stakeholders are identifying what functionality should be included in the reporting module.",
      "Scope validation, because authorized stakeholders are formally accepting completed deliverables against agreed requirements.",
      "Scope creep management, because business users are requesting features that were omitted from the approved baseline.",
      "Quality assurance, because the project team is reviewing development processes used to produce the module."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Scope",
      "Validation",
      "Deliverable",
      "Acceptance"
    ],
    "reference": "Scope Management; Validation"
  },
  {
    "id": "PM-048",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager estimates that a data-migration activity could take 8 days under ideal conditions, 14 days under normal conditions, or 25 days if data-quality problems are significant. The manager wants an estimate that considers uncertainty rather than relying on one assumed duration. Which technique is MOST appropriate?",
    "options": [
      "Analogous estimating using the duration of a similar migration completed by another project team.",
      "Bottom-up estimating by adding the duration of every individual migration subtask and work package.",
      "Three-point estimating using optimistic, most likely, and pessimistic duration assumptions.",
      "Resource smoothing by moving migration activities within available float to resolve staff conflicts."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Schedule",
      "Estimation",
      "Three-Point",
      "Estimating"
    ],
    "reference": "Project Scheduling; Estimation Techniques"
  },
  {
    "id": "PM-049",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A company is implementing a cloud-based customer-service platform. Leadership is concerned about the financial impact of prolonged service outages. The vendor agreement includes service-level commitments, financial credits for missed uptime targets, and contractual responsibility for maintaining service availability. Which risk-response strategy is MOST directly represented?",
    "options": [
      "Risk avoidance, because the company is eliminating dependence on cloud-based services before implementation begins.",
      "Risk mitigation, because the company is reducing the chance that outages will occur through additional internal testing.",
      "Risk acceptance, because the company recognizes that outages may happen but does not establish a planned response.",
      "Risk transfer, because contractual terms shift part of the financial exposure to the service provider."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Risk",
      "Transfer",
      "Contractual",
      "Allocation"
    ],
    "reference": "Risk Management; Risk Response Strategies"
  },
  {
    "id": "PM-050",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager notices that user-training development is two weeks behind the baseline schedule. The delay has not yet affected the final deployment date because training has available float, but it may create future risk if additional changes occur. What should the project manager do MOST appropriately?",
    "options": [
      "Ignore the delay because activities with float cannot affect project performance or require management attention.",
      "Document and analyze the variance, assess possible downstream effects, and monitor whether corrective action is needed.",
      "Immediately declare the entire project behind schedule because any delayed activity automatically delays project completion.",
      "Remove user training from the project scope because late training materials can be developed after deployment."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Monitoring",
      "Variance",
      "Analysis"
    ],
    "reference": "Project Monitoring and Control; Performance Reporting"
  },
  {
    "id": "PM-051",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A development team is considering a user story for the next sprint. The story has a clear business objective but lacks acceptance criteria, has unresolved integration questions, and cannot be estimated reliably. Which action BEST aligns with a definition-of-ready approach?",
    "options": [
      "Refine the story until scope, acceptance conditions, dependencies, and estimates are sufficiently understood before committing it to the sprint.",
      "Add the story to the sprint because implementation details are expected to emerge naturally once coding begins.",
      "Remove the story permanently because any requirement with uncertainty should not be included in an Agile product backlog.",
      "Assign the story to the testing team because acceptance criteria are established only after developers complete functionality."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Agile",
      "Planning",
      "Definition",
      "of",
      "Ready"
    ],
    "reference": "Agile Project Management; Backlog Refinement"
  },
  {
    "id": "PM-052",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project sponsor wants weekly summaries of progress, risks, budget status, major decisions, and upcoming milestones. Technical leads, however, need detailed issue logs, dependency updates, and test-readiness information. What should the project manager do?",
    "options": [
      "Provide every stakeholder with the same technical status report to ensure that all project information is distributed consistently.",
      "Limit reporting to executive summaries because technical leads can obtain detailed information directly from developers.",
      "Publish only dashboard metrics because narrative updates create unnecessary variation in project communication.",
      "Tailor communication content, detail, format, and frequency to the information needs of each stakeholder group."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Communications",
      "Management",
      "Status",
      "Reporting"
    ],
    "reference": "Project Communications; Stakeholder Reporting"
  },
  {
    "id": "PM-053",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A product team estimates a feature as 13 story points instead of assigning a fixed number of development hours. The team explains that the estimate reflects relative complexity, uncertainty, technical effort, and the amount of work compared with other backlog items. What is the PRIMARY purpose of using story points?",
    "options": [
      "To determine the exact number of hours each developer will spend completing the feature.",
      "To calculate the project’s financial budget by converting every backlog item directly into labor costs.",
      "To estimate relative effort and complexity for planning without implying a precise time commitment.",
      "To identify which features must be completed before user acceptance testing can begin."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Agile",
      "Estimation",
      "Story",
      "Points"
    ],
    "reference": "Agile Project Management; Estimation"
  },
  {
    "id": "PM-054",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A university is selecting a vendor for a new learning-management system. The project team evaluates price, security controls, accessibility, implementation methodology, integration capability, support model, vendor stability, and references from similar institutions. What is the PRIMARY purpose of using these criteria?",
    "options": [
      "To ensure that the vendor with the lowest initial bid is selected regardless of operational or technical differences.",
      "To compare vendors systematically against requirements, risks, and organizational priorities before awarding a contract.",
      "To replace legal contract review because selection criteria determine all obligations after vendor selection.",
      "To establish the work breakdown structure that the selected vendor will use during software development."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Procurement",
      "Source",
      "Selection",
      "Criteria"
    ],
    "reference": "Procurement Management; Vendor Evaluation"
  },
  {
    "id": "PM-055",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team previously identified the possibility that an external interface might fail security testing. During testing, the interface actually fails and blocks release approval until remediation occurs. How should the project manager treat this situation?",
    "options": [
      "Continue listing it only as a risk because risks remain possible events even after they occur.",
      "Remove it from all project records because the failed interface is now a technical problem rather than a management concern.",
      "Close the risk immediately because any realized risk is automatically resolved once it has been identified.",
      "Record and manage it as an active issue while maintaining relevant risk history and response information."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Issue",
      "Log",
      "Risk",
      "vs.",
      "Issue"
    ],
    "reference": "Project Monitoring and Control; Issue Management"
  },
  {
    "id": "PM-056",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project receives formal approval to add a required data-conversion activity, extending the implementation schedule by three weeks. The sponsor, steering committee, and project manager approve the change through established governance. What should happen NEXT?",
    "options": [
      "Update the approved schedule baseline and related project plans to reflect the authorized change.",
      "Leave the original baseline unchanged so future reporting continues to compare progress against the initial schedule.",
      "Remove the data-conversion activity from the work breakdown structure because it was not included in original planning.",
      "Delay all project reporting until the new activity is complete and the schedule impact can be measured."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Schedule",
      "Baseline",
      "Change",
      "Control"
    ],
    "reference": "Project Scheduling; Baseline Management"
  },
  {
    "id": "PM-057",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Two senior developers disagree about whether to use an external authentication service or build one internally. The conflict is delaying a design decision, but both developers have relevant expertise and are willing to discuss trade-offs. Which conflict-management approach is MOST appropriate?",
    "options": [
      "Avoid the conflict until one developer voluntarily accepts the other’s preferred design.",
      "Compromise immediately by selecting a partial solution without evaluating technical, security, and maintenance implications.",
      "Facilitate collaborative problem solving focused on evidence, project objectives, risks, and long-term operational needs.",
      "Escalate the disagreement immediately to executive leadership without first attempting technical resolution within the project team."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Team",
      "Development",
      "Conflict",
      "Resolution"
    ],
    "reference": "Resource Management; Team Management"
  },
  {
    "id": "PM-058",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team maintains a matrix linking business requirements to design specifications, development tasks, test cases, and user-acceptance criteria. During a quality review, a required business rule is found to have no related test case. What is the MOST appropriate conclusion?",
    "options": [
      "The business rule should be removed because requirements without tests are unlikely to be important.",
      "The matrix has identified a traceability gap that should be corrected before release approval.",
      "The design team should restart requirements gathering because all testing artifacts must be created before analysis begins.",
      "The issue should be deferred to maintenance because testing gaps can be addressed after deployment."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Requirements",
      "Traceability",
      "Quality",
      "Assurance"
    ],
    "reference": "Quality Management; Traceability"
  },
  {
    "id": "PM-059",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Which statement BEST describes an activity on the critical path of a project schedule?",
    "options": [
      "It is an activity with the highest estimated cost among all planned project work packages.",
      "It is an activity assigned to the project sponsor because executive tasks require special schedule treatment.",
      "It is an activity that can be delayed without affecting the planned completion date because it has substantial float.",
      "It is an activity with little or no schedule flexibility whose delay would delay the overall project completion date."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Critical",
      "Path"
    ],
    "reference": "Project Scheduling; Critical Path Method"
  },
  {
    "id": "PM-060",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A company completes implementation of a new procurement platform. The project team has transferred support documentation and completed contract closure, but the sponsor also wants accountability for measuring expected savings and process improvements over the next year. What should the organization establish?",
    "options": [
      "A benefits-realization plan assigning ownership, measures, review timing, and follow-up actions for expected outcomes after project closure.",
      "A new project charter because benefits cannot be measured unless the original implementation project is formally restarted.",
      "A defect log containing only technical issues found during development and user acceptance testing.",
      "A work breakdown structure that decomposes the completed project into smaller retrospective work packages."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Closeout",
      "Benefits",
      "Transition"
    ],
    "reference": "Project Closeout; Benefits Realization"
  },
  {
    "id": "PM-061",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A university plans to implement a new student-advising platform before the next academic year. The initial schedule assumes that every department will provide clean student-program data by March 1. Two departments have not yet confirmed whether they can meet that date. What should the project manager do MOST appropriately?",
    "options": [
      "Treat the March 1 date as a fixed project constraint because assumptions should not be revised after planning begins.",
      "Document and validate the assumption, assess the schedule impact if it fails, and develop a response with affected departments.",
      "Remove data migration from the implementation scope because uncertain source-data readiness creates unnecessary project risk.",
      "Delay all other project activities until every department formally guarantees that its data will be available on time."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Assumptions",
      "Constraint",
      "Management"
    ],
    "reference": "Project Planning; Assumptions and Constraints"
  },
  {
    "id": "PM-062",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A hospital project team has approved a high-level deliverable called “Implement Electronic Medication Reconciliation.” The project manager needs to ensure that interface design, clinical workflow analysis, data conversion, training, testing, and go-live support are all accounted for during planning. What should the team do NEXT?",
    "options": [
      "Create a risk register that assigns each department responsibility for future medication-reconciliation issues.",
      "Develop a stakeholder communication plan that specifies how clinicians will receive weekly project updates.",
      "Establish a sprint backlog containing only user-interface requirements requested by nursing staff.",
      "Decompose the deliverable into progressively smaller work packages through a work breakdown structure."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Scope",
      "Management",
      "Requirements",
      "Decomposition"
    ],
    "reference": "Scope Planning; Work Breakdown Structure"
  },
  {
    "id": "PM-063",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team identifies two risks for a replacement billing system. One has a high probability but minor operational effect; the other has a low probability but could prevent regulatory reporting. The team wants to determine which risks deserve the most attention and response planning. Which approach is MOST appropriate?",
    "options": [
      "Assess each risk using probability and impact criteria, then prioritize according to overall exposure and organizational tolerance.",
      "Address only the high-probability risk because unlikely events should not affect active project planning.",
      "Address only the high-impact risk because consequences matter more than likelihood in all project environments.",
      "Treat both risks identically because a formal risk register should not distinguish between different types of uncertainty."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Risk",
      "Analysis",
      "Probability-Impact",
      "Matrix"
    ],
    "reference": "Risk Management; Risk Assessment"
  },
  {
    "id": "PM-064",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A product owner is communicating plans for a customer-portal modernization effort. Executives need to understand strategic themes, anticipated outcomes, and the likely sequence of major releases over the next year, but they do not need detailed task assignments for the next sprint. Which artifact is MOST appropriate?",
    "options": [
      "A sprint backlog listing granular user stories and technical tasks planned for the current iteration.",
      "A burndown chart showing the amount of work remaining during the current sprint.",
      "A product roadmap showing planned themes, releases, and expected direction over a longer planning horizon.",
      "A risk register documenting possible threats, response owners, likelihood, and impact for the modernization project."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Agile",
      "Project",
      "Management",
      "Product",
      "Roadmaps"
    ],
    "reference": "Agile Planning; Product Roadmaps"
  },
  {
    "id": "PM-065",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project schedule shows that data migration must finish before integrated testing can begin, but user-training development can begin while migration is still in progress. Which statement BEST describes the relationship between data migration and integrated testing?",
    "options": [
      "It is a start-to-start relationship because integrated testing can begin once migration begins.",
      "It is a finish-to-start dependency because integrated testing cannot begin until migration is complete.",
      "It is a finish-to-finish dependency because both activities must end on the same date to support deployment.",
      "It is a discretionary dependency because the sequence is based only on the project manager’s preference."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Scheduling",
      "Dependencies"
    ],
    "reference": "Project Scheduling; Network Diagrams"
  },
  {
    "id": "PM-066",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A software team adds peer reviews, secure-coding checklists, automated unit tests, and coding standards before features are integrated. The project manager explains that catching problems early is less expensive than correcting defects after user acceptance testing or production release. Which activity is MOST directly represented?",
    "options": [
      "Quality assurance focused on improving development processes and preventing defects before they reach completed deliverables.",
      "Scope validation focused on obtaining formal stakeholder approval for finished functionality against acceptance criteria.",
      "Quality control focused exclusively on inspecting production defects after the system has entered operational use.",
      "Post-implementation evaluation focused on comparing realized business benefits with the original project justification."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Quality",
      "Defect",
      "Prevention"
    ],
    "reference": "Quality Management; Quality Assurance"
  },
  {
    "id": "PM-067",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A public agency needs a vendor to deliver a well-defined software module with stable requirements and clear acceptance criteria. The agency wants predictable cost and prefers to place more cost-overrun risk on the vendor. Which contract approach is MOST appropriate?",
    "options": [
      "A time-and-materials contract, because the agency should pay only for the hours and materials actually used.",
      "A cost-reimbursable contract, because the vendor should be repaid for all allowable expenses plus an agreed fee.",
      "An open-ended support agreement, because detailed requirements should be deferred until after the vendor begins development.",
      "A fixed-price contract, because scope and deliverables are sufficiently defined to support a predetermined price."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Procurement",
      "Management",
      "Contract",
      "Types"
    ],
    "reference": "Procurement Management; Contracting"
  },
  {
    "id": "PM-068",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager identifies a department director who has high influence over system adoption but limited day-to-day interest in technical details. The director primarily wants confidence that operational disruption will be controlled and that major decisions will be escalated promptly. How should the project manager generally engage this stakeholder?",
    "options": [
      "Manage closely through daily technical design reviews and detailed defect discussions.",
      "Monitor with minimal communication because low daily interest means the stakeholder cannot affect project success.",
      "Keep satisfied through concise, targeted updates and timely involvement in high-impact decisions.",
      "Exclude the stakeholder from communications until implementation because operational leaders do not need visibility before go-live."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Stakeholder",
      "Management",
      "Engagement",
      "Strategy"
    ],
    "reference": "Stakeholder Management; Engagement Planning"
  },
  {
    "id": "PM-069",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project has earned value of $500,000 and actual cost of $575,000 at the end of a reporting period. The planned value is $520,000. What is the MOST appropriate interpretation of cost performance?",
    "options": [
      "The project is under budget because planned value exceeds earned value.",
      "The project is over budget for the work completed because actual cost exceeds earned value.",
      "The project is ahead of schedule because earned value is greater than actual cost.",
      "The project is on budget because actual cost is relatively close to planned value."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Earned",
      "Value",
      "Cost",
      "Variance"
    ],
    "reference": "Project Monitoring and Control; Earned Value Management"
  },
  {
    "id": "PM-070",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Which component is typically included in a project scope baseline?",
    "options": [
      "The approved scope statement, work breakdown structure, and WBS dictionary.",
      "The stakeholder register, communication matrix, and project contact directory.",
      "The risk register, issue log, and lessons-learned repository.",
      "The Gantt chart, resource histogram, and earned-value performance report."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Project",
      "Scope",
      "Baseline"
    ],
    "reference": "Scope Management; Baselines"
  },
  {
    "id": "PM-071",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A team completes a user story for a new claims-search feature. The feature works in a demonstration, but automated tests have not passed, security review is incomplete, and documentation has not been updated. The team’s definition of done includes all three requirements. How should the story be classified?",
    "options": [
      "Complete, because visible functionality is sufficient once the product owner can see the feature working.",
      "Ready for release, because documentation and security review can be completed by operations after deployment.",
      "Not done, because the agreed quality and completion criteria have not yet been satisfied.",
      "Deferred, because any story requiring security review should automatically move to the next release."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Agile",
      "Delivery",
      "Definition",
      "of",
      "Done"
    ],
    "reference": "Agile Project Management; Quality Criteria"
  },
  {
    "id": "PM-072",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "During user acceptance testing, several departments report that the same approval workflow produces inconsistent results. The issue is active, affects a planned launch date, and may require changes to both business rules and system configuration. What should the project manager do FIRST?",
    "options": [
      "Close the issue because user acceptance testing is intended to identify problems after implementation decisions are complete.",
      "Move the issue directly into the risk register because unresolved defects are always treated as future uncertainties.",
      "Ask each department to use a temporary workaround until post-implementation maintenance begins.",
      "Document the issue, assess impact and root cause, assign ownership, and track resolution through the issue-management process."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Issue",
      "Management",
      "Root",
      "Cause",
      "Analysis"
    ],
    "reference": "Project Monitoring and Control; Issue Management"
  },
  {
    "id": "PM-073",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project requires a cybersecurity architect for threat modeling, secure-design review, and pre-release testing. The architect is available only part-time and is also assigned to another high-priority initiative. What should the project manager do MOST appropriately during planning?",
    "options": [
      "Assume the architect will become available when needed because security work typically occurs late in the development cycle.",
      "Identify the constrained specialist resource, sequence work accordingly, and develop alternatives or escalation plans for availability gaps.",
      "Assign threat-modeling responsibilities to business analysts because security analysis can be completed without specialized expertise.",
      "Remove security review from the project plan because using external specialists increases schedule uncertainty."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Resource",
      "Management",
      "Skills",
      "Planning"
    ],
    "reference": "Resource Management; Team Planning"
  },
  {
    "id": "PM-074",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager schedules a closeout session after deployment of a new inventory system. Team members review which estimates were accurate, which vendors performed well, why defects escaped earlier testing, and how communication affected adoption. What is the PRIMARY purpose of this session?",
    "options": [
      "Capture lessons learned that can improve planning, execution, and governance of future projects.",
      "Reopen the scope baseline so stakeholders can add every feature that was deferred during implementation.",
      "Repeat unit testing to verify that all source-code modules still match their original design specifications.",
      "Replace the operations support plan with a new project charter for the completed system."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Closeout",
      "Lessons",
      "Learned"
    ],
    "reference": "Project Closeout; Continuous Improvement"
  },
  {
    "id": "PM-075",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Which term describes the amount and type of risk an organization is willing to accept in pursuit of its objectives?",
    "options": [
      "Risk exposure",
      "Risk threshold",
      "Risk appetite",
      "Risk mitigation"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Risk",
      "Appetite"
    ],
    "reference": "Risk Management; Governance"
  },
  {
    "id": "PM-076",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A manufacturer approves a new warehouse-management system with a fixed launch date before peak season. Midway through development, leaders request additional mobile features but do not authorize more funding or time. What should the project manager communicate MOST clearly?",
    "options": [
      "The new features can be added without impact because mobile functionality is separate from the approved warehouse scope.",
      "Changes to scope will require trade-offs in schedule, cost, quality, resources, or other project constraints.",
      "The project should automatically reject all new requests because approved scope can never change after development begins.",
      "The launch date should be moved immediately because every requested feature must be included before implementation."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Constraints",
      "Triple",
      "Constraint"
    ],
    "reference": "Project Planning; Scope, Schedule, and Cost"
  },
  {
    "id": "PM-077",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A product owner has collected more requested features than can fit into the first release of a mobile banking application. The team needs a structured method to distinguish mandatory capabilities from important but deferrable enhancements. Which approach BEST supports this need?",
    "options": [
      "Use MoSCoW prioritization to classify requirements as Must have, Should have, Could have, or Will not have for the current release.",
      "Assign every requested feature the same priority so stakeholders feel their needs have been treated equally.",
      "Begin development with the easiest features because technical simplicity is the primary determinant of business value.",
      "Defer all feature prioritization until user acceptance testing identifies which functions users prefer."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Requirements",
      "Prioritization",
      "MoSCoW",
      "Method"
    ],
    "reference": "Scope Management; Requirements Prioritization"
  },
  {
    "id": "PM-078",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A testing activity can start as late as Thursday without delaying any successor activities or the final project completion date. The activity is currently scheduled to start on Monday. What does this MOST directly indicate?",
    "options": [
      "The activity is on the critical path because it has no flexibility in its planned timing.",
      "The activity has available float and may be delayed within that allowance without delaying project completion.",
      "The activity is a milestone because it has no duration and represents a major project checkpoint.",
      "The activity has a finish-to-start relationship with every other task in the project schedule."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Scheduling",
      "Float"
    ],
    "reference": "Project Scheduling; Critical Path Method"
  },
  {
    "id": "PM-079",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A proposed integration feature would improve reporting but requires an additional vendor contract, new security testing, and a four-week schedule extension. The project manager has completed impact analysis and prepared options. Who should generally review and authorize the change?",
    "options": [
      "The project team members who would perform the technical work, because they are responsible for implementation.",
      "The help-desk team, because it will support the application after deployment.",
      "The change control board or designated governance authority responsible for evaluating significant approved changes.",
      "The end users who submitted the feature request, because all requested functionality should be approved by its originators."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Change",
      "Control",
      "Board",
      "Governance"
    ],
    "reference": "Integrated Change Control; Project Governance"
  },
  {
    "id": "PM-080",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team identifies the risk that a third-party data feed may not be delivered on time. The risk response plan states that if the vendor misses two scheduled test-file deliveries, the team will activate a backup data-source process. What are the missed deliveries MOST accurately called?",
    "options": [
      "Risk triggers, because they are predefined warning conditions that signal a response may be needed.",
      "Risk mitigations, because they eliminate the underlying cause of vendor delivery delays.",
      "Residual risks, because they remain after the project team has completed all response actions.",
      "Assumptions, because they are conditions accepted as true during early project planning."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Risk",
      "Trigger",
      "Conditions"
    ],
    "reference": "Risk Management; Monitoring and Control"
  },
  {
    "id": "PM-081",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A development team completes a set of user stories during a sprint. Each story has passed testing, satisfies the team’s definition of done, and can be demonstrated to stakeholders as usable functionality. What is the BEST description of the result?",
    "options": [
      "A project charter, because it authorizes the next sprint and clarifies the team’s strategic purpose.",
      "A potentially releasable product increment, because completed work meets agreed quality standards and adds usable value.",
      "A risk register, because the team has identified remaining uncertainties before releasing the functionality.",
      "A work breakdown structure, because the sprint has decomposed project scope into smaller tasks."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Agile",
      "Delivery",
      "Product",
      "Increment"
    ],
    "reference": "Agile Project Management; Incremental Delivery"
  },
  {
    "id": "PM-082",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager estimates implementation effort by first estimating hours for data mapping, interface configuration, unit testing, training development, conversion support, and deployment activities. The manager then sums the individual estimates to produce an overall project estimate. Which technique is MOST directly being used?",
    "options": [
      "Analogous estimating based on the actual duration of a similar completed project.",
      "Parametric estimating based on a formula such as cost per configured interface.",
      "Bottom-up estimating based on detailed estimates for individual components of work.",
      "Three-point estimating based on optimistic, most likely, and pessimistic duration scenarios."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Project",
      "Estimation",
      "Bottom-Up",
      "Estimating"
    ],
    "reference": "Project Planning; Estimation Techniques"
  },
  {
    "id": "PM-083",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A cross-functional implementation team spends significant time in weekly meetings, yet members leave unclear about decisions, owners, and next steps. Which practice would MOST directly improve meeting effectiveness?",
    "options": [
      "Increase meeting duration so participants have more opportunity to discuss unrelated project concerns.",
      "Replace all meetings with email because collaborative discussion is not useful for complex implementation decisions.",
      "Limit attendance to executives because technical contributors do not need to understand project decisions.",
      "Use a clear agenda, document decisions and action items, assign owners and due dates, and distribute follow-up notes."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Communications",
      "Management",
      "Meeting",
      "Effectiveness"
    ],
    "reference": "Project Communications; Team Coordination"
  },
  {
    "id": "PM-084",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A municipality is implementing a permit-processing system. Before launch, permit clerks execute realistic scenarios to confirm that the system correctly routes applications, calculates fees, generates notices, and handles exception cases. What type of testing is MOST directly being performed?",
    "options": [
      "User acceptance testing, because intended users validate whether the system meets operational and business needs.",
      "Unit testing, because individual software functions are being tested by developers in isolation.",
      "Load testing, because the primary goal is to measure maximum transaction volume under peak demand.",
      "Regression testing, because the team is confirming that previously released functionality remains unchanged after maintenance updates."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Quality",
      "Acceptance",
      "Testing"
    ],
    "reference": "Quality Management; Validation"
  },
  {
    "id": "PM-085",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A company plans to outsource development of a reporting interface. Before requesting vendor proposals, the procurement team needs to describe required deliverables, technical expectations, performance standards, milestones, assumptions, and acceptance conditions. Which document is MOST appropriate?",
    "options": [
      "A stakeholder register listing project participants, their influence, and communication needs.",
      "A statement of work defining the services, deliverables, standards, and expected responsibilities for the vendor engagement.",
      "A product backlog containing informal user stories that can be reprioritized during each sprint.",
      "A lessons-learned repository documenting insights from previously completed vendor projects."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Procurement",
      "Management",
      "Statement",
      "of",
      "Work"
    ],
    "reference": "Procurement Management; Contract Planning"
  },
  {
    "id": "PM-086",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team adds encryption, access controls, and monitoring to reduce the chance of unauthorized access to customer records. Despite these controls, a small possibility of a security incident remains. What is this remaining exposure MOST accurately called?",
    "options": [
      "A trigger risk, because the project has defined conditions that require the security response plan to begin.",
      "A transferred risk, because all security responsibility has been shifted to an external vendor.",
      "A residual risk, because some exposure remains after planned response actions have been implemented.",
      "An issue, because the security event has already occurred and requires immediate corrective action."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Risk",
      "Management",
      "Residual",
      "Risk"
    ],
    "reference": "Risk Management; Response Planning"
  },
  {
    "id": "PM-087",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A Scrum team is developing a customer self-service application. One individual is responsible for maximizing product value, ordering backlog items, clarifying feature priorities with stakeholders, and accepting completed work based on agreed criteria. Which role is MOST directly described?",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Project Sponsor",
      "Technical Architect"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Agile",
      "Roles",
      "Product",
      "Owner"
    ],
    "reference": "Agile Project Management; Scrum Roles"
  },
  {
    "id": "PM-088",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project has earned value of $180,000 and actual cost of $225,000. The project manager calculates a cost performance index of 0.80. What does this result MOST directly indicate?",
    "options": [
      "The project is spending more than planned for the value of work completed.",
      "The project is completing work faster than planned and is ahead of schedule.",
      "The project has no cost variance because actual cost and earned value are both positive values.",
      "The project is under budget because the cost performance index is below 1.0."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Performance",
      "Cost",
      "Performance",
      "Index"
    ],
    "reference": "Earned Value Management; Cost Performance"
  },
  {
    "id": "PM-089",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Six months after a new scheduling system goes live, leadership reviews appointment no-show rates, staff workload, customer wait times, user satisfaction, and realized cost savings against the original business case. What activity is MOST directly being performed?",
    "options": [
      "Scope validation, because stakeholders are approving finished project deliverables before deployment.",
      "Project initiation, because leadership is determining whether the organization should authorize the scheduling system.",
      "Post-implementation review, because the organization is evaluating realized outcomes and benefits after deployment.",
      "Requirements elicitation, because stakeholders are identifying needed features before technical design begins."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Project",
      "Closeout",
      "Post-Implementation",
      "Review"
    ],
    "reference": "Project Closeout; Benefits Evaluation"
  },
  {
    "id": "PM-090",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Which statement BEST describes a project milestone?",
    "options": [
      "It is the lowest-level component of a work breakdown structure assigned to a specific resource.",
      "It is a task with fixed duration that represents the most resource-intensive project activity.",
      "It is a budget category used to track planned and actual expenditures across project phases.",
      "It is a significant event or decision point in the schedule that typically has zero duration."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Recall",
      "Project",
      "Milestones"
    ],
    "reference": "Project Scheduling; Milestones"
  },
  {
    "id": "PM-091",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A manufacturer is implementing a new supply-chain planning platform. Before moving from design into development, executives require confirmation that requirements are approved, major risks are understood, funding remains justified, and the proposed architecture is acceptable. What project-governance practice is MOST directly represented?",
    "options": [
      "A stage-gate review used to determine whether the project is ready to proceed to the next lifecycle phase.",
      "A sprint retrospective used to identify process improvements after a completed Agile iteration.",
      "A resource-leveling exercise used to resolve staff overallocations within the project schedule.",
      "A project closeout review used to transfer completed deliverables to operational support teams."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Governance",
      "Stage-Gate",
      "Reviews"
    ],
    "reference": "Project Governance; Lifecycle Controls"
  },
  {
    "id": "PM-092",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A hospital is implementing a new patient-portal platform. During testing, staff discover that a regulatory requirement for multilingual consent notices was never included in design specifications or test cases. Which project artifact would have MOST directly helped identify this gap earlier?",
    "options": [
      "A stakeholder register identifying groups affected by the patient-portal implementation.",
      "A requirements traceability matrix linking requirements to design elements, build tasks, test cases, and acceptance criteria.",
      "A risk heat map categorizing known project risks by likelihood and potential impact.",
      "A Gantt chart showing the planned timing of configuration, testing, training, and go-live activities."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Scope",
      "Management",
      "Requirements",
      "Traceability"
    ],
    "reference": "Scope Management; Traceability Matrix"
  },
  {
    "id": "PM-093",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project schedule contains several activities that are technically independent but require the same cybersecurity specialist. The project manager wants to account for resource constraints, reduce multitasking, and protect the schedule with buffers. Which scheduling approach is MOST closely aligned with these goals?",
    "options": [
      "Critical path scheduling, because it focuses only on the longest sequence of dependent activities.",
      "Fast tracking, because it overlaps activities originally planned to occur sequentially.",
      "Critical chain scheduling, because it incorporates resource constraints and buffer management.",
      "Scope validation, because it confirms that completed deliverables meet stakeholder acceptance criteria."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Schedule",
      "Management",
      "Critical",
      "Chain"
    ],
    "reference": "Project Scheduling; Resource-Constrained Planning"
  },
  {
    "id": "PM-094",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A university plans to migrate student records during a weekend conversion window. The team develops a tested rollback procedure, identifies decision criteria for abandoning the conversion, and assigns leaders who can authorize a return to the legacy system. What has the team MOST directly created?",
    "options": [
      "A quality-control process for inspecting defects after the new system enters production.",
      "A stakeholder-engagement plan for communicating system benefits to faculty and students.",
      "A product roadmap for sequencing future enhancements after the initial release.",
      "A contingency plan for responding if the primary conversion approach fails."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Risk",
      "Management",
      "Contingency",
      "Plans"
    ],
    "reference": "Risk Response Planning; Contingency Actions"
  },
  {
    "id": "PM-095",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "At the end of a two-week sprint, a development team demonstrates newly completed claims-processing features to business users. Stakeholders provide feedback about usability and business priority, and the product backlog may be adjusted based on the discussion. Which Scrum event is MOST directly represented?",
    "options": [
      "Sprint review",
      "Daily Scrum",
      "Sprint retrospective",
      "Backlog refinement"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Agile",
      "Delivery",
      "Sprint",
      "Review"
    ],
    "reference": "Agile Project Management; Scrum Events"
  },
  {
    "id": "PM-096",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project manager estimates data-cleansing effort using historical evidence that each source-system field typically requires 2.5 hours of analysis and remediation. The new project contains 180 fields requiring review. Which estimating technique is MOST directly being used?",
    "options": [
      "Analogous estimating based on comparing the project with a previous implementation.",
      "Parametric estimating based on applying a measurable rate to the number of required fields.",
      "Bottom-up estimating based on separately estimating every work package and aggregating totals.",
      "Three-point estimating based on optimistic, most likely, and pessimistic estimates."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Cost",
      "Estimation",
      "Parametric",
      "Estimating"
    ],
    "reference": "Project Cost Management; Estimation Techniques"
  },
  {
    "id": "PM-097",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A company is introducing a new procurement application. Department leaders support the technology, but many buyers are worried that automated approval rules will reduce their discretion and change established relationships with vendors. Which action would MOST effectively improve readiness for change?",
    "options": [
      "Limit information sharing until go-live so concerns do not slow configuration decisions.",
      "Require mandatory use immediately without training so staff quickly abandon old processes.",
      "Engage affected buyers early, explain the reasons for change, involve representatives in workflow design, and provide targeted training.",
      "Delay procurement-system deployment until all employees express complete agreement with every new approval rule."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Stakeholder",
      "Management",
      "Change",
      "Readiness"
    ],
    "reference": "Stakeholder Engagement; Organizational Change"
  },
  {
    "id": "PM-098",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A program sponsor sets aside funding for unforeseen work that cannot be linked to any specific identified risk but may arise because of general project uncertainty. This amount is held outside the approved cost baseline and is controlled by senior management. What is this funding MOST accurately called?",
    "options": [
      "Contingency reserve",
      "Management reserve",
      "Sunk cost",
      "Earned value"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Project",
      "Controls",
      "Management",
      "Reserve"
    ],
    "reference": "Project Cost Management; Reserves"
  },
  {
    "id": "PM-099",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A software-support organization tracks the number of production defects reported each week. The quality manager wants to distinguish normal variation from unusual patterns that may indicate a process problem requiring investigation. Which tool is MOST appropriate?",
    "options": [
      "A control chart displaying performance over time against statistically derived limits.",
      "A work breakdown structure listing deliverables, activities, and work packages.",
      "A RACI matrix assigning responsibility for defect resolution across support teams.",
      "A stakeholder register documenting the interests and influence of customers and executives."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Quality",
      "Management",
      "Control",
      "Charts"
    ],
    "reference": "Quality Control; Statistical Process Control"
  },
  {
    "id": "PM-100",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A software vendor is under contract to deliver a secure interface by a specified date. The project manager reviews milestone completion, service-level compliance, defect trends, invoice accuracy, and corrective-action commitments throughout the engagement. What is the PRIMARY purpose of these activities?",
    "options": [
      "To prepare the organization for project closeout before any vendor deliverables are completed.",
      "To monitor and manage vendor performance against contractual obligations and agreed expectations.",
      "To replace the project schedule with an Agile backlog that the vendor can reprioritize independently.",
      "To eliminate the need for acceptance testing because contract monitoring confirms technical correctness."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Procurement",
      "Management",
      "Vendor",
      "Performance"
    ],
    "reference": "Contract Administration; Performance Monitoring"
  },
  {
    "id": "PM-101",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team completes a testing activity three days later than planned. The final delivery date is not yet affected because the activity had five days of total float. Which statement is MOST accurate?",
    "options": [
      "The project has no schedule variance because the overall completion date remains unchanged.",
      "The project is automatically late because any missed task date means the entire schedule has failed.",
      "The activity has consumed part of its available float, creating a schedule variance that should still be monitored.",
      "The project must immediately crash all remaining tasks to restore the original planned start date for testing."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Schedule",
      "Management",
      "Baseline",
      "Variance"
    ],
    "reference": "Project Monitoring and Control; Schedule Performance"
  },
  {
    "id": "PM-102",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A development team is frequently interrupted by unplanned requests from managers outside the team. One person works to remove impediments, coach the team in Scrum practices, facilitate events, and protect the team from unnecessary disruption. Which role is MOST directly described?",
    "options": [
      "Product Owner",
      "Project Sponsor",
      "Functional Manager",
      "Scrum Master"
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Agile",
      "Roles",
      "Scrum",
      "Master"
    ],
    "reference": "Agile Project Management; Scrum Roles"
  },
  {
    "id": "PM-103",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A city deploys a new permitting system. Before ending the project, the implementation team provides operations staff with architecture diagrams, runbooks, access procedures, support escalation paths, and training on routine maintenance tasks. What is the PRIMARY objective of this work?",
    "options": [
      "To transition operational ownership and support capability from the project team to the ongoing service organization.",
      "To reopen the project scope so operations staff can add deferred features before responsibility transfers.",
      "To complete user acceptance testing after the system has entered routine production operation.",
      "To create a project charter authorizing operations staff to begin supporting the completed system."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Project",
      "Closeout",
      "Knowledge",
      "Transfer"
    ],
    "reference": "Project Closeout; Operational Transition"
  },
  {
    "id": "PM-104",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "A project team estimates a 20% chance that a data-conversion failure would require $150,000 in remediation. Ignoring other risks, what is the expected monetary value of this risk?",
    "options": [
      "$20,000",
      "$30,000",
      "$120,000",
      "$150,000"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Risk",
      "Analysis",
      "Expected",
      "Monetary",
      "Value"
    ],
    "reference": "Risk Management; Quantitative Analysis"
  },
  {
    "id": "PM-105",
    "category": "IT Project Management",
    "difficulty": "medium",
    "question": "Which term refers to a limiting factor that restricts available options for managing a project, such as a fixed deadline, capped budget, required technology standard, or mandated compliance requirement?",
    "options": [
      "Deliverable",
      "Milestone",
      "Constraint",
      "Assumption"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Project",
      "Constraints"
    ],
    "reference": "Project Management Fundamentals; Constraints"
  },
  {
    "id": "INF-001",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A regional healthcare system is redesigning connectivity among its main hospital, outpatient clinics, and data center. Leadership wants each remote site to have a direct connection to a central network hub while minimizing the number of links required between individual clinics. Which network topology BEST matches this design?",
    "options": [
      "Bus topology, because all facilities share one communication cable without a central device.",
      "Ring topology, because each clinic connects only to the next clinic in a closed communication loop.",
      "Star topology, because each remote site connects through a central hub or switch.",
      "Mesh topology, because every clinic must maintain a direct connection to every other clinic."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Network",
      "Topologies",
      "Redundancy"
    ],
    "reference": "Networking Fundamentals; Network Design"
  },
  {
    "id": "INF-002",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company assigns internal devices addresses beginning with 10.x.x.x and uses a firewall to translate outbound traffic to a public address when employees access the internet. What is the PRIMARY purpose of using these internal addresses?",
    "options": [
      "They are private IP addresses intended for use within internal networks and are not directly routable across the public internet.",
      "They are public IP addresses reserved for organizations that need unrestricted inbound connectivity from any external device.",
      "They are multicast addresses used to deliver the same message simultaneously to all devices on a local network.",
      "They are loopback addresses used only by a device to communicate with itself for testing purposes."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "IP",
      "Addressing",
      "Private",
      "Networks"
    ],
    "reference": "Networking Fundamentals; IP Addressing"
  },
  {
    "id": "INF-003",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An employee enters portal.company.org into a browser. Before the browser can establish a connection to the web server, it must determine the numerical network address associated with that name. Which infrastructure service MOST directly performs this function?",
    "options": [
      "DHCP, which dynamically assigns network settings such as IP address, subnet mask, and gateway.",
      "DNS, which resolves human-readable domain names into IP addresses.",
      "FTP, which transfers files between systems using a client-server protocol.",
      "SMTP, which routes outgoing email messages between mail servers."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "DNS",
      "Name",
      "Resolution"
    ],
    "reference": "Network Services; Domain Name System"
  },
  {
    "id": "INF-004",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company operates several underused physical servers, each hosting one low-demand business application. The infrastructure team wants to reduce hardware costs, simplify provisioning, and allow multiple isolated operating systems to share the same physical machine. Which technology MOST directly supports this goal?",
    "options": [
      "Network segmentation, which separates devices into logical network zones to reduce broadcast traffic and improve security.",
      "Server virtualization, which uses a hypervisor to host multiple virtual machines on shared physical hardware.",
      "Load balancing, which distributes incoming network traffic across multiple application servers.",
      "Database replication, which copies data between systems to support availability and disaster recovery."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Virtualization",
      "Resource",
      "Utilization"
    ],
    "reference": "Server Infrastructure; Virtual Machines"
  },
  {
    "id": "INF-005",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company wants to prevent unauthorized inbound connections to its internal network while permitting approved web traffic, remote-access connections, and business-partner integrations. Which infrastructure component MOST directly enforces rules governing allowed and blocked network traffic?",
    "options": [
      "A firewall that evaluates traffic against defined security policies and filtering rules.",
      "A switch that forwards traffic between devices within the same local area network.",
      "A domain controller that authenticates users and manages directory-based permissions.",
      "A router that determines the next network path for packets traveling between separate networks."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Firewalls",
      "Network",
      "Security"
    ],
    "reference": "Network Security; Perimeter Controls"
  },
  {
    "id": "INF-006",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A database server uses multiple physical disks configured so that data can continue to be accessed after one disk fails. The organization understands that the arrangement improves availability but does not replace a backup strategy. What capability is MOST directly being provided?",
    "options": [
      "RAID, which uses multiple disks to provide redundancy and/or performance depending on the configuration.",
      "Network address translation, which maps internal network addresses to a smaller number of public addresses.",
      "Load balancing, which distributes requests among several servers to prevent one server from becoming overloaded.",
      "Virtual private networking, which encrypts traffic between remote users and the organizational network."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Storage",
      "RAID"
    ],
    "reference": "Storage Infrastructure; Fault Tolerance"
  },
  {
    "id": "INF-007",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company adds hundreds of laptops to its wireless network. Rather than manually configuring an IP address, subnet mask, default gateway, and DNS server on every device, the infrastructure team wants these settings assigned automatically when users connect. Which service should be used?",
    "options": [
      "DNS",
      "DHCP",
      "LDAP",
      "SNMP"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "DHCP",
      "Network",
      "Configuration"
    ],
    "reference": "Network Services; Dynamic Host Configuration Protocol"
  },
  {
    "id": "INF-008",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An online retailer expects heavy traffic during a holiday promotion. To prevent one web server from becoming overloaded, incoming customer requests are distributed across several application servers that provide the same service. Which infrastructure capability is MOST directly being used?",
    "options": [
      "Load balancing, which distributes requests across multiple available servers.",
      "Disk mirroring, which maintains identical copies of data across storage devices.",
      "VLAN segmentation, which separates devices into logical broadcast domains.",
      "Virtualization, which allows multiple operating systems to run on a single physical host."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Load",
      "Balancing",
      "Availability"
    ],
    "reference": "Server Infrastructure; High Availability"
  },
  {
    "id": "INF-009",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A university wants student devices, faculty devices, guest Wi-Fi users, and administrative systems to use the same physical switching infrastructure while remaining logically separated from one another. Which approach BEST supports this requirement?",
    "options": [
      "Use VLANs to create separate logical network segments on shared switching hardware.",
      "Assign all users static IP addresses so each category can be identified by its address range.",
      "Create one large broadcast domain so devices can communicate without routing delays.",
      "Install separate DNS servers for each user category and allow unrestricted network traffic among them."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Segmentation",
      "VLANs"
    ],
    "reference": "Networking Fundamentals; Virtual LANs"
  },
  {
    "id": "INF-010",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A hospital’s network core and server rack must remain powered long enough to shut down gracefully or switch to generator power during a short electrical outage. Which infrastructure component MOST directly supports this objective?",
    "options": [
      "A UPS, which supplies temporary battery power during a utility interruption.",
      "A load balancer, which distributes client requests across multiple servers.",
      "A proxy server, which intermediates web requests between users and internet services.",
      "A network switch, which forwards frames between connected devices on a local network."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Backup",
      "Power",
      "Uninterruptible",
      "Power",
      "Supply"
    ],
    "reference": "Data Center Infrastructure; Power Protection"
  },
  {
    "id": "INF-011",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A professional-services firm is deploying a new employee wireless network. Security leaders want strong authentication and encryption protections that are more modern than legacy WEP or WPA implementations. Which wireless security standard is MOST appropriate?",
    "options": [
      "WPA3",
      "HTTP",
      "FTP",
      "Telnet"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Wireless",
      "Security",
      "WPA3"
    ],
    "reference": "Wireless Networking; Security Controls"
  },
  {
    "id": "INF-012",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A startup rents virtual machines, storage, and networking resources from a cloud provider. Its own IT team remains responsible for selecting operating systems, configuring applications, applying patches to guest systems, and managing its data. Which cloud service model is MOST directly represented?",
    "options": [
      "Software as a Service",
      "Platform as a Service",
      "Infrastructure as a Service",
      "Function as a Service"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Cloud",
      "Computing",
      "IaaS"
    ],
    "reference": "Cloud Services; Service Models"
  },
  {
    "id": "INF-013",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Which network device primarily forwards packets between different networks and selects a path toward the destination network?",
    "options": [
      "Router",
      "Switch",
      "Wireless access point",
      "Network interface card"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Routers"
    ],
    "reference": "Networking Fundamentals; Network Devices"
  },
  {
    "id": "INF-014",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An infrastructure team wants centralized visibility into switch status, interface errors, bandwidth use, device temperatures, and hardware alerts across hundreds of network devices. Which protocol is commonly used to collect and manage this type of network-management information?",
    "options": [
      "SMTP",
      "SNMP",
      "SSH",
      "DHCP"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Monitoring",
      "SNMP"
    ],
    "reference": "Network Management; Monitoring Protocols"
  },
  {
    "id": "INF-015",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company determines that its customer-ordering platform must be restored within four hours after a major outage to avoid unacceptable operational disruption. What does this four-hour requirement represent?",
    "options": [
      "Recovery point objective",
      "Recovery time objective",
      "Service-level agreement",
      "Mean time between failures"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Disaster",
      "Recovery",
      "Recovery",
      "Time",
      "Objective"
    ],
    "reference": "Business Continuity; Disaster Recovery Planning"
  },
  {
    "id": "INF-016",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A small business has 150 internal devices but only one public IPv4 address from its internet service provider. Employees must be able to browse the web, receive software updates, and access cloud applications without exposing every internal workstation directly to the internet. Which technology MOST directly supports this design?",
    "options": [
      "Network address translation, which maps private internal addresses to one or more public addresses for external communication.",
      "Domain Name System, which converts internal hostnames into public IP addresses for internet routing.",
      "Dynamic Host Configuration Protocol, which assigns a different public address to every workstation.",
      "Virtual local area networking, which creates separate broadcast domains for internal device groups."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Address",
      "Translation",
      "Public",
      "and",
      "Private",
      "Addressing"
    ],
    "reference": "Networking Fundamentals; NAT"
  },
  {
    "id": "INF-017",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A financial institution wants to monitor network traffic for suspicious patterns, such as repeated attempts to exploit known vulnerabilities. Security staff also want the system to block clearly malicious traffic automatically when confidence is high. Which capability BEST meets this need?",
    "options": [
      "A proxy server that caches frequently requested web content for faster employee browsing.",
      "An intrusion detection and prevention system that monitors traffic and can alert on or block malicious activity.",
      "A load balancer that distributes customer traffic across several web servers during periods of high demand.",
      "A DHCP server that assigns network configurations to devices when they join the internal network."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Security",
      "Intrusion",
      "Detection",
      "and",
      "Prevention"
    ],
    "reference": "Network Security; IDS and IPS"
  },
  {
    "id": "INF-018",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A consulting firm has employees working from home who need secure access to internal file shares and applications. Leadership wants traffic between each employee’s device and the corporate network protected while it travels across public internet connections. Which solution is MOST appropriate?",
    "options": [
      "A virtual private network that creates an encrypted connection between the remote user and the organization’s network.",
      "A wireless access point that allows users to connect their home devices to the local corporate network.",
      "A content delivery network that caches corporate documents near remote employees for faster access.",
      "A network switch that forwards local traffic between employee laptops and internal file servers."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Virtual",
      "Private",
      "Networks",
      "Remote",
      "Access"
    ],
    "reference": "Network Security; Remote Connectivity"
  },
  {
    "id": "INF-019",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A design firm needs a centralized location for shared project files, images, and documents. Users should be able to access folders over the network using familiar file-sharing protocols, while administrators manage capacity and permissions centrally. Which storage approach MOST directly fits this requirement?",
    "options": [
      "Direct-attached storage connected only to one workstation through a local cable.",
      "Network-attached storage providing file-level storage accessible across the organization’s network.",
      "A local RAID array installed separately inside every employee’s desktop computer.",
      "Object storage designed only for storing application backups without folder-based user access."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Storage",
      "Network-Attached",
      "Storage"
    ],
    "reference": "Storage Infrastructure; NAS and SAN"
  },
  {
    "id": "INF-020",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company hosts critical customer-facing applications under its public domain. Leadership wants name resolution to remain available even if one DNS server becomes unreachable due to maintenance or a regional outage. Which design BEST supports this objective?",
    "options": [
      "Configure multiple authoritative DNS servers so name-resolution requests can be answered by more than one available server.",
      "Store all DNS records on the same application server to simplify configuration and prevent conflicting responses.",
      "Assign static IP addresses to all customers so their devices no longer depend on domain-name resolution.",
      "Replace domain names with manually distributed server addresses so users connect directly to each application host."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "DNS",
      "Redundancy",
      "High",
      "Availability"
    ],
    "reference": "Network Services; DNS Architecture"
  },
  {
    "id": "INF-021",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A software company deploys a web application using a cloud provider’s managed runtime environment. The provider manages the operating system, middleware, runtime updates, scaling infrastructure, and underlying servers. The company focuses on application code, configuration, and data. Which cloud model is MOST directly represented?",
    "options": [
      "Infrastructure as a Service",
      "Platform as a Service",
      "Software as a Service",
      "On-premises virtualization"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Cloud",
      "Computing",
      "Platform",
      "as",
      "a",
      "Service"
    ],
    "reference": "Cloud Services; Service Models"
  },
  {
    "id": "INF-022",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A hospital wants to reduce the impact of a compromised workstation. Security architects propose isolating medical devices, administrative systems, guest networks, and clinical servers into separate segments with tightly controlled communication rules. What is the PRIMARY security benefit of this approach?",
    "options": [
      "It eliminates the need for user authentication because devices communicate only within predefined segments.",
      "It limits lateral movement by restricting how compromised systems can reach other network resources.",
      "It guarantees that malware cannot enter the network because segmented environments prevent all external traffic.",
      "It automatically encrypts every file stored on devices connected to each network segment."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Segmentation",
      "Zero",
      "Trust",
      "Principles"
    ],
    "reference": "Network Security; Segmentation"
  },
  {
    "id": "INF-023",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A payroll application runs on two coordinated servers. One server actively processes requests while the other continuously monitors it and is prepared to take over if the active server fails. Users should experience little or no disruption during a server outage. Which architecture is MOST directly described?",
    "options": [
      "A failover cluster designed to provide service continuity when one server becomes unavailable.",
      "A virtual local area network used to separate payroll traffic from other internal network traffic.",
      "A content delivery network used to distribute static payroll documents to geographically dispersed employees.",
      "A network address translation service used to hide internal payroll-server addresses from external users."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "High",
      "Availability",
      "Failover",
      "Clusters"
    ],
    "reference": "Server Infrastructure; Fault Tolerance"
  },
  {
    "id": "INF-024",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A university expands Wi-Fi coverage in a large lecture hall. The infrastructure team installs devices that connect wireless client devices to the wired campus network and provide radio coverage for laptops, tablets, and phones. Which device is being installed?",
    "options": [
      "A router",
      "A wireless access point",
      "A firewall",
      "A load balancer"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Wireless",
      "Networking",
      "Access",
      "Points"
    ],
    "reference": "Wireless Networking; Network Devices"
  },
  {
    "id": "INF-025",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A medical-practice management system has a recovery point objective of 15 minutes. After a database failure, the organization should be able to restore data with no more than 15 minutes of recent transactions lost. Which backup or replication design BEST aligns with this requirement?",
    "options": [
      "A full backup performed once each month.",
      "A yearly archive copied to offline storage after the end of the fiscal year.",
      "Frequent transaction-log backups or near-real-time replication that keeps recoverable data loss within 15 minutes.",
      "A RAID configuration that mirrors disks on the same server but does not preserve earlier versions of data."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Backup",
      "Strategy",
      "Recovery",
      "Point",
      "Objective"
    ],
    "reference": "Business Continuity; Backup and Recovery"
  },
  {
    "id": "INF-026",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company discovers that hundreds of employee laptops are running different versions of an operating system and several have missed critical security updates. The infrastructure team wants to reduce exposure consistently across the organization. What should it implement MOST directly?",
    "options": [
      "A centralized patch-management process that inventories devices, deploys approved updates, and verifies installation status.",
      "A DNS filtering policy that blocks employees from visiting websites associated with known malicious domains.",
      "A load-balancing configuration that distributes employee logins across multiple authentication servers.",
      "A network topology redesign that creates a separate physical cable for every employee laptop."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Endpoint",
      "Security",
      "Patch",
      "Management"
    ],
    "reference": "Infrastructure Security; Vulnerability Management"
  },
  {
    "id": "INF-027",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A development team wants to package an application along with its libraries and runtime dependencies so it behaves consistently in development, testing, and production environments. The team does not need a full separate guest operating system for each deployment. Which technology MOST directly supports this goal?",
    "options": [
      "A virtual machine running a complete guest operating system on a hypervisor.",
      "A container that packages the application and dependencies while sharing the host operating-system kernel.",
      "A RAID array that distributes application files across several physical storage devices.",
      "A VLAN that separates application traffic from database traffic on the same switching infrastructure."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Containerization",
      "Application",
      "Deployment"
    ],
    "reference": "Server Infrastructure; Containers"
  },
  {
    "id": "INF-028",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An employee’s laptop needs to send traffic to a cloud application hosted on a network outside the local office subnet. The device forwards the packet to a configured network address that can route traffic to other networks. What is this address MOST commonly called?",
    "options": [
      "A subnet mask",
      "A DNS resolver",
      "A default gateway",
      "A media access control address"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Routing",
      "Default",
      "Gateway"
    ],
    "reference": "Networking Fundamentals; IP Routing"
  },
  {
    "id": "INF-029",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Which component enables multiple virtual machines to share a physical server while maintaining isolation between their guest operating systems?",
    "options": [
      "Hypervisor",
      "Firewall",
      "Switch",
      "Domain controller"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Hypervisors"
    ],
    "reference": "Virtualization; Server Infrastructure"
  },
  {
    "id": "INF-030",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company has documented recovery procedures for a ransomware attack, including backup restoration steps, communication responsibilities, alternate-worksite arrangements, and decision authority. Leadership wants evidence that these plans will work under realistic conditions. What should the organization do MOST appropriately?",
    "options": [
      "Conduct periodic disaster-recovery exercises and tests to validate procedures, identify gaps, and improve readiness.",
      "Disable all backups during routine operations so recovery teams can focus only on active production systems.",
      "Keep recovery plans confidential and avoid testing them because exercises can introduce operational risk.",
      "Replace the recovery plan with a network-monitoring dashboard that reports system availability in real time."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Business",
      "Continuity",
      "Disaster",
      "Recovery",
      "Testing"
    ],
    "reference": "Business Continuity; Disaster Recovery Planning"
  },
  {
    "id": "INF-031",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company assigns the network 192.168.40.0/24 to one office location. The network administrator wants to divide it into four equal subnets for finance, operations, engineering, and guest devices. Each subnet must support more than 50 usable host addresses. Which subnet mask is MOST appropriate?",
    "options": [
      "/26, because it creates four equal subnets with 62 usable host addresses in each.",
      "/27, because it creates four equal subnets with 30 usable host addresses in each.",
      "/28, because it creates eight equal subnets with 14 usable host addresses in each.",
      "/25, because it creates two equal subnets with 126 usable host addresses in each."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Subnetting",
      "CIDR",
      "Notation"
    ],
    "reference": "Networking Fundamentals; IP Addressing"
  },
  {
    "id": "INF-032",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A switch receives an Ethernet frame addressed to a device on the same local network. The switch has previously learned the destination device’s hardware address and associated it with a specific physical port. What does the switch MOST directly use to determine where to forward the frame?",
    "options": [
      "The destination device’s DNS name and the DNS resolver configuration assigned to the switch.",
      "Its MAC address table, which maps learned hardware addresses to switch ports.",
      "The default gateway address, which routes all local network frames to external networks.",
      "The subnet mask configured on the sender’s device, which identifies the physical port of the destination."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Switching",
      "MAC",
      "Address",
      "Tables"
    ],
    "reference": "Networking Fundamentals; Switching"
  },
  {
    "id": "INF-033",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company wants employees to sign in to Windows workstations, access shared folders, and receive group-based permissions using one centrally managed identity. Administrators also want to disable access quickly when an employee leaves the organization. Which infrastructure service MOST directly supports this requirement?",
    "options": [
      "A domain controller providing centralized directory, authentication, and group-policy services.",
      "A DHCP server assigning network addresses and DNS settings to employee devices.",
      "A load balancer distributing authentication traffic among unrelated application servers.",
      "A proxy server caching commonly accessed files to reduce demand on shared storage."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Identity",
      "Services",
      "Directory",
      "Services"
    ],
    "reference": "Infrastructure Security; Identity and Access Management"
  },
  {
    "id": "INF-034",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A cybersecurity team investigates suspicious activity across firewalls, servers, endpoints, and cloud services. Analysts struggle to reconstruct the sequence of events because logs show inconsistent timestamps. Which infrastructure control would MOST directly improve the reliability of cross-system investigations?",
    "options": [
      "Use RAID storage on all logging servers so log files remain available after a disk failure.",
      "Configure all systems to synchronize their clocks with an approved Network Time Protocol source.",
      "Segment all log-producing devices into separate VLANs so their timestamps cannot be altered by other systems.",
      "Replace centralized logging with local text files stored independently on every server."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Time",
      "Protocol",
      "Log",
      "Correlation"
    ],
    "reference": "Network Management; Time Synchronization"
  },
  {
    "id": "INF-035",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A call center uses voice-over-IP phones, video meetings, cloud applications, and large software downloads over the same network. During periods of heavy download activity, voice calls become choppy and delayed. Which network capability would MOST directly address the problem?",
    "options": [
      "Configure quality-of-service policies that prioritize latency-sensitive voice traffic over lower-priority bulk transfers.",
      "Replace all IP phones with analog phones so voice traffic no longer uses the organization’s data network.",
      "Add a second DNS server because domain-resolution delays are the primary cause of poor call quality.",
      "Disable encryption for voice traffic so packets can travel more quickly through the network."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Quality",
      "of",
      "Service",
      "Traffic",
      "Prioritization"
    ],
    "reference": "Networking Fundamentals; Quality of Service"
  },
  {
    "id": "INF-036",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A hospital runs several database servers that require high-performance shared storage presented as block-level volumes. Administrators want storage managed centrally and connected over a dedicated high-speed network rather than through ordinary file shares. Which solution MOST directly fits this requirement?",
    "options": [
      "Network-attached storage providing folder-based file shares through common network protocols.",
      "Direct-attached storage installed inside each individual database server.",
      "A storage area network providing centralized block-level storage to server systems.",
      "Object storage used primarily for long-term unstructured archives and application backups."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Storage",
      "Area",
      "Networks",
      "Block",
      "Storage"
    ],
    "reference": "Storage Infrastructure; SAN"
  },
  {
    "id": "INF-037",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An online retailer serves product images, style sheets, videos, and downloadable catalogs to customers in multiple countries. During major promotions, international users experience slow page loads because all static content is delivered from one data center. Which approach would MOST directly improve performance?",
    "options": [
      "Use a content delivery network to cache and deliver static content from geographically distributed edge locations.",
      "Move all static content into the company’s transactional customer database so it is retrieved with order data.",
      "Require customers to connect through a virtual private network before accessing the retailer’s public website.",
      "Place all web servers on one physical network switch to reduce communication between application components."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Content",
      "Delivery",
      "Networks",
      "Performance"
    ],
    "reference": "Internet Infrastructure; Content Delivery Networks"
  },
  {
    "id": "INF-038",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company wants internet users to access a public web application without directly exposing internal application servers. Security architects also want a front-end service that can terminate encrypted connections, route requests, and apply web-security rules before traffic reaches the application tier. Which component BEST supports this design?",
    "options": [
      "A reverse proxy positioned in front of application servers to broker and control inbound web requests.",
      "A DHCP server positioned in front of application servers to assign addresses to external web users.",
      "A domain controller positioned in front of application servers to create local operating-system accounts.",
      "A network-attached storage appliance positioned in front of application servers to store public web pages."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Reverse",
      "Proxies",
      "Web",
      "Application",
      "Architecture"
    ],
    "reference": "Server Infrastructure; Application Delivery"
  },
  {
    "id": "INF-039",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A security operations team receives logs from firewalls, endpoint-protection tools, identity systems, cloud applications, and database servers. The team wants to correlate events, search across sources, generate alerts, and investigate potential incidents from one central platform. Which technology MOST directly supports this objective?",
    "options": [
      "A virtual private network providing encrypted remote access for security analysts.",
      "A security information and event management platform aggregating and correlating security telemetry.",
      "A domain name system resolver translating device names into network addresses.",
      "A disaster-recovery site containing replacement servers for use after an outage."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "SIEM",
      "Security",
      "Monitoring"
    ],
    "reference": "Infrastructure Security; Security Operations"
  },
  {
    "id": "INF-040",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A data center hosts critical clinical systems that cannot tolerate a single power-device failure. The infrastructure team uses independent power feeds, separate uninterruptible power supplies, and redundant power-distribution units for key servers. What design principle is MOST directly being applied?",
    "options": [
      "Load balancing, because requests are distributed across multiple applications during periods of high traffic.",
      "Network segmentation, because critical equipment is isolated from guest and administrative network traffic.",
      "Elimination of single points of failure through redundant power infrastructure.",
      "Data deduplication, because duplicate information is removed from storage to conserve capacity."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Redundant",
      "Power",
      "Data",
      "Center",
      "Availability"
    ],
    "reference": "Data Center Infrastructure; Power Resilience"
  },
  {
    "id": "INF-041",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A global organization is expanding its internet-connected devices, including sensors, mobile devices, and branch-office equipment. Network architects want an addressing protocol designed to provide a substantially larger address space than IPv4 while supporting modern routing and configuration capabilities. Which protocol is MOST appropriate?",
    "options": [
      "IPv6",
      "ARP",
      "HTTP",
      "SMTP"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "IPv6",
      "Address",
      "Capacity"
    ],
    "reference": "Networking Fundamentals; Internet Protocol Version 6"
  },
  {
    "id": "INF-042",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company wants better visibility into suspicious behavior on employee laptops, including unusual processes, credential misuse, persistence attempts, and lateral-movement activity. Security analysts also need the ability to investigate and contain affected endpoints remotely. Which solution MOST directly provides these capabilities?",
    "options": [
      "A network switch that forwards frames between devices on the same local-area network.",
      "An endpoint detection and response platform that continuously monitors, investigates, and helps contain endpoint threats.",
      "A DNS service that maps internal workstation names to their assigned IP addresses.",
      "A load-balancing service that distributes employee traffic across multiple internet connections."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Endpoint",
      "Detection",
      "and",
      "Response"
    ],
    "reference": "Infrastructure Security; Endpoint Protection"
  },
  {
    "id": "INF-043",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company installs IP phones, wireless access points, and security cameras in locations where electrical outlets are inconvenient or unavailable. The infrastructure team wants to provide both network connectivity and electrical power through the same Ethernet cable. Which technology MOST directly supports this requirement?",
    "options": [
      "Virtual LANs",
      "Network address translation",
      "Power over Ethernet",
      "Wireless mesh networking"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Power",
      "over",
      "Ethernet"
    ],
    "reference": "Networking Fundamentals; Ethernet Infrastructure"
  },
  {
    "id": "INF-044",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company operates an internal portal that employees access through a browser. The organization wants users to verify they are connecting to the legitimate server and establish encrypted sessions without manually sharing encryption keys. Which infrastructure component MOST directly supports this objective?",
    "options": [
      "A digital certificate issued through public-key infrastructure to authenticate the server and enable secure TLS connections.",
      "A DHCP lease that assigns the portal server a stable internal network address.",
      "A VLAN configuration that separates portal traffic from other application traffic on the same switch.",
      "A RAID array that creates redundant copies of the portal’s web-content files."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Public-Key",
      "Infrastructure",
      "Digital",
      "Certificates"
    ],
    "reference": "Infrastructure Security; Cryptography"
  },
  {
    "id": "INF-045",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Which statement BEST describes the purpose of a TCP or UDP port number?",
    "options": [
      "It identifies the physical network interface used by a device to connect to a local-area network.",
      "It identifies a specific service or application endpoint on a host so traffic can be directed appropriately.",
      "It identifies the maximum number of devices that may communicate within a subnet.",
      "It determines the encryption algorithm used to protect traffic moving between two networks."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "Network",
      "Ports"
    ],
    "reference": "Networking Fundamentals; TCP and UDP"
  },
  {
    "id": "INF-046",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company hosts a public customer portal that must be reachable from the internet, while its internal financial systems must remain protected from direct external access. Security architects want the public-facing servers placed in a controlled network area with tightly restricted connections to internal services. Which design BEST supports this requirement?",
    "options": [
      "Place the public web servers in a demilitarized zone with firewall rules controlling traffic to internal networks.",
      "Connect the public portal directly to the internal financial network so application servers can access databases without filtering.",
      "Put all servers on the guest wireless network because internet-facing services should remain separate from employee devices.",
      "Store the public portal only on employee workstations and allow access through remote-desktop sessions."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Segmentation",
      "Demilitarized",
      "Zone"
    ],
    "reference": "Network Security; Perimeter Architecture"
  },
  {
    "id": "INF-047",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A government agency is concerned that attackers could manipulate DNS responses and direct citizens to fraudulent websites that imitate official online services. The agency wants a mechanism that allows resolvers to validate that DNS records were not altered in transit. Which technology MOST directly addresses this concern?",
    "options": [
      "DHCP reservations, which ensure critical servers retain predictable internal addresses.",
      "DNSSEC, which uses digital signatures to help validate the authenticity and integrity of DNS records.",
      "NAT, which hides internal addresses behind a smaller number of public addresses.",
      "VLAN tagging, which separates traffic into logical broadcast domains on shared switching hardware."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "DNS",
      "Security",
      "DNSSEC"
    ],
    "reference": "Network Services; DNS Security"
  },
  {
    "id": "INF-048",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A sales organization subscribes to a cloud-based customer relationship management application. The provider manages the application software, infrastructure, operating system, storage, and upgrades, while the organization configures users, workflows, and reports. Which cloud service model is MOST directly represented?",
    "options": [
      "Infrastructure as a Service",
      "Platform as a Service",
      "Software as a Service",
      "Private cloud virtualization"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Cloud",
      "Computing",
      "Software",
      "as",
      "a",
      "Service"
    ],
    "reference": "Cloud Services; Service Models"
  },
  {
    "id": "INF-049",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A data center connects a core switch to a storage network using multiple physical Ethernet links. The network team wants the links to operate together for additional bandwidth and to maintain connectivity if one individual cable fails. Which technology MOST directly supports this objective?",
    "options": [
      "Port forwarding, which directs external requests to a designated internal service.",
      "Link aggregation, which combines multiple physical network links into one logical connection.",
      "Network address translation, which maps internal IP addresses to public addresses.",
      "Dynamic Host Configuration Protocol, which leases IP configuration details to connected devices."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Redundancy",
      "Link",
      "Aggregation"
    ],
    "reference": "Networking Fundamentals; High Availability"
  },
  {
    "id": "INF-050",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A media company needs to store millions of images, video files, logs, and archived documents. The files do not require traditional folders or block-level disk access, but the company needs scalable storage accessed through application programming interfaces and metadata. Which storage model is MOST appropriate?",
    "options": [
      "Object storage, which stores data as objects with identifiers and metadata in a scalable repository.",
      "Direct-attached storage, which connects disks only to one physical server through local interfaces.",
      "Network-attached storage, which primarily provides shared folders through file-level access protocols.",
      "Random-access memory, which provides temporary high-speed storage for active application processes."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Storage",
      "Object",
      "Storage"
    ],
    "reference": "Storage Infrastructure; Cloud Storage"
  },
  {
    "id": "INF-051",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A systems administrator needs to manage Linux servers located in a remote data center. The administrator wants command-line access that encrypts login credentials and session traffic while allowing secure file transfer when needed. Which protocol is MOST appropriate?",
    "options": [
      "Telnet",
      "FTP",
      "SSH",
      "HTTP"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Secure",
      "Remote",
      "Administration",
      "SSH"
    ],
    "reference": "Network Security; Administrative Access"
  },
  {
    "id": "INF-052",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A network team collects normal measurements for bandwidth utilization, latency, packet loss, CPU load, and memory use across key systems for several weeks. Later, the team compares new readings against these established values to identify unusual behavior. What is the PRIMARY purpose of the earlier measurements?",
    "options": [
      "To create a performance baseline that supports detection of abnormal conditions and capacity trends.",
      "To replace security logging because normal operational metrics provide all information needed for incident response.",
      "To establish a disaster-recovery plan that determines how systems will be restored after a major outage.",
      "To assign permanent IP addresses to devices based on their typical network utilization levels."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Monitoring",
      "Baselines"
    ],
    "reference": "Infrastructure Operations; Performance Monitoring"
  },
  {
    "id": "INF-053",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A development application server needs to communicate with a database server only over TCP port 5432. Security architects want to limit unnecessary network exposure while allowing the required application function. Which firewall rule BEST follows the principle of least privilege?",
    "options": [
      "Allow all inbound and outbound traffic between the application and database segments to prevent connectivity issues.",
      "Allow only required traffic from the application server to the database server on TCP port 5432 and deny unnecessary connections.",
      "Allow all database traffic from any internet address because the application server will authenticate users before queries execute.",
      "Block all traffic between the application and database servers, then export data manually between the systems each day."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Firewall",
      "Rules",
      "Least",
      "Privilege"
    ],
    "reference": "Network Security; Access Control"
  },
  {
    "id": "INF-054",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An e-commerce company operates two geographically separate application environments. Both locations actively process customer traffic under normal conditions, and traffic can continue through the remaining location if one region becomes unavailable. Which architecture is MOST directly described?",
    "options": [
      "Cold-site recovery, because the secondary location remains unused until a disaster occurs.",
      "Active-passive failover, because one location handles all traffic while the other waits in standby mode.",
      "Active-active deployment, because multiple locations serve production traffic simultaneously.",
      "Backup-only replication, because all production services continue to run in a single location."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Business",
      "Continuity",
      "Active-Active",
      "Architecture"
    ],
    "reference": "High Availability; Continuity Planning"
  },
  {
    "id": "INF-055",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A university provides separate wireless access for students, faculty, and visitors. Each group sees a different network name when connecting, and each network is mapped to different authentication and access policies. What is the network name broadcast by the wireless infrastructure MOST commonly called?",
    "options": [
      "Service set identifier",
      "Subnet mask",
      "Media access control address",
      "Domain name record"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Wireless",
      "Networking",
      "SSIDs"
    ],
    "reference": "Wireless Networking; Network Configuration"
  },
  {
    "id": "INF-056",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A load balancer distributes traffic among four web servers. One server begins returning repeated errors even though it still responds to network pings. The organization wants the load balancer to stop sending customer requests to that server until the web application is functioning correctly. What capability is MOST directly needed?",
    "options": [
      "A health check that evaluates application-level availability and removes unhealthy servers from the traffic pool.",
      "A DHCP lease renewal that assigns the failing server a different IP address.",
      "A VLAN change that moves the failing web server into a separate broadcast domain.",
      "A storage snapshot that creates a read-only backup of the server’s application files."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "High",
      "Availability",
      "Health",
      "Checks"
    ],
    "reference": "Application Delivery; Load Balancing"
  },
  {
    "id": "INF-057",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company issues smartphones and tablets to sales representatives. IT wants to enforce screen-lock policies, require device encryption, deploy approved applications, remotely wipe lost devices, and separate business data from personal content. Which platform MOST directly supports these requirements?",
    "options": [
      "Mobile device management",
      "Network address translation",
      "Storage area networking",
      "Domain name resolution"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Endpoint",
      "Management",
      "Mobile",
      "Device",
      "Management"
    ],
    "reference": "Infrastructure Security; Endpoint Administration"
  },
  {
    "id": "INF-058",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Which statement BEST describes packet switching in modern data networks?",
    "options": [
      "A complete communication path is reserved exclusively between two endpoints for the duration of a session.",
      "Data is divided into packets that may travel through shared network paths before being reassembled at the destination.",
      "Network devices use one fixed route for all communication regardless of congestion or failure conditions.",
      "Each device receives a permanent physical circuit to every other device on the same network."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "Packet",
      "Switching"
    ],
    "reference": "Networking Fundamentals; Data Transmission"
  },
  {
    "id": "INF-059",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A customer-facing website suddenly displays browser warnings indicating that its secure connection cannot be trusted. Investigation shows that the site’s TLS certificate expired overnight. What operational practice would MOST directly reduce the chance of this recurring?",
    "options": [
      "Monitor certificate expiration dates and automate renewal and deployment processes where possible.",
      "Disable browser certificate validation so users can continue accessing the website without warning messages.",
      "Replace TLS with unencrypted HTTP because certificate expiration affects only encrypted connections.",
      "Move the website to a different VLAN so certificate trust is evaluated only within the internal network."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Certificate",
      "Management",
      "Expiration",
      "Monitoring"
    ],
    "reference": "Infrastructure Security; Public-Key Infrastructure"
  },
  {
    "id": "INF-060",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A payment-processing service becomes unavailable during peak business hours. The infrastructure team restores service quickly, communicates status to affected stakeholders, and later performs a structured review to determine why the outage occurred and how similar incidents can be prevented. Which process is MOST directly represented?",
    "options": [
      "Capacity planning",
      "Change management",
      "Incident management followed by problem analysis",
      "Requirements traceability"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Incident",
      "Response",
      "Service",
      "Restoration"
    ],
    "reference": "Infrastructure Operations; Incident Management"
  },
  {
    "id": "INF-061",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A network engineer is troubleshooting a problem in which a user’s computer has a valid IP address, can reach the default gateway, but cannot establish an HTTPS session with a web application. The engineer suspects the issue involves the protocol responsible for reliable end-to-end delivery between applications. Which OSI layer is MOST directly involved?",
    "options": [
      "Physical layer",
      "Data link layer",
      "Transport layer",
      "Presentation layer"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Network",
      "Layering",
      "OSI",
      "Model"
    ],
    "reference": "Networking Fundamentals; OSI Model"
  },
  {
    "id": "INF-062",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company wants to ensure that all employee laptops automatically enforce password complexity, screen-lock timing, approved browser settings, and software-installation restrictions when users sign in. Which infrastructure capability MOST directly supports centralized enforcement of these settings?",
    "options": [
      "Group Policy managed through the organization’s directory-service environment.",
      "DHCP scopes assigning standard IP addresses and DNS servers to employee devices.",
      "Network address translation rules controlling how internal systems access the public internet.",
      "A content delivery network caching software installers closer to user locations."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Domain",
      "Controllers",
      "Group",
      "Policy"
    ],
    "reference": "Identity Infrastructure; Directory Services"
  },
  {
    "id": "INF-063",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A database administrator is evaluating storage options for a transaction-processing system that performs thousands of small reads and writes every second. The administrator needs a metric that reflects how many individual input/output operations the storage platform can complete in a given time period. Which metric is MOST relevant?",
    "options": [
      "Bandwidth",
      "IOPS",
      "Mean time to repair",
      "Recovery point objective"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Storage",
      "Performance",
      "IOPS"
    ],
    "reference": "Storage Infrastructure; Performance Metrics"
  },
  {
    "id": "INF-064",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company hosts an online payment portal. Security leaders want protection against malicious HTTP requests, common web exploits, and suspicious application-layer traffic before requests reach the web servers. Which infrastructure control is MOST appropriate?",
    "options": [
      "A web application firewall placed in front of the public-facing application.",
      "A DHCP server assigning temporary addresses to incoming website visitors.",
      "A storage area network providing block-level volumes to the web-server cluster.",
      "A domain controller managing employee identity and group membership."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Security",
      "Web",
      "Application",
      "Firewalls"
    ],
    "reference": "Application Security; Perimeter Defense"
  },
  {
    "id": "INF-065",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A hospital is concerned that ransomware could encrypt production databases and attempt to delete backup copies. The infrastructure team wants backup data that cannot be altered or deleted for a defined retention period, even by compromised administrative accounts. Which capability MOST directly supports this goal?",
    "options": [
      "Differential backup scheduling",
      "Immutable backup storage",
      "RAID 1 disk mirroring",
      "Load-balanced application hosting"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Backup",
      "Types",
      "Immutable",
      "Backups"
    ],
    "reference": "Business Continuity; Backup Security"
  },
  {
    "id": "INF-066",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A support technician wants to determine whether a workstation can reach a server at the network layer before investigating application-specific issues. Which tool MOST directly tests basic IP connectivity by sending ICMP echo requests?",
    "options": [
      "Ping",
      "Traceroute",
      "Nslookup",
      "Netstat"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Troubleshooting",
      "Ping",
      "and",
      "ICMP"
    ],
    "reference": "Networking Fundamentals; Diagnostic Utilities"
  },
  {
    "id": "INF-067",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company deploys virtual machines in a public-cloud infrastructure-as-a-service environment. The cloud provider secures the physical data center, networking hardware, and hypervisor layer. The company must still configure guest operating systems, patch applications, manage identities, and protect its data. What principle is MOST directly illustrated?",
    "options": [
      "Zero trust architecture",
      "Shared responsibility model",
      "Network segmentation",
      "Vendor lock-in"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Cloud",
      "Computing",
      "Shared",
      "Responsibility",
      "Model"
    ],
    "reference": "Cloud Security; Shared Responsibility"
  },
  {
    "id": "INF-068",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A campus network uses multiple redundant switch connections to improve resilience. However, unmanaged redundant Layer 2 paths could create broadcast storms and forwarding loops. Which protocol MOST directly prevents this problem by logically blocking certain redundant paths until they are needed?",
    "options": [
      "Spanning Tree Protocol",
      "Dynamic Host Configuration Protocol",
      "Simple Network Management Protocol",
      "Secure Shell"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Redundant",
      "Networking",
      "Spanning",
      "Tree",
      "Protocol"
    ],
    "reference": "Networking Fundamentals; Switching and Loop Prevention"
  },
  {
    "id": "INF-069",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A financial-services company maintains an alternate facility with preinstalled hardware, network connectivity, and partially configured systems. The site is not actively processing production traffic but can be activated more quickly than an empty facility after a disaster. What type of recovery site is MOST directly described?",
    "options": [
      "Cold site",
      "Warm site",
      "Active-active site",
      "Hot site"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Disaster",
      "Recovery",
      "Warm",
      "Sites"
    ],
    "reference": "Business Continuity; Recovery Sites"
  },
  {
    "id": "INF-070",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A hospital’s employee wireless network requires users to authenticate with their individual organizational credentials rather than using one shared password. The security team also wants centralized authentication, authorization, and accounting for wireless access. Which approach BEST supports this requirement?",
    "options": [
      "WPA3-Personal using a single shared passphrase.",
      "WPA3-Enterprise using centralized authentication such as RADIUS.",
      "Open wireless access combined with a captive portal and guest-registration form.",
      "MAC address filtering without user authentication."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Wireless",
      "Security",
      "Enterprise",
      "Authentication"
    ],
    "reference": "Wireless Networking; Access Control"
  },
  {
    "id": "INF-071",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company manages hundreds of servers across several environments. Administrators want to define approved configurations as code, automatically deploy consistent settings, detect drift from standards, and reduce manual setup errors. Which approach MOST directly supports these goals?",
    "options": [
      "Configuration management and infrastructure-as-code practices.",
      "Manual configuration through remote desktop sessions on each server.",
      "Local spreadsheet tracking of server settings maintained by each administrator.",
      "Network-attached storage for centralizing installation files."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Infrastructure",
      "Automation",
      "Configuration",
      "Management"
    ],
    "reference": "Infrastructure Operations; Automation"
  },
  {
    "id": "INF-072",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Which protocol is primarily used on IPv4 local networks to associate an IP address with the corresponding media access control address?",
    "options": [
      "DNS",
      "ARP",
      "NTP",
      "SMTP"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "ARP"
    ],
    "reference": "Networking Fundamentals; Address Resolution"
  },
  {
    "id": "INF-073",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An online retailer expects order volume to double during an upcoming promotion. Infrastructure leaders review CPU usage, memory demand, database throughput, network utilization, and historical traffic trends to determine whether additional resources are needed before the event. What activity is MOST directly being performed?",
    "options": [
      "Incident response",
      "Capacity planning",
      "Disaster recovery testing",
      "Root-cause analysis"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Capacity",
      "Planning",
      "Scalability"
    ],
    "reference": "Infrastructure Operations; Capacity Management"
  },
  {
    "id": "INF-074",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A security team discovers that each server stores logs locally, with inconsistent retention settings and no centralized search capability. During an incident, analysts spend hours collecting evidence from individual systems. Which improvement would MOST directly strengthen investigation capability?",
    "options": [
      "Centralize logs in a managed platform with standardized retention, search, correlation, and access controls.",
      "Increase the number of local user accounts on each server so more employees can retrieve logs independently.",
      "Disable system logging during normal operations to preserve storage for future incident evidence.",
      "Store logs in separate spreadsheets maintained by each application owner."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Logging",
      "Centralized",
      "Log",
      "Management"
    ],
    "reference": "Infrastructure Security; Logging and Monitoring"
  },
  {
    "id": "INF-075",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company depends heavily on cloud applications and customer-facing web services. To reduce the impact of an internet service provider outage, the organization contracts with two independent providers using separate physical entry paths into its facility. What resilience strategy is MOST directly being implemented?",
    "options": [
      "Dual-homed internet connectivity with redundant service providers and paths.",
      "Network address translation using separate public addresses for each internal department.",
      "VLAN segmentation separating customer systems from administrative systems.",
      "A content delivery network caching static content at geographically distributed edge locations."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "High",
      "Availability",
      "Redundant",
      "Internet",
      "Connectivity"
    ],
    "reference": "Network Infrastructure; Resilience"
  },
  {
    "id": "INF-076",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A network engineer can successfully ping a cloud application’s IP address from a branch office, but users report intermittent delays when accessing it. The engineer wants to identify the sequence of network hops and determine where latency begins increasing along the path. Which diagnostic utility is MOST directly useful?",
    "options": [
      "Nslookup, because it verifies the domain-name records associated with the cloud application.",
      "Traceroute, because it displays the network hops taken toward a destination and can help identify routing delays.",
      "Netstat, because it lists active local connections and listening ports on the engineer’s workstation.",
      "Ping, because repeated ICMP echo requests identify every router that forwards traffic to the destination."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Troubleshooting",
      "Traceroute"
    ],
    "reference": "Networking Fundamentals; Diagnostic Utilities"
  },
  {
    "id": "INF-077",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A university wants to prevent unmanaged or unauthorized devices from connecting to its internal wired network. Before granting normal network access, the university wants to verify device identity, user credentials, security posture, and compliance with endpoint requirements. Which capability MOST directly supports this objective?",
    "options": [
      "Network access control, which can authenticate devices and users before assigning permitted network access.",
      "A content delivery network, which caches static content closer to users in different geographic regions.",
      "RAID storage, which maintains redundant disk copies to improve availability after hardware failure.",
      "A load balancer, which distributes incoming client requests among multiple available servers."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Access",
      "Control",
      "Authentication"
    ],
    "reference": "Network Security; Access Control"
  },
  {
    "id": "INF-078",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company updates the public IP address associated with portal.example.com. Some users immediately reach the new server, while others continue reaching the previous address for several hours. The network team determines that external DNS resolvers are retaining the old record temporarily. Which DNS setting MOST directly influences this behavior?",
    "options": [
      "The subnet mask assigned to the DNS server.",
      "The time-to-live value associated with the DNS record.",
      "The default gateway configured for client devices.",
      "The transmission-control port used by the DNS service."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "DNS",
      "Caching"
    ],
    "reference": "Network Services; Domain Name System"
  },
  {
    "id": "INF-079",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A server-room temperature sensor shows a gradual increase after an air-conditioning unit begins malfunctioning. The organization wants to avoid hardware shutdowns, component damage, and service interruption. Which action is MOST appropriate?",
    "options": [
      "Disable all temperature alerts because short-term environmental fluctuations are normal in data-center operations.",
      "Move the affected servers to a different VLAN so network traffic does not contribute to system overheating.",
      "Escalate the environmental alert, restore adequate cooling, and monitor conditions before equipment reaches unsafe limits.",
      "Increase backup frequency because temperature events affect data recovery rather than hardware availability."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Data",
      "Center",
      "Cooling",
      "Environmental",
      "Monitoring"
    ],
    "reference": "Data Center Infrastructure; Environmental Controls"
  },
  {
    "id": "INF-080",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company wants employee web traffic to pass through a controlled service that can enforce browsing policies, inspect requests, log activity, and block access to known malicious or inappropriate websites. Which infrastructure component MOST directly supports this requirement?",
    "options": [
      "A proxy server that intermediates client web requests and applies filtering, monitoring, and policy controls.",
      "A domain controller that stores employee identities and manages group-based access to internal resources.",
      "A hypervisor that hosts multiple isolated virtual machines on shared physical server hardware.",
      "A storage area network that provides high-performance block storage to enterprise applications."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Security",
      "Proxy",
      "Servers"
    ],
    "reference": "Network Security; Web Access Controls"
  },
  {
    "id": "INF-081",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A large enterprise has multiple branch offices and redundant connections between regional networks. Network engineers want routers to exchange route information automatically and adjust paths if a connection fails, rather than requiring manual updates to static route tables. What capability is MOST directly needed?",
    "options": [
      "Dynamic routing protocols that allow routers to learn, advertise, and update network paths automatically.",
      "DHCP reservations that ensure routers retain stable addresses after scheduled maintenance.",
      "VLAN tagging that separates departments into logical broadcast domains on shared switches.",
      "DNS forwarding that sends unresolved domain-name requests to an external resolver."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Routing",
      "Protocols",
      "Dynamic",
      "Routing"
    ],
    "reference": "Networking Fundamentals; Routing"
  },
  {
    "id": "INF-082",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company performs successful nightly backups of its critical database. During a recovery exercise, however, the team discovers that a backup file cannot be restored because it is corrupted. Which practice would MOST directly reduce the likelihood of this problem remaining undetected?",
    "options": [
      "Increase the number of database indexes so backup files can be generated more quickly.",
      "Perform regular restore tests that verify backup integrity and confirm systems can be recovered within requirements.",
      "Use a larger network switch so backups can move through the data center without packet congestion.",
      "Disable encryption on backup files because encrypted data cannot be validated before a recovery event."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Backup",
      "Recovery",
      "Restore",
      "Validation"
    ],
    "reference": "Business Continuity; Backup and Recovery"
  },
  {
    "id": "INF-083",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company must perform maintenance on a physical host running several critical virtual machines. Administrators want to move the virtual machines to another compatible host with little or no interruption to users. Which virtualization capability MOST directly supports this objective?",
    "options": [
      "Storage deduplication, which reduces duplicate data blocks across virtual-machine disks.",
      "Snapshotting, which captures the state of a virtual machine at a point in time for rollback or testing.",
      "Live migration, which transfers running virtual machines between hosts while minimizing service disruption.",
      "Container orchestration, which automatically packages applications into isolated runtime environments."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Virtualization",
      "Live",
      "Migration"
    ],
    "reference": "Server Infrastructure; Virtual Machine Management"
  },
  {
    "id": "INF-084",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company’s domain is being impersonated in phishing emails sent to customers. The security team wants receiving mail systems to verify authorized senders, validate message signatures, and apply the organization’s policy to suspicious messages. Which set of controls MOST directly addresses this concern?",
    "options": [
      "SPF, DKIM, and DMARC records configured for the organization’s email domain.",
      "DHCP scopes configured to assign a unique IP address to each employee workstation.",
      "RAID storage configured to mirror mail-server disks for availability after hardware failure.",
      "VLAN segmentation configured to separate employee devices from guest wireless users."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Email",
      "Infrastructure",
      "SPF",
      "DKIM",
      "and",
      "DMARC"
    ],
    "reference": "Messaging Security; Email Authentication"
  },
  {
    "id": "INF-085",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company stores its primary backups in the same building as its production servers. Leadership is concerned that a fire, flood, or major facility outage could destroy both production systems and local backup copies. Which improvement MOST directly addresses this risk?",
    "options": [
      "Configure a larger local RAID array so backup disks remain available if one storage drive fails.",
      "Store backup copies in a geographically separate location or cloud region with appropriate retention controls.",
      "Add a second network switch in the same server room so backup traffic has an alternate local path.",
      "Increase the number of local administrative accounts permitted to access the backup repository."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Redundancy",
      "Geographic",
      "Diversity"
    ],
    "reference": "Business Continuity; Infrastructure Resilience"
  },
  {
    "id": "INF-086",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Which term refers to the largest packet or frame payload size that a network interface or network path can transmit without requiring fragmentation?",
    "options": [
      "Bandwidth",
      "Latency",
      "Maximum transmission unit",
      "Throughput"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "MTU"
    ],
    "reference": "Networking Fundamentals; Packet Transmission"
  },
  {
    "id": "INF-087",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An operations team monitors server CPU utilization. A brief spike to 95% is common during nightly processing and does not require action, but sustained CPU usage above 90% for fifteen minutes may indicate a capacity issue. How should the monitoring system be configured MOST appropriately?",
    "options": [
      "Generate alerts based on defined thresholds and duration criteria that distinguish meaningful sustained conditions from brief normal spikes.",
      "Alert whenever CPU use exceeds 50% because all utilization above average levels creates an immediate outage risk.",
      "Disable CPU monitoring because application-response times provide all information needed for infrastructure management.",
      "Trigger alerts only after a server fails completely because preemptive monitoring can create unnecessary operational work."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Infrastructure",
      "Monitoring",
      "Alert",
      "Thresholds"
    ],
    "reference": "Infrastructure Operations; Monitoring and Alerting"
  },
  {
    "id": "INF-088",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company deploys a customer-facing application in multiple isolated data-center locations within the same cloud region. The design is intended to protect the application from failure of a single building or facility while maintaining relatively low-latency connectivity between components. What cloud construct is MOST directly being used?",
    "options": [
      "A content delivery network.",
      "Availability zones.",
      "A virtual private network.",
      "A single-tenant private cloud."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Cloud",
      "Architecture",
      "Availability",
      "Zones"
    ],
    "reference": "Cloud Infrastructure; High Availability"
  },
  {
    "id": "INF-089",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company is replacing broad remote-network access with a model in which users authenticate strongly, device posture is assessed, and access is granted only to specific authorized applications rather than to the entire internal network. Which approach MOST directly reflects this design?",
    "options": [
      "Network address translation, which maps internal addresses to public addresses for internet communication.",
      "A traditional full-tunnel VPN, which grants users broad network-level access after connection.",
      "Zero trust network access, which provides identity- and policy-based access to individual applications.",
      "A storage area network, which centralizes block-level storage for application servers."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Network",
      "Security",
      "Zero",
      "Trust",
      "Network",
      "Access"
    ],
    "reference": "Infrastructure Security; Zero Trust Architecture"
  },
  {
    "id": "INF-090",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A network outage occurs shortly after a firewall policy update. During investigation, the operations team needs to determine exactly what was changed, who approved it, when it was deployed, and whether a rollback plan existed. Which operational record is MOST directly relevant?",
    "options": [
      "A capacity-planning forecast showing anticipated utilization over the next fiscal year.",
      "A change-management record documenting the requested modification, approvals, implementation details, and rollback plan.",
      "A business-continuity plan describing alternate facilities and recovery priorities after a major disaster.",
      "A software asset inventory listing installed applications and license ownership across the organization."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Incident",
      "Management",
      "Change",
      "Records"
    ],
    "reference": "Infrastructure Operations; Change Management"
  },
  {
    "id": "INF-091",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company allows administrators to manage cloud infrastructure remotely. Security leaders are concerned that a stolen password could allow an attacker to access highly privileged systems. They require administrators to enter a password and also approve a prompt on a registered mobile device or use a hardware security key. Which control is MOST directly being implemented?",
    "options": [
      "Multi-factor authentication, because access requires more than one independent type of verification.",
      "Network address translation, because internal administrator addresses are hidden from public internet users.",
      "Role-based access control, because administrator permissions are assigned according to job responsibilities.",
      "Single sign-on, because one central credential is used to access several administrative systems."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Security",
      "Multi-Factor",
      "Authentication"
    ],
    "reference": "Identity and Access Management; Authentication Controls"
  },
  {
    "id": "INF-092",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A branch office has a 1 Gbps internet connection, but application-monitoring tools show that large file transfers rarely exceed 650 Mbps. Network engineers determine that protocol overhead, congestion, and server limitations reduce the actual rate achieved by users. What term MOST accurately describes the measured 650 Mbps rate?",
    "options": [
      "Latency, because it measures the time required for data to travel from source to destination.",
      "Throughput, because it represents the actual amount of data successfully transferred over time.",
      "Bandwidth, because it represents the theoretical maximum capacity of the connection.",
      "Jitter, because it represents variation in packet-arrival timing during a communication session."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Traffic",
      "Bandwidth",
      "vs.",
      "Throughput"
    ],
    "reference": "Networking Fundamentals; Performance Metrics"
  },
  {
    "id": "INF-093",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Before applying a major application update, administrators want to capture the current state of a virtual server so they can quickly revert the system if the deployment causes unexpected failures. The capture should preserve the server’s configuration and disk state at a specific point in time. Which capability MOST directly supports this objective?",
    "options": [
      "A load balancer that redirects requests to healthy servers during periods of maintenance.",
      "A RAID configuration that maintains redundancy across multiple physical storage drives.",
      "A snapshot that records the virtual machine or storage state for point-in-time recovery or rollback.",
      "A network-attached storage appliance that provides shared file access over the organization’s network."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Storage",
      "Snapshots"
    ],
    "reference": "Storage Infrastructure; Data Protection"
  },
  {
    "id": "INF-094",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "An online retailer is concerned that attackers may overwhelm its public website with massive volumes of traffic, preventing legitimate customers from completing purchases. The company wants a service that can detect abnormal traffic patterns and absorb, filter, or divert malicious requests before they reach the application environment. Which solution is MOST appropriate?",
    "options": [
      "A distributed denial-of-service mitigation service designed to detect and filter large-scale malicious traffic.",
      "A DHCP server that assigns dynamic IP addresses to devices connecting to the company network.",
      "A domain controller that authenticates employees and applies workstation security policies.",
      "A storage area network that provides centralized block storage for web and database servers."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Security",
      "Denial-of-Service",
      "Protection"
    ],
    "reference": "Network Security; Availability Protection"
  },
  {
    "id": "INF-095",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A network engineer creates separate VLANs for accounting, human resources, engineering, and guest devices. The engineer explains that broadcasts generated in one VLAN should not automatically reach devices in the other VLANs. What is the PRIMARY effect of this design?",
    "options": [
      "It encrypts all traffic between departments without requiring additional security controls.",
      "It creates separate broadcast domains that limit the spread of Layer 2 broadcast traffic.",
      "It assigns every department a public IP address that can be directly routed across the internet.",
      "It eliminates the need for routers or Layer 3 devices when departments need to communicate."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Switching",
      "Broadcast",
      "Domains"
    ],
    "reference": "Networking Fundamentals; LAN Design"
  },
  {
    "id": "INF-096",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A ticketing platform experiences unpredictable demand. During major event announcements, traffic can increase tenfold within minutes, but usage drops substantially afterward. The company wants infrastructure capacity to increase automatically during spikes and decrease when demand returns to normal. Which cloud capability MOST directly supports this requirement?",
    "options": [
      "Static provisioning, which allocates a fixed number of resources for the entire contract period.",
      "Geographic replication, which copies data across regions to support disaster recovery and local access.",
      "Elastic scalability, which automatically adjusts computing capacity in response to workload demand.",
      "Data deduplication, which removes repeated blocks from storage to reduce capacity consumption."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Cloud",
      "Computing",
      "Elastic",
      "Scalability"
    ],
    "reference": "Cloud Infrastructure; Scalability"
  },
  {
    "id": "INF-097",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A database administrator needs temporary elevated access to modify a production configuration during a scheduled maintenance window. Security policy requires the elevated permissions to expire automatically after the work is complete rather than remain permanently assigned. Which access-management approach BEST supports this requirement?",
    "options": [
      "Privileged access management with time-bound or just-in-time elevation of administrative permissions.",
      "A static IP reservation that ensures the administrator’s workstation receives the same address on each network connection.",
      "A virtual private network that encrypts all communication between the administrator and the production environment.",
      "A subnet mask that restricts which network addresses can communicate with the database server."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Network",
      "Security",
      "Least",
      "Privilege"
    ],
    "reference": "Infrastructure Security; Administrative Access"
  },
  {
    "id": "INF-098",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A web application experiences increasing demand. Rather than replacing one server with a larger and more expensive machine, the company adds several additional application servers behind a load balancer. Which scaling strategy is MOST directly being used?",
    "options": [
      "Vertical scaling, because the company is increasing memory and processor capacity within one existing server.",
      "Horizontal scaling, because the company is adding multiple servers to share application workload.",
      "Storage tiering, because the company is moving active data to higher-performance storage media.",
      "Network segmentation, because the company is separating application servers from database servers."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Server",
      "Infrastructure",
      "Horizontal",
      "Scaling"
    ],
    "reference": "Infrastructure Architecture; Scalability"
  },
  {
    "id": "INF-099",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company encrypts sensitive customer information in cloud storage. Security leaders want to reduce the risk that encrypted data could be exposed because keys are poorly protected, overused, or never rotated. Which practice MOST directly supports secure encryption-key management?",
    "options": [
      "Store encryption keys in the same database tables as the encrypted records so applications can retrieve both together.",
      "Share one long-term encryption key among all administrators to simplify recovery and troubleshooting.",
      "Use a managed key-management system with controlled access, key rotation, auditing, and separation from encrypted data.",
      "Disable encryption for low-volume files because encryption is necessary only for large storage environments."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Cryptography",
      "Encryption",
      "Key",
      "Management"
    ],
    "reference": "Infrastructure Security; Key Management"
  },
  {
    "id": "INF-100",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A healthcare organization wants stronger protection against accidental deletion, ransomware, hardware failure, and site-level disasters. Leadership requires at least three copies of critical data, stored on two different media types, with one copy kept off-site. Which backup principle is being applied?",
    "options": [
      "The 3-2-1 backup strategy.",
      "The recovery time objective model.",
      "The active-active availability model.",
      "The principle of network segmentation."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Backup",
      "Operations",
      "3-2-1",
      "Backup",
      "Strategy"
    ],
    "reference": "Business Continuity; Backup Design"
  },
  {
    "id": "INF-101",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A patient portal uses a browser-based interface for appointment scheduling, messaging, and access to sensitive medical information. The organization wants communications between the patient’s browser and the portal to be encrypted and authenticated using TLS. Which protocol should be used?",
    "options": [
      "HTTP",
      "HTTPS",
      "FTP",
      "Telnet"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Network",
      "Protocols",
      "HTTPS"
    ],
    "reference": "Networking Fundamentals; Secure Web Communication"
  },
  {
    "id": "INF-102",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company wants to detect customer-facing website problems before users report them. Monitoring tools periodically simulate key actions, such as loading the home page, signing in with a test account, searching for products, and submitting a test transaction. What monitoring approach is MOST directly being used?",
    "options": [
      "Passive log analysis, because the system reviews historical events generated by actual users and servers.",
      "Synthetic monitoring, because automated scripts simulate user interactions to test availability and performance.",
      "Capacity planning, because projected growth is used to estimate future hardware and network needs.",
      "Vulnerability scanning, because the tools identify unpatched software and insecure configuration settings."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Infrastructure",
      "Monitoring",
      "Synthetic",
      "Monitoring"
    ],
    "reference": "Infrastructure Operations; Availability Monitoring"
  },
  {
    "id": "INF-103",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "Which hardware component provides a computer or server with the physical or wireless interface required to connect to a network?",
    "options": [
      "Network interface card",
      "Hypervisor",
      "Power distribution unit",
      "Storage controller"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Network",
      "Interface",
      "Cards"
    ],
    "reference": "Networking Fundamentals; Network Hardware"
  },
  {
    "id": "INF-104",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A company uses the same hostname, intranet.company.com, for employees inside the corporate network and for remote employees accessing a secure external gateway. Internal users should receive a private IP address, while external users should receive a public address associated with the gateway. Which DNS design BEST supports this requirement?",
    "options": [
      "DNS forwarding, which sends unresolved internal queries to public recursive resolvers.",
      "Split-horizon DNS, which returns different DNS responses depending on whether the request originates internally or externally.",
      "DHCP failover, which allows multiple servers to provide address leases to internal devices.",
      "Link aggregation, which combines multiple Ethernet links into one logical network connection."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "DNS",
      "Architecture",
      "Split-Horizon",
      "DNS"
    ],
    "reference": "Network Services; DNS Design"
  },
  {
    "id": "INF-105",
    "category": "IT Infrastructure",
    "difficulty": "medium",
    "question": "A production application fails repeatedly because a network device intermittently drops traffic. The operations team restores service each time, but leadership wants a structured investigation into the underlying cause and permanent corrective actions to prevent recurrence. What activity is MOST directly needed?",
    "options": [
      "A routine change request to update the device configuration without investigating why failures occur.",
      "A disaster-recovery exercise to validate restoration of the entire data center after a catastrophic event.",
      "Root cause analysis and problem management to identify the underlying failure mechanism and prevent recurrence.",
      "Capacity planning to estimate future bandwidth requirements for the affected application."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Incident",
      "Response",
      "Root",
      "Cause",
      "Analysis"
    ],
    "reference": "Infrastructure Operations; Problem Management"
  },
  {
    "id": "ET-001",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A retail company wants to predict which customers are most likely to stop purchasing within the next three months. Analysts plan to train a model using prior purchase frequency, customer-service interactions, loyalty activity, and historical churn outcomes. Which type of artificial-intelligence approach is MOST directly being used?",
    "options": [
      "Supervised machine learning, because the model learns from historical examples with known outcomes.",
      "Unsupervised learning, because the model identifies natural groups without using labeled customer outcomes.",
      "Robotic process automation, because software bots perform repetitive customer-retention tasks.",
      "Blockchain, because customer records are stored in cryptographically linked transaction blocks."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Artificial",
      "Intelligence",
      "Machine",
      "Learning"
    ],
    "reference": "Emerging Technologies; Artificial Intelligence Fundamentals"
  },
  {
    "id": "ET-002",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A manufacturer installs sensors on assembly-line equipment to capture vibration, temperature, operating speed, and energy consumption. The company wants to identify developing equipment problems before machines fail and interrupt production. Which emerging-technology application is MOST directly represented?",
    "options": [
      "Virtual reality training, because operators can experience simulated maintenance scenarios before working on equipment.",
      "Internet of Things monitoring, because connected sensors collect operational data from physical equipment.",
      "Quantum computing, because the manufacturer is processing extremely complex mathematical calculations.",
      "Blockchain traceability, because maintenance records are automatically shared across a distributed ledger."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Internet",
      "of",
      "Things",
      "Sensor",
      "Networks"
    ],
    "reference": "Emerging Technologies; Internet of Things"
  },
  {
    "id": "ET-003",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A transportation company analyzes engine-temperature trends, maintenance history, mileage, and diagnostic-code patterns to estimate which vehicles are likely to require service soon. The goal is to schedule repairs before breakdowns occur. What business use of analytics is MOST directly illustrated?",
    "options": [
      "Descriptive analytics, because the company is summarizing completed maintenance activity from prior periods.",
      "Prescriptive analytics, because the system is automatically selecting and executing all repair actions without human involvement.",
      "Predictive analytics, because historical and current data are used to forecast likely future maintenance needs.",
      "Diagnostic analytics, because the organization is identifying the root cause of a completed mechanical failure."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Predictive",
      "Analytics",
      "Predictive",
      "Maintenance"
    ],
    "reference": "Emerging Technologies; Analytics Applications"
  },
  {
    "id": "ET-004",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "An insurance company receives thousands of standardized claim forms each week. Staff currently copy policy numbers, loss dates, claimant names, and payment amounts from the forms into a claims-management system. The process follows clear rules and requires limited judgment for most submissions. Which technology is MOST appropriate for automating this work?",
    "options": [
      "Robotic process automation, because software bots can execute repetitive, rules-based tasks across existing applications.",
      "Augmented reality, because employees can view claim details as digital overlays on physical documents.",
      "Reinforcement learning, because the system must learn optimal actions through repeated environmental feedback.",
      "Blockchain, because claims must be recorded as decentralized transactions visible to every participant."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Robotic",
      "Process",
      "Automation",
      "Rule-Based",
      "Workflows"
    ],
    "reference": "Emerging Technologies; Automation"
  },
  {
    "id": "ET-005",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A marketing team uses an AI system to draft product descriptions, generate campaign concepts, summarize customer feedback, and create initial versions of promotional emails. Employees review and revise the results before publication. Which capability MOST directly describes this use case?",
    "options": [
      "Computer vision, because the system analyzes image pixels to identify objects and patterns.",
      "Generative AI, because the system produces new text and content based on learned patterns.",
      "Edge computing, because the system performs all computation locally on retail-store devices.",
      "Digital-twin modeling, because the system creates a real-time virtual representation of a physical process."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Content",
      "Generation"
    ],
    "reference": "Emerging Technologies; Generative Artificial Intelligence"
  },
  {
    "id": "ET-006",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A lender develops a machine-learning model to prioritize loan applications for review. During evaluation, the model approves applicants from one demographic group at substantially higher rates than similarly qualified applicants from another group. What concern should the organization investigate MOST urgently?",
    "options": [
      "Model bias or unfairness, because the model may be producing systematically inequitable outcomes.",
      "Data compression, because the model may be storing applicant records inefficiently.",
      "Network latency, because applicants may experience slow response times when submitting forms.",
      "Blockchain immutability, because applicant data may not be editable after being entered."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Bias",
      "in",
      "AI",
      "Model",
      "Governance"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-007",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A food distributor wants suppliers, warehouses, transport providers, and retailers to record custody events for high-value products. Participants need a shared, tamper-evident history of where goods originated and how they moved through the supply chain. Which technology MOST directly supports this objective?",
    "options": [
      "A relational database managed by one retailer, because all supply-chain participants need unrestricted editing access.",
      "Blockchain or distributed-ledger technology, because linked records can provide a shared tamper-evident transaction history.",
      "Robotic process automation, because software bots can physically inspect products during shipment.",
      "Virtual reality, because participants can simulate the movement of goods through distribution centers."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Blockchain",
      "Distributed",
      "Ledgers"
    ],
    "reference": "Emerging Technologies; Blockchain Fundamentals"
  },
  {
    "id": "ET-008",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A field-service technician repairs complex imaging equipment at customer sites. The company wants technicians to see step-by-step repair instructions, component labels, and remote expert annotations overlaid onto their view of the physical machine. Which technology MOST directly supports this use case?",
    "options": [
      "Virtual reality, because the technician is fully immersed in a separate simulated environment.",
      "Augmented reality, because digital instructions and visual guidance are overlaid onto the real-world environment.",
      "Blockchain, because repair documentation must be stored in cryptographically linked transactions.",
      "Quantum computing, because repair instructions require advanced mathematical optimization."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Augmented",
      "Reality",
      "Operational",
      "Support"
    ],
    "reference": "Emerging Technologies; Augmented and Virtual Reality"
  },
  {
    "id": "ET-009",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A utility company creates a dynamic virtual model of a power-generation facility. The model receives data from equipment sensors and is used to test how changes in operating conditions may affect output, maintenance needs, and system reliability. What technology is MOST directly represented?",
    "options": [
      "A digital twin, because a virtual representation is linked to data from a real physical system.",
      "A chatbot, because the system communicates with engineers through natural-language responses.",
      "A blockchain ledger, because maintenance events are stored in an immutable sequence of records.",
      "A virtual private network, because plant data is transmitted securely across public networks."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Digital",
      "Twins",
      "Simulation"
    ],
    "reference": "Emerging Technologies; Digital Twin Technology"
  },
  {
    "id": "ET-010",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A manufacturing plant uses computer vision to identify defects on products moving quickly along a production line. Sending every camera frame to a distant cloud service creates delays that prevent timely removal of defective products. Which architecture BEST addresses this problem?",
    "options": [
      "Process image data near the production line using edge-computing devices, then send selected results to centralized systems.",
      "Store all video in an off-site archive before performing any analysis to reduce processing demands at the plant.",
      "Use a blockchain ledger to validate each image before determining whether a defect is present.",
      "Replace cameras with manual inspections because cloud-based analysis cannot support manufacturing environments."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Edge",
      "Computing",
      "Latency",
      "Reduction"
    ],
    "reference": "Emerging Technologies; Edge Computing"
  },
  {
    "id": "ET-011",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A university deploys a digital assistant that answers common student questions about registration deadlines, financial-aid forms, campus services, and course prerequisites. Students interact with the system by typing questions in ordinary language rather than selecting options from a fixed menu. Which AI capability is MOST directly involved?",
    "options": [
      "Natural language processing, because the system interprets and responds to human language.",
      "Computer vision, because the system identifies patterns within document images and photographs.",
      "Reinforcement learning, because the system controls physical devices based on rewards and penalties.",
      "Robotic process automation, because the system copies information between campus databases without interpreting text."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Natural",
      "Language",
      "Processing",
      "Conversational",
      "Interfaces"
    ],
    "reference": "Emerging Technologies; Natural Language Processing"
  },
  {
    "id": "ET-012",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A logistics company is exploring a technology that may eventually help solve certain highly complex optimization problems, such as selecting efficient routes across a massive number of interdependent delivery constraints. The technology uses quantum-mechanical principles rather than conventional binary computation. What technology is MOST directly described?",
    "options": [
      "Quantum computing",
      "Virtual reality",
      "Robotic process automation",
      "Internet of Things"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Quantum",
      "Computing",
      "Optimization"
    ],
    "reference": "Emerging Technologies; Quantum Computing Concepts"
  },
  {
    "id": "ET-013",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hospital uses a machine-learning model to identify patients who may be at elevated risk of readmission. Clinicians are reluctant to use the tool because it provides only a risk score without explaining which factors most influenced the recommendation. What improvement would MOST directly address this concern?",
    "options": [
      "Increase the model’s storage capacity so it can retain more historical patient information.",
      "Add explainability features that identify influential variables and provide understandable reasons for predictions.",
      "Move the model from cloud infrastructure to a local data center to avoid network delays.",
      "Replace all clinical data with de-identified historical summaries before generating risk scores."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Explainable",
      "AI",
      "Transparency"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-014",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A retailer wants to analyze security-camera footage to identify when checkout lanes become crowded and alert managers to open additional registers. The system must interpret visual scenes and recognize objects, people, and queue patterns in video frames. Which AI capability is MOST directly required?",
    "options": [
      "Natural language processing",
      "Computer vision",
      "Robotic process automation",
      "Blockchain validation"
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Computer",
      "Vision",
      "Image",
      "Classification"
    ],
    "reference": "Emerging Technologies; Computer Vision"
  },
  {
    "id": "ET-015",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Which term describes the dataset used to teach a machine-learning model to recognize patterns and make predictions before its performance is evaluated on separate validation or test data?",
    "options": [
      "Training data",
      "Production data",
      "Backup data",
      "Metadata"
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Recall",
      "Machine",
      "Learning",
      "Model",
      "Training"
    ],
    "reference": "Emerging Technologies; Machine Learning Fundamentals"
  },
  {
    "id": "ET-016",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A utility company wants to estimate each customer’s likely electricity usage next month based on weather forecasts, household size, prior consumption, appliance type, and seasonal patterns. The target outcome is a numerical value measured in kilowatt-hours rather than a category. Which machine-learning task is MOST directly represented?",
    "options": [
      "Classification, because customers must be assigned to predefined usage groups such as low, medium, or high.",
      "Regression, because the model predicts a continuous numerical outcome from input variables.",
      "Clustering, because the model identifies naturally occurring groups of customers without known labels.",
      "Reinforcement learning, because the model learns by receiving rewards for adjusting electricity consumption."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Supervised",
      "Learning",
      "Regression"
    ],
    "reference": "Emerging Technologies; Machine Learning Fundamentals"
  },
  {
    "id": "ET-017",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A retailer has purchase-history data for millions of customers but no predefined labels describing customer types. Analysts want to identify groups with similar buying patterns, such as frequent premium buyers, occasional discount shoppers, and seasonal purchasers, to support targeted marketing. Which analytical approach is MOST appropriate?",
    "options": [
      "Unsupervised clustering, because the method groups records based on similarities without requiring known outcome labels.",
      "Supervised classification, because the system should assign each customer to a category determined by prior labeled examples.",
      "Robotic process automation, because software bots can copy customer records into separate marketing-system tables.",
      "Reinforcement learning, because the retailer must reward customers for choosing preferred product categories."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Unsupervised",
      "Learning",
      "Clustering"
    ],
    "reference": "Emerging Technologies; Machine Learning Fundamentals"
  },
  {
    "id": "ET-018",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A fraud-detection model achieves extremely high accuracy on the transactions used to train it but performs poorly when evaluated on recent transactions from new customers. Analysts determine that the model learned highly specific patterns from the training data rather than generalizable fraud indicators. What problem is MOST directly illustrated?",
    "options": [
      "Underfitting, because the model is too simple to identify meaningful fraud patterns in any dataset.",
      "Data labeling, because new customer transactions were not manually assigned a fraud or nonfraud category.",
      "Feature engineering, because the model requires additional input variables before it can process new transactions.",
      "Overfitting, because the model fits training examples too closely and does not generalize well to unseen data."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Overfitting",
      "Model",
      "Generalization"
    ],
    "reference": "Emerging Technologies; Machine Learning Evaluation"
  },
  {
    "id": "ET-019",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A consumer-lending model was accurate when introduced two years ago. Since then, interest rates, customer spending behavior, and economic conditions have changed. The model’s approval predictions are becoming less reliable even though the software itself has not changed. What issue should the organization investigate MOST directly?",
    "options": [
      "Network latency, because slow model responses may cause staff to enter loan applications incorrectly.",
      "Data compression, because historical applicant records may occupy excessive storage capacity.",
      "Model or data drift, because relationships between input data and outcomes may have changed over time.",
      "Blockchain immutability, because the organization may be unable to modify previously approved lending decisions."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Model",
      "Drift",
      "Monitoring"
    ],
    "reference": "Emerging Technologies; AI Operations"
  },
  {
    "id": "ET-020",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A finance department uses an RPA bot to enter invoice data from standardized supplier files into an accounts-payable system. Most invoices are processed automatically, but the bot encounters an invoice with a missing purchase-order number and cannot determine the correct account. What is the MOST appropriate design response?",
    "options": [
      "Configure the bot to guess the most likely account code so invoices can continue processing without delays.",
      "Route the exception to a qualified employee for review while logging the issue for possible process improvement.",
      "Stop all invoice processing permanently because one incomplete document proves the process cannot be automated.",
      "Replace the bot with a blockchain ledger because distributed records eliminate missing purchase-order information."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Robotic",
      "Process",
      "Automation",
      "Exception",
      "Handling"
    ],
    "reference": "Emerging Technologies; Process Automation"
  },
  {
    "id": "ET-021",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A customer-support team uses a generative AI assistant to draft answers to policy questions. During testing, the assistant occasionally produces confident but incorrect statements about refund eligibility that are not supported by company policy. What risk is MOST directly illustrated?",
    "options": [
      "Hallucination, because the system generates plausible-sounding information that is inaccurate or unsupported.",
      "Data deduplication, because the system has removed repeated policy statements from its response database.",
      "Edge-computing failure, because the model is processing answers on a centralized cloud server.",
      "Digital-twin inconsistency, because the customer-support process is not accurately mirrored in a virtual environment."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Hallucinations"
    ],
    "reference": "Emerging Technologies; Generative AI Risks"
  },
  {
    "id": "ET-022",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A legal-services firm wants an internal AI assistant to answer employee questions using current company policies, approved templates, and recent procedure documents. The firm wants the assistant to retrieve relevant internal sources at the time of the question and use them to support its response rather than relying only on its general training. Which approach BEST supports this goal?",
    "options": [
      "Reinforcement learning, because the system should improve by receiving rewards whenever employees approve an answer.",
      "Computer vision, because policy documents should be interpreted primarily as images rather than text.",
      "Retrieval-augmented generation, because the model combines retrieved authoritative information with generated responses.",
      "Robotic process automation, because bots should copy policy documents into an employee-facing portal each day."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Retrieval-Augmented",
      "Generation",
      "Grounding"
    ],
    "reference": "Emerging Technologies; Generative AI Applications"
  },
  {
    "id": "ET-023",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hospital deploys an AI tool that prioritizes radiology studies for review. The organization requires clinicians to retain final decision authority, review high-risk recommendations, document overrides, and report unexpected model behavior. Which governance principle is MOST directly being applied?",
    "options": [
      "Full automation, because the model should make final clinical decisions without requiring human review.",
      "Data minimization, because the system should collect only the smallest possible number of imaging variables.",
      "Decentralized computing, because model decisions should be made separately on each imaging workstation.",
      "Human-in-the-loop oversight, because qualified professionals review and remain accountable for consequential decisions."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "AI",
      "Governance",
      "Human",
      "Oversight"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-024",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A manufacturer deploys thousands of internet-connected sensors across production facilities. Security staff discover that many devices use outdated firmware containing known vulnerabilities, and manual updating would be difficult at this scale. Which control would MOST directly reduce this risk?",
    "options": [
      "Disable all sensor data collection because devices cannot be secured while connected to production equipment.",
      "Implement secure centralized firmware-update management with device inventory, authentication, testing, and deployment controls.",
      "Move sensor data into a blockchain ledger because distributed storage automatically prevents firmware vulnerabilities.",
      "Use virtual reality training so maintenance personnel can visualize security issues before handling the devices."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Internet",
      "of",
      "Things",
      "Security",
      "Firmware",
      "Management"
    ],
    "reference": "Emerging Technologies; IoT Security"
  },
  {
    "id": "ET-025",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Several hospitals want to improve a model that predicts patient deterioration, but privacy restrictions make it difficult to pool identifiable patient records in one central repository. They want model training to benefit from data across institutions while keeping raw patient data at each hospital. Which approach is MOST appropriate?",
    "options": [
      "Federated learning, because institutions can train locally and share model updates rather than raw patient data.",
      "Centralized data warehousing, because all hospital records should be copied to a common repository before model development.",
      "Robotic process automation, because bots can move patient information between hospitals without requiring human review.",
      "Virtual reality simulation, because clinicians can test patient-deterioration scenarios in immersive digital environments."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Federated",
      "Learning",
      "Privacy-Preserving",
      "AI"
    ],
    "reference": "Emerging Technologies; Privacy-Preserving Machine Learning"
  },
  {
    "id": "ET-026",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A medical school wants students to practice responding to rare emergency scenarios in a fully simulated environment before they work with real patients. Students wear headsets and interact with computer-generated surroundings, equipment, and virtual patients rather than viewing overlays on the real world. Which technology is MOST directly represented?",
    "options": [
      "Augmented reality, because digital labels and instructions are displayed over physical training equipment.",
      "Digital-twin technology, because the school is modeling real-time sensor data from an operating emergency department.",
      "Virtual reality, because users are immersed in a computer-generated environment for training and simulation.",
      "Edge computing, because processing occurs near the training location to reduce network latency."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Virtual",
      "Reality",
      "Immersive",
      "Simulation"
    ],
    "reference": "Emerging Technologies; Augmented and Virtual Reality"
  },
  {
    "id": "ET-027",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A mining company operates autonomous equipment in remote locations with inconsistent internet connectivity. The equipment must make rapid safety decisions locally, while selected operational data can be uploaded later for enterprise analysis. Which architecture BEST supports this operational requirement?",
    "options": [
      "Send all sensor data continuously to a distant cloud environment and wait for centralized decisions before equipment responds.",
      "Use a blockchain ledger as the primary method for controlling the equipment’s real-time steering and braking functions.",
      "Store data only in a central relational database and prohibit local processing to maintain one authoritative source.",
      "Use edge computing to process time-sensitive data near the equipment while synchronizing selected information centrally."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Edge",
      "Computing",
      "Distributed",
      "Processing"
    ],
    "reference": "Emerging Technologies; Edge Computing"
  },
  {
    "id": "ET-028",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A shipping company wants payment to be released automatically to a carrier when a shipment reaches the destination, proof of delivery is recorded, and agreed temperature conditions were maintained during transit. The parties want the agreement’s logic to execute according to predefined conditions. What blockchain-related capability is MOST directly represented?",
    "options": [
      "A smart contract that executes predefined terms when verified conditions are met.",
      "A distributed denial-of-service service that filters malicious traffic before it reaches a shipping portal.",
      "A digital twin that simulates transportation routes and forecasts fuel consumption.",
      "A robotic process automation bot that copies delivery data between logistics applications."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Blockchain",
      "Smart",
      "Contracts"
    ],
    "reference": "Emerging Technologies; Blockchain Applications"
  },
  {
    "id": "ET-029",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A fitness application wants to offer personalized workout recommendations. Its development team proposes collecting detailed location history, contact lists, microphone recordings, and browsing data even though the recommendation engine requires only age range, fitness goals, activity history, and optional health metrics. Which principle should guide the organization MOST directly?",
    "options": [
      "Data replication, because additional copies of all available personal information improve system resilience.",
      "Data minimization, because the application should collect only information reasonably necessary for the stated purpose.",
      "Blockchain immutability, because all user information should be permanently recorded once it is collected.",
      "Full automation, because recommendation quality improves when users cannot control what information is gathered."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Privacy",
      "Data",
      "Minimization"
    ],
    "reference": "Emerging Technologies; Responsible Data Use"
  },
  {
    "id": "ET-030",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Which statement BEST describes a digital twin?",
    "options": [
      "A secure encrypted copy of an organization’s primary database retained for disaster-recovery purposes.",
      "A machine-learning model trained solely to predict customer behavior from historical transaction data.",
      "A dynamic virtual representation of a physical asset, process, or system that may use real-world data for monitoring and simulation.",
      "A distributed ledger that records transactions in cryptographically linked blocks across multiple participants."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Digital",
      "Twins"
    ],
    "reference": "Emerging Technologies; Digital Twin Technology"
  },
  {
    "id": "ET-031",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hospital develops a model that predicts whether a patient is at high risk of readmission. Lowering the model’s decision threshold identifies more potentially high-risk patients but also increases the number of false alerts sent to care managers. Which trade-off is MOST directly affected by changing the threshold?",
    "options": [
      "Sensitivity and specificity, because the balance between correctly identifying high-risk patients and avoiding false positives changes.",
      "Storage capacity and network bandwidth, because lower thresholds require larger patient records to be transmitted.",
      "Encryption strength and user authentication, because additional alerts require more secure access controls.",
      "Model-training duration and hardware cost, because threshold changes require retraining the model from scratch."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Classification",
      "Thresholds"
    ],
    "reference": "Emerging Technologies; Machine Learning Evaluation"
  },
  {
    "id": "ET-032",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company trains an image-analysis system to identify damaged packages in warehouse photographs. The system automatically learns complex visual patterns from many labeled examples without developers manually defining every edge, shape, and texture rule. Which approach is MOST directly represented?",
    "options": [
      "Rule-based expert systems, because analysts explicitly encode each visual decision rule into the application.",
      "Deep learning, because multilayer neural networks learn hierarchical patterns from large data sets.",
      "Robotic process automation, because software bots copy package images between warehouse systems.",
      "Blockchain, because package photographs are stored as cryptographically linked transaction records."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Deep",
      "Learning",
      "Neural",
      "Networks"
    ],
    "reference": "Emerging Technologies; Artificial Intelligence Fundamentals"
  },
  {
    "id": "ET-033",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A fraud model flags 1,000 transactions as suspicious. After investigation, 800 are confirmed fraudulent and 200 are legitimate. Which metric is MOST directly represented by the proportion of flagged transactions that were actually fraudulent?",
    "options": [
      "Recall",
      "Specificity",
      "Precision",
      "Accuracy"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Model",
      "Evaluation",
      "Precision"
    ],
    "reference": "Emerging Technologies; Machine Learning Metrics"
  },
  {
    "id": "ET-034",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company uses a generative AI assistant to draft customer-service responses. Managers find that vague prompts produce inconsistent results, while prompts that specify the customer context, desired tone, policy source, response format, and prohibited claims are more reliable. What practice is MOST directly improving output quality?",
    "options": [
      "Prompt engineering, because instructions are structured to guide the model toward more useful and constrained responses.",
      "Data compression, because shorter prompts reduce the amount of information processed by the model.",
      "Edge computing, because the prompt is being evaluated near the customer’s device.",
      "Reinforcement learning, because employees manually reward the model after every individual customer response."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Prompt",
      "Engineering"
    ],
    "reference": "Emerging Technologies; Generative AI Applications"
  },
  {
    "id": "ET-035",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A health insurer deploys an AI tool to help prioritize prior-authorization requests. Compliance leaders require documentation of intended use, training-data sources, performance limits, validation methods, known risks, responsible owners, and procedures for monitoring changes after deployment. What governance artifact is MOST directly needed?",
    "options": [
      "A network topology diagram showing how the AI platform connects to internal systems and cloud services.",
      "A model card or comparable model-documentation record describing purpose, performance, limitations, and governance controls.",
      "A blockchain ledger containing immutable copies of every prior-authorization request processed by the system.",
      "A disaster-recovery runbook describing how to restore the AI server after a data-center outage."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "AI",
      "Governance",
      "Model",
      "Documentation"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-036",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A bank receives scanned mortgage applications containing typed forms, handwritten annotations, and supporting financial documents. The bank wants to extract names, account numbers, income figures, and document types so employees do not need to retype most information manually. Which technology is MOST directly involved?",
    "options": [
      "Natural language generation, because the system creates original explanatory narratives from extracted data.",
      "Blockchain traceability, because each scanned document must be stored in a distributed ledger.",
      "Optical character recognition combined with document-intelligence techniques to identify and extract text from images.",
      "Virtual reality simulation, because employees need an immersive environment to review application forms."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Computer",
      "Vision",
      "Optical",
      "Character",
      "Recognition"
    ],
    "reference": "Emerging Technologies; Intelligent Document Processing"
  },
  {
    "id": "ET-037",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A warehouse is experimenting with an AI system that learns how to route autonomous robots through changing aisle conditions. The system receives positive feedback for completing deliveries quickly and safely and negative feedback for collisions, congestion, or missed deadlines. Which machine-learning approach is MOST directly represented?",
    "options": [
      "Reinforcement learning, because the system improves actions through rewards and penalties over repeated interactions.",
      "Supervised learning, because every robot movement is paired with a human-labeled correct route.",
      "Unsupervised clustering, because robots are grouped by similarity without receiving performance feedback.",
      "Robotic process automation, because the system performs fixed desktop tasks across warehouse applications."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Reinforcement",
      "Learning",
      "Optimization"
    ],
    "reference": "Emerging Technologies; Machine Learning Methods"
  },
  {
    "id": "ET-038",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A retailer uses computer vision to detect whether customers have placed items in a self-checkout bagging area. Security researchers show that small, carefully designed visual changes to product packaging can cause the model to misclassify an item even though it still looks normal to people. What threat is MOST directly illustrated?",
    "options": [
      "Data drift, because customer purchasing patterns change over time.",
      "An adversarial example, because intentionally crafted input causes the model to make an incorrect prediction.",
      "Overfitting, because the model achieved high training performance but low validation performance.",
      "Model inversion, because attackers reconstruct training records from model outputs."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "AI",
      "Security",
      "Adversarial",
      "Examples"
    ],
    "reference": "Emerging Technologies; AI Risks and Security"
  },
  {
    "id": "ET-039",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A fulfillment center deploys mobile robots that navigate warehouse aisles, avoid workers, retrieve inventory bins, and coordinate with order-management software. The robots use sensors and onboard decision logic but still operate under safety rules and human supervision. Which technology area is MOST directly represented?",
    "options": [
      "Robotic process automation, because desktop software bots move information between enterprise applications.",
      "Virtual reality, because workers are placed in simulated warehouse environments.",
      "Autonomous robotics, because physical machines sense, navigate, and act within a real-world environment.",
      "Blockchain, because inventory movements are stored as distributed, tamper-evident transactions."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Robotics",
      "Autonomous",
      "Systems"
    ],
    "reference": "Emerging Technologies; Intelligent Automation"
  },
  {
    "id": "ET-040",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hiring model is trained primarily on historical employee data from one geographic region and one job category. When expanded nationally across diverse roles, the organization finds that its recommendations are less reliable for groups that were underrepresented in the original training data. What issue is MOST directly implicated?",
    "options": [
      "Insufficient data representativeness, because the training set may not adequately reflect the populations and conditions where the model is used.",
      "Network congestion, because geographic expansion increases the amount of hiring data transmitted to the model.",
      "Blockchain inconsistency, because employee records may not be synchronized across decentralized nodes.",
      "Edge-computing limitations, because the model must run only on local office devices."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Responsible",
      "AI",
      "Data",
      "Representativeness"
    ],
    "reference": "Emerging Technologies; Bias and Fairness"
  },
  {
    "id": "ET-041",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A pharmaceutical distributor places temperature sensors and GPS trackers in shipments of biologic medications. The system automatically reports location and storage conditions throughout transit and alerts logistics staff if temperature limits are exceeded. What is the PRIMARY business benefit of this implementation?",
    "options": [
      "It eliminates the need for quality-assurance procedures because sensors guarantee products remain stable.",
      "It enables real-time supply-chain visibility and condition monitoring for sensitive shipments.",
      "It replaces all warehouse-management systems because location data can serve as the only inventory record.",
      "It prevents every transportation delay because GPS tracking automatically reroutes delivery vehicles."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Internet",
      "of",
      "Things",
      "Digital",
      "Supply",
      "Chains"
    ],
    "reference": "Emerging Technologies; IoT Applications"
  },
  {
    "id": "ET-042",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A legal firm asks a large language model to summarize thousands of pages of discovery documents in one request. The system cannot process the entire collection at once because it has a maximum amount of text it can consider in a single interaction. What limitation is MOST directly involved?",
    "options": [
      "Model bias, because the documents may contain uneven representation of legal cases.",
      "Hallucination, because the system may generate unsupported statements when summarizing documents.",
      "Context-window limitation, because the model can process only a finite amount of input and output text at one time.",
      "Data drift, because the legal documents were created at different points in time."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Large",
      "Language",
      "Models",
      "Token",
      "Limits"
    ],
    "reference": "Emerging Technologies; Generative AI Fundamentals"
  },
  {
    "id": "ET-043",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A public-health agency wants to publish statistics about disease prevalence by neighborhood while reducing the chance that someone could infer whether a specific person’s medical record was included in the underlying data. Which technique MOST directly supports this objective?",
    "options": [
      "Differential privacy, because controlled statistical noise can reduce the risk of identifying individual contributors.",
      "Edge computing, because neighborhood statistics are calculated on devices close to the data source.",
      "Blockchain, because immutable records prevent changes to public-health statistics after publication.",
      "Computer vision, because medical records must be converted to images before they can be analyzed."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Privacy-Enhancing",
      "Technologies",
      "Differential",
      "Privacy"
    ],
    "reference": "Emerging Technologies; Privacy and Analytics"
  },
  {
    "id": "ET-044",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company has deployed dozens of machine-learning models. Teams need repeatable processes for versioning data and models, automating testing and deployment, monitoring performance, detecting drift, and retraining when necessary. Which practice MOST directly supports this operational need?",
    "options": [
      "MLOps, because it applies lifecycle management, automation, monitoring, and governance practices to machine-learning systems.",
      "Robotic process automation, because bots can manually copy each trained model into a production server.",
      "Virtual reality, because developers need immersive simulations to view model performance metrics.",
      "Blockchain, because every model update must be permanently stored in a public distributed ledger."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "AI",
      "Lifecycle",
      "MLOps"
    ],
    "reference": "Emerging Technologies; AI Operations"
  },
  {
    "id": "ET-045",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Which task is MOST directly associated with natural language processing?",
    "options": [
      "Identifying defective parts from images captured by a manufacturing camera.",
      "Interpreting the meaning, structure, or sentiment of human-written and spoken language.",
      "Measuring vibration and temperature from connected industrial sensors.",
      "Simulating the behavior of a physical turbine using real-time operational data."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "Natural",
      "Language",
      "Processing"
    ],
    "reference": "Emerging Technologies; AI Fundamentals"
  },
  {
    "id": "ET-046",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hospital tests an AI model designed to identify patients at high risk for sepsis. The model correctly flags many patients who later develop sepsis, but it also misses several patients who do develop the condition. Which metric would MOST directly measure the model’s ability to identify actual sepsis cases?",
    "options": [
      "Precision, because it measures the proportion of flagged patients who truly developed sepsis.",
      "Recall, because it measures the proportion of actual sepsis cases correctly identified by the model.",
      "Specificity, because it measures the proportion of non-sepsis patients correctly classified as low risk.",
      "Accuracy, because it measures the total proportion of all predictions that are correct."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Confusion",
      "Matrix"
    ],
    "reference": "Emerging Technologies; Machine Learning Evaluation"
  },
  {
    "id": "ET-047",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A law firm uses generative AI to prepare first drafts of client correspondence. The firm requires attorneys to review factual statements, legal citations, client-specific details, and tone before any message is sent externally. What is the PRIMARY purpose of this requirement?",
    "options": [
      "To maintain human accountability and reduce the risk of inaccurate or inappropriate AI-generated content reaching clients.",
      "To prevent the AI system from learning from any future documents created by attorneys.",
      "To eliminate the need for information-security controls around confidential client data.",
      "To ensure every legal document can be processed without any use of automation."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Human",
      "Review"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-048",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A manufacturer deploys thousands of connected sensors in factories worldwide. Security staff want to ensure that only authorized devices can send data to the company’s monitoring platform and that compromised devices can be revoked quickly. Which control MOST directly supports this requirement?",
    "options": [
      "Store each device’s readings in a public blockchain so all factory employees can verify sensor output.",
      "Use shared credentials across all sensors to simplify device onboarding and maintenance.",
      "Assign unique device identities and certificates that can be authenticated, rotated, and revoked centrally.",
      "Disable remote connectivity after installation so sensor data is collected only through manual inspection."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Internet",
      "of",
      "Things",
      "Device",
      "Identity"
    ],
    "reference": "Emerging Technologies; IoT Security"
  },
  {
    "id": "ET-049",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A logistics company uses historical delivery data to forecast late shipments. It then evaluates available drivers, vehicle capacity, traffic conditions, customer priorities, and fuel costs to recommend the best corrective routing plan. Which type of analytics is MOST directly represented by the recommendation step?",
    "options": [
      "Descriptive analytics, because the company summarizes delivery performance from previous periods.",
      "Diagnostic analytics, because the company identifies why a past delivery delay occurred.",
      "Predictive analytics, because the company forecasts the likelihood of future late shipments.",
      "Prescriptive analytics, because the system recommends actions intended to improve outcomes."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Predictive",
      "Analytics",
      "Prescriptive",
      "Analytics"
    ],
    "reference": "Emerging Technologies; Analytics Applications"
  },
  {
    "id": "ET-050",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A financial institution deploys a machine-learning model for fraud detection. Auditors ask which data sources were used for training, when the data was collected, how labels were created, what cleaning steps were performed, and whether any records were excluded. What governance capability is MOST directly needed?",
    "options": [
      "Training-data provenance documentation showing the origin, preparation, transformations, and use of model data.",
      "A disaster-recovery plan describing how the fraud model will be restored after a system outage.",
      "A network topology map identifying the routers and switches that connect fraud-analysis systems.",
      "A virtual-reality simulation that allows auditors to observe how fraud analysts review alerts."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "AI",
      "Governance",
      "Data",
      "Provenance"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-051",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A warehouse uses cameras to monitor loading docks. The system must identify forklifts, pallets, workers, and delivery trucks within each video frame and indicate where each item is located. Which computer-vision task is MOST directly required?",
    "options": [
      "Image classification, because the system only needs to assign one label to the entire video frame.",
      "Object detection, because the system must identify multiple objects and determine their locations within images.",
      "Optical character recognition, because the system must extract text from shipping labels and invoices.",
      "Natural language processing, because the system must interpret spoken instructions from warehouse employees."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Computer",
      "Vision",
      "Object",
      "Detection"
    ],
    "reference": "Emerging Technologies; Computer Vision"
  },
  {
    "id": "ET-052",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A city uses an AI system to prioritize housing-inspection requests. Community advocates ask how the system was designed, who approved its use, what data influences recommendations, how residents can challenge decisions, and how performance will be monitored. What principle is MOST directly being requested?",
    "options": [
      "Algorithmic accountability, including transparent governance, oversight, and mechanisms to review or challenge consequential AI decisions.",
      "Data compression, so inspection records can be stored more efficiently in the city’s database.",
      "Edge computing, so all housing-inspection decisions occur on devices near city properties.",
      "Blockchain immutability, so inspection recommendations cannot be corrected after they are issued."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Digital",
      "Ethics",
      "Algorithmic",
      "Accountability"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-053",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "An autonomous delivery vehicle uses cameras, radar, GPS, lidar, and wheel sensors to determine its position, detect obstacles, and navigate safely through changing environments. What capability MOST directly enables the system to combine these different inputs into a more reliable understanding of its surroundings?",
    "options": [
      "Data deduplication, because repeated sensor readings are removed to reduce storage requirements.",
      "Sensor fusion, because information from multiple sensing technologies is combined to improve perception and decision-making.",
      "Robotic process automation, because software bots transfer vehicle data between logistics applications.",
      "Blockchain validation, because vehicle sensors must record each object as a distributed ledger transaction."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Autonomous",
      "Vehicles",
      "Sensor",
      "Fusion"
    ],
    "reference": "Emerging Technologies; Autonomous Systems"
  },
  {
    "id": "ET-054",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company connects a generative AI assistant to internal policy documents and workflow tools. During testing, a malicious user includes hidden instructions in an uploaded document attempting to make the assistant ignore its rules and disclose confidential content. What threat is MOST directly illustrated?",
    "options": [
      "Model drift, because real-world conditions have changed since the model was originally trained.",
      "Adversarial image manipulation, because visual changes cause a computer-vision system to misclassify objects.",
      "Prompt injection, because untrusted content attempts to override the system’s intended instructions or controls.",
      "Differential privacy failure, because statistical summaries may reveal whether an individual appears in training data."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "AI",
      "Security",
      "Prompt",
      "Injection"
    ],
    "reference": "Emerging Technologies; Generative AI Security"
  },
  {
    "id": "ET-055",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A bank develops a model to predict which customers may default on loans. Rather than using only raw transaction records, analysts derive features such as debt-to-income ratio, recent payment delinquency count, change in account balance, and credit-utilization trend. What activity are the analysts MOST directly performing?",
    "options": [
      "Feature engineering, because they are transforming raw data into informative variables for model training.",
      "Model deployment, because the trained algorithm is being released into a production lending workflow.",
      "Reinforcement learning, because the model learns from rewards and penalties based on lending outcomes.",
      "Robotic process automation, because bots are moving customer transactions into the analytics environment."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Feature",
      "Engineering"
    ],
    "reference": "Emerging Technologies; Model Development"
  },
  {
    "id": "ET-056",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "An architecture firm uses headsets that allow designers to see a proposed building model placed within a real construction site. Users can walk around the site, view virtual structural elements aligned with the real environment, and interact with digital design components. Which technology is MOST directly represented?",
    "options": [
      "Virtual reality, because users are completely immersed in a simulated environment with no real-world context.",
      "Mixed reality, because digital objects are integrated with and interact within the user’s physical environment.",
      "Blockchain, because building-design changes are stored as immutable distributed records.",
      "Digital twin technology, because real-time construction-sensor data is required for all virtual building models."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Extended",
      "Reality",
      "Mixed",
      "Reality"
    ],
    "reference": "Emerging Technologies; Augmented and Virtual Reality"
  },
  {
    "id": "ET-057",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A mobile health application collects optional activity, sleep, and nutrition data. Users can choose which data categories to share, withdraw permission later, and review how their information is used for personalized recommendations and research. Which privacy capability is MOST directly being implemented?",
    "options": [
      "Consent management, because users are given meaningful control over authorization, use, and withdrawal of personal-data sharing.",
      "Data replication, because multiple copies of health data are stored to support availability.",
      "Model compression, because recommendation algorithms are reduced in size for mobile-device deployment.",
      "Network segmentation, because mobile users are separated into different communication zones."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Data",
      "Privacy",
      "Consent",
      "Management"
    ],
    "reference": "Emerging Technologies; Privacy and Data Governance"
  },
  {
    "id": "ET-058",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A financial institution is assessing long-term security risks from advances in quantum computing. Leaders are concerned that some currently used public-key cryptographic methods may eventually become vulnerable to sufficiently capable quantum systems. What planning activity is MOST appropriate?",
    "options": [
      "Remove all encryption immediately because cryptographic methods cannot be updated after deployment.",
      "Begin evaluating post-quantum cryptography and develop a migration strategy for systems with long-lived sensitive data.",
      "Replace public-key cryptography with plaintext transmission because quantum computers cannot analyze unencrypted data.",
      "Move all customer records to blockchain storage because distributed ledgers automatically provide quantum-resistant encryption."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Quantum",
      "Computing",
      "Cryptography",
      "Risk"
    ],
    "reference": "Emerging Technologies; Quantum Computing Implications"
  },
  {
    "id": "ET-059",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Which task is MOST directly associated with natural language generation?",
    "options": [
      "Detecting tumors in radiology images using visual pattern recognition.",
      "Predicting a numerical sales forecast from historical revenue data.",
      "Producing coherent written or spoken language, such as a summary, response, or report draft.",
      "Grouping customers into segments based on similarities in purchasing patterns."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Natural",
      "Language",
      "Generation"
    ],
    "reference": "Emerging Technologies; Artificial Intelligence Fundamentals"
  },
  {
    "id": "ET-060",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company introduces an AI assistant to help employees draft reports and summarize meetings. Some employees worry that it will replace their jobs, while others use it inconsistently and do not understand its limitations. Which approach would MOST likely support responsible adoption?",
    "options": [
      "Require immediate mandatory use across all departments without training so employees become familiar through practice.",
      "Limit access to executives because general employees do not need to understand AI capabilities or risks.",
      "Provide training, clear usage policies, examples of appropriate workflows, feedback channels, and communication about human roles and accountability.",
      "Disable monitoring and governance so employees can experiment freely without operational restrictions."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "AI",
      "Adoption",
      "Change",
      "Management"
    ],
    "reference": "Emerging Technologies; Organizational Adoption"
  },
  {
    "id": "ET-061",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A retail company develops a demand-forecasting model using three separate data sets. One is used to train the model, another is used to compare alternative algorithms and tune settings, and a final untouched data set is reserved for evaluating expected real-world performance. What is the PRIMARY purpose of the second data set?",
    "options": [
      "To create backup copies of historical sales data before model training begins.",
      "To validate and tune the model before final testing on previously unseen data.",
      "To store model predictions after the forecasting system enters production.",
      "To replace the training data whenever the model encounters an unusual sales pattern."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Validation",
      "Sets"
    ],
    "reference": "Emerging Technologies; Machine Learning Evaluation"
  },
  {
    "id": "ET-062",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company deploys a generative AI assistant that can search internal strategy documents, employee records, and confidential financial reports. Security leaders want each user to receive only information they are authorized to access in the source systems. Which control is MOST important?",
    "options": [
      "Enforce identity-based access controls so retrieval results respect existing user permissions and data classifications.",
      "Allow the assistant to retrieve all internal documents so users receive the most complete possible answers.",
      "Replace confidential documents with public web sources so the assistant cannot return sensitive information.",
      "Disable audit logging because storing user prompts could reveal what information employees requested."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "AI",
      "Governance",
      "Access",
      "Controls"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-063",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A fraud model flags a legitimate customer purchase as suspicious, causing the transaction to be temporarily blocked. The customer later confirms that the purchase was valid. How should this model outcome be classified?",
    "options": [
      "True positive",
      "False negative",
      "False positive",
      "True negative"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Predictive",
      "Models",
      "False",
      "Positives"
    ],
    "reference": "Emerging Technologies; Machine Learning Evaluation"
  },
  {
    "id": "ET-064",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company’s internal AI assistant sometimes gives incomplete answers because it retrieves outdated policy documents instead of the current approved versions. The language model itself performs well when provided with the correct sources. Which improvement would MOST directly address the problem?",
    "options": [
      "Increase the model’s temperature so responses become more diverse and less repetitive.",
      "Improve document governance, indexing, version control, and retrieval ranking for authoritative current sources.",
      "Disable all retrieval and rely only on the model’s general pretraining knowledge.",
      "Replace the assistant with robotic process automation to eliminate all document-search functions."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Retrieval",
      "Quality"
    ],
    "reference": "Emerging Technologies; Retrieval-Augmented Generation"
  },
  {
    "id": "ET-065",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A radiology AI system must not only identify whether an abnormality is present on an image but also outline the exact pixels corresponding to the suspected lesion. Which computer-vision task is MOST directly required?",
    "options": [
      "Image classification, because the system assigns one overall label to the image.",
      "Object detection, because the system identifies bounding boxes around multiple objects.",
      "Optical character recognition, because the system extracts text labels embedded in the image.",
      "Image segmentation, because the system assigns labels to individual pixels or regions."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Computer",
      "Vision",
      "Image",
      "Segmentation"
    ],
    "reference": "Emerging Technologies; Computer Vision"
  },
  {
    "id": "ET-066",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A manufacturer collects vibration, temperature, and power-consumption data from industrial pumps. The company uses these readings to identify equipment showing early warning signs before failure occurs. Which business benefit is MOST directly supported?",
    "options": [
      "Predictive maintenance that helps reduce unplanned downtime and schedule service proactively.",
      "Data archival that ensures all equipment records are permanently retained without modification.",
      "Virtual reality training that immerses maintenance staff in simulated factory environments.",
      "Blockchain settlement that automatically releases vendor payments after each pump operates."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Internet",
      "of",
      "Things",
      "Predictive",
      "Maintenance"
    ],
    "reference": "Emerging Technologies; IoT Applications"
  },
  {
    "id": "ET-067",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hospital introduces an AI tool that suggests possible diagnoses from imaging studies. Some clinicians begin accepting the tool’s recommendations without carefully reviewing the images or considering conflicting patient information. What risk is MOST directly illustrated?",
    "options": [
      "Model compression, because the AI system may have been reduced in size for faster deployment.",
      "Automation bias, because users may place excessive trust in automated recommendations.",
      "Data minimization, because the system may rely on too few patient variables.",
      "Quantum vulnerability, because image-analysis systems may depend on cryptographic algorithms."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "AI",
      "Ethics",
      "Automation",
      "Bias"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-068",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A consortium of manufacturers, distributors, and regulators wants to share supply-chain records. Only approved organizations should be able to participate, validate transactions, and view sensitive shipment details. Which blockchain model is MOST appropriate?",
    "options": [
      "A public permissionless blockchain open to any participant on the internet.",
      "A centralized spreadsheet maintained independently by each organization.",
      "A permissioned blockchain with controlled membership and defined participant roles.",
      "A peer-to-peer file-sharing network without identity verification or transaction validation."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Blockchain",
      "Permissioned",
      "Networks"
    ],
    "reference": "Emerging Technologies; Blockchain Applications"
  },
  {
    "id": "ET-069",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A smart-home device uses voice commands to control lighting and security settings. The manufacturer wants simple voice commands to be processed locally when possible to reduce response delays and minimize transmission of sensitive audio to cloud systems. Which approach BEST supports this objective?",
    "options": [
      "Use edge AI to perform appropriate voice processing on the local device before sending only necessary information to the cloud.",
      "Send all recordings continuously to a centralized cloud platform for processing and permanent retention.",
      "Store all audio files on a public blockchain to create a tamper-evident history of home commands.",
      "Use robotic process automation to copy audio files manually between the device and cloud storage."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Edge",
      "AI",
      "Privacy",
      "and",
      "Latency"
    ],
    "reference": "Emerging Technologies; Edge Computing"
  },
  {
    "id": "ET-070",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company’s customer-churn model was accurate at launch, but its precision and recall have declined over several months. The organization wants to detect the problem early and determine whether retraining or threshold adjustment is needed. What should the company implement?",
    "options": [
      "Continuous model monitoring using production performance metrics, drift indicators, and defined review thresholds.",
      "A one-time backup of the original training data so the model can be restored after a server failure.",
      "A blockchain ledger containing all model predictions so outputs cannot be changed after generation.",
      "A virtual-reality dashboard that allows executives to explore customer behavior in an immersive environment."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Model",
      "Monitoring",
      "Performance",
      "Degradation"
    ],
    "reference": "Emerging Technologies; MLOps"
  },
  {
    "id": "ET-071",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company is considering automation for four processes. Which process is MOST suitable for robotic process automation?",
    "options": [
      "Negotiating complex contract terms that require legal interpretation and relationship judgment.",
      "Determining which new product concepts will succeed in an uncertain consumer market.",
      "Reviewing standardized forms and copying clearly defined values between two stable business systems.",
      "Resolving sensitive employee complaints that require empathy, context, and discretionary decisions."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Robotic",
      "Process",
      "Automation",
      "Process",
      "Suitability"
    ],
    "reference": "Emerging Technologies; Automation Strategy"
  },
  {
    "id": "ET-072",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "An employee pastes confidential source code into a public generative AI service to request debugging help. The organization has not approved the service for proprietary information. What is the MOST significant concern?",
    "options": [
      "The employee may expose confidential intellectual property outside approved organizational controls.",
      "The model will automatically convert the code into a blockchain smart contract.",
      "The request will prevent the organization from using any automated code-review tools in the future.",
      "The public service will always produce a more accurate response than an internally governed AI platform."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Data",
      "Leakage"
    ],
    "reference": "Emerging Technologies; AI Security and Privacy"
  },
  {
    "id": "ET-073",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A city develops a virtual model of its water-distribution network that incorporates sensor readings, pressure data, maintenance history, and demand forecasts. Engineers use the model to test how pipe closures or pump failures could affect service before making physical changes. What is the PRIMARY value of this use case?",
    "options": [
      "It creates an immutable legal record of water-system transactions for external regulators.",
      "It supports simulation and informed operational decision-making using a data-connected representation of the physical network.",
      "It eliminates the need for physical sensors because all conditions can be predicted from historical records.",
      "It replaces all engineering expertise by allowing the virtual model to make infrastructure decisions automatically."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Digital",
      "Twins",
      "Scenario",
      "Analysis"
    ],
    "reference": "Emerging Technologies; Digital Twin Technology"
  },
  {
    "id": "ET-074",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Which description BEST defines explainable AI?",
    "options": [
      "AI designed to operate only on local devices without cloud connectivity.",
      "AI that creates new text, images, or audio from learned patterns.",
      "AI whose outputs can be interpreted or explained in ways that help users understand influential factors and reasoning.",
      "AI that stores decisions in cryptographically linked blocks so records cannot be altered."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Explainable",
      "AI"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-075",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company has developed an AI model for prioritizing customer-support tickets. Before deployment, leaders want confirmation that the model has acceptable performance, documented limitations, security controls, monitoring plans, escalation procedures, and accountable owners. What process is MOST directly needed?",
    "options": [
      "A production-readiness and governance review before operational deployment.",
      "A data-archiving process that transfers all original training records to long-term storage.",
      "A network-capacity test that measures only the bandwidth available to the support center.",
      "A blockchain audit that permanently records every support ticket before the model evaluates it."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Responsible",
      "AI",
      "Deployment",
      "Readiness"
    ],
    "reference": "Emerging Technologies; AI Governance"
  },
  {
    "id": "ET-076",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A bank trains a fraud-detection model using transaction records. Only 0.2% of transactions are fraudulent, so a model that predicts “not fraud” for every transaction appears highly accurate but fails to identify actual fraud. Which evaluation approach would MOST directly provide a more meaningful assessment?",
    "options": [
      "Examine metrics such as precision, recall, and area under the precision-recall curve in addition to overall accuracy.",
      "Remove all legitimate transactions from the data set so the model is trained only on confirmed fraud cases.",
      "Evaluate only the model’s storage usage because rare-event classification primarily depends on database efficiency.",
      "Replace the fraud model with a blockchain ledger because immutable records eliminate class imbalance."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Class",
      "Imbalance"
    ],
    "reference": "Emerging Technologies; Machine Learning Evaluation"
  },
  {
    "id": "ET-077",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A communications team uses a generative AI system to draft formal regulatory notices. They want responses to be consistent, conservative, and less likely to vary substantially when the same prompt is used repeatedly. Which configuration adjustment would MOST directly support this goal?",
    "options": [
      "Increase the context window so the model can consider more prior conversation content.",
      "Use a lower temperature setting to reduce randomness in token selection and produce more predictable outputs.",
      "Enable image generation so the model can visualize the required regulatory language before drafting text.",
      "Increase the number of retrieved documents regardless of relevance so the model has more content to summarize."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Temperature",
      "Settings"
    ],
    "reference": "Emerging Technologies; Generative AI Fundamentals"
  },
  {
    "id": "ET-078",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A city plans to use an AI system to prioritize inspections of rental properties. Before deployment, officials want to evaluate potential effects on fairness, privacy, accessibility, affected communities, legal obligations, and opportunities for appeal. What process is MOST directly appropriate?",
    "options": [
      "A capacity-planning exercise to estimate cloud-computing resources required during periods of high inspection demand.",
      "A disaster-recovery review to determine how the system will be restored after a server outage.",
      "An algorithmic impact assessment to identify potential social, ethical, legal, and operational consequences.",
      "A network segmentation project to separate inspection tablets from administrative systems."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "AI",
      "Governance",
      "Impact",
      "Assessment"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-079",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "An insurance company receives thousands of scanned repair estimates containing printed fields, handwritten notes, and itemized costs. The company wants to convert readable text into searchable digital data before employees review exceptions. Which technology is MOST directly required?",
    "options": [
      "Reinforcement learning, because the system must optimize inspection actions through rewards and penalties.",
      "Digital-twin technology, because the repair estimate should become a virtual representation of a physical vehicle.",
      "Blockchain, because every extracted field must be stored in a tamper-evident distributed ledger.",
      "Optical character recognition, because text in document images must be converted into machine-readable characters."
    ],
    "correctAnswer": 3,
    "conceptCoverage": [
      "Computer",
      "Vision",
      "Optical",
      "Character",
      "Recognition"
    ],
    "reference": "Emerging Technologies; Intelligent Document Processing"
  },
  {
    "id": "ET-080",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A retail company continuously retrains a product-recommendation model using customer interactions. Security analysts discover that an attacker has created large volumes of fake accounts and manipulated ratings to influence which products the system recommends. What threat is MOST directly illustrated?",
    "options": [
      "Data poisoning, because malicious or manipulated training data is intended to alter model behavior.",
      "Model compression, because the recommendation model has been reduced in size for lower-cost deployment.",
      "Differential privacy, because controlled statistical noise is being added to protect customer identities.",
      "Edge computing, because recommendation calculations are occurring close to retail locations."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "AI",
      "Security",
      "Data",
      "Poisoning"
    ],
    "reference": "Emerging Technologies; AI Risks and Security"
  },
  {
    "id": "ET-081",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A logistics company deploys connected trackers on reusable shipping containers. Over time, some devices are lost, some are reassigned, and others are retired after battery failures. The company needs a process for tracking ownership, security status, configuration, firmware version, and decommissioning. What capability is MOST directly needed?",
    "options": [
      "A virtual-reality simulation environment for visualizing the movement of shipping containers through warehouses.",
      "IoT device lifecycle management covering inventory, provisioning, monitoring, updating, reassignment, and retirement.",
      "A public blockchain that allows any external organization to modify container ownership records.",
      "Robotic process automation that copies tracker coordinates into spreadsheets at the end of each day."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Internet",
      "of",
      "Things",
      "Device",
      "Lifecycle",
      "Management"
    ],
    "reference": "Emerging Technologies; IoT Operations"
  },
  {
    "id": "ET-082",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hotel chain wants to analyze thousands of guest reviews to identify whether comments about cleanliness, staff service, breakfast, or room condition are generally positive, negative, or neutral. Which natural-language-processing task is MOST directly appropriate?",
    "options": [
      "Named entity recognition, because the system must identify people, locations, and organizations mentioned in reviews.",
      "Machine translation, because reviews must be converted from one language to another before analysis.",
      "Sentiment analysis, because the system evaluates the emotional or evaluative tone expressed in text.",
      "Optical character recognition, because customer reviews are always submitted as scanned documents."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Natural",
      "Language",
      "Processing",
      "Sentiment",
      "Analysis"
    ],
    "reference": "Emerging Technologies; Natural Language Processing"
  },
  {
    "id": "ET-083",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A factory creates a virtual model of a production line that receives live telemetry from machines, inventory systems, and energy meters. Supervisors use the model to identify bottlenecks and test changes to line speed before altering physical equipment. What distinguishes this system from a static simulation?",
    "options": [
      "It uses real-time or near-real-time operational data from the physical environment to update the virtual representation.",
      "It stores all production events in a public distributed ledger that cannot be changed after entry.",
      "It replaces all physical sensors because the virtual model can estimate equipment behavior without actual data.",
      "It can operate only after the production line has been fully shut down for maintenance."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Digital",
      "Twins",
      "Real-Time",
      "Operations"
    ],
    "reference": "Emerging Technologies; Digital Twin Technology"
  },
  {
    "id": "ET-084",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A design firm uses a generative AI image tool to create marketing concepts. Legal counsel is concerned that outputs could resemble protected work or that prompts may include copyrighted client materials. Which action MOST directly supports responsible use?",
    "options": [
      "Assume all generated images are automatically free of intellectual-property concerns because they were produced by software.",
      "Establish review procedures and usage policies addressing training-data uncertainty, prompt handling, licensing, attribution, and output review.",
      "Prohibit employees from keeping records of which prompts or source materials were used for generated content.",
      "Publish all internal client materials on public websites so the AI system can access them more easily."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Copyright",
      "and",
      "Intellectual",
      "Property"
    ],
    "reference": "Emerging Technologies; AI Governance"
  },
  {
    "id": "ET-085",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hospital develops a model to predict whether patients will be readmitted within 30 days. During development, analysts accidentally include a field documenting a follow-up intervention that is created only after discharge planning has begun. The model performs extremely well in testing but cannot use that field at the intended time of prediction. What issue is MOST directly illustrated?",
    "options": [
      "Class imbalance, because too few readmitted patients are represented in the training set.",
      "Model drift, because the relationship between patient information and readmission outcomes changes over time.",
      "Feature leakage, because the model uses information that would not legitimately be available at prediction time.",
      "Transfer learning, because knowledge learned from one task is being applied to another related task."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Feature",
      "Leakage"
    ],
    "reference": "Emerging Technologies; Model Development"
  },
  {
    "id": "ET-086",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A manufacturer introduces collaborative robots that work near employees to assist with repetitive lifting and assembly tasks. The robots use sensors to slow or stop when people enter defined safety zones, while human workers remain responsible for quality judgment and complex adjustments. What approach is MOST directly represented?",
    "options": [
      "Fully autonomous automation, because human workers are removed from all production decisions.",
      "Robotic process automation, because software bots enter assembly data into enterprise applications.",
      "Human-robot collaboration, because physical robots assist people while safety controls and human oversight remain in place.",
      "Blockchain automation, because manufacturing actions are recorded as cryptographically linked transactions."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Robotics",
      "Human-Robot",
      "Collaboration"
    ],
    "reference": "Emerging Technologies; Intelligent Automation"
  },
  {
    "id": "ET-087",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A financial consortium wants to perform limited calculations on encrypted account data without exposing the underlying values to the analytics provider. Which privacy-preserving technology concept is MOST directly relevant?",
    "options": [
      "Homomorphic encryption, because certain computations can be performed on encrypted data without first decrypting it.",
      "Data masking, because values are permanently replaced with partial characters for display to users.",
      "Network address translation, because internal account addresses are hidden from public internet systems.",
      "Blockchain consensus, because distributed participants validate transactions through agreement mechanisms."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Privacy-Enhancing",
      "Technologies",
      "Homomorphic",
      "Encryption"
    ],
    "reference": "Emerging Technologies; Privacy and Security"
  },
  {
    "id": "ET-088",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "An organization’s internal AI assistant answers policy questions by retrieving approved documents. Employees want to verify where each answer came from and quickly inspect the relevant source passage. Which design feature MOST directly supports this need?",
    "options": [
      "Higher model temperature, so the assistant generates a wider variety of policy interpretations.",
      "Source citations and links to retrieved passages accompanying the generated response.",
      "A larger image-generation model that can create visual summaries of policy documents.",
      "A blockchain ledger that prevents any policy document from being revised after publication."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Retrieval",
      "Citations"
    ],
    "reference": "Emerging Technologies; Retrieval-Augmented Generation"
  },
  {
    "id": "ET-089",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company replaces an older credit-risk model with a newer version. The previous model should no longer make production decisions, but the organization must preserve relevant records, validation evidence, decision history, and documentation for audit purposes. What process is MOST directly needed?",
    "options": [
      "Model retirement or decommissioning with controlled shutdown, archival documentation, and audit retention.",
      "Data augmentation, because the old model should be retrained with additional customer records before removal.",
      "Prompt engineering, because the old model should be given more specific written instructions before deployment ends.",
      "Edge deployment, because the retired model should be moved from cloud servers to local branch devices."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "AI",
      "Governance",
      "Model",
      "Retirement"
    ],
    "reference": "Emerging Technologies; AI Lifecycle Management"
  },
  {
    "id": "ET-090",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Which statement BEST describes reinforcement learning?",
    "options": [
      "A model learns from labeled examples in which each input has a known correct answer.",
      "A model groups similar records without predefined category labels.",
      "A model learns by interacting with an environment and adjusting actions based on rewards or penalties.",
      "A model generates new text, images, or audio by predicting patterns in training data."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Recall",
      "Reinforcement",
      "Learning"
    ],
    "reference": "Emerging Technologies; Machine Learning Fundamentals"
  },
  {
    "id": "ET-091",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A hospital develops a model that assigns patients a predicted 20% risk of readmission. Leaders want to know whether, across many similar patients, approximately 20% actually return within 30 days. Which model-quality concept is MOST directly being evaluated?",
    "options": [
      "Calibration, because predicted probabilities should correspond closely to observed outcome frequencies.",
      "Recall, because the model should identify as many readmitted patients as possible.",
      "Data minimization, because only variables necessary for prediction should be collected.",
      "Model compression, because the model should use fewer parameters when deployed."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Calibration"
    ],
    "reference": "Emerging Technologies; Machine Learning Evaluation"
  },
  {
    "id": "ET-092",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A human-resources department uses a generative AI tool to draft job descriptions. To improve consistency, the department creates an approved prompt template that always specifies the job title, required qualifications, inclusive-language rules, formatting requirements, and prohibited claims. What is the PRIMARY benefit of this approach?",
    "options": [
      "It eliminates the need for managers to review generated job descriptions before publication.",
      "It provides repeatable instructions that constrain outputs and improve consistency across similar tasks.",
      "It prevents the AI model from using any language patterns learned during prior training.",
      "It guarantees that every generated job description will comply with all employment laws in every jurisdiction."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Prompt",
      "Templates"
    ],
    "reference": "Emerging Technologies; Generative AI Applications"
  },
  {
    "id": "ET-093",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company deploys a facial-recognition access system at multiple facilities. Testing shows lower identification accuracy for certain demographic groups because those groups were underrepresented in the training images. What action is MOST appropriate before broader deployment?",
    "options": [
      "Increase the system’s camera resolution and assume improved hardware will eliminate training-data limitations.",
      "Disable all audit logging because demographic performance comparisons could create compliance concerns.",
      "Reassess data representativeness, evaluate subgroup performance, and mitigate unfair disparities before deployment.",
      "Replace all employee photographs with text-based identity records so no machine-learning system is needed."
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Computer",
      "Vision",
      "Model",
      "Bias"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-094",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A manufacturing company uses edge devices to process machine-sensor data locally. Security leaders want to reduce the chance that a compromised edge gateway can be used to access central production systems. Which control MOST directly supports this objective?",
    "options": [
      "Configure the gateway to store all sensor data permanently in local memory without transmitting it to other systems.",
      "Use network segmentation, device authentication, least-privilege access, and secure remote-management controls.",
      "Allow all edge devices to share one administrator account so maintenance staff can troubleshoot them quickly.",
      "Disable software updates because firmware changes can introduce operational instability."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Internet",
      "of",
      "Things",
      "Edge",
      "Security"
    ],
    "reference": "Emerging Technologies; IoT Security"
  },
  {
    "id": "ET-095",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A commercial airline uses a virtual model of an aircraft engine that receives sensor readings from active flights. Engineers simulate different operating conditions to estimate component wear and determine the best time for maintenance. Which outcome is MOST directly supported by this digital-twin application?",
    "options": [
      "Improved predictive maintenance decisions based on simulated and real-time engine behavior.",
      "Replacement of all physical inspections because virtual models make mechanical wear irrelevant.",
      "Permanent storage of flight data in an unchangeable blockchain ledger.",
      "Elimination of the need for aircraft sensors because the model can generate its own operating data."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Digital",
      "Twins",
      "Predictive",
      "Simulation"
    ],
    "reference": "Emerging Technologies; Digital Twin Technology"
  },
  {
    "id": "ET-096",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A legal-services firm processes thousands of contracts and wants to automatically identify company names, dates, monetary amounts, jurisdictions, and individual names within each document. Which natural-language-processing task is MOST directly required?",
    "options": [
      "Sentiment analysis",
      "Machine translation",
      "Named entity recognition",
      "Topic modeling"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Natural",
      "Language",
      "Processing",
      "Named",
      "Entity",
      "Recognition"
    ],
    "reference": "Emerging Technologies; Natural Language Processing"
  },
  {
    "id": "ET-097",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A financial institution uses an AI system to recommend whether unusual transactions should be escalated for investigation. Compliance officers want records showing the model version used, input data references, recommendation generated, reviewer decision, overrides, and timestamp. What control is MOST directly needed?",
    "options": [
      "A model audit trail that records relevant inputs, outputs, versions, human actions, and decision history.",
      "A virtual private network that encrypts network traffic between analysts and the AI platform.",
      "A data lake that stores every raw transaction without metadata or retention controls.",
      "A generative AI prompt template that standardizes how analysts ask follow-up questions."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "AI",
      "Governance",
      "Audit",
      "Logging"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-098",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A mortgage company receives scanned applications containing typed forms, checkboxes, signatures, and supporting pay stubs. It wants a workflow that can classify documents, extract fields, validate information against business rules, and send uncertain cases to human reviewers. Which solution BEST fits this need?",
    "options": [
      "A traditional spreadsheet workflow in which employees manually enter all fields from each document.",
      "Intelligent document processing that combines document recognition, extraction, validation, and exception routing.",
      "A blockchain network that stores scanned files as immutable distributed records.",
      "A virtual-reality environment that allows underwriters to inspect documents in three dimensions."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Automation",
      "Intelligent",
      "Document",
      "Processing"
    ],
    "reference": "Emerging Technologies; Automation Applications"
  },
  {
    "id": "ET-099",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company has a computer-vision model already trained on millions of general images. It wants to adapt the model for identifying defects in a smaller collection of specialized manufacturing images rather than training an entirely new model from scratch. Which technique is MOST directly represented?",
    "options": [
      "Data deduplication",
      "Reinforcement learning",
      "Transfer learning",
      "Differential privacy"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Transfer",
      "Learning"
    ],
    "reference": "Emerging Technologies; Model Development"
  },
  {
    "id": "ET-100",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A company wants a language model to produce internal support responses that consistently use its approved terminology, product names, and service style. It has a curated set of high-quality example interactions and wants to adapt an existing base model using those examples. What approach is MOST directly described?",
    "options": [
      "Fine-tuning, because an existing model is further adapted using organization-specific examples.",
      "Edge computing, because the model is moved to a device near the support representative.",
      "Blockchain validation, because support responses are stored in linked cryptographic records.",
      "Optical character recognition, because customer conversations are converted from scanned text into digital data."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Generative",
      "AI",
      "Fine-Tuning"
    ],
    "reference": "Emerging Technologies; Generative AI Applications"
  },
  {
    "id": "ET-101",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A warehouse uses autonomous mobile robots to transport inventory. Before deployment, safety engineers require speed limits, emergency-stop controls, obstacle detection, designated travel zones, and procedures for human workers entering robot operating areas. What is the PRIMARY purpose of these requirements?",
    "options": [
      "To improve the robots’ ability to generate natural-language explanations for warehouse staff.",
      "To establish operational safety controls that reduce the risk of collisions and unsafe human-robot interactions.",
      "To ensure all robot movement records are stored in a public distributed ledger.",
      "To eliminate the need for warehouse supervisors to monitor automated operations."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Robotics",
      "Safety",
      "Systems"
    ],
    "reference": "Emerging Technologies; Autonomous Systems"
  },
  {
    "id": "ET-102",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A health organization releases a data set with names and medical-record numbers removed. Researchers later determine that combinations of age, ZIP code, admission date, and diagnosis could potentially be linked with external sources to identify individuals. What risk is MOST directly illustrated?",
    "options": [
      "Model drift",
      "Prompt injection",
      "Re-identification risk",
      "Overfitting"
    ],
    "correctAnswer": 2,
    "conceptCoverage": [
      "AI",
      "Privacy",
      "Re-Identification",
      "Risk"
    ],
    "reference": "Emerging Technologies; Privacy and Data Protection"
  },
  {
    "id": "ET-103",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A consortium blockchain includes several approved organizations that maintain copies of a shared ledger. Before a new transaction is added, the network follows agreed rules to determine whether participants accept the transaction as valid. What process is MOST directly being used?",
    "options": [
      "Consensus, because participants use agreed validation procedures to confirm ledger updates.",
      "Data normalization, because transaction records are divided into separate relational tables.",
      "Edge processing, because every transaction is evaluated only on local devices.",
      "Robotic process automation, because software bots move transactions between consortium members."
    ],
    "correctAnswer": 0,
    "conceptCoverage": [
      "Blockchain",
      "Consensus",
      "Mechanisms"
    ],
    "reference": "Emerging Technologies; Blockchain Fundamentals"
  },
  {
    "id": "ET-104",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "A bank uses an AI model to recommend credit-limit adjustments. Relationship managers need to explain to customers why a recommendation was made without disclosing proprietary model code or exposing sensitive data about other customers. Which capability BEST supports this requirement?",
    "options": [
      "A larger training data set that removes the need to explain model recommendations.",
      "Explainability methods that provide understandable feature-level reasons for an individual recommendation.",
      "A blockchain ledger that permanently records every credit-limit change.",
      "A virtual-reality interface that lets relationship managers visualize customer account activity."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Machine",
      "Learning",
      "Explainability",
      "for",
      "Stakeholders"
    ],
    "reference": "Emerging Technologies; Responsible AI"
  },
  {
    "id": "ET-105",
    "category": "Emerging Technologies",
    "difficulty": "medium",
    "question": "Which statement BEST describes artificial intelligence?",
    "options": [
      "Technology that provides only faster storage and processing for conventional databases.",
      "A set of technologies that enables systems to perform tasks commonly associated with human cognition, such as learning, reasoning, perception, and language understanding.",
      "A networking method that connects physical devices through wireless sensors.",
      "A distributed recordkeeping method that stores transactions in cryptographically linked blocks."
    ],
    "correctAnswer": 1,
    "conceptCoverage": [
      "Recall",
      "Artificial",
      "Intelligence"
    ],
    "reference": "Emerging Technologies; Artificial Intelligence Fundamentals"
  }
];
