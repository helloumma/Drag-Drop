import { ChangeEventHandler, MouseEventHandler } from "react";

export interface form {
  input: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: MouseEventHandler<HTMLButtonElement> | undefined | any;
}
