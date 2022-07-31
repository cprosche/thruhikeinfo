export const analytics = (
  w: Window,
  d: Document,
  s: string,
  l: string,
  i: string
) => {
  (w as any).dataLayer = (window as any).dataLayer || [];
  (w as any).dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });
  var dl = l != "dataLayer" ? "&l=" + l : "";
  var scr = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  if (!scriptExists(scr)) {
    var f = d.getElementsByTagName(s)[0],
      j: HTMLScriptElement = d.createElement("script");
    j.async = true;
    j.src = scr;
    f?.parentNode?.insertBefore(j, f);
  }
};
const scriptExists = (url: string) => {
  var scripts = document.getElementsByTagName("script");
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src == url) return true;
  }
  return false;
};
