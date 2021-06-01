import { useState, useEffect } from 'react';

export const useRecord = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [history, setHistory] = useState([]);
    const [current, setCurrent] = useState();

    const record = (color) => {
        setHistory(history.splice(currentIndex, 0, color));
        setCurrentIndex(currentIndex + 1);
        setCurrent(color);
    };

    const undo = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCurrent(history[currentIndex]);
        }
    };

    const redo = () => {
        if (currentIndex < history.length - 2) {
            setCurrentIndex(currentIndex + 1);
            setCurrent(history[currentIndex]);
        }
    };

    return {
        current,
        undo,
        redo,
        record
    };
};
