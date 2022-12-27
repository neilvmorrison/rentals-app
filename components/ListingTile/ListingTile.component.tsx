import {
  Card,
  Text,
  Badge,
  Image,
  Group,
  UnstyledButton,
  ActionIcon,
} from "@mantine/core";
import { IconHeart } from "@tabler/icons";

export interface ListingTileProps {
  src: string;
  alt: string;
  height?: number;
  title: string;
  address: string;
  badge?: string;
  description: string;
  onTileClick: () => void;
  onIconClick: () => void;
}

function ListingTile({
  src,
  alt,
  height = 160,
  badge,
  address,
  title,
  description,
  onTileClick,
  onIconClick,
}: ListingTileProps) {
  return (
    <Card shadow="sm">
      <Card.Section sx={{ position: "relative" }}>
        <Image src={src} alt={alt} height={height} />
        <ActionIcon
          sx={{ position: "absolute", right: 12, top: 12 }}
          onClick={onIconClick}
        >
          <IconHeart />
        </ActionIcon>
      </Card.Section>
      <Card.Section p="md">
        <UnstyledButton onClick={onTileClick}>
          <Group>
            <Text weight="bold">{title}</Text>
            {badge && <Badge>{badge}</Badge>}
          </Group>
          <Text size="sm" color="dimmed">
            {address}
          </Text>
          <Text lineClamp={3} mt="xs">
            {description}
          </Text>
        </UnstyledButton>
      </Card.Section>
    </Card>
  );
}

export default ListingTile;
