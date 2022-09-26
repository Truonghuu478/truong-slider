export declare const useCancellablePromises: () => {
    appendPendingPromise: (promise: Promise<any>) => any[];
    removePendingPromise: (promise: Promise<any>) => any;
    clearPendingPromises: () => any;
};
