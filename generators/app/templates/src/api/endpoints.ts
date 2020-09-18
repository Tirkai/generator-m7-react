import { JsonRpcEndpoint, UtilsFunctions } from "@algont/m7-utils";

export const workstationEndpoint = new JsonRpcEndpoint(
    `http://workstation.${UtilsFunctions.getUpperLevelDomain()}:15007/jsonrpc`,
);

export const webSocketEndpoint = `http://workstation.${UtilsFunctions.getUpperLevelDomain()}:15007/`;
