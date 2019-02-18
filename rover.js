var rover = {direction: "N", x:0, y:0, travelLog: "(0,0)"}
var roverCommands = "rfffffffaaaaaffffffffff"
var obstacles =  ["(5,5)","(4,1)","(2,2)","(7,6)"]

/* checagem de letras do comando (só podem ser "f","r","l" ou "b (backwards)") */
function commandsChecking(command)
{
  var checking 
  if (command == "r" | command == "f" | command == "b" | command == "l")
  {
    checking = true
  }   
  else
  {
    checking = false
  }
  return checking
}

/* checando se próximo passo não tem obstáculo */
function obstaclesChecking(nextPosition, obstaclesPosition)
{
  var checking = true
  obstaclesPosition = obstacles
  for(i=0;i<obstaclesPosition.length;i++)
  {
    if(nextPosition == obstaclesPosition[i])
    {
      checking = false  
    }
  }
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  var directionsLeft = ["N","W","S","E"]
  var currentDirectionIndex = directionsLeft.indexOf(rover.direction)
  
  if (directionsLeft.indexOf(rover.direction) == 3){
    rover.direction = directionsLeft[0]
  }
  else{
  rover.direction = directionsLeft[currentDirectionIndex + 1]
  }
  console.log("New direction is: " + rover.direction)
}

function turnRight(rover){
  console.log("turnRight was called!");
  var directionsRight = ["N","E","S","W"]
  var currentDirectionIndex = directionsRight.indexOf(rover.direction)
  
  if (directionsRight.indexOf(rover.direction) == 3){
    rover.direction = directionsRight[0]
  }
  else{
  rover.direction = directionsRight[currentDirectionIndex + 1]
  }
  console.log("New direction is: " + rover.direction)
}

function moveForward(rover)
{
  console.log("moveForward was called")
  console.log("Current direction is: " + rover.direction)
  switch(rover.direction)
  {
    case "N":
      if (rover.y-1 <0 | rover.y-1 >10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.y--
      }
    break;
    case "E":
      if (rover.x+1 <0 | rover.x+1 >10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.x++
      }    
    break;
    case "S":
      if (rover.y+1 <0 | rover.y+1 >10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.y++
      }      
    break;
    case "W":
      if (rover.x-1 <0 | rover.x-1 > 10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.x--
      }
    break;
  }
console.log("Current position is: " + rover.x + "," + rover.y)
}

function moveBack(rover)
{
  console.log("moveBack was called")
  console.log("Current direction is: " + rover.direction)
  switch(rover.direction)
  {
    case "N":
      if (rover.y+1 <0 | rover.y+1 >10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.y++
      }
    break;
    case "E":
      if (rover.x-1 <0 | rover.x-1 >10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.x--
      }    
    break;
    case "S":
      if (rover.y-1 <0 | rover.y-1 >10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.y--
      }      
    break;
    case "W":
      if (rover.x+1 <0 | rover.x+1 > 10)
      {
        console.log("Can't move due to limit of boundaries")
      }
      else
      {
        rover.x++
      }
    break;
  }
console.log("Current position is: " + rover.x + "," + rover.y)
}

 function positionChange(commands,rover)
 {
  var numLetras = commands.length
  for (i=0;i<numLetras;i++)
    if(commandsChecking(commands[i]) == true)
    {
        {
          switch(commands[i])
          {
            case "l":
              turnLeft(rover);
              break;
            case "r":
              turnRight(rover);
              break;
            case "f":
              moveForward(rover);
              break;
            case "b":
            moveBack(rover);
            break;
          }
          /* console.log(rover.x+","+rover.y) */
          rover.travelLog = rover.travelLog + ";("+rover.x+","+rover.y+")" 
        }
    }    
 }

 positionChange(roverCommands,rover);

 console.log("Rover position tracking: "+rover.travelLog)
