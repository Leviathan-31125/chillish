import React from 'react'

const Header = () => {
  return (
    <header style={{ padding: '20px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '10px' }}>Welcome to My Site</h1>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <li><a href="#home" style={{ color: '#FC6A34', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>Home</a></li>
          <li><a href="#classes" style={{ color: '#747474', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>Classes</a></li>
          <li><a href="#articles" style={{ color: '#747474', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>Articles</a></li>
          <li><a href="#about" style={{ color: '#747474', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold' }}>About Me</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header