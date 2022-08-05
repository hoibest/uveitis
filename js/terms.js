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
const DERM_HZ = p.pathologyObj.dermHz;
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

class ruleList {
    inList = [];
    outList = [];
    checkList = [];
};

function is(val,ans){
    if(val==ans){
        return TRUE;
    }
    else if(val==`Don't know`){
        return IDK;
    }
    else return FALSE;
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

let hsauList = new ruleList();

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
        a = is(LATERALITY,"monoUnilateral");
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
        if(AGE=='lower16' || AGE=='bw17and50'){
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
        disList.checkList.length=0;
    }
    else if(disList.inList.includes('hsau #1')&&disList.inList.includes('hsau #2')&&disList.inList.includes('hsau #3')){
        dxList.push('HSAU')
        disList.checkList.length=0;
    }
    else{
        
    }
}

hsauDiagnosis();
console.log('hi');

