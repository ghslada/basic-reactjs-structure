import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Users } from "./pages/Users";
import { Tweets } from "./pages/Tweets";

export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/users" element={<Users/>}/>
                <Route path="/tweets" element={<Tweets/>}/>
            </Routes>
        </Router>
    );
}