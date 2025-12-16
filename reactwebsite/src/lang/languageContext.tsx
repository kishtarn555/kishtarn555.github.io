import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from "react";
import English from "./en";

type Language = "en" | "es" | "ja";
type Dictionary = Record<string, string>;

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

// Cache to avoid refetching
const dictionaryCache: Partial<Record<Language, Dictionary>> = { 'en': English };

async function loadDictionary(lang: Language): Promise<Dictionary> {
  if (lang === "en") {
    return English;
  }
  const res = await fetch(`/lang/${lang}.json`);
  if (!res.ok) {
    throw new Error(`Failed to load ${lang} translations`);
  }
  return res.json();
}

interface Props {
  children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>(localStorage.getItem("language") as Language || "en");
  const [dict, setDict] = useState<Dictionary>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    localStorage.setItem("language", language);

    async function load() {
      setLoading(true);

      if (!dictionaryCache[language]) {
        dictionaryCache[language] = await loadDictionary(language);
      }

      if (!cancelled) {
        setDict(dictionaryCache[language]!);
        setLoading(false);
      }
    }

    load().catch((err) => {
      console.error("Error loading language dictionary:", err)
      if (!cancelled) {
        setDict(English);
        setLanguage("en");
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [language]);

  const t = (key: string) => dict[key] ?? English[key] ?? key;

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, loading }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
