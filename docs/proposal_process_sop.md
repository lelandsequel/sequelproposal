# SOP: Proposal Process & Implementation Workflow
## Repository: `sequelproposal-repo`

### 1. Project Initialization
- For every new client proposal, create a dedicated branch in the `sequelproposal-repo`: `feature/[client-name]`.
- Structure the branch as follows:
  - `/site`: The live functional prototype (Hono/Bun/React).
  - `/proposal`: The slide deck outlines and strategic research.
  - `/docs`: Client-specific technical documentation and AEO schemas.

### 2. The "Show, Don't Tell" Standard
- **Infrastructure:** All prototypes must be high-performance (sub-second load times) to contrast with legacy client sites.
- **pSEO Strategy:** Build a "Neighborhood Engine" (programmatic SEO) consisting of 50-100+ landing pages targeting hyper-local landmarks.
- **AEO Readiness:** Include structured data (JSON-LD) in the prototype to demonstrate AI search readiness.

### 3. Finalization
- Once approved, the `/site` directory serves as the production-ready source code.
- Slide decks are generated from the markdown outlines in `/proposal`.

