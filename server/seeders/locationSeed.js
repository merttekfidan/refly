const mongoose = require("mongoose");
const { Voivodeship } = require("./../models/locationModel");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const DB = process.env.DB_URI;

const seedDatabase = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Clear existing data
    await Voivodeship.deleteMany();
    // Seed voivodeships
    await Voivodeship.create(voivodeshipsData);
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

seedDatabase();

// Data for voivodeships and cities
const voivodeshipsData = [
  {
    name: "Dolnośląskie",
    countryCode: "PL",
    cities: ["Wrocław", "Legnica", "Wałbrzych"],
  },
  {
    name: "Kujawsko-Pomorskie",
    countryCode: "PL",
    cities: ["Bydgoszcz", "Toruń", "Włocławek"],
  },
  {
    name: "Lubelskie",
    countryCode: "PL",
    cities: ["Lublin", "Chełm", "Zamość"],
  },
  {
    name: "Lubuskie",
    countryCode: "PL",
    cities: ["Gorzów Wielkopolski", "Zielona Góra", "Nowa Sól"],
  },
  {
    name: "Łódzkie",
    countryCode: "PL",
    cities: ["Łódź", "Piotrków Trybunalski", "Skierniewice"],
  },
  {
    name: "Małopolskie",
    countryCode: "PL",
    cities: ["Kraków", "Tarnów", "Nowy Sącz"],
  },
  {
    name: "Mazowieckie",
    countryCode: "PL",
    cities: ["Warsaw", "Radom", "Płock"],
  },
  {
    name: "Opolskie",
    countryCode: "PL",
    cities: ["Opole", "Kędzierzyn-Koźle", "Nysa"],
  },
  {
    name: "Podkarpackie",
    countryCode: "PL",
    cities: ["Rzeszów", "Przemyśl", "Mielec"],
  },
  {
    name: "Podlaskie",
    countryCode: "PL",
    cities: ["Białystok", "Suwałki", "Łomża"],
  },
  {
    name: "Pomorskie",
    countryCode: "PL",
    cities: ["Gdańsk", "Gdynia", "Sopot"],
  },
  {
    name: "Śląskie",
    countryCode: "PL",
    cities: ["Katowice", "Gliwice", "Zabrze"],
  },
  {
    name: "Świętokrzyskie",
    countryCode: "PL",
    cities: ["Kielce", "Ostrowiec Świętokrzyski", "Starachowice"],
  },
  {
    name: "Warmińsko-Mazurskie",
    countryCode: "PL",
    cities: ["Olsztyn", "Elbląg", "Ełk"],
  },
  {
    name: "Wielkopolskie",
    countryCode: "PL",
    cities: ["Poznań", "Kalisz", "Konin"],
  },
  {
    name: "Zachodniopomorskie",
    countryCode: "PL",
    cities: ["Szczecin", "Koszalin", "Stargard"],
  },
];
