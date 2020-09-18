import classNames from 'classnames';
import React, { Component } from "react";
import style from "./style.module.css";
<%- inject ? `import { IStore } from 'interfaces/common/IStore'` : undefined %>
<%- inject ? `import { computed } from 'mobx'` : undefined %>
<%- inject ? `import { inject, observer } from 'mobx-react'` : undefined %>
const className = style.<%= name.charAt(0).toLowerCase() + name.substr(1) %>;
<%- inject ? "@inject('store') @observer" : undefined %>
export class <%= name %> extends Component<%- inject ? (`<IStore>`) : undefined %> {
    <%-inject ? `
    @computed
    get store(){
        return this.props.store!;
    }
    ` : undefined %>
    render() {
        return (
            <div className={classNames(className)}>
            
            </div>
        );
    }
}
