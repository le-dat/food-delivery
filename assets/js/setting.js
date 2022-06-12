const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const settingItems = $$(".setting__item");
settingItems.forEach((item) => {
  item.addEventListener("click", () => {
    $(".setting__item.active").classList.remove("active");
    item.classList.add("active");
  });
});

const inputFile = $("#input__file");
const btnChangeAvatar = $(".setting__btn.btn__change");
const btnRemoveAvatar = $(".setting__btn.btn__remove");
const avatar = $(".setting__avatarImg");

btnChangeAvatar.addEventListener("click", () => {
  inputFile.click();
});
btnRemoveAvatar.addEventListener("click", () => {
  if (avatar) {
    URL.revokeObjectURL(avatar.view);
    avatar.setAttribute(
      "src",
      "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg"
    );
  }
});

inputFile.onchange = (e) => {
  if (avatar) {
    URL.revokeObjectURL(avatar.view);
  }
  const file = e.target.files[0];
  avatar.view = URL.createObjectURL(file);
  avatar.setAttribute("src", avatar.view);
};
