declare const cancellablePromise: (promise: Promise<any>) => {
    promise: Promise<unknown>;
    cancel: () => boolean;
};
export default cancellablePromise;
