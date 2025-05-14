import "./HeroCard.scss";
export default function HeroCard(props) {
    const {
        heroName,
        heroImage,
        heroWinrateToMax,
        heroMatchesToMax,
        heroMatches,
        heroWinrateNumber,
    } = props;
    const winrateColor = heroWinrateNumber >= 50 ? "green" : "red";
    return (
        <div className="hero">
            <div className="hero__preview">
                <img
                    width="53"
                    height="30"
                    className="hero__image"
                    src={heroImage}
                    alt="hero image"
                />
                <p className="hero__name">{heroName}</p>
            </div>

            <div className="hero__winrate">
                <span className={`hero__winrate__number ${winrateColor}`}>
                    {heroWinrateNumber}%
                </span>
                <div className="hero__winrate-bar-wrapper">
                    <div
                        style={{ width: heroWinrateToMax + "%" }}
                        className="hero__winrate-bar"
                    ></div>
                </div>
            </div>
            <div className="hero__matches-wrapper">
                <p className="hero__matches">{heroMatches}</p>
                <div className="hero__matches-bar-wrapper">
                    <div
                        style={{ width: heroMatchesToMax + "%" }}
                        className="hero__matches-bar"
                    ></div>
                </div>
            </div>
        </div>
    );
}
