"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  isOpen,
  setIsOpen,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `#about`,
      label: "About",
      active: pathname === `#about`,
    },
    {
      href: `#services`,
      label: "Projects",
      active: pathname === `#services`,
    },
    {
      href: `#contact`,
      label: "Contact",
      active: pathname === `#contact`,
    },
  ];

  return (
    <nav className={cn("flex items-center lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "transition-colors hover:text-primary",
            "text-black dark:text-white",
            className
          )}
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(!isOpen);
            }
          }}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
