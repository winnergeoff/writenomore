import { PaymentsPage } from "./payments";
import { checkIsAuthenticated } from "@/lib/auth/checkIsAuthenticated";
import { useRouter } from "next/router";
const Payments: React.FC = async () => {
  const isAuthenticated = await checkIsAuthenticated();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push({
      pathname: "/auth/sign-in",
      query: { from: router.pathname }
    });
  } else {
    return <PaymentsPage />;
  }
};

export default Payments;
