"use client";
import React, { useEffect } from "react";
import { sendEmail } from "@/app/actions";
import "./contact.scss";
export default function ContactForm() {
    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                const id = window.location.hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 0);
        }
    }, []);
    return (
        <div className="form-container">
            <form action={sendEmail} id="contact-form">
                <div className="form-row">
                    <div className="message-column">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                        />
                    </div>
                    <div className="info-column">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />

                        <button type="submit">Send Message</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
