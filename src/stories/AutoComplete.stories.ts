import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import AutoComplete from "../components/AutoComplete";

import "../index.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/AutoComplete",
  component: AutoComplete,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof AutoComplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  args: {
    isMultiple: true,
    getOptionLabel: (option) => (option as any).label,
    options: [
      { label: "Option 1", id: "1" },
      { label: "Option 2", id: "2" },
      { label: "Option 3", id: "3" },
      { label: "Option 4 Test With Long Text", id: "4" },
      { label: "Option 5 Test With Long Text", id: "5" },
      { label: "Option 3 Test With Long Text", id: "6" },
      { label: "Option 2 Test With Long Text", id: "7" },
    ],
    onChange: fn(),
    value: [{ label: "Option 1", id: "1" }],
    usePortal: true,
    useSearch: true,
  },
};
