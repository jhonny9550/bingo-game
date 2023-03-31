import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <h1>Bingo Game</h1>
        <h2>Title 2</h2>
        <h3>Title 3</h3>
        <p className="font-large">Paragraph large</p>
        <p>Paragraph</p>
        <p className="font-small">Paragraph small</p>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
