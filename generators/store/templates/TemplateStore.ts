import { AppStore } from 'stores/AppStore';
export class <%= name %> {
    private store: AppStore;
    constructor(store: AppStore){
        this.store = store;
    }
}