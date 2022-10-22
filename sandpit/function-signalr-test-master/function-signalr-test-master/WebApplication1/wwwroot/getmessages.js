function bindConnectionMessage(connection) {
    var messageCallback = function (name, message) {
        if (!message) return;
        // deal with the message
        console.log("message received:" + message);
    };
    // Create a function that the hub can call to broadcast messages.
    connection.on('broadcastMessage', messageCallback);
    connection.on('echo', messageCallback);
    connection.on('receive', messageCallback);
}

function onConnected(connection) {
    console.log("onConnected called");
}

var connection = new signalR.HubConnectionBuilder()
    .withUrl('/InfoRelay')
    .build();

bindConnectionMessage(connection);
connection.start()
    .then(function () {
        onConnected(connection);
    })
    .catch(function (error) {
        console.error(error.message);
    });
