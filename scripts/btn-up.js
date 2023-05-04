const BtnUp = {
  target_button = document.getElementById("btn_up");

  show() {
    this.target_button.classList.remove("btn-up_hide");
  },

  hide() {
    this.target_button.classList.add("btn-up_hide");
  },

  

}