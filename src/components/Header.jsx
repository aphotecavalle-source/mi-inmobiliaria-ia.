// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="brand-header" style={{ textAlign: 'center', padding: '60px 20px 20px' }}>
      <div style={{ marginBottom: '10px' }}>
        {/* Aquí va el nombre principal con el crédito discreto */}
        CUARTEL INTERIOR DESIGN <span>BY M HAGERMAN</span>
      </div>
      <div className="main-tagline">
        Tu plataforma de staging inmobiliario
      </div>
    </header>
  );
};

export default Header;
