# Surmani Motors

## Overview
A luxury car dealership website for Surmani Motors, showcasing premium and semi-new vehicles. The site features a modern, elegant design with a dark theme that emphasizes the premium nature of the brand.

## Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query (React Query) v5
- **Forms**: React Hook Form with Zod validation

## Project Structure
```
src/
├── assets/          # Static assets (images)
├── components/      # React components
│   ├── ui/          # shadcn/ui base components
│   └── *.tsx        # Feature components (Header, Footer, etc.)
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
│   ├── Index.tsx    # Home page
│   ├── Estoque.tsx  # Vehicle inventory page
│   └── NotFound.tsx # 404 page
├── App.tsx          # Main app component with routing
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## Pages
- **Home (/)**: Landing page with hero section, vehicle showcase, services, testimonials, and contact
- **Estoque (/estoque)**: Vehicle inventory listing

## Running the Project
The dev server runs on port 5000:
```bash
npm run dev
```

## Deployment
Configured for static deployment. Build output goes to `dist/` directory.
