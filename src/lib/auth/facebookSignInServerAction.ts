import { signIn } from "./authConfig";

export const handleFacebookSignIn = async () => {
  try {
    await signIn("facebook", { redirectTo: "/dashboard" });
  } catch (error) {
    throw error;
  }
};
