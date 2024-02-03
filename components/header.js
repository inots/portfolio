import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import Logo from '@/public/favicon.png'
import ThemeSelector from './themeSelector';

const ClearToggle = () => {

}

const Header = ({updateThemeOption}) => {
    return (
        <>
            <div>
                <div className={styles.options} id='header'>
                <Image
                            src={Logo}
                            width={36}
                            height={36}
                            alt='hello'
                            className={styles.image}
                            />
                    <ThemeSelector updateThemeOption={updateThemeOption} />
                    {/* <ClearToggle /> */}
                </div>
            </div>
        </>
    )
}

export default Header