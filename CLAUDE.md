# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a BigCommerce Catalyst storefront - a Next.js-based headless commerce framework that provides a fully customizable ecommerce solution using BigCommerce's GraphQL Storefront API.

## Development Commands

### Core Commands
- `pnpm run dev` - Start development server (includes GraphQL generation)
- `pnpm run build` - Build for production (includes GraphQL generation)
- `pnpm run start` - Start production server
- `pnpm run lint` - Run ESLint
- `pnpm run typecheck` - Run TypeScript type checking
- `pnpm run generate` - Generate GraphQL types and queries

### Additional Commands
- `pnpm run build:analyze` - Build with bundle analysis

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Radix UI components
- **Data Fetching**: GraphQL with gql.tada for type generation
- **Authentication**: NextAuth.js
- **Package Manager**: pnpm

### Key Directories
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utility functions and configurations
- `vibes/soul/` - UI component library (forms, primitives, sections)
- `client/` - GraphQL client and fragments
- `auth/` - Authentication logic
- `middlewares/` - Next.js middleware functions

### BigCommerce Integration
- Uses GraphQL Storefront API for all data fetching
- Requires BigCommerce store connection via environment variables
- Supports multi-channel and internationalization

## Environment Setup

✅ **BigCommerce Connection Configured** - Store successfully connected!

Required environment variables (stored in `.env.local`):
- `BIGCOMMERCE_STORE_HASH` - Store identifier
- `BIGCOMMERCE_STOREFRONT_TOKEN` - JWT token for GraphQL API access
- `BIGCOMMERCE_CHANNEL_ID` - Channel identifier (typically 1)
- `NEXTAUTH_SECRET` - Authentication secret
- `NEXTAUTH_URL` - Application URL

Note: Customer login API credentials are optional for basic storefront functionality.

## Key Features

- SEO, accessibility, and performance optimized out of the box
- Multi-language support with next-intl
- Built-in cart, wishlist, and user account functionality
- Product catalog with filtering and search
- Mobile-responsive design
- Analytics integration ready