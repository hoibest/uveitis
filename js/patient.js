const DK = `Don't know`;

const historyObj = {
    age : DK,
    firstDiagnosis : DK,
    symptomatic : DK,
    onset : DK,
    course: DK,
    laterality: DK,
    update: function(){
        this.age = getSavedData('age-el');
        this.firstDiagnosis = getSavedData('firstDiagnosis-el');
        this.symptomatic = getSavedData('symptomatic-el');
        this.onset = getSavedData('onset-el');
        this.course = getSavedData('course-el');
        this.laterality = getSavedData('laterality-el');
    }
}

const ophthalExamObj = {
    keratitis : DK,
    kp : DK,
    antChamberCells : DK,
    antChamberFlare : DK,
    irisAtrophy : DK,
    posSynechiae : DK,
    heterochromia : DK,
    irisNodules : DK,
    endotheliitis : DK,
    endoLesions : DK,
    vitCells : DK,
    vitHaze : DK,
    vitritis : DK,
    choroiditis : DK,
    retinitis : DK,
    retVasChanges : DK,
    update : function () {
        this.keratitis = getSavedData('keratitis-el');
        this.kp = getSavedData('kp-el');
        this.antChamberCells = grade(getSavedData('antChamberCells-el'));
        this.antChamberFlare = grade(getSavedData('antChamberFlare-el'));
        this.irisAtrophy = getSavedData('irisAtrophy-el');
        this.posSynechiae = getSavedData('posSynechiae-el');
        this.heterochromia = getSavedData('heterochromia-el');
        this.irisNodules = getSavedData('irisNodules-el');
        this.endotheliitis = getSavedData('endotheliitis-el');
        this.endoLesions = getSavedData('endoLesions-el');
        this.vitCells = grade(getSavedData('vitCells-el'));
        this.vitHaze = grade(getSavedData('vitHaze-el'));
        this.vitritis = getSavedData('vitritis-el');
        this.choroiditis = getSavedData('choroiditis-el');
        this.retinitis = getSavedData('retinitis-el');
        this.retVasChanges = getSavedData('retVasChanges-el');
    }
}

const pathologyObj = {
    dermHZ : DK,
    oligoArth : DK,
    rfNegPolyArth : DK,
    juvPsorArth : DK,
    spondyloArth : DK,
    update : function (){
        this.dermHZ = getSavedData('dermHZ-el');
        this.oligoArth = getSavedData('oligoArth-el');
        this.rfNegPolyArth = getSavedData('rfNegPolyArth-el');
        this.juvPsorArth = getSavedData('juvPsorArth-el');
        this.spondyloArth = getSavedData('spondyloArth-el');
    }
}


const labObj = {
    posPcrCmv : DK,
    posPcrHsv : DK,
    posPcrVzv : DK,
    posHlaB27 : DK,
    posRenalBiopsy : DK,
    elUrineBM : DK,
    abUrineAn : DK,
    elSerumCr : DK,
    update : function (){
        this.posPcrCmv = getSavedData('posPcrCmv-el');
        this.posPcrHsv = getSavedData('posPcrHsv-el');
        this.posPcrVzv = getSavedData('posPcrVzv-el');
        this.posHlaB27 = getSavedData('posHlaB27-el');
        this.posRenalBiopsy = getSavedData('posRenalBiopsy-el');
        this.elUrineBM = getSavedData('elUrineBM-el');
        this.abUrineAn = getSavedData('abUrineAn-el');
        this.elSerumCr = getSavedData('elSerumCr-el');
    }
}




const patient = {
    historyObj,
    ophthalExamObj,
    pathologyObj,
    labObj,
    patientUpdate : function () {
        historyObj.update();
        ophthalExamObj.update();
        pathologyObj.update();
        labObj.update();
        sessionStorage.setItem("patient",JSON.stringify(this));
    }
}

function getSavedData(id){
    if(!sessionStorage.getItem(id)){
        return DK;
    }
    return sessionStorage.getItem(id);
}

function grade(val){
    if(val==`Don't know` || val==""){
        return DK;
    }
    else {
        return parseInt(val);
    }
}