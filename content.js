(function () {
  if (window.__OPEN_AS_APP_LISTENER__) return;
  window.__OPEN_AS_APP_LISTENER__ = true;

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.altKey && e.shiftKey && (e.key || "").toLowerCase() === "a") {
        e.preventDefault();
        e.stopPropagation();
        chrome.runtime.sendMessage({ type: "OPEN_AS_APP" });
      }
    },
    true
  );
})();
