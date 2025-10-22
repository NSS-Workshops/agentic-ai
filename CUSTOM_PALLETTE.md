# CSS Palette Overriding

The library exports a `styles.css` file that contains all the default styling for components. This CSS file is built from the internal [`globals.css`](src/styles/globals.css) file and includes a comprehensive set of CSS custom properties (variables) that define the visual theme.

## Importing the Styles

```js
import "@nss-workshops/nss-core/styles.css"
```

## Customizing the Theme

The exported `styles.css` defines CSS custom properties on the `:root` element that you can override in your own CSS. The library uses a **Turquoise Harmony** color palette by default, but you can customize any aspect of the theme.

### Available CSS Custom Properties

The library provides extensive customization through CSS variables organized into logical groups:

**Primary Colors:**
```css
:root {
  --primary: #05668d;
  --primary-light: #028090;
  --primary-dark: #044a63;
  --primary-hover: #044a63;
}
```

**Secondary & Accent Colors:**
```css
:root {
  --secondary: #00a896;
  --secondary-light: #02c39a;
  --secondary-dark: #008a7a;
  --accent: #02c39a;
  --accent-light: #33d1a8;
  --accent-dark: #01a085;
}
```

**Text Colors:**
```css
:root {
  --text-primary: #05668d;
  --text-secondary: #028090;
  --text-muted: #6ba8b8;
  --text-light: #f0f3bd;
}
```

**Background Colors:**
```css
:root {
  --bg-primary: #f9fcfc;
  --bg-secondary: white;
  --bg-accent: #f0f3bd;
  --bg-main-content: #f4fafa;
}
```

**Navigation & UI Elements:**
```css
:root {
  --nav-bg: #e6f7f7;
  --nav-text: #028090;
  --btn-auth-bg: #044a63;
  --progress-fill: #02c39a;
  --border-light: #d1f0f0;
}
```

##### Override Examples

**1. Simple Color Override:**
```css
/* Override primary colors in your own CSS file */
:root {
  --primary: #2563eb;        /* Blue primary */
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
}
```

**2. Complete Theme Override:**
```css
/* Create a dark theme */
:root {
  --bg-primary: #1f2937;
  --bg-secondary: #111827;
  --bg-main-content: #374151;
  --text-primary: #f9fafb;
  --text-secondary: #d1d5db;
  --nav-bg: #374151;
  --nav-text: #f9fafb;
}
```

**3. Component-Specific Overrides:**
```css
/* Override button styles */
:root {
  --btn-auth-bg: #dc2626;
  --btn-auth-hover: #b91c1c;
  --btn-run-bg: #059669;
  --btn-run-hover: #047857;
}
```

**4. Using CSS Cascade for Scoped Overrides:**
```css
/* Override styles only within a specific container */
.my-custom-workshop {
  --primary: #7c3aed;
  --accent: #a855f7;
  --bg-primary: #faf5ff;
}
```

### Best Practices

1. **Import Order**: Import the library's `styles.css` first, then your custom overrides:
   ```js
   import "@nss-workshops/nss-core/styles.css"
   import "./my-custom-theme.css"
   ```

2. **Use CSS Custom Properties**: Prefer overriding CSS variables rather than targeting specific component classes, as this ensures consistency across all components.

3. **Test Thoroughly**: When overriding colors, ensure sufficient contrast ratios for accessibility and test across all component states (hover, active, disabled).

4. **Semantic Naming**: The library uses semantic variable names (e.g., `--text-primary`, `--btn-auth-bg`) that make it clear what each property controls.

> For a complete list of available CSS custom properties, refer to the [`globals.css`](src/styles/globals.css) file in the source code.