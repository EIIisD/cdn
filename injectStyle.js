(function injectStyle() {
  const css =
    "@import url('https://raw.githubusercontent.com/EIIisD/cdn/main/reflectApp.css');";

  let style = document.querySelector("style[data-injected-style]");

  if (style) {
    style.textContent = css;
  } else {
    style = document.createElement("style");
    style.setAttribute("data-injected-style", "");
    style.textContent = css;
    document.head.appendChild(style);
  }
})();
