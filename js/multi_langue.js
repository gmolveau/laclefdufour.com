window.lang = 'fr';

var langs = ['en','fr','es','de'];

var expressions = {

    bouton_fr: {
        fr: ``,
        en: `<a onclick="translateTo('fr'); return false;"><i class="flag-icon flag-icon-fr"></i></a>`,
        es: `<a onclick="translateTo('fr'); return false;"><i class="flag-icon flag-icon-fr"></i></a>`,
        de: `<a onclick="translateTo('fr'); return false;"><i class="flag-icon flag-icon-fr"></i></a>`,
    },

    bouton_de: {
        fr: `<a onclick="translateTo('de'); return false;"><i class="flag-icon flag-icon-de"></i></a>`,
        en: `<a onclick="translateTo('de'); return false;"><i class="flag-icon flag-icon-de"></i></a>`,
        es: `<a onclick="translateTo('de'); return false;"><i class="flag-icon flag-icon-de"></i></a>`,
        de: ``,
    },

    bouton_en: {
        fr: `<a onclick="translateTo('en'); return false;"><i class="flag-icon flag-icon-gb"></i></a>`,
        en: ``,
        es: `<a onclick="translateTo('en'); return false;"><i class="flag-icon flag-icon-gb"></i></a>`,
        de: `<a onclick="translateTo('en'); return false;"><i class="flag-icon flag-icon-gb"></i></a>`,
    },

    bouton_es: {
        fr: `<a onclick="translateTo('es'); return false;"><i class="flag-icon flag-icon-es"></i></a>`,
        en: `<a onclick="translateTo('es'); return false;"><i class="flag-icon flag-icon-es"></i></a>`,
        es: ``,
        de: `<a onclick="translateTo('es'); return false;"><i class="flag-icon flag-icon-es"></i></a>`,
    },

    hello: {
        fr: "hello_fr",
        en: "hello_en",
        es: "hello_es",
        de: "hello_de",
    },

    menu_a_propos: {
        fr: "a propos",
        en: "about",
        es: "acerca de",
        de: "Über",
    }

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