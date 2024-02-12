import { Toaster } from 'react-hot-toast'
import { useRoutes } from 'react-router-dom'
import routes from './app/routes'

function App() {
  const showRoutes = useRoutes(routes)

  return (
    <div >
      <Toaster position='top-right' />
      <div>
        {showRoutes}
      </div>
    </div>
  );
}

export default App;
