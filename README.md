# Cloudflare Workers Full-Stack Starter

[![Deploy to Cloudflare Workers]([cloudflarebutton])]([cloudflarebutton])

A production-ready full-stack starter template for Cloudflare Workers featuring a React frontend with Tailwind CSS and shadcn/ui, powered by a Hono backend with Durable Objects for stateful entities (e.g., users, chats). Includes indexed listing, CRUD operations, real-time chat messaging, TanStack Query, dark mode, and mobile-responsive design.

## Features

- **Serverless Backend**: Hono router with CORS, logging, and error handling
- **Durable Objects**: Multi-tenant storage with automatic indexing and pagination for entities
- **Full CRUD**: Users, chats, and messages with optimistic updates and concurrency handling
- **Modern React Frontend**: Vite + React 18 + React Router + TanStack Query
- **Beautiful UI**: shadcn/ui components, Tailwind CSS, dark mode, animations
- **Type-Safe**: End-to-end TypeScript with shared types
- **Development Workflow**: Hot reload for both frontend and worker
- **Production-Ready**: Cloudflare deployment, error reporting, health checks
- **Extensible**: Add custom entities/routes without modifying core files

Demo includes mock-seeded users and chats with messaging.

## Tech Stack

- **Backend**: Cloudflare Workers, Hono, Durable Objects
- **Frontend**: React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui
- **Data**: TanStack Query, Zod (validation-ready)
- **UI/UX**: Lucide icons, Framer Motion, Sonner toasts, Sidebar layout
- **Tools**: Bun, Wrangler, ESLint, Prettier

## Prerequisites

- [Bun](https://bun.sh/) (package manager)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (Cloudflare Workers)
- Cloudflare account (free tier sufficient)

## Quick Start

1. **Clone & Install**
   ```bash
   git clone <your-repo-url>
   cd kinetix-q_w7krzx9fp75ife8snkr
   bun install
   ```

2. **Local Development**
   ```bash
   bun dev
   ```
   - Frontend: http://localhost:3000 (or `$PORT`)
   - API: http://localhost:8787/api (auto-proxied)
   - Hot reload for both.

3. **Type Generation**
   ```bash
   bun cf-typegen
   ```
   Generates `worker/env.d.ts` for Worker bindings.

## Usage

### Backend (Worker)
- **Entities**: Extend `IndexedEntity` in `worker/entities.ts` (e.g., `UserEntity`, `ChatBoardEntity`)
  - Auto-indexing, listing, seeding, deleteMany
  - Shared types in `shared/`
- **Routes**: Add in `worker/user-routes.ts` (auto-loaded)
  - `/api/users`, `/api/chats`, `/api/chats/:id/messages`
  - Pagination: `?cursor=abc&limit=10`
- Core utils (`worker/core-utils.ts`) handle storage/CAS/indexing – **do not modify**.

### Frontend
- **Pages**: Edit `src/pages/HomePage.tsx` or add routes in `src/main.tsx`
- **API Calls**: Use `api()` helper from `src/lib/api-client.ts`
  ```typescript
  import { api } from '@/lib/api-client';
  const users = await api<User[]>('/api/users');
  ```
- **Components**: shadcn/ui ready (`@/components/ui/*`), hooks (`@/hooks/*`), layout (`AppLayout`)
- **Theme**: `useTheme()` hook with localStorage sync
- **Error Handling**: Global `ErrorBoundary` + `/api/client-errors`

### Examples

**Create Chat**:
```bash
curl -X POST http://localhost:8787/api/chats \
  -H "Content-Type: application/json" \
  -d '{"title": "My Chat"}'
```

**List Users** (paginated):
```
GET /api/users?limit=5&cursor=nextCursor
```

**Send Message**:
```bash
curl -X POST http://localhost:8787/api/chats/c1/messages \
  -H "Content-Type: application/json" \
  -d '{"userId": "u1", "text": "Hello!"}'
```

## Architecture

```
Frontend (Vite/React) ← TanStack Query → Worker (Hono)
                                    ↓
                           GlobalDurableObject (Storage)
                           ├── Entities (User/Chat per DO)
                           └── Indexes (sys-index for listing)
```

Entities use optimistic CAS mutations with 4x retry. Indexes enable `O(1)` existence + pagination.

## Deployment

1. **Build Assets**
   ```bash
   bun build
   ```

2. **Deploy to Cloudflare**
   ```bash
   bun deploy
   ```
   Or use the button:
   [![Deploy to Cloudflare Workers]([cloudflarebutton])]([cloudflarebutton])

- Config: `wrangler.jsonc` (SPA routing, DO migrations)
- Assets served from Worker (single deployment)
- Custom domain: `wrangler deploy --name my-app`
- Observability: Enabled by default (logs/metrics)

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start dev server (frontend + worker) |
| `bun build` | Build for production |
| `bun preview` | Preview production build |
| `bun lint` | Lint codebase |
| `bun deploy` | Build + deploy to Cloudflare |
| `bun cf-typegen` | Generate Worker types |

## Customization

- **Remove Sidebar**: Don't use `AppLayout` in pages
- **Add Entities**: Copy `UserEntity` pattern in `entities.ts`
- **New Routes**: Export `userRoutes(app)` function
- **UI Tweaks**: Edit Tailwind in `tailwind.config.js`
- **Seeds**: Add to `static seedData` arrays

## Troubleshooting

- **DO Migration**: Run `wrangler deploy` (auto-migrates v1)
- **CORS Issues**: Routes under `/api/*` auto-CORS
- **Types Errors**: `bun cf-typegen` + restart TS server
- **Bun Issues**: `rm -rf node_modules/.vite` + `bun install`

## License

MIT – see [LICENSE](LICENSE) (or add your own).