import { useEffect } from "react";

type useSetShowProps = (value: boolean) => void;

const useSetShow = (setShowUnder: useSetShowProps) =>{

    useEffect(() => {
        const handleTopButton = () => {
            setShowUnder(window.scrollY > 400)
        }

        window.addEventListener("scroll", handleTopButton)
        return () => {
            window.removeEventListener("scroll", handleTopButton)
        }
    }, [setShowUnder])
};

export default useSetShow;