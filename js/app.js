//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

$(document).ready(function() {
   //capture click event on image
   //prevent image from opening the new tab
   var $img = $('<img>'); //set up the image adding variable
   var $overlay = $('<div id="overlay"></div>'); //create a variable that can be called throughout
   var $alt = $('<p></p>'); //setting up the paragraph for alt text in the image when selected
   
   
   
   $('body').append($overlay); //adds the above created variable to the body element
   $($overlay).append($img); // adds img tag into the overlay div
   $($overlay).append($alt); // adds a p tag to the overlay div
   
   
   //this function will remove the default tab opening on image click and set up the overlay
   $('#imageGallery a').on('click', function(event) {
        event.preventDefault(); // this prevents the a link element from opening in a new tab
        console.log('event prevented, yo!'); //capturing the click event
        
        var location = $(this).attr('href'); //set a local scope variable that contains the href(location) of the image clicked on
        console.log(location); //check if it was properly referenced
        
        var altText = $(this).children().attr('alt'); // grabbing the alt texdt of an image and assigning it to a local scope variable
        console.log(altText); //checking to see that the above variable actaully grabs the correct alt text
        $alt.text(altText); //adding the text within the glogal scope $alt variable (the p tags in the overlay)
        
        $img.attr('src', location); //set the attribute to src in the img element tag so it would pull it up in the overlay
        
        $($overlay)/*.show()*/.fadeToggle('slow'); //since the #overlay id is display:none in CSS, it is needed to be shown. I use the "fadeToggle" instead of show, for effect.
        
   });
    

   //now i want to hide the overlay again if clicking outside the image
   $($overlay).on('click', function(e) {
         var senderElement = e.target; /*this line is one i googled... (http://stackoverflow.com/questions/1369035/how-do-i-prevent-a-parents-onclick-event-from-firing-when-a-child-anchor-is-cli) it is used to stop the overlay from changing only if a child element is selected - in other words it only makes the div go away if you click OUTSIDE the image*/
         $($overlay).fadeToggle("slow"); // fade the overlay away to dissapear 
   });
   
   $('#overlay img').on('click', function(e) {
        e.stopPropagation(); // this is used entirely for keeping the overlay in place when the image is clicked - it works with the function above
   });








});