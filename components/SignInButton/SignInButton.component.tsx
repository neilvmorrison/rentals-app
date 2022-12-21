import { useUser } from "../../contexts/user.context";
import { signInWithGoogle } from "../../utils/auth";

const SignInButton = () => {
  async function handleSignIn() {
    const auth = await signInWithGoogle();
  }
  return (
    <button onClick={handleSignIn} className="bg-blue-400 rounded-md px-2 py-1">
      Sign In
    </button>
  );
};

export default SignInButton;
