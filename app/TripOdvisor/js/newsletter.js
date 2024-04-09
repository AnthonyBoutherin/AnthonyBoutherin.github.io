/**
 * Gestion de l'encart newsletter
 */
const newsletter = {

  /**
   * Liste des domaines emails rejetés
   * pour l'inscription newsletter
   */
  forbiddenDomains: null,

  /**
   * Formulaire d'inscription newsletter
   */
  newsletterForm: null,

  /**
   * Lien newsletter du menu de la nav
   */
  newsletterLink: null,

  /**
   * Popup newsletter
   */
  newsletterPopup: null,

  /**
   * Croix de fermeture de la popup
   */
  newsletterCloseLink: null,

  /**
   * Méthode appelée lorsque le DOM est prêt
   */
  init: function() {
    
    // on donne les bonnes valeurs aux propriétés

    newsletter.forbiddenDomains = [
      '@yopmail.com',
      '@yopmail.fr',
      '@yopmail.net',
      '@cool.fr.nf',
      '@jetable.fr.nf',
      '@courriel.fr.nf',
      '@moncourrier.fr.nf',
      '@monemail.fr.nf',
      '@monmail.fr.nf',
      '@hide.biz.st',
      '@mymail.infos.st',
    ];

    newsletter.newsletterForm = document.querySelector('.newsletter form');
    newsletter.newsletterLink = document.querySelector('#newsletter-link');
    newsletter.newsletterPopup = document.querySelector('.newsletter');
    newsletter.newsletterCloseLink = document.querySelector('.newsletter__close');

    // on délègue la mise en place des écouteurs d'évènements
    // à une méthode de notre objet
    newsletter.addEvents();

  },

  /**
   * Méthode qui met en place les écouteurs d'événements liés à la newsletter
   */
  addEvents: function() {
    newsletter.newsletterForm.addEventListener('submit', newsletter.handleNewsletterFormSubmitted);
    newsletter.newsletterLink.addEventListener('click', newsletter.handleNewsletterOpen);
    newsletter.newsletterCloseLink.addEventListener('click', newsletter.handleNewsletterClose);
  },

  /**
   * Handler gérant l'ouverture de la popup newsletter
   */
  handleNewsletterOpen: function() {
    // on affiche la popup newsletter
    // en lui ajoutant la classe newsletter--on
    newsletter.newsletterPopup.classList.add('newsletter--on');
  },

  /**
   * Handler gérant la fermeture de la popup newsletter
   */
  handleNewsletterClose: function() {
    // on cache la popup newsletter
    // en lui retirant la classe newsletter--on
    newsletter.newsletterPopup.classList.remove('newsletter--on');
  },

  /**
   * Handler gérant l'envoi du formulaire d'inscription à la newsletter
   */
  handleNewsletterFormSubmitted: function(event) {
  
    // on empêche le rechargement de la page
    event.preventDefault();
  
    // on sélectionne le champ input email ayant l'id subscriber-email
    const emailElement = document.querySelector('#subscriber-email');
  
    // on en récupère la valeur
    const emailValue = emailElement.value;
  
    // on créé une variable emailRejected
    // qui nous servira à savoir si l'email utilisateur
    // est rejeté ou pas
    let emailRejected = false;
  
    // on parcourt la liste des domaines email rejetés
    // pour l'inscription newsletter
    for (const domain of newsletter.forbiddenDomains) {
      // on passe par la fonction native JS includes
      // qui retourne TRUE si une entrée est présente
      // dans une chaîne de caractères
      // ou FALSE sinon
      // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes
      // 
      // exemple : 
      // 'Cette baleine est vraiment bien bleue'.includes('baleine'); // true
  
      // on compare l'email saisi par l'utilisateur (contenu dans emailValue)
      // avec le nom de domaine extrait par la boucle for...of (contenu dans domain)
      if ( emailValue.includes(domain) ) {
        emailRejected = true;
      }
    }
  
    // une fois sorti de la boucle,
    // on conditionne sur emailRejected
    if (emailRejected === true) {
      console.log('adresse email rejetée');
  
      // on affiche un nouveau message
      // en déléguant cela à la méthode add
      // contenue dans l'objet messages
      messages.add('Les adresses jetables ne sont pas admises', newsletter.newsletterPopup);
  
    }
    else {
      console.log('adresse email acceptée');
      
      // on affiche un nouveau message
      // en déléguant cela à la méthode add
      // contenue dans l'objet messages
      messages.add('Merci', newsletter.newsletterPopup);
    }
  
  },

};

// on exécute la méthode newsletter.init
// lorsque la page web est chargée
document.addEventListener('DOMContentLoaded', newsletter.init);