import { useEffect } from "react";


interface UseOnClickOutsideProps {
  ref: React.RefObject<HTMLElement | null>;
  handler: () => void;
};

export const useOnClickOutside = ({ref, handler}: UseOnClickOutsideProps) =>{
    useEffect(() =>{
        const outSideClick = (e: MouseEvent) =>{
          if(!ref.current || ref.current.contains(e.target as Node) ) return;

            handler();
        };
        document.addEventListener("mousedown", outSideClick);

        return () =>{
            document.addEventListener("mousedown", outSideClick);
        }
      }, [ref, handler]);
}