"use client";
import { useTransition, useState } from "react";
import { handleEmailSignIn } from "@/lib/auth/emailSignInServerAction";

import SocialButtons from "@/components/SocialButtons/SocialButtons";

export const SignInPage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({ email: "" as string });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the form from submitting and reloading the page, allowing us to handle the submission in TypeScript.
    try {
      startTransition(async () => {
        await handleEmailSignIn(formData.email);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Sign In</h2>
        <div className="form-container">
          <form className="email-signin-form" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="email"
              maxLength={320}
              placeholder="Email Address"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ email: event.target.value })
              }
              disabled={isPending}
              required
            />
            <button className="submit-button" type="submit">
              Sign in with email
            </button>
          </form>

          <div className="divider">
            <div className="line"></div>
            <span className="or">or</span>
            <div className="line"></div>
          </div>

          <div className="social-logins">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
};