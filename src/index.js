import "./styles/style.css";
import "./images/logo.png";
import "./images/search_x1.png";
import "./images/search_x2@2x.png";
import "./images/filter-logo_x1.png";
import "./images/picture1.png";
import "./images/home_x1.png";
import "./images/home@2x.png";
import "./images/gallery_x1.png";
import "./images/gallery@x2.png";
import "./images/deals_x1.png";
import "./images/deals@2x.png";
import "./images/notify_x1.png";
import "./images/notify@2x.png";
import "./images/user.png";
import "./images/user2@2x.png";
import "./images/mixer_x2@2x.png";
import "./images/close_x1.png";
import "./images/close_x2@2x.png";
const filterButton = document.querySelector(".header__filter-button");
const filterSection = document.querySelector(".filter");
const closeButton = document.querySelector(".filter__close-btn");
const images = document.querySelectorAll(".gallery__img");
const options = {
  root: null,
  threshold: 0.1,
};
const observer = new IntersectionObserver(handleImg, options);

// если картинка попадает в область видимости экрана, выполняет функцию добавления ссылки
function handleImg(myImg, observer) {
  myImg.forEach((myImgSingle) => {
    console.log(myImgSingle.intersectionRatio);
    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  });
}
// добавляет в атрибут src ссылку из data атрибута
function loadImage(image) {
  image.src = image.getAttribute("data-src");
}
// слудит за всеми картинками
images.forEach((img) => {
  observer.observe(img);
});

//открывает и закрывает блок фильтр
function filterOpenAndClose() {
  filterSection.classList.toggle("filter_is-opened");
}

// обработчики событий открытия и закрытия блока фильтр
filterButton.addEventListener("click", filterOpenAndClose);
closeButton.addEventListener("click", filterOpenAndClose);
