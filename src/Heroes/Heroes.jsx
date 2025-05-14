import HeroCard from "../Hero/HeroCard";
import { useState } from "react";
import { useEffect } from "react";
import getHeroesInfo from "../heroes";
import "./Heroes.scss";
export default function Heroes(props) {
    const { sortRoles, sortInfo, inputText } = props;
    const [allHeroes, setAllHeroes] = useState([]);
    const [heroes, setHeroes] = useState([]);
    useEffect(() => {
        async function fetchHeroes() {
            const data = await getHeroesInfo();
            setAllHeroes(data);
            setHeroes(data);
        }
        fetchHeroes();
    }, []);
    useEffect(() => {
        const currRole = sortRoles.indexOf("active");
        if (currRole === 0) {
            const maxValues = localStorage.getItem("maxValues");
            const { maxMatches, maxWinrate } = JSON.parse(maxValues);
            for (let i = 0; i < allHeroes.length; i++) {
                allHeroes[i].heroMatches = allHeroes[i].heroAllMatches;
                allHeroes[i].heroWinrateNumber =
                    allHeroes[i].heroAllWinrateNumber;
                allHeroes[i].heroMatchesToMax =
                    (allHeroes[i].heroMatches / maxMatches) * 100;
                allHeroes[i].heroWinrateToMax =
                    (allHeroes[i].heroWinrateNumber / maxWinrate) * 100;
            }
            allHeroes.heroMatches = allHeroes.heroAllMatches;
            allHeroes.heroWinrateNumber = allHeroes.heroAllWinrateNumber;
        } else {
            let maxMatches = 0;
            let maxWinrate = 0;
            for (let i = 0; i < allHeroes.length; i++) {
                allHeroes[i].heroMatches =
                    allHeroes[i][`pos${currRole}Matches`];
                allHeroes[i].heroWinrateNumber =
                    allHeroes[i][`pos${currRole}Winrate`];
                if (allHeroes[i].heroWinrateNumber >= maxWinrate) {
                    maxWinrate = allHeroes[i].heroWinrateNumber;
                }
                if (allHeroes[i].heroMatches >= maxMatches) {
                    maxMatches = allHeroes[i].heroMatches;
                }
            }
            for (let heroObj of heroes) {
                heroObj.heroWinrateToMax =
                    (heroObj.heroWinrateNumber / maxWinrate) * 100;
                heroObj.heroMatchesToMax =
                    (heroObj.heroMatches / maxMatches) * 100;
            }
        }
        allHeroes.sort((a, b) => -a.heroWinrateNumber + b.heroWinrateNumber);
        const filtered = allHeroes.filter((hero) =>
            hero.heroName.toLowerCase().includes(inputText.toLowerCase())
        );
        let sorted = [...filtered];
        if (sortInfo[0] === "heroName") {
            if (sortInfo[1] === "up") {
                sorted.sort((a, b) =>
                    a[sortInfo[0]].localeCompare(b[sortInfo[0]])
                );
                setHeroes(sorted);
                return;
            }
            if (sortInfo[1] === "down") {
                sorted.sort((a, b) =>
                    b[sortInfo[0]].localeCompare(a[sortInfo[0]])
                );
                setHeroes(sorted);
                return;
            }
        }
        if (sortInfo[1] === "up") {
            sorted.sort((a, b) => a[sortInfo[0]] - b[sortInfo[0]]);
            setHeroes(sorted);
            return;
        } else if (sortInfo[1] === "down") {
            sorted.sort((a, b) => -a[sortInfo[0]] + b[sortInfo[0]]);
            setHeroes(sorted);
            return;
        }
        setHeroes(sorted);
    }, [inputText, allHeroes, sortInfo, sortRoles]);

    return (
        <section className="heroes centered container">
            <div className="heroes__explanation">
                Showing Pub Data from last 8 days
            </div>
            <div className="heroes-wrapper">
                {heroes.map((hero) => (
                    <HeroCard
                        key={hero.id}
                        heroName={hero.heroName}
                        heroImage={hero.heroImage}
                        heroWinrateNumber={hero.heroWinrateNumber}
                        heroMatches={hero.heroMatches}
                        heroMatchesToMax={hero.heroMatchesToMax}
                        heroWinrateToMax={hero.heroWinrateToMax}
                    />
                ))}
            </div>
        </section>
    );
}
