import {
  Avatar,
  Group,
  Box,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { User } from "@firebase/auth";
import { useRouter } from "next/router";

interface UserTileProps {
  user: User | null | undefined;
}

function UserTile({ user }: UserTileProps) {
  const theme = useMantineTheme();
  const router = useRouter();
  const handleNavigate = (url: string): void => {
    router.push(url);
  };
  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
        onClick={() => handleNavigate("/profile/me")}
      >
        <Group>
          <Avatar src={user?.photoURL} radius="xl" />
          <Box sx={{ flex: 1 }}>
            <Text size="sm">{user?.displayName}</Text>
            <Text color="dimmed" size="xs">
              {user?.email}
            </Text>
          </Box>
        </Group>
      </UnstyledButton>
    </Box>
  );
}

export default UserTile;
