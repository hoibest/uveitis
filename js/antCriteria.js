function joinText(arr,slice){
    let text = arr.join(slice);
    return text;
}

if(!sessionStorage.getItem("disease")){
    document.getElementById('result-page-back-btn').innerHTML = "";
}
else{
    document.getElementById('front-page-back-btn').innerHTML = "";
    document.getElementById('result-page-back-btn').onclick = function(){history.back()}
}