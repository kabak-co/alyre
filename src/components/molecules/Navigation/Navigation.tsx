import { GlobalChildren } from "components/templates/GlobalChildren.interface";

export interface navigationInterface extends  GlobalChildren {
  type: string;
  link?: string;
}
const Navigation = ({ type = 'default' }, props:navigationInterface) => {
  let classes = ['flex', 'justify-end', 'gap-6', 'p-4', 'list-none', type].join(' ');

  return (
    <nav className={classes} {...props}>
      {props.children}
    </nav>
  );
};

export { Navigation };
