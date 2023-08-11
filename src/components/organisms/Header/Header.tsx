import { JsxElement } from "typescript";
import logo from "../../../assets/alyre.png";
import { ReactNode } from "react";
import { GlobalChildren } from "components/templates/GlobalChildren.interface";

export interface headerTypes extends GlobalChildren {};
const Header = (props: headerTypes) => {

  return (
    <header className="flex justify-between items-center" {...props}>
      <img src={logo} alt="Logo Alyre" style={{maxWidth: "150px", width: "60px"}} />
      {props.children}
    </header>
  );
};

export { Header };
