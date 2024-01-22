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
                    <Link href={p.links[0].url}>
                        <Image
                            src={p.image}
                            width={300}
                            height={300}
                            alt={p.alt}
                            className={styles.image}
                            />
                    </Link>
                    <div className={styles.text}>
                        <div>
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