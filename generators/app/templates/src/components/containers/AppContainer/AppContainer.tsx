import { IAuthPayload, M7ShellProvider } from "@algont/m7-shell-emitter";
import { theme } from "@algont/m7-ui";
import { MuiThemeProvider } from "@material-ui/core";
import Axios from "axios";
import { IStore } from "interfaces/common/IStore";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { Router, Switch } from "react-router";
import { routes } from "routes";
import { mapRoutes } from "utils";
import { browserHistory } from "utils/history";

@inject("store")
@observer
export class AppContainer extends Component<IStore> {
    @computed
    get store() {
        return this.props.store!;
    }

    handleUpdateAuthToken = (payload: IAuthPayload) => {
        Axios.defaults.headers.common["X-M7-Authorization-Token"] =
            payload.token;
    };

    render() {
        return (
            <M7ShellProvider
                enableAuthTokenForwarding
                onUpdateAuthToken={this.handleUpdateAuthToken}
            >
                <MuiThemeProvider theme={theme}>
                    <Router history={browserHistory}>
                        <Switch>{mapRoutes(routes)}</Switch>
                    </Router>
                </MuiThemeProvider>
            </M7ShellProvider>
        );
    }
}

export default AppContainer;
