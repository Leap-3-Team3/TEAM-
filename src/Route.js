import App from "./App";
import Page404 from "./pages/page_404";
import HomeScreen from "./pages/home_screen";
import BlogScreen from "./pages/blog_screen";
import BlogsScreen from "./pages/blogs_screen";
import { BrowserRouter, Routes , Route} from "react-router-dom";
function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App/>}>
          <Route path="" element={<HomeScreen/>}></Route>
          <Route path="blog/:id" element={<BlogScreen/>} />
          <Route path="blogs" element={<BlogsScreen/>} />
        </Route>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
