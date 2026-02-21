import React from 'react';

const FocusAcademy = () => {
    // Minimalist styling configuration
    // These styles are designed to be clean, readable, and distraction-free
    const styles = {
        container: {
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
            color: '#333333',
            backgroundColor: '#ffffff', // Matching AboutSection white background
            minHeight: '100vh',
            lineHeight: '1.6',
        },
        section: {
            padding: '80px 24px',
            maxWidth: '960px',
            margin: '0 auto',
        },
        hero: {
            textAlign: 'center',
            padding: '140px 24px 100px',
        },
        headline: {
            fontFamily: 'Georgia, "Times New Roman", serif', // Serif for that "editorial" feel
            fontSize: '3.5rem',
            fontWeight: '800',
            marginBottom: '24px',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            color: '#111',
        },
        subheadline: {
            fontSize: '1.5rem',
            color: '#555',
            marginBottom: '32px',
            fontWeight: '400',
        },
        heroText: {
            fontSize: '1.125rem',
            color: '#555',
            maxWidth: '640px',
            margin: '0 auto 48px',
            lineHeight: '1.7',
        },
        buttonPrimary: {
            backgroundColor: '#000',
            color: '#fff',
            padding: '16px 40px',
            borderRadius: '50px', // Pill shape for a modern look
            fontSize: '1rem',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            margin: '0 8px',
            boxShadow: '0 4px 14px 0 rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease',
        },
        buttonSecondary: {
            backgroundColor: 'transparent',
            color: '#333',
            padding: '16px 40px',
            borderRadius: '50px',
            fontSize: '1rem',
            fontWeight: '600',
            border: '1px solid #ddd',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            margin: '0 8px',
            transition: 'all 0.2s ease',
        },
        sectionTitle: {
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '2.25rem',
            fontWeight: '600',
            marginBottom: '56px',
            textAlign: 'center',
            letterSpacing: '-0.02em',
            color: '#111',
        },
        gridThree: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
        },
        gridTwo: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '80px',
        },
        // New Card style for "Bento" grid look
        card: {
            backgroundColor: '#ffffff',
            padding: '40px 32px',
            borderRadius: '16px',
            border: '1px solid rgba(0,0,0,0.04)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
        },
        step: {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '40px',
        },
        stepNumber: {
            backgroundColor: '#000',
            color: '#fff',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            marginRight: '24px',
            flexShrink: 0,
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        listItem: {
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            color: '#444',
            fontSize: '1.05rem',
        },
        betaSection: {
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '24px',
            padding: '80px 24px',
            textAlign: 'center',
            marginTop: '80px',
        },
        founderText: {
            fontStyle: 'italic',
            fontSize: '1.2rem',
            color: '#555',
            marginBottom: '32px',
            lineHeight: '1.8',
        },
    };

    return (
        <div style={styles.container}>
            {/* 1. HERO SECTION */}
            <header style={styles.hero}>
                <h1 style={styles.headline}>Focus Academy</h1>
                <h2 style={styles.subheadline}>A structured 1-month online accountability program.</h2>
                <p style={styles.heroText}>
                    Distraction is the default. Deep work is the exception. <br />
                    We provide the structure, silence, and mutual support you need to reclaim your focus.
                </p>
                <div>
                    <button style={styles.buttonPrimary}>Join the Beta</button>
                    <button style={styles.buttonSecondary}>Learn More</button>
                </div>
            </header>

            {/* 2. THE PROBLEM SECTION */}
            <section style={styles.section}>
                <h3 style={styles.sectionTitle}>Why We Struggle</h3>
                <div style={styles.gridThree}>
                    <div style={styles.card}>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '1.1rem' }}>Working Alone Fails</h4>
                        <p style={{ color: '#666' }}>Without external accountability, it's too easy to negotiate with yourself and delay important tasks. Willpower is a finite resource.</p>
                    </div>
                    <div style={styles.card}>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '1.1rem' }}>Motivation is Unreliable</h4>
                        <p style={{ color: '#666' }}>Relying on "feeling like it" leads to inconsistency. Systems and habits beat motivation every time.</p>
                    </div>
                    <div style={styles.card}>
                        <h4 style={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '1.1rem' }}>Structure Works</h4>
                        <p style={{ color: '#666' }}>Social commitment and a defined container for work create a flow state that is difficult to achieve in isolation.</p>
                    </div>
                </div>
            </section>

            {/* 3. HOW FOCUS ACADEMY WORKS */}
            <section style={{ ...styles.section, backgroundColor: '#fff', width: '100%', maxWidth: '100%', padding: '100px 24px' }}>
                <h3 style={styles.sectionTitle}>How It Works</h3>
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <div style={styles.step}>
                        <div style={styles.stepNumber}>1</div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '1.1rem' }}>Show Up</h4>
                            <p style={{ color: '#666' }}>Join the live video call. Weekdays. 30 minutes. Camera on (optional), mic off.</p>
                        </div>
                    </div>
                    <div style={styles.step}>
                        <div style={styles.stepNumber}>2</div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '1.1rem' }}>Commit</h4>
                            <p style={{ color: '#666' }}>Share your single target for the session in the chat. Public commitment drives action.</p>
                        </div>
                    </div>
                    <div style={styles.step}>
                        <div style={styles.stepNumber}>3</div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '1.1rem' }}>Focus</h4>
                            <p style={{ color: '#666' }}>20 minutes of silent, deep work. No interruptions. No tab switching.</p>
                        </div>
                    </div>
                    <div style={styles.step}>
                        <div style={styles.stepNumber}>4</div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: '8px', fontSize: '1.1rem' }}>Reflect</h4>
                            <p style={{ color: '#666' }}>Short reflection on progress. Log off and continue your day with momentum.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 & 5. WHO THIS IS FOR / NOT FOR */}
            <section style={styles.section}>
                <div style={styles.gridTwo}>
                    <div>
                        <h3 style={{ ...styles.sectionTitle, textAlign: 'left', fontSize: '1.75rem', marginBottom: '32px' }}>Who This Is For</h3>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={{ marginRight: '12px' }}>•</span> Productive-age adults (18–35)</li>
                            <li style={styles.listItem}><span style={{ marginRight: '12px' }}>•</span> People who struggle with consistency</li>
                            <li style={styles.listItem}><span style={{ marginRight: '12px' }}>•</span> If you procrastinate but want structure</li>
                            <li style={styles.listItem}><span style={{ marginRight: '12px' }}>•</span> If you want gentle accountability</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ ...styles.sectionTitle, textAlign: 'left', fontSize: '1.75rem', marginBottom: '32px' }}>What This Is Not</h3>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={{ marginRight: '12px', color: '#999' }}>✕</span> Not a productivity course</li>
                            <li style={styles.listItem}><span style={{ marginRight: '12px', color: '#999' }}>✕</span> Not therapy or counseling</li>
                            <li style={styles.listItem}><span style={{ marginRight: '12px', color: '#999' }}>✕</span> Not mentoring or coaching</li>
                            <li style={styles.listItem}><span style={{ marginRight: '12px', color: '#999' }}>✕</span> Not an evaluation of your work</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. BETA INVITATION SECTION */}
            <section style={styles.section}>
                <div style={styles.betaSection}>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px' }}>Join the Beta Cohort</h3>
                    <p style={{ maxWidth: '600px', margin: '0 auto 40px', color: '#e5e5e5', fontSize: '1.1rem' }}>
                        This is the first version of Focus Academy. It is completely free.
                        In exchange, we ask for your honest feedback to help us build the best accountability community.
                    </p>
                    <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)', padding: '10px 20px', borderRadius: '50px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>
                        Limited Spots Available
                    </div>
                </div>
            </section>

            {/* 7. FOUNDER SECTION */}
            <section style={styles.section}>
                <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: '600', marginBottom: '32px' }}>From the Founder</h3>
                    <p style={styles.founderText}>
                        "I created Focus Academy because I believe that motivation is overrated.
                        As an educator, I've seen that the environment we create for ourselves determines our success more than our willpower.
                        This is the space I needed, so I built it."
                    </p>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Founder Name</div>
                    <div style={{ color: '#888', marginTop: '4px' }}>Educator & Coach</div>
                </div>
            </section>

            {/* 8. FINAL CTA */}
            <footer style={{ ...styles.section, textAlign: 'center', paddingBottom: '120px' }}>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '3rem', fontWeight: 'bold', marginBottom: '40px', letterSpacing: '-0.02em' }}>Ready to focus?</h2>
                <button style={styles.buttonPrimary}>Join Focus Academy</button>
            </footer>
        </div>
    );
};

export default FocusAcademy;