import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './Store/Store';
import Loader from './Shared/Loader/Loader';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';


const App = () => {
    const loader = useSelector((state: RootState) => state.loader.isLoading);  
    return (
        <div>
            { loader && <Loader />}
            <RouterProvider router={router} />

        </div>
    );
};

export default App;
