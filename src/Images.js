import indexMob from './assets/home/background-home-mobile.jpg';
import indexTab from './assets/home/background-home-tablet.jpg';
import indexDesk from './assets/home/background-home-desktop.jpg';
import destMob from './assets/destination/background-destination-mobile.jpg'
import destTab from './assets/destination/background-destination-tablet.jpg';
import destDesk from './assets/destination/background-destination-desktop.jpg';

export const images = {
  '/': {
    xs: indexMob,
    md: indexTab,
    lg: indexDesk,
  },
  '/destination': {
    xs: destMob,
    md: destTab,
    lg: destDesk,
  },
};
