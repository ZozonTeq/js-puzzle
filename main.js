let btns = Array.from(new Array(3), () => new Array(3).fill(0));
const g = (nm)=>{
  return document.getElementsByClassName("num-ley-"+nm)[0];
}
let cou = 0;
for(let i = 0 ; i < 3 ; i++){
  for(let j = 0 ; j < 3 ; j++){
      cou++;
      btns[i][j] = g(cou)
  }
}

let sel1,sel2;
function c_col(){

}
let cclear = false;
for(let i = 0 ; i < btns.length;i++)
  for(let j = 0 ; j < btns[i].length;j++){
    btns[i][j].addEventListener("click", e => {
      cclear = false;
      e.target.style.backgroundColor = "#ff0000";
      if(sel1===undefined) sel1 = e.target;
      else if(sel2 ===undefined){
        let tmp = e.target.innerText;
        e.target.innerText = sel1.innerText;
        sel1.innerText = tmp;
        cclear  =true;
        sel1 = undefined;
        sel2 = undefined;
      }//二回目
      if(cclear == true){
        console.log(cclear);
        cclear = false;
        console.log("CLEARED");
        console.log(cclear);
        for(let i = 0 ; i < btns.length;i++) for(let j = 0 ; j < btns[i].length;j++) btns[i][j].style.backgroundColor = "#FFF";
      }
    });
  }


const c = (e) => {
    console.log("a")
}
