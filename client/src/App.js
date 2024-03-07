import Layout from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import PostsPage from "./pages/PostsPage";
import PostPage from "./pages/PostPage";

import AddPostPage from "./pages/AddPostPage";
import EditPostPage from "./pages/EditPostPage";

function App() {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="posts" element={<PostsPage />}></Route>
            <Route path=":id" element={<PostPage />}></Route>
            <Route path="new" element={<AddPostPage />}></Route>
            <Route path=":id/edit" element={<EditPostPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="register" element={<RegisterPage />}></Route>
         </Routes>
      </Layout>
   );
}

export default App;
