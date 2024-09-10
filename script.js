function calculate(){
    const cm = document.getElementById('cm').value;
    const finlCm = cm * 6.25;
    const kg = document.getElementById('kg').value;
    const finlKg = kg * 10;
    const age = document.getElementById('age').value;
    const finlAge = age * 5;
    const sex = document.getElementById('sex');
    const active = document.getElementById('active');
    let result;

    

    const results = document.getElementById('h2');
    const res = document.getElementsByClassName('results')[0];
    
    const oldTitle = document.getElementById('calories-title');
    if (oldTitle) {
        oldTitle.remove();
    }

   
    
    if(cm === '' || kg === '' || age === '' || sex.value === 'option1' || active.value === 'option1'){
        alert('إملئ الفراغات');
        return;  // إيقاف تنفيذ الكود إذا كانت هناك حقول فارغة
    }

    const title = document.createElement('h2');
    title.setAttribute('id','calories-title')
    title.innerHTML = 'السعرات';
    res.appendChild(title);

    if(sex.value === 'option2'){ 
        result = parseInt(finlKg) + parseInt(finlCm) - parseInt(finlAge) + 5;
    } else if(sex.value === 'option3'){ 
        result = parseInt(finlKg) + parseInt(finlCm) - parseInt(finlAge) - 161;
    }

    if(active.value === 'option2'){ 
        results.innerHTML = result * 1.2;
    } else if(active.value === 'option3'){ 
        results.innerHTML = result * 1.375;
    } else if(active.value === 'option4'){ 
        results.innerHTML = result * 1.55;
    } else if(active.value === 'option5'){ 
        results.innerHTML = result * 1.725;
    } else if(active.value === 'option6'){ 
        results.innerHTML = result * 1.9;
    }
    
    const plus = document.getElementById('plus');

    // مسح الأزرار القديمة إذا كانت موجودة
    const oldZyada = document.getElementById('zyada');
    const oldNqs = document.getElementById('nqs');
    if (oldZyada) {
        oldZyada.remove();
    }
    if (oldNqs) {
        oldNqs.remove();
    }

    const zyada = document.createElement('h2');
    zyada.innerHTML = 'زيادة الوزن';
    zyada.setAttribute('id','zyada');
    zyada.setAttribute('onclick','zyada()');
    zyada.style.cssText = `
        cursor: pointer; 
        color: white;
        background-color: #0dd4b9;
        border: 2px solid #0dd4b9;
        border-radius: 20px;
        padding: 10px;
        margin: 20px;
        transition: 0.5s;
     ` ;
    const nqs = document.createElement('h2');
    nqs.innerHTML = 'نقص الوزن';
    nqs.setAttribute('id','nqs');
    nqs.setAttribute('onclick','nqs()');
    nqs.style.cssText = `
        cursor: pointer; 
        color: white;
        background-color: #0dd4b9;
        border: 2px solid #0dd4b9;
        border-radius: 20px;
        padding: 10px;
        margin: 20px;
        transition: 0.5s;
     ` ;
    plus.appendChild(zyada);
    plus.appendChild(nqs);

}

function zyada(){
    const results = document.getElementById('h2');
    const currentResult = parseFloat(results.innerHTML);
    const zyad = currentResult + 500;

    const zyadaRemove = document.getElementById('zyadaremove');
    if(zyadaRemove){
        zyadaRemove.remove();
    }

    const zyadaResult = document.createElement('h2');
    zyadaResult.setAttribute('id','zyadaremove');
    const results2 = document.getElementsByClassName('result2')[0];
    zyadaResult.innerHTML = 'السعرات التي تحتاجها لزيادة الوزن: ' + zyad;
    results2.appendChild(zyadaResult);
};

function nqs(){
    const results = document.getElementById('h2');
    const currentResult = parseFloat(results.innerHTML);
    const nqs = currentResult - 500;

    const nqsRemove = document.getElementById('nqsremove');
    if(nqsRemove){
        nqsRemove.remove();
    }
    
    const nqsResult = document.createElement('h2');
    nqsResult.setAttribute('id','nqsremove');
    const results2 = document.getElementsByClassName('result2')[0];
    nqsResult.innerHTML = 'السعرات التي تحتاجها لنقص الوزن: ' + nqs;
    results2.appendChild(nqsResult);
};