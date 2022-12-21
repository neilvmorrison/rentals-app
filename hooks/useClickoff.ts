import { useEffect, RefObject } from "react";

function useClickoff(
  ref: RefObject<HTMLDivElement | null>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickoff;
