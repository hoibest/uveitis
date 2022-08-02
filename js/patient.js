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

const patient = {
    historyObj,
    patientUpdate : function () {
        historyObj.update();
    }
}

function getSavedData(id){
    if(!sessionStorage.getItem(id)){
        return IDK;
    }
    return sessionStorage.getItem(id);
}