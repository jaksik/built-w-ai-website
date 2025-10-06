# Copilot Instructions for Built with AI Website

This guide contains essential knowledge for AI agents working with the Built with AI website codebase.

## Project Overview
- Next.js TypeScript application for showcasing AI tools and resources
- Uses MongoDB for data storage (articles, tools, etc.)
- TailwindCSS for styling with dark/light theme support
- Components organized by feature (Articles, Tools, Tutorials, etc.)

## Key Architecture Patterns

### Data Flow
1. MongoDB connection managed through `lib/db.ts` singleton pattern
2. Article data model (`models/Article.ts`) as primary content type
3. API routes in `pages/api/` for data operations
4. Components use custom hooks (e.g., `useBeehiivSubscription`) for data fetching

### Component Organization
- Feature-based structure in `components/`
- Shared layouts and UI components in `components/Layout`
- Data components (ArticleTable, ToolCard) separate from containers
- Example: `components/Articles/ArticleTable.tsx` for article list views

### Important Workflows

#### Development
```bash
# Start development server (note custom host)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

#### Environment Setup
Required environment variables:
- `MONGODB_URI`: MongoDB connection string
- Additional variables may be required for BeehiivForm integration

### Project-Specific Conventions

1. Data Fetching:
   - Use MongoDB models for data operations
   - Example: Article model in `models/Article.ts`

2. UI Components:
   - Mobile-first responsive design
   - Dark/light theme support via `next-themes`
   - Component variants (e.g., BeehiivForm has Banner, Card, Modal variants)

3. Data Models:
   - Mongoose schemas with TypeScript interfaces
   - Required fields and validation at schema level
   - Index optimization for common queries

## Integration Points

1. BeehiivForm Integration:
   - Newsletter subscription components in `components/BeehiivForm/`
   - Multiple form variants available (Banner, Card, Modal)

2. Theme Integration:
   - Theme provider in `components/Layout/ThemeProvider.tsx`
   - Use `useTheme` hook for theme-aware components

## Common Tasks and Patterns

1. Adding New Tool/Article:
   - Update relevant data file in `data/` directory
   - Follow existing schema structure

2. Creating New Components:
   - Place in appropriate feature directory
   - Include mobile variant if needed
   - Support dark/light themes

3. API Endpoints:
   - Located in `pages/api/`
   - Use MongoDB models for data operations
   - Include proper error handling and validation