const Sports = function (name, numberOfPlayers) {
    this.name = name;
    this.numberOfPlayers = numberOfPlayers;
}

const basketball = new Sports('basketball', 5);
const badminton = new Sports('badminton', 1);
console.log(basketball);
console.log(badminton);