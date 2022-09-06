import { useEffect, useState } from "react";
export default function useFullscreen(id: string) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const plotterContainer = document.getElementById(id);
  const toggleFullscreen = () => {
    if (plotterContainer) {
      if (isFullscreen) {
        document.exitFullscreen();
      } else {
        plotterContainer?.requestFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    } else {
      alert("Container not found");
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement) {
        setIsFullscreen(!!document.fullscreenElement);
      } else {
        setIsFullscreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return {
    isFullscreen,
    toggleFullscreen,
  };
}
