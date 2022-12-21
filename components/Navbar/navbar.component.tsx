import Link from "next/link";
import AvatarMenu from "./AvatarMenu/avatarMenu.component";
import { name } from "../../constants/name";
import LinkButton from "../Buttons/LinkButton.component";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center border-b px-8 h-[55px]">
        <Link href="/">{name}</Link>
        <div className="flex items-center">
          <Link className="mr-4" href="/listing/create">
            List Your Property
          </Link>
          <AvatarMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
