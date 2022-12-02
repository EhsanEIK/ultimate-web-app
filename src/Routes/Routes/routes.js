import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Login from "../../Pages/Login/Login/Login";
import SignUpForm1 from '../../Pages/SignupForm/SignupForm1/SignupForm1';
import SignupForm2 from "../../Pages/SignupForm/SignupForm2/SignupForm2";
import SignupForm3 from "../../Pages/SignupForm/SignupForm3/SignupForm3";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <SignUpForm1></SignUpForm1> },
            { path: '/signUpForm2', element: <SignupForm2></SignupForm2> },
            { path: '/signUpForm3', element: <SignupForm3></SignupForm3> },
            { path: '/login', element: <Login></Login> },
        ]
    }
])
export default router;