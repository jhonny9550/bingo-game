import Footer from "./Footer";
import NavBar from "./NavBar";
import Modal from "./Modal";
import DialogInput from "./DialogInput";
import { useToggle } from "../hooks/toggle.hook";
import { useCallback, useState } from "react";

const Layout = () => {
  const [modalOpen, toggleModalOpen] = useToggle(true);
  const [newPlayer, setNewPlayer] = useState("");

  const handleModalDismiss = useCallback((value?: any) => {
    if (value) {
      setNewPlayer(value);
    }
    toggleModalOpen();
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Modal open={modalOpen}>
          <DialogInput
            title="Add a new player"
            description="Simply input the name of the player to start playing Bingo!"
            handleCancel={handleModalDismiss}
            handleConfirm={handleModalDismiss}
          />
        </Modal>
        <p>New player is: {newPlayer}</p>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
