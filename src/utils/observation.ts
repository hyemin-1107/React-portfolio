import { useEffect, useRef } from "react";

type ObservationProps = (id: string) => void;
  

const Observation = ( setActiveId : ObservationProps)=> {
    
    const contentRef = useRef<Record<string, IntersectionObserverEntry>>({});

    useEffect(() => {
        const callback: IntersectionObserverCallback = (observedContent) => {
            
            observedContent.forEach((content) => {
                contentRef.current[content.target.id] = content;
            });

            const visibleContent = Object.values(contentRef.current).filter(
                (content) => content.isIntersecting
            );

            setActiveId(visibleContent[0]?.target.id);
        };
        //observer 설정
        const observer = new IntersectionObserver(callback, {
            // 바깥 여백을 이용해 Root 범위를 확장하거나 축소
            rootMargin: "-20% 0px",
            // 타켓 요소가 특정 범위 이상으로 뷰포트에 들어왔는지 정하는 값 
            threshold: [0, 0.5, 1]
        });
        //dom요소를 찾고 observer을 달아준다.
        const contents = Array.from(document.querySelectorAll(".content")) as HTMLElement[];

        contents.forEach((content) => observer.observe(content));
        //언마운트시 옵저버 해제
        return () => observer.disconnect();
    }, [setActiveId]);
};

export default Observation;
