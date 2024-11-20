import 'src/styles/global.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from 'src/pages/layout/layout';

const App = (): JSX.Element => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>
    }
  ]);

  return (
    <RouterProvider router={router}/>
)
}


export default App
