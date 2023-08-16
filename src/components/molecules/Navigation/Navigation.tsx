import { GlobalChildren } from "components/templates/GlobalChildren.interface";

export interface navigationInterface extends GlobalChildren {
  link?: string;
}
const Navigation = (props: navigationInterface) => {
  let classes = ['flex', 'justify-end', 'gap-6', 'p-4', 'list-none', 'default'].join(' ');

  return (
    <nav className={classes} {...props}>
      {props.children}
    </nav>
  );
};

export { Navigation };
