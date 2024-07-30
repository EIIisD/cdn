/** @url file:///Users/Reply/Projects/devtools-snippets-lib/injectStyle.js */
(function injectStyle() {
  const css =
    // `@import url('file:///Users/Reply/Projects/devtools-snippets-lib/reflectApp.css');`.trim();
    `@import url('http://i16.local/Users/Reply/Projects/devtools-snippets-lib/reflectApp.css');`.trim();

  let style = document.querySelector("style[data-injected-style]");

  if (style) {
    style.textContent = css;
    return;
  }

  style = document.createElement("style");
  style.setAttribute("data-injected-style", "");
  style.textContent = css;
  document.head.appendChild(style);
})();
