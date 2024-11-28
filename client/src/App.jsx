import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Product from "./components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    childer: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
      }
    ]
  },
  
])

function App() {
  return
    <div>
      Hello
    </div>;
}

export default App;
