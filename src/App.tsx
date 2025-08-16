import { useState } from "react";
import Router from "./router/Router.tsx";
import Header from "./pages/Header/Header.tsx";


const App = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className={"AppContainer"}>
            <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Router searchQuery={searchQuery} />
        </div>
    );
};

export default App;
