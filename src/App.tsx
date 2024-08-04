import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Main/Home";
import Wordle from "./Front End Development/Wordle/Wordle";
import RigelIndex from "./Front End Development/Rigel/RigelIndex";
import VizIndex from "./Front End Development/Viz/VizIndex";
import SnakeWrapper from "./Front End Development/Snake_Game/SnakeWrapper";
import LoadingBar from "./Main/LoadingBar/LoadingBar";

const App = () => {
  const [percentage, setPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isLoading) {
      interval = setInterval(() => {
        setPercentage((prevPercentage) => {
          const newPercentage = prevPercentage + 1;
          if (newPercentage > 100) {
            setIsLoading(false);
            return prevPercentage;
          }
          return newPercentage;
        });
      }, 5);
    }

    return () => clearInterval(interval!);
  }, [isLoading]);

  if (isLoading) {
    return <LoadingBar percentage={percentage} />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="snake-game" element={<SnakeWrapper />} />
        <Route path="/rigel/*" element={<RigelIndex />} />
        <Route path="/viz/*" element={<VizIndex />} />
        <Route path="wordle" element={<Wordle />} />
      </Routes>
    </>
  );
};

export default App;
