new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("505125121896480780")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('NTAzMjY3MDE0NDUwNjEwMjE3.DrYFXA.AfTopE0czjijO_HgM4rM3RuIBrg');
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء