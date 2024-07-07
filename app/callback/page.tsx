import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function CallbackAuth() {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect(
      "/api/auth/login?post_login_redirect_url=https://localhost:3000/callback",
    );
  }

  const user = await getUser();

  if (!user) {
    return redirect(
      "/api/auth/login?post_login_redirect_url=https://localhost:3000/callback",
    );
  }

  // check if user exists in graph db
  // if not, create user in graph db
  //
}
