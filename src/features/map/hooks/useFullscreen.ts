import { useState } from "react";

export default function useFullscreen(id: string) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const plotterContainer = document.getElementById(id);
  const toggleFullscreen = () => {
    if (plotterContainer) {
      if (isFullscreen) {
        closeFullscreen();
      } else {
        showFullscreen();
      }
    } else {
      alert("Container not found");
    }
  };
  const showFullscreen = () => {
    setIsFullscreen(true);
    plotterContainer?.requestFullscreen();
  };
  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.exitFullscreen();
  };
  return {
    isFullscreen,
    toggleFullscreen,
    showFullscreen,
    closeFullscreen,
  };
}
