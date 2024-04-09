/**
 * Gestion du slider
 */
const slider = {

  // on déclare des variables (propriétés)
  // qui seront accessibles dans l'ensemble de notre objet

  /**
   * Tableau indexé contenant tous les éléments images du slider
   */
  imagesElements: [],

  /**
   * Nombre total d'images contenues dans le slider
   */
  imagesTotal: 0,

  /**
   * Index de l'image courante
   * (pour info la première image a pour index 0)
   */
  currentPosition: 0,
  
  /**
   * Méthode appelée lorsque le DOM est prêt
   */
  init: function() {
    slider.generateSliderImages();

    // on stocke les éléments <img> du slider
    // dans la propriété imagesElements
    slider.imagesElements = document.querySelectorAll('.slider__img');

    // on stocke le nombre total d'éléments du slider
    // dans la propriété imagesTotal
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
    slider.imagesTotal = slider.imagesElements.length;
    
    // on délègue la mise en place d'écouteurs d'évènements
    slider.addEvents();
  },

  /**
   * Méthode qui met en place les écouteurs d'évènements du slider
   */
  addEvents: function() {
    // on sélectionne les boutons "précédent" et "suivant" du slider
    const sliderButtons = document.querySelectorAll('.slider__btn');

    // on sélectionne le bouton "précédent"
    const previousBtn = sliderButtons[0];

    // on sélectionne le bouton "suivant"
    const nextBtn = sliderButtons[1];

    // lorsqu'on click sur le bouton précédent
    // on lance la méthode handleClickPreviousSlide
    previousBtn.addEventListener('click', slider.handleClickPreviousSlide);

    // lorsqu'on click sur le bouton suivant
    // on lance la méthode handleClickNextSlide
    nextBtn.addEventListener('click', slider.handleClickNextSlide);

  },

  /**
   * Handler permettant d'afficher l'image précédente
   */
  handleClickPreviousSlide: function() {
    // on sélectionne l'image actuelle
    const currentImage = slider.imagesElements[ slider.currentPosition ];
    
    // on déclare une variable newPosition ici
    // pour une portée de fonction
    // variable qui nous servira à calculer
    // l'index de l'image précédente
    let newPosition;
    
    // on calcul l'index de l'image précédente
    // sachant qu'on veut pouvoir boucler sur le slider
    // autrement dit :
    // si l'image actuelle est la première du slider (index 0)
    // alors l'image précédente sera la dernière du slider
    if ( slider.currentPosition === 0 ) {
      // on est dans le cas où on est sur la première image
      // donc l'index de l'image précédente
      // sera l'index de la dernière image du slider
      newPosition = (slider.imagesTotal - 1);
    }
    else {
      // on est dans le cas où on n'est pas sur la première image
      // donc l'index de l'image précédente sera une décrémentation
      newPosition = (slider.currentPosition - 1);
    }

    // on sélectionne la prochaine image à afficher
    const newImage = slider.imagesElements[newPosition];

    // on retire la classe slider__img--current
    // de l'image actuelle
    currentImage.classList.remove('slider__img--current');

    // on ajoute la classe slider__img--current
    // à la nouvelle image
    newImage.classList.add('slider__img--current');

    // on met à jour la valeur de la position actuelle du slider
    slider.currentPosition = newPosition;

  },

  /**
   * Handler permettant d'afficher l'image suivante
   */
  handleClickNextSlide: function() {
    // on sélectionne l'image actuelle
    const currentImage = slider.imagesElements[slider.currentPosition];

    // on déclare newPosition ici
    // pour une portée de fonction
    // variable qui nous servira à calculer
    // l'index de l'image suivante
    let newPosition;

    // on calcul l'index de l'image suivante
    // sachant qu'on veut pouvoir boucler sur le slider
    // autrement dit :
    // si l'image actuelle est la dernière du slider (dernier index)
    // alors l'image suivante sera la première du slider
    if ( slider.currentPosition === (slider.imagesTotal - 1) ) {
      // on est dans le cas où on est sur la dernière image
      // donc l'index de l'image suivante
      // sera l'index de la première image du slider
      newPosition = 0;
    }
    else {
      // on est dans le cas où on n'est pas sur la dernière image
      // donc l'index de l'image précédente sera une incrémentation
      newPosition = (slider.currentPosition + 1);
    }

    // on sélectionne la nouvelle image
    const newImage = slider.imagesElements[newPosition];

    // on retire la classe slider__img--current
    // de l'image actuelle
    currentImage.classList.remove('slider__img--current');

    // on ajoute la classe slider__img--current
    // à la nouvelle image
    newImage.classList.add('slider__img--current');

    // on met à jour la valeur de la position actuelle du slider
    slider.currentPosition = newPosition;

  },

  /**
   * Méthode qui ajoute des images dans le slider
   */
  generateSliderImages: function() {

    // l'énoncé nous propose ce joli tableau indexé (array)
    const sliderImages = [
      'ocean.jpg',
      'ski.jpg',
      'city.jpg'
    ];
  
    // on sélectionne l'élément ayant la classe slider
    const sliderContainer = document.querySelector('.slider');
    
    // on parcourt ce tableau
    for (const filename of sliderImages) {
      
      // on créé un élément de type <img>
      const newSliderImage = document.createElement('img');
    
      // on donne une valeur à son attribut src
      newSliderImage.src = 'img/' + filename;
    
      // on lui donne les classes suivantes (cf README)
      // - slider__img
      // - slider__img--current
      newSliderImage.classList.add('slider__img');
    
      // on insert cette image dans l'élément ayant la classe slider
      sliderContainer.append(newSliderImage);
  
    }
  
    // la boucle est terminée,
    // on sélectionne la première image du slider
    // pour lui ajouter la classe "slider__img--current"
    const firstSliderImage = document.querySelector('.slider__img');
    firstSliderImage.classList.add('slider__img--current');
  
  },

};

document.addEventListener('DOMContentLoaded', slider.init);