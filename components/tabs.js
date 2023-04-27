import React from "react";
import { Tab } from '@headlessui/react'
import styles from '@/styles/Home.module.css'

const Tabs = () => {
    return (
        <Tab.Group>
            <Tab.List className={styles.navigation}>
                <Tab className={styles.tablink}>About</Tab>
                <Tab className={styles.tablink}>AR Portal</Tab>
                <Tab className={styles.tablink}>Instagram Filters</Tab>
                <Tab className={styles.tablink}>Cycladic</Tab>
                <Tab className={styles.tablink}>Gruppo</Tab>
                <Tab className={styles.tablink}>Other</Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel className={styles.tabcontent}>
                    <h3>About</h3>
                    <p>Home is where the heart is..</p>
                </Tab.Panel>
                <Tab.Panel className={styles.tabcontent}>
                    <h3>AR Portal</h3>
                    <p>Some news this fine day!</p>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h3>Instagram Filters</h3>
                    <p>Get in touch, or swing by for a cup of coffee.</p>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h3>Cycladic</h3>
                    <p>Get in touch, or swing by for a cup of coffee.</p>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h3>Gruppo</h3>
                    <p>Get in touch, or swing by for a cup of coffee.</p>
                </Tab.Panel>
                <Tab.Panel  className={styles.tabcontent}>
                    <h3>Other</h3>
                    <p>Get in touch, or swing by for a cup of coffee.</p>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
}

export default Tabs