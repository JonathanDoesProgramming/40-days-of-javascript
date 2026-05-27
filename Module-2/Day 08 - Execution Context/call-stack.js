console.log('Inside Global Execution Context');
var a = 5;
function testMe() {
    console.log('Inside testMe Execution Context')
    var b = 10;
    var user = {
        name: 'tapas',
        country: 'India'
    }
    function testAgain() {
        console.log('Inside testAgain Execution Context');
        console.log('Exiting testAgain Execution Context');
    }
    testAgain();
    console.log('Exiting testMe Execution Context');
}
testMe();
console.log('Exiting Global Execution Context');

/*
GEC:
    CP:
        a: undefined
        testMe: f() in memory
    EP:
        a: 5
        testMe: Execute
            FEC(for testMe()):
                CP:
                    b: undefined
                    user: undefined
                    testAgain: f() in memory
                EP: 
                    b: 10
                    user: {name: 'tapas' ...}
                    testAgain: Execute
                        FEC(for testAgain())
                            CP:

                            EP:
*/