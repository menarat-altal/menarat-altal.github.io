const linksList = document.querySelectorAll(".link");
linksList.forEach((link) => {
  link.addEventListener("click", (e) => {
    const link = e.currentTarget.dataset.link;
    window.innerWidth < 500
      ? setTimeout(() => window.open(link, "_blank"), 500)
      : window.open(link, "_blank");
  });
});
const ele = document.querySelector(".it-has-animation");
document.onreadystatechange = () =>
  document.readyState === "complete" && ele.classList.add("start-animation");
