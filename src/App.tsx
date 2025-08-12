
import Product from "./pages/Product.tsx";
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
            <Product/>
        </div>
    );
};

export default App;
