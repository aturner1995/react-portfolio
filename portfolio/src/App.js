import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <div className='app'>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/blog/:id',
        element: <BlogPage />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/profile',
        element: <Profile />
      },
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
