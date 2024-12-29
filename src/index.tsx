import "./styles/main.sass";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { init, backButton } from "@telegram-apps/sdk-react";

import { RouterProvider } from "react-router-dom";
import { Provider as Store } from "react-redux";

import { store } from "@/store/store";

import { router } from "@/routes";

import "@/locale";

init();

backButton.mount();

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <Store store={store}>
      <RouterProvider router={router} />
    </Store>
  </StrictMode>,
);
