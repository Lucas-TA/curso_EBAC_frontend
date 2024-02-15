import { useState } from "react";
import Perfil from "./components/perfil/Perfil";
import ReposList from "./components/repo/RepoList";

function App() {
  const [userName, setUserName] = useState('')

  return (
    <>
      <input type="text" onBlur={(e:any) => setUserName(e.target.value)}/>
      

      {userName.length > 4 && (
        <>
          <Perfil userName={userName} />
          <ReposList userName={userName} />
        </>
      )}
    </>
  )
}

export default App
