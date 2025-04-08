import { createBrowserRouter } from "react-router";
import  {SearchMovies} from "../components/pages/searchMovies";
import { Layout } from "../components/layout/layout";
import { SavedMovies } from "../components/pages/savedMovies";
import {QuizApp} from "../components/pages/quiz/index";
import {Navigation} from '../components/pages/ai/components/layouts/navigation'
import Chat from "../components/pages/ai/pages/chat/index"
import History from "../components/pages/ai/pages/history/index"
import Settings from "../components/pages/ai/pages/settings/index"
import Help from "../components/pages/ai/pages/help/index"
import NotFound from "../components/pages/ai/pages/not-found"
import {LoginPage} from "../components/pages/login/index"
import {RegisterPage } from "../components/pages/registration/index"

export const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <SearchMovies />,
        },
        {
            path: "savedMovies",
            element: <SavedMovies/> ,
          },
        {
          path: "quiz",
          element: <QuizApp/>,
        },
        {
          path: "login",
          element: <LoginPage/>
        },
        {
          path: "register",
          element: <RegisterPage/>
        },
        
        {
          path: "ai",
          element: <Navigation/>,
          children: [
            {
              index: true,
              element: <Chat />,
            },
            {
              path: "chat",
              element: <Chat />,
            },
            {
              path: "history",
              element: <History />,
            },
            {
              path: "settings",
              element: <Settings />,
            },
            {
              path: "help",
              element: <Help />,
            },
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
 