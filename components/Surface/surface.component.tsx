import { ReactNode, forwardRef } from "react";
import { makeStyles } from "../../utils/helpers";

interface SurfaceProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Surface = forwardRef(function SurfaceComponent(
  { children, className }: SurfaceProps,
  ref
) {
  const baseStyles = "shadow-md p-4 bg-white rounded-md border";
  const styles = makeStyles(baseStyles, className);
  return (
    <div className={styles} ref={ref}>
      {children}
    </div>
  );
});

export default Surface;
