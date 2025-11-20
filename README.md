# Vite Single Project Multi-Sites

A single Vite.js project demonstrating how to manage multiple sites (site-a and site-b) with separate configurations while sharing common resources.

## Features

- ✅ Single npm project with one `package.json`
- ✅ Separate Vite configurations for each site
- ✅ Shared base configuration with common settings
- ✅ Handlebars.js partials support with `vite-plugin-handlebars`
- ✅ Shared JavaScript/TypeScript resources
- ✅ Shared SCSS variables and styles
- ✅ Shared Handlebars partials
- ✅ Independent build outputs for each site
- ✅ Different themes and styling for each site

## Project Structure

```
vite-single-project-multi-sites/
├── package.json                    # Single package.json for entire project
├── tsconfig.json                   # TypeScript configuration
├── vite.config.base.js            # Base Vite config (shared settings)
├── vite.config.site-a.js          # Site A specific config
├── vite.config.site-b.js          # Site B specific config
│
├── shared/                         # Shared resources
│   ├── styles/
│   │   ├── variables.scss         # Shared SCSS variables
│   │   └── common.scss            # Shared styles
│   ├── scripts/
│   │   └── utils.ts               # Shared TypeScript utilities
│   └── partials/
│       ├── header.hbs             # Shared Handlebars header
│       └── footer.hbs             # Shared Handlebars footer
│
├── site-a/                         # Site A specific files
│   ├── index.html
│   ├── styles/
│   │   └── main.scss              # Site A specific styles (blue theme)
│   ├── scripts/
│   │   └── main.ts                # Site A specific scripts
│   └── partials/                  # Site A specific partials (optional)
│
└── site-b/                         # Site B specific files
    ├── index.html
    ├── styles/
    │   └── main.scss              # Site B specific styles (green theme)
    ├── scripts/
    │   └── main.ts                # Site B specific scripts
    └── partials/                  # Site B specific partials (optional)
```

## Installation

```bash
npm install
```

## Development

Run the development server for each site:

### Site A (runs on port 3001)
```bash
npm run dev:site-a
```

### Site B (runs on port 3002)
```bash
npm run dev:site-b
```

## Building

Build individual sites:

```bash
# Build Site A
npm run build:site-a

# Build Site B
npm run build:site-b

# Build both sites
npm run build:all
```

Build outputs:
- Site A: `dist/site-a/`
- Site B: `dist/site-b/`

## Preview Built Sites

After building, preview the production builds:

```bash
# Preview Site A
npm run preview:site-a

# Preview Site B
npm run preview:site-b
```

## Configuration Details

### Base Configuration (`vite.config.base.js`)

Contains shared settings:
- Server configuration (default port, open browser)
- Build options (output directories, sourcemaps)
- Path aliases for shared resources
- SCSS preprocessor options (auto-imports shared variables)

### Site-Specific Configurations

Each site extends the base config with:
- Custom root directory
- Custom build output directory
- Custom server port
- Handlebars plugin with site-specific context
- Access to both shared and site-specific partials

### Shared Resources

#### SCSS Variables (`shared/styles/variables.scss`)
Automatically imported into all SCSS files:
- Colors
- Typography
- Spacing units
- Breakpoints

#### TypeScript Utilities (`shared/scripts/utils.ts`)
Reusable functions accessible via path alias `@shared-scripts/utils`:
- Logging utilities
- Date formatting
- Event listeners
- Common initialization

#### Handlebars Partials (`shared/partials/`)
Reusable HTML components:
- Header (uses Handlebars context variables)
- Footer (uses Handlebars context variables)

### Path Aliases

The following aliases are available in both JavaScript/TypeScript and SCSS:

- `@shared` → `./shared`
- `@shared-styles` → `./shared/styles`
- `@shared-scripts` → `./shared/scripts`
- `@shared-partials` → `./shared/partials`

## Customization

### Adding a New Site

1. Create a new directory: `site-c/`
2. Create `vite.config.site-c.js` extending the base config
3. Add npm scripts in `package.json`:
   ```json
   "dev:site-c": "vite --config vite.config.site-c.js",
   "build:site-c": "vite build --config vite.config.site-c.js"
   ```
4. Create site-specific files (HTML, SCSS, TS)

### Using Shared Resources

Import shared styles in site-specific SCSS:
```scss
@import '@shared-styles/common.scss';
```

Import shared utilities in site-specific TypeScript:
```typescript
import { logMessage, initializeCommon } from '@shared-scripts/utils';
```

Use shared partials in Handlebars templates:
```handlebars
{{> header}}
{{> footer}}
```

## Technologies

- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe JavaScript
- **SCSS**: CSS preprocessor
- **Handlebars.js**: Templating engine with partials support
- **vite-plugin-handlebars**: Vite plugin for Handlebars integration

## License

MIT