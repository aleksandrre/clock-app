import Lightimagedesktop from "../../assets/desktop/bg-image-daytime.jpg";
import Lightimagetablet from "../../assets/tablet/bg-image-daytime.jpg";
import Lightimagemobile from "../../assets/mobile/bg-image-daytime.jpg";
export const themeLight = {
    colors: {
        h1: "#303030",
        h2: "#000000",
        hidden: "rgba(255, 255, 255, 0.75)",
    },
    responsive: {
        tablet: {
            width: "48em",
            backgroundimg: Lightimagetablet,
        },
        desktop: {
            width: "90em",
            backgroundimg: Lightimagedesktop,
        },
        mobile: {
            width: "23.4375em",
            backgroundimg: Lightimagemobile,
        },
    },
    title: {
        hititle: "GOOD MORNING"
    }
};
