import { useRef } from "react"

const useResult = () => {
    const resultRef = useRef(null);

    const handleScrollToResult = () => {
        if (resultRef) {
            resultRef.current.scrollIntoView({
            behavior: 'smooth',
          });
        }
      };
    
    return { resultRef , handleScrollToResult }
}

export default useResult;