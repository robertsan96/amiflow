import NavBar from "../navigation/navbar";

type NavLayoutProps = {
  children: React.ReactNode;
};

export default function NavLayout({ children }: NavLayoutProps) {
  return (
    <>
      <NavBar />
      {/* {children}
      <p>footer</p> */}
    </>
  );
}
