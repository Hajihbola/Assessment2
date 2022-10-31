import {
	BackgroundImage,
	ButtonStylesParams,
	MantineProvider,
} from "@mantine/core";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(<App />);
