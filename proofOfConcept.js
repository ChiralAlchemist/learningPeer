
//api-key wsrk2w3o62sm7vi

console.log('hello World');

var peer = new Peer({ key : 'wsrk2w3o62sm7vi'});

peer.on('open', function (id){
  console.log('My peer ID is:' + id);
})

var connectTo = function (destPeer) {
  return peer.connect(destPeer);
}

var connections = {};

peer.on('connection', function (conn){
  console.log('you connected');
  console.log(conn);

  conn.on('data', function(data){
    console.log('Data is ', data); 
    console.log('From peer', conn.peer);
  });
  //var connection = connectTo(conn.peer);
  if(!connections[conn.peer]){
    
    connections[conn.peer] = connectTo(conn.peer);
  }
  //connections.push(connectTo(conn.peer));
});

// var addListeners = function (conn) {

// conn.on('open', function () {

//   conn.on('data', function (data){
//     console.log('Received data', data);
//   });



//   conn.send('hello');
// })
// }