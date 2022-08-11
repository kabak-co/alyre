
const Header = ({ children }, props) => {

  return (
    <header className="flex justify-between items-center" {...props}>
      <h1>Alyre</h1>
      {children}
    </header>
  );
};

export { Header };
