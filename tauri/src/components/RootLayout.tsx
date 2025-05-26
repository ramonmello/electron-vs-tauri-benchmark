import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutDashboard } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router";

const sidebarVariants = {
  open: {
    width: "15rem",
  },
  closed: {
    width: "3.05rem",
  },
};

const contentVariants = {
  open: { display: "block", opacity: 1 },
  closed: { display: "block", opacity: 1 },
};

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -20,
    opacity: 0,
    transition: {
      x: { stiffness: 100 },
    },
  },
};

const transitionProps = {
  type: "tween",
  ease: "easeOut",
  duration: 0.2,
  staggerChildren: 0.1,
};

const staggerVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.02 },
  },
};

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
}

const NavItem = ({ href, icon: Icon, label, isCollapsed }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex h-8 w-full flex-row items-center rounded-md px-2 py-1.5 transition hover:bg-muted hover:text-primary",
        isActive && "bg-muted text-blue-600"
      )}
    >
      <Icon className="h-4 w-4" />
      <motion.li variants={variants}>
        {!isCollapsed && <p className="ml-2 text-sm font-medium">{label}</p>}
      </motion.li>
    </Link>
  );
};

export function RootLayout() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="flex h-screen w-screen flex-row">
      <motion.div
        className={cn("sidebar fixed left-0 z-40 h-full shrink-0 border-r")}
        initial={isCollapsed ? "closed" : "open"}
        animate={isCollapsed ? "closed" : "open"}
        variants={sidebarVariants}
        transition={transitionProps}
        onMouseEnter={() => setIsCollapsed(false)}
        onMouseLeave={() => setIsCollapsed(true)}
      >
        <motion.div
          className="relative z-40 flex text-muted-foreground h-full shrink-0 flex-col bg-background transition-all"
          variants={contentVariants}
        >
          <motion.ul
            variants={staggerVariants}
            className="flex h-full flex-col"
          >
            <div className="flex grow flex-col items-center">
              <div className="flex h-[54px] w-full shrink-0 border-b p-2">
                <div className="mt-[1.5px] flex w-full">
                  <div className="flex items-center gap-2 px-2">
                    <motion.li
                      variants={variants}
                      className="flex w-fit items-center gap-2"
                    >
                      {!isCollapsed && (
                        <p className="text-lg font-bold text-foreground">
                          Scenarios
                        </p>
                      )}
                    </motion.li>
                  </div>
                </div>
              </div>

              <div className="flex h-full w-full flex-col">
                <div className="flex grow flex-col gap-4">
                  <ScrollArea className="h-16 grow p-2">
                    <div className={cn("flex w-full flex-col gap-1")}>
                      <NavItem
                        href="/"
                        icon={LayoutDashboard}
                        label="React Flow"
                        isCollapsed={isCollapsed}
                      />
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </motion.ul>
        </motion.div>
      </motion.div>
      <main className="flex h-screen grow flex-col overflow-auto pl-[3.05rem]">
        <Outlet />
      </main>
    </div>
  );
}
