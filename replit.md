# THE PILLARS Educational Institute Website

## Overview

THE PILLARS is a modern, responsive React-based website for an educational institute specializing in medical, non-medical, and commerce stream coaching. The application features a full-stack architecture with a Node.js/Express backend serving a React frontend built with TypeScript. The website showcases the institute's 10 years of educational excellence, faculty profiles, course offerings, and provides a contact system for student inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing without the overhead of React Router
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistent design
- **Styling**: Tailwind CSS with custom CSS variables for theming support (light/dark modes)
- **State Management**: React Query (TanStack Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript throughout the stack for consistency and type safety
- **API Design**: RESTful endpoints with proper error handling and request validation
- **Email Service**: SendGrid integration for contact form submissions and notifications
- **Development**: Hot module replacement and middleware logging for development experience

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for database migrations and schema evolution
- **Connection**: Neon serverless PostgreSQL for scalable cloud database hosting
- **Session Storage**: PostgreSQL-based session storage using connect-pg-simple
- **Memory Storage**: Fallback in-memory storage implementation for development

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL storage backend
- **User Schema**: Zod-validated user schemas for type-safe data handling
- **Storage Interface**: Abstract storage interface allowing multiple backend implementations

### Design System and Theming
- **Component Library**: Comprehensive UI component system using Radix UI primitives
- **Theme System**: CSS custom properties with light/dark mode support
- **Typography**: Inter font family with multiple weights for consistent branding
- **Color System**: Semantic color tokens supporting theme switching
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## External Dependencies

### Core Framework Dependencies
- **@tanstack/react-query**: Advanced server state management with caching, background updates, and optimistic updates
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries
- **wouter**: Minimalist React router for single-page application navigation

### UI and Design Dependencies
- **@radix-ui/***: Complete suite of unstyled, accessible UI primitives including dialogs, dropdowns, forms, and navigation
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe CSS class composition for component variants
- **clsx**: Conditional CSS class utility for dynamic styling

### Backend Service Dependencies
- **@sendgrid/mail**: Email delivery service for contact form notifications and automated communications
- **@neondatabase/serverless**: Serverless PostgreSQL client optimized for edge environments
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Development and Build Dependencies
- **vite**: Next-generation frontend build tool with fast HMR and optimized production builds
- **typescript**: Static type checking throughout the application stack
- **@replit/vite-plugin-***: Replit-specific development tools for enhanced debugging and development experience

### Validation and Schema Dependencies
- **zod**: Runtime type validation and schema definition
- **drizzle-zod**: Integration between Drizzle ORM and Zod for consistent schema validation

### Date and Utility Dependencies
- **date-fns**: Modern JavaScript date utility library for date formatting and manipulation
- **nanoid**: Secure URL-friendly unique string ID generator