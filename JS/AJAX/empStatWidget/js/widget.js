var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState===4){
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1){
      if (employees[i].inoffice === true ) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', 'data/employees.json');
xhr.send();


var xhroom = new XMLHttpRequest();
xhroom.onreadystatechange = function () {
  if(xhroom.readyState===4){
    var room = JSON.parse(xhroom.responseText);
    var statusHTML = '<ul class="rooms">';
    for (var i=0; i< room.length; i += 1){
      if (room[i].available === true ) {
        statusHTML += '<li class="empty">';
      } else {
        statusHTML += '<li class="full">';
      }
      statusHTML += room[i].room;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusHTML;
  }
};
xhroom.open('GET', 'data/rooms.json');
xhroom.send();
