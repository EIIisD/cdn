(function injectStyle() {
  const cssUrl =
    "https://raw.githubusercontent.com/EIIisD/cdn/main/reflectApp.css";

  let link = document.querySelector("link[data-injected-style]");

  if (link) {
    link.href = cssUrl;
  } else {
    link = document.createElement("link");
    link.setAttribute("data-injected-style", "");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = cssUrl;
    document.head.appendChild(link);
  }
})();
