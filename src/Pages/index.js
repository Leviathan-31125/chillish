import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import Myprofile from '../Landing/MyProfile/MyProfile';

const About = () => {
    const styles = {
        container: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            color: '#333333',
            backgroundColor: '#FDFBF7',
            minHeight: '100vh',
            lineHeight: '1.6',
            paddingBottom: '80px',
        },
        section: {
            padding: '0 24px',
            maxWidth: '720px',
            margin: '0 auto',
        },
        headline: {
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '24px',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            color: '#111',
        },
        text: {
            fontSize: '1.125rem',
            color: '#444',
            marginBottom: '24px',
            lineHeight: '1.8',
        },
        divider: {
            width: '100%',
            height: '1px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            margin: '60px 0',
        },
        contactContainer: {
            marginTop: '60px',
            textAlign: 'center',
            padding: '48px 24px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.05)',
        },
        whatsappButton: {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            backgroundColor: '#25D366',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '600',
            marginTop: '16px',
            fontSize: '1.1rem',
        }
    };

    return (
        <div style={styles.container}>
            <Myprofile />
            <section style={styles.section}>
                <div style={styles.divider}></div>

                <h2 style={{ ...styles.headline, fontSize: '2rem', marginBottom: '32px' }}>My Mission</h2>
                <p style={styles.text}>
                    I want to help 1 million people reclaim their focus and build lives they are proud of. In a world of infinite distraction, the ability to do deep work is a superpower.
                </p>

                <div style={styles.contactContainer}>
                    <h2 style={{ ...styles.headline, fontSize: '2rem', marginBottom: '16px' }}>Let's Connect</h2>
                    <p style={styles.text}>
                        Have a question or want to work together? Feel free to reach out directly on WhatsApp.
                    </p>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" style={styles.whatsappButton}>
                        <FaWhatsapp />
                        Chat on WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;