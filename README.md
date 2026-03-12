# FigmaCodeConnect

A React + TypeScript design system with [Figma Code Connect](https://github.com/figma/code-connect) integration. Code Connect links Figma components to their production code implementations, so developers see real code snippets in Figma Dev Mode instead of auto-generated stubs.

## Components

| Component | Source | Code Connect |
|-----------|--------|--------------|
| `Button` | `src/components/Button.tsx` | `src/components/Button.figma.tsx` |
| `Card` | `src/components/Card.tsx` | `src/components/Card.figma.tsx` |

## Prerequisites

- **Node.js 18+**
- **Figma Organization or Enterprise plan** with Dev Mode access
- A **Figma personal access token** with `Code Connect (Write)` and `File content (Read)` scopes
  - Generate one at [Figma account settings → Security](https://www.figma.com/settings) → **Personal access tokens**

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Link your Figma components**

   For each `.figma.tsx` file, replace the placeholder URL with the real Figma component URL:

   - Open your Figma file in the browser.
   - Right-click the component (e.g. **Button**) → **Copy link**.
   - Paste the URL into the matching `.figma.tsx` file, replacing `"FIGMA_BUTTON_URL"` / `"FIGMA_CARD_URL"`.

   Example (`src/components/Button.figma.tsx`):
   ```ts
   figma.connect(Button, "https://www.figma.com/file/abc123/Design-System?node-id=10%3A24", { ... })
   ```

3. **Publish to Figma**

   ```bash
   FIGMA_ACCESS_TOKEN=<your-token> npm run figma:publish
   ```

   Or pass the token inline:
   ```bash
   npm run figma:publish -- --token <your-token>
   ```

   Once published, open the component in Figma Dev Mode — you will see the live code snippet.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run figma:connect` | Run the Figma Code Connect CLI |
| `npm run figma:publish` | Publish Code Connect docs to Figma |
| `npm run figma:unpublish` | Remove published docs from Figma |

## Project Structure

```
FigmaCodeConnect/
├── figma.config.json          # Code Connect configuration
├── package.json
├── tsconfig.json
└── src/
    └── components/
        ├── Button.tsx          # Button component source
        ├── Button.figma.tsx    # Button ↔ Figma mapping
        ├── Card.tsx            # Card component source
        └── Card.figma.tsx      # Card ↔ Figma mapping
```

## Adding New Components

1. Create your component in `src/components/MyComponent.tsx`.
2. Create `src/components/MyComponent.figma.tsx` following the pattern of existing `.figma.tsx` files.
3. Replace `"FIGMA_MY_COMPONENT_URL"` with the real Figma node URL.
4. Re-publish: `npm run figma:publish -- --token <your-token>`

## Resources

- [Figma Code Connect docs](https://developers.figma.com/docs/code-connect/quickstart-guide/)
- [@figma/code-connect on npm](https://www.npmjs.com/package/@figma/code-connect)
- [figma/code-connect on GitHub](https://github.com/figma/code-connect)
