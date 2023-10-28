/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: "#5c6ac4",
        btnColor: "rgb(249 115 22)",
      },
      spacing: {
        kMargin: "20px",
        kMargin_2: "10px",
      },
    },
    // corePlugins: {
    //   preflight: false,
    // }
  },
};
