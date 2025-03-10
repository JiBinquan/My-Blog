export function setDirection(dir: any): void;
export function setOptions(rawOptString: any): void;
export function getOptions(): {};
export function commit(msg: any, id: any, type: any, tag: any): void;
export function branch(name: any, order: any): void;
export function merge(otherBranch: any, custom_id: any, override_type: any, custom_tag: any): void;
export function cherryPick(sourceId: any, targetId: any, tag: any, parentCommitId: any): void;
export function checkout(branch: any): void;
export function prettyPrint(): void;
export function clear(): void;
export function getBranchesAsObjArray(): {
    name: any;
}[];
export function getBranches(): typeof branches;
export function getCommits(): {};
export function getCommitsArray(): any[];
export function getCurrentBranch(): string | undefined;
export function getDirection(): string;
export function getHead(): any;
export namespace commitType {
    let NORMAL: number;
    let REVERSE: number;
    let HIGHLIGHT: number;
    let MERGE: number;
    let CHERRY_PICK: number;
}
declare namespace _default {
    export function getConfig(): import("../../config.type.js").GitGraphDiagramConfig | undefined;
    export { setDirection };
    export { setOptions };
    export { getOptions };
    export { commit };
    export { branch };
    export { merge };
    export { cherryPick };
    export { checkout };
    export { prettyPrint };
    export { clear };
    export { getBranchesAsObjArray };
    export { getBranches };
    export { getCommits };
    export { getCommitsArray };
    export { getCurrentBranch };
    export { getDirection };
    export { getHead };
    export { setAccTitle };
    export { getAccTitle };
    export { getAccDescription };
    export { setAccDescription };
    export { setDiagramTitle };
    export { getDiagramTitle };
    export { commitType };
}
export default _default;
declare let branches: typeof branches;
import { setAccTitle } from '../common/commonDb.js';
import { getAccTitle } from '../common/commonDb.js';
import { getAccDescription } from '../common/commonDb.js';
import { setAccDescription } from '../common/commonDb.js';
import { setDiagramTitle } from '../common/commonDb.js';
import { getDiagramTitle } from '../common/commonDb.js';
