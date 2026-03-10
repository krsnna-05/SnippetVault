# SnippetVault

SnippetVault — A modern code snippet manager built with Next.js, Supabase, and TanStack Query. Users can create, organize, and securely share code snippets with public and private access controls.

This project was built as part of a technical assessment to demonstrate frontend architecture, authentication flows, state management, and secure data handling.

---

## Features

### Authentication

- Email and password authentication using Supabase Auth
- Protected dashboard routes via Next.js middleware
- Persistent user session

### Snippet Management

- Create, edit, and delete code snippets
- Add tags for better organization
- Toggle snippets between **public** and **private**
- Syntax-highlighted code preview

### Dashboard

- Responsive snippet grid
- Live search functionality
- Tag-based filtering
- Snippet detail side panel

### Sharing

- Public snippet pages (`/s/[id]`)
- Share snippets with specific users
- Copy shareable links
- Export snippets as images

### Public Profiles

- Public user profile page (`/u/[username]`)
- Displays all public snippets created by a user

---

## Tech Stack

Frontend

- Next.js (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui

State Management

- TanStack Query
- Zustand

Backend

- Supabase (Auth + PostgreSQL + Row Level Security)

Utilities

- Prism / react-syntax-highlighter
- html-to-image

---

## Project Structure

```
app/
components/
features/
snippets/
hooks/
lib/
stores/
types/
```

- **features/snippets** – snippet-related UI and logic
- **hooks** – custom React Query hooks
- **lib/api.ts** – centralized API layer
- **stores** – Zustand UI state
- **types** – shared TypeScript types

---

## Database Schema

Main tables used in Supabase:

- `profiles`
- `snippets`
- `tags`
- `snippet_tags`
- `snippet_shares`

Row Level Security (RLS) policies ensure:

- Users can only edit their own snippets
- Private snippets cannot be accessed by other users
- Public snippets are accessible without authentication

---

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

---

## Setup Instructions

1. Clone the repository

```
git clone <repo-url>
cd snippetvault
```

2. Install dependencies

```
npm install
```

3. Add environment variables

Create `.env.local` with your Supabase credentials.

4. Run the development server

```
npm run dev
```

---

## Deployment

The project is deployed on **Vercel**.

Production URL:

```
<your-vercel-link>
```

---

## Architectural Notes

- **Next.js middleware** protects authenticated routes.
- **TanStack Query** manages all server state and mutations.
- **Zustand** handles UI state like filters and active snippets.
- **Supabase RLS policies** enforce data security at the database layer.

---

## Future Improvements

- View count tracking for public snippets
- Keyboard navigation
- Language usage statistics
- Improved snippet sharing UI

---

## Author

Krishna Gavali -
Full Stack Developer
