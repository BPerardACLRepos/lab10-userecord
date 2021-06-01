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

    return {
        current,
        undo,
        redo,
        record
    };
};
