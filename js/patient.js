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
        patient.historyObj = this;
    }
}

const ophthalExamObj = {
    keratitis : IDK,
    kp : IDK,
    antChamberCells : IDK,
    antChamberFlare : IDK,
    update : function () {
        this.keratitis = getSavedData('keratitis-el');
        this.kp = getSavedData('kp-el');
        this.antChamberCells = grade(getSavedData('antChamberCells-el'));
        this.antChamberFlare = grade(getSavedData('antChamberFlare-el'));
    }
}

const patient = {
    historyObj,
    ophthalExamObj,
    patientUpdate : function () {
        historyObj.update();
        ophthalExamObj.update();
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