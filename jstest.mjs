import { JSDOM } from "jsdom";

const dom = new JSDOM(
  '<!DOCTYPE html><html><body><div id="root"></div></body></html>',
  {
    url: "http://localhost:4174/",
    pretendToBeVisual: true, // requestAnimationFrame
  },
);

const { window } = dom;
globalThis.window = window;
globalThis.document = window.document;
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
globalThis.requestAnimationFrame = window.requestAnimationFrame.bind(window);
globalThis.cancelAnimationFrame = window.cancelAnimationFrame.bind(window);
globalThis.HTMLElement = window.HTMLElement;
globalThis.Element = window.Element;
globalThis.Node = window.Node;
globalThis.MutationObserver = window.MutationObserver;
globalThis.IntersectionObserver = class {
  observe() {}
  disconnect() {}
  unobserve() {}
};
globalThis.ResizeObserver = class {
  observe() {}
  disconnect() {}
};
globalThis.getComputedStyle = window.getComputedStyle.bind(window);
globalThis.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {} });

const errors = [];
window.addEventListener("error", (e) => errors.push("winerr: " + e.message));

try {
  await import("./dist/assets/index-D2OGDZCl.js");
} catch (e) {
  console.error("IMPORT-THREW:", e.message);
  console.error(e.stack?.split("\n").slice(0, 8).join("\n"));
  process.exit(1);
}

await new Promise((r) => setTimeout(r, 2500));

const root = window.document.getElementById("root");
console.log("root children:", root.children.length);
console.log("root html len:", root.innerHTML.length);
console.log("errors:", errors);
console.log("first 200 of html:", root.innerHTML.slice(0, 200));
