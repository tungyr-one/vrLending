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
      <Navbar lang={lang} setLang={setLang} dark={dark} setDark={setDark} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Features />
      <Contact />
      <Footer />
    </Layout>
  );
}
