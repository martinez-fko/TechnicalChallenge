import { useRef } from "react";


const useStart = () =>{
    const startRef = useRef(null);

    const handleStart = (setSteps, handleScrollToResult) => {
        setSteps(4);
        setTimeout(() => {
          handleScrollToResult();
        }, 100);
      };

     const handleScrollToStart = () => {
        if (startRef) {
            startRef.current.scrollIntoView({
              behavior: 'smooth',
            });
          }
     }

    return { handleStart , startRef, handleScrollToStart}
}

export default useStart;