

/**
 * Affichage de l'encart de newsletter
 */

// on sélectionne le lien newsletter du menu de la nav
const newsletterLink = document.querySelector('#newsletter-link');

// on sélectionne la popup (l'encart) newsletter
// qui a été cachée via une modif dans le CSS
const newsletterPopup = document.querySelector('.newsletter');

const newsletterCloseLink = document.querySelector('.newsletter__close');

// liste des domaines email rejetés
// pour l'inscription newsletter
const forbiddenDomains = [
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

// on sélectionne le formulaire inscription newsletter
const newsletterForm = document.querySelector('.newsletter form');

// on créé un handler pour gérer l'envoi du formulaire
// on récupère l'objet event pour pouvoir stopper 
// le comportement par défaut de l'envoi du formulaire
// à savoir le changement/rechargement de page
// via event.preventDefault()
function handleNewsletterFormSubmitted(event) {
  
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
  for (const domain of forbiddenDomains) {
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
    messages.add('Les adresses jetables ne sont pas admises', newsletterPopup);

  }
  else {
    console.log('adresse email acceptée');
    
    // pour le moment, on ne fait que vider les messages précédents
    messages.reset(newsletterPopup);
  }

}

// on attache le handler à un élément
// en précisant le type d'évènement
// attention, ici c'est un évènement de type submit
newsletterForm.addEventListener('submit', handleNewsletterFormSubmitted);

// on créé un handler pour gérer l'ouverture de la popup newsletter
// handler sans paramètre, parce qu'on a pas besoin de l'objet event
// qui permettrait d'avoir des infos sur :
// type, currentTarget ou de faire un preventDefault()
function handleNewsletterOpen() {
  // on affiche la popup newsletter
  // en lui ajoutant la classe newsletter--on
  newsletterPopup.classList.add('newsletter--on');
}

// on attache le handler à un élément
// en précisant le type d'évènement (ici : click)
newsletterLink.addEventListener('click', handleNewsletterOpen);

// on créé un handler pour gérer la fermeture de la popup newsletter
function handleNewsletterClose() {
  // on cache la popup newsletter
  // en lui retirant la classe newsletter--on
  newsletterPopup.classList.remove('newsletter--on');
}

// on attache le handler à un élément
// en précisant le type d'évènement (ici : click)
newsletterCloseLink.addEventListener('click', handleNewsletterClose);

/**
 * Appel des fonctions à la fin du script
 */

