export default function AnimateTextWhenScrolling(elementId = '') {
  const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
      if (entry.isIntersecting) {
        const spanElement = entry.target.getElementsByTagName("span");

        for (let i = 0; i < spanElement.length; i++) {
          const element = spanElement[i];
          element.classList.add("slide-up");
        }
      }
    });
  });

  const element: any = document?.getElementById(elementId);
  observer.observe(element);
}
