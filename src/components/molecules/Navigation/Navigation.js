const Navigation = ({ children, type = 'default'}, props) => {
  let classes = ['flex', 'justify-end', 'gap-4', 'p-4', type].join(' ');

  return (
    <nav className={classes} {...props}>
      {children}
    </nav>
  );
};

export { Navigation };
