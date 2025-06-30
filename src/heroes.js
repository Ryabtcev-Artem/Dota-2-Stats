async function getHeroesInfo(heroesTags) {
    const heroes = [];
    let maxWinrate = 0;
    let maxMatches = 0;
    try {
        const responseProTracker = await fetch(
            "https://dota2protracker.com/api/heroes/list"
        );        
        const responseOpenDota = await fetch(
            "https://api.opendota.com/api/heroStats"
        );
        const dataProTracker = await responseProTracker.json();
        const dataOpenDota = await responseOpenDota.json();
        for (let i = 0; i < dataOpenDota.length; i++) {
            const heroObj = {};
            heroObj.heroName = dataOpenDota[i].localized_name;
            heroObj.id = dataOpenDota[i].id;
            heroObj.heroImage = `https://cdn.cloudflare.steamstatic.com${dataOpenDota[i].img}`;
            heroObj.heroMatches = dataProTracker[i]["all matches"];
            heroObj.heroWinrateNumber = Number(
                (dataProTracker[i]["all winrate"] * 100).toFixed(2)
            );
            heroObj.heroAllMatches = dataProTracker[i]["all matches"];
            heroObj.heroAllWinrateNumber = Number(
                (dataProTracker[i]["all winrate"] * 100).toFixed(2)
            );
            heroObj.pos1Matches = dataProTracker[i]["pos 1 matches"];
            heroObj.pos2Matches = dataProTracker[i]["pos 2 matches"];
            heroObj.pos3Matches = dataProTracker[i]["pos 3 matches"];
            heroObj.pos4Matches = dataProTracker[i]["pos 4 matches"];
            heroObj.pos5Matches = dataProTracker[i]["pos 5 matches"];
            heroObj.pos1Winrate = Number(
                (dataProTracker[i]["pos 1 winrate"] * 100).toFixed(2)
            );
            heroObj.pos2Winrate = Number(
                (dataProTracker[i]["pos 2 winrate"] * 100).toFixed(2)
            );
            heroObj.pos3Winrate = Number(
                (dataProTracker[i]["pos 3 winrate"] * 100).toFixed(2)
            );
            heroObj.pos4Winrate = Number(
                (dataProTracker[i]["pos 4 winrate"] * 100).toFixed(2)
            );
            heroObj.pos5Winrate = Number(
                (dataProTracker[i]["pos 5 winrate"] * 100).toFixed(2)
            );

            if (heroObj.heroWinrateNumber >= maxWinrate) {
                maxWinrate = heroObj.heroWinrateNumber;
            }
            if (heroObj.heroMatches >= maxMatches) {
                maxMatches = heroObj.heroMatches;
            }
            heroes.push(heroObj);
        }
    } catch (err) {
        console.log(err);
    }
    for (let heroObj of heroes) {
        heroObj.heroWinrateToMax =
            (heroObj.heroWinrateNumber / maxWinrate) * 100;
        heroObj.heroMatchesToMax = (heroObj.heroMatches / maxMatches) * 100;
    }
    localStorage.setItem("maxValues", JSON.stringify({
        maxMatches: maxMatches,
        maxWinrate: maxWinrate
    }));
    return heroes.sort((a, b) => -a.heroWinrateNumber + b.heroWinrateNumber);
}
export default getHeroesInfo;
