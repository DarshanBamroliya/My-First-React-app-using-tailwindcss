module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      libre: ['Libre Bodoni'],
      katibeh: ['Katibeh'],
      Inter: ['Inter'],
      Franklin: ['Libre Franklin'],
    },
    extend: {
      backgroundImage: theme => ({
        'logobg': "url('C:/Users/Darshan/Desktop/REACT/travel/public/img/travel-detil-bg.png')",
        'map': "url('C:/Users/Darshan/Desktop/REACT/travel/public/img/map.png')",
        'Travel': "url('C:/Users/Darshan/Desktop/REACT/travel/public/img/Travel.svg')"
      })
    },
  },
  plugins: [],
}
