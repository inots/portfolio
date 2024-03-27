import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import AboutSection from '@/components/aboutSection';
import Header from '@/components/header';
import ProjectCard from '@/components/projectCard';
import Fragment from '@/components/ShaderFragment';

export default function Home() {
  const [themeOption, setThemeOption] = useState(0);

  const updateThemeOption = (t) => {
    setThemeOption(t);
  }

  const [clear, setClear] = useState(false);

  const updateClear = (s) => {
    setClear(s);
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
      {/* <Canvas
        shadows
        className={styles.canvas}
        camera={{
          position: [0.0, 0.0, 1.0],
        }}
      >
        <Fragment themeOption={themeOption}/>
      </Canvas> */}
    </div>
        <main className={styles.main}>
          <Header updateThemeOption={updateThemeOption} updateClear={updateClear}/>
          {clear? 
            ''
            : 
              <>
                <AboutSection />
                <ProjectCard />
              </>
          }
        </main>
    </>
  )
}
