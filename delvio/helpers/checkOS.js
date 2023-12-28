import { isAndroid, isIOS, isMacOs, isMobile } from "react-device-detect";

export const getMobileOS = () => {
  if (isMobile || isAndroid || isIOS) {
    return window.location.replace("https://riliv.page.link/rilivapp");
  } else if (isMacOs) {
    return window.open(
      "https://apps.apple.com/id/app/riliv/id1510486066",
      "_blank"
    );
  } else {
    return window.open(
      "https://play.google.com/store/apps/details?id=nozero.apps1"
    );
  }
};

export const openApp = ({ packageType }) => {
  if (packageType === "meditasi") {
    return window.location.replace("https://riliv.page.link/allmeditasi");
  } else {
    return window.location.replace("https://riliv.page.link/konseling");
  }
};
