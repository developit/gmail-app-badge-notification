let observer;
(() => {
    observer = new MutationObserver(function(mutations) {
      const m = String(mutations[0].target.innerText).match(/Inbox(?: \((\d+)\))? -/);
      if (m) navigator.setAppBadge((m[1]|0) || null);
    });
    observer.observe(
      document.querySelector('title'),
      { subtree: true, characterData: true, childList: true }
    );
})();

