"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Loading } from "@/components/Loading";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import ChaptersSidebar from "@/app/(dashboard)/user/courses/[courseId]/ChaptersSidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [courseId, setCourseId] = useState<string | null>(null);
  const { user, isLoaded } = useUser();
  const isCoursePage = /^\/user\/courses\/[^\/]+(?:\/chapters\/[^\/]+)?$/.test(
    pathname,
  );

  useEffect(() => {
    if (isCoursePage) {
      const match = pathname.match(/\/user\/courses\/([^\/]+)/);
      setCourseId(match ? match[1] : null);
    } else {
      setCourseId(null);
    }
  });

  if (!isLoaded) {
    return <Loading />;
  }

  if (!user) {
    return <div>Please sign in to access this page.</div>;
  }

  return (
    <SidebarProvider>
      <div className="dashboard">
        <AppSidebar />
        <div className="dashboard__content">
          {courseId && <ChaptersSidebar />}
          <div
            className={cn(
              "dashboard__main",
              isCoursePage && "dashboard__main--not-course",
            )}
            style={{ height: "100vh" }}
          >
            <Navbar isCoursePage={isCoursePage} />
            <main className="dashboard__body">{children}</main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
