import './App.css';
import './index.css';
import Main from './components/Main';
import {
  Routes,
  Route,
} from "react-router-dom";
import ProjectInfo from './components/ProjectInfo';
function App() {
  return (

    <>

      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/home' element={<Main />} />
        <Route path='/projectinfopage/:PName' element={<ProjectInfo />} />

      </Routes>

    </>
  );
}

export default App;
