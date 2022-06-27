import './Button.css';

const Button = ({children, type}, props) => {
 return (<button className={type}>{children}</button>);
};

export {Button};