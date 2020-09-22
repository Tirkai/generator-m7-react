import { JsonRpcEndpoint, UtilsFunctions } from "@algont/m7-utils";

export const exampleEndpoint = new JsonRpcEndpoint(
    `http://shell.${UtilsFunctions.getUpperLevelDomain()}`,
);

