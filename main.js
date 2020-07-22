let noun = ["You hear a sound through the trees. It is getting closer. You feel fear in your soul. The soul that you will soon lose to the aproaching evil.", "The path is gone. You turn around to see that you are no longer familiar with where you are. You will never escape this wood."]



function promtFunction() {
    let nounResult = noun[Math.floor(Math.random() * noun.length)];
   
  

$("#prompt").html(nounResult)
}

