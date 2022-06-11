const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const foodList = [
  {
    name: "Pizza",
    img: 1,
  },
  {
    name: "Burger",
    img: 2,
  },
  {
    name: "BBQ",
    img: 3,
  },
  {
    name: "Sushi",
    img: 4,
  },
  {
    name: "Vegan",
    img: 5,
  },
  {
    name: "Desserts",
    img: 6,
  },
];
const restaurantList = [
  {
    name: "Royal Sushi House",
    img: 1,
    feature: "feature",
    time: "30-40 min",
    price: "32 min sum",
    foods: [
      {
        imgFood: 4,
        nameFood: "Sushi",
      },
    ],
    notify: 0,
  },
  {
    name: "Burgers & Pizza",
    img: 2,
    feature: "feature",
    time: "40-60 min",
    price: "24 min sum",
    foods: [
      {
        imgFood: 2,
        nameFood: ["Burger"],
      },
      {
        imgFood: 1,
        nameFood: ["Pizza"],
      },
    ],

    notify: 2,
  },
  {
    name: "Ninja sushi",
    img: 3,
    feature: "",
    time: "20-40 min",
    price: "40 min sum",
    foods: [
      {
        imgFood: 4,
        nameFood: "Sushi",
      },
    ],

    notify: 0,
  },
];
const navList = $(".nav__list.row");
const resList = $(".restaurant__list.row");

const renderFootList = () => {
  const html = foodList.map((item, index) => {
    return `
        <div class="col l-2 m-3 c-4">
            <div class="nav__item">
              <div class="nav__itemImgCover">
              <img src="../assets/img/food${item.img}.jpg" alt="food${item.img} img" class="nav__itemImg">
              </div>
              <p class="nav__des">${item.name}</p>
            </div>
        </div>
        `;
  });
  navList.innerHTML = html.join("");
};
renderFootList();

const renderRestaurant = () => {
  const html = restaurantList.map((item, index) => {
    return `
    <div class="col l-4 m-4 c-12">
    <div class="restaurant__item">
      <div class="restaurant__imgCover">
        <img src="../assets/img/restaurant${item.img}.jpg" alt="restaurant${
      item.img
    }.jpg" class="restaurant__img">
      </div>
      ${
        item.feature.length !== 0
          ? `<div class="restaurant__feature">${item.feature}</div>`
          : ""
      }
      
      <div class="restaurant__container">
        <div class="restaurant__header">
          <h4>${item.name}</h4>
          <div class="restaurant__save">
            <span class="material-icons icon__save">
                check_box
            </span>
            ${
              item.notify > 0
                ? `<div class="restaurant__num">${item.notify}</div>`
                : ""
            }
            
          </div>
        </div>

        <div class="restaurant__des">
          <div class="restaurant__time">
            <span class="material-icons icon__time">
              schedule
            </span>
            ${item.time}
          </div>
          <span class="material-icons icon__dot">
            fiber_manual_record
          </span>
          <span class="material-icons icon__money">
            attach_money
          </span>
          <div class="restaurant__price">${item.price}</div>
        </div>
        
        <div class="restaurant__footer">
        ${item.foods.map((food, i) => {
          return `<button class="restaurant__btn">
            <div class="restaurant__imgIconCover">
              <img src="../assets/img/food${food.imgFood}.jpg" alt="food${food.imgFood}.jpg
      }.jpg" class="restaurant__imgIcon">
            </div>
            ${food.nameFood}
          </button>`;
        })}
        </div>
      </div>
    </div>
  </div>
        `;
  });
  resList.innerHTML = html.join("");
};
renderRestaurant();

const container = $(".container");
