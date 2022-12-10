import indexMob from './assets/home/background-home-mobile.jpg';
import indexTab from './assets/home/background-home-tablet.jpg';
import indexDesk from './assets/home/background-home-desktop.jpg';
import destMob from './assets/destination/background-destination-mobile.jpg';
import destTab from './assets/destination/background-destination-tablet.jpg';
import destDesk from './assets/destination/background-destination-desktop.jpg';
import crewMob from './assets/crew/background-crew-mobile.jpg';
import crewTab from './assets/crew/background-crew-tablet.jpg';
import crewDesk from './assets/crew/background-crew-desktop.jpg';
import techMob from './assets/technology/background-technology-mobile.jpg';
import techTab from './assets/technology/background-technology-tablet.jpg';
import techDesk from './assets/technology/background-technology-desktop.jpg';

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
  '/crew': {
    xs: crewMob,
    md: crewTab,
    lg: crewDesk,
  },
  '/technology': {
    xs: techMob,
    md: techTab,
    lg: techDesk,
  },
};
