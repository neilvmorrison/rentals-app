import { ComponentMeta } from "@storybook/react";
import IconIndicator, { IconIndicatorProps } from "./IconIndicator.component";
import { IconMessage2 } from "@tabler/icons";

export const Default = (args: IconIndicatorProps) => {
  return <IconIndicator {...args} />;
};

function testClick() {
  alert("Clicked!");
}

Default.args = {
  icon: <IconMessage2 />,
  showIndicator: true,
  onClick: testClick,
};

export default {
  title: "Icon Indicator",
  component: IconIndicator,
} as ComponentMeta<typeof IconIndicator>;
