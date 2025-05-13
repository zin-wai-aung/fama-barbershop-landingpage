const Container = ({ children, className = "" }) => {
  return (
    <div className={`w-full px-10 lg:px-20 mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
