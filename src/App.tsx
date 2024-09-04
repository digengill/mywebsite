import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import TableOfContents from "./components/TableOfContents";
import Email from "./components/Email";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent} from "firebase/analytics";

  const firebaseConfig = {
    apiKey: process.env['REACT_APP_ANALYTICS_API_KEY'],
    authDomain: process.env['REACT_APP_ANALYTICS_AUTH_DOMAIN'],
    projectId: process.env['REACT_APP_ANALYTICS_PROJECT_ID'],
    storageBucket: process.env['REACT_APP_ANALYTICS_STORAGE_BUCKET'],
    messagingSenderId: process.env['REACT_APP_ANALYTICS_MESSAGING_SENDER_ID'],
    appId: process.env['REACT_APP_ANALYTICS_APP_ID'],
    measurementId: process.env['REACT_APP_ANALYTICS_MEASUREMENT_ID'],
  };


export default function App() {
  const [currPage, setPage] = useState("hero");

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  useEffect(() => {
    logEvent(analytics, 'login', {description: 'login'});
  }, []);

  return (
    <div className="flex flex-col bg-slate-800 items-center">
      <TableOfContents currPage={currPage} setPage={setPage} />
      {currPage === "hero" && <Hero />}
      {currPage === "info" && <Info />}
      {currPage === "projects" && <Projects />}
      {currPage === "contact" && <Contact />}
      <Email />
      <Footer></Footer>
    </div>
  );
}
