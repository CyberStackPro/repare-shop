import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginPage() {
  return (
    <main>
      <h1>Login</h1>

      <Button asChild>
        <LoginLink> SignIn</LoginLink>
      </Button>
    </main>
  );
}
