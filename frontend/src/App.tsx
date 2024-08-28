import { Route, Routes } from 'react-router-dom';

import { WorkWithUs } from './pages/WorkWithUs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
      </Routes>
    </>
  );
}

export default App;
