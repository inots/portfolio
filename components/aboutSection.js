import { getAbout } from "@/lib/about";
import styles from '@/styles/AboutSection.module.css';
import Link from "next/link";
import CarbonDisclaimer from "./carbonDisclaimer";

const AboutSection = () => {
    const aboutContent = getAbout();

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {aboutContent.content.map((c) => (
                    <div key={aboutContent.content.indexOf(c)}>{c}</div>
                ))}

                <div className={styles.links}>
                    {aboutContent.links?.map((link) => (
                        <p key={link.id}>
                            <Link href={link.url} className={styles.link}>
                                {link.linkTitle}
                            </Link>
                        </p>
                    ))}
                </div>
            </div>
            <CarbonDisclaimer />
        </div>
    );
}

export default AboutSection