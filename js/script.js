function CriarBox(){
    const bloco = document.createElement("div");
        bloco.classList.add('box');
        box.style.width = alterarLargura();
        box.style.height = alterarAltura();
        box.style.marginTop = distanciaT();
        box.style.marginLeft = distanciaE()
        box.style.backgroundColor = Cor()

    const body = document.querySelector(body);
    body.appendChild(bloco);
}

function alterarLargura(){
    const lbl = document.querySelector("#lblLargura");
    const ipt = document.querySelector("#iptLargura");
    lbl.innerHTML = ipt.value;

    const box = document.querySelector("#box");
    box.style.width = ipt.value+"px";
}

function alterarAltura(){
    const lbl = document.querySelector("#lblAltura");
    const ipt = document.querySelector("#iptAltura");
    lbl.innerHTML = ipt.value;

    const box = document.querySelector("#box");
    box.style.height = ipt.value+"px";
}

function distanciaT(){
    const lbl = document.querySelector("#lblTopo");
    const ipt = document.querySelector("#iptTopo");
    lbl.innerHTML = ipt.value;

    const box = document.querySelector("#box");
    box.style.marginTop = ipt.value+"px";
}

function distanciaE(){
    const lbl = document.querySelector("#lblEsquerda");
    const ipt = document.querySelector("#iptEsquerda");
    lbl.innerHTML = ipt.value;

    const box = document.querySelector("#box");
    box.style.marginLeft = ipt.value+"px";
}

function Cor(){
    const iptR = document.querySelector("#iptR");
    const lblR = document.querySelector("#lblR");
    lblR.innerHTML = iptR.value;

    const iptG = document.querySelector("#iptG");
    const lblG = document.querySelector("#lblG");
    lblG.innerHTML = iptG.value;

    const iptB = document.querySelector("#iptB");
    const lblB = document.querySelector("#lblB");
    lblB.innerHTML = iptB.value;
    
    box.style.backgroundColor = "rgb("+iptR.value+", "+iptG.value+", "+iptB.value+" )";
}