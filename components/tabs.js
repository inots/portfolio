import React from "react";
import Link from "next/link";
import { Tab } from '@headlessui/react';
import styles from '@/styles/Home.module.css';
import { getAllContent } from "@/lib/content";
import ProjectCard from "./projectCard";
import CarbonDisclaimer from "./carbonDisclaimer";


const Tabs = ({updateCurrTab}) => {
    const content = getAllContent();
    return (
        <Tab.Group
            onChange={(index) => {
                updateCurrTab(index);
            }}>
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
                        <div className={p.description == "Hello" ? styles.intro : ""}>
                            {p.content ? 
                                p.content.map((c) => (
                                    <div key={p.content.indexOf(c)}>{c}</div>
                                ))
                            : <ProjectCard/> }
                        </div>
                        <div className={styles.notes}>
                            {p.links?.map((link) => (
                                <p key={link.id}>
                                    <Link href={link.url} className={styles.link}>
                                        {link.linkTitle}
                                    </Link>
                                </p>
                            ))}
                        </div>
                        {p.title == "About" ? 
                            <CarbonDisclaimer />
                        : ""}
                        </Tab.Panel>
                    ))}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Tabs
