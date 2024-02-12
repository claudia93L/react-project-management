import { Main } from './components/Main';
import { Side } from './components/Side';
import { Form } from './components/Form';
import { Project } from './components/Project';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='flex flex-row w-full '>
      <Side></Side>
      <Routes>
        <Route path={'/'} element={<Main></Main>}></Route>
        <Route path={'/add-project'} element={<Form></Form>}></Route>
        <Route
          path={'/project/:projectID'}
          element={<Project></Project>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
