import clsx from "clsx";
import { PropsWithChildren } from "react";
import { ITable } from "../interfaces/table.interface";
import { FaceSmileIcon, XMarkIcon } from "@heroicons/react/24/outline";

type WithClassName = { className?: string };

const TableCell = ({
  children,
  className,
}: PropsWithChildren<WithClassName>) => (
  <div
    className={clsx([
      "border border-slate-100 font-extrabold leading-10 text-4xl px-6 py-4 text-center",
      className,
    ])}
  >
    {children}
  </div>
);

const TableCol = ({
  children,
  className,
}: PropsWithChildren<WithClassName>) => (
  <div className={clsx(["w-full grid auto-col-fr grid-flow-row", className])}>
    {children}
  </div>
);

type PlayerTableProps = {
  name: string;
  table: ITable;
  crossedNumbers: number[];
  currentNumber?: number;
};

const BINGO_SPELL_CHARS = "BINGO";

const bingoColors = [
  "text-primary",
  "text-accent",
  "text-info",
  "text-success",
  "text-error",
];

const PlayerTable = (props: PlayerTableProps) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <div className="grid grid-flow-col auto-cols-fr shadow rounded-2xl overflow-hidden">
        {props.table.values.map((cols, i) => (
          <TableCol key={`${props.name}-${props.table.id}-col-${i}`}>
            <TableCell className={bingoColors[i]}>
              {BINGO_SPELL_CHARS[i]}
            </TableCell>
            {cols.map((n) => {
              if (n === 0) {
                return (
                  <TableCell key={`${props.name}-${props.table.id}-cell-${n}`}>
                    <FaceSmileIcon className="h-10 w-10 mx-auto" />
                  </TableCell>
                );
              } else {
                return (
                  <TableCell key={`${props.name}-${props.table.id}-cell-${n}`}>
                    {props.crossedNumbers.includes(n) ? (
                      <XMarkIcon className="h-10 w-10 mx-auto" />
                    ) : (
                      n
                    )}
                  </TableCell>
                );
              }
            })}
          </TableCol>
        ))}
      </div>
    </div>
  );
};

export default PlayerTable;
