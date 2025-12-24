# C&L Strategy: The "Show, Don't Tell" Proposal Engine SOP
## Purpose: Transform a prospect into a client by building their future before the first meeting.

### **Required Inputs**
1. **Company Name**
2. **Current Website URL** (if available)
3. **Core Business Description** (Services, Location, Unique Value)

---

### **Step 1: The Product Build (`/site`)**
The "Product" is a fully functional, high-performance prototype.
1. **Core Site:** Initialize a Hono/Bun/React site. Populate with actual content sourced from their current web presence or business description.
2. **pSEO Engine (The "Moat"):** Identify the business's high-volume search opportunities.
   - **For Local/Service:** 100+ landing pages for "Service in [Neighborhood/Landmark]".
   - **For E-commerce:** Programmatic category pages based on niche attributes.
   - **For B2B:** Vertical-specific landing pages.
3. **AEO Optimization:** Inject JSON-LD and structured data to ensure the prototype is "AI-Ready."

### **Step 2: The Presentation Build (`/proposal`)**
The "Presentation" is an interactive, scroll-driven application that lives alongside the product.
- **Template Standard:** Mimic the **CL Lake George Deck** structure:
  - **The Hook:** Executive summary of the vision.
  - **The Gap:** Data-backed analysis of why their current setup is losing.
  - **The Solution:** Technical breakdown of the new stack (Speed, Security, Scale).
  - **The Proof:** A live preview of the pSEO pages (The "Moat").
  - **The Roadmap:** 4-Phase implementation timeline.

### **Step 3: The Dual-Track UI**
Every proposal must feature a global navigation toggle:
- **[ STRATEGY ]**: The interactive slide deck.
- **[ PROTOTYPE ]**: The actual working website.
- Clicking "Prototype" switches the view instantly without a reload, proving the speed of the stack.

### **Step 4: Persistence**
- Save the entire project in a dedicated branch of the `sequelproposal-repo`.
- The `/site` folder is the "Yes" package—ready to go live the moment the contract is signed.

