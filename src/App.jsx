import "./App.scss";
import Header from "./Header/Header";
import Search from "./Search/Search";
import FilterHeroes from "./FilterHeroes/FilterHeroes";
import Heroes from "./Heroes/Heroes";
import { useState } from "react";
import RoleFilter from "./RoleFilter/RoleFilter";
function App() {
    const [inputText, setInputText] = useState("");
    const [sortInfo, setSortInfo] = useState("")
    const [sortRoles,setSortRoles] = useState(["active", "", "", "", "", ""])
    return (
        <>
            <Header />
            <main>
                <RoleFilter sortRoles={sortRoles} setSortRoles={setSortRoles} />
                <Search inputText={inputText} setInputText={setInputText} />
                <FilterHeroes sortInfo={sortInfo} setSortInfo={setSortInfo} />
                <Heroes sortRoles={sortRoles} sortInfo={sortInfo} inputText={inputText} />
            </main>
        </>
    );
}

export default App;
