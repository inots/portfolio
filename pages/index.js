import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Tabs from '@/components/tabs'
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useCallback, useState } from "react";
import { Vector2, Color } from "three";

import vertexShader from "!!raw-loader!lib/shaders/vertexShader.frag";
import fragmentShader from "!!raw-loader!lib/shaders/fragmentShader.frag";
import { getAllThemes } from '@/lib/themes';
import ThemeSelector from '@/components/themeSelector';

const Fragment = () => {
  const themes = getAllThemes();
  const mesh = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });
  const themeColors = useRef({
    bg_color: themes[0].bg_color,
    color_a: themes[0].color_a,
    color_b: themes[0].color_b,
  })

  const updateMousePosition = useCallback((e) => {
    mousePosition.current = { x: e.pageX, y: e.pageY };
  }, []);

  const updateThemeColors = useCallback((e) => {
    console.log(e.currentTarget.getAttribute("id"));
    const selection = e.currentTarget.getAttribute("id")[6];
    console.log(selection);

    themeColors.current = {
        bg_color: themes[selection].bg_color,
        color_a: themes[selection].color_a,
        color_b: themes[selection].color_b,
      };
  }, []);

  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_mouse: { value: new Vector2(0, 0) },
      u_bg: {
        value: new Color(themeColors.current.bg_color),
      },
      u_colorA: { value: new Color("#588157") },
      u_colorB: { value: new Color("#a3b18a") },
    }), []
  );

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition, false);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition, false);
    };
  }, [updateMousePosition]);

  useEffect(() => {
    const elementA = document.getElementById("button0");
    elementA.addEventListener("click", updateThemeColors, false );


    const elementB = document.getElementById("button1");
    elementB.addEventListener("click", updateThemeColors, false );

    const elementC = document.getElementById("button2");
    elementC.addEventListener("click", updateThemeColors, false );

    console.log(themeColors.current.bg_color);

    return () => {
      elementA.removeEventListener("click", updateThemeColors, false);
      elementB.removeEventListener("click", updateThemeColors, false);
      elementC.removeEventListener("click", updateThemeColors, false);
    };
  })

  useFrame((state) => {
    const { clock } = state;
    mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
    mesh.current.material.uniforms.u_mouse.value = new Vector2(
      mousePosition.current.x,
      mousePosition.current.y
    );
    mesh.current.material.uniforms.u_bg.value = new Color(themeColors.current.bg_color);
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} scale={1.0}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const updateCurrTab = (tabName) => {
    setCurrentTab(tabName);
  }
  
  return (
    <>
      <Head>
        <title>❋ Ino Tsichrintzi ❋</title>
        <meta name="description" content="Portfolio - Ino Tsichrintzi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

    <div className={styles.scene}>
      <Canvas
        shadows
        className={styles.canvas}
        camera={{
          position: [0.0, 0.0, 1.0],
        }}
      >
        <Fragment />
      </Canvas>
    </div>
        <main className={styles.main}>
          <Tabs updateCurrTab={updateCurrTab}/>
          <div className={currentTab != 0 ? styles.hide : ''} aria-hidden={currentTab != 0 ? true : false}>
            <ThemeSelector /> 
          </div>
        </main>
    </>
  )
}
