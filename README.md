# Minimal Ghost Theme

A minimal Ghost theme with a focus on simplicity and readability. Feel free to open issues or pull requests if you have any suggestions or improvements. Actively maintained.

## Customization Guide

This theme is highly customizable through CSS variables. You can modify these variables by adding custom CSS in your Ghost admin panel (Settings → Code injection → Site Header) or by editing the `assets/css/screen.css` file directly.

### Colors

```css
:root {
    --color-bg: #fff;          /* Background color */
    --color-text: #222;        /* Main text color */
    --color-link: #2b6cb0;     /* Link color */
    --color-secondary: #666;    /* Secondary text color */
    --border-subtle: #e2e8f0;  /* Border color */
}
```

### Typography

```css
:root {
    --font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif;
    --font-serif: "Charter", "Georgia", "Times New Roman", serif;
    --font-mono: "JetBrains Mono", "SF Mono", "Fira Code", Consolas, monospace;
}
```

To change fonts, replace the font names in the respective variables. For example, to use a custom font:

```css
:root {
    --font-serif: "Your Custom Font", Georgia, serif;
}
```

### Layout

```css
:root {
    --content-width: 650px;    /* Maximum width of content */
}
```

### Code Blocks

```css
:root {
    --code-bg: #f7fafc;        /* Inline code background */
    --code-block-bg: #f8fafc;  /* Code block background */
    --code-text: #1a202c;      /* Code text color */
    --code-border: #edf2f7;    /* Code block border */
}
```

### Dark Mode Support

The theme automatically supports dark mode based on system preferences. You can customize dark mode colors:

```css
@media (prefers-color-scheme: dark) {
    :root {
        --color-bg: #1a202c;
        --color-text: #e2e8f0;
        --color-link: #63b3ed;
        --color-secondary: #a0aec0;
        --border-subtle: #2d3748;
    }
}
```

### Common Customizations

1. **Change the accent color:**
```css
:root {
    --color-link: #your-color-here;
}
```

2. **Adjust content width:**
```css
:root {
    --content-width: 800px; /* Wider content area */
}
```

3. **Use custom fonts:**
```css
:root {
    --font-sans: "Your Sans Font", system-ui, sans-serif;
    --font-serif: "Your Serif Font", Georgia, serif;
}
```

4. **Modify code block appearance:**
```css
:root {
    --code-block-bg: #f3f4f6;
    --code-border: #e5e7eb;
}
```

### Adding Custom CSS

To add custom CSS without modifying the theme files:

1. Go to your Ghost admin panel
2. Navigate to Settings → Code injection
3. Add your custom CSS in the Site Header section:

```html
<style>
    :root {
        /* Your custom variables here */
    }
    
    /* Your custom styles here */
</style>
```

## Features

- Responsive design
- Dark mode support
- Clean typography
- Syntax highlighting
- RSS feed support
- Mastodon sharing
- Optimized images
- Fast loading
- SEO friendly

## Support

If you need help customizing the theme or encounter any issues, please open an issue on the repository.

## License

MIT License - feel free to use this theme for any purpose, commercial or non-commercial.
