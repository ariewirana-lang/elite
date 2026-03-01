

## Add Hover Animations to Buttons and Images

### What will change
Simple, elegant hover animations will be added across the site:
- **Buttons**: A subtle scale-up effect when hovered
- **Images**: A gentle scale-up and slight brightness increase when hovered

### Scope of changes

**1. Global button hover animation (`src/components/ui/button.tsx`)**
- Add `transition-transform duration-300 hover:scale-105` to the base button styles in `buttonVariants`, so all buttons site-wide get a subtle grow effect on hover.

**2. Image hover effects in section components**
Add `transition-transform duration-500 hover:scale-105` to images that don't already have it:

- `WhyTrustUsSection.tsx` -- consultation/dinner image
- `PersonalSignificanceSection.tsx` -- both significance images
- `SuccessStoriesSection.tsx` -- story card images
- `HeroSection.tsx` -- hero image (if applicable)

Images in `ThisIsYouSection.tsx` already have `group-hover:scale-105`, so no change needed there.

The container `div` with `overflow-hidden` (already present in most places) ensures the scaled image doesn't overflow its bounds.

### Technical details
- No new dependencies or keyframes needed -- uses Tailwind's built-in `hover:scale-105` utility
- Transitions use `duration-300` for buttons (snappy) and `duration-500` for images (smooth)
- The `overflow-hidden` class on image wrappers clips the zoom effect cleanly

