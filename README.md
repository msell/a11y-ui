# PeopleMedia Design System

UI component library designed for PeopleMedia.

This library builds on top of [Reakit](https://reakit.io/).  Reakit was built with accessibility and customization in mind.

**Why is this a seperate project versus just part of the PMWeb_React codebase?**

- Creating it as its own libraries frees us from having to rely on specific versions of dependcies that the app code base uses.
- better typescript support (currently theming is mostly ejcted from ts <any>)
- It is easier to create a living style guide (Storybook) to develop and demonstrate the components in isolation.
- Code reuse.  Jason was already talking about a second app that could potentially leverage this UI framework.
- Oppertunity to restructure theme schema to better suit PM

** Getting Started with development **

```
npm install
npm run storybook
```

** TODOs **
- migrate from rollup to webpack (rollup is having issues with some node_modules and alias is weird)
- react-testing-library
- how are we going to ensure a11y? a11y lint or perhaps react-testing-library?

The benefit to using a JavaScript file for the .eslintrc file (instead of a JSON file) as it supports comments that can be used to better describe rules.

The advantage of having prettier setup as an ESLint rule using eslint-plugin-prettier is that code can automatically be fixed using ESLint's --fix option.

** Resources **

[Pluralsight course](https://app.pluralsight.com/guides/react-typescript-module-create)

[guide to setting up React design system](https://dev.to/swyx/quick-guide-to-setup-your-react--typescript-storybook-design-system-1c51)

[favor eslint over tslint](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)