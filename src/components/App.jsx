import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/movies" element={<div>Mvies</div>} />
      </Routes>
    </>
  );
};
