import { ComponentMeta } from "@storybook/react";
import LinkButton from "./LinkButton.component";

export const Test = () => {
  return <LinkButton href="/link">Test Link Button</LinkButton>;
};

export default {
  title: "Link Button",
  component: LinkButton,
} as ComponentMeta<typeof LinkButton>;
