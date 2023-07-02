const mongoose = require("mongoose");
const { Voivodeship, City } = require("./../models/locationModel");
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
    await City.deleteMany();

    // Seed voivodeships
    const voivodeships = await Voivodeship.create(voivodeshipsData);

    // Map voivodeship names to their corresponding _id values
    const voivodeshipMap = {};
    voivodeships.forEach((voivodeship) => {
      voivodeshipMap[voivodeship.name] = voivodeship._id;
    });

    // Add voivodeship _id to citiesData
    const citiesWithVoivodeshipId = citiesData.map((city) => ({
      ...city,
      voivodeship: voivodeshipMap[city.voivodeship],
    }));

    // Seed cities
    await City.create(citiesWithVoivodeshipId);

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
  { name: "Mazowieckie", countryCode: "PL" },
  { name: "Dolnośląskie", countryCode: "PL" },
  { name: "Kujawsko-Pomorskie", countryCode: "PL" },
  { name: "Lubelskie", countryCode: "PL" },
  { name: "Lubuskie", countryCode: "PL" },
  { name: "Łódzkie", countryCode: "PL" },
  { name: "Małopolskie", countryCode: "PL" },
  { name: "Opolskie", countryCode: "PL" },
  { name: "Podkarpackie", countryCode: "PL" },
  { name: "Podlaskie", countryCode: "PL" },
  { name: "Pomorskie", countryCode: "PL" },
  { name: "Śląskie", countryCode: "PL" },
  { name: "Świętokrzyskie", countryCode: "PL" },
  { name: "Warmińsko-Mazurskie", countryCode: "PL" },
  { name: "Wielkopolskie", countryCode: "PL" },
  { name: "Zachodniopomorskie", countryCode: "PL" },
];

const citiesData = [
  { name: "Warsaw", voivodeship: "Mazowieckie" },
  { name: "Wrocław", voivodeship: "Dolnośląskie" },
  { name: "Bydgoszcz", voivodeship: "Kujawsko-Pomorskie" },
  { name: "Toruń", voivodeship: "Kujawsko-Pomorskie" },
  { name: "Włocławek", voivodeship: "Kujawsko-Pomorskie" },
  { name: "Lublin", voivodeship: "Lubelskie" },
  { name: "Chełm", voivodeship: "Lubelskie" },
  { name: "Zamość", voivodeship: "Lubelskie" },
  { name: "Gorzów Wielkopolski", voivodeship: "Lubuskie" },
  { name: "Zielona Góra", voivodeship: "Lubuskie" },
  { name: "Nowa Sól", voivodeship: "Lubuskie" },
  { name: "Łódź", voivodeship: "Łódzkie" },
  { name: "Piotrków Trybunalski", voivodeship: "Łódzkie" },
  { name: "Skierniewice", voivodeship: "Łódzkie" },
  { name: "Kraków", voivodeship: "Małopolskie" },
  { name: "Tarnów", voivodeship: "Małopolskie" },
  { name: "Nowy Sącz", voivodeship: "Małopolskie" },
  { name: "Radom", voivodeship: "Mazowieckie" },
  { name: "Płock", voivodeship: "Mazowieckie" },
  { name: "Opole", voivodeship: "Opolskie" },
  { name: "Kędzierzyn-Koźle", voivodeship: "Opolskie" },
  { name: "Nysa", voivodeship: "Opolskie" },
  { name: "Rzeszów", voivodeship: "Podkarpackie" },
  { name: "Przemyśl", voivodeship: "Podkarpackie" },
  { name: "Mielec", voivodeship: "Podkarpackie" },
  { name: "Białystok", voivodeship: "Podlaskie" },
  { name: "Suwałki", voivodeship: "Podlaskie" },
  { name: "Łomża", voivodeship: "Podlaskie" },
  { name: "Gdańsk", voivodeship: "Pomorskie" },
  { name: "Gdynia", voivodeship: "Pomorskie" },
  { name: "Sopot", voivodeship: "Pomorskie" },
  { name: "Katowice", voivodeship: "Śląskie" },
  { name: "Gliwice", voivodeship: "Śląskie" },
  { name: "Zabrze", voivodeship: "Śląskie" },
  { name: "Kielce", voivodeship: "Świętokrzyskie" },
  { name: "Ostrowiec Świętokrzyski", voivodeship: "Świętokrzyskie" },
  { name: "Starachowice", voivodeship: "Świętokrzyskie" },
  { name: "Olsztyn", voivodeship: "Warmińsko-Mazurskie" },
  { name: "Elbląg", voivodeship: "Warmińsko-Mazurskie" },
  { name: "Ełk", voivodeship: "Warmińsko-Mazurskie" },
  { name: "Poznań", voivodeship: "Wielkopolskie" },
  { name: "Kalisz", voivodeship: "Wielkopolskie" },
  { name: "Konin", voivodeship: "Wielkopolskie" },
  { name: "Szczecin", voivodeship: "Zachodniopomorskie" },
  { name: "Koszalin", voivodeship: "Zachodniopomorskie" },
  { name: "Stargard", voivodeship: "Zachodniopomorskie" },
];
