import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./page/create";
import Edit from "./page/edit";
import './App.css'

const App = () => {

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Create />,
    },
    {
      path: "/edit",
      element: <Edit />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App