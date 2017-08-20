console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

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
    var request = XMLHttpRequest();
    
    // Make a request
    request.open('GET','http://sivachembati.imad.hasura-app.io/counter',true);
    request.send(null);
    
    // Capure the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequest.DONE) {
            if(request.response == 200) {
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
}