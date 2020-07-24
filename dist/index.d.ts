/// <reference types="pouchdb-find" />
/// <reference types="node" />
import { EventEmitter } from 'events';
export interface RequestDef {
    aggregate: boolean;
    fields: string[];
    selector: PouchDB.Find.Selector;
    sort: any;
    skip: string | number;
    limit: string | number;
}
export interface PaginationOptions {
    skip: string | number;
    limit: string | number;
    sort: string[];
}
interface Action {
    id: string;
    rev: string;
    doc: {
        _id: string;
        _rev: string;
    };
}
interface RemoveAction extends Action {
    action: 'REMOVE';
}
interface AddAction extends Action {
    action: 'ADD';
}
interface UpdateAction extends Action {
    action: 'UPDATE';
}
export interface Emitter<T = {}> extends EventEmitter {
    cancel: () => void;
    then: () => void;
    catch: () => void;
    paginate: (options: PaginationOptions) => void;
    sort: (list: any) => any;
    onUpdate: (cb: (update: AddAction | UpdateAction | RemoveAction, aggregate?: T[]) => void) => void;
    onReady: (cb: () => void) => void;
    onCancelled: (cb: () => void) => void;
    onError: (cb: (error: Error) => void) => void;
}
export declare function liveFind<T>(requestDef: RequestDef): Emitter;
declare const _default: {
    liveFind: typeof liveFind;
};
export default _default;
