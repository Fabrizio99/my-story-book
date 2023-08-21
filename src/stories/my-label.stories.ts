import MyLabel from "@/components/my-label";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    allCaps: false,
  },
  argTypes: {
    label: {
      description: "Text to be displayed",
      type: "string",
    },
    size: {
      description: "Label size",
      type: "symbol",
      control: "select",
      options: ["normal", "h1", "h2", "h3"],
    },
    allCaps: {
      description: "Capitalize text",
      type: "boolean",
    },
    color: {
      description: "Set color",
      type: "symbol",
      control: "select",
      options: ["text-primary", "text-secondary", "text-tertiary"],
    },
    fontColor: {
      description: "Set custom color",
      control: "color",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
    size: "normal",
    color: "text-secondary",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    size: "normal",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    size: "normal",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color label",
    size: "normal",
    fontColor: "#46734b",
  },
};
