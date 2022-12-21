import { ReactNode, useState, useRef } from "react";
import { useRouter } from "next/router";
import { useUser } from "../../../contexts/user.context";
import useClickoff from "../../../hooks/useClickoff";
import { signInWithGoogle } from "../../../utils/auth";
import Divider from "../../Divider/divider.component";
import Surface from "../../Surface/surface.component";

interface MenuItemProps {
  onClick: () => void;
  children: ReactNode | string;
}

interface DropDownMenuProps {
  toggleMenu: () => void;
  isAuthenticated: boolean;
  logOut: () => Promise<void>;
}

interface AuthenticatedMenuProps {
  logOut: () => Promise<void>;
  handleRedirect: (url: string) => void;
}

interface UnAuthenticatedMenuProps {
  handleRedirect: (url: string) => void;
}

function MenuItem({ onClick, children }: MenuItemProps) {
  return (
    <li className="py-1 px-2 hover:bg-gray-100 rounded-md">
      <button onClick={onClick} className="w-full text-left">
        {children}
      </button>
    </li>
  );
}

function AuthenticatedMenu({ logOut, handleRedirect }: AuthenticatedMenuProps) {
  return (
    <>
      <MenuItem onClick={() => handleRedirect("/profile/me")}>
        My profile
      </MenuItem>
      <MenuItem onClick={() => handleRedirect("/saved")}>
        Saved listings
      </MenuItem>
      <div className="py-2">
        <Divider />
      </div>
      <MenuItem onClick={async () => await logOut()}>Log out</MenuItem>
    </>
  );
}

function UnAuthenticatedMenu({ handleRedirect }: UnAuthenticatedMenuProps) {
  const handleSignIn = async (): Promise<void> => {
    await signInWithGoogle();
  };

  const handleSignUp = async (): Promise<void> => {
    handleRedirect("/signup");
  };

  return (
    <>
      <MenuItem onClick={handleSignUp}>Sign up</MenuItem>
      <MenuItem onClick={handleSignIn}>Log in</MenuItem>
      <div className="py-2">
        <Divider />
      </div>
      <MenuItem onClick={() => handleRedirect("/listing/create")}>
        List your property
      </MenuItem>
    </>
  );
}

function DropDownMenu({
  toggleMenu,
  isAuthenticated,
  logOut,
}: DropDownMenuProps) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  useClickoff(ref, toggleMenu);

  const handleRedirect = (url: string): void => {
    router.push(url);
  };

  return (
    <Surface className="absolute top-[110%] right-0 w-52" ref={ref}>
      <ul>
        {isAuthenticated ? (
          <AuthenticatedMenu logOut={logOut} handleRedirect={handleRedirect} />
        ) : (
          <UnAuthenticatedMenu handleRedirect={handleRedirect} />
        )}
      </ul>
    </Surface>
  );
}

function AvatarMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut, isAuthenticated } = useUser();

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  const baseStyles = `h-[32px] w-[32px] bg-gray-100 rounded-full cursor-pointer`;

  return (
    <div className="flex relative">
      <div
        className={baseStyles}
        onClick={toggleMenu}
        style={{
          backgroundImage: user
            ? `url(${user?.providerData[0].photoURL})`
            : undefined,
          backgroundSize: "cover",
        }}
      />
      {menuOpen && (
        <DropDownMenu
          toggleMenu={toggleMenu}
          isAuthenticated={isAuthenticated}
          logOut={logOut}
        />
      )}
    </div>
  );
}

export default AvatarMenu;
