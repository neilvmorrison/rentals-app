import { Button } from "@mantine/core";
import { logOut } from "../../utils/auth";
import usePrivateRoute from "../../hooks/usePrivateRoute";

function MyProfile() {
  usePrivateRoute();
  const handleLogOut = async (): Promise<void> => {
    return logOut();
  };
  return (
    <div>
      <h2>This is my profile</h2>
      <Button color="red" variant="outline" onClick={handleLogOut}>
        Log out
      </Button>
    </div>
  );
}

export default MyProfile;
