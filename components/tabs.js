import React from "react";
import Link from "next/link";
import { Tab } from '@headlessui/react';
import styles from '@/styles/Home.module.css';
import { getAllContent } from "@/lib/content";
import ProjectCard from "./projectCard";


const Tabs = () => {
    const content = getAllContent();
    return (
        <Tab.Group>
            <Tab.List className={styles.navigation}>
                {content.map((tab) => (
                    <Tab className={({ selected }) => selected ? styles.selected : styles.tablink} key={tab.id}>
                        {tab.title}
                        </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className={styles.content}>
                {content.map((p) => (
                    <Tab.Panel className={p.content ? `${styles.tabcontent} ${styles.paragraph}` : styles.tabcontent} key={p.id}>
                        {p.content ? 
                            p.content.map((c) => (
                                <div key={p.content.indexOf(c)}>{c}</div>
                            ))
                        : <ProjectCard/> }
                            {p.links?.map((link) => (
                                <p key={link.id}>
                                    <Link href={link.url} className={styles.link}>
                                        {link.linkTitle}
                                    </Link>
                                </p>
                            ))}
                        </Tab.Panel>
                    ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Tabs
