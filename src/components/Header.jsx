import React from 'react';

const Header = () => {
  return (
    <header className="brand-header" style={{ textAlign: 'center', padding: '60px 20px 20px' }}>
      <div style={{ 
        fontSize: '0.8rem', 
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
    </header>
  );
};

export default Header;
