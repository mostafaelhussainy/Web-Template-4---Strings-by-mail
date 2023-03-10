const sections = document.querySelectorAll('.out-view');
const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    const section = entry.target;
    if (entry.isIntersecting) {
      setTimeout(() => {
        section.classList.add('in-view', 'animated');
        observer.unobserve(section);
      }, index * 50);
    } else {
      section.classList.remove('in-view', 'animated');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});
