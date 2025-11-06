import { react } from 'react';
import dog from '../assets/border.jpg'

export function Home() {
    return (
    <main
      className="min-vh-100 d-flex align-items-center justify-content-center">
    <div
      className="container col-xxl-8 px-4 py-5 d-flex flex-column align-items-center text-center">
    <p>Welcome to my REACT project</p>
    <img
      src={dog}
      alt="border collie"
      style={{ transform: 'scale(0.5)' }}/>
    </div>
    </main>
    );
}
