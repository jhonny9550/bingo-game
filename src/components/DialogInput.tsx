import React, { useCallback, useState } from "react";
import { Dialog } from "@headlessui/react";
import Input, { InputProps } from "./Input";
import Button from "./Button";

export type DialogInputProps = {
  title?: string;
  description?: string;
  inputProps?: InputProps;
  handleCancel?: () => void;
  handleConfirm?: (value: any) => void;
  cancelButtonText?: string;
  confirmButtonText?: string;
};

const DialogInput: React.FC<DialogInputProps> = (props) => {
  const [value, setValue] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setValue(e.target.value);
    }, []);

  const handleConfirm = useCallback(
    (value: any) => {
      if (props.handleConfirm) {
        props.handleConfirm(value);
      }
    },
    [props.handleConfirm]
  );

  return (
    <>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        {props.title && (
          <Dialog.Title as="h5" className="font-semibold text-black">
            {props.title}
          </Dialog.Title>
        )}
        {props.description && (
          <Dialog.Description as="p" className="mt-2">
            {props.description}
          </Dialog.Description>
        )}
        <Input
          placeholder="Player name"
          classes={{ root: "mt-4 max-w-full" }}
          onChange={handleInputChange}
          value={value}
        />
      </div>
      <div
        className="
        bg-gray-50 px-4 py-3 
          sm:flex sm:flex-row-reverse sm:gap-2 sm:px-6
        "
      >
        <Button
          type="button"
          color="primary"
          onClick={handleConfirm.bind(null, value)}
        >
          {props.confirmButtonText || "Save"}
        </Button>
        <Button type="button" color="white" onClick={props.handleCancel}>
          {props.cancelButtonText || "Cancel"}
        </Button>
      </div>
    </>
  );
};

export default DialogInput;
