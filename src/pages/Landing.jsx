import { useState } from "react";
import "../assets/CSS/pages/landing.css"

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
        <aside className="d-f-even">
            <article className="d-f-even-col">
                <h5>Core to Cosmos</h5>
                <p>Create eco-friendly solutions with a consience</p>
            </article>
            <article>
                <h5>Data to Discovery</h5>
                <p>Monitor, analyze,and safeguard our planet</p>
            </article>
            <article>
                <h5>Power to Precision</h5>
                <p>Empower businesses to achieve efficiency without compromise.</p>
            </article>
        </aside>
        </section>)
}
export default Landing;