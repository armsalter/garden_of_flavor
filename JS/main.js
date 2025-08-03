import getMenu from "./api.js";
import {renderDetailPage, renderMenuCard, uiElements } from "./ui.js";
document.addEventListener("DOMContentLoaded", async () => {
  // console.log();// nerede oldyuğumuzu direk yazıyor
  //hangi sayfada olduğumuza göre işlemler yap,index.htmel deysek ona göre,detail.hetmel deysek ona göre işlemler yaparız.
  // ? peki biz aşağıdaki if döngüsünü neden kurduk eğer biz ana sayfadaysak ana sayfayı render layacağız, detay safasındaysak detay sayfasını renderlayacağız, neredeysek ona göre renderlayacağız, o yüzden bu if döngüsünü kurduk.
  // API iteği at
  const menuData = await getMenu();
  // console.log(menuData);

  if (window.location.pathname.includes("/index.html")) {
    //  console.log(`Ana Sayfadayım`);
    renderMenuCard(menuData);
    // console.log(uiElements.categoryButtons);
    uiElements.categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // console.log(button.id);
        const selectedCategory = button.id;
        const filteredMenu = menuData.filter(
          (item) => item.category == selectedCategory
        );
        // console.log(filteredMenu);
        if (selectedCategory == "all") {
          renderMenuCard(menuData);
        } else {
          renderMenuCard(filteredMenu);
        }
      });
    });
  } else {
    console.log(`Detay sayfasındayım`);
    // ! Detay sayfasında ilk yapılacak şey URL deki parametreye eriş

    // console.log(window.location.search)
    //bununla arama parametresine eriştik
    const params = new URLSearchParams(window.location.search);
    // console.log(params.get("id"));
    const itemId = +params.get("id"); //number ve parceInt yada + işareti aynı işi görür
    // console.log(typeof itemId);
    const product = menuData.find((item) => item.id == itemId);
    //console.log(product);
   renderDetailPage(product)
  }
});
