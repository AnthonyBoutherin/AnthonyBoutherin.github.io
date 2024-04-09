/**
 * Gestion du theme
 */
const theme = {
  /**
   * Mode du thème (dark/light)
   */
  mode: null,

  /**
   * Challenge Theme color -------------------------//
   */
  body: document.querySelector("body"),
  themeColorSwitchRed: document.querySelector("#theme-red"),
  themeColorSwitchBlue: document.querySelector("#theme-blue"),
  themeColorSwitchGreen: document.querySelector("#theme-green"),
  imgGreen: document.querySelector("#logoImage"),
  imgRed: document.querySelector("#logoImage"),
  imgBlue: document.querySelector("#logoImage"),
  color: null,
  // ----------------------

  /**
   * Méthode appelée lorsque le DOM est prêt
   */
  init: function () {
    // on sélectionne le bouton de changement de mode (dark/light)
    // ayant l'id theme-switch
    const themeSwitchElement = document.querySelector("#theme-switch");
    themeSwitchElement.addEventListener("click", theme.toggleDark);

    // on délègue à la méthode initLocalState
    // la mise en place des préférences utilisateur de thème
    // sauvegardée dans le localStorage
    theme.initLocalState();

    // THEME COLOR ----------------------------------------//
    // Save LocalStorage colortheme en place pour l'utilisateur
    theme.initChangeColorTheme();

    // Ecouteur pour theme color
    theme.themeColorSwitchGreen.addEventListener(
      "click",
      theme.handleThemeColorClickGreen
    );
    theme.themeColorSwitchRed.addEventListener(
      "click",
      theme.handleThemeColorClickRed
    );
    theme.themeColorSwitchBlue.addEventListener(
      "click",
      theme.handleThemeColorClickBlue
    );

    // Ecouteur pour img LOGO
    theme.themeColorSwitchGreen.addEventListener(
      "click",
      theme.changeImageGreen
    );
    theme.themeColorSwitchRed.addEventListener("click", theme.changeImageRed);
    theme.themeColorSwitchBlue.addEventListener("click", theme.changeImageBlue);
    //----------------------------------//
  },

  /**
   * Méthode qui met en place les préférences utilisateur
   * de thème, sauvegardées dans le localStorage
   */
  initLocalState: function () {
    // on récupère le mode (dark/light) du thème
    // sauvegardé dans le localStorage
    const localMode = localStorage.getItem("modeTheme");

    // si cette entrée est définie
    if (localMode) {
      // alors on donne sa valeur à notre propriété theme.mode
      theme.mode = localMode;
      // on applique ce thème à l'élément body
      // pour cela, on sélectionne le body
      const body = document.querySelector("body");
      // on conditionne l'ajout/le retrait de classes sur cet élément
      if (theme.mode === "theme-dark") {
        body.classList.remove("theme-light");
        body.classList.add("theme-dark");
      }
      // sinon, on fait l'inverse
      else {
        body.classList.add("theme-light");
        body.classList.remove("theme-dark");
      }
    }
  },

  /**
   * Méthode qui permet de changer de mode (dark/light)
   */
  toggleDark: function () {
    // si le mode du thème n'est pas encore défini
    // alors on passe en mode dark
    if (!theme.mode) {
      theme.mode = "theme-dark";
    }
    // ou, si le mode est light, dans ce cas on passe en dark
    else if (theme.mode === "theme-light") {
      theme.mode = "theme-dark";
    }
    // sinon, on passe en light
    else {
      theme.mode = "theme-light";
    }

    // on stocke ce choix dans le localStorage
    localStorage.setItem("modeTheme", theme.mode);

    // on cible l'élément body de notre page
    const body = document.querySelector("body");

    // si on passe en dark mode
    // - on retire du body la classe theme-light
    // - on ajoute au body la classe theme-dark
    if (theme.mode === "theme-dark") {
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
    }
    // sinon, on fait l'inverse
    else {
      body.classList.add("theme-light");
      body.classList.remove("theme-dark");
    }
  },

  // CHALLENGE THEME COLOR

  // 1 --------------------------Click + Setting du localStorage----------------//

  //GREEN
  handleThemeColorClickGreen: function () {
    theme.body.classList.add("theme-green");
    theme.body.classList.remove("theme-blue");
    theme.body.classList.remove("theme-red");
    localStorage.setItem("colorTheme", "theme-green");
  },

  //RED
  handleThemeColorClickRed: function () {
    theme.body.classList.add("theme-red");
    theme.body.classList.remove("theme-blue");
    theme.body.classList.remove("theme-green");
    localStorage.setItem("colorTheme", "theme-red");
  },

  //BLUE
  handleThemeColorClickBlue: function () {
    theme.body.classList.add("theme-blue");
    theme.body.classList.remove("theme-red");
    theme.body.classList.remove("theme-green");
    localStorage.setItem("colorTheme", "theme-blue");
  },

  // -----------------------IMG LOGO---------------------------//

  //GREEN
  changeImageGreen: function () {
    let srcGreen = theme.imgGreen.getAttribute("src");
    if (srcGreen == "img/logo-theme-green.png") {
      srcGreen = "img/logo-theme-green.png";
    } else {
      srcGreen = "img/logo-theme-green.png";
      theme.imgGreen.setAttribute("src", srcGreen);
    }
  },

  //RED
  changeImageRed: function () {
    let srcRed = theme.imgRed.getAttribute("src");
    if (srcRed == "img/logo-theme-red.png") {
      srcRed = "img/logo-theme-red.png";
    } else {
      srcRed = "img/logo-theme-red.png";
      theme.imgRed.setAttribute("src", srcRed);
    }
  },

  //BLUE
  changeImageBlue: function () {
    let srcBlue = theme.imgBlue.getAttribute("src");
    if (srcBlue == "img/logo-theme-blue.png") {
      srcBlue = "img/logo-theme-blue.png";
    } else {
      srcBlue = "img/logo-theme-blue.png";
      theme.imgBlue.setAttribute("src", srcBlue);
    }
  },

  // 2 Sauvegarde des préférence LOCALSTORAGE-------------//

  initChangeColorTheme: function () {
    const localtheme = localStorage.getItem("colorTheme");

    if (localtheme) {
      theme.color = localtheme;

      if (theme.color === "theme-green") {
        theme.body.classList.remove("theme-red");
        theme.body.classList.remove("theme-blue");
        theme.body.classList.add(theme.color);
      } else if (theme.color === "theme-red") {
        theme.body.classList.remove("theme-green");
        theme.body.classList.remove("theme-blue");
        theme.body.classList.add(theme.color);
      } else {
        theme.body.classList.remove("theme-green");
        theme.body.classList.remove("theme-red");
        theme.body.classList.add(theme.color);
      }
    }
  },
  //------------------------------------------------//
};
// on exécute la méthode theme.init
// lorsque la page web est chargée
document.addEventListener("DOMContentLoaded", theme.init);
