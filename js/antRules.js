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
    ruleName : "cmvau #1",
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
    ruleName : "cmvau #2",
    rule : `<span class="haha" style="font-weight: 500;">Evidence of cytomegalovirus infection in the eye</span>
    <ol type="a"><li> positive PCR for cytomegalovirus on aqueous specimen</ol>`,
    variableNames: [`PCR CMV(+)`],
    variableValues: [POS_PCR_CMV],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues);
    }
}

const hsauRule_1 = {
    ruleName : "hsau #1",
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
    ruleName : "hsau #2",
    rule : `<span style="font-weight: 500;">Unilateral uveitis (unless there is a positive aqueous PCR for herpes simplex virus)</span><br>`,
    variableNames: ['Laterality','PCR HSV(+)'],
    variableValues: [LATERALITY,POS_PCR_CMV],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const hsauRule_3 = {
    ruleName : "hsau #3",
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
    ruleName : "vzvau #1",
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
    ruleName : "vzvau #2",
    rule : `<span style="font-weight: 500;">Unilateral uveitis (unless there is a positive aqueous PCR for varicella zoster virus)</span><br>`,
    variableNames: ['Laterality','PCR VZV(+)'],
    variableValues: [LATERALITY,POS_PCR_VZV],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const vzvauRule_3 = {
    ruleName : "vzvau #3",
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
    ruleName : "fus #1",
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
    ruleName : "fus #2",
    rule : `<span style="font-weight: 500;">Unilateral uveitis</span><br>`,
    variableNames: ['Laterality'],
    variableValues: [LATERALITY],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const fusRule_3 = {
    ruleName : "fus #3",
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
    ruleName : "fus #4",
    rule : `<span style="font-weight: 500;">Neither endotheliitis nor nodular, coin-shaped endothelial lesions</span><br>`,
    variableNames: ['Endotheliitis',`Endothelial Lesions`],
    variableValues: [ENDOTHELIITIS,ENDO_LESIONS],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const jiacauRule_1 = {
    ruleName : "jiacau #1",
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
    ruleName : "jiacau #2",
    rule : `<span style="font-weight: 500;">Chronic anterior uveitis or, if at initial diagnosis, uveitis is of insidious onset and asymptomatic/ minimally symptomatic</span><br>`,
    variableNames: ['Course',`Initial diagnosis`,`Onset`,`asymptomatic/mimimally symptomatic`],
    variableValues: [COURSE,FIRST_DIAGNOSIS,ONSET,SYMPTOMATIC],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues)
    }
}

const jiacauRule_3 = {
    ruleName : "jiacau #3",
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
    ruleName : "sau #1",
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
    ruleName : "sau #2",
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
    ruleName : "sau #3",
    rule : `<span style="font-weight: 500;">ASAS-defined spondyloarthritis (axial or peripheral) and/or HLA-B27-positive</span>`,
    variableNames: [`ASAS-defined spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [SPONDYLO_ARTH,POS_HLA_B27],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const sauRule_4 = {
    ruleName : "sau #4",
    rule : `<span style="font-weight: 500;">Chronic uveitis with both ASAS-defined spondyloarthritis (axial and peripheral) AND HLA-B27-positive</span>`,
    variableNames: [`Course`,`ASAS-defined spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [COURSE,SPONDYLO_ARTH,POS_HLA_B27],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues);
    }
}

const tinuRule_1 = {
    ruleName : "tinu #1",
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
    ruleName : "tinu #2",
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
    disList : cmvauList,
    rules : [cmvauRule_1,cmvauRule_2],
    dxName : "Cytomegalovirus Anterior Uveitis",
    dxString : 'CMVAU',
    ex : cmvauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const hsau = {
    disList : hsauList,
    rules : [hsauRule_1,hsauRule_2,hsauRule_3],
    dxName : "Herpes Simplex Anterior Uveitis",
    dxString : 'HSAU',
    ex : hsauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,this,this.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,this,this.checkResult);
    }
}

const vzvau = {
    disList : vzvauList,
    rules : [vzvauRule_1,vzvauRule_2,vzvauRule_3],
    dxName : "Varicella Zoster Virus Anterior Uveitis",
    dxString : 'VZVAU',
    ex : vzvauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,cmvau,cmvau.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,cmvau,cmvau.checkResult);
    }
}

const fus = {
    disList : fusList,
    rules : [fusRule_1,fusRule_2,fusRule_3,fusRule_4],
    dxName : "Fuchs Uveitis Syndrome",
    dxString : 'FUS',
    ex : fusEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,cmvau,cmvau.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,cmvau,cmvau.checkResult);
    }
}

const jiacau = {
    disList : jiacauList,
    rules : [jiacauRule_1,jiacauRule_2,jiacauRule_3],
    dxName : "Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis",
    dxString : 'JIACAU',
    ex : jiacauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,cmvau,cmvau.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,cmvau,cmvau.checkResult);
    }
}

const sau = {
    disList : sauList,
    rules : [sauRule_1,sauRule_2,sauRule_3,sauRule_4],
    dxName : "Spondyloarthritis/HLA-B27-associated Anterior Uveitis",
    dxString : 'SAU',
    ex : sauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,cmvau,cmvau.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,cmvau,cmvau.checkResult);
    }
}

const tinu = {
    disList : tinuList,
    rules : [tinuRule_1,tinuRule_2],
    dxName : "Tubulointerstitial Nephritis with Uveitis",
    dxString : 'TINU',
    ex : tinuEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,cmvau,cmvau.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,cmvau,cmvau.checkResult);
    }
}

/*const saau = {
    disList : cmvauList,
    rules : [cmvauRule_1,cmvauRule_2],
    dxName : "Cytomegalovirus Anterior Uveitis",
    dxString : 'CMVAU',
    ex : cmvauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,cmvau,cmvau.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,cmvau,cmvau.checkResult);
    }
}

const syau = {
    disList : cmvauList,
    rules : [cmvauRule_1,cmvauRule_2],
    dxName : "Cytomegalovirus Anterior Uveitis",
    dxString : 'CMVAU',
    ex : cmvauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    ruleIn : function() {
        ruleIn(this.disList,this,this.inResult);
    },
    ruleOut : function() {
        ruleOut(this.disList,cmvau,cmvau.outResult);
    },
    ruleCheck : function() {
        ruleCheck(this.disList,cmvau,cmvau.checkResult);
    }
}*/

function ruleIn(disList,dis,inResult){
    if(dis.rules){
        for(let i = 0; i < disList.inList.length; i++){
            for(let j = 0; j < dis.rules.length; j++){
                if(disList.inList[i]==dis.rules[j].ruleName){
                    inResult.push(dis.rules[j].rule);
                    inResult.push(dis.rules[j].userInput());
                }
            }
        }
    }
}

function ruleOut(disList,dis,outResult){
    if(dis.rules){
        for(let i = 0; i < disList.outList.length; i++){
            for(let j = 0; j < dis.rules.length; j++){
                if(disList.outList[i]==dis.rules[j].ruleName){
                    outResult.push(dis.rules[j].rule);
                    outResult.push(dis.rules[j].userInput());
                }
            }
        }
    }
}

function ruleCheck(disList,dis,checkResult){
    if(dis.rules){
        for(let i = 0; i < disList.checkList.length; i++){
            for(let j = 0; j < dis.rules.length; j++){
                if(disList.checkList[i]==dis.rules[j].ruleName){
                    checkResult.push(dis.rules[j].rule);
                    checkResult.push(dis.rules[j].userInput());
                }
            }
        }
    }
}

const antList = [cmvau,hsau,vzvau,fus,jiacau,sau,tinu]; 


for(let i = 0; i< antList.length; i++){
    antList[i].ruleIn();
    antList[i].ruleOut();
    antList[i].ruleCheck();
}

//document.getElementById('ruleIn-el').innerHTML = joinText(antList[0].inResult,"<br>");
//document.getElementById('ruleOut-el').innerHTML = joinText(antList[0].outResult,"<br>");
//document.getElementById('ruleCheck-el').innerHTML = joinText(antList[0].checkResult,"<br>");


if(document.getElementById('ruleIn-el')&&!document.getElementById('ruleOut-el')&&!document.getElementById('ruleCheck-el')){
    let d = getSavedData('disease');
    for(let i = 0; i < antList.length; i++){
        if(antList[i].dxName==d){
            document.getElementById('diagnosis-el').innerHTML = antList[i].dxName;
            document.getElementById('ruleIn-el').innerHTML = joinText(antList[i].inResult,"<br>");
            document.getElementById('exclusion-el').innerHTML = antList[i].ex;
        }
    }
}

if(document.getElementById('ruleOut-el')&&!document.getElementById('ruleIn-el')&&!document.getElementById('ruleCheck-el')){
    let d = getSavedData('disease');
    for(let i = 0; i < antList.length; i++){
        if(antList[i].dxName==d){
            document.getElementById('diagnosis-el').innerHTML = antList[i].dxName;
            document.getElementById('ruleOut-el').innerHTML = joinText(antList[i].outResult,"<br>");
        }
    }
}

if(document.getElementById('ruleCheck-el')&&document.getElementById('ruleIn-el')&&document.getElementById('ruleOut-el')){
    let d = getSavedData('disease');
    for(let i = 0; i < antList.length; i++){
        if(antList[i].dxName==d){
            document.getElementById('diagnosis-el').innerHTML = antList[i].dxName;
            if(antList[i].inResult.length!=0){
                document.getElementById('ruleIn-el').innerHTML = joinText(antList[i].inResult,"<br>");
            }
            if(antList[i].outResult.length!=0){
                document.getElementById('ruleOut-el').innerHTML = joinText(antList[i].outResult,"<br>");
            }
            if(antList[i].checkResult.length!=0){
                document.getElementById('ruleCheck-el').innerHTML = joinText(antList[i].checkResult,"<br>");
            }    
        }
    }
}

function passDiseaseName(v){
    sessionStorage.setItem(`disease`,v)
}