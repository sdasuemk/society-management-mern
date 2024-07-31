const SocietyLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <main>
        <div>{children}</div>
      </main>
    );
  };
  
  export default SocietyLayout;
  