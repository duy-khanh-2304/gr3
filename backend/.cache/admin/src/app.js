import favicon from './extensions/cropped-logo2-270x270.png'
import logo from './extensions/Logo_Hust.png'
const config = {
  locales: [
    'vi',
  ],
  head: {
    favicon: favicon
  },
  auth: {
    logo: logo
  },
  menu: {
    logo: logo
  },
  notifications: {
    releases: false
  },
  tutorials: false,
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Admin Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "BK.AI Center",
      "Auth.form.welcome.title": "Welcome to Dashboard",
      "Auth.form.welcome.subtitle": "Log in to your Admin account"
    }
  }
}

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
