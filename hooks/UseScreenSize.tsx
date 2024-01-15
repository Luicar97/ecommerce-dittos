import { useState, useEffect } from "react";

const useScreenSize = () => {
    const [width, setWidth] = useState<number>();
    const [height, setHeight] = useState<number>();

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        window.addEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return { width, height };
}

export default useScreenSize;