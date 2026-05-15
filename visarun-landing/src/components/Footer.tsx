export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-6 text-center text-sm text-gray-400 dark:text-gray-500">
      © {new Date().getFullYear()} VisaRun. All rights reserved.
    </footer>
  );
}
