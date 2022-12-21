import { useEffect } from "react";

function usePrivateRoute() {
  useEffect(() => {
    console.log("privateRoute");
  });
}

export default usePrivateRoute;
