import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from './Store/Store';
import Loader from './Shared/Loader/Loader';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import { useTranslation } from 'react-i18next';


const App = () => {
    const loader = useSelector((state: RootState) => state.loader.isLoading);
    const { i18n } = useTranslation();
    
    
    
    return (
        <div>
            { loader && <Loader />}
            <RouterProvider router={router} />

        </div>
    );
};

export default App;
