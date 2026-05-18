import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export type Lang = "en" | "ru";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Navbar lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      </div>
      <Hero lang={lang} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <About lang={lang} />
        <Features />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
}
