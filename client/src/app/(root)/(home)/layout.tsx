import Header from "@/components/header/Header";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main>
      <section className="">
        <Header />
      </section>
      <div>{children}</div>
    </main>
  );
};

export default HomeLayout;
