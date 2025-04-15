import { useState } from "react";
import Login from "./components/Login";
import Signup from './components/Signup';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? <Login /> : <Signup />}
      <div className="flex justify-center mt-4">
        <button
        className="text-sm text-blue-600 underline"
        onClick={() => setShowLogin(!showLogin)}>
           {showLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
        </button>
      </div>
    </div>
  );
}

export default App;
