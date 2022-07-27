const Common = {
  init() {
    this.events();
  },

  events() {
    $(".toggle-menu").on("click", (e) => {
      const btnEl = $(e.currentTarget);
      btnEl.toggleClass("active");
      if (btnEl.hasClass("active")) {
        btnEl.text("Hide menu");
      } else {
        btnEl.text("Show menu");
      }
      console.log("toggles menu");
    });
  },
};

export default Common;
