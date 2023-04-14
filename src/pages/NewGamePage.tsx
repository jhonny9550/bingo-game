import Button from "../components/Button";
import { useToggle } from "../hooks/toggle.hook";
import PlayersForm from "../components/PlayersForm";

const NewGamePage = () => {
  const [showNewGameBtn, toggleShowNewGameBtn] = useToggle(true);

  return (
    <div className="flex items-center justify-center h-full">
      {showNewGameBtn ? (
        <Button color="primary" onClick={toggleShowNewGameBtn}>
          Start a New Game!
        </Button>
      ) : (
        <PlayersForm />
      )}
    </div>
  );
};

export default NewGamePage;
