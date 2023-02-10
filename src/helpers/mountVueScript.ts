export const mountVueScript = () => {
  const selector = 'script[src$="weather-widget.umd.min.js"]';
  const mountPoint = document.querySelector(selector);

  const element = document.createElement("script");
  element.type = "text/javascript";
  element.src = process.env.VUE_APP_VUE_LINK;

  if (mountPoint) mountPoint.before(element);
};
