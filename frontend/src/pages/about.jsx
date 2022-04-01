import { Link } from 'gatsby';
import React from 'react';
import BackLink from '../components/BackLink';
import Layout from '../components/Layout';

import * as header from "../styles/studyprogramme.module.css";
import * as styles from "../styles/about.module.css";

function About() {
    return (
        <Layout>
            <BackLink to="/" />
            <header className={header.header}><h1 className={styles.h1}>Om</h1></header>

            <section className={styles.section}>
                <h2>Bærekraftansvarlig</h2>
                <ul>
                    <li><Link to='#'>Tom Schrier</Link></li>
                </ul>

                <h2>Designansvarlige</h2>
                <ul>
                    <li><Link to='#'>Kommer snart =D</Link></li>
                </ul>

                <h2>Fotoansvarlige</h2>
                <ul>
                    <li><Link to='#'>Johanne Lyster Strande</Link></li>
                    <li><Link to='#'>Marc Daniel Einebakken</Link></li>
                    <li><Link to='#'>Nora Strøm Myklebust</Link></li>
                </ul>

                <h2>Informasjonsarkitektur-ansvarlige</h2>
                <ul>
                    <li><Link to='#'>Hanna Hernæs</Link></li>
                    <li><Link to='#'>Ida Emilie Herfoss</Link></li>
                    <li><Link to='#'>Linde Stormo</Link></li>
                    <li><Link to='#'>Michelle Carina Osnes</Link></li>
                    <li><Link to='#'>Sine Uberg</Link></li>
                </ul>

                <h2>Utviklingsansvarlige</h2>
                <ul>
                    <li><Link to='#'>Cornelius Ottar Sandmæl</Link></li>
                    <li><Link to='#'>Glenn Eirik Hansen</Link></li>
                    <li><Link to='#'>Jostein Ødegårdstuen Tollefsrud</Link></li>
                </ul>

                <h2>Stilarkansvarlige</h2>
                <ul>
                    <li><Link to='#'>Emil Bøen</Link></li>
                    <li><Link to='#'>Ida M. R. Gjeitsund</Link></li>
                    <li><Link to='#'>Lena Amdal-Larsen</Link></li>
                    <li><Link to='#'>Leonard Avdullahu</Link></li>
                    <li><Link to='#'>Vilde Gunnes Bertelsen</Link></li>
                </ul>
            </section>
        </Layout>
    );
}

export default About;