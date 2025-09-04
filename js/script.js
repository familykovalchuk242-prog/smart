document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMenu");
  const backBtn = document.getElementById("backMenu");
  const menuTitle = document.getElementById("menuTitle");

  let currentLevel = "root";
  const menuData = {
    root: {
      title: "Сервіс",
      items: [
        { text: "Технічна документація", sub: "docs" },
        { text: "Виконання робіт", sub: "works" },
        { text: "Інструкції та відео", link: "#" },
      ],
    },
    docs: {
      title: "Технічна документація",
      items: [
        { text: "Протокол ПРГ", link: "#" },
        { text: "Робочий проект", link: "#" },
        { text: "Виконавчо-технічна документація", link: "#" },
        { text: "Принципова схема ПРГ", link: "#" },
        { text: "Режимна картка", link: "#" },
      ],
    },
    works: {
      title: "Виконання робіт",
      items: [
        { text: "Графік робіт", link: "#" },
        { text: "Технічний огляд", link: "#" },
        { text: "Регулювання", link: "#" },
        { text: "ТО", link: "#" },
        { text: "Плановий ремонт", link: "#" },
        { text: "Обслуговування КВП", link: "#" },
        { text: "Фотофіксація", link: "#" },
      ],
    },
  };

  function renderMenu(level) {
    currentLevel = level;
    menuTitle.textContent = menuData[level].title;
    const container = mobileMenu.querySelector("ul");
    container.innerHTML = "";
    menuData[level].items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = item.text;
      if (item.sub) {
        a.addEventListener("click", () => renderMenu(item.sub));
      } else if (item.link) {
        a.href = item.link;
      }
      li.appendChild(a);
      container.appendChild(li);
    });
    backBtn.style.display = level === "root" ? "none" : "inline-block";
  }

  burger.addEventListener("click", () => {
    renderMenu("root");
    mobileMenu.classList.add("open");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });

  backBtn.addEventListener("click", () => {
    if (currentLevel === "docs" || currentLevel === "works") {
      renderMenu("root");
    }
  });
});