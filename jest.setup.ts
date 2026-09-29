import "@testing-library/jest-dom";

// jsdom lacks these browser APIs, which Mantine and useScrollspy depend on.
const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

window.HTMLElement.prototype.scrollIntoView = jest.fn();

Object.defineProperty(window, "matchMedia", {
   writable: true,
   value: jest.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
   })),
});

class ResizeObserverStub {
   observe() {}
   unobserve() {}
   disconnect() {}
}
window.ResizeObserver = ResizeObserverStub;

class IntersectionObserverStub {
   readonly root = null;
   readonly rootMargin = "";
   readonly thresholds = [];
   observe() {}
   unobserve() {}
   disconnect() {}
   takeRecords() {
      return [];
   }
}
window.IntersectionObserver =
   IntersectionObserverStub as unknown as typeof IntersectionObserver;
