import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About/About";
import AddPost from "./components/pages/AddPost/AddPost";
import EditPost from "./components/pages/EditPost/EditPost";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Post from "./components/pages/Post/Post";
import Posts from "./components/pages/Posts/Posts";
import Footer from "./components/views/Footer/Footer";
import Header from "./components/views/Header/Header";

const App = () => {
  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='/post/add' element={<AddPost />} />
          <Route path='/post/edit/:id' element={<EditPost />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};

export default App;