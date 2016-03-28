const siteData = {
  name: 'The Department of Creative Caffeination',
  description: 'A Web Design and Development Shop',
  logo: require('./images/dept-of-cc-logo.png'),
  projects: [
    {
      name: 'RxArtisans',
      url: 'http://rxartisans.com',
    },
    { name: 'ProgStar', url: 'http://progstar.org' },
    { name: 'MCAD Sustainable Design Blog', url: 'http://mcadsustainabldesign.com' },
    { name: 'Knitting Counter', url: 'http://knittingcounter.com' },
  ],
  bios: [
    {
      name: 'James Johnson',
      title: 'Lead Developer',
      status: 'lineOfCode.forEach(drinkLatte)',
      statusClasses: 'code',
      img: require('./images/james-headshot-island.jpg'),
    },
    {
      name: 'Emily Ward',
      title: 'Lead Designer',
      status: 'Sipping Serifs and Espresso',
      img: require('./images/emily-headshot-2016.jpg'),
    },
  ],
  socialMedia: {
    twitter: 'creativecaff',
    email: 'hello@deptofcreativecaffeination.com',
  },
};



export default siteData;
