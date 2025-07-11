import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --primary: #3a5a78;
        --primary-light: #4d7ca8;
        --secondary: #e7c9a9;
        --accent: #d4a373;
        --dark: #2b2d42;
        --light: #f8f9fa;
        --gray: #6c757d;
        --success: #28a745;
        --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12),
          0 1px 2px rgba(0, 0, 0, 0.24);
        --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
        --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.1),
          0 6px 6px rgba(0, 0, 0, 0.1);
        --radius-sm: 4px;
        --radius-md: 8px;
        --radius-lg: 16px;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
        line-height: 1.7;
        color: var(--dark);
        background-color: var(--light);
        -webkit-font-smoothing: antialiased;
      }

      h1,
      h2,
      h3,
      h4 {
        font-weight: 600;
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      a {
        text-decoration: none;
        color: inherit;
        transition: var(--transition);
      }

      button,
      input,
      textarea {
        font-family: inherit;
      }

      button {
        cursor: pointer;
        transition: var(--transition);
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
      }

      .page {
        min-height: calc(100vh - 120px);
      }
    `}
  />
);

export default GlobalStyles;
