class UI {
  render(element) {
    const root = document.getElementById("root"),
      article = document.createElement("article");

    article.className = "card backInDown";
    article.innerHTML = `
      <div class="card__header"></div>

        <div class="card__body">
          <img
            src="${element.imageProfile}"
            alt="${element.fullName}"
            class="card__img"
          />
          <h1 class="card__title">
            ${element.fullName}
            <span class="card__age">${element.age}</span>
          </h1>
          <p class="card__location">London</p>
        </div>

        <ul class="card__footer">
          <li class="card__social">
            <span class="card__numbers" data-target="${element.followers}">0</span>
            <span class="card__label">Followers</span>
          </li>

          <li class="card__social">
            <span class="card__numbers" data-target="${element.likes}">0</span>
            <span class="card__label">Likes</span>
          </li>

          <li class="card__social">
            <span class="card__numbers" data-target="${element.photos}">0</span>
            <span class="card__label">Photos</span>
          </li>
        </ul>
    `;
    root.appendChild(article);
  }

  animation() {
    const counters = document.querySelectorAll(".card__numbers");
    const speed = 400;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.textContent;

        const inc = target / speed;

        if (count < target) {
          counter.textContent = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.textContent = target;
        }
      };

      updateCount();
    });
  }
}

export default UI;
