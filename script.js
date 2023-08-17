function blank(){
  let boxes ="";
  for(let i=1; i<=9; i++){
    boxes += document.querySelector(`#box-${i}`).textContent ="";
  }
}

function fill()
{
  addEventListener("click", function(){
    console.log("click");
    alert("Please click again to start the game");
    let rv = "";

    rv = Math.floor(Math.random()*2)+1;

    document.querySelector("#body").addEventListener("click", function(details){
      
      let idValue = details.target.id;

      if(rv === 1)
      {
        document.querySelector(`#${idValue}`).
        textContent = "X";
        
      }else{
        // let idValue = details.target.id;
        document.querySelector(`#${idValue}`).
        textContent = "O";
      }
      
      // if(`#${idValue}` === "X")
      // {
      //   document.querySelector(`#${idValue}`).
      //   textContent = "O";

      // }else
      // {
      //   document.querySelector(`#${idValue}`).
      //   textContent = "X";
      // };

      switch(idValue)
      {
        case`#${idValue}`==="X":
        document.querySelector(`#${idValue}`).
        textContent = "O";
        break;

        case`#${idValue}`==="O":
        document.querySelector(`#${idValue}`).
        textContent = "X";
        break;
      };

    });
  
  });
}

blank();
fill();

