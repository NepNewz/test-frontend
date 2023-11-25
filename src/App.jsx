import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./Create";
import Edit from "./Edit";
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