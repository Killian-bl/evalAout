import NavBar from "../../components/header/NavBar.tsx";

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
    return (

        <NavBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
        />

    );
};

export default Header;