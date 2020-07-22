let noun = ["You hear a sound through the trees. It is getting closer. You feel fear in your soul. The soul that you will soon lose to the aproaching evil.", 
"The path is gone. You turn around to see that you are no longer familiar with where you are. You will never escape this wood.", 
"THE EVIL! OH GOD THE EVIL!!!", 
"Your last words: Oh No!",
"The sky grows dark. It is coming closer. The dark sky itself is coming closer. Soon you will feel it's embrace, as your reality fades","Why are you here? You can not remember. How did you get here? Will anyone come to find you? Will you starve?", 
"You didn't see the pit. You did see the spikes at the bottom, but by then it was too late. Goodnight!",
"You see something shining on the ground. When you get closer for a better look. You feel your soul leave your body. You are now something shining on the ground.",
"You'll never know what it was that got you",
"It is beautiful. You make it through the wood, and into the sunny meadow. Out in the open the sky stretches for miles. Only now do you see the beast. There is nowhere to run.",
"You can feel it watching you. You'll never know what it is, but it sees you. It is coming"]



function promtFunction() {
    let nounResult = noun[Math.floor(Math.random() * noun.length)];
   
  

$("#prompt").html(nounResult)
}

