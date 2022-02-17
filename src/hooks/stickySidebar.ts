interface StickySidebarOptions {
  offsetTop: number;
  offsetBottom: number;
}

// Sticky sidebar logic from:
// https://github.com/Krzysztof-Antosik/Two-direction-Sticky-Sidebar
export const useStickySidebar = ({
  offsetTop,
  offsetBottom,
}: StickySidebarOptions) => {
  const enableSticky = () => {
    const aside = document.querySelector('[data-sticky="true"]') as
      | HTMLDivElement
      | undefined;
    const startScroll = 0;

    if (!aside) {
      return null;
    }

    let endScroll = window.innerHeight - aside.offsetHeight - 500,
      currPos = window.scrollY,
      screenHeight = window.innerHeight,
      asideHeight = aside.offsetHeight;
    aside.style.top = startScroll + "px";

    const onScroll = () => {
      endScroll = window.innerHeight - aside.offsetHeight;
      let asideTop = parseInt(aside.style.top.replace("px;", ""));
      if (asideHeight > screenHeight) {
        if (window.scrollY < currPos) {
          //scroll up
          if (asideTop < startScroll) {
            aside.style.top = asideTop + currPos - window.scrollY + "px";
          } else if (asideTop >= startScroll && asideTop != startScroll) {
            aside.style.top = startScroll + offsetTop + "px";
          }
        } else {
          //scroll down
          if (asideTop > endScroll) {
            aside.style.top = asideTop + currPos - window.scrollY + "px";
          } else if (asideTop < endScroll && asideTop != endScroll) {
            aside.style.top = endScroll - offsetBottom + "px";
          }
        }
      } else {
        aside.style.top = startScroll + "px";
      }
      currPos = window.scrollY;
    };

    const onResize = () => {
      screenHeight = window.innerHeight;
      asideHeight = aside.offsetHeight;
    };

    document.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("resize", onResize);
      document.removeEventListener("scroll", onScroll);
    };
  };

  return enableSticky;
};
