import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
    alert("Application sent!");
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
        Apply for Visa Run
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto mb-10">
        Fill in the form and we'll get back to you shortly.
      </p>
      <form onSubmit={submit} className="flex flex-col gap-4 max-w-sm mx-auto">
        <input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-teal dark:focus:border-teal transition-colors"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-teal dark:focus:border-teal transition-colors"
        />
        <button
          type="submit"
          className="bg-accent hover:bg-accent-dk text-gray-900 font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Send
        </button>
      </form>
    </section>
  );
}
