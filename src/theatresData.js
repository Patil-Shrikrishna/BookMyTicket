import { moviesData } from "./moviesData";

const movies = moviesData.map((item) => item.name);
export const theatres = [
  {
    name: "Abhiruchi City Pride: Sinhagad Road",
    address:
      "Near Flyover, Sinhagad Road, Vadgaon Budruk, Pune, Maharashtra 411041, India",
    city: "Pune",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Cinepolis: Nexus WESTEND Mall Aundh, Pune",
    address:
      "5, Gurukul Park Road, Ward No. 8, Wireless Colony, Aundh, Pune, Maharashtra 411007, India",
    city: "Pune",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "E-SQUARE ELITE: Xion Mall, Hinjawadi, Pune",
    address:
      "1st Floor, XION Mall, Hinjawadi Road, Wakad, Pune, Maharashtra 411012, India",
    city: "Pune",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "INOX: Jai Ganesh, Akurdi",
    address:
      "Jai Ganesh Vision Mall, Akurdi Chowk, Ganga Nagar, Behind Greaves Cotton Company, Pune, Maharashtra 411035, India",
    city: "Pune",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Vishal Cinemaas: Pimpri",
    address:
      "Old Pune-Mumbai Highway, Pimpri-Chinchwad, Behind Bank of India, Pune, Pimpri, Maharashtra 411018, India",
    city: "Pune",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Cinepolis: Binnypet Mall",
    address:
      "ETA Namma Mall, Binneypet, Magadi Road, Bengaluru, Karnataka 560023, India",
    city: "Bengaluru",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "INOX Lido: Off MG Road, Ulsoor",
    address:
      "2nd Floor - Lido Mall, Swamy Vivekananda Road, Halasuru, Next to Hyatt Hotel, Bengaluru, Karnataka 560008, India",
    city: "Bengaluru",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "PVR: Bhartiya Mall of Bengaluru",
    address:
      "PVR Bhartiya Mall of Bengaluru, 2nd Floor, Thanisandra Main Road, Kannuru, Bengaluru, Karnataka 560064, India",
    city: "Bengaluru",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "PVR: Vega City, Bannerghatta Road",
    address:
      "PVR Cinemas, 4th and 5th Floor, Vega City Mall,172/1, Bannerghatta Main Road, JP Nagar 3rd Phase, Dollar Layout, Bengaluru, Karnataka 560076, India",
    city: "Bengaluru",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Cinepolis: Nexus Shantiniketan, Bengaluru",
    address:
      "3rd Floor, Nexus Shantiniketan Mall, Opposite Manipal Hospital, ITPL Main Road, Whitefield, Bengaluru, Karnataka 560067, India",
    city: "Bengaluru",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "MovieMax: Sion",
    address:
      "MovieMax, Sion Circle, Sion (East), Opposite Peninsula Restaurant, Mumbai, Maharashtra 400022, India",
    city: "Mumbai",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Metro INOX Cinemas: Marine Lines",
    address: "M.G.Road, Dhobitalao Junction, Mumbai, Maharashtra 400020, India",
    city: "Mumbai",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Movietime: The Hub, Goregaon",
    address:
      "3rd Floor, The Hub Mall, Nirlon Compound, Western Express Highway, Goregaon(E), Near Goregaon East Police Station, Mumbai, Maharashtra 400063, India",
    city: "Mumbai",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Cinepolis: Fun Republic Mall, Andheri (W)",
    address:
      "Plot No.844/4,Level 4, Shah Industrial Estate, Veera Desai Road, Andheri(West), Near ICICI Bank ATM, Mumbai, Maharashtra 400053, India",
    city: "Mumbai",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "Maxus Cinemas: Bhayander",
    address:
      "Maxus Mall, 3rd Floor, 150 Feet Road, Near Railway Flyover, Opposite Salasar Bridge Bhoomi, Mumbai, Maharashtra 401101, India",
    city: "Mumbai",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "KT Vision Cinema: Vasai (Screens)",
    address:
      "Navghar Road, Anand Nagar, Opposite.West Panchal Nagar Walkway, Vasai West, Mumbai, Maharashtra 401202, India",
    city: "Mumbai",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  {
    name: "G7 Multiplex: Bandra (W)",
    address:
      "Swami Vivekanand Marg, Tata Blocks, 30th Cross Road, Near Tata Blocks, Bandra West, Mumbai, Maharashtra 400050, India",
    city: "Mumbai",
    facilities: {
      foodBeverage: true,
      wheelchair: true,
      parking: true,
    },
    currentMovies: new Set([
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
      movies[Math.floor(Math.random() * 15)],
    ]),
  },
  //   {
  //     name: "",
  //     address: "",
  //     city:"",
  //     facilities: {
  //       foodBeverage: true,
  //       wheelchair: true,
  //       parking: true,
  //     },
  //     currentMovies: new Set(
  //       movies[index],
  //       movies[index],
  //       movies[index],
  //       movies[index]
  //     ),
  //   },
];
