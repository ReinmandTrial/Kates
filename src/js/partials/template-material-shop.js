const TemplateMaterialShop = {
  init() {
    this.events();
  },

  events() {
    // open comparison
    const comparisonOpener = document.querySelectorAll(".product-block-compare-link");
    comparisonOpener.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector('.comparison-chosen').classList.add("open");
      });
    });

    // close it
    document.querySelector('.comparison-chosen-close').addEventListener("click", function () {
      document.querySelector('.comparison-chosen').classList.remove("open");
    });

    // remove element from comparison
    let comparisonEl = document.querySelectorAll('.comparison-chosen-list-item img');
    let button = document.querySelectorAll('.comparison-chosen-list-item-remove');
    let remove = function () {
      this.remove();
      document.querySelector('.comparison-chosen-list-item img').remove();
    };
    for (var i = 0, len = comparisonEl.length; i < len; i++) {
      button[i].addEventListener('click', remove, false);
    }
  },
};

export default TemplateMaterialShop;
