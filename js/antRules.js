function inputText(arr1,arr2){
    if(arr1.length!=arr2.length){
        return;
    }
    let textArr = [];
    textArr.push(`<span style="font-weight:500;">Input</span> <ul style="font-style: italic; font-size: 0.9rem;">`);
    for(let i = 0; i < arr1.length; i++){
        let line = `<li>${arr1[i]}: <span style="color: blue;">${arr2[i]}</span>`
        textArr.push(line);
    }
    textArr.push(`</ul>`);
    return joinText(textArr,"");
}

function joinText(arr,slice){
    let text = arr.join(slice);
    return text;
}

const cmvauRule_1 = {
    rule : `<span class="haha" style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, anterior chamber inflammation should be present
    <li> no evidence of retinitis</ol>`,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`, `Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues);
    }
}

const cmvauRule_2 = {
    rule : `<span class="haha" style="font-weight: 500;">Evidence of cytomegalovirus infection in the eye</span>
    <ol type="a"><li> positive PCR for cytomegalovirus on aqueous specimen</ol>`,
    variableNames: [`PCR CMV(+)`],
    variableValues: [POS_PCR_CMV],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues);
    }
}

const hsauRule_1 = {
    rule : `<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation
    <li> no evidence of retinitis</ol>`,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE,RETINITIS],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}


const hsauRule_2 = {
    rule : `<span style="font-weight: 500;">Unilateral uveitis (unless there is a positive aqueous PCR for herpes simplex virus)</span><br>`,
    variableNames: ['Laterality','PCR HSV(+)'],
    variableValues: [LATERALITY,POS_PCR_CMV],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const hsauRule_3 = {
    rule : `<span style="font-weight: 500;">Evidence of herpes simplex infection in the eye</span>
    <ol type="a"><li>aqueous humor PCR positive for herpes simplex virus OR
    <li> sectoral iris atrophy in a patient ≤ 50 years of age OR
    <li> herpes simplex keratitis</ol>`,
    variableNames: [`PCR HSV(+)`,`Iris atrophy`,`Age`,`Keratitis`],
    variableValues: [POS_PCR_HSV,IRIS_ATROPHY,AGE,KERATITIS],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const vzvauRule_1 = {
    rule : `<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation
    <li> no evidence of retinitis</ol>`,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE,RETINITIS],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const vzvauRule_2 = {
    rule : `<span style="font-weight: 500;">Unilateral uveitis (unless there is a positive aqueous PCR for varicella zoster virus)</span><br>`,
    variableNames: ['Laterality','PCR VZV(+)'],
    variableValues: [LATERALITY,POS_PCR_VZV],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const vzvauRule_3 = {
    rule : `<span style="font-weight: 500;">Evidence of varicella zoster virus infection in the eye</span>
    <ol type="a"><li>aqueous humor PCR positive for varicella zoster virus OR
    <li> sectoral iris atrophy in a patient ≥ 60 years of age OR
    <li> concurrent or recent dermatomal Herpes zoster</ol>`,
    variableNames: [`PCR VZV(+)`,`Iris atrophy`,`Age`,`Dermatomal herpes zoster`],
    variableValues: [POS_PCR_VZV,IRIS_ATROPHY,AGE,DERM_HZ],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const fusRule_1 = {
    rule : `<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if vitreous cells are present, anterior chamber inflammation also should be present
    <li> no evidence of active retinitis</ol>`,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const fusRule_2 = {
    rule : `<span style="font-weight: 500;">Unilateral uveitis</span><br>`,
    variableNames: ['Laterality'],
    variableValues: [LATERALITY],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const fusRule_3 = {
    rule : `<span style="font-weight: 500;">Evidence of Fuchs uveitis syndrome</span>
    <ol type="a"><li> heterochromia OR
    <li> unilateral diffuse iris atrophy AND stellate keratic precipitates</ol>`,
    variableNames: [`Heterochromia`,`Iris atrophy`,`Keratic precipitates`,],
    variableValues: [HETEROCHROMIA,IRIS_ATROPHY,KP],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const fusRule_4 = {
    rule : `<span style="font-weight: 500;">Neither endotheliitis nor nodular, coin-shaped endothelial lesions</span><br>`,
    variableNames: ['Endotheliitis',`Endothelial Lesions`],
    variableValues: [ENDOTHELIITIS,ENDO_LESIONS],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const jiacauRule_1 = {
    rule : `<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation</ol>`,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const jiacauRule_2 = {
    rule : `<span style="font-weight: 500;">Chronic anterior uveitis or, if at initial diagnosis, uveitis is of insidious onset and asymptomatic/ minimally symptomatic</span><br>`,
    variableNames: ['Course',`Initial diagnosis`,`Onset`,`asymptomatic/mimimally symptomatic`],
    variableValues: [COURSE,FIRST_DIAGNOSIS,ONSET,SYMPTOMATIC],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const jiacauRule_3 = {
    rule : `<span style="font-weight: 500;">Juvenile idiopathic arthritis of the following subtypes</span>
    <ol type="a"><li>Oligoarthritis, persistent or extended OR
    <li>Rheumatoid factor negative polyarthritis OR
    <li>Juvenile psoriatic arthritis, other than psoriatic spondylitis</ol>`,
    variableNames: [`Oligoarthritis`,`RF-negative polyarthritis`,`Juvenile psoriatic arthritis`],
    variableValues: [OLIGO_ARTH,RF_NEG_POLY_ARTH,JUV_PSOR_ARTH],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const sauRule_1 = {
    rule : `<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if anterior vitreous cells are present, severity is less than anterior chamber inflammation</ol>`,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const sauRule_2 = {
    rule : `<span style="font-weight: 500;">Characteristic uveitis course</span>
    <ol type="a"><li> Acute or recurrent acute, unilateral or unilateral alternating course OR
    <li> Chronic course with a history of a recurrent acute, unilateral or unilateral alternating course evolving into chronic course</ol>`,
    variableNames: [`Course`,`Laterality`],
    variableValues: [COURSE,LATERALITY],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const sauRule_3 = {
    rule : `<span style="font-weight: 500;">ASAS-defined spondyloarthritis (axial or peripheral) and/or HLA-B27-positive</span>`,
    variableNames: [`ASAS-defined spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [SPONDYLO_ARTH,POS_HLA_B27],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const sauRule_4 = {
    rule : `<span style="font-weight: 500;">Chronic uveitis with both ASAS-defined spondyloarthritis (axial and peripheral) AND HLA-B27-positive</span>`,
    variableNames: [`Course`,`ASAS-defined spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [COURSE,SPONDYLO_ARTH,POS_HLA_B27],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const tinuRule_1 = {
    rule : `<span style="font-weight: 500;">Evidence of anterior uveitis</span>
    <ol type="a"><li> anterior chamber cells
    <li> if vitritis or choroiditis or retinal vascular changes are present, anterior chamber inflammation also should be present </ol>`,
    variableNames: [`Anterior chamber cells`,`Vitritis`,`Choroiditis`,`Anterior chamber inflammation`],
    variableValues: [ANT_CHAMBER_CELLS,VITRITIS,CHOROIDITIS,ANT_CHAMBER_FLARE],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const tinuRule_2 = {
    rule : `<span style="font-weight: 500;">Evidence of tubulointerstitial nephritis, either</span>
    <ol type="a"><li>Positive renal biopsy OR
    <li> Elevated urine β-microglobulin and either abnormal urine analysis or elevated serum creatinine </ol>`,
    variableNames: [`Renal biopsy(+)`,`Elevated urine β-microglobulin`,`Abnormal urine analysis`,`Elevated serum creatinine`],
    variableValues: [POS_RENAL_BIOPSY,EL_URINE_BM,AB_URINE_AN,EL_SERUM_CR],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const cmvau = {
    rules : [cmvauRule_1.rule,cmvauRule_1.userInput(),
        cmvauRule_2.rule,cmvauRule_2.userInput()],
    dxName : "Cytomegalovirus Anterior Uveitis",
    dxString : 'CMVAU',
    ex : cmvauEx
}

const antList = [cmvau]; 

function diagnosis(){
    const dx = JSON.parse(sessionStorage.dxList);
    for(let i = 0; i < dx.length; i++){
        for(let j = 0; j < antList.length; j++){
            if(antList[j].dxString==dx[i]){
                document.getElementById('ruleIn-el').innerHTML = joinText(antList[j].rules,"<br>");
                document.getElementById('diagnosis-el').innerHTML = antList[j].dxName;
                document.getElementById('exclusion-el').innerHTML = antList[j].ex;
            }
        }
    }
}

diagnosis();





