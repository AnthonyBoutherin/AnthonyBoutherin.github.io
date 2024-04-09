/**
 * Gestion des messages d'informations
 */
const messages = {

  /**
   * Méthode permettant d'ajouter un nouveau message dans un élément
   * @param {string} content Le contenu du message à ajouter
   * @param {element} parentElement L'élément dans lequel ajouter le message
   */
  add: function(content, parentElement) {

    // on délègue la suppression des messages précédents, à la méthode reset
    messages.reset(parentElement);

    // on créé un nouvel élément de type p
    const messageElement = document.createElement('p');
    // on lui donne un contenu textuel
    messageElement.textContent = content;
    // on lui ajoute la classe message
    messageElement.classList.add('message');
    // on l'insert dans la popup newsletter
    parentElement.prepend(messageElement);

  },

  /**
   * Méthode permettant de supprimer tous les messages contenus dans un élément
   * @param {element} parentElement L'élément contenant les messages à supprimer
   */
  reset: function(parentElement) {
    
    // on sélectionne tous les éléments ayant la classe message
    // contenus dans l'élément parent
    const messageElements = parentElement.querySelectorAll('.message');

    // pour chacun de ces éléments
    for (const messageElement of messageElements) {
      // on supprime cet élément
      // https://developer.mozilla.org/fr/docs/Web/API/Element/remove
      messageElement.remove(); // ciao
    }

  },

};