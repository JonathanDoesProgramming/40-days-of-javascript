// 'this' inside an Constructor Function
const BasketballSkills = function () {
    this.movement = {
        run: ['sprint', 'walking'], 
    },
    this.offense = {
        shooting: 'One hand shooting',
        passing: 'Bounce pass',
    },
    this.defense = {
        blocking: 'One hand blocking',
        stealing: '2 man guard',
    }
}

const skill1 = new BasketballSkills();
const player1 = {};

// assign() method
Object.assign(player1, skill1)

// Aliases
const {
    movement: playerMovement, offense: playerOffense,
    defense: playerDefense
} = player1;

console.log(`
    Player 1: 
    Movement: ${playerMovement.run[0]},
    Offense: ${playerOffense.shooting},
    Defense: ${playerDefense.blocking}
    `)