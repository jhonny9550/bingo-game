import React, { useCallback, useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { IPlayer } from "../interfaces/player.interface";
import clsx from "clsx";
import Player from "../services/player.service";
import InputGroup from "./InputGroup";

const MAX_PLAYERS = 4;

export type PlayersFormProps = {
  handleSubmit: (players: IPlayer[]) => void;
};

const PlayersForm = (props: PlayersFormProps) => {
  const [players, setPlayers] = useState<IPlayer[]>([new Player("")]);
  const [ready, setReady] = useState(false);

  const handlePlayerNameChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      setPlayers((list) => {
        const copy = [...list];
        copy[index].name = e.target.value;
        return copy;
      });
    },
    []
  );

  const handleAddNewPlayer = useCallback(() => {
    setPlayers((list) => [...list, new Player("")]);
  }, []);

  const handleRemovePlayer = useCallback((index: number) => {
    setPlayers((list) => {
      const copy = [...list];
      copy.splice(index, 1);
      return copy;
    });
  }, []);

  useEffect(() => {
    setReady(players.every((player) => player.name !== ""));
  }, [players]);

  return (
    <form>
      {players.map((p, i) => (
        <div
          className={clsx(["flex items-center gap-2", { "mt-2": i !== 0 }])}
          key={p.id}
        >
          <InputGroup>
            <span>#{i + 1}</span>
            <Input
              placeholder="Player name"
              value={p.name}
              onChange={handlePlayerNameChange.bind(null, i)}
              className="w-full"
            />
          </InputGroup>
          {players.length > 1 && (
            <Button
              shape="circle"
              color="error"
              onClick={handleRemovePlayer.bind(null, i)}
              size="small"
              outline
              type="button"
            >
              <TrashIcon className="h-5 w-5" />
            </Button>
          )}
        </div>
      ))}
      {players.length < MAX_PLAYERS && (
        <Button
          type="button"
          className="mt-4"
          color="ghost"
          iconLeft={<PlusCircleIcon className="h-5 w-5" />}
          onClick={handleAddNewPlayer}
        >
          Add new player
        </Button>
      )}
      {ready && (
        <Button
          type="button"
          className="mt-4"
          color="primary"
          expand="block"
          onClick={props.handleSubmit?.bind(null, players)}
        >
          Start Game!
        </Button>
      )}
    </form>
  );
};

export default PlayersForm;
