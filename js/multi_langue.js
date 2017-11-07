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

    /* 
     * MENU 
     */
    menu_a_propos: {
        fr: "A propos",
        en: "About",
        es: "Acerca de",
        de: "Über",
    },
    menu_decouvrir: {
        fr: "Découvrir",
        en: "Discover",
        es: "Descubrir",
        de: "Entdecken",
    },
    menu_tourisme: {
        fr: "Tourisme",
        en: "Tourism",
        es: "Turismo",
        de: "Tourismus",
    },
    menu_avis: {
        fr: "Avis",
        en: "Testimonials",
        es: "Testimonios",
        de: "Zeugnisse",
    },
    menu_services: {
        fr: "Services",
        en: "Services",
        es: "Servicios",
        de: "Unterkünfte",
    },
    menu_contact: {
        fr: "Contact",
        en: "About",
        es: "Contacto",
        de: "Kontakt",
    },
    menu_traduction: {
        fr: "Traduction",
        en: "Translate",
        es: "Traducir",
        de: "Übersetzen",
    },

    /* 
     * SLIDER 
     */
    
    slider_bouton: {
        fr: `Découvrez la maison`,
        en: `Let's have a look !`,
        es: `TODO`,
        de: `TODO`,
    },

    slider_description: {
        fr: `
            Chambres d'hôtes
            <br>
            Demeure du XIXe
            <br>
            Au coeur de la Bretagne romantique
        `,
        en: `
            TODO
        `,
        es: `
            TODO
        `,
        de: `
            TODO
        `,
    },

    /* 
     * A PROPOS 
     */
    a_propos_description: {
        fr: `Charmante maison du XIXe située au coeur 
        de la Bretagne romantique. Cette maison d'hôtes est 
        proche de tous les délices qu'offre la Bretagne comme Saint-Malo.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    /* 
     * TOURISME 
     */
    tourisme_description: {
        fr: `De beaux endroits à visiter`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_dinan: {
        fr: `Ceinturée de près de trois kilomètres de remparts, 
            la ville de Dinan et son château du 14e siècle dominent 
            fièrement la Rance. En contrebas, le petit port de plaisance 
            constitue le point de départ de belles balades le long de l'estuaire 
            tandis que là-haut, les maisons à encorbellement complètent la visite de 
            cette ville au cachet médiéval.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_rance: {
        fr: `La vallée de la Rance est l'un des 
            plus caractéristiques estuaires de la région.
            Alors que se découvrent de vastes étendues à marée basse, 
            le lieu ressemble à un bras de mer à marée haute.
            De Dinan à Dinard et Saint-Malo, la balade sur 
            les bords du fleuve vaut vraiment le détour ! 
            On y admire villages pittoresques et 
            jolies malouinières.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_emeraude: {
        fr: `Des paysages sans cesse renouvelés 
            par de grandes marées spectaculaires, 
            une nature généreuse, un patrimoine d'une 
            richesse exceptionnelle : venez découvrir la 
            Côte d'Emeraude.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_saint_malo: {
        fr: `Vaisseau de pierre sur l'embouchure 
            de la Rance, Saint-Malo dresse 
            fièrement ses remparts au-dessus 
            de ses plages et de son port. 
            Les façades et tours émergeant des 
            fortifications donnent à la ville sa 
            silhouette unique. Pour aborder la cité malouine, 
            le chemin de ronde offre des vues imprenables !`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_cancale: {
        fr: `<p>Cet éperon rocheux, ultime limite avant
            d'entrer dans la Baie du Mont Saint-Michel, 
            est un magnifique observatoire, 
            exposé au vent. D'une beauté à couper le souffle, 
            le site offre l'un des plus vastes panoramas d'Ille-et-Vilaine. 
            La vue récompense la petite marche à effectuer dans les chemins creux.</p>
            <p>Ce joli port se savoure autant par le regard que par le palais. 
            Élu site remarquable du goût, Cancale est depuis longtemps réputé 
            pour ses huîtres et ses coquillages. Atout incontestable, 
            ces délices iodés s'apprécient en admirant la merveille qu'est le 
            Mont Saint-Michel, serti au milieu de la baie.</p>`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_mont_saint_michel: {
        fr: `Partout où votre regard se pose, 
            il vous confirme que la baie du Mont Saint-Michel 
            est une merveille. Les sables, les herbus, la mer, 
            le ciel se partagent l'horizon. La lumière joue avec les éléments, 
            dans un paysage changeant où se reflètent le Mont Saint-Michel 
            et les alignements des bouchots.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_combourg: {
        fr: `Combourg reste intimement lié au plus illustre 
            écrivain romantique français. A la fin du XVIIIe siècle, 
            l'inspiration de François René de Châteaubriand est née 
            dans ce décor historique, enchâssé dans un écrin de verdure. 
            Dans les pas du poète et romancier, laissez-vous gagner par 
            l'atmosphère bucolique du lac Tranquille dominé par l'imposant château.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_becherel: {
        fr: `Bienvenue à Bécherel. Une charmante petite cité aux ruelles 
            toutes médiévales. Sa foire aux livres anciens attire chaque 
            année de nombreux passionnés mais également des bouquinistes 
            et des libraires. Prenez le temps de flâner sur la place des 
            Halles et dans le jardin du Thabor avant de partir à la découverte 
            des églises et châteaux des environs.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    tourisme_broceliande: {
        fr: `Qui n'a jamais entendu parler de la légende 
            du roi Arthur ? C'est dans la magnifique forêt de 
            Brocéliande, entre landes et étangs, qu'elle prend sa 
            source. La seule évocation de ce lieu réveille un monde 
            merveilleux peuplé de la fée Viviane, Merlin l'enchanteur 
            ou du chevalier Lancelot. Un site magique à découvrir 
            lors de belles randonnées.`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    /* 
     * TOURISME 
     */

    decouvrir_titre: {
        fr: `La maison`,
        en: `The house`,
        es: `La casa`,
        de: `Das Haus`,
    },

    decouvrir_texte: {
        fr: `Découvrez la maison`,
        en: `Have a look at the house`,
        es: `Mira la casa`,
        de: `Das Haus`,
    },


    /*
     * AVIS
     */

    avis_description: {
        fr: `Nos clients sont ravis :)`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    avis_airbnb: {
        fr: `« Nous avons été très bien accueillis, 
            dans un cadre très agréable. Le logement était 
            très fonctionnel et chaleureux. Les hôtes ont été 
            remarquables de gentillesse, d'attention et d'adaptabilité 
            pour répondre à nos envies. Très bon petit déjeuner au bord 
            de la piscine. Nous recommandons vivement cette adresse. »`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },


    avis_tripadvisor: {
        fr: `« Nous avions privatisé les lieux car nous étions partis 
            à 4 couples avec les enfants. Nous avons passé un super séjour. 
            La maison est très bien équipée et propre, la piscine très 
            agréable et le jardin magnifique. Les propriétaires sont très 
            sympa et accueillant. Tout simplement super ! »`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    avis_booking: {
        fr: `« L'endroit est accueillant ,au calme ,d'une grande propreté 
            ...la propriétaire est d'une grande gentillesse ,elle 
            "se met en quatre" pour les hôtes ...mise à disposition 
            d'une piscine ,très sympa ...petit déjeuner très copieux 
            avec ,oh surprise des petits fars au pruneau encore chauds ... »`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    services_description_maison: {
        fr: `
            <h3>Description de la maison</h3>
            <hr>
            <h4>5 chambres</h4>
            <ul>
                <li>3 chambres doubles</li>
                <li>2 chambres avec 2 lits simples modulables en lits doubles</li>
            </ul>
            <hr>
            <p>Douche, lavabo et toilettes dans chaque chambre</p>
            <hr>
            <p>Couchages supplémentaires canapé lit dans la bibliothèque</p>
            <ul>
                <li>2 lits de camp à disposition</li>
                <li>2 lits parapluie</li>
            </ul>
            <hr>
            <p>Pièces de vie<p>
            <ul>
                <li>Cuisine aménagée toute équipée</li>
                <li>Salon avec télé</li>
                <li>Salle à manger</li>
            </ul>
        `,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    services_location_maison: {
        fr: `
            <h3>Location de la maison</h3>
            <hr>
            <p>du 1er avril au 11 novembre</p>
            <hr>
            <h4>Piscine couverte et chauffée en activité</h4>
            <p>draps fournis, lits faits à votre arrivée, ménage inclus dans les chambres, prix TTC</p>
            <hr>
            <p>Week-end: 700 €</p><hr>
            <p>3 nuits: 900 €</p><hr>
            <p>4 nuits: 1 100 €</p><hr>
            <p>5 nuits: 1 300 €</p><hr>
            <p>1 semaine: 1 500 €</p>
        `,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    services_location_maison_hs: {
        fr: `
            <h3>Location de la maison</h3>
            <hr>
            <p>du 11 novembre au 31 mars</p>
            <hr>
            <h4>Piscine hors service</h4>
            <p>draps fournis, lits faits à votre arrivée, ménage inclus dans les chambres, prix TTC</p>
            <hr>
            <p>Week-end: 500 €</p><hr>
            <p>3 nuits: 700 €</p><hr>
            <p>4 nuits: 900 €</p><hr>
            <p>5 nuits: 1 100 €</p><hr>
            <p>1 semaine: 1 300 €</p>
        `,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    services_description: {
        fr:`
            <h3>Services</h3>
            <hr>
            <p>
                <ul>
                    <li>Petits déjeuners inclus dans le prix (uniquement pour location de chambres et suites)</li>
                    <li>Kitchenette et BBQ à disposition</li>
                    <li>Jardin clos avec jeux d'enfants</li>
                    <li>Livres et jeux de société</li>
                    <li>Lits et chaises bébé sur demande</li>
                    <li>Animaux acceptés sur demande</li>
                    <li>Baby-sitting et dog-sitting sur demande</li>
                    <li>Internet WiFi</li>
                </ul>
            </p>
        `,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    services_location_chambres: {
        fr: `
            <h3>Location chambres doubles ou simples</h3>
            <hr>
            <p>1 nuit pour 2 : personnes 55 €</p><hr>
            <p>1 nuit 1 lit : supplémentaire 15 €</p><hr>
            <p>1 nuit pour 1 personne: 45 €</p><hr>
        `,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    services_location_suites: {
        fr: `
            <h3>Location suites familiales</h3>
            <hr>
            <p>Une suite familiale comprend 2 chambres attenantes</p>
            <hr>
            <p>1 nuit pour 4 personnes 90 €</p><hr>
            <p>1 nuit 1 lit supplémentaire 15 €</p>
        `,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    /*
     * CONTACT
     */

    contact_description: {
        fr: `Nous serons très heureux de vous accueillir !`,
        en: `TODO`,
        es: `TODO`,
        de: `TODO`,
    },

    /*
     * FOOTER
     */
    
    footer_design: {
        fr: `Designé par`,
        en: `Designed by`,
        es: `Diseñada por`,
        de: `Entworfen von`,
    },

    footer_infologs: {
        fr: `Site web installé par`,
        en: `Website deployed by`,
        es: `Sitio web instalado por`,
        de: `Website installiert von`,
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