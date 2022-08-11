const Navigation = ({ children, type = 'default' }, props) => {
  let classes = ['flex', 'justify-end', 'gap-6', 'p-4', 'list-none', type].join(' ');

  return (
    <nav className={classes} {...props}>
      {children}
    </nav>
  );
};

export { Navigation };
