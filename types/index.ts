import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  constainerStyles?: string;
  handlleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" |
}