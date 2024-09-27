import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLogin = () => {
    setIsSignedIn(true);
  };

  const handleLogout = () => {
    setIsSignedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <Protected isSignedIn={isSignedIn}>
          <Dashboard onLogout={handleLogout} />
        </Protected>
    },
    {
      path: "/login", element: <Login onLogin={handleLogin} />
    }]);

  return (
    <div className="d-flex flex-column align-items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;