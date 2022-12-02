import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import SignUpForm1 from '../../Pages/SignupForm/SignupForm1/SignupForm1';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            { path: '/', element: <SignUpForm1></SignUpForm1> }
        ]
    }
])
export default router;