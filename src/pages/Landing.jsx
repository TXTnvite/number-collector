import { useState } from "react";
import "../assets/CSS/pages/landing.css"
import Solutions from "../components/Solutions";
import News from "../components/News";

const Landing = () => {
    return (
        <section className="landing-container">
        <main className="d-f-around">
            <section>
            <h1>Simplicity & Fun</h1>
            <h3>CREATING SIMPLICITY ON YOUR PHONE</h3>
            <button>Contact Us</button>
            </section>
            <aside>
                <img/>
            </aside>
        </main>
        <aside className="blurb">
            <article className="d-f-between">
                <aside>
                    <h5>Core to Cosmos</h5>
                    <p>Create eco-friendly solutions with a consience</p>
                </aside>
                <div className="mini-img"></div>
            </article>
            <article className="d-f-between">
                <aside>
                    <h5>Data to Discovery</h5>
                    <p>Monitor, analyze,and safeguard our planet</p>
                </aside>
                <div className="mini-img"></div>
            </article>
            <article className="d-f-between">
                <aside>
                    <h5>Power to Precision</h5>
                    <p>Empower businesses to achieve efficiency without compromise.</p>
                </aside>
                <div className="mini-img"></div>
            </article>
        </aside>
        <Solutions/>
        <News/>
        </section>
)}
export default Landing;