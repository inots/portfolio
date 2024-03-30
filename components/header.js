import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import Logo from '@/public/favicon.png'
import ThemeSelector from './themeSelector';
import ClearToggle from './clearToggle';

const Header = ({updateThemeOption, updateClear}) => {
    return (
        <>
            <div className={styles.container}>
                <Image
                    src={Logo}
                    width={36}
                    height={36}
                    alt='hello'
                    className={styles.image}
                    />

                {/* <div className={styles.options} id='header'>
                    <ThemeSelector updateThemeOption={updateThemeOption} />
                    <ClearToggle updateClear={updateClear}/>
                </div> */}
            </div>
        </>
    )
}

export default Header