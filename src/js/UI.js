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
            <span class="card__numbers" data-target="8000">${element.followers}</span>
            <span class="card__label">Followers</span>
          </li>

          <li class="card__social">
            <span class="card__numbers" data-target="8300">${element.likes}</span>
            <span class="card__label">Likes</span>
          </li>

          <li class="card__social">
            <span class="card__numbers" data-target="1400">${element.photos}</span>
            <span class="card__label">Photos</span>
          </li>
        </ul>
    `;
    root.appendChild(article);
  }
}

export default UI;
