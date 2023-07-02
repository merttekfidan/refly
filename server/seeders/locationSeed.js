const mongoose = require("mongoose");
const Location = require("./../models/locationModel");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const DB = process.env.DB_URI;

// Function to seed the data
const seedData = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Clear existing data
    await Location.deleteMany({});

    // Seed new data
    for (const location of locationsData) {
      const { city, voivodeship, countryCode } = location;
      await Location.create({
        city,
        voivodeship,
        countryCode,
      });
    }

    console.log("Data seeded successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding data:", error);
  }
};

seedData();

// Seed data
const locationsData = [
  {
    city: "Warsaw",
    voivodeship: "Mazowieckie",
    countryCode: "PL",
  },
  {
    city: "Wrocław",
    voivodeship: "Dolnośląskie",
    countryCode: "PL",
  },
  {
    city: "Bydgoszcz",
    voivodeship: "Kujawsko-Pomorskie",
    countryCode: "PL",
  },
  {
    city: "Toruń",
    voivodeship: "Kujawsko-Pomorskie",
    countryCode: "PL",
  },
  {
    city: "Włocławek",
    voivodeship: "Kujawsko-Pomorskie",
    countryCode: "PL",
  },
  {
    city: "Lublin",
    voivodeship: "Lubelskie",
    countryCode: "PL",
  },
  {
    city: "Chełm",
    voivodeship: "Lubelskie",
    countryCode: "PL",
  },
  {
    city: "Zamość",
    voivodeship: "Lubelskie",
    countryCode: "PL",
  },
  {
    city: "Gorzów Wielkopolski",
    voivodeship: "Lubuskie",
    countryCode: "PL",
  },
  {
    city: "Zielona Góra",
    voivodeship: "Lubuskie",
    countryCode: "PL",
  },
  {
    city: "Nowa Sól",
    voivodeship: "Lubuskie",
    countryCode: "PL",
  },
  {
    city: "Łódź",
    voivodeship: "Łódzkie",
    countryCode: "PL",
  },
  {
    city: "Piotrków Trybunalski",
    voivodeship: "Łódzkie",
    countryCode: "PL",
  },
  {
    city: "Skierniewice",
    voivodeship: "Łódzkie",
    countryCode: "PL",
  },
  {
    city: "Kraków",
    voivodeship: "Małopolskie",
    countryCode: "PL",
  },
  {
    city: "Tarnów",
    voivodeship: "Małopolskie",
    countryCode: "PL",
  },
  {
    city: "Nowy Sącz",
    voivodeship: "Małopolskie",
    countryCode: "PL",
  },
  {
    city: "Warszawa",
    voivodeship: "Mazowieckie",
    countryCode: "PL",
  },
  {
    city: "Radom",
    voivodeship: "Mazowieckie",
    countryCode: "PL",
  },
  {
    city: "Płock",
    voivodeship: "Mazowieckie",
    countryCode: "PL",
  },
  {
    city: "Opole",
    voivodeship: "Opolskie",
    countryCode: "PL",
  },
  {
    city: "Kędzierzyn-Koźle",
    voivodeship: "Opolskie",
    countryCode: "PL",
  },
  {
    city: "Nysa",
    voivodeship: "Opolskie",
    countryCode: "PL",
  },
  {
    city: "Rzeszów",
    voivodeship: "Podkarpackie",
    countryCode: "PL",
  },
  {
    city: "Przemyśl",
    voivodeship: "Podkarpackie",
    countryCode: "PL",
  },
  {
    city: "Mielec",
    voivodeship: "Podkarpackie",
    countryCode: "PL",
  },
  {
    city: "Białystok",
    voivodeship: "Podlaskie",
    countryCode: "PL",
  },
  {
    city: "Suwałki",
    voivodeship: "Podlaskie",
    countryCode: "PL",
  },
  {
    city: "Łomża",
    voivodeship: "Podlaskie",
    countryCode: "PL",
  },
  {
    city: "Gdańsk",
    voivodeship: "Pomorskie",
    countryCode: "PL",
  },
  {
    city: "Gdynia",
    voivodeship: "Pomorskie",
    countryCode: "PL",
  },
  {
    city: "Sopot",
    voivodeship: "Pomorskie",
    countryCode: "PL",
  },
  {
    city: "Katowice",
    voivodeship: "Śląskie",
    countryCode: "PL",
  },
  {
    city: "Gliwice",
    voivodeship: "Śląskie",
    countryCode: "PL",
  },
  {
    city: "Zabrze",
    voivodeship: "Śląskie",
    countryCode: "PL",
  },
  {
    city: "Kielce",
    voivodeship: "Świętokrzyskie",
    countryCode: "PL",
  },
  {
    city: "Ostrowiec Świętokrzyski",
    voivodeship: "Świętokrzyskie",
    countryCode: "PL",
  },
  {
    city: "Starachowice",
    voivodeship: "Świętokrzyskie",
    countryCode: "PL",
  },
  {
    city: "Olsztyn",
    voivodeship: "Warmińsko-Mazurskie",
    countryCode: "PL",
  },
  {
    city: "Elbląg",
    voivodeship: "Warmińsko-Mazurskie",
    countryCode: "PL",
  },
  {
    city: "Ełk",
    voivodeship: "Warmińsko-Mazurskie",
    countryCode: "PL",
  },
  {
    city: "Poznań",
    voivodeship: "Wielkopolskie",
    countryCode: "PL",
  },
  {
    city: "Kalisz",
    voivodeship: "Wielkopolskie",
    countryCode: "PL",
  },
  {
    city: "Konin",
    voivodeship: "Wielkopolskie",
    countryCode: "PL",
  },
  {
    city: "Szczecin",
    voivodeship: "Zachodniopomorskie",
    countryCode: "PL",
  },
  {
    city: "Koszalin",
    voivodeship: "Zachodniopomorskie",
    countryCode: "PL",
  },
  {
    city: "Stargard",
    voivodeship: "Zachodniopomorskie",
    countryCode: "PL",
  },
];

module.exports = locationsData;
