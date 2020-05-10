import "./components/index.less";
export { default as Header } from "./components/Header";
export { default as Footer } from "./components/Footer";
export { default as H } from "./components/H";
export { default as Button } from "./components/Button";
export { default as Link } from "./components/Link";
export { default as Dropdown } from "./components/Dropdown";

/*
export let isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

//window.dispatchEvent(new CustomEvent("darkMode", { detail: isDarkMode }));

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    isDarkMode = e.matches;
    window.dispatchEvent(new CustomEvent("darkMode", { detail: isDarkMode }));
  });
  */

/*
export let useDarkModeFeature = false;

let isDarkMode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  console.log("darkmode!");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newColorScheme = e.matches ? "dark" : "light";
    console.log(newColorScheme);
    isDarkMode = e.matches;
  });
*/
