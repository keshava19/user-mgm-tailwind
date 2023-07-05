import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './common/Loader';

const User = lazy(() => import('./pages/User'));
const UserList = lazy(() => import('./pages/UserList'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path="/user"
            element={
              <Suspense fallback={<Loader />}>
                <User />
              </Suspense>
            }
          />
          <Route
            path="/user-list"
            element={
              <Suspense fallback={<Loader />}>
                <UserList />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
