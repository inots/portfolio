import { getAllProjects } from "@/lib/projects";
import Image from 'next/image';
import Link from "next/link";
import styles from '@/styles/ProjectCard.module.css';

const ProjectCard = () => {
    const projects = getAllProjects();
    return (
        <div className={styles.container}>
            {projects.map((p)=>(
                <div className={styles.inner} key={p.id}>
                    <div className={styles.imageContainer}>
                        <Link href={p.links[0].url}>
                            <div className={styles.image}>
                            <Image
                                src={p.image}
                                alt={p.alt}
                                className={styles.imageInner}
                                placeholder= 'empty'
                                />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.description}>
                            <h4>{p.title}</h4>
                            <p>{p.description}</p>
                        </div>
                        <div className={styles.notes}>
                            {p.links?.map((link) => (
                                    <p key={link.id}>
                                        {link.url? 
                                            <Link href={link.url} className={styles.link}>
                                                {link.linkTitle}
                                            </Link>
                                            : link.linkTitle
                                        }
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectCard;