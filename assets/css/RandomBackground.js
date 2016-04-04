// $(document).ready(function() {

//     var bgArray = ['Background1.jpg', 'Background2.jpg', 'Background3.jpg' , 'Background4.jpg'];
//     var bg = bgArray[Math.floor(Math.random() * bgArray.length)];

//     // $('body').css('background-image', bg);

//     // If you have defined a path for the images
//     var path = '../images/bg';

//     // then you can put it right before the variable 'bg'
//     $('body').css('background-image', path+bg);

// }); 



// $(document).ready(function() {

// var bgColorArray = ['../images/bg/Background1.jpg','../images/bg/Background2.jpg'],
//     selectBG = bgColorArray[Math.floor(Math.random() * bgColorArray.length)];
 
// $('Mybody').css('background-image', 'url(' + selectBG + ')')
// }); 




$(document).ready(function(){
    var classCycle=['imageCycle1','imageCycle2'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);

});