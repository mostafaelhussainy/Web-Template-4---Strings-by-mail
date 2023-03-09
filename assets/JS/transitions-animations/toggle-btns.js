let toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach(btn => {

  btn.addEventListener("click", () => {
    const toggleID = btn.getAttribute('data-toggle');
    const toggleWrapperClass = btn.getAttribute('data-toggleWrapper');
    const allWrappers = document.querySelectorAll(`.toggle-child-${toggleWrapperClass}`);
    console.log(toggleWrapperClass);
    allWrappers.forEach(wrapper => wrapper.classList.remove("active-toggle-wrapper"))
    const toggle = document.querySelector(`#toggle-${toggleID}`);
    toggle.classList.toggle("active-toggle-wrapper");

    // toggle active btns
    toggleBtns.forEach(btn => btn.classList.remove("active-toggle-button"))
    btn.classList.add("active-toggle-button")
  })
})