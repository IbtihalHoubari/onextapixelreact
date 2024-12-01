import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import BlogsContainer from './components/BlogsContainer';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <Title />
            <BlogsContainer />
            <Footer />
        </div>
    );
};

export default App;

