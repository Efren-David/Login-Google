import React, { useState } from 'react';
import { auth, providerGoogle, providerFacebook } from './Firebase-Config';

const AuthButton = () => {
  const [mensaje] = useState('');

  const iniciarSesionConGoogle = async () => {
    try {
      await auth.signInWithPopup(providerGoogle);
      console.log('Inicio de sesión exitoso con Google');
    } catch (error) {
      console.error('Error al iniciar sesión con Google', error);
      console.log('Error al iniciar sesión con Google');
    }
  };

  const iniciarSesionConFacebook = async () => {
    try {
      await auth.signInWithPopup(providerFacebook);
      console.log('Inicio de sesión exitoso con Facebook');
    } catch (error) {
      console.error('Error al iniciar sesión con Facebook', error);
      console.log('Error al iniciar sesión con Facebook');
    }
  };

  const cerrarSesion = async () => {
    try {
      await auth.signOut();
      console.log('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
      console.log('Error al cerrar sesión');
    }
  };

  return (
    <div>
      {auth.currentUser ? (
        <div>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
          <p>{mensaje}</p>
        </div>
      ) : (
        <div>
          <button onClick={iniciarSesionConGoogle}>Iniciar sesión con Google</button>
          <button onClick={iniciarSesionConFacebook}>Iniciar sesión con Facebook</button>
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
};

export default AuthButton;
