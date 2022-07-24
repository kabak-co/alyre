const Link = ({ href, children }, props) => {
    return <a href={href} {...props}>{children}</a>;
  };
  
  export { Link };