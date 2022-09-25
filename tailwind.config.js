/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop": "url('../assets/home/background-home-desktop.jpg')",
        "home-tablet": "url('../assets/home/background-home-tablet.jpg')",
        "home-mobile": "url('../assets/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('../assets/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('../assets/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('../assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('../assets/crew/background-crew-desktop.jpg')",
        "crew-tablet": "url('../assets/crew/background-crew-tablet.jpg')",
        "crew-mobile": "url('../assets/crew/background-crew-mobile.jpg')",
        "tech-desktop":
          "url('../assets/technology/background-technology-desktop.jpg')",
        "tech-tablet":
          "url('../assets/technology/background-technology-tablet.jpg')",
        "tech-mobile":
          "url('../assets/technology/background-technology-mobile.jpg')",
        
      },
      fontFamily: {
        Barlow_C: "'Barlow Condensed', sans-serif",
        Bellafair: "Bellefair, serif",
        Barlow: "Barlow, sans-serif",
      },
    },
  },
  plugins: [],
};
