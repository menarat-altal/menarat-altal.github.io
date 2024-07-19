const linksList = document.querySelectorAll(".link");
linksList.forEach((link) => {
  link.addEventListener("click", (e) => {
    const link = e.currentTarget.dataset.link;
    window.innerWidth < 500
      ? setTimeout(() => window.open(link, "_blank"), 550)
      : window.open(link, "_blank");
  });
});
