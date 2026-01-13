import React from 'react';

const Header = () => {
  return (
    <header className="brand-header" style={{ textAlign: 'center', padding: '60px 20px 40px' }}>
      <div style={{ 
        fontSize: '0.75rem', 
        letterSpacing: '0.4em', 
        fontWeight: '700', 
        marginBottom: '10px',
        color: 'var(--color-texto-principal)' 
      }}>
        VIRTUAL STAGING SERVICES <br />
        <span style={{ 
          fontFamily: 'var(--fuente-editorial)', 
          textTransform: 'none', 
          fontStyle: 'italic',
          letterSpacing: '0.05em',
          fontSize: '1.2rem',
          fontWeight: 'normal'
        }}>
          curated by M. Hagerman
        </span>
      </div>
      <div style={{ 
        marginTop: '25px', 
        fontSize: '0.65rem', 
        letterSpacing: '0.25em', 
        opacity: 0.8, 
        fontWeight: 'bold',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        display: 'inline-block',
        paddingTop: '15px'
      }}>
        TU PLATAFORMA DE STAGING INMOBILIARIO
      </div>
    </header>
  );
};

export default Header;
