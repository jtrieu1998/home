console.log("Scripts work");

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function myFunction() {
    // let elements = document.getElementById("form1").elements;
    let x = document.getElementById("form1").elements[0].value;
    createForms(parseInt(x));
}

function createForms(n){
    let form2 = document.getElementById("form2");
    for(let i = 0; i < n; i++){
        let box = '<div></div>'
        let lnStr = '<label for="name">Player Name:</label><br>'
        let inStr = '<input class="name"><br>'

        let lnetStr = '<label for="net">Gain/Loss:</label><br>'
        let inetStr = '<input class="net"><br>'

        form2.insertAdjacentHTML( 'beforeend', lnStr );
        form2.insertAdjacentHTML( 'beforeend', inStr );
        form2.insertAdjacentHTML( 'beforeend', lnetStr );
        form2.insertAdjacentHTML( 'beforeend', inetStr );
        // form2.insertAdjacentHTML( 'beforeend', box );
        // box.insertAdjacentHTML( 'beforeend', lnStr );
        // box.insertAdjacentHTML( 'beforeend', inStr );
        // box.insertAdjacentHTML( 'beforeend', lnetStr );
        // box.insertAdjacentHTML( 'beforeend', inetStr );
    }

    let sub = '<input type="submit" value="Submit" onclick="calcFunc();return false">';
    form2.insertAdjacentHTML('beforeend',sub);
}

function calcFunc(){
    let inputName = document.getElementsByClassName('name');
    let inputNet = document.getElementsByClassName('net');

    let pos = [];
    let neg = [];

    let k = "The respective values are :";
    for (let i = 0; i < inputName.length; i++) {
        let a = inputName[i];
        let b = inputNet[i];
        
        let player = {
            name: a.value,
            net: parseInt(b.value)
        };

        if(b.value > 0){
            pos.push(player);
        } else if(b.value < 0){
            neg.push(player);
        }
    }

    let p = 0;
    let n = 0;

    let payments = "";
    while(p < pos.length && n < neg.length){
        let pCurr = pos[p];
        let nCurr = neg[n];

        if(Math.abs(pCurr.net) > Math.abs(nCurr.net)){
            payments += nCurr.name + " owes " + pCurr.name + " " + Math.abs(nCurr.net) + "<br>";
            pCurr.net += nCurr.net;
            nCurr.net = 0;
            n++;
        } else if(Math.abs(pCurr.net) < Math.abs(nCurr.net)){
            payments += nCurr.name + " owes " + pCurr.name + " " + pCurr.net + "<br>";
            nCurr.net += pCurr.net;
            pCurr.net = 0;
            p++;
        } else {
            payments += nCurr.name + " owes " + pCurr.name + " " + pCurr.net + "<br>";
            nCurr.net = 0;
            pCurr.net = 0;
            n++;
            p++;
        }
    }
    console.log(payments);
    document.getElementById('results').innerHTML = payments;
}