const button = () =>{
    const dataInpute = document.getElementById('inpute-data');
    const data  = dataInpute.value;
    const valueInpute = document.getElementById('inpute-value')
    const value = valueInpute.value;
    


    if(data && value){
        localStorage.setItem(value, data);

    }
    valueInpute.value = "";
    dataInpute.value = '';

}