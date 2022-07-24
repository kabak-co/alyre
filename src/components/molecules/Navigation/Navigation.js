const Navigation = ({ link, children, type }, props) => {
  return (
    <nav className={type}>
      <a href={link}>{children}</a>
    </nav>
  );
};

export { Navigation };
