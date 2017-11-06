window.lang = 'fr';

var langs = ['en','fr','es','de'];

var expressions = {

    bouton_fr: {
        fr: ``,
        en: `<a onclick="translateTo('fr'); return false;"><i class="flag-icon flag-icon-fr"></i> French </a>`,
        es: `<a onclick="translateTo('fr'); return false;"><i class="flag-icon flag-icon-fr"></i> Francés </a>`,
        de: `<a onclick="translateTo('fr'); return false;"><i class="flag-icon flag-icon-fr"></i> Französisch </a>`,
    },

    bouton_de: {
        fr: `<a onclick="translateTo('de'); return false;"><i class="flag-icon flag-icon-de"></i> Allemand </a>`,
        en: `<a onclick="translateTo('de'); return false;"><i class="flag-icon flag-icon-de"></i> German</a>`,
        es: `<a onclick="translateTo('de'); return false;"><i class="flag-icon flag-icon-de"></i> Alemán </a>`,
        de: ``,
    },

    bouton_en: {
        fr: `<a onclick="translateTo('en'); return false;"><i class="flag-icon flag-icon-gb"></i> Anglais </a>`,
        en: ``,
        es: `<a onclick="translateTo('en'); return false;"><i class="flag-icon flag-icon-gb"></i> Inglés </a>`,
        de: `<a onclick="translateTo('en'); return false;"><i class="flag-icon flag-icon-gb"></i> Englisch </a>`,
    },

    bouton_es: {
        fr: `<a onclick="translateTo('es'); return false;"><i class="flag-icon flag-icon-es"></i> Espagnol </a>`,
        en: `<a onclick="translateTo('es'); return false;"><i class="flag-icon flag-icon-es"></i> Spanish </a>`,
        es: ``,
        de: `<a onclick="translateTo('es'); return false;"><i class="flag-icon flag-icon-es"></i> Spanisch </a>`,
    },

    hello: {
        fr: "hello_fr",
        en: "hello_en",
        es: "hello_es",
        de: "hello_de",
    },

    /* 
     * MENU 
     */
    menu_a_propos: {
        fr: "a propos",
        en: "about",
        es: "acerca de",
        de: "Über",
    },
    menu_decouvrir: {
        fr: "decouvrir",
        en: "discover",
        es: "descubrir",
        de: "entdecken",
    },
    menu_tourisme: {
        fr: "tourisme",
        en: "tourism",
        es: "turismo",
        de: "Tourismus",
    },
    menu_avis: {
        fr: "avis",
        en: "testimonials",
        es: "testimonios",
        de: "Zeugnisse",
    },
    menu_services: {
        fr: "services",
        en: "services",
        es: "servicios",
        de: "Unterkünfte",
    },
    menu_contact: {
        fr: "contact",
        en: "about",
        es: "contacto",
        de: "kontakt",
    },
    menu_traduction: {
        fr: "Traduction",
        en: "Translate",
        es: "Traducir",
        de: "Übersetzen",
    },

}


var translateTo = function(lang){
    if (langs.indexOf(lang) > -1) {
        var elements = document.querySelectorAll('[multi_langue]');
        for (var i = elements.length - 1; i >= 0; i--) {
            var expression = elements[i].getAttribute('multi_langue');
            var traduction = expressions[expression][lang];
            elements[i].innerHTML = traduction;
        }
    }
}

translateTo(window.lang);