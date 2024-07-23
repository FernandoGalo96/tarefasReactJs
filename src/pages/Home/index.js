import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './index.css';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleEnter(e) {
    e.preventDefault();
   
    if (email !=='' && password !== '') {
        await signInWithEmailAndPassword(auth,email,password)
        .then(() => {
            navigate('/admin', {replace : true})
        })
    }
    else {
        alert ('Não foi possível cadastrar')
    }


   }

  return (
    <div className='home-container'>
      <h1>Cadastre-se:</h1>
      <span>Vamos criar sua conta:</span>

      <form className='form' onSubmit={handleEnter}>
        <input
          type="text"
          placeholder='Digite Seu Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          autoComplete='off'
          type="password"
          placeholder='*******'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>

      <Link className='botao-link' to="/">Já possui uma conta?</Link>
    </div>
  );
}


