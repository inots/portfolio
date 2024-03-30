import { getAllThemes } from '@/lib/themes';
import vertexShader from "!!raw-loader!lib/shaders/vertexShader.frag";
import fragmentShader from "!!raw-loader!lib/shaders/fragmentShader.frag";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useEffect, useCallback, useState } from "react";
import { Vector2, Color } from "three";

const Fragment = (themeOption) => {
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

    const updateThemeColors = useCallback((option) => {
        themeColors.current = {
            bg_color: themes[option].bg_color,
            color_a: themes[option].color_a,
            color_b: themes[option].color_b,
        };
    }, [themes])
  
    const uniforms = useMemo(
      () => ({
        u_time: {
          value: 0.0,
        },
        u_mouse: { value: new Vector2(0, 0) },
        u_resolution: {
          value: new Vector2(window.innerWidth, window.innerHeight)
        },
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

    // useEffect(() => {
    //     const elem = document.getElementById("header");
    //     elem.addEventListener("click", updateThemeColors(themeOption.themeOption), false );
  
    //   return () => {
    //     elem.removeEventListener("click", updateThemeColors(themeOption.themeOption), false );
    //   };
    // }, [updateThemeColors, themeOption])
  
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

export default Fragment