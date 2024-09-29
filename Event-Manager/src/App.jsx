import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NewEvent from "./components/newEvent/NewEvent";
import Protected from "./components/protected/Protected";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState([]);

  const handleLogin = () => {
    setIsSignedIn(true);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]); 
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <Protected isSignedIn={isSignedIn}>
          <Dashboard events={events} onLogout={handleLogout}/>
        </Protected>
    },
    {
      path:"/new-event",
      element: 
      <Protected isSignedIn={isSignedIn}>
        <NewEvent addEvent={addEvent} />
      </Protected>
    },
    {
      path: "/login", element: <Login onLogin={handleLogin} />
    }]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;