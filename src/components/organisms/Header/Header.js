import logo from "../../../assets/alyre.png";

const Header = ({ children }, props) => {

  return (
    <header className="flex justify-between items-center" {...props}>
      <img src={logo} alt="Logo Alyre" style={{maxWidth: "150px", width: "60px"}} />
      {children}
    </header>
  );
};

export { Header };
