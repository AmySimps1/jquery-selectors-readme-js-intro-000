// Write a function paragraphSelector that does not accept any parameters. The function should use an element selector to select the p tags in index.html and return those elements. (Note that we're using the plural because the selector will always return an array when used with tags, even if there's only one!)
function paragraphSelector(){
  return $('p');
}


function lastImageSelector(){
  return $('img:last');
}
function ninjaBabySelector(){
   return $("img[id='baby-ninja']")
}
// function ninjaBabySelector(){
//   return $("#baby-ninja")
// }

function divSelector(){
  return $('.pics');
}

function firstListItem(){
  return $('ul#pic-list li:first-child');
}