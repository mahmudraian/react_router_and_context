
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Granpa from './Components/Granpa/Granpa';

import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import Order from './Components/Order/Order';

function App() {
const router=createBrowserRouter([
  {
    path:'/',element:<Main></Main>,children:[
      {
        path:'/home',
        loader:()=>fetch('tshirt.json'),
        
        element: <Home></Home>
      },
      {
        path:'order',element:<Order></Order>
      },
      {
        path:'about',element:<About></About>
      },
      {
        path:'granpa',element:<Granpa></Granpa>
      }
    ]
  }


])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
