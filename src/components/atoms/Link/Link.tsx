import { GlobalChildren } from "components/templates/GlobalChildren.interface";

export interface linkInterface extends GlobalChildren {
  hrefLink: string;
};

const Link = (props: linkInterface) => {
  return <a href={props.hrefLink} {...props}>{props.children}</a>;
};
  
export { Link };