const sections = document.querySelectorAll('.out-view');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const section = entry.target;
    if (entry.isIntersecting) {
      section.classList.add('in-view', 'animated');
      observer.unobserve(section);
    } else {
      section.classList.remove('in-view', 'animated');
    }
  });
});

sections.forEach(section => {
  observer.observe(section);
});
