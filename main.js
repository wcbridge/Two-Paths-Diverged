let noun = ["You hear a sound through the trees. It is getting closer. You feel fear in your soul. The soul that you will soon lose to the aproaching evil.", "The path is gone. You turn around to see that you are no longer familiar with where you are. You will never escape this wood.", "THE EVIL! OH GOD THE EVIL!!!", "Your last words: Oh No!",
"The sky grows dark. It is coming closer. The dark sky itself is coming closer. Soon you will feel it's embrace, as your reality fades","Why are you here? You can not remember. How did you get here? Will anyone come to find you? Will you starve?"]



function promtFunction() {
    let nounResult = noun[Math.floor(Math.random() * noun.length)];
   
  

$("#prompt").html(nounResult)
}

