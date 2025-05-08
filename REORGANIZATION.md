# BioIQ Landing Page Reorganization

This document outlines the reorganization of the BioIQ landing page codebase to improve structure, maintainability, and adherence to best practices.

## Directory Structure Changes

### Components Organization

1. **UI Components**
   - Created a dedicated `form` subdirectory within `components/ui` for form-related components
   - Moved `form.tsx`, `input.tsx`, and `label.tsx` to `components/ui/form/`

2. **Layout Components**
   - Created a dedicated `layout` directory for layout-related components
   - Moved `dialog.tsx` and `marquee.tsx` from `components/ui/` to `components/layout/`

3. **Visual Effects**
   - Created a dedicated `effects` directory for visual effect components
   - Moved `border-beam.tsx` and `particles.tsx` from `components/magicui/` to `components/effects/`

### Data Organization

1. **Extracted Data Files**
   - Created a dedicated `data` directory for data files
   - Created `testimonials.ts` for testimonial data
   - Created `metrics.ts` for metrics data
   - Created `features.ts` for feature data
   - Created `site-config.ts` for site-wide configuration

### Types Organization

1. **TypeScript Types**
   - Created a dedicated `types` directory
   - Created `index.ts` with common type definitions

### Styles Organization

1. **CSS Styles**
   - Created a dedicated `styles` directory
   - Created `animations.css` for animation styles
   - Created `variables.css` for CSS variables

### Hooks Organization

1. **Custom React Hooks**
   - Created a dedicated `hooks` directory
   - Created `use-media-query.ts` for responsive design hooks
   - Created `use-intersection-observer.ts` for scroll-based animations

### Utils Organization

1. **Utility Functions**
   - Created a dedicated `utils` directory
   - Created `format-utils.ts` for formatting utilities

## Benefits of Reorganization

1. **Improved Maintainability**
   - Related code is grouped together
   - Clear separation of concerns
   - Easier to find and modify specific components

2. **Better Developer Experience**
   - Logical organization makes it easier for new developers to understand the codebase
   - Consistent naming conventions
   - Clear directory structure

3. **Enhanced Scalability**
   - Structure supports adding new components without cluttering directories
   - Modular approach allows for easier testing
   - Separation of data from components improves reusability

4. **Adherence to Best Practices**
   - Follows industry standards for Next.js project organization
   - Implements proper TypeScript typing
   - Maintains clean separation between UI components and business logic

## Next Steps

1. **Update Imports**
   - Update import statements in files that reference moved components
   - Ensure all paths are correct after reorganization

2. **Documentation**
   - Update documentation to reflect new structure
   - Add comments to clarify component usage

3. **Testing**
   - Verify that all components still work as expected after reorganization
   - Run tests to ensure no functionality was broken

4. **Code Review**
   - Conduct a code review to ensure all changes align with project standards
   - Address any feedback or issues
