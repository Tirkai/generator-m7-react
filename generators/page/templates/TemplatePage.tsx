import {
    ContentWithHeaderLayout,
    PageContent,
    PageHeader,
} from "@algont/m7-ui";
import { IStore } from "interfaces/common/IStore";
import { computed } from "mobx";
import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router";

interface I<%= name %>Props
    extends IStore,
        RouteComponentProps<{ id: string }> {}

@inject("store")
@observer
class <%= name %> extends Component<I<%= name %>Props> {
    @computed
    get store() {
        return this.props.store!;
    }

    render() {
        return (
            <ContentWithHeaderLayout
                layoutUnitType="page"
                header={<PageHeader title="<%= name %>.Title" />}
                content={
                    <PageContent>
                       <%= name %>.Content
                    </PageContent>
                }
            />
        );
    }
}

const <%= name %>WithRouter = withRouter(<%= name %>);
export { <%= name %>WithRouter as <%= name %> };
