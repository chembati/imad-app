console.log('Loaded!');

//Change the text of the main-text div
//var element = document.getElementById('main-text');
//element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('madi');

img.onclick = function() {
    var interval = setInterval(moveRight,50);
    //img.style.marginLeft = '100px';
};

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}


//Counter code

var button = document.getElementById('counter');
button.onclick = function() {
    
    // Create a request
    var request = new XMLHttpRequest();
    
    // Make a request
    request.open('GET','http://sivachembati.imad.hasura-app.io/counter',true);
    request.send(null);
    
    // Capure the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    }
    // Render the variable in the correct span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

//Submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    // Make a request to a server and and send the name
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
   alert("name:" + name)
    
    // Create a request
    var request = new XMLHttpRequest();
    
    // Make a request
    request.open('GET','http://sivachembati.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    
    // Capure the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                // Capture the list of names and render it as a list
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for(var i=0;i<<names.length;i++) {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML=list;
            }
        }
    };
    
    
   
};