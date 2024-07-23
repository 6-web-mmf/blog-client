import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import  Home  from "./pages/Home";
import  Auth  from "./pages/Auth";
import Post from "./pages/Post";
import Layout from "./components/Layout/Layout";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/post/:postId",
                element: <Post />
            },
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    }
    ,
    {
        path: "*",
        element: <NotFound />
    }
])