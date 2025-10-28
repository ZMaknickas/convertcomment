import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../src/pages/Home';
import { Jada } from '../src/pages/Jada';
import { Form } from '../src/pages/Form';
import { PublicLayout } from '../src/templates/PublicLayout';

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PublicLayout/>}>
        <Route path='/' index element={<Home />} />
        <Route path='/java' index element={<Jada />} />
        <Route path='/form' index element={<Form />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}
