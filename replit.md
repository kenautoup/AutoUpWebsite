# AutoUp Landing Page

## Overview

AutoUp is a B2B outreach agency landing page and lead capture application. The site showcases AutoUp's services (AI-driven data extraction, expert copywriting, and automated outreach campaigns) and captures leads through a simple email/name form. The project is a full-stack TypeScript application with a React frontend serving as a marketing landing page and an Express backend handling lead submissions to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — currently just `/` (Home) and a 404 page
- **Styling**: Tailwind CSS with CSS variables for theming. The design uses a dark navy/teal color scheme defined in `client/src/index.css` and extended in `tailwind.config.ts`
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives — components live in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-reveal animations via a custom `<Reveal>` component
- **Icons**: Lucide React
- **State Management**: TanStack React Query for server state (mutations for lead creation)
- **Page Structure**: Single landing page built from section components in `client/src/components/sections/` — Navigation, Hero, Press, HowItWorks, Comparison, EmailShowcase, Process, Testimonials, Certifications, CTA, Footer
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx` in development
- **API Design**: A typed route contract defined in `shared/routes.ts` using Zod schemas. The `api` object defines method, path, input schema, and response types for each endpoint
- **Current Endpoints**:
  - `POST /api/leads` — creates a lead (email + optional name)
- **Dev Server**: Vite dev server is integrated as middleware during development (see `server/vite.ts`), with HMR support
- **Production**: Built with esbuild for the server and Vite for the client. Static files served from `dist/public`

### Data Storage
- **Database**: PostgreSQL via `DATABASE_URL` environment variable
- **ORM**: Drizzle ORM with `drizzle-zod` for schema-to-validation integration
- **Schema**: Defined in `shared/schema.ts` — currently one table:
  - `leads`: `id` (serial PK), `email` (text, required), `name` (text, optional), `created_at` (timestamp, auto)
- **Migrations**: Managed via `drizzle-kit push` (`npm run db:push`)
- **Storage Layer**: `server/storage.ts` implements an `IStorage` interface with `DatabaseStorage` class for database operations

### Build System
- **Development**: `npm run dev` — runs tsx with Vite middleware for HMR
- **Production Build**: `npm run build` — runs `script/build.ts` which builds client with Vite and server with esbuild, bundling select dependencies for faster cold starts
- **Type Checking**: `npm run check` — runs TypeScript compiler in noEmit mode

### Shared Code
- The `shared/` directory contains code used by both frontend and backend:
  - `schema.ts` — Drizzle table definitions and Zod insert schemas
  - `routes.ts` — Typed API route definitions with Zod validation schemas

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection via `DATABASE_URL` environment variable. Uses `pg` (node-postgres) driver with Drizzle ORM

### Third-Party Services
- **Calendly** — External scheduling links (hardcoded URLs pointing to `calendly.com/ken-autoup/autoup-introduction`)
- **Google Fonts** — Inter and Playfair Display font families loaded via CDN

### Key NPM Packages
- **Frontend**: React, Wouter, TanStack React Query, Framer Motion, Tailwind CSS, shadcn/ui (Radix UI primitives), Lucide React, class-variance-authority
- **Backend**: Express 5, Drizzle ORM, drizzle-zod, pg, Zod, connect-pg-simple, express-session
- **Build**: Vite, esbuild, tsx, drizzle-kit
- **Replit-specific**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`