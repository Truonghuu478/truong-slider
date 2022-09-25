import cancellablePromise from './cancellablePromise';
import { useCancellablePromises } from './useCancellablePromises';

const DELAY_TIMEOUT = 200;

export function noop() { }

export const delay = (n: number) => new Promise((resolve) => setTimeout(resolve, n));

export const useClickPreventionOnDoubleClick = (onClick: Function, onDoubleClick: Function) => {
	const api = useCancellablePromises();

	const handleClick = () => {
		api.clearPendingPromises();
		const waitForClick: any = cancellablePromise(delay(DELAY_TIMEOUT));
		api.appendPendingPromise(waitForClick);

		return waitForClick.promise
			.then(() => {
				api.removePendingPromise(waitForClick);
				onClick();
			})
			.catch((errorInfo: any) => {
				api.removePendingPromise(waitForClick);
				if (!errorInfo.isCanceled) {
					throw errorInfo.error;
				}
			});
	};

	const handleDoubleClick = () => {
		api.clearPendingPromises();
		onDoubleClick();
	};

	return [handleClick, handleDoubleClick];
};
