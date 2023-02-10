export const mountCssLink = () => {
  const head = document.querySelector("head");
  const mountPoint = head || document;

  const element = document.createElement("link");
  element.rel = "stylesheet";
  element.href = process.env.VUE_APP_CSS_LINK;

  mountPoint.appendChild(element);
};
