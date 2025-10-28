export const SlideObserver: IntersectionObserver = new IntersectionObserver(
  (entries) => {
    if (
      entries[0].isIntersecting &&
      !entries[0].target.classList.contains("slide-in")
    ) {
      entries[0].target.classList.add("slide-in");
    }
  },
  { root: null, threshold: 0.3 },
);
