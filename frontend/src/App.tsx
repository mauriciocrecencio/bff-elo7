import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { WorkWithUs } from './pages/WorkWithUs';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/trabalhe-conosco" element={<WorkWithUs />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
