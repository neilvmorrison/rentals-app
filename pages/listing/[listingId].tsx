import { useRouter } from "next/router";

function IndividualListing() {
  const router = useRouter();
  const { listingId } = router.query;
  return (
    <div>
      <h2>Listing Id: {listingId}</h2>
    </div>
  );
}

export default IndividualListing;
