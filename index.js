"use strict";
const fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", 
    "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

const stageEl=document.getElementById("stage-el")


gameStarts.addEventListener (  "click", function(){
        let group1=fighters[Math.floor(Math.random()*fighters.length)];
        let group2=fighters[Math.floor(Math.random()*fighters.length)

        ]
        stageEl.textContent=group1+" Vs"+group2
        
    })

    const fruits=["🍎","🍎","🍎","🍎","🍊","🍊","🍊","🍊","🍊","🍑","🍑","🍑","🍑",
        "🍌","🍌","🍌","🍌","🍌","🍌","🍌","🍊","🍊","🍑"]



let appleShelf=document.getElementById("apple=shelf")
let orangeShelf=document.getElementById("orange-shelf")
let bananaShelf=document.getElementById("banana-shelf")


    function fruitSort(){
        for(let fruits=i;i<fruits.length;i++){
            if(fruits[i]==="🍎"){
                appleShelf.textContent+="🍎"
            }
            else if(fruits[i]==="🍊"){
                orangeShelf.textContent+="🍊"
            }
            else if (fruits[i]===""){
                mangoShelf.textContent+=""
            }
else if(fruits[i]==="🍑"){
   burgerShelf.textContent+="🍑"
}

else if(fruits[i]==="🍌"){
    bananaShelf.textContent+="🍌"




        }
        
    }
    }
    fruitSort()