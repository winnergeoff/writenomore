import {
  IconShieldExclamation
} from '@tabler/icons-react';

const AuthErrorPage: React.FC = () => {
  return (
    <div className="auth-error-page">
      <div className="auth-error-card">
        <div className="auth-error">
          <IconShieldExclamation size={48} stroke={1.5} className="icon" />

          <p>{"Oops, something went wrong."}</p>
        </div>
        <div>
          <p>
            {"To go back to the sign in page, "}

            <a
              href="/api/auth/signin"
              style={{ cursor: "pointer", textDecoration: "underline" }}
            >
              Click Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthErrorPage;