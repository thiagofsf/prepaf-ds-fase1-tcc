import type { Preview } from "@storybook/react";
import '../src/styles/global.css';
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      showPanel: true,
    },
  },
};

export default preview;
