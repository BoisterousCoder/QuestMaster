module.exports = function(io) {
    var peopleConected = new Wrapper(0, function() {
        console.log('there are now ' + peopleConected.get() + ' people conected');
    });
    //var ios = io.of('/gameRoom1');

    io.on('connection', function(socket) {
        //connect to client
        peopleConected.set(peopleConected.get() + 1);

        socket.on('disconnect', function() {
            peopleConected.set(peopleConected.get() - 1);
        });

        //brodcast other sent events
        socket.on('joinRequest', function(res) {
            io.emit('joinRequest', res);
        });
        socket.on('hostRequest', function(res) {
            io.emit('hostRequest', res);
        });

        socket.on('ready', function(res) {
            io.emit('ready', res);
        });
        socket.on('teamPieces', function(res) {
            io.emit('teamPieces', res);
        });
        socket.on('turn', function(res) {
            io.emit('turn', res);
        });

        socket.on('chat message', function(msg) {
            io.emit('chat message', msg);
        });
    });
};

function Wrapper(value, callback) {
    this.value = value;
    this.callback = callback;
    this.set = function(newValue) {
        this.value = newValue;
        this.callback();
    };
    this.get = function() {
        return this.value;
    };
}