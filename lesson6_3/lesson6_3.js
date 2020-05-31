"use strict";

class Product {
  constructor(options) {
    this.el = document.querySelector(options.selector);
    this.options = options;
  }

  draw() {
    this.el.classList.add("product");

    //Отрисовка наименования
    let ElProdName = document.createElement("div");
    ElProdName.classList.add("productName");
    ElProdName.textContent = this.options.name;
    this.el.insertAdjacentElement("beforeend", ElProdName);

    //Отрисовка цены продукта
    let ElProdCost = document.createElement("div");
    ElProdCost.textContent = "Цена " + this.options.cost;
    this.el.insertAdjacentElement("beforeend", ElProdCost);
    ElProdCost.insertAdjacentHTML(
      "beforeend",
      '<i class="fas fa-ruble-sign"></i>'
    );

    //Отрисовка картинки
    let ElImg = document.createElement("img");
    ElImg.setAttribute("src", this.options.img);
    this.el.insertAdjacentElement("beforeend", ElImg);

    //Отрисвка кнопки + событие на кнопку
    let ElButton = document.createElement("button");
    ElButton.textContent = "Купить";
    this.el.insertAdjacentElement("beforeend", ElButton);
    ElButton.addEventListener("click", () => this.addInBasket(this.options));
  }
  //Добавление в корзину
  addInBasket(opt) {
    basket.addInBasket(opt);
  }
}

//Работа с корзиной
let basket = {
  allCost: 0, //Общая стоимость корзины
  products: [], //Продукты в корзине

  /**
   * Добавление в корзину
   * @param {object} opt {selector: "#product1", name: ..., img: "http://...", cost: 25} Настройки элемента для отрисовки
   */
  addInBasket(opt) {
    let idx = opt.selector.replace("#", "");
    // Если продукта в корзине еще нет, добавляем в массив объект и увеличиваем общую стоимость корзины
    if (this.products[idx] == undefined) {
      this.products[idx] = {
        id: idx,
        name: opt.name,
        cost: opt.cost,
        costOne: opt.cost,
        count: 1,
      };
    } else {
      this.products[idx].cost += opt.cost; //Увеличивем стоимость позиции
      this.products[idx].count++; //Увеличиваем количество купленных товаров
    }
    this.allCost += opt.cost; //Увеличиваем общую стоимость корзины
    this.drawBasket(this.products[idx]);
    this.drawAllCost();
    this.listenerDel();
  },

  /**
   * Отрисовка корзины
   * @param {object} product - объект из корзины products  { id: ..., name: ..., cost: ..., costOne: ..., count: ... };
   */
  drawBasket(product) {
    //Элемент продукта в корзине
    let Elm = document.querySelector(`div[data-id="${product.id}"]`);
    //Если он есть то увеличиваем стоимость позиции и кол-во позиций товара
    if (Elm) {
      Elm.querySelector(".count").textContent = product.count;
      Elm.querySelector(".cost").textContent = product.cost;
      return;
    }
    //Если продукта еще нет в корзине то просто отрисовываем его
    let elm = `<div data-id="${product.id}" class="product_row">
                <div>${product.name}</div>
                <div class="cost">${product.cost}</div>
                <div class="count">${product.count}</div>
                <dv><i class="fas fa-trash" data-id="${product.id}"></i></div>
              </div>`;
    document
      .querySelector(".basket_product")
      .insertAdjacentHTML("beforeend", elm);
  },

  /**
   * Отрисовка общей стоимость корзины
   */
  drawAllCost() {
    document.querySelector("#all_cost").textContent = this.allCost;
  },

  /**
   * Удаление из корзины
   * @param {MouseEvent} e
   */
  delInBasket(e) {
    let idx = e.srcElement.dataset.id; //Id товара
    let Elm = document.querySelector(`div[data-id="${idx}"]`); //Продукт в корзине
    //Если товар в корзине один то удаляем его из массива продуктов, удаляем его из корзины как элемент
    if (basket.products[idx].count == 1) {
      Elm.remove(); //Удаляем эдемент из корзины
      basket.allCost -= basket.products[idx].costOne; //Уменьшаем стоимость корзины на единицу товара
      delete basket.products[idx]; //Удаляем из массива
    } else {
      basket.products[idx].count--; //Уменьшаем в массиве кол-во
      basket.products[idx].cost -= basket.products[idx].costOne; //Уменьшаем в массиве стоимость
      Elm.querySelector(".count").textContent--; //Уменьшаем в корзине кол-во
      Elm.querySelector(".cost").textContent -= basket.products[idx].costOne; //Уменьшаем в корзине стоимость
      basket.allCost -= basket.products[idx].costOne; //Уменьшаем стоимость корзины на единицу товара
    }
    basket.drawAllCost(); //Показываем стоимость корзины
  },

  /**
   * Добавляем событие при удалении позиции в порзине
   */
  listenerDel() {
    let btn = document.querySelectorAll(".fa-trash");
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", this.delInBasket);
    }
  },
};

let products = [
  new Product({
    selector: "#product1",
    name: "Яблоко",
    img:
      "http://images.clipartpanda.com/green-apples-clipart-Apple-clip-art-13.jpg",
    cost: 200,
  }),
  new Product({
    selector: "#product2",
    name: "Виноград",
    img:
      "http://images.clipartpanda.com/grape-clip-art-bunch-green-grapes-free-clip-art-funny_4871765300937198.jpg",
    cost: 300,
  }),
  new Product({
    selector: "#product3",
    name: "Апельсин",
    img:
      "http://centre-lestviza.ru/wp-content/uploads/2017/02/Apel-sin-150x150.jpg",
    cost: 150,
  }),
  new Product({
    selector: "#product4",
    name: "Капуста",
    img:
      "http://centre-lestviza.ru/wp-content/uploads/2017/02/Kapusta-1-150x150.jpg",
    cost: 25,
  }),
  new Product({
    selector: "#product5",
    name: "Бананы",
    img:
      "https://nataliamaptunenko.com/wp-content/uploads/2017/12/%D0%91%D0%B0%D0%BD%D0%B0%D0%BD%D1%8B-300x224.jpg",
    cost: 65,
  }),
  new Product({
    selector: "#product6",
    name: "Гранат",
    img:
      "https://lh3.googleusercontent.com/proxy/LHuyuhbcT92TN9fIUI_nJ3SKqF49YFUxm4ezSaniP-znXQqETQz7__SH5I7G0j1LQVvwq19nK460cT0YjtO1mMhI3gdz4s72r-idC3C14QaMeBO481kKsjBW2-btENtONLi2UaI",
    cost: 325,
  }),
  new Product({
    selector: "#product7",
    name: "Помидор",
    img:
      "https://adriafood.ru/image/cache/catalog/categories/images-150x150.jpg",
    cost: 175,
  }),
  new Product({
    selector: "#product8",
    name: "Огурцы",
    img:
      "https://img2.zakaz.ua/src.1584574655.ad72436478c_2020-03-19_Aliona/src.1584574655.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.150nowm.jpg.150x.jpg",
    cost: 125,
  }),
];

products.forEach((el) => el.draw());