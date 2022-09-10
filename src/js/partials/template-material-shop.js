const TemplateMaterialShop = {
  init() {
    this.events();
  },

  events() {
    // open comparison
    const comparisonOpener = document.querySelectorAll(
      ".product-block-compare-link"
    );
    comparisonOpener.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(".comparison-chosen").classList.add("open");
      });
    });

    // close it
    document
      .querySelector(".comparison-chosen-close")
      .addEventListener("click", function () {
        document.querySelector(".comparison-chosen").classList.remove("open");
      });

    // remove element from comparison
    let comparisonEl = document.querySelectorAll(
      ".comparison-chosen-list-item img"
    );
    let button = document.querySelectorAll(
      ".comparison-chosen-list-item-remove"
    );
    let remove = function () {
      this.remove();
      document.querySelector(".comparison-chosen-list-item img").remove();
    };
    for (var i = 0, len = comparisonEl.length; i < len; i++) {
      button[i].addEventListener("click", remove, false);
    }

    // dropdowns
    let filterDropdown = document.querySelectorAll(".filter-sort-trigger");
    for (var i = 0; i < filterDropdown.length; i++) {
      filterDropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
      });
    }

    // filters mobile open
    let filterBtnOpen = document.getElementsByClassName("filter-open-button")[0];
    let filterBtnClose = document.getElementsByClassName("filter-mobile-close")[0];
    filterBtnOpen.addEventListener("click", function () {
      document.getElementsByClassName("filter-mobile")[0].classList.toggle("filter-mobile-opened");
      document.body.classList.add("no-scroll");
    });
    filterBtnClose.addEventListener("click", function () {
      document.getElementsByClassName("filter-mobile")[0].classList.toggle("filter-mobile-opened");
      document.body.classList.remove("no-scroll");
    });

    // making the mobile filters, first checking the screen size
    if (window.screen.width <= 900) {
      let filter = document.getElementsByClassName("filter")[0];
      let filterReset = document.getElementsByClassName(
        "shop-top-filter-tag-reset"
      )[0];

      // new containers
      let filterMobile =
        document.getElementsByClassName("filter-mobile-main")[0];
      let filterMobileReset = document.getElementsByClassName(
        "filter-mobile-main-reset"
      )[0];

      // moving the desktop elements to new containers
      filterMobile.appendChild(filter);
      filterMobileReset.appendChild(filterReset);
    }
  },
};

export default TemplateMaterialShop;
