declare const cancellablePromise: (promise: Promise<any>) => {
    promise: any;
    cancel: () => boolean;
};
export default cancellablePromise;
