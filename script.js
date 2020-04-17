var bProjects = document.getElementById("bProjects"); /*Display only projects button*/
var bTools = document.getElementById("bTools"); /*Display only tools button*/
var bComponents = document.getElementById("bComponents");   /*Display only components button*/
var bEverything = document.getElementById("bEverything");   /*Display everything button*/


/*********************************************************************************/
/***************************************SIDEBAR**************************************/
/*HIDE ONLY THE ITEMS UNDER THE CATEGORY "PROJECTS"*/
function onlyProjects(){
    displayEverything();
    
    var myArray = document.querySelectorAll('div.item:not(.projects)');
    for (var i=0; i < myArray.length; i++){
        myArray[i].style.display = 'none'         
    }
}

bProjects.addEventListener("click", function(e){
    onlyProjects();
});


/*HIDE ONLY THE ITEMS UNDER THE CATEGORY "TOOLS"*/
function onlyTools(){
    displayEverything();

    var myArray = document.querySelectorAll('div.item:not(.tools)');
    for (var i=0; i < myArray.length; i++){
        myArray[i].style.display = 'none'         
    }
}

bTools.addEventListener("click", function(e){
    onlyTools();
});


/*HIDE ONLY THE ITEMS UNDER THE CATEGORY "COMPONENTS"*/
function onlyComponents(){
    displayEverything();

    var myArray = document.querySelectorAll('div.item:not(.components)');
    for (var i=0; i < myArray.length; i++){
        myArray[i].style.display = 'none'         
    }
}

bComponents.addEventListener("click", function(e){
    onlyComponents();
});

/*DISPLAY EVERY ITEM*/
function displayEverything(){    
    var items = document.getElementsByClassName('item');
    for(var i=0; i < items.length; i++){
        items[i].style.display = '';
    }
}

bEverything.addEventListener("click", function(e){
    displayEverything();
});

/*********************************************************************************/
/***************************************SIDEBAR***********************************/
var bCollapsSidebar = document.getElementById('bCollapsSidebar');
bCollapsSidebar.addEventListener("click", function(e){
    document.getElementById("sidebar").style.display = "none"
    document.getElementById("bOpenSidebar").style.display = "inline-block";
});

var bOpenSidebar = document.getElementById('bOpenSidebar');
bOpenSidebar.addEventListener("click", function(e){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("bOpenSidebar").style.display = "";
});


/********************************************************************************/
/******************************RESPONSIVE DESIGN*********************************/

function showMore(myButton){    //Hide or Display the item description
    if(myButton.parentNode.querySelector('.itemDescr').style.display === "inline"){
        myButton.parentNode.querySelector('.itemDescr').style.display='none';
        myButton.textContent="Show More";
    }
    else{
        myButton.parentNode.querySelector('.itemDescr').style.display="inline";
        myButton.textContent="Show Less";
    }
}