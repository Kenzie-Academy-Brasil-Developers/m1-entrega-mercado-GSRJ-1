const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: "./img/products/no-img.svg",
    imageDescription: "Uva Crimson",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "Banana",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "Mamão",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "Maçã",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "Refrigerante",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "Vinho",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/no-img.svg",
    imageDescription: "Água Tônica",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "Água de coco",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "Sabonete",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "Detergente",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/no-img.svg",
    imageDescription: "Lustra Móveis",
  },
];

let mainAll = document.querySelector(".products-content");
let fruitsMain = document.querySelector(".fruits");
let drinksMain = document.querySelector(".drinks");
let hygieneMain = document.querySelector(".hygiene");

let fruitsList = document.createElement("ul");
let dinksList = document.createElement("ul");
let hygieneList = document.createElement("ul");

listProducts(products);
function listProducts(list) {
  for (let i = 0; i < list.length; i++) {
    let title = list[i].title;
    let image = list[i].image;
    let imageDescription = list[i].imageDescription;
    let price = "R$ " + list[i].price;
    let category = list[i].category;

    let productImg = document.createElement("img");
    productImg.src = image;
    productImg.alt = imageDescription;
    productImg.title = title;
    productImg.classList.add("product-img");

    let productTitle  = document.createElement("h1");
    productTitle .classList.add("product-title");
    productTitle .innerText = title;

    let productCategory  = document.createElement("h5");
    productCategory .classList.add("product-category");
    productCategory .innerText = category;

    let productPrice = document.createElement("strong");
    productPrice.classList.add("product-price");
    productPrice.innerText = price;

    let productMain = document.createElement("main");
    productMain.classList.add("product-main");

    productMain.append(productTitle , productCategory , productPrice);

    let productCard = document.createElement("li");
    productCard.classList.add("product");

    productCard.append(productImg, productMain);

    if (category === "Frutas") {
      fruitsMain.appendChild(fruitsList);
      fruitsList.appendChild(productCard );
    } else if (category === "Bebidas") {
      drinksMain.appendChild(dinksList);
      dinksList.appendChild(productCard );
    } else {
      hygieneMain.appendChild(hygieneList);
      hygieneList.appendChild(productCard);
    }
  }
}
