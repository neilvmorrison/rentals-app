import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUser } from "../../contexts/user.context";

function MyProfile() {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    async function fetchUserProfile() {
      if (!user) return router.push("/");
      const url = `/api/profile/me?uid=${user.uid}`;
      const res = await fetch(url);
      const result = await res.json();
    }
    fetchUserProfile();
  }, [user, router]);

  return (
    <div>
      <h2>This is my profile</h2>
    </div>
  );
}

export default MyProfile;
