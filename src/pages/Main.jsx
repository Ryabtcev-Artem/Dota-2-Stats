import Search from "../components/Search/Search";
import FilterHeroes from "../components/FilterHeroes/FilterHeroes";
import Heroes from "../components/Heroes/Heroes";
import { useState } from "react";
import RoleFilter from "../components/RoleFilter/RoleFilter";
import useDocumentTitle from "../hooks/useDocumentTitle";
export default function Main() {
    useDocumentTitle('Dota 2 Stats - All Heroes Info')
    const [inputText, setInputText] = useState("");
    const [sortInfo, setSortInfo] = useState("");
    const [sortRoles, setSortRoles] = useState(["active", "", "", "", "", ""]);
    return (
        <>
            <RoleFilter sortRoles={sortRoles} setSortRoles={setSortRoles} />
            <Search inputText={inputText} setInputText={setInputText} />
            <FilterHeroes sortInfo={sortInfo} setSortInfo={setSortInfo} />
            <Heroes
                sortRoles={sortRoles}
                sortInfo={sortInfo}
                inputText={inputText}
            />
        </>
    );
}
