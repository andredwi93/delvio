import IsMobile from "./IsMobile";

export default function GlobalProvider({ children }) {
  return <IsMobile>{children}</IsMobile>;
}
