import { useRef } from 'react';

export const useCancellablePromises = () => {
	const pendingPromises: any = useRef([]);

	const appendPendingPromise = (promise: Promise<any>) =>
		(pendingPromises.current = [...pendingPromises.current, promise]);

	const removePendingPromise = (promise: Promise<any>) =>
		(pendingPromises.current = pendingPromises.current.filter((p: any) => p !== promise));

	const clearPendingPromises = () => pendingPromises.current.map((p: any) => p.cancel());

	const api = {
		appendPendingPromise,
		removePendingPromise,
		clearPendingPromises,
	};

	return api;
};

