const amqplib = require("amqplib");

let channel, connection;

async function connectQueue() {
    try {
        connection = await amqplib.connect("amqp://localhost"); 
        //here protocol used is amqp which also built on top of tcp only, usually we see http

        channel = await connection.createChannel();
        //now we cannot have multiple connections, but we may need multiplexing for data transfer,
        //rabbitmq achieves it using channels, we can create multiple channels on one connection 
        //to support multiplexing

        await channel.assertQueue("noti-queue");
        //it is will check if a queue with this name is present or not, if not present, it will create it
    } catch(error) {
        console.log(error);
    }
}

async function sendData(data) {
    try {
        await channel.sendToQueue("noti-queue", Buffer.from(JSON.stringify(data)));

    } catch(error) {
        console.log("queue error", error);
    }
}

module.exports = {
    connectQueue,
    sendData
}