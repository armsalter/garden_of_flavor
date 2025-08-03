// Arayüzden eleman çekme işlemini bir obje içinde yap
const uiElements = {
  menuList: document.querySelector("#menu-list"),
  categoryButtons: document.querySelectorAll(".category-button"),
  detailContainer: document.querySelector("#detail-container"),
};
// Detay sayfasını render edecek fonksiyon
const renderDetailPage = (product) => {
  uiElements.detailContainer.innerHTML = `
    <section class="container my-5 shadow" style="max-width: 1100px">
      <div
        class="d-flex align-items-center justify-content-between mt-5 gap-2 py-3 px-2"
      >
        <a href="index.html" class="text-success fs-4"
          ><i class="bi bi-house-fill"></i
        ></a>
        <div class="detail-breadcrumb ms-2">
          <span class="text-muted">detail /</span>
          <span class="text-muted">${product.category} </span>
          <span>${product.title}</span>
        </div>
      </div>
      <!--Content-->
      <div class="row p-5 align-items-center">
        <div class="col-12 col-md-5 mb-4">
          <img
            src="${product.img}"
            alt="detail-image"
            class="img-fluid rounded-4 shadow detail-img"
          />
        </div>
        <div class="col-12 col-md-7 mb-4 w-100">
          <h2 class="fw-bold text-success mb-3">${product.title}</h2>
          <div class="mb-3">
            <span
              class="badge bg-warning text-dark fs-6 px-3 py-2 text-capitalize me-2"
              >${product.category}</span
            >
            <span
              class="badge bg-light text-success fs-6 px-3 py-2 text-capitalize"
              >Price: $${product.price}18.99</span
            >
          </div>
          <p class="lead text-muted mb-4">
         ${product.desc}
          </p>
          <button class="btn btn-success shadow px-4 py-2 fw-semibold">
            Order Now
          </button>
        </div>
      </div>
    </section>`;
};
// Menü elemanını render edecek fonksiyon
const renderMenuCard = (data) => {
  uiElements.menuList.innerHTML = data
    .map(
      (item) => `
  <a href="/detail.html?id=${
    item.id
  }" class="col-md-6 col-lg-4 mb-4 text-decoration-none">
      <div class="card menu-card">
        <div class="position-relative">
          <img src="${item.img}" class="card-img-top" alt="item-1"/>
          <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 text-capitalize menu-card-badge">${
            item.category
          }</span>
          <span class="badge bg-white text-success fw-bold  position-absolute top-0 end-0 m-3 px-3 py-2 menu-card-price">$${item.price}</span>
        </div>
        <div class="card-body text-success fw-bold mb-2">
          <h5>${item.title}</h5>
        </div>
      </div>
  </a>`
    )
    .join("");
};
export { uiElements, renderMenuCard, renderDetailPage };
