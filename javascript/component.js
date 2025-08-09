const { useState, useEffect } = React;

function LanguageToggle() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-lang-text]").forEach(el => {
      el.hidden = el.getAttribute("data-lang-text") !== lang;
    });
  }, [lang]);

  return React.createElement(
    "button",
    {
      "data-lang-toggle": true,
      "aria-label": lang === "tl" ? "View website in English" : "Tignan ang website sa Tagalog",
      onClick: () => setLang(lang === "en" ? "tl" : "en"),
    },
    lang === "tl" ? "View website in English" : "Tignan ang website sa Tagalog"
  );
}

function ThemeToggle() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(localStorage.getItem("theme") || (prefersDark ? "dark" : "light"));

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return React.createElement(
    "button",
    {
      "data-theme-toggle": true,
      "aria-label": theme === "dark" ? "Change to light theme" : "Change to dark theme",
      onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
    },
    theme === "dark" ? "Change to light theme" : "Change to dark theme"
  );
}

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(LanguageToggle),
    React.createElement(ThemeToggle)
  );
}

ReactDOM.createRoot(document.getElementById("react-toggle-root")).render(
  React.createElement(App)
);

/* LANGUAGE BUTTON */

/*const langButton = document.querySelector("[data-lang-toggle]");
let lang = localStorage.getItem("lang") || "en";

function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem("lang", lang);

document.documentElement.setAttribute("lang", lang);
document.documentElement.setAttribute("data-lang", lang);

langButton.textContent = lang === "tl" ? "View website in English" : "Tignan ang website sa Tagalog";
langButton.setAttribute("aria-label", langButton.textContent);

document.querySelectorAll("[data-lang-text]").forEach(el => {
  el.hidden = el.getAttribute("data-lang-text") !== lang;
});

}

if (langButton) {
  setLanguage(lang);
  langButton.addEventListener("click", () => {
    setLanguage(lang === "en" ? "tl" : "en"); 
  }); 
}*/

/* THEME BUTTON */ 

/*const themeButton = document.querySelector("[data-theme-toggle]");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
let theme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

function setTheme(newTheme) {
  theme = newTheme;
  localStorage.setItem("theme", theme);

document.documentElement.setAttribute("data-theme", theme);
themeButton.textContent = theme === "dark" ? "Change to light theme" : "Change to dark theme";
themeButton.setAttribute("aria-label", themeButton.textContent);
}

if (themeButton) {
  setTheme(theme);
  themeButton.addEventListener("click", () => {
    setTheme(theme === "dark" ? "light" : "dark");
  });
}*/
