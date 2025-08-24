import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Route */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedRoute />}>
  <Route path="/profile/*" element={<Profile />} />
</Route>

        </Route>

        {/* ✅ Correct Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;