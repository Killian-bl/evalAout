
import Router from "./router/Router.tsx";
import NavBar from "./components/header/NavBar.tsx";

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

const App = ({ searchQuery, setSearchQuery }: HeaderProps) => {
    return (
        <div className={"AppContainer"}>
            <NavBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <Router/>
        </div>
    );
};

export default App;
