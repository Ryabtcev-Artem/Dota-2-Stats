import "./FilterHeroes.scss";
import upDownArrow from "../assets/filterImages/up-down-arrow.svg";
import downArrow from "../assets/filterImages/down-arrow.svg";
import upArrow from "../assets/filterImages/up-arrow.svg";
import { useState } from "react";
export default function FilterHeroes(props) {
    const { sortInfo, setSortInfo } = props;
    const arrows = [upDownArrow, downArrow, upArrow];
    const directions = ["down", "up", "none"];
    const [arrowName, setArrowName] = useState(0);
    const [arrowWinrate, setArrowWinrate] = useState(0);
    const [arrowMatches, setArrowMatches] = useState(0);
    const changeArrowName = () => {
        setArrowMatches(0);
        setArrowWinrate(0);
        setArrowName(arrowName + 1);
        setSortInfo(["heroName", directions[arrowName % 3]]);
    };
    const changeArrowWintrate = () => {
        setArrowName(0);
        setArrowMatches(0);
        setArrowWinrate(arrowWinrate + 1);
        setSortInfo(["heroWinrateNumber", directions[arrowWinrate % 3]]);
    };
    const changeArrowMatches = () => {
        setArrowName(0);
        setArrowWinrate(0);
        setArrowMatches(arrowMatches + 1);
        setSortInfo(["heroMatches", directions[arrowMatches % 3]]);
    };
    return (
        <section className="filter container centered">
            <div className="filter__options">
                <button
                    className="filter__option hero-name"
                    onClick={changeArrowName}
                >
                    <span>Hero</span>
                    <img
                        width={20}
                        height={20}
                        src={arrows[arrowName % 3]}
                        alt=""
                    />
                </button>
                <button
                    className="filter__option hero-winrate"
                    onClick={changeArrowWintrate}
                >
                    <span>Winrate</span>
                    <img
                        width={20}
                        height={20}
                        src={arrows[arrowWinrate % 3]}
                        alt=""
                    />
                </button>
                <button
                    className="filter__option hero-matches"
                    onClick={changeArrowMatches}
                >
                    <span>Matches</span>
                    <img
                        width={20}
                        height={20}
                        src={arrows[arrowMatches % 3]}
                        alt=""
                    />
                </button>
            </div>
        </section>
    );
}
