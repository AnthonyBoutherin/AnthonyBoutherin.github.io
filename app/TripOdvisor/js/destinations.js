/**
 * Gestion des fonctionnalités liées aux destinations
 */
const destinations = {
  
  // on y déclare une variable (propriété)
  notLoggedInUserMessage: 'Vous devez être connecté pour gérer vos favoris',

  /**
   * Méthode qui initialise
   * tout ce qui est lié aux destinations
   * 
   * C'est un peu le bureau d'accueil de notre objet (cc) Fanny
   * potentiellement, on pourrait y faire d'autres choses,
   * et là ça prendra tout son sens d'avoir une méthode
   * qui nous servira de point d'entrée
   */
  init: function() {
    // on exécute la méthode addLikeEvents
    destinations.addLikeEvents();
  },

  /**
   * Mise en place d'écouteurs d'évènements sur les boutons LIKE
   */
  addLikeEvents: function() {
    
    // on sélectionne les éléments ayant la classe btn__like
    const heartElements = document.querySelectorAll('.btn__like');
    // pour chacun de ces éléments
    for (const heartElement of heartElements) {
      // on place un écouteur d'évènement
      heartElement.addEventListener('click', destinations.handleLikeClick);
    }

  },

  handleLikeClick: function(event) {

    // on sélectionne l'élément qui est lié à l'évènement
    const clickedElement = event.currentTarget;
    
    // on en récupère l'élément parent le plus proche ayant la classe card
    // https://developer.mozilla.org/fr/docs/Web/API/Element/closest
    // closest() parcourt tous les parents d’un élément
    // et retourne le premier élément parent
    // correspondant au sélecteur CSS qu’on lui a donné
    const cardElement = clickedElement.closest('.card');
    
    // on délègue à la méthode add de l'objet messages
    // l'ajout d'un message dans cet élément parent
    messages.add(destinations.notLoggedInUserMessage, cardElement);

  },

};

// on exécute la méthode destinations.init
// lorsque la page web est chargée
document.addEventListener('DOMContentLoaded', destinations.init);