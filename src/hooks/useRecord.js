import { useState, useEffect } from 'react';

export const useRecord = (color) => {
    const [history, setHistory] = useState(['#FF00FF', color]);
    const [currentIndex, setCurrentIndex] = useState(history.length);
    const [current, setCurrent] = useState(color);

    const record = (inputColor) => {
        if (currentIndex !== history.length) {
            setHistory([
                ...history.slice(0, currentIndex),
                inputColor,
                ...history.slice(currentIndex)
            ]);
        } else {
            setHistory([...history, inputColor]);
        }
        setCurrent(inputColor);
        setCurrentIndex(currentIndex + 1);
    };

    const undo = () => {
        if (currentIndex > 1) {
            console.log(currentIndex, history.length, 'undo');
            setCurrentIndex(currentIndex - 1);
        }
    };

    const redo = () => {
        if (currentIndex < history.length) {
            console.log(currentIndex, history.length, 'redo');
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        setCurrent(history[currentIndex - 1]);
    }, [currentIndex]);

    return {
        current,
        undo,
        redo,
        record
    };
};
