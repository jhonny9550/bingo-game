import { useState } from "react";
import Button from "./Button";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Modal from "./Modal";
import Input from "./Input";
import { BoltIcon } from "@heroicons/react/24/outline";

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
        <div className="container">
          <Input
            value="My name"
            placeholder="Your full name"
            classes={{ root: "mt-4" }}
          />
          <Input
            value="My name"
            placeholder="Your full name"
            classes={{ root: "mt-4" }}
            disabled
          />
          <Input
            value="My name"
            placeholder="Your full name"
            classes={{ root: "mt-4" }}
            state="focus"
          />
          <Input
            value="My name"
            placeholder="Your full name"
            classes={{ root: "mt-4" }}
            state="success"
          />
          <Input
            value="My name"
            placeholder="Your full name"
            classes={{ root: "mt-4" }}
            state="error"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
