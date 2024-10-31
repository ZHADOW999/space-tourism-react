/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "home":"url('/src/pages/starter-code/assets/home/background-home-desktop.jpg')",
        'destination':"url('/src/pages/starter-code/assets/destination/background-destination-desktop.jpg')",
        'crew':"url('/src/pages/starter-code/assets/crew/background-crew-desktop.jpg')",
        'technology':"url('/src/pages/starter-code/assets/technology/background-technology-desktop.jpg')"
      },
       fontFamily:{
        'bellfair-light':'bellfair-light',
        'barlow-conLight':'barlow-conLight',
        'barlow-reg':'barlow-reg'
       },

       screens:{
        'sm': '480px',
        'md': '768px',
        'lg': '976px',
        'xl': '1024px',
        '2xl':'1250px',
        '3xl':'1440px',
      },

      fontSize:{
        'smaller':'0.7rem',
        1: '0.8rem',
        1.5:'0.9rem',
        2: '1rem',
        3: '1.125rem',
        4: '1.5rem',
        5: '2rem',
        6: '2.5rem',
        7:  '3rem',
        8: '3.5rem',
  
      },

      backgroundColor:{
        'navBackground':'rgba(255, 255, 255, 0.03)'
      },

      animation:{
        'hover':'hover 2s ease-in-out infinite',
      },

        
      
      keyframes:{
        'hover':{
          '0%,100':{
            transform:'translateY(0)'
          },
          '50%':{
            transform:'translateY(-20px)'
          },
        },
      },
    },
  },
  plugins: [],
}