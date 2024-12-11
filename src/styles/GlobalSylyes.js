import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* Colors */
  --color-cyan-light: #e0ffff;
  --color-cyan: #00ced1;
  --color-grey-white: #f5f5f5;
  --color-deep-grey: #2c2c2c;
  --color-dark: #121212;
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;
  --color-brand-200:#00ced1;

  /* Text */
  --font-primary: "Poppins", sans-serif;
  --font-secondary: "Roboto", sans-serif;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.15);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.25);

  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;

  /* Dark Mode Adjustments */
  --image-grayscale: 0;
  --image-opacity: 90%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Smooth transitions */
  transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: var(--font-primary);
  color: var(--color-grey-white);
  background-color: var(--color-dark);
  min-height: 100vh;
  line-height: 1.6;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  border: none;
  border-radius: var(--border-radius-md);
  background-color: var(--color-deep-grey);
  color: var(--color-cyan-light);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-cyan);
  box-shadow: 0 0 4px var(--color-cyan);
}

button {
  cursor: pointer;
  background-color: var(--color-cyan);
  color: var(--color-deep-grey);
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

button:hover {
  background-color: var(--color-cyan-light);
  color: var(--color-dark);
  box-shadow: var(--shadow-md);
}

*:disabled {
  cursor: not-allowed;
  background-color: var(--color-deep-grey);
  color: var(--color-grey-white);
}

select:disabled,
input:disabled {
  background-color: var(--color-deep-grey);
  color: var(--color-grey-white);
}

a {
  color: var(--color-cyan-light);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
  font-family: var(--font-secondary);
}

h1 {
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--color-cyan);
}

h2 {
  font-size: 2.4rem;
  color: var(--color-cyan-light);
}

img {
  max-width: 100%;
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
