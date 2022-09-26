export declare function noop(): void;
export declare const delay: (n: number) => Promise<unknown>;
export declare const useClickPreventionOnDoubleClick: (onClick: Function, onDoubleClick: Function) => (() => any)[];
