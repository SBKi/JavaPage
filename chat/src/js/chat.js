"use strict"
const socket = io();
console.log(socket);




function send(){
    let nickname = document.getElementById('nickname').value;
    let chatinput = document.getElementById('chatting-input').value;
    const param = {
        name : nickname,
        msg : chatinput,
    }
    socket.emit("chatting",param)
}

socket.on("chatting",(data)=>{
    var li = document.createElement("li");
    li.innerText = `${data.name} -- ${data.msg}`;
    document.getElementById('list').appendChild(li);

    
    let chatinput = document.getElementById('chatting-input');
    chatinput.innerText="";

    console.log(data)

})