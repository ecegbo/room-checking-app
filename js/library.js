function database(){
  var rooms = [
          {id: 0, type : 1,name: "Meeting Room 1",status:0},
          {id: 1, type : 1,name: "Meeting Room 2",status:0},
          {id: 2, type : 2,name: "Games Room 1",status:0},
          {id: 3, type : 2,name: "Games Room 2",status:0},
          
          {id: 4, type : 3,name: "Quiet-time Room 1",status:0},
          {id: 5, type : 3,name: "Quiet-time Room 2",status:0},
          {id: 6, type : 4,name: "Learning Room 1",status:0},
          {id: 7, type : 4,name: "Learning Room 1",status:0},
          {id: 8, type : 5,name: "Working Room 1",status:0},
          {id: 9, type : 5,name: "Working Room 1",status:0}
  ];
  
  return rooms;
}

function search(type_id,rooms){
  if(type_id == 1)
    return [rooms[0],rooms[1]];
  else if(type_id == 2)
    return [rooms[2],rooms[3]];
  else if(type_id == 3)
    return [rooms[4],rooms[5]];
  else if(type_id == 4)
    return [rooms[6],rooms[7]];
  else if(type_id == 5)
    return [rooms[8],rooms[9]];
  else
    return [];
  
}




