import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Mainpage from "./pages/mainpage/Mainpage";
import Soundeffect from "./pages/soundeffect/Soundeffect";
import BgMusic from "./pages/bgmusic/BgMusic";
import Upload from "./pages/uploadpage/Upload";
import Signin from "./pages/signIn/Signin";
import Signup from "./pages/signUp/Signup";
import Mypage from "./pages/mypage/Mypage";
import Edit from "./pages/edit/Edit";
import NotFound from "./pages/notfound/Notfound";
import Pricing from "./pages/pricing/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Mainpage />,
      },
      {
        path: "sound",
        element: <Soundeffect />,
      },
      {
        path: "music",
        element: <BgMusic />,
      },
      {
        path: "upload",
        element: <Upload />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "mypage",
        element: <Mypage />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
