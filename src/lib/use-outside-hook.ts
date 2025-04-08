"use client"

import React, { useEffect } from "react";


type UseOutsideClickType = <
    T extends HTMLElement = HTMLDivElement,
    E extends HTMLElement = HTMLButtonElement,
>(
    ref: React.RefObject<T>,
    callback: (e: MouseEvent | TouchEvent) => void,
    excludeRef?: React.RefObject<E>
) => void;

export const useOutsideClick: UseOutsideClickType = (
    ref,
    callback,
    excludeRef
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            if (
                !ref.current ||
                ref.current.contains(event.target as Node) ||
                (excludeRef?.current && excludeRef.current.contains(event.target as Node))
            ) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback, excludeRef]);
};
