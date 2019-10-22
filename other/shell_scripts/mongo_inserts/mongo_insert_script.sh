#! /usr/bin/env bash
#script for webshop environment installation on VM by Manuel Kehl, Oliver Maicher, 11.04.2019
#content delivered by Oliver Maicher, Maximilian Kaiser, 21./22.05.2019

# hashtag # is an illegal character in mongo shell: 2019-05-09T10:44:03.317+0200 E QUERY    [js] SyntaxError: illegal character @(shell):1:0
# there's this error message however it works anyway

mongo mongodb://localhost:27017/space-estate <<EOF

use space-estate;

db.dropDatabase();

use space-estate;

db.createUser(
  {
    "user": "astro-user",
    "pwd": "astro-pw",
    "roles": [
       { "role": "read", "db": "space-estate" },
       { "role": "readWrite", "db": "space-estate" }
    ]
  }
);

db.createCollection("planets");
db.createCollection("carts");
db.createCollection("currencies");
db.createCollection("users");
db.createCollection("orders");
db.createCollection("contents");
db.createCollection("languages");

db.languages.insertMany([
  {
        "langCode" : "en"
  },
  {
        "langCode" : "de"
  }
]);

db.pages.insertMany([
  {
    "pageId": 0,
    "path": "home",
    "languages": {
      "en": {"title": "Homepage" },
      "de": {"title": "Startseite" }
    }
  },
  {
    "pageId": 1,
    "path": "products",
    "languages": {
      "en": {"title": "products" },
      "de": {"title": "Produkte" }
    }
  },
  {
    "pageId": 2,
    "path": "shopping_cart",
    "languages": {
      "en": {"title": "shopping cart" },
      "de": {"title": "Warenkorb" }
    }
  },
  {
    "pageId": 3,
    "path": "orders",
    "languages": {
      "en": {"title": "orders" },
      "de": {"title": "Bestellungen" }
    }
  },
  {
    "pageId": 4,
    "path": "imprint",
    "languages": {
      "en": {"title": "imprint" },
      "de": {"title": "Impressum" }
    }
  }
]);

db.planets.insertMany(
[
  {
    "simpleName": "jupiter",
    "languages": {
      "en": {"name": "Jupiter", "description": "With an equatorial diameter of around 143,000 kilometres, Jupiter is the largest planet in the solar system. With an average distance of 778 million kilometres, it is the fifth planet seen from the Sun. It has no visible solid surface. " },
      "de": {"name": "Jupiter", "description": "Der Jupiter ist mit einem Äquatordurchmesser von rund 143.000 Kilometern der größte Planet des Sonnensystems. Mit einer durchschnittlichen Entfernung von 778 Millionen Kilometern ist er von der Sonne aus gesehen der fünfte Planet. Er hat keine sichtbare feste Oberfläche." }
    },
    "totalSize": 61419000000,
    "priceSquareKm": 135000.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/jupiter_large.jpg",
    "planetId": 3
  },
  {
    "simpleName": "pluto",
    "languages": {
      "en": {"name": "Pluto", "description": "Pluto is the largest and second largest known dwarf planet and the longest known object in the Kuiper Belt. It is named after the Roman god of the underworld. The new classes of Plutoids and Plutinos were named after the dwarf planet. After more and more Plutoids - similarly large bodies of the Kuiper belt - had been found, Pluto was deprived of its planetary status."},
      "de": {"name": "Pluto", "description": "Pluto ist der größte und zweitmassivste bekannte Zwergplanet und das am längsten bekannte Objekt des Kuipergürtels. Er ist nach dem römischen Gott der Unterwelt benannt. Nach dem Zwergplaneten wiederum wurden die neuen Klassen der Plutoiden und der Plutinos benannt. Nachdem immer mehr Plutoiden – also ähnlich große Körper des Kuipergürtels – gefunden worden waren, wurde Pluto der Planetenstatus aberkannt."}
    },
    "totalSize": 17790000,
    "priceSquareKm": 600554.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/pluto_large.jpg",
    "planetId": 6
  },
  {
    "simpleName": "enceladus",
    "languages": {
      "en": {"name": "Enceladus", "description": "Enceladus (also Saturn II) is one of Saturn's largest moons. In terms of mass and diameter, it is the sixth largest of the 62 known moons, and the fourteenth largest in terms of distance from the central planet Saturn. It is an ice moon and shows cryovolcanic activities whose very high fountains of water ice particles on the southern hemisphere create a thin atmosphere."},
      "de": {"name": "Enceladus", "description": "Enceladus (auch Saturn II) ist einer der größten Saturnmonde. Nach Masse und Durchmesser steht er an sechster Stelle und nach Abstand vom Zentralplaneten Saturn an vierzehnter Stelle der 62 bekannten Monde. Er ist ein Eismond und zeigt kryovulkanische Aktivitäten, deren sehr hohe Fontänen aus Wassereispartikeln auf der südlichen Hemisphäre eine dünne Atmosphäre erzeugen."}
    },
    "totalSize":798648,
    "priceSquareKm": 495999.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/enceladus_large.jpg",
    "planetId": 7
  },
  {
    "simpleName": "europa",
    "languages": {
      "en": {"name": "Europa", "description": "Europa (Jupiter II) is the smallest of the four Galilean moons orbiting Jupiter, and the sixth-closest to the planet of all the 79 known moons of Jupiter. It is also the sixth-largest moon in the Solar System. Europa was discovered in 1610 by Galileo Galilei and was named after Europa, the Phoenician mother of King Minos of Crete and lover of Zeus (the Greek equivalent of the Roman god Jupiter)."},
      "de": {"name": "Europa", "description": "Europa (auch Jupiter II) ist der zweitinnerste Mond des Planeten Jupiter. Sie ist mit einem Durchmesser von 3121 km der kleinste der vier großen Jupitermonde und der sechstgrößte Mond im Sonnensystem. Europa ist ein Eismond. Obwohl die Temperatur auf der Oberfläche von Europa maximal −150 °C erreicht, gibt es Hinweise, dass sich unter der mehrere Kilometer mächtigen Wassereishülle ein etwa 100 km tiefer Ozean aus flüssigem Wasser befindet."}
    },
    "totalSize": 30900000,
    "priceSquareKm": 575999.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/europa_large.jpg",
    "planetId": 9
  },
  {
    "simpleName": "ganymede",
    "languages": {
      "en": {"name": "Ganymede", "description": "Ganymede, a satellite of Jupiter (Jupiter III), is the largest and most massive of the Solar System's moons. The ninth largest object in the Solar System, it is the largest without a substantial atmosphere. It has a diameter of 5,268 km (3,273 mi) and is 8% larger than the planet Mercury, although only 45% as massive. Possessing a metallic core, it has the lowest moment of inertia factor of any solid body in the Solar System and is the only moon known to have a magnetic field."},
      "de": {"name": "Ganymed", "description": "Europa (auch Jupiter II) ist der zweitinnerste Mond des Planeten Jupiter. Sie ist mit einem Durchmesser von 3121 km der kleinste der vier großen Jupitermonde und der sechstgrößte Mond im Sonnensystem. Europa ist ein Eismond. Obwohl die Temperatur auf der Oberfläche von Europa maximal −150 °C erreicht, gibt es Hinweise, dass sich unter der mehrere Kilometer mächtigen Wassereishülle ein etwa 100 km tiefer Ozean aus flüssigem Wasser befindet."}
    },
    "totalSize": 87200000,
    "priceSquareKm": 449999.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/ganymede_large.jpg",
    "planetId": 11
  },
  {
    "simpleName": "titan",
    "languages": {
      "en": {"name": "Titan", "description": "Titan is the largest moon of Saturn and the second-largest natural satellite in the Solar System. It is the only moon known to have a dense atmosphere. Titan is the sixth gravitationally rounded moon from Saturn. Frequently described as a planet-like moon, Titan is 50% larger than Earth's moon and 80% more massive. It is the second-largest moon in the Solar System after Jupiter's moon Ganymede, and is larger than the planet Mercury, but only 40% as massive."},
      "de": {"name": "Titan", "description": "Titan (auch Saturn VI) ist mit einem Durchmesser von 5150 Kilometern der größte Mond des Planeten Saturn, weshalb er nach dem Göttergeschlecht der Titanen benannt wurde. Er ist ein Eismond, nach Ganymed der zweitgrößte Mond im Sonnensystem und der einzige mit einer dichten Gashülle."}
    },
    "totalSize": 83000000,
    "priceSquareKm": 390499.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/titan_large.jpg",
    "planetId": 10
  },
  {
    "simpleName": "neptune",
    "languages": {
      "en": {"name": "Neptune", "description": "Counted from the Sun, Neptune is the eighth and outermost known planet in our solar system, with an average Earth distance of 4.5 billion kilometres. It was discovered in 1846 by the German astronomer Johann Gottfried Galle on the basis of calculations by the French mathematician Urbain Le Verrier from orbital disturbances of Uranus."},
      "de": {"name": "Neptun", "description": "Der Neptun ist von der Sonne aus gezählt mit einer Erd-Entfernung von durchschnittlich 4,5 Milliarden Kilometern der achte und äußerste bekannte Planet unseres Sonnensystems. Er wurde im Jahre 1846 aufgrund von Berechnungen aus Bahnstörungen des Uranus durch den französischen Mathematiker Urbain Le Verrier von dem deutschen Astronomen Johann Gottfried Galle entdeckt."}
    },
    "totalSize": 7618300000,
    "priceSquareKm": 235000,
    "soldSizeSquareKm": 0,
    "image": "assets/images/neptune_large.jpg",
    "planetId": 1
  },
  {
    "simpleName": "mars",
    "languages": {
      "en": {"name": "Mars", "description": "Counted from the Sun, Mars is the fourth planet in the solar system and the outer neighbour of the Earth. It is one of the Earth-like terrestrial planets. With a diameter of just under 6800 kilometres, it is about half the size of the Earth, and its volume is a good seventh of the Earth's volume. This makes Mars the second smallest planet in the solar system after Mercury, but it has a diverse geology and the highest volcanoes in the solar system."},
      "de": {"name": "Mars", "description": "Der Mars ist, von der Sonne aus gezählt, der vierte Planet im Sonnensystem und der äußere Nachbar der Erde. Er zählt zu den erdähnlichen terrestrischen Planeten. Sein Durchmesser ist mit knapp 6800 Kilometer etwa halb so groß wie der der Erde, sein Volumen beträgt gut ein Siebtel des Erdvolumens. Damit ist der Mars nach dem Merkur der zweitkleinste Planet des Sonnensystems, hat jedoch eine vielfältige Geologie und die höchsten Vulkane des Sonnensystems."}
    },
    "totalSize": 144798500,
    "priceSquareKm": 627500,
    "soldSizeSquareKm": 0,
    "image": "assets/images/mars_large.jpg",
    "planetId": 4
  },
  {
    "simpleName": "venus",
    "languages": {
      "en": {"name": "Venus", "description": "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (243 Earth days) of any planet in the Solar System and rotates in the opposite direction to most other planets (meaning the Sun rises in the west and sets in the east). It does not have any natural satellites. It is named after the Roman goddess of love and beauty."},
      "de": {"name": "Venus", "description": "Die Venus ist mit einer durchschnittlichen Sonnenentfernung von 108 Millionen Kilometern der zweitinnerste und mit einem Durchmesser von ca. 12.100 Kilometern der drittkleinste Planet des Sonnensystems. Sie zählt zu den vier erdähnlichen Planeten, die auch terrestrische oder Gesteinsplaneten genannt werden."}
    },
    "totalSize": 460230000,
    "priceSquareKm": 497600,
    "soldSizeSquareKm": 0,
    "image": "assets/images/venus_large.jpg",
    "planetId": 8
  },
  {
    "simpleName": "uranus",
    "languages": {
      "en": {"name": "Uranus", "description": "Uranus (Latinization of uranós, sky) is the seventh planet in the solar system from the sun with an average solar distance of 2.9 billion kilometers and is counted among the outer Jupiter-like (Jovian) planets. It was discovered on 13 March 1781 by Wilhelm Herschel and is named after the Greek god Uranos."},
      "de": {"name": "Uranus", "description": "Der Uranus (Latinisierung von uranós, Himmel) ist von der Sonne aus mit einer durchschnittlichen Sonnenentfernung von 2,9 Milliarden Kilometern der siebte Planet im Sonnensystem und wird zu den äußeren, jupiterähnlichen (jovianischen) Planeten gerechnet."}
    },
    "totalSize": 8115600000,
    "priceSquareKm": 290499.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/uranus_large.jpg",
    "planetId": 5
  },
  {
    "simpleName": "luna",
    "languages": {
      "en": {"name": "Luna", "description": "The moon (lat. luna) is the only natural satellite on earth. Its name is etymologically related to month and refers to the period of its phase change. But because the satellites of other planets of the solar system are also called moons in the figurative sense, one speaks of the earth moon to avoid confusion."},
      "de": {"name": "Erdmond", "description": "Der Mond (lat. luna) ist der einzige natürliche Satellit der Erde. Sein Name ist etymologisch verwandt mit Monat und bezieht sich auf die Periode seines Phasenwechsels. Weil aber die Trabanten anderer Planeten des Sonnensystems im übertragenen Sinn meistens ebenfalls als Monde bezeichnet werden, spricht man zur Vermeidung von Verwechslungen mitunter vom Erdmond."}
    },
    "totalSize": 37930000,
    "priceSquareKm": 899999.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/luna_large.jpg",
    "planetId": 0
  },
  {
    "simpleName": "saturn",
    "languages": {
      "en": {"name": "Saturn", "description": "Biggest planetSeen from the Sun, Saturn is the sixth planet in the solar system and, with an equatorial diameter of about 120,500 kilometres (9.5 times the Earth's diameter), the second largest after Jupiter. With 95 earth masses, however, it has only 30 % of the mass of Jupiter. Because of its ring, which is already visible in a small telescope, it is often called the ring planet."},
      "de": {"name": "Saturn", "description": "Der Saturn ist von der Sonne aus gesehen der sechste Planet des Sonnensystems und mit einem Äquatordurchmesser von etwa 120.500 Kilometern (9,5-facher Erddurchmesser) nach Jupiter der zweitgrößte. Mit 95 Erdmassen hat er jedoch nur 30 % der Masse Jupiters. Wegen seines schon im kleinen Fernrohr sichtbaren Ringes wird er oft auch der Ringplanet genannt."}
    },
    "totalSize": 42700000000,
    "priceSquareKm": 189499.95,
    "soldSizeSquareKm": 0,
    "image": "assets/images/saturn_large.jpg",
    "planetId": 2
  }
]
);

db.users.insertMany([
  {
    "name" :"Maximilian",
    "email" : "mk303@hdm-stuttgart.de",
    "password" : "1000:c16596e80fc47ff2bb4d8886f49a6827:1f5b27c609f6af18db03c9a8337d4c98fd5c0abbff326be944e86545df7a01305bd09b577506e857543f3be7984aeef981422a4b46b50813ff912fda4f56097e",
    "userId" :BinData(3,"rUDcTM8CwFTnwZdfSNSYvQ=="),
    "_class" : "com.mi4stw.astrospaceestate.models.User"
  },
  {
    "name" :"Oliver",
    "email" : "om018@hdm-stuttgart.de",
    "password" : "1000:84156f51afcdb4b2db7e78a48a7e3b66:6df9a294894dc2b0e99d7233eaa44f4efd4060fd02e67d40e5da4b6fd8314c229d275a0887d3cfc3af506ba81cc3d5eab0fa83c66e43fd8ff4ec225bb7f9ed32",
    "userId" :BinData(3,"4kxW/XXj9+TvCLpUNVBMqw=="),
    "_class" : "com.mi4stw.astrospaceestate.models.User"
  },
  {
    "name" :"Dirk",
    "email" : "heuzeroth@hdm-stuttgart.de",
    "password" : "1000:270bf321bba4cea9c7ae50da92f885fb:d6d3d95ac49da3a051fc66bbcd780075567a29dd1f26333356154719e1c6aef0628c7ae3be5c893bcabdf5af03dc6c2c3fd184f29377d2763435d55407827f13",
    "userId" :BinData(3,"7kU3rxAEnXoA9zmH2Hz2pQ=="),
    "_class" : "com.mi4stw.astrospaceestate.models.User"
  }
]
);

db.currencies.insertMany([{"code": "EUR", "value": 1}, {"code": "USD", "value": 1.13}]);

db.contents.insertMany([{
    "simpleName": "teaser_home_1",
    "contentId": 0,
    "languages": {
      "de": {
        "headline": "Ihr Platz im All"
      },
      "en": {
        "headline": "Get your place in space"
      }
    },
    "images": {
      "logo": "assets/images/logo.svg",
      "background_image": "assets/images/teaser.jpg"
    }
  },{
    "simpleName": "description_home_1",
    "contentId": 1,
    "languages": {
      "de": {
        "headline": "Über Astro Space Estate",
        "button": "Entdecken Sie unsere Planeten",
        "text": "Die Nummer Eins auf dem Markt extra-terrestrischer Immobilien! Wir bieten Ihnen die volle Auswahl zum kleinen Preis. Aufgrund unserer Lobbyarbeit war es uns möglich vor allen Anderen großflächig Grundstücke zu erwerben und unsere Prestige-Objekte nun an sowohl an Statuskunden als auch an die Bourgeoisie zu verkaufen."
      },
      "en": {
        "headline": "About Astro Space Estate",
        "button": "Explore our properties",
        "text": "Number one on the extra-terrestrial real estate market! We offer you the full range at a small price. Due to our lobby work it was possible for us to purchase large plots of land in front of everyone else and to sell our prestige properties to status customers as well as to the bourgeoisie."
      }
    },
    "images": {
      "background_image": "assets/images/planets_bg.jpg"
    }
  },
  {
    "simpleName": "headline_text_home_1",
    "contentId": 2,
    "languages": {
      "de": {
        "headline": "Unsere Empfehlungen",
        "text": "Im Folgenden bieten wir eine handerlesene Auswahl sich ständig ändernder Aktionsprodukte. Das dürfen Sie sich nicht entgehen lassen! "
      },
      "en": {
        "headline": "Our recommendations",
        "text": "In the following we offer a hand-picked selection of constantly changing promotional products. Do not miss it! "

      }
    }
  },
  {
    "simpleName": "headline_text_po_1",
    "contentId": 3,
    "languages": {
      "de": {
        "headline": "Unsere Produkte - Ihr zukünftiges Zuhause",
          "text": "Unsere Produkte bieten eine vielfältige Auswahl an Klimazonen: Ob bei -265° Celsius oder innerhalb einer tropischen Kohlenstoffdioxidathmosphäre, es ist etwas für die ganze Familie dabei!"
      },
      "en": {
        "headline": "Our Properties - your future home",
        "text": "Our products offer a wide range of climate zones: Whether at -265° Celsius or within a tropical carbon dioxide atmosphere , there's something for the whole family!"
      }
    }
  },
  {
    "simpleName": "planet_info_product_1",
    "contentId": 4,
    "languages": {
      "de": {
        "headline": "Sichern Sie sich jetzt Ihren Platz auf",
        "priceSquareKm": "Preis / km²",
        "availableSizeSquareKm": "Verfügbarkeit",
        "amount": "Menge",
        "button": "Jetzt zum Warenkorb hinzufügen",
        "soldOut":"Ausverkauft"
      },
      "en": {
        "headline": "Get your space on",
        "priceSquareKm": "Price / km²",
        "availableSizeSquareKm": "Availability",
        "amount": "Amount",
        "button": "Add to cart now",
        "soldOut":"Out of stock"
      }
    }
  },
  {
    "simpleName": "headline_text_cart_1",
    "contentId": 5,
    "languages": {
      "de": {
        "headline": "Ihr Warenkorb",
        "text": "Sehr geehrter Kunde, hier befinden sich die Produkte, die Sie zum Warenkorb hinzugefügt haben. Sie können die gewählte Menge anpassen, Produkte löschen und nach der Anmeldung den Kauf abschließen."
      },
      "en": {
        "headline": "Welcome to your shopping cart",
        "text": "Dear User, here you can find the products that you added to the cart. You can change the selected amount, delete items or process your order in case you're logged in."
      }
    }
  },
  {
    "simpleName": "cart_item_list_cart_1",
    "contentId": 6,
    "languages": {
      "de": {
        "item": "Produkt",
        "price": "Preis",
        "amount": "Menge",
        "button": "Jetzt kaufen",
        "total_price": "Gesamtpreis"
      },
      "en": {
        "item": "product",
        "price": "price",
        "amount": "amount",
        "button": "buy now",
        "total_price": "total price"
      }
    }
  },
  {
    "simpleName": "headline_text_imprint_1",
    "contentId": 7,
    "languages": {
      "de": {
        "headline": "Impressum",
        "text": "Angaben gemäß § 5 TMG Kaiser Maximilian Astro Space Estate Inc. Nobelstraße 5 75690 Stuttgart Kontakt Telefon: +49 (0) 123 44 55 66 Telefax: +49 (0) 123 44 55 99 E-Mail: astro@hdm-stuttgart.de Umsatzsteuer-ID Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE 999 999 999 Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
      },
      "en": {
        "headline": "imprint",
        "text": "Information according to § 5 TMG Kaiser Maximilian Astro Space Estate Inc. Nobelstraße 5 75690 Stuttgart Contact Phone: +49 (0) 123 44 55 66 Fax: +49 (0) 123 44 55 99 E-Mail: astro@hdm-stuttgart.de Sales Tax ID Sales Tax Identification Number according to §27 a Sales Tax Act: DE 999 999 999 We are not prepared or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
      }
    }
  },
  {
    "simpleName": "background_image_cart_1",
    "contentId": 8,
    "images": {
      "background_image": "assets/images/shopping_cart_teaser.jpg"
    }
  },
  {
    "simpleName": "background_image_imprint_1",
    "contentId": 9,
    "images": {
      "background_image": "assets/images/imprint_teaser.jpg"
    }
  },
  {
    "simpleName": "login_data_login_1",
    "contentId": 10,
    "languages": {
      "de": {
        "headline": "Melden Sie sich hier mit ihrem bestehenden Account an",
        "username": "Ihre eMail-Adresse",
        "password": "Ihr Passwort",
        "buttonText": "Anmelden"
      },
      "en": {
        "headline": "Login to your account",
        "username": "Your username",
        "password": "Your password",
        "buttonText": "Login"
      }
    }
  },
  {
    "simpleName": "headline_text_orders_1",
    "contentId": 11,
    "languages": {
      "de": {
        "headline": "Ihre Bestellung",
        "text": "Die Lieferung ihres Planeten erfolgt in Kürze in klimaneutraler Verpackung per Hermes Götterbote."
      },
      "en": {
        "headline": "Your order",
        "text": "The delivery of your planet will soon take place in climate-neutral packaging via Hermes messenger of the gods."
      }
    }
  },
  {
    "simpleName": "background_image_orders_1",
    "contentId": 12,
    "images": {
      "background_image": "assets/images/orders_teaser.jpg"
    }
  },
  {
    "simpleName":"logout_data_login_1",
    "contentId":13,
    "languages": {
      "de": {
        "headline": "Melde Sie sich von Ihrem Account ab.",
        "text": "Schade Marmelade - ciao Kakao",
        "buttonText": "Abmelden"
      },
      "en": {
        "headline": "logout from your account",
        "text": "See you soon",
        "buttonText": "Logout"
      }
    }
  },
  {
    "simpleName": "headline_text_no_items_added_to_order_1",
    "contentId": 14,
    "languages": {
      "de": {
        "headline": "Sie haben noch keine Produkte zu Ihrem Warenkorb hinzugefügt.",
        "text": "Entdecken Sie unsere Produkte"
      },
      "en": {
        "headline": "You haven't add any products to your shopping cart, yet.",
        "text": "Check out our products"
      }
    }
  },
    {
    "simpleName": "global_static_strings_1",
    "contentId": 15,
    "languages": {
      "de": {
        "product_hover_find_out_more": "Mehr erfahren",
        "login_info": "Bitte geben Sie Ihren Benutzername und Ihr Passwort ein. Beide müssen mindestens vier Zeichen lang sein.",
        "login_welcome_1": "Willkommen",
        "login_welcome_2": "Sie sind nun eingeloggt.",
        "login_error_1": "Fehler: Der Benutzername",
        "login_error_2": "oder das Passwort war falsch. Bitte versuchen Sie es nochmal.",
        "error_default": "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es noch einmal oder wenden Sie sich an unseren Kundenservice.",
        "login_error_timeout": "Sie haben zu oft versucht sich mit ungültigen Daten anzumelden. Bitte versuchen Sie es in 30 Sekunden nochmal.",
        "shopping_cart_update_successful": "Warenkorb erfolgreich aktualisiert!",
        "shopping_cart_update_failed": "Aktualisieren des Warenkorbs fehlgeschlagen. Bitte versuchen Sie es noch einmal oder wenden Sie sich an unseren Kundenservice.",
        "submit_login_info": "Bitte melden Sie sich an um Ihre Bestellung abzuschicken",
        "shopping_cart_item_delete_info": "Wenn Sie ein Produkt aus Ihrem Warenkob entfernen möchten, nutzen Sie bitte den 'Produkt entfernen'-Button.",
        "shopping_cart_item_delete_button": "Produkt entfernen",
        "product_availability_error_1": "Leider ist die gewählte Menge nicht mehr verfügbar. Es sind nur noch",
        "product_availability_error_2": "km² vorrätig.",
        "product_min_amount_info": "Bitte fügen Sie mindestens 1km² hinzu.",
        "product_max_amount_info_1": "Es tut uns Leid, aber Sie haben mehr km² hinzugefügt als verfügbar sind. Derzeit können Sie maximal",
        "product_max_amount_info_2": "km² hinzufügen.",
        "product_added_sccuessful_1": "Sie haben erfolgreich",
        "product_added_sccuessful_2": "zu Ihrem Warenkorb hinzugefügt.",
        "logout_successful": "Sie wurden erfolgreich ausgeloggt."
      },
      "en": {
        "product_hover_find_out_more": "Find out more",
        "login_info": "Please enter a username and a password. Both need to be at least 4 characters.",
        "login_welcome_1": "Welcome",
        "login_welcome_2": "You're now logged into your account.",
        "login_error_1": "Error: Username",
        "login_error_2": "or password was incorrect. Please try again",
        "error_default": "Something went wrong on our side. Please retry or contact our customer service.",
        "login_error_timeout": "You tried to log in with incorrect credentials to often. Please try again in 30 seconds.",
        "shopping_cart_update_successful": "Shopping cart updated successfully!",
        "shopping_cart_update_failed": "Shopping cart update failed. Please retry or contact our customer service.",
        "submit_login_info": "Please login to submit your order.",
        "shopping_cart_item_delete_info": "In case you want to remove an item from your cart please use the 'remove from cart' button.",
        "shopping_cart_item_delete_button": "remove from cart",
        "product_availability_error_1": "We're sorry but it is not possible to order this amount. We've only got",
        "product_availability_error_2": "km² left.",
        "product_min_amount_info": "Please add at least 1 km².",
        "product_max_amount_info_1": "We're sorry but you've added more km² than available. The maximum you can add at the moment is",
        "product_max_amount_info_2": "km².",
        "product_added_sccuessful_1": "You successfully added",
        "product_added_sccuessful_2": "to your shopping cart.",
        "logout_successful": "'You were logged out successfully."
      }
    }
  },
  {
    "simpleName": "background_image_po_1",
    "contentId": 16,
    "images": {
      "background_image": "assets/images/products_overview_teaser.jpg"
    }
  },
  {
    "simpleName": "headline_text_no_items_bought_1",
    "contentId": 17,
    "languages": {
      "de": {
        "headline": "Sie haben noch keine Produkte gekauft, gönnen Sie sich doch mal was!",
        "text": "Entdecken Sie unsere Produkte"
      },
      "en": {
        "headline": "You haven't bought any products yet. Treat yourself to something!",
        "text": "Check out our products"
      }
    }
  },
  {
    "simpleName": "headline_text_404_1",
    "contentId": 18,
    "languages": {
      "de": {
        "headline": "Oha, Fehler 404",
        "text": "Die von Ihnen gesuchte Seite existiert wohl nicht. Aber wenn Sie schon mal hier sind, warum schauen Sie sich nicht ein wenig um? Es gibt ein ganzes Sonnensystem zu entdecken."
      },
      "en": {
        "headline": "Whoops, error 404",
        "text": "It seems like the page you are looking for does not exist. But while you're here, why not take a look around? There is a whole solar system to explore."
      }
    }
  },
  {
    "simpleName": "background_image_404_1",
    "contentId": 19,
    "images": {
      "background_image": "assets/images/pageNotFound_teaser.jpg"
    }
  }
]);


EOF
