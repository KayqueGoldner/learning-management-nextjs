"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { BellIcon, BookOpenIcon } from "lucide-react";
import Link from "next/link";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export const Navbar = ({ isCoursePage }: { isCoursePage: boolean }) => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.userType as "student" | "teacher";

  return (
    <nav className="dashboard-navbar">
      <div className="dashboard-navbar__container">
        <div className="dashboard-navbar__search">
          <div className="md:hidden">
            <SidebarTrigger className="dashboard-navbar__sidebar-trigger" />
          </div>
          <div className="flex items-center gap-4">
            <div className="group relative">
              <Link
                href="/search"
                className={cn(
                  "dashboard-navbar__search-input",
                  isCoursePage && "!bg-customgreys-secondarybg",
                )}
              >
                <span className="hidden sm:inline">Search Courses</span>
                <span className="sm:hidden">Search</span>
              </Link>
              <BookOpenIcon
                className="dashboard-navbar__search-icon"
                size={18}
              />
            </div>
          </div>
        </div>
        <div className="dashboard-navbar__actions">
          <button className="nondashboard-navbar__notification-button">
            <span className="nondashboard-navbar__notification-indicator"></span>
            <BellIcon className="nondashboard-navbar__notification-icon" />
          </button>

          <UserButton
            appearance={{
              baseTheme: dark,
              elements: {
                userButtonOuterIdentifier: "text-customgreys-dirtyGrey",
                userButtonBox: "scale-90 sm:scale-100",
              },
            }}
            showName={true}
            userProfileMode="navigation"
            userProfileUrl={
              userRole === "teacher" ? "/teacher/profile" : "/user/profile"
            }
          />
        </div>
      </div>
    </nav>
  );
};