import { useState } from "react";
import Button from "./Button";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Modal from "./Modal";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

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
          <Button
            onClick={() => setModalOpen((v) => !v)}
            iconLeft={<ArrowRightIcon className="h-5 w-5" />}
          >
            Continue
          </Button>
          <Button
            className="mt-4"
            color="warning"
            onClick={() => setModalOpen((v) => !v)}
            iconLeft={<ArrowRightIcon className="h-5 w-5" />}
          >
            Continue
          </Button>
          <Button
            className="mt-4"
            color="danger"
            onClick={() => setModalOpen((v) => !v)}
            iconLeft={<ArrowRightIcon className="h-5 w-5" />}
          >
            Continue
          </Button>
          <Button
            className="mt-4"
            color="success"
            onClick={() => setModalOpen((v) => !v)}
            iconLeft={<ArrowRightIcon className="h-5 w-5" />}
          >
            Continue
          </Button>
          <Button
            className="mt-4"
            color="white"
            onClick={() => setModalOpen((v) => !v)}
            iconLeft={<ArrowRightIcon className="h-5 w-5" />}
          >
            Continue
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
