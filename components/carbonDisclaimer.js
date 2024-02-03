import styles from '@/styles/CarbonDisclaimer.module.css';
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';

const CarbonDisclaimer = () => {

    return (  
        <>
            <p className={styles.description}>
                *This website is handmade with&nbsp;
                <a className={styles.link} href="https://sustainablewebdesign.org/">Sustainable Web Design</a>&nbsp;principles in mind. 
                After researching sustainability on the web for&nbsp;
                <a className={styles.link} href="https://inots.github.io/website-sustainability/">my senior paper</a>&nbsp;I try to follow these principles in both my personal and professional projects. 
            <br />
                Based on the&nbsp;<a className={styles.link} href='https://www.websitecarbon.com/website/inotsich-com/'>Website Carbon Calculator</a>,
                 this website produces 0.08g of CO₂ per website visit, making it cleaner than 92% of the website tested.
            </p>
            {/* <WebsiteCarbonBadge dark={true} co2="0.08" percentage="92" url="inotsich.com" className={styles.carbon}/> */}
      </> 
      );
}

export default CarbonDisclaimer;