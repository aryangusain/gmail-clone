import Navbar from "./components/Navbar"
import Inbox from "./components/Inbox";
import { createBrowserRouter, RouterProvider } from "react-router";
import Email from "./components/Email";
import Body from "./components/Body";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Compose from "./components/Compose";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <Inbox />
      },
      {
        path: '/email/:id',
        element: <Email />
      }
    ]
  }, 
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

function App() {

  return (
      <div className="flex flex-col h-screen bg-neutral-950">
        <Navbar />
        <RouterProvider router={appRouter} />
        <div className={`absolute duration-300 min-w-fit bottom-0 right-20 z-10`}>
          <Compose />
        </div>
      </div>
  )
}

export default App
