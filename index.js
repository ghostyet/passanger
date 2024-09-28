 let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", 
    "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl=document.getElementById("stage-el")


gameStarts.addEventListener (  "click", function(){
        let group1=fighters[Math.floor(Math.random()*fighters.length)];
        let group2=fighters[Math.floor(Math.random()*fighters.length)

        ]
        stageEl.textContent=group1+" Vs"+group2
        
    })