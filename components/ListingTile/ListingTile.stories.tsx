import { ComponentMeta } from "@storybook/react";
import { Group, Grid } from "@mantine/core";
import ListingTile, { ListingTileProps } from "./ListingTile.component";

export const Default = (args: ListingTileProps) => {
  return (
    <Grid>
      <Grid.Col span={4}>
        <ListingTile {...args} />
      </Grid.Col>
    </Grid>
  );
};

function testTileClick() {
  alert("Tile Clicked!");
}

function testIconClick() {
  alert("Icon Clicked!");
}

Default.args = {
  src: "http://unsplash.it/1080/768",
  alt: "This is a test Image",
  height: 160,
  title: "Luxurious One Bedroom Penthouse",
  address: "2 Bloor Street, Toronto, Ontario, M4E 2Y8",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio unde quis vel voluptatum molestiae sunt, laborum nobis at deleniti numquam officiis, quibusdam cumque magni? Quia inventore cupiditate ducimus ipsam consectetur.",
  onTileClick: testTileClick,
  onIconClick: testIconClick,
};

export default {
  title: "Listing Tile",
  component: ListingTile,
} as ComponentMeta<typeof ListingTile>;
