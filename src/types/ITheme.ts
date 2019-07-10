import { ISemanticColors } from "../index";
import { IButton } from "./IButton";
export interface ITheme {
  name: string;
  palette: ISemanticColors;
  components: {
    button: IButton;
  };
}
