# Contributing to v-paginate-pretty

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd vue-pagination
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build the library:
```bash
npm run build
```

## Project Structure

```
vue-pagination/
├── src/
│   ├── components/       # Vue components
│   ├── composables/      # Composition API utilities
│   ├── styles/          # CSS styles and themes
│   ├── types/           # TypeScript definitions
│   └── index.ts         # Main entry point
├── dist/                # Build output
└── demo.html           # Demo page
```

## Code Style

- Use TypeScript for all new code
- Follow Vue 3 Composition API best practices
- Use `<script setup>` syntax
- Write clear, descriptive comments in English
- Use meaningful variable and function names

## Adding a New Theme

1. Create a new CSS file in `src/styles/themes/`
2. Define CSS variables for your theme
3. Import the theme in `src/index.ts`
4. Add the theme name to the `PaginationProps` type
5. Update README with theme documentation

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Reporting Bugs

Please include:
- Vue version
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Code sample if possible

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
