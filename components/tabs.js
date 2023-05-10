import React from "react";
import Link from "next/link";
import { Tab } from '@headlessui/react';
import { getAllProjects } from "@/lib/projects";
import styles from '@/styles/Home.module.css';
import Image from 'next/image'


const Tabs = () => {
    const projects = getAllProjects();
    return (
        <Tab.Group>
            <Tab.List className={styles.navigation}>
                {projects.map((p) => (
                    <Tab className={({ selected }) => selected ? styles.selected : styles.tablink} key={p.id}>
                        {/* {p.title} */}
                        <Image src={p.icon} width={50} height={50}/>
                        </Tab>
                ))}
            </Tab.List>
            <Tab.Panels className={styles.content}>
                {projects.map((p) => (
                    <Tab.Panel className={styles.tabcontent} key={p.id}>
                        <h2>{p.title}</h2>
                        {p.content.map((c) => (
                            <p key={p.content.indexOf(c)}>{c}</p>
                        ))}
                        {p.links.map((link) => (
                            <p key={link.id}>
                                <Link href={link.url} className={styles.lin}>
                                    {link.linkTitle}
                                </Link>
                            </p>
                        ))}
                    </Tab.Panel>
                ))}
                {/* <Tab.Panel className={styles.tabcontent}>
                    <h2>About</h2>
                    <p>Hello! My name is Ino. I am a Junior Developer at B-Reel.
                        I studied Computer Science and Art History at Pomona College. 
                        During the pandemic I took a year off from school to work as a Creative Technologist at Wonder Immersive 
                        and here are some of the projects I have done over the past few years.</p>
                    <a>CV</a>
                    <a>email</a>
                    <a>linkedin</a>
                </Tab.Panel>
                <Tab.Panel className={styles.tabcontent}>
                    <h2>AR Portal</h2>
                    <p>In 2021 I designed and developed an AR Portal for MegaTVs limited series Siopilos Dromos.</p>
                    <p>The assets for this project were designed in Blender while the animations and composition of those assets was made in SparkAR as the portal was distributed through Instagram.</p>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h2>AR Filters</h2>
                    <p>While working at Wonder Immersive I designed and developed a number of instagram filters for Greek fashion brands.</p>
                    <h3>Simple Caracters</h3>
                    <h3>La Vie Secret Santa</h3>
                    <h3>Hippie Fairy</h3>
                    <h3>Galaxy Portal</h3>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h2>Cycladic</h2>
                    <p>In the context of the Museum of Cycladic Art Educational Program, 
                        we developed an Augmented Reality application that allows users to reimagine Cycladic figurines in their original painted form.</p>
                    <p>This application gives users the opportunity to freely express their own artistic moods on one of the most iconic symbols of classical art. 
                        Once in the museum, the users can use tablets provided by the museum to scan the target image on the floor in front of the 1.5 meter tall cycladic figurine in order to see it come to life. 
                        The figurine jumps out of its case to come closer to the user who can then use the application to add facial features, tattoos, and accessories to the figurine. 
                        As this application is targeted to both childern and adults visiting the museum, there is a combination of educational and playful accessories 
                        that can be added to the figurine allowing the visitors to freely express themselves while also learning about the history of those figurines. </p>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h2>Gruppo</h2>
                    <p>This AR application allows users to visualize Gruppo Cucine’s products in their environment enabling them to make customizations and see changes in real time in their personal space.</p>
                    <p>Users are be able to choose from a selection of four kitchen models to place in their space. 
                        After selecting a kitchen model they can choose to change the model’s configuration and two materials for the kitchen tops and cabinets.
                        Users can move the kitchen around their space, rotate it and resize it in order to view it from all perspectives.</p>
                    <p>They can capture a photo with their favorite Gruppo Cucine kitchen to share it with their friends or choose to save specific models and configurations on their device and place inquiries about them with Gruppo Cucine.</p>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h2>Other</h2>
                    <p>Some other fun projects and explorations</p>
                </Tab.Panel> */}
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Tabs
