const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Selectors
const nav = document.getElementsByTagName('a');
const navbar = Array.from(nav);
const H4 = document.getElementsByTagName('h4');
const h4Arr = Array.from(H4);
const paragraphs = document.getElementsByTagName('p');
const pArr = Array.from(paragraphs);

const navItem1 = navbar[0];
const navItem2 = navbar[1];
const navItem3 = navbar[2];
const navItem4 = navbar[3];
const navItem5 = navbar[4];
const navItem6 = navbar[5];

const ctaHeader = document.querySelector('h1');
const ctaButton = document.querySelector('button');
const ctaImage = document.querySelector('#cta-img');

const featuresH4 = h4Arr[0];
const featuresContent = pArr[0];
const aboutH4 = h4Arr[1];
const aboutContent = pArr[1];

const middleImg = document.getElementById('middle-img');

const servicesH4 = h4Arr[2];
const servicesContent = pArr[2];
const productH4 = h4Arr[3];
const productContent = pArr[3];
const visionH4 = h4Arr[4];
const visionContent = pArr[4];

const contactH4 = h4Arr[5];
const address = pArr[5];
const phone = pArr[6];
const email = pArr[7];

const copyright = pArr[8];

// Updated HTML


// CSS Styling