"use client";
import React, { useState } from "react";
import { sendEmail } from "@/app/actions";
import "./contact.scss";
export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessageSent(false);
        setErrorMessage("");

        const formData = new FormData(event.target);

        try {
            await sendEmail(formData);
            setMessageSent(true);
            console.log("Message sent, error not caught!");
        } catch (error) {
            setErrorMessage("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="form-container">
                {messageSent && (
                    <div className="success-message">Message sent!</div>
                )}
                {!messageSent && (
                    <form onSubmit={handleSubmit} id="contact-form">
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

                                <button type="submit" disabled={loading}>
                                    {loading
                                        ? "Sending..."
                                        : errorMessage
                                        ? "Error sending message!"
                                        : "Send Message"}
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}{" "}
        </>
    );
}
