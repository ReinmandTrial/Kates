const TemplateMaterialShop = {
  init() {
    this.events();
  },

  events() {
    const comparisonOpener = document.querySelectorAll(".product-block-compare-link");
    comparisonOpener.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector('.comparison-chosen').classList.add("open");
      });
    });

    document.querySelector('.comparison-chosen-close').addEventListener("click", function () {
      document.querySelector('.comparison-chosen').classList.remove("open");
    });
  },
};

export default TemplateMaterialShop;
