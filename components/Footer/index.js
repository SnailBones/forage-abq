import React from "react";
import "./Footer.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer">
            <Link href="/responsible-foraging">Please forage with care.</Link>
            <p>
                Made with 🖤 & GPT-4 by <a href="about">Aidan</a>. Code on{" "}
                <a href="https://github.com/SnailBones/forage-abq">Github</a>.
            </p>
        </footer>
    );
};

export default Footer;
