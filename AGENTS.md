# Agents Guide

## Project Overview

| Property       | Value                                      |
| -------------- | ------------------------------------------ |
| **Name**       | react-vite-template                        |
| **Type**       | Single Page Application (SPA)              |
| **Framework**  | React 19 + Vite 8                          |
| **Language**   | TypeScript 6                               |
| **UI Library** | HeroUI v3 (NOT v2)                         |
| **Styling**    | Tailwind CSS v4 (NOT v3)                   |
| **Linting**    | oxlint (NOT ESLint)                        |
| **Formatting** | oxfmt (NOT Prettier)                       |
| **Git Hooks**  | Husky + lint-staged                        |
| **Pkg Manager**| Bun                                        |

---

## Commands

| Command          | Description                                         |
| ---------------- | --------------------------------------------------- |
| `bun dev`        | Start Vite dev server                               |
| `bun build`      | Production build (`tsc -b && vite build`)           |
| `bun lint`       | Run oxlint on the project                           |
| `bun lint:fix`   | Run oxlint with auto-fix                            |
| `bun fmt`        | Format all files with oxfmt                         |
| `bun fmt:check`  | Check formatting without modifying files            |
| `bun preview`    | Preview production build locally                    |

---

## Project Structure

```
react-vite-template/
├── .agents/skills/       # AI agent skills (git-hero, heroui-react, etc.)
├── .husky/               # Git hooks (pre-commit runs lint-staged)
├── public/               # Static assets served as-is
├── src/
│   ├── App.tsx           # Root component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles (Tailwind)
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript config
├── vite.config.ts        # Vite configuration
├── opencode.json         # OpenCode agent config
└── skills-lock.json      # Installed skills lockfile
```

---

## Code Conventions

### Components

- **Naming**: PascalCase for components (`MyComponent`)
- **Files**: one component per file, named `ComponentName.tsx`
- **Exports**: named exports (not default)
- **Structure**: functional components only (no class components)

```tsx
// src/components/MyComponent.tsx
import { Button } from "@heroui/react/button";

export const MyComponent = () => {
  return <Button>Click me</Button>;
};
```

### Imports

- **HeroUI**: always use direct imports (NOT barrel)
  - ✅ `import { Button } from "@heroui/react/button";`
  - ❌ `import { Button } from "@heroui/react";`
- **React**: named imports from `"react"`
- **Local**: relative paths with `@/` alias if configured

### Styling

- **Tailwind CSS v4** classes directly on elements
- **No inline styles** unless dynamic values require it
- **oklch()** color format for custom properties (HeroUI v3 default)

### TypeScript

- **Strict mode** enabled
- **No `any`** — use proper types
- **Interface** for object shapes, **type** for unions/intersections

---

## Git Workflow

### Commit Format

```
<emoji> <type>(<scope>): <description>
```

- **Type**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`, `revert`
- **Scope**: optional, lowercase
- **Description**: imperative mood, lowercase, no period

**Examples:**
- `✨ feat(auth): add OAuth2 login with Google`
- `🐛 fix(cart): prevent double-submission on slow networks`
- `🔧 chore(deps): add agent skills and opencode configuration`

### Pre-commit Hooks

lint-staged runs automatically on staged files:
- `*.{js,jsx,ts,tsx,json,css,md}` → `oxfmt --write` + `oxlint --fix`

---

## Available Skills

| Skill                    | Purpose                                          |
| ------------------------ | ------------------------------------------------ |
| `heroui-react`           | HeroUI v3 component docs, examples, source code  |
| `git-hero`               | Git best practices, commit discipline, CI/CD     |
| `typescript-advanced-types` | Generics, conditional types, mapped types      |
| `vercel-react-best-practices` | React/Next.js performance optimization rules |

Load skills with the `skill` tool before performing relevant tasks.

---

## HeroUI v3 Notes

### Key Differences from v2

- **Compound components pattern**: `Card.Header`, `Card.Content`, etc.
- **No Provider component**: unlike v2, no need to wrap app in `<HeroUIProvider>`
- **Direct imports**: `@heroui/react/button` not `@heroui/react`
- **Tailwind CSS v4**: required (NOT v3)
- **React Aria Components**: built on top for accessibility

### Getting Started

```bash
# Fetch component docs
get_component_docs({ components: ["Button"] })

# List all available components
list_components()

# Get theme variables
get_theme_variables()
```

### Available Components (71 total)

Accordion, Alert, AlertDialog, Autocomplete, Avatar, Badge, Breadcrumbs, Button, ButtonGroup, Calendar, Card, Checkbox, CheckboxGroup, Chip, CloseButton, ColorArea, ColorField, ColorPicker, ColorSlider, ColorSwatch, ColorSwatchPicker, ComboBox, DateField, DatePicker, DateRangePicker, Description, Disclosure, DisclosureGroup, Drawer, Dropdown, ErrorMessage, FieldError, Fieldset, Form, Input, InputGroup, InputOTP, Kbd, Label, Link, ListBox, Meter, Modal, NumberField, Pagination, Popover, ProgressBar, ProgressCircle, RadioGroup, RangeCalendar, ScrollShadow, SearchField, Select, Separator, Skeleton, Slider, Spinner, Surface, Switch, Table, Tabs, TagGroup, TextArea, TextField, TimeField, Toast, ToggleButton, ToggleButtonGroup, Toolbar, Tooltip, Typography

---

## Important Rules

1. **Always use HeroUI v3** — v2 is NOT supported in this project
2. **Always use Tailwind CSS v4** — v3 is NOT compatible with HeroUI v3
3. **Never use barrel imports** from HeroUI — use direct component imports
4. **Never commit secrets** or API keys
5. **Always run `bun lint`** after code changes
6. **Load relevant skill** before performing specialized tasks
