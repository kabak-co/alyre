import "./Button.css";

const Button = ({ clickHandle, children, type }, props) => {
  return (
    <button onClick={clickHandle} className={type}>
      {children}
    </button>
  );
};

export { Button };
