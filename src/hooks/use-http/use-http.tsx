import React, { useCallback, useState } from "react";

type RequestConfig = {
    url: string;
    method?: string | undefined;
    headers?: HeadersInit | undefined;
    body?: any | null;
};

type ApplyData = (data: any) => void;

interface IUseHtpp {
    isLoading: boolean;
    error: string | null;
    sendRequest: (
        requestConfig: RequestConfig,
        applyData: ApplyData
    ) => Promise<void>;
}

const useHttp = (): IUseHtpp => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const sendRequest = useCallback(
        async (requestConfig: RequestConfig, applyData: ApplyData) => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(requestConfig.url, {
                    method: requestConfig.method || "GET",
                    headers: requestConfig.headers || {},
                    body: requestConfig.body
                        ? JSON.stringify(requestConfig.body)
                        : null,
                });
                if (!response.ok) {
                    throw new Error("Request failed!");
                }
                const data = await response.json();
                applyData(data);
            } catch (err) {
                setError((err as Error).message || "Something went wrong!");
            }
            setIsLoading(false);
        },
        []
    );
    return {
        isLoading,
        error,
        sendRequest,
    };
};
export default useHttp;
