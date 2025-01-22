import {
  clerkClient,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isStudentRoute = createRouteMatcher(["/user/(.*)"]);
const isTeacherRoute = createRouteMatcher(["/teacher/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const url = req.nextUrl;
  const { pathname } = url;

  // Evitar redirecionar rotas que já são de autenticação ou redirecionamento
  const excludedRoutes = ["/signin", "/teacher/courses", "/user/courses"];
  if (excludedRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const { userId } = await auth();

  if (!userId) {
    const signInUrl = new URL("/signin", req.url);
    return NextResponse.redirect(signInUrl);
  }

  const clerkClient_ = await clerkClient();
  const user = await clerkClient_.users.getUser(userId);

  const userRole =
    (user.publicMetadata?.userType as "student" | "teacher") || "student";

  if (isStudentRoute(req)) {
    if (userRole !== "student") {
      const teacherUrl = new URL("/teacher/courses", req.url);
      return NextResponse.redirect(teacherUrl);
    }
  }

  if (isTeacherRoute(req)) {
    if (userRole !== "teacher") {
      const studentUrl = new URL("/user/courses", req.url);
      return NextResponse.redirect(studentUrl);
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|signin|teacher/courses|user/courses|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
