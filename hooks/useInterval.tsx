import { useEffect, useRef } from "react"

function useInterval(callback: VoidFunction, delay: number | null) {
    const cachedCallback = useRef<VoidFunction>(callback);

    useEffect(() => {
        cachedCallback.current = callback;
    }, [callback])

    useEffect(() => {
        const tick = () => {
            cachedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(() => tick(), delay)
            return () => {
                clearInterval(id);
            }
        }
    }, [delay])
}

export default useInterval