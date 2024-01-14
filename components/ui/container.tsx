interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return ( 
    <div className="md:mx-auto md:max-w-7xl w-screen">
      {children}
    </div>
   );
};

export default Container;
