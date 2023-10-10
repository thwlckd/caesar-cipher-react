import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Progress from './components/Progress';
const Home = lazy(() => import('./components/Home'));
const Encryption = lazy(() => import('./components/Encryption'));
const Decryption = lazy(() => import('./components/Decryption'));

const router = createBrowserRouter([
  {
    path: '/caesar-cipher-react',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Progress />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'encryption',
        element: (
          <Suspense fallback={<Progress />}>
            <Encryption />
          </Suspense>
        ),
      },
      {
        path: 'decryption',
        element: (
          <Suspense fallback={<Progress />}>
            <Decryption />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
