import { FormikValues } from "formik";

export interface NavigationTitle {
  name: string;
  path: string;
}

export interface FormValues extends FormikValues {
  email: string;
  password: string;
  confirmPassword?: string;
  stayAuth: boolean;
}

export interface SearchBarProps {
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  searchBarWide: boolean;
  searchBarInputWide: boolean;
}

export interface ToggleModeProps {
  whiteTheme: boolean;
}
