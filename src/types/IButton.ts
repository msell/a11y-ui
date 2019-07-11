import { IButtonStyle } from "../index";
import { ITwoTone } from "./ITwoTone";
export interface IButton {
  disabled: boolean;
  minimal: boolean;
  inverse: boolean;
  size: IButtonStyle;
  colors: ITwoTone;
  fontSize: number;
}
