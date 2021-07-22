
let trigger1=document.getElementById("consultar")
const display=()=>{
document.getElementById("consulta").style.display="block"
}
trigger1.addEventListener("click",display)

let trigger2=document.getElementById("retirar")
const display2=()=>{
document.getElementById("retiro").style.display="block"
}
trigger2.addEventListener("click",display2)

let trigger3=document.getElementById("depositar")
const display3=()=>{
document.getElementById("deposito").style.display="block"
}
trigger3.addEventListener("click",display3)


let triggerback=document.getElementById("mybntBack")
const myback=()=>{
    window.location.reload();
}
triggerback.addEventListener("click",myback)


monto=[

    ["1","2","3"],

    ["4","5","6"],

    ["7","8","9"],
        ["0"]
]


const test1=()=>{
    const n1=monto[0][0]
    console.log(n1)
}

var mybtn1=document.getElementById("mybtn1")
mybtn1.addEventListener("click",test1)



const test2=()=>{
    const n2=monto[0][1]
    console.log(n2)
    }
    
    var mybtn2=document.getElementById("mybtn2")
    mybtn2.addEventListener("click",test2)

    const test3=()=>{
        let n3=monto[0][2]
        console.log(n3)
        
        }
        
        var mybtn=document.getElementById("mybtn3")
        mybtn.addEventListener("click",test3)

        const test4=()=>{
            let n4=monto[1][0]
            console.log(n4)
            }
            
            var mybtn=document.getElementById("mybtn4")
            mybtn.addEventListener("click",test4)

            const test5=()=>{
                let n5=monto[1][1]
                console.log(n5)
                }
                
                var mybtn=document.getElementById("mybtn5")
                mybtn.addEventListener("click",test5)

                const test6=()=>{
                    let n6=monto[1][2]
                    console.log(n6)
                    }
                    
                    var mybtn=document.getElementById("mybtn6")
                    mybtn.addEventListener("click",test6)

                    const test7=()=>{
                        let n7=monto[2][0]
                        console.log(n7)
                        }
                        
                        var mybtn=document.getElementById("mybtn7")
                        mybtn.addEventListener("click",test7)

                        const test8=()=>{
                            n8=monto[2][1]
                            console.log(n8)
                            }
                            
                            var mybtn=document.getElementById("mybtn8")
                            mybtn.addEventListener("click",test8)

                            const test9=()=>{
                                n9=monto[2][2]
                                console.log(n9)
                                }
                                
                                var mybtn=document.getElementById("mybtn9")
                                mybtn.addEventListener("click",test9)
                                
                                const test=()=>{
                                    let n0=monto[3][0]
                                    console.log(n0)
                                    }
                                    
                                    var mybtn=document.getElementById("mybtn0")
                                    mybtn.addEventListener("click",test)
                            
                                    
