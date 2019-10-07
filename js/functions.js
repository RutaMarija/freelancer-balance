  account.sort(function (a, b) {
    return a.month - b.month;
  });
  
function renderAccount ( data ) {
        
    let HTML = '';

    for ( let i=0; i<data.length; i++) {
        

        if (!data[i].income) {
            data[i].income = 0;
        }

        if (!data[i].expense) {
            data[i].expense = 0;
        }

        
            HTML += `<div class="table-row">
                        <div class="cell">${data[i].month}</div>
                        <div class="cell">Sausis</div>
                        <div class="cell">${data[i].income} </div>
                        <div class="cell">${data[i].expense} </div>
                        <div class="cell">${data[i].income + data[i].expense} </div>
                    </div>`;
    }

    console.log(HTML);
    return document.getElementById('information').innerHTML = HTML;
}

function insertMonths( data ) {

    const oldMonths = document.querySelectorAll('.table-row .cell:nth-child(2)');
    console.log(oldMonths);

    const newMonths = months; 
    console.log(newMonths);
    
    for ( let i=0; i<data.length; i++ ) {

        oldMonths.innerHTML = newMonths;
        console.log(newMonths);
        return 
        //ne velnio neveikia :( 
    }
    
}

function sumOfIncome( data ) {
      let rows = document.querySelectorAll('.table-row .cell:nth-child(3)');
      console.log(rows);
      let sum = 0;

      for (let i = 0; i < rows.length-1; i++) {
        sum += Number(rows[i].textContent);

        document.getElementById("allYearIncome").textContent = sum;        
       }
           
}

function sumOfExpense( data ) {
    let rows = document.querySelectorAll('.table-row .cell:nth-child(4)');
    console.log(rows);
    let sum = 0;

    for (let i = 0; i < rows.length-1; i++) {
      sum += Number(rows[i].textContent);

      document.getElementById("allYearExpense").textContent = sum;        
     }
         
}

function sumOfBalance( data ) {
    let rows = document.querySelectorAll('.table-row .cell:nth-child(5)');
    console.log(rows);
    let sum = 0;

    for (let i = 0; i < rows.length-1; i++) {
      sum += Number(rows[i].textContent);

      document.getElementById("allYearBalance").textContent = sum;        
     }
         
}