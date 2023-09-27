import "styled-components";
import { ThemeI } from "../styles/theme";
declare module "styled-components" {
  export interface DefaultTheme extends ThemeI {}
}
