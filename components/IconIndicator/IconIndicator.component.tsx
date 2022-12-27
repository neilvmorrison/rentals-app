import { UnstyledButton, Indicator, ActionIcon } from "@mantine/core";

export interface IconIndicatorProps {
  icon: React.ReactNode;
  showIndicator: boolean;
  onClick: (args: any) => void | Promise<void>;
}

function IconIndicator({ icon, showIndicator, onClick }: IconIndicatorProps) {
  return (
    <Indicator disabled={!showIndicator} dot inline color="red" processing>
      <UnstyledButton onClick={onClick}>
        <ActionIcon color="gray">{icon}</ActionIcon>
      </UnstyledButton>
    </Indicator>
  );
}

export default IconIndicator;
