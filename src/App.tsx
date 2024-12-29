import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddNewBlog from './Pages/AddNewBlog/AddNewBlog';
import { useSelector } from 'react-redux';
import { RootState } from './Store/Store';
import Loader from './Shared/Loader/Loader';

const App = () => {
    const loader = useSelector((state: RootState) => state.loader.isLoading);

    return (
        <div>

            { loader && <Loader />}
            <Header />
            <Title />
            <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-blog" element={<AddNewBlog />} />
            </Routes>
        </Router>
            <Footer />
        </div>
    );
};

export default App;

