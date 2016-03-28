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
    { name: 'MCAD Sustainable Design Blog', url: 'http://mcadsustainabledesign.com' },
    { name: 'Knitting Counter', url: 'http://knittingcounter.com' },
  ],
  bios: [
    {
      name: 'James Johnson',
      title: 'Lead Developer',
      status: 'lineOfCode.forEach(drinkLatte)',
      statusClasses: 'code',
      img: require('./images/james-headshot-island.jpg'),
      url: 'http://james.mn',
    },
    {
      name: 'Emily Ward',
      title: 'Lead Designer',
      status: 'Sipping Serifs and Espresso',
      img: require('./images/emily-headshot-2016.jpg'),
      url: 'http://emilyward.net',
    },
  ],
  contactForm: {
    mailTo: 'hello@deptofcreativecaffeination.com',
    subject: '[CONTACT FORM]',
  },
  socialMedia: {
    twitter: 'creativecaff',
    email: 'hello@deptofcreativecaffeination.com',
  },
};



export default siteData;
