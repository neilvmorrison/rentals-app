import Link from "next/link";
import { Button } from "@mantine/core";

interface LinkButtonProps {
  href: string;
  children: string;
}

function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link href={href}>
      <Button component="a">{children}</Button>
    </Link>
  );
}

export default LinkButton;
