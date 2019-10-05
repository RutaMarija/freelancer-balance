function renderAccount ( data ) {
    console.log(data);    
    let HTML = '';

    for ( let i=0; i<data.length; i++) {
        console.log(data[i]);

        /*if (!data[i].income) {
            console.log('klaida');
            return '0';
        }*/
        
            HTML += `<div class="table-row">
                        <div class="cell">${data[i].month}</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">${data[i].income} Eur</div>
                        <div class="cell">${data[i].expense} Eur</div>
                        <div class="cell">${data[i].income + data[i].expense} Eur</div>
                    </div>`;
    }

    console.log(HTML);
    return document.getElementById('information').innerHTML = HTML;
}


/*function balansuiSuskaiciuoti (data) {
const balansas = data[i].income - data[i].expense;
return balansas;
}*/
    
    