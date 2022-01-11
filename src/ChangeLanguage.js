import React, { useContext } from "react";
import { LanguageContext } from "./context/languageContext";

export default function ChangeLanguage() {
  const { contextLang, setContextLang } = useContext(LanguageContext);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setContextLang(contextLang === "ar" ? "en" : "ar")}
      >
        {contextLang}
      </button>
    </div>
  );
}
