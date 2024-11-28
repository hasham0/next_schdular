"use client";

import { navItems } from "@/utils";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarLoader } from "react-spinners";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { isLoaded } = useUser();

  if (!isLoaded) {
    <BarLoader width={"100%"} height={"100%"} />;
  }
  return (
    <div>
      <div className="flex h-screen flex-col bg-blue-50 md:flex-row">
        {/* Sidebar for medium screens and up */}
        <aside className="hidden w-64 bg-white md:block">
          <nav className="mt-8">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-4 text-gray-700 hover:bg-gray-100 ${
                      pathname === item.href ? "bg-blue-100" : ""
                    }`}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <header className="mb-4 flex items-center justify-between">
            <h2 className="gradient-title w-full pt-2 text-center text-5xl md:pt-0 md:text-left md:text-6xl">
              {navItems.find((item) => item.href === pathname)?.label ||
                "Dashboard"}
            </h2>
          </header>
          {children}
        </main>

        {/* Bottom tabs for small screens */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md md:hidden">
          <ul className="flex justify-around">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex flex-col items-center px-4 py-2 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="mt-1 text-xs">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
