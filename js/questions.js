const chevronDown = document.querySelector(".fa-chevron-down");
const selectTop = document.querySelector(".header-select__top");
const icons = document.querySelectorAll(".header-select__language");
const headerTopText = document.querySelector(".header-select__top-text");
const selectLanguages = document.querySelector(".header-select-languages");

const openLanguages = () => {
  chevronDown.classList.toggle("active");
  selectLanguages.classList.toggle("header-select-languages--open");
};

selectTop.addEventListener("click", openLanguages);

const hideIcon = () => {
  icons.forEach((el) => {
    el.children[1].classList.remove("visible");
  });
};

const showIcon = (i) => {
  icons[i].children[1].classList.add("visible");

  localStorage.setItem("lang", icons[i].getAttribute("data-lang"));

  getLanguageData(icons[i].getAttribute("data-lang"));

  headerTopText.innerHTML = icons[i].children[0].innerHTML;
};

hideIcon();

const returnLang = (lang) => {
  if (lang === "uz") {
    return 0;
  } else if (lang === "en") {
    return 1;
  } else if (lang === "ru") {
    return 2;
  } else {
    return 3;
  }
};

showIcon(returnLang(language));

icons.forEach((el, i) => {
  el.addEventListener("click", (e) => {
    hideIcon();
    showIcon(i);

    openLanguages();
  });
});
