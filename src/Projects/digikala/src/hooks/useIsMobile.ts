import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  function handleResize() {
    setIsMobile(window.innerWidth < 1024);
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[]);
  return isMobile;
}
