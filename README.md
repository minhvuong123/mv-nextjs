## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



Deployment Options:
  1. Standard Build : next build
    - Produces optimized production bundles and a server-side apps: Requires NodeJS server
    - Pages are pre-rendered (if possible) but NodeJS server is required for API routes, server-side pages and page revalidation
    - Re-deploy needed if code changes or you don't use revalidations and need page updates

  2. Full Static Build : next export
    - Produces 100% static app (HTML, CSS, JS): No Nodejs server required
    - Doesn't work if your app uses API routes, server-side pages or wants to use page revalidations
    - Re-deploy needed for all code and content  changes

Deployment Steps and Considerations
  1. Add page metadata, optimize code, remove unnecessary dependencies
  2. Use environment variables for variable data (e.g. database credentials, API keys, ...)
  3. Do a test build and test the production-ready app locally or on some test server
  4. Deploy!