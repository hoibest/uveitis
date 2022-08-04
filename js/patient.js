const IDK = '';

const historyObj = {
    age : IDK,
    firstDiagnosis : IDK,
    symptomatic : IDK,
    onset : IDK,
    course: IDK,
    laterality: IDK,
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
    keratitis : IDK,
    kp : IDK,
    antChamberCells : IDK,
    antChamberFlare : IDK,
    irisAtrophy : IDK,
    posSynechiae : IDK,
    heterochromia : IDK,
    irisNodules : IDK,
    endotheliitis : IDK,
    endoLesions : IDK,
    vitCells : IDK,
    vitHaze : IDK,
    vitritis : IDK,
    choroiditis : IDK,
    retinitis : IDK,
    retVasChanges : IDK,
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
    dermHZ : IDK,
    oligoArth : IDK,
    rfNegPolyArth : IDK,
    juvPsorArth : IDK,
    spondyloArth : IDK,
    update : function (){
        this.dermHZ = getSavedData('dermHz-el');
        this.oligoArth = getSavedData('oligoArth-el');
        this.rfNegPolyArth = getSavedData('rfNegPolyArth-el');
        this.juvPsorArth = getSavedData('juvPsorArth-el');
        this.spondyloArth = getSavedData('spondyloArth-el');
    }
}


const labObj = {
    posPcrCmv : IDK,
    posPcrHsv : IDK,
    posPcrVzv : IDK,
    posHlaB27 : IDK,
    posRenalBiopsy : IDK,
    elUrineBM : IDK,
    abUrineAn : IDK,
    elSerumCr : IDK,
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
    }
}

function getSavedData(id){
    if(!sessionStorage.getItem(id)){
        return IDK;
    }
    return sessionStorage.getItem(id);
}

function grade(val){
    if(val=='idk' || val==""){
        return IDK;
    }
    else {
        return parseInt(val);
    }
}