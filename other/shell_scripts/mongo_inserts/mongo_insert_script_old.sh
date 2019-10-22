#! /usr/bin/env bash
#script for webshop environment installation on VM by Manuel Kehl, Oliver Maicher, 11.04.2019

# hashtag # is an illegal character in mongo shell: 2019-05-09T10:44:03.317+0200 E QUERY    [js] SyntaxError: illegal character @(shell):1:0
# there's this error message however it works anyway

mongo mongodb://localhost:27017/space-estate <<EOF

#------------ Datenbank löschen, falls bereits mit dem Namen vorhanden ------------
use space-estate;
db.dropDatabase();

#------------ Datenbank anlegen ------------
use space-estate;

#------------ User anlegen ------------
db.createUser(
  {
    user: "astro-user",
    pwd: "astro-pw",
    roles: [
       { role: "read", db: "space-estate" },
       { role: "readWrite", db: "space-estate" }
    ]
  }
);

#------------ Collections erstellen ------------
db.createCollection("planet");
db.createCollection("cart");
db.createCollection("currencies");
db.createCollection("users");
db.createCollection("orders");
db.createCollection("content");
db.createCollection("languages");

#------------ INSERT PLANETS ------------
db.planet.insertMany([
{
	en: {name: "Luna", description: "...to be defined..."},
	de: {name: "Mond", description: "...noch nicht definiert..."},
	total_size: 123456,
	price_km2: 123456,
	sold_size_km2: 0,
	image: "assets/images/luna01.png",
	available: true,
	planet_id: 0
},{
	en: {name: "Enceladus", description: "One of saturns biggest moons"},
	de: {name: "Enceladus", description: "Einer der größten Saturnmonde"},
	total_size: 74800000,
	price_km2: 543000,
	sold_size_km2: 0,
	image: "assets/images/enceladus01.png",
	available: true,
	planet_id: 7
},{
	en: {name: "Pluto", description: "...to be defined..."},
	de: {name: "Pluto", description: "...noch nicht definiert..."},
	total_size: 123456,
	price_km2: 123456,
	sold_size_km2: 0,
	image: "assets/images/pluto01.png",
	available: true,
	planet_id: 6
},{
	en: {name: "Neptune", description: "Beautiful blue planet"},
	de: {name: "Neptun", description: "Schöner blauer Planet"},
	total_size: 7618000000,
	price_km2: 990000,
	sold_size_km2: 0,
	image: "assets/images/neptun01.png",
	available: true,
	planet_id: 1
},{
	en: {name: "Saturn", description: "...to be defined..."},
	de: {name: "Saturn", description: "...noch nicht definiert..."},
	total_size: 123456,
	price_km2: 123456,
	sold_size_km2: 0,
	image: "assets/images/saturn01.png",
	available: true,
	planet_id: 2
},{
	en: {name: "Jupiter", description: "Biggest planet"},
	de: {name: "Jupiter", description: "Größter Planet"},
	total_size: 61420000000,
	price_km2: 430000,
	sold_size_km2: 0,
	image: "assets/images/jupiter01.png",
	available: true,
	planet_id: 3
},{
	en: {name: "Mars", description: "...to be defined..."},
	de: {name: "Mars", description: "...noch nicht definiert..."},
	total_size: 123456,
	price_km2: 123456,
	sold_size_km2: 0,
	image: "assets/images/mars01.png",
	available: true,
	planet_id: 4
},{
	en: {name: "Uranus", description: "...to be defined..."},
	de: {name: "Uranus", description: "...noch nicht definiert..."},
	total_size: 123456,
	price_km2: 123456,
	sold_size_km2: 0,
	image: "assets/images/uranus01.png",
	available: true,
	planet_id: 5
}]);

#------------ INSERT users ------------
db.users.insertMany([{email: "mk303@hdm-stuttgart.de", password: "mk303", userId: 0},
                    {email: "mk308@hdm-stuttgart.de", password: "mk308", userId: 1},
                    {email: "om018@hdm-stuttgart.de", password: "om018", userId: 2},
                    {email: "jm114@hdm-stuttgart.de", password: "jm114", userId: 3}
                    ]);

#------------ INSERT INTO CART ------------
db.cart.insertMany([{user: 0, addedTime: "14.04.2019 11:47:39",
                    planetId: 2, sizeSquareKm: 1, price : 1000000},
                    {user:  1, addedTime: "14.04.2019 12:23:19",
                    planetId: 0, sizeSquareKm: 1, price : 1000000},
                    {user:  3, addedTime: "13.04.2019 18:20:44",
                    planetId: 1, sizeSquareKm: 1, price : 1000000}
                  ]);

#------------ INSERT ORDERS ------------
db.orders.insertMany([{userId: 2, planetId: 2,
                      sizeSquareKm: 1, time: "08.04.2019 22:10:36", price: 1000000},
                      {userId: 3, planetId: 0,
                      sizeSquareKm: 1, time: "09.04.2019 10:02:45", price: 1000000},
                      {userId: 0, planetId: 1,
                      sizeSquareKm: 1, time: "10.04.2019 16:30:27", price: 1000000}
                      ]);

#------------ INSERT LANGUAGES ------------
db.languages.insertMany([{lang_code: "de", name: "deutsch" }, {lang_code: "en", name: "english"}]);

#------------ INSERT CURRENCIES ------------
db.currencies.insertMany([{code: "EUR", value: 1}, {code: "USD", value: 1.13}]);

#------------ INSERT PAGE CONTENT ------------
db.content.insertOne({
"home": {
	"en": {
		"teaser": {
			"headline": "dslkjfls"
		},
		"description": {
			"headline": "klsajdflk",
			"text": "slkjfdls",
			"button_text": "lsadkjf"
		},
		"slider": {
			"headline": "alsdf",
			"text": "lsakdjf"
		}
	},
	"de": {
		"teaser": {
			"headline": "dslkjfls"
		},
		"description": {
			"headline": "klsajdflk",
			"text": "slkjfdls",
			"button_text": "lsadkjf"
		},
		"slider": {
			"headline": "alsdf",
			"text": "lsakdjf"
		}
	},
	"images": {
		"teaser": "../../kasdjfld.png",
		"description": "../../dslakjfls.png"
	}
}
});

db.content.insertOne({
	"shopping_cart": {
		"en": {
			"h2-text": {
				"headline": "jfgrif",
				"text": "flner"
			},
			"order-overview": {
				"item": "ferfadwq",
				"amount": "fihref"
			},
			"price": "riberg",
			"total_price": "fdiuhv ergeq",
			"delet_button_text": "erwpfwf",
			"buy_button_text": "ewofiwwf"
	},
	"de": {
		"h2-text": {
			"headline": "jfgrif",
			"text": "flner"
		},
		"order-overview": {
			"item": "ferfadwq",
			"amount": "fihref"
		},
		"price": "riberg",
		"total_price": "fdiuhv ergeq",
		"delet_button_text": "erwpfwf",
		"buy_button_text": "ewofiwwf"
	},
	"images": {
		"teaser-bg-images": "../../kwfwrif.png"
	}
}
});

db.content.insertOne({
	"imprint": {
		"en": {
			"h1-text": {
				"headline": "Imprint",
				"text": "Imprint text english"
			}
		},
		"de": {
			"h1-text": {
				"headline": "Impressum",
				"text": "Impressum Text deutsch"
			}
		},
		"images": {
			"teaser-bg-images": "assets/images/imprint_teaser.png"
		}
	}
});
EOF
