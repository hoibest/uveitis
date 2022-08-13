//////////////////////////////////////////////////////////////////////////////

let dxText = [];
let exText = [];
let possText = [];

//possible
for(let i = 0; i < antList.length; i++){
    for(let j = 0; j < possList.length; j++){
        if(antList[i].dxString==possList[j]){
            possText.push(`<a class="p-path" href="../HTML_result_page/possResult.html"><div onclick="passDiseaseName(this.innerText)" class=p-item>${antList[i].dxName}</div></a>`);
        }
    }
}
if(possText.length==0){
    possText.push(`<div class=p-item>N/A</div>`);
}

//classified
for(let i = 0; i < antList.length; i++){
    for(let j = 0; j < dxList.length; j++){
        if(antList[i].dxString==dxList[j]){
            dxText.push(`<a class="c-path" href="../HTML_result_page/dxResult.html"><div onclick="passDiseaseName(this.innerText)" class=c-item>${antList[i].dxName}</div></a>`);
        }
    }
}
if(dxText.length==0){
    dxText.push(`<div class=c-item>N/A</div>`);
}


//excluded
for(let i = 0; i < antList.length; i++){
    for(let j = 0; j < exList.length; j++){
        if(antList[i].dxString==exList[j]){
            exText.push(`<a class="e-path" href="../HTML_result_page/exResult.html"><div onclick="passDiseaseName(this.innerText)" class=e-item>${antList[i].dxName}</div></a>`);
        }
    }
}
if(exText.length==0){
    exText.push(`<div class=e-item>N/A</div>`);
}

let dxHTML = joinText(dxText,"");
let exHTML = joinText(exText,"");
let possHTML = joinText(possText,"");

document.getElementById('c-uveitides').innerHTML = dxHTML;
document.getElementById('p-uveitides').innerHTML = possHTML;
document.getElementById('e-uveitides').innerHTML = exHTML;


////////////////////////////////////////////////////////////////

