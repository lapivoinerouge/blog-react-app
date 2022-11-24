import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Post from "./components/features/Post/Post";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";
import Home from './components/pages/Home/Home';

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route path='/post/edit/:postId' element={<EditPost />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;