import { GlobalChildren } from "components/templates/GlobalChildren.interface";
import "./Button.module.css";
import { MouseEventHandler } from "react";

export interface buttonInterface extends GlobalChildren {
  clickHandle: MouseEventHandler;
  type:string;
};

const Button = ({ clickHandle, children, type }: buttonInterface) => {
  return (
    <button onClick={clickHandle} className={type}>
      {children}
    </button>
  );
};

export { Button };
