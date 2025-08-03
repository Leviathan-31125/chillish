import React from 'react'

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome to My Site</h1>
      <nav>
        <ul style={styles.navList}>
          <li><a href="#home" style={styles.link}>Home</a></li>
          <li><a href="#about" style={styles.link}>About Me</a></li>
          <li><a href="#classes" style={styles.link}>Classes</a></li>
          <li><a href="#articles" style={styles.link}>Articles</a></li>
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    padding: '20px',
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    marginBottom: '10px',
  },
  navList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  },
}

export default Header