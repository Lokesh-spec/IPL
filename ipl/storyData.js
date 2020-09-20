function storyData(matches) {
    const result = {};
    for (let match of matches) {
        const matchId = match.id;
        const winner = match.winner;
        if (matchId >= 234 && matchId <= 308) {
            if (result[winner]) {
                result[winner] += 1;
            } else {
                result[winner] = 1;
            }
        }
    }
    return result;
}

module.exports = storyData;