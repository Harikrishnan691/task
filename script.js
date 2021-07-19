
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var x = 0;
var n = 1;
var y = 0;

// list1[]= document.getElementById("ename").value;
// list2[]= document.getElementById("idname").value;
// list3[]= document.getElementById("salary").value;
// list4[]= document.getElementById("exp").value;



function AddRow(){

    var addRown = document.getElementById('show');
    var newRow = addRown.insertRow(n);

    list1[y]=document.getElementById("ename").value;
        if(list1[y].length >=3){
            document.getElementById('alert1').style.display = 'none';
        }else{
            document.getElementById('alert1').innerHTML = '*Minimum 3 characters required';
        }


    list2[y]=document.getElementById("idname").value;
        if(list2[y] == Number(list2[y])){
            document.getElementById('alert2').style.display = 'none';
        }else{
            document.getElementById('alert2').innerHTML = '*ID should be number'
            // cel1.innerHTML = '';
        }

    list3[y]=document.getElementById("salary").value;
    list3[y] = Number(list3[y]);


    list4[y]=document.getElementById("exp").value;


   

    if((list4[y]*12) >=24 && (list4[y]*12)<36){
        var percent = parseInt(list3[y] * 1/10);
        list5[y] = list3[y] + percent;
        // console.log(list5[x]); 
    }else if((list4[y]*12)>=36){
        var perce = parseInt(list3[y] * 15/100);
        list5[y] = list3[y] + perce;
    }else{
        list5[y] = "Not eligable"
    }
    
    

    if(list1[y].length >=3 && list2[y] == Number(list2[y]) && list3[y] == Number(list3[y])){
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
        var cel5 = newRow.insertCell(4);

        cel1.innerHTML = list1[y];
        cel2.innerHTML = list2[y];
        cel3.innerHTML = list3[y];
        cel4.innerHTML = list4[y];
        cel5.innerHTML = list5[y];
    }

    n++;
    y++;

}

// function twoYrs(){
//        var n=1;
//        var x=0;
//     var displayRowN = document.getElementById('shows');
//     var disRowN = displayRowN.insertRow(n);

//     list1[x] = document.getElementById('ename').value;
//     list2[x] = document.getElementById('idname').value;
//     list3[x] = document.getElementById('salary').value;
//     list4[x] = document.getElementById('exp').value;

//     for( let i = 0; i< list4[x].length; i++){
//         if(list4[i] <= 2){
//             var cel1 = disRowN.insertCell(0);
//             var cel2 = disRowN.insertCell(1);
//             var cel3 = disRowN.insertCell(2);
//             var cel4 = disRowN.insertCell(3);
//             var cel5 = disRowN.insertCell(4);
    
//             cel1.innerHTML = list1[x];
//             cel2.innerHTML = list2[x];
//             cel3.innerHTML = list3[x];
//             cel4.innerHTML = list4[x];
//             cel5.innerHTML = list5[x];
//             i++;
//         }
//     }

//     n++;
//     x++;




// }







