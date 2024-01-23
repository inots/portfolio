import { getAllThemes } from "@/lib/themes";
import styles from '@/styles/ThemeSelector.module.css';
import { useState } from "react";

const ThemeSelector = () => {
    const themes = getAllThemes();
    const [option, setOption] = useState(0);

    return (  
        <>
            <p className={styles.description}>
                Select a theme and enjoy ! 
            </p>
            <div id='themeOptions' className={styles.themeContainer}>
                {themes.map((t) => (
                    <button key={t.id} id={`button${t.id}`} className={option == t.id ? `${styles.themeButton} ${styles.selected}` : styles.themeButton} onClick={() => {setOption(t.id)}}>{t.title}</button>
                ))}
            </div>
      </> 
      );
}

export default ThemeSelector;