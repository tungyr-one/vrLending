import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {children}
      </div>
    </div>
  );
}
