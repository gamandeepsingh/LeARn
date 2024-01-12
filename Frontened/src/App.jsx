import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim";
import {Routes , Route } from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      // await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000211",
        },
      },
      fpsLimit: 150,
      // interactivity: {
      //   events: {
      //     onClick: {
      //       enable: true,
      //       mode: "push",
      //     },
      //     onHover: {
      //       enable: true,
      //       mode: "repulse",
      //     },
      //   },
      //   modes: {
      //     push: {
      //       quantity: 2,
      //     },
      //     repulse: {
      //       distance: 200,
      //       duration: 0.4,
      //     },
      //   },
      // },
      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#fff",
          distance: 100,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          // outModes: {
          //   default: "bounce",
          // },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "square",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      // detectRetina: true,
    }),
    [],
  );

  // if (init) {
  //   return (
  //     <Particles
  //       particlesLoaded={particlesLoaded}
  //       options={options}
  //       className="-z-10 "
  //     />
  //   );
  // }

  return (
    <div className="w-[100vw] flex flex-col items-center bg-black overflow-x-hidden"> 
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
