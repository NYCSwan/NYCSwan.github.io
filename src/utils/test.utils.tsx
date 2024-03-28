import { ReactNode, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "@mui/material/styles";
import themeResponsiveFonts from "@app/ThemeOptions";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={themeResponsiveFonts}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
