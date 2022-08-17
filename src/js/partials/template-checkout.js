const TemplateCheckout = {
  init() {
    this.events();
  },

  events() {
    const togglers = document.querySelectorAll(".next-step");
    togglers.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        if (document.querySelector('.checkout-line-item').classList.contains('active')) {
          this.classList.toggle("active");
        }
        el.closest('.checkout-step').classList.toggle("active");
        el.closest('.checkout-step').nextElementSibling.classList.toggle("active");
      });
    });
  },
};

export default TemplateCheckout;
