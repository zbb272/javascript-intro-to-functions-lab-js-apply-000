function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
<<<<<<< HEAD
  if(string.toLowerCase() === string){
    return "I can't hear you!"
  }
  else if(string.toUpperCase() === string){
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma."){
    return "I love you, too."
=======
  if(string.toLowerCase === string){
    return "I can't hear you!"
  }
  if(string.toUpperCase() === string){
    return "YES INDEED!"
  }
  if(string === "I love you, Grandma"){
    return "I love you too."
>>>>>>> 41fe423d628a5024600c4b8e6a6f7bbcb4d092a3
  }
}