import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Home from './Pages/Home/Home';
import Footer from './components/Footer';
import Layout from "./Layout/Layout";
import {  Routes , Route } from 'react-router-dom';
import AddNewBlog from './Pages/AddNewBlog/AddNewBlog';

const App = () => {
    return (
        <div>
            <Header />
            <Title />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/addnewblog' element={<AddNewBlog />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;

