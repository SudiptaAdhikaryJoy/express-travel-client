import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import SignIN from './pages/SignIN/SignIN/SignIN';
import AuthProvider from './Context/AuthProvider';
import SignUp from './pages/SignIN/SignUp/SignUp';
import NewBlog from './pages/Dashboard/NewBlog/NewBlog';
import PrivateRoute from './pages/SignIN/PrivateRoute/PrivateRoute';
import DashboardDrawer from './pages/Dashboard/DashboardDrawer/DashboardDrawer';
import MyBlogs from './pages/Dashboard/MyBlogs/MyBlogs';
import AllBlogs from './pages/Dashboard/AllBlogs/AllBlogs';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AdminRoute from './pages/SignIN/AdminRoute/AdminRoute';
import Blog from './pages/Home/Blog/Blog';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/dashboard" element={<PrivateRoute><DashboardDrawer /></PrivateRoute>} >
              <Route path='/dashboard/myblogs' element={<MyBlogs />} />
              <Route path={`/dashboard/allblogs`} element={<AdminRoute><AllBlogs /></AdminRoute>} />
              <Route path={`/dashboard/newblog`} element={<NewBlog />} />
              <Route path={`/dashboard/make-admin`} element={<AdminRoute> <MakeAdmin /></AdminRoute>} />
            </Route>
            <Route path="signin" element={<SignIN />} />
            <Route path="signup" element={<SignUp />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
