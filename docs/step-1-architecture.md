# BHM Studios Step 1 Architecture

This step defines the content and application structure for the BHM Studios website before the immersive UI is built.

## Planned folder structure

```text
app/
  layout.tsx
  page.tsx
components/
  ui/                  # existing shadcn/ui and Magic UI primitives
  agency/              # Step 4 agency-specific sections
  founder/             # Step 5 reusable founder portfolio sections
  layout/              # Step 3 shells, wrappers, and persistent app chrome
  navigation/          # Step 3 identity switcher and arrow controls
  shared/              # cross-page presentational components
data/
  agency.ts
  founders.ts
  navigation.ts
  projects.ts
  services.ts
  tech-stack.ts
  timeline.ts
  index.ts
docs/
  step-1-architecture.md
lib/
  utils.ts
types/
  content.ts
```

## App structure

The application stays in a single App Router entry point and later composes full-page identity states inside one immersive shell:

1. `app/layout.tsx`
   Global HTML shell, metadata, theme provider, and future ambient background hooks.
2. `app/page.tsx`
   Temporary Step 1 architecture/status screen.
3. Step 3 onward
   `app/page.tsx` becomes the carousel host and renders the agency plus three founder experiences through a shared layout shell.

## Data model design

- `types/content.ts` defines the shared contracts for every major content block.
- `data/*.ts` keeps content modular so agency and founder views can reuse the same project, service, and timeline records.
- Founder pages reference project IDs and timeline IDs instead of duplicating data.
- Agency content references founder IDs, service IDs, project IDs, and tech stack labels so later UI sections stay data-driven.

## Component strategy note

The user requested a `shadcn/ui` and Magic UI leaning approach. From Step 2 onward, project-specific components should wrap or compose those primitives rather than introducing a parallel visual system.
