import Darkimagedesktop from "../../assets/desktop/bg-image-nighttime.jpg";
import Darkimagetablet from "../../assets/tablet/bg-image-nighttime.jpg";
import Darkimagemobile from "../../assets/mobile/bg-image-nighttime.jpg";
export const themeDark = {
  colors: {
    h1: "#FFFFFF",
    h2: "#FFFFFF",
    hidden: "rgba(0, 0, 0, 0.75)",
  },
  responsive: {
    tablet: {
      width: "48em",
      backgroundimg: Darkimagetablet,
    },
    desktop: {
      width: "90em",
      backgroundimg: Darkimagedesktop,
    },
    mobile: {
      width: "23.4375em",
      backgroundimg: Darkimagemobile,
    },
  },
  title: {
    hititle: "GOOD EVENING"
  }
};
