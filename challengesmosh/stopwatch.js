

function Stopwatch() {
    
    let start = function () {
        return Date.now();
    }

    let stop = function () {
        return start();
    }

    let duration = start() - stop()

    Object.defineProperties(this, start, stop, duration,
        get: function () {
        return 
    })
    
};    

const sw = new Stopwatch();


console.log(sw.start());
