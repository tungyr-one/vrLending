import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 transition-colors duration-200 overflow-x-hidden">
      {children}
    </div>
  );
}
