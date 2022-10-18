const JOGADOR_X = "X"
const JOGADOR_O = "O"

let checarVezDeJogar = true
const celulas = document.querySelectorAll(".celula")

const combinacoesVENCEDORAS =[
    [celula_0,celula_1,celula_2],
    [celula_3,celula_4,celula_5],
    [celula_6,celula_7,celula_8],
    [celula_0,celula_3,celula_6],
    [celula_1,celula_4,celula_7],
    [celula_2,celula_3,celula_8],
    [celula_0,celula_4,celula_8],
    [celula_2,celula_4,celula_6]
]

function jogar(id){
    const celula = document.getElementById(id)
    if(celula.textContent != "") return 0
    jogada = checarVezDeJogar ? JOGADOR_X : JOGADOR_O
    celula.textContent = jogada
    celula.classList.add(jogada)
    checarVencedor(jogada)
}

function checarVencedor(jogada){

    const vencedor = combinacoesVENCEDORAS.some((celulaCOMBINACAO) => {
        return celulaCOMBINACAO.every((celula) => {
            return celula.classList.contains(jogada)
        })
    })

    if(vencedor){
        encerarJOGO(jogada)
    }
    else if(checarEmpate()){
        encerarJOGO()
    }
    else{
        checarVezDeJogar = !checarVezDeJogar
    }

}

function encerarJOGO(vencedor = false){
    const fimDoJogo = document.getElementById("fimDoJogo")
    const mensagem = document.getElementById("mensagem-vencedor")
    const corpoMenu = document.getElementById("corpoMenu")

    fimDoJogo.style.display = "block"
    corpoMenu.style.display = "none"

    if(vencedor){
        mensagem.textContent = `Jogador Jogando com: ${vencedor} Venceu`
    }
    else{
        mensagem.textContent = `Você Empatou`
    }
    }
    

function checarEmpate(){
    let contarPosicao = 0
    const numeroDePosicaoDaCelulas = 9
    for( k in celulas) if(!isNaN(k)) {
        if(celulas[k].classList.contains(JOGADOR_O))
        contarPosicao++
        if(celulas[k].classList.contains(JOGADOR_X))
        contarPosicao++
    }

    return contarPosicao == numeroDePosicaoDaCelulas ? true : false
}