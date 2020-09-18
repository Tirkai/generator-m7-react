import { UtilsFunctions } from "@algont/m7-utils";
import { AppContainer } from "components/containers/AppContainer/AppContainer";
import React from "react";

UtilsFunctions.setDevelopmentDomain("algonttest");

export const App: React.FC = () => <AppContainer />;
