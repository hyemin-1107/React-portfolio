import { useEffect } from "react";


interface UseOnClickOutsideProps {
  ref: React.RefObject<HTMLElement | null>;
  handler: () => void;
};

export const useOnClickOutside = ({ref, handler}: UseOnClickOutsideProps) =>{
    useEffect(() =>{
        const outSideClick = (e: MouseEvent) =>{
          if(!ref.current || ref.current.contains(e.target as Node) ) return;
        // 외부클릭감지
            handler();
        };
        document.addEventListener("mousedown", outSideClick);
        // 언마운트시 이벤트 삭제하여 성능 향상
        return () =>{
            document.addEventListener("mousedown", outSideClick);
        }
      }, [ref, handler]);
}