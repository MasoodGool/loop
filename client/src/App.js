import React, { useMemo, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import WelcomePage from './Routes/WelcomePage';
import { UserContext } from './utils/UserContext';
import Dashboard from './Routes/Dashboard';

function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(()=> ({user, setUser}), [user, setUser]);

  return (
    <>
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Routes>
          {!user && (
            <Route path="/*" element={<WelcomePage />} />
          )}
          {user && (
          <Route path="/dashboard" element={<Dashboard/>} />  
          )}
          <Route path="*" element={<Navigate to={"/"} />}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App;