/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      backgroundImage:{
        'header-desktop':"url('./images/bg-header-desktop.png')",
        'header-mobile':"url('./images/bg-header-mobile.png')",
      },
      colors:{
      StrongCyan: 'hsl(171, 66%, 44%)',
      LightBlue: 'hsl(233, 100%, 69%)',
      DarkGrayishBlue: 'hsl(210, 10%, 33%)',
      GrayishBlue: 'hsl(201, 11%, 66%)'
      },
      fontFamily:{
        bai:'Bai Jamjuree, sans-serif;'
      }
    },
  },
  plugins: [],
}
