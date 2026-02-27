# PLP Engineering Rules

This document defines the rules followed while building this Product Listing Page.

---

## 1. Simplicity First

- No unnecessary abstractions.
- No global state libraries.
- No overengineering.
- Code must be readable without long explanations.

---

## 2. State Management

- Cart state is stored in `App.tsx`.
- Updates must be immutable.
- No direct state mutation allowed.

---

## 3. Testing Requirements

The following must be tested:

- Product rendering
- Add to cart interaction
- Cart total calculation
- Currency formatting
- Empty cart state

Tests should focus on behavior, not implementation details.

---

## 4. Accessibility Standards

- All interactive elements use semantic HTML.
- Buttons include `aria-label` where necessary.
- Drawer uses `role="dialog"` and `aria-modal="true"`.
- Escape key closes cart.
- Overlay is keyboard and screen reader safe.

---

## 5. Styling Guidelines

- White background.
- Red accent color only for actions and highlights.
- Clean typography.
- Responsive grid layout.
- No heavy animations or decorative UI.

---

## 6. Scope Control

Not implemented intentionally:

- Cart persistence
- Remove/decrement buttons
- Pagination
- Sorting
- Filtering

This keeps the scope aligned with assignment requirements.

---

## 7. AI Usage Policy

AI tools were used only for:
- Architectural refinement
- Accessibility validation
- Test coverage suggestions

All logic was manually written and reviewed.