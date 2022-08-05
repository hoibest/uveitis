const hsauRule_1 = {
    rule : `<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation
    <li> no evidence of retinitis</ol>`,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE,RETINITIS],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

function inputText(arr1,arr2){
    if(arr1.length!=arr2.length){
        return;
    }
    let textArr = [];
    textArr.push(`<span style="font-weight:500;">Input</span> <ul>`);
    for(let i = 0; i < arr1.length; i++){
        let line = `<li>${arr1[i]}: <span style="color: blue;">${arr2[i]}</span>`
        textArr.push(line);
    }
    textArr.push(`</ul>`);
    return joinText(textArr,"");
}



const hsauRule_2 = {
    rule : `<span style="font-weight: 500;">Unilateral uveitis (unless there is a positive aqueous PCR for herpes simplex virus)</span><br>`,
    variableNames: ['Laterality','PCR HSV(+)'],
    variableValues: [LATERALITY,POS_PCR_CMV],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

function joinText(arr,slice){
    let text = arr.join(slice);
    return text;
}

document.getElementById('ruleIn-el').innerHTML = joinText([hsauRule_1.rule,hsauRule_1.userInput(),hsauRule_2.rule,hsauRule_2.userInput()],"<br>")