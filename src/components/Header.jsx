// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="brand-header" style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
      <div style={{ 
        fontSize: '0.9rem', 
        letterSpacing: '0.3em', 
        fontWeight: '300', 
        marginBottom: '15px',
        color: 'var(--color-texto-principal)' 
      }}>
        VIRTUAL INTERIOR DESIGN SERVICES <br />
        <span style={{ 
          fontFamily: 'var(--fuente-editorial)', 
          textTransform: 'none', 
          fontStyle: 'italic',
          letterSpacing: '0.05em',
          fontSize: '1.1rem'
        }}>
          curated by M. Hagerman
        </span>
      </div>
      <div className="main-tagline" style={{ marginTop: '20px', fontSize: '0.75rem', opacity: 0.7 }}>
        TU PLATAFORMA DE STAGING INMOBILIARIO
      </div>
    </header>
  );
};

export default Header;
