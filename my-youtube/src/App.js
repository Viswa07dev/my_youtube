import Body from "./components/Body";
import Head from "./components/Head";
import "./App.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer/>,
    },
    {
      path : "/watch",
      element: <WatchPage/>,
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
       <RouterProvider router={appRouter}/>

        {/**
         *
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonsList
         *    VideoContainer
         *      VideoCard
         *
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
