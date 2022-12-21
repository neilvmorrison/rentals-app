import { signInWithGoogle } from "../../utils/auth";
import { name } from "../../constants/name";

function SignUp() {
  const handleSignUp = async (): Promise<void> => {
    const { user } = await signInWithGoogle();
    if (!user) return;
    const payload = {
      userId: user.uid,
      email: user.email,
    };
    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const result = await res.json();
    console.log({ result });
  };

  return (
    <div className="h-[calc(100vh-55px)] flex items-center p-8">
      <div>
        <h1>Sign up for Rental Buddy</h1>
        <p>Create an account with us for a bunch of reasons!</p>
        <button
          className="mt-4 bg-blue-400 rounded-md px-3 py-2 text-white"
          onClick={handleSignUp}
        >
          Sign Up For {name}
        </button>
      </div>
    </div>
  );
}

export default SignUp;
