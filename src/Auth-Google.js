import React, { useState } from 'react';
import { auth, provider } from './Firebase-Config';

const GoogleAuthButton = () => {
  const [mensaje, setMensaje] = useState('');

  const iniciarSesionConGoogle = async () => {
    try {
      await auth.signInWithPopup(provider);
      setMensaje('Inicio de sesión exitoso con Google');
    } catch (error) {
      console.error('Error al iniciar sesión con Google', error);
      setMensaje('Error al iniciar sesión con Google');
    }
  };

  const cerrarSesion = async () => {
    try {
      await auth.signOut();
      setMensaje('Cierre de sesión exitoso');
    } catch (error) {
      console.error('Error al cerrar sesión', error);
      setMensaje('Error al cerrar sesión');
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
        <button onClick={iniciarSesionConGoogle}>Iniciar sesión con Google</button>
      )}
    </div>
  );
};

export default GoogleAuthButton;