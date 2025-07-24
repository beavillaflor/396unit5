/* LANGUAGE BUTTON */

const langButton = document.querySelector("[data-lang-toggle]");
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
}

/* THEME BUTTON */ 

const themeButton = document.querySelector("[data-theme-toggle]");
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
}