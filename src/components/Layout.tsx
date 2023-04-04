import { useState } from "react";
import Button from "./Button";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Modal from "./Modal";

const Layout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <NavBar />
      <main>
        <Modal open={modalOpen} onClose={setModalOpen.bind(null, false)}>
          <div className="px-6 py-8">
            <h3>Create new player</h3>
            <input type="text" placeholder="Name" />
            <Button>Save</Button>
          </div>
        </Modal>
        <div className="container py-8">
          <Button onClick={() => setModalOpen((v) => !v)}>Continue</Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
