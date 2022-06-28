const Navigation = ({children, type}, props) => {
 return (<nav className={type}><a href="#">{children}</a></nav>);
};

export {Navigation};