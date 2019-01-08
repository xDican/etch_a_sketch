

let squares = 16;//just to test size
let randomColor = false;

const container = document.getElementById('wrapper');
//creates grid
const div = document.createElement('div') ;
div.id ='grid';
container.appendChild(div);

//fills grid on load (look up for another way)
    for(i=0; i<(squares*squares); i++){
        var li = document.createElement('div');
        li.classList.add ('square');
        li.style.width = 500/squares;
        li.style.height = 500/squares;
        div.appendChild(li);
    }

//fills grid
function fill(){
    for(i=0; i<(squares*squares); i++){
        var li = document.createElement('div');
        li.classList.add ('square');
        li.style.width = 500/squares;
        li.style.height = 500/squares;
        div.appendChild(li);
    }
};

//deletes all the squares on the grid
function deleteSquares(){
    let grid = document.getElementById('grid');
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
};

//Clear button on click
 let clear = document.getElementById('clear');
 clear.addEventListener('click',function(){ 
    do{
        squares = prompt("How many squares you want? Must be more than 10 and less than 130");
        if(squares==null){
            squares = 16;
        }
    }while(squares>130 || squares <10 || !isNumber(squares));
    randomColor = false;
    deleteSquares();
    fill();
 });

 //Random button on click
 let random = document.getElementById('random');
 random.addEventListener('click',function () {
    do{
        squares = prompt("How many squares you want? Must be more than 10 and less than 130");
        if(squares==null){
            squares = 16;
        }
    }
    while(squares>130 || squares <10 || !isNumber(squares));
    randomColor = true;
    deleteSquares();
    fill();
 });

//change square color
let changecolor = (e) =>{
    if(e.target.getAttribute('class') == 'square'){
        if(randomColor){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            e.target.style.background = color;
        }else{
            e.target.style.background = 'white';
        }
        
    }
};
//change color
let test2 = document.getElementsByClassName('square');
Array.prototype.forEach.call(test2,function(){
    addEventListener('mouseover',changecolor);
});

function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};