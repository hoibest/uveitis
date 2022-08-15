const p = JSON.parse(sessionStorage.patient);

///////////////////////////////////////////////////////////////////////
const AGE = p.historyObj.age;
const FIRST_DIAGNOSIS = p.historyObj.firstDiagnosis;
const SYMPTOMATIC = p.historyObj.symptomatic;
const ONSET = p.historyObj.onset;
const COURSE = p.historyObj.course;
const LATERALITY = p.historyObj.laterality;
///////////////////////////////////////////////////////////////////////
const KERATITIS = p.ophthalExamObj.keratitis;
const KP = p.ophthalExamObj.kp;
const ANT_CHAMBER_CELLS = p.ophthalExamObj.antChamberCells;
const ANT_CHAMBER_FLARE = p.ophthalExamObj.antChamberFlare;
const IRIS_ATROPHY = p.ophthalExamObj.irisAtrophy;
const POS_SYNECHIAE = p.ophthalExamObj.posSynechiae;
const HETEROCHROMIA = p.ophthalExamObj.heterochromia;
const IRIS_NODULES = p.ophthalExamObj.irisNodules;
const ENDOTHELIITIS = p.ophthalExamObj.endotheliitis;
const ENDO_LESIONS = p.ophthalExamObj.endoLesions;
const VIT_CELLS = p.ophthalExamObj.vitCells;
const VIT_HAZE = p.ophthalExamObj.vitHaze;
const VITRITIS = p.ophthalExamObj.vitritis;
const CHOROIDITIS = p.ophthalExamObj.choroiditis;
const RETINITIS = p.ophthalExamObj.retinitis;
const RET_VAS_CHANGES = p.ophthalExamObj.retVasChanges;
///////////////////////////////////////////////////////////////////////
const DERM_HZ = p.pathologyObj.dermHZ;
const OLIGO_ARTH = p.pathologyObj.oligoArth;
const RF_NEG_POLY_ARTH = p.pathologyObj.rfNegPolyArth;
const JUV_PSOR_ARTH = p.pathologyObj.juvPsorArth;
const SPONDYLO_ARTH = p.pathologyObj.spondyloArth;
///////////////////////////////////////////////////////////////////////
const POS_PCR_CMV = p.labObj.posPcrCmv;
const POS_PCR_HSV = p.labObj.posPcrHsv;
const POS_PCR_VZV = p.labObj.posPcrVzv;
const POS_HLA_B27 = p.labObj.posHlaB27;
const POS_RENAL_BIOPSY = p.labObj.posRenalBiopsy;
const EL_URINE_BM = p.labObj.elUrineBM;
const AB_URINE_AN = p.labObj.abUrineAn;
const EL_SERUM_CR = p.labObj.elSerumCr;


const TRUE = 1;
const FALSE = 0;
const IDK = 2;
const dk = `Don't know`

class ruleList {
    inList = [];
    outList = [];
    checkList = [];
};

let dxList = [];
let exList = [];
let possList = [];

function is(val,ans){
    if(val==ans){
        return TRUE;
    }
    else if(val==dk){
        return IDK;
    }
    else {return FALSE;}
}

function numIs(val){
    if(val > 0){
        return TRUE;
    }
    else if(val==0){
        return FALSE;
    }
    else{
        return IDK;
    }
}

let cmvauList = new ruleList();
let hsauList = new ruleList();
let vzvauList = new ruleList();
let fusList = new ruleList();
let jiacauList = new ruleList();
let sauList = new ruleList();
let tinuList = new ruleList();

function cmvauRuleOne(){
    let rule = 'cmvau #1';
    let disList = cmvauList;
    let a = IDK; let b = IDK; let c = IDK;
    a = numIs(ANT_CHAMBER_CELLS);
    if(VIT_CELLS > 0){
        if(ANT_CHAMBER_FLARE != dk){
            if(ANT_CHAMBER_FLARE > 0){
                b = TRUE;
            }
            else{
                b = FALSE;
            }
        }
        else {
            b = IDK;
        }
    }
    else if(VIT_CELLS==0){
        b = TRUE;
    }
    else{
        b = IDK;
    }
    c = is(RETINITIS,"no")

    if(a==FALSE||b==FALSE||c==FALSE){disList.outList.push(rule);}
    else if(a==TRUE&&b==TRUE&&c==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);console.log("e");}
}

function cmvauRuleTwo(){
    let rule = 'cmvau #2';
    let disList = cmvauList;
    let a = IDK;

    a = is(POS_PCR_CMV,"yes")
    console.log(a)

    if(a==FALSE){disList.outList.push(rule);console.log("false")}
    else if(a==TRUE){disList.inList.push(rule); console.log("true")}
    else{disList.checkList.push(rule);console.log("check")}
}

function cmvauDiagnosis(result){
    let disList = cmvauList;
    cmvauRuleOne();
    cmvauRuleTwo();
    if(disList.outList.includes('cmvau #1')||disList.outList.includes('cmvau #2')){
        exList.push('CMVAU')
    }
    else if(disList.inList.includes('cmvau #1')&&disList.inList.includes('cmvau #2')){
        dxList.push('CMVAU')
    }
    else{
        possList.push('CMVAU')
    }
}

function hsauRuleOne(){
    let rule = 'hsau #1';
    let disList = hsauList;
    let a = IDK; let b = IDK; let c = IDK;

    a = numIs(ANT_CHAMBER_CELLS);
    if(VIT_CELLS>0){
        if(VIT_HAZE!=`Don't know`&&ANT_CHAMBER_FLARE!=`Don't know`){
            if(VIT_HAZE >= ANT_CHAMBER_FLARE){
                b = FALSE;
            }
            else{
                b = TRUE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(VIT_CELLS==0){
        b = TRUE;
    }
    else { //vitCells == idk
        b = IDK;
    }
    c = is(RETINITIS,"no");

    if(a==FALSE||b==FALSE||c==FALSE){
        disList.outList.push(rule);
    }
    else if(a==TRUE&&b==TRUE&&c==TRUE){
        disList.inList.push(rule);
    }
    else{
        disList.checkList.push(rule);
    }
}

function hsauRuleTwo(){
    let rule = 'hsau #2';
    let disList = hsauList;
    let a = IDK;
    if(POS_PCR_HSV=="yes"){
        a = TRUE;
    }
    else{
        a = is(LATERALITY,"unilateral");
    }
    if(a==FALSE){disList.outList.push(rule)}
    else if(a==TRUE){disList.inList.push(rule)}
    else{disList.checkList.push(rule)}
}

function hsauRuleThree(){
    let rule = 'hsau #3'
    let disList = hsauList;
    let a = IDK; let b = IDK; let c = IDK;
    a = is(POS_PCR_HSV,"yes");
    if(IRIS_ATROPHY=='sectoral'){
        if(AGE=="≤16" || AGE=="17-50"){
            b = TRUE;
        }
        else if(AGE==`Don't know`){
            b = IDK;
        }
        else{
            b = FALSE;
        }
    }
    else if(IRIS_ATROPHY==`Don't know`){
        b = IDK;
    }
    else{
        b = FALSE;
    }
    c = is(KERATITIS,"yes");
    if(a==FALSE&&b==FALSE&&c==FALSE){disList.outList.push(rule);}
    else if(a==TRUE||b==TRUE||c==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function hsauDiagnosis(){
    let disList = hsauList;
    hsauRuleOne();
    hsauRuleTwo();
    hsauRuleThree();
    if(disList.outList.includes('hsau #1')||disList.outList.includes('hsau #2')||disList.outList.includes('hsau #3')){
        exList.push('HSAU');
    }
    else if(disList.inList.includes('hsau #1')&&disList.inList.includes('hsau #2')&&disList.inList.includes('hsau #3')){
        dxList.push('HSAU');
    }
    else{
        possList.push('HSAU');
    }
}

function vzvauRuleOne(){
    let rule = 'vzvau #1';
    let disList = vzvauList;
    let a = IDK; let b = IDK; let c = IDK;
    a = numIs(ANT_CHAMBER_CELLS);
    if(VIT_CELLS>0){
        if(VIT_HAZE!=dk&&ANT_CHAMBER_FLARE!=dk){
            if(VIT_HAZE >= ANT_CHAMBER_FLARE){
                b = FALSE;
            }
            else{
                b = TRUE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(VIT_CELLS==0){
        b = TRUE;
    }
    else { //vitCells == idk
        b = IDK;
    }
    c = is(RETINITIS,"no");

    if(a==FALSE||b==FALSE||c==FALSE){
        disList.outList.push(rule);
    }
    else if(a==TRUE&&b==TRUE&&c==TRUE){
        disList.inList.push(rule);
    }
    else{
        disList.checkList.push(rule);
    }
}

function vzvauRuleTwo(){
    let rule = 'vzvau #2';
    let disList = vzvauList;
    let a = IDK;
    if(POS_PCR_VZV=="yes"){
        a = TRUE;
    }
    else{
        a = is(LATERALITY,"unilateral");
    }
    if(a==FALSE){disList.outList.push(rule)}
    else if(a==TRUE){disList.inList.push(rule)}
    else{disList.checkList.push(rule)}
}

function vzvauRuleThree(){
    let rule = 'vzvau #3'
    let disList = vzvauList;
    let a = IDK; let b = IDK; let c = IDK;
    a = is(POS_PCR_VZV,"yes");
    if(IRIS_ATROPHY=='sectoral'){
        if(AGE=='≥60'){
            b = TRUE;
        }
        else if(AGE==dk){
            b = IDK;
        }
        else{
            b = FALSE;
        }
    }
    else if(IRIS_ATROPHY==dk){
        b = IDK;
    }
    else{
        b = FALSE;
    }
    c = is(DERM_HZ,"yes");
    if(a==FALSE&&b==FALSE&&c==FALSE){disList.outList.push(rule);}
    else if(a==TRUE||b==TRUE||c==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function vzvauDiagnosis(){
    let disList = vzvauList;
    vzvauRuleOne();
    vzvauRuleTwo();
    vzvauRuleThree();
    if(disList.outList.includes('vzvau #1')||disList.outList.includes('vzvau #2')||disList.outList.includes('vzvau #3')){
        exList.push('VZVAU');
    }
    else if(disList.inList.includes('vzvau #1')&&disList.inList.includes('vzvau #2')&&disList.inList.includes('vzvau #3')){
        dxList.push('VZVAU');
    }
    else{
        possList.push('VZVAU');
    }
}

function fusRuleOne(){
    let rule = 'fus #1';
    let disList = fusList;
    let a = IDK; let b = IDK; let c = IDK;

    a = numIs(ANT_CHAMBER_CELLS)

    if(VIT_CELLS > 0){ //vitCells exist
        if(ANT_CHAMBER_FLARE!=dk){
            if(ANT_CHAMBER_FLARE > 0){
                b = TRUE;
            }
            else{
                b = FALSE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(VIT_CELLS == 0){
        b = TRUE;
    }
    else{
        b = IDK;
    }

    c = is(RETINITIS,"no");

    // a and b and c 
    if(a==FALSE||b==FALSE||c==FALSE){disList.outList.push(rule);}
    else if(a==TRUE&&b==TRUE&&c==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function fusRuleTwo(){
    let rule = 'fus #2';
    let disList = fusList;
    let a = IDK;
    a = is(LATERALITY,"unilateral");
    if(a==FALSE){disList.outList.push(rule);}
    else if(a==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function fusRuleThree(){
    let rule = 'fus #3';
    let disList = fusList;
    let a = IDK; let b = IDK;
    a = is(HETEROCHROMIA,"yes");
    if(IRIS_ATROPHY=='diffuse'){
        if(KP=='stellate'){
            b = TRUE;
        }
        else if(KP==dk){
            b = IDK;
        }
        else{
            b = FALSE;
        }
    }
    else if(IRIS_ATROPHY==dk){
        b = IDK;
    }
    else{
        b = FALSE;
    }

    if(a==FALSE&&b==FALSE){disList.outList.push(rule)}
    else if(a==TRUE||b==TRUE){disList.inList.push(rule)}
    else{disList.checkList.push(rule)}
}

function fusRuleFour(){
    let rule = 'fus #4'
    let disList = fusList;
    let a = IDK; let b = IDK;
    a = is(ENDOTHELIITIS,"no");
    b = is(ENDO_LESIONS,"no");
    if(a==FALSE||b==FALSE){disList.outList.push(rule)}
    else if(a==TRUE&&b==TRUE){disList.inList.push(rule)}
    else{disList.checkList.push(rule)}
}

function fusDiagnosis(){
    let disList = fusList;
    fusRuleOne();
    fusRuleTwo();
    fusRuleThree();
    fusRuleFour();
    if(disList.outList.includes('fus #1')||disList.outList.includes('fus #2')||
    disList.outList.includes('fus #3')||disList.outList.includes('fus #4')){
        exList.push('FUS');
    }
    else if(disList.inList.includes('fus #1')&&disList.inList.includes('fus #2')&&
    disList.inList.includes('fus #3')&&disList.inList.includes('fus #4')){
        dxList.push('FUS');
    }
    else{
        possList.push('FUS');
    }
}

function jiacauRuleOne(){
    let rule = 'jiacau #1';
    let disList = jiacauList;
    let a = IDK; let b = IDK;

    a = numIs(ANT_CHAMBER_CELLS);
    if(VIT_CELLS>0){
        if(VIT_HAZE!=dk&&ANT_CHAMBER_FLARE!=dk){
            if(VIT_HAZE >= ANT_CHAMBER_FLARE){
                b = FALSE;
            }
            else{
                b = TRUE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(VIT_CELLS==0){
        b = TRUE;
    }
    else { //vitCells == idk
        b = IDK;
    }
    
    if(a==FALSE||b==FALSE){
        disList.outList.push(rule);
    }
    else if(a==TRUE&&b==TRUE){
        disList.inList.push(rule);
    }
    else{
        disList.checkList.push(rule);
    } 
}

function jiacauRuleTwo(){
    let rule = 'jiacau #2';
    let disList = jiacauList;
    let a = IDK; let b = IDK;

    a = is(COURSE,'chronic');
    if(FIRST_DIAGNOSIS=='yes'){
        if(ONSET!='insidious'||SYMPTOMATIC!='yes'){
            b = FALSE;
        }
        else if(ONSET=='insidious'&&SYMPTOMATIC=='yes'){
            b = TRUE;
        }
        else{
            b = IDK;
        }
    }
    else if(FIRST_DIAGNOSIS=='no'){
        b = FALSE;
    }
    else{
        b = IDK;
    }
    if(a==FALSE&&b==FALSE){disList.outList.push(rule)}
    else if(a==TRUE||b==TRUE){disList.inList.push(rule)}
    else{disList.checkList.push(rule)}
}

function jiacauRuleThree(){
    let rule = 'jiacau #3'
    let disList = jiacauList;
    let a = IDK; let b = IDK; let c = IDK;
    a = is(OLIGO_ARTH,"yes");
    b = is(RF_NEG_POLY_ARTH,"yes");
    c = is(JUV_PSOR_ARTH,"yes");
    if(a==FALSE&&b==FALSE&&c==FALSE){disList.outList.push(rule);}
    else if(a==TRUE||b==TRUE||c==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function jiacauDiagnosis(){
    let disList = jiacauList;
    jiacauRuleOne();
    jiacauRuleTwo();
    jiacauRuleThree();
    if(disList.outList.includes('jiacau #1')||disList.outList.includes('jiacau #2')||disList.outList.includes('jiacau #3')){
        exList.push('JIACAU');
    }
    else if(disList.inList.includes('jiacau #1')&&disList.inList.includes('jiacau #2')&&disList.inList.includes('jiacau #3')){
        dxList.push('JIACAU');
    }
    else{
        possList.push('JIACAU');
    }
}

function sauRuleOne(){
    let rule = 'sau #1';
    let disList = sauList;
    let a = IDK; let b = IDK;

    a = numIs(ANT_CHAMBER_CELLS);
    if(VIT_CELLS>0){
        if(VIT_HAZE!=dk&&ANT_CHAMBER_FLARE!=dk){
            if(VIT_HAZE >= ANT_CHAMBER_FLARE){
                b = FALSE;
            }
            else{
                b = TRUE;
            }
        }
        else{
            b = IDK;
        }
    }
    else if(VIT_CELLS==0){
        b = TRUE;
    }
    else { //vitCells == idk
        b = IDK;
    }
    
    if(a==FALSE||b==FALSE){
        disList.outList.push(rule);
    }
    else if(a==TRUE&&b==TRUE){
        disList.inList.push(rule);
    }
    else{
        disList.checkList.push(rule);
    } 
}

function sauRuleTwo(){
    let rule = 'sau #2'
    let disList = sauList;
    let a = IDK; let b = IDK;
    if(COURSE=="acute, monophasic"||COURSE=='acute, recurrent'){
        if(LATERALITY=='unilateral'||LATERALITY=='unilateral, alternating'){
            a = TRUE;
        }
        else if(LATERALITY==dk){
            a = IDK;
        }
        else{
            a = FALSE;
        }
    }
    else if(COURSE==dk){
        a = IDK;
    }
    else{
        a = FALSE;
    }

    if(COURSE=='chronic'){
        if(LATERALITY=='unilateral'||LATERALITY=='unilateral, alternating'){
            b = TRUE;
        }
        else if(LATERALITY==dk){
            b = IDK;
        }
        else{
            b = FALSE;
        }
    }
    else if(COURSE==dk){
        b = IDK;
    }
    else{
        b = FALSE;
    }
    if(a==FALSE&&b==FALSE){disList.outList.push(rule);}
    else if(a==TRUE||b==TRUE){disList.inList.push(rule);}
    else{disList.checkList.push(rule);}
}

function sauRuleThree(){
    let rule = 'sau #3';
    let disList = sauList;
    let a = IDK;
    a = is(SPONDYLO_ARTH,"yes");
    if(a==FALSE){disList.outList.push(rule)}
    else if(a==TRUE){disList.inList.push(rule)}
    else{disList.checkList.push(rule)}
}

function sauRuleFour(){
    let rule = 'sau #4'
    let disList = sauList;
    let a = IDK; let b = IDK; let c = IDK;
    a = is(COURSE,'chronic');
    b = is(SPONDYLO_ARTH,'yes');
    c = is(POS_HLA_B27,'yes');
    if(a==FALSE||b==FALSE||c==FALSE){disList.outList.push(rule)}
    else if(a==TRUE&&b==TRUE&&c==TRUE){disList.inList.push(rule)}
    else{disList.checkList.push(rule)}
}

function sauDiagnosis(){
    let disList = sauList;
    sauRuleOne(); sauRuleTwo(); sauRuleThree(); sauRuleFour();
    if(disList.outList.includes('sau #1')||((disList.outList.includes('sau #2')||
    disList.outList.includes('sau #3'))&&disList.outList.includes('sau #4'))){
        exList.push('SAU');
    }
    else if(disList.inList.includes('sau #1') && 
    ((disList.inList.includes('sau #2') && disList.inList.includes('sau #3')) || disList.inList.includes('sau #4'))){
        dxList.push('SAU');
    }
    else{
        possList.push('SAU');
    }
    
}

function tinuRuleOne(){
    let rule = 'tinu #1';
    let disList = tinuList;
    let a = IDK; let b = IDK;
    a = numIs(ANT_CHAMBER_CELLS);
    if(VITRITIS=='no'&&CHOROIDITIS=='no'&&RET_VAS_CHANGES=='none'){
        b = TRUE;
    }
    else if(VITRITIS=='yes'||CHOROIDITIS=='yes'||(RET_VAS_CHANGES!=dk&&RET_VAS_CHANGES!='none')){
        b = numIs(ANT_CHAMBER_FLARE);
    }
    else{
        b = IDK;
    }

    if(a==FALSE||b==FALSE){
        disList.outList.push(rule);
    }
    else if(a==TRUE&&b==TRUE){
        disList.inList.push(rule);
    }
    else{
        disList.checkList.push(rule);
    } 
}

function tinuRuleTwo(){
    let rule = 'tinu #2';
    let disList = tinuList;
    let a = IDK; let b = IDK;
    a = is(POS_RENAL_BIOPSY,"yes");
    
    if(EL_URINE_BM=='yes'){
        if(EL_SERUM_CR=='yes'||AB_URINE_AN=='yes'){
            b = TRUE;
        }
        else if(EL_SERUM_CR=='no'&&AB_URINE_AN=='no'){
            b= FALSE;
        }
        else{
            b = IDK;
        }
    }
    else if(p.EL_URINE_BM==dk){
        b = IDK;
    }
    else{
        b = FALSE;
    }
    

    if(a==FALSE&&b==FALSE){
        disList.outList.push(rule);
    }
    else if(a==TRUE||b==TRUE){
        disList.inList.push(rule);
    }
    else{
        disList.checkList.push(rule);
    } 
}

function tinuDiagnosis(){
    let disList = tinuList;
    tinuRuleOne();
    tinuRuleTwo();
    if(disList.outList.includes('tinu #1')||disList.outList.includes('tinu #2')){
        exList.push('TINU');
    }
    else if(disList.inList.includes('tinu #1')&&disList.inList.includes('tinu #2')){
        dxList.push('TINU');
    }
    else{
        possList.push('TINU');
    }
}

function antDiagnosis(){
    cmvauDiagnosis();
    hsauDiagnosis();
    vzvauDiagnosis();
    fusDiagnosis();
    jiacauDiagnosis();
    sauDiagnosis();
    tinuDiagnosis();
}

antDiagnosis();



