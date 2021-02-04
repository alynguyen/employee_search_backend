// Utils for Search

// Search dataset for matching people
const exactSearch = async(peoples, names) => {
    let results = [];
    peoples.forEach(({ firstName, lastName }, idx) => {
        const fName = firstName.toLowerCase();
        const lName = lastName.toLowerCase();
        if (names.length > 1) {
            if ((names[0] == fName || names[0] == lName) && (names[1] == fName || names[1] == lName)) {
                results.push(peoples[idx]);
            }
        } else {
            if (names[0] == fName || names[0] == lName) {
                results.push(peoples[idx]);
            }
        }
    })
    return results;
}

const partialSearch = async(peoples, names) => {
    let results = [];
    peoples.forEach(({ firstName, lastName }, idx) => {
        const fName = firstName.toLowerCase();
        const lName = lastName.toLowerCase();
        if (names.length > 1) {
            if ((fName.includes(names[0]) || lName.includes(names[0])) && (fName.includes(names[1]) || lName.includes(names[1]))) {
                results.push(peoples[idx]);
            } 
        } else {
            for (let n in names) {
                if (fName.includes(names[n]) || lName.includes(names[n])) {
                    results.push(peoples[idx]);
                    break;
                }
            }
        }
    })
    return results;
}

module.exports = { exactSearch, partialSearch };