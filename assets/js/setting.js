const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const settingItems = $$(".setting__item");
settingItems.forEach((item) => {
  item.addEventListener("click", () => {
    $(".setting__item.active").classList.remove("active");
    item.classList.add("active");
  });
});
