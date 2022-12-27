import { Button, Text } from "@mantine/core";
import { logOut } from "../../utils/auth";
import usePrivateRoute from "../../hooks/usePrivateRoute";
import { useUser } from "../../contexts/user.context";

function MyProfile() {
  usePrivateRoute();
  const { profile } = useUser();
  const handleLogOut = async (): Promise<void> => {
    return logOut();
  };
  return (
    <div>
      <h2>This is my profile</h2>
      <Text lineClamp={2}>{JSON.stringify(profile)}</Text>
      <Button color="red" variant="outline" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
}

export default MyProfile;
