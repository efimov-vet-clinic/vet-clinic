export const useLockScroll = () => {
  const lock = () => {
    if (import.meta.client) {
      document.body.classList.add("no_scroll");
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    }
  };

  const unlock = () => {
    if (import.meta.client) {
      document.body.classList.remove("no_scroll");
      document.body.style.position = "";
      document.body.style.width = "";
    }
  };

  return {
    lock,
    unlock,
  };
};
