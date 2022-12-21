import { useEffect } from "react";
import { Router, useRouter } from "next/router";
import { useUser } from "../contexts/user.context";

function usePrivateRoute() {
  const { loadingUser, isAuthenticated } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (loadingUser) return;
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router, loadingUser]);
}

export default usePrivateRoute;
