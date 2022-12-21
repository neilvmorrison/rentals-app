import { useRouter } from "next/router";

function Profile() {
  const router = useRouter();
  const { profileId } = router.query;
  return (
    <div>
      <h2>Profile Id: {profileId}</h2>
    </div>
  );
}

export default Profile;
