import user from "./data";
import Card from "./Card";
import UI from "./UI";

window.addEventListener("DOMContentLoaded", () => {
  const card = new Card(
      user.image,
      user.fullName,
      user.age,
      user.city,
      user.followers,
      user.likes,
      user.photos
    ),
    ui = new UI();
  ui.render(card);
});
