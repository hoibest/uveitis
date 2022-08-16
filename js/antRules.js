function inputText(arr1,arr2,href){
    if(arr1.length!=arr2.length){
        return;
    }
    let textArr = [];
    textArr.push(`<span style="font-weight:500;">User Input</span> <ul style="font-style: italic; font-size: 0.9rem;">`);
    for(let i = 0; i < arr1.length; i++){
        let line = `<li><a class="your-input" href=${href[i]}>${arr1[i]}</a>: <span style="color: blue;">${arr2[i]}</span>`
        textArr.push(line);
    }
    textArr.push(`</ul>`);
    return joinText(textArr,"");
}

function joinText(arr,slice){
    let text = arr.join(slice);
    return text;
}

const html_1 = "../diagnosis1.html";
const html_2 = "../diagnosis2.html";
const html_3 = "../diagnosis3.html";
const html_4 = "../diagnosis4.html";
const html_5 = "../diagnosis5.html";

const cmvauRule_1 = {
    ruleName : "cmvau #1",
    rule : cmvauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`, `Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    href: [html_2,html_3,html_2,html_3],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href);
    }
}

const cmvauRule_2 = {
    ruleName : "cmvau #2",
    rule : cmvauRule_2_html,
    variableNames: [`PCR CMV(+)`],
    variableValues: [POS_PCR_CMV],
    href: [html_5],
    userInput : function(){
        return inputText(this.variableNames, this.variableValues,this.href);
    }
}

const hsauRule_1 = {
    ruleName : "hsau #1",
    rule : hsauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE,RETINITIS],
    href: [html_2,html_3,html_2,html_3,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}


const hsauRule_2 = {
    ruleName : "hsau #2",
    rule : hsauRule_2_html,
    variableNames: ['Laterality','PCR HSV(+)'],
    variableValues: [LATERALITY,POS_PCR_CMV],
    href: [html_1,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href)
    }
}

const hsauRule_3 = {
    ruleName : "hsau #3",
    rule : hsauRule_3_html,
    variableNames: [`PCR HSV(+)`,`Iris atrophy`,`Age`,`Keratitis`],
    variableValues: [POS_PCR_HSV,IRIS_ATROPHY,AGE,KERATITIS],
    href: [html_5,html_2,html_1,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const vzvauRule_1 = {
    ruleName : "vzvau #1",
    rule :vzvauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE,RETINITIS],
    href: [html_2,html_3,html_2,html_3,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const vzvauRule_2 = {
    ruleName : "vzvau #2",
    rule : vzvauRule_2_html,
    variableNames: ['Laterality','PCR VZV(+)'],
    variableValues: [LATERALITY,POS_PCR_VZV],
    href: [html_1,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href)
    }
}

const vzvauRule_3 = {
    ruleName : "vzvau #3",
    rule :vzvauRule_3_html,
    variableNames: [`PCR VZV(+)`,`Iris atrophy`,`Age`,`Dermatomal herpes zoster`],
    variableValues: [POS_PCR_VZV,IRIS_ATROPHY,AGE,DERM_HZ],
    href: [html_5,html_2,html_1,html_4],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const fusRule_1 = {
    ruleName : "fus #1",
    rule : fusRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Retinitis`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,RETINITIS],
    href: [html_2,html_3,html_2,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const fusRule_2 = {
    ruleName : "fus #2",
    rule : fusRule_2_html,
    variableNames: ['Laterality'],
    variableValues: [LATERALITY],
    href: [html_1],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href)
    }
}

const fusRule_3 = {
    ruleName : "fus #3",
    rule : fusRule_3_html,
    variableNames: [`Heterochromia`,`Iris atrophy`,`Keratic precipitates`,],
    variableValues: [HETEROCHROMIA,IRIS_ATROPHY,KP],
    href: [html_2,html_2,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const fusRule_4 = {
    ruleName : "fus #4",
    rule : fusRule_4_html,
    variableNames: ['Endotheliitis',`Endothelial Lesions`],
    variableValues: [ENDOTHELIITIS,ENDO_LESIONS],
    href: [html_2,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href)
    }
}

const jiacauRule_1 = {
    ruleName : "jiacau #1",
    rule : jiacauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE],
    href: [html_2,html_3,html_2,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const jiacauRule_2 = {
    ruleName : "jiacau #2",
    rule : jiacauRule_2_html,
    variableNames: ['Course',`Initial diagnosis`,`Onset`,`asymptomatic/mimimally symptomatic`],
    variableValues: [COURSE,FIRST_DIAGNOSIS,ONSET,SYMPTOMATIC],
    href: [html_1,html_1,html_1,html_1],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href)
    }
}

const jiacauRule_3 = {
    ruleName : "jiacau #3",
    rule : jiacauRule_3_html,
    variableNames: [`Oligoarthritis`,`RF-negative polyarthritis`,`Juvenile psoriatic arthritis`],
    variableValues: [OLIGO_ARTH,RF_NEG_POLY_ARTH,JUV_PSOR_ARTH],
    href: [html_4,html_4,html_4],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const sauRule_1 = {
    ruleName : "sau #1",
    rule : sauRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitreous cells`,`Anterior chamber inflammation`,`Vitreous haze`],
    variableValues: [ANT_CHAMBER_CELLS,VIT_CELLS,ANT_CHAMBER_FLARE,VIT_HAZE],
    href: [html_2,html_3,html_2,html_3],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const sauRule_2 = {
    ruleName : "sau #2",
    rule : sauRule_2_html,
    variableNames: [`Course`,`Laterality`],
    variableValues: [COURSE,LATERALITY],
    href: [html_1,html_1],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const sauRule_3 = {
    ruleName : "sau #3",
    rule : sauRule_3_html,
    variableNames: [`ASAS-defined spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [SPONDYLO_ARTH,POS_HLA_B27],
    href: [html_4,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const sauRule_4 = {
    ruleName : "sau #4",
    rule : sauRule_4_html,
    variableNames: [`Course`,`ASAS-defined spondyloarthritis`,`HLA-B27(+)`],
    variableValues: [COURSE,SPONDYLO_ARTH,POS_HLA_B27],
    href: [html_1,html_4,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const tinuRule_1 = {
    ruleName : "tinu #1",
    rule : tinuRule_1_html,
    variableNames: [`Anterior chamber cells`,`Vitritis`,`Choroiditis`,`Retinal Vascular Change`,`Anterior chamber inflammation`],
    variableValues: [ANT_CHAMBER_CELLS,VITRITIS,CHOROIDITIS,RET_VAS_CHANGES,ANT_CHAMBER_FLARE],
    href:[html_2,html_3,html_3,html_3,html_2],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
    }
}

const tinuRule_2 = {
    ruleName : "tinu #2",
    rule : tinuRule_2_html,
    variableNames: [`Renal biopsy(+)`,`Elevated urine β-microglobulin`,`Abnormal urine analysis`,`Elevated serum creatinine`],
    variableValues: [POS_RENAL_BIOPSY,EL_URINE_BM,AB_URINE_AN,EL_SERUM_CR],
    href: [html_5,html_5,html_5,html_5],
    userInput : function() {
        return inputText(this.variableNames,this.variableValues,this.href);
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
    link: "../anterior_uveitis/cmvau.html",
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
    link: "../anterior_uveitis/hsau.html",
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
    link: "../anterior_uveitis/vzvau.html",
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

const fus = {
    disList : fusList,
    rules : [fusRule_1,fusRule_2,fusRule_3,fusRule_4],
    dxName : "Fuchs Uveitis Syndrome",
    dxString : 'FUS',
    ex : fusEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    link: "../anterior_uveitis/fus.html",
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

const jiacau = {
    disList : jiacauList,
    rules : [jiacauRule_1,jiacauRule_2,jiacauRule_3],
    dxName : "Juvenile Idiopathic Arthritis-associated Chronic Anterior Uveitis",
    dxString : 'JIACAU',
    ex : jiacauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    link: "../anterior_uveitis/jiacau.html",
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

const sau = {
    disList : sauList,
    rules : [sauRule_1,sauRule_2,sauRule_3,sauRule_4],
    dxName : "Spondyloarthritis/HLA-B27-associated Anterior Uveitis",
    dxString : 'SAU',
    ex : sauEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    link: "../anterior_uveitis/sau.html",
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

const tinu = {
    disList : tinuList,
    rules : [tinuRule_1,tinuRule_2],
    dxName : "Tubulointerstitial Nephritis with Uveitis",
    dxString : 'TINU',
    ex : tinuEx,
    inResult : [],
    outResult : [],
    checkResult : [],
    link: "../anterior_uveitis/tinu.html",
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


if(document.getElementById('ruleIn-el')&&!document.getElementById('ruleOut-el')&&!document.getElementById('ruleCheck-el')){
    let d = getSavedData('disease');
    for(let i = 0; i < antList.length; i++){
        if(antList[i].dxName==d){
            document.getElementById('diagnosis-el').innerHTML = antList[i].dxName;
            document.getElementById('ruleIn-el').innerHTML = joinText(antList[i].inResult,"<br>");
            document.getElementById('exclusion-el').innerHTML = antList[i].ex;
            document.getElementById('see-full-classification-btn').setAttribute('href',antList[i].link);
        }
    }
}

if(document.getElementById('ruleOut-el')&&!document.getElementById('ruleIn-el')&&!document.getElementById('ruleCheck-el')){
    let d = getSavedData('disease');
    for(let i = 0; i < antList.length; i++){
        if(antList[i].dxName==d){
            document.getElementById('diagnosis-el').innerHTML = antList[i].dxName;
            document.getElementById('ruleOut-el').innerHTML = joinText(antList[i].outResult,"<br>");
            document.getElementById('see-full-classification-btn').setAttribute('href',antList[i].link);
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
            document.getElementById('see-full-classification-btn').setAttribute('href',antList[i].link);  
        }
    }
    
}

function passDiseaseName(v){
    sessionStorage.setItem(`disease`,v)
}