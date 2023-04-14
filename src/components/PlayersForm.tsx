import React, { useCallback, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IPlayer } from "../interfaces/player.interface";
import clsx from "clsx";
import Player from "../services/player.service";

const MAX_PLAYERS = 4;

const PlayersForm = () => {
  const [playerNames, setPlayerNames] = useState<IPlayer[]>([new Player("")]);

  const handlePlayerNameChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      setPlayerNames((list) => {
        list[index].name = e.target.value;
        return list;
      });
    },
    []
  );

  const handleAddNewPlayer = useCallback(() => {
    setPlayerNames((list) => [...list, new Player("")]);
  }, []);

  const handleRemovePlayer = useCallback((index: number) => {
    setPlayerNames((list) => {
      const copy = [...list];
      copy.splice(index, 1);
      return copy;
    });
  }, []);

  return (
    <form>
      {playerNames.map((p, i) => (
        <div className="flex items-center" key={p.id}>
          <Input
            placeholder="Player name"
            value={p.name}
            onChange={handlePlayerNameChange.bind(null, i)}
            classes={{ root: clsx(["w-full", { "mt-2": i !== 0 }]) }}
          />
          {playerNames.length > 1 && (
            <TrashIcon
              className="h-5 w-5 bg-red-100 text-red-500 rounded-full cursor-pointer ml-2"
              onClick={handleRemovePlayer.bind(null, i)}
            />
          )}
        </div>
      ))}
      {playerNames.length < MAX_PLAYERS && (
        <Button
          type="button"
          className="mt-4"
          color="primary"
          fill="clear"
          iconLeft={<PlusCircleIcon className="h-5 w-5" />}
          onClick={handleAddNewPlayer}
        >
          Add new player
        </Button>
      )}
    </form>
  );
};

export default PlayersForm;
