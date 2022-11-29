var i =0;
function produit(){
  let nom=document.getElementById('nom').value;
  let option = document.getElementById('marque').value;
  let Prix = document.getElementById('Prix').value;
  let date = document.getElementById('date').value;
  let type=document.getElementById('Type').value;
  let ProOui = document.getElementById('promotion').value;
  let proNom = document.getElementById('promotions').value;
  let btnradio = document.createTextNode(ProOui);
  let btnradio1 = document.createTextNode(proNom);
  let chekbox = document.getElementById('promotion').checked;  
  let chekboxx = document.getElementById('promotions').checked; 
  let table = document.getElementById('tableau');          
  i++;


    let MyNewElement = document.createElement('tr');        
    let MyNewChild1 = document.createElement('td');         
    let MyNewChild2 = document.createElement('td');         
    let MyNewChild3 = document.createElement('td');          
    let MyNewChild4 = document.createElement('td');          
    let MyNewChild5 = document.createElement('td');         
    let MyNewChild6 = document.createElement('td');         
    let MyNewChild7 = document.createElement('td');
    MyNewElement.id="tr"+i;       

    let MyNewChild8 = document.createElement('button');      
    let MyNewChild9 = document.createElement('button');

    MyNewChild8.setAttribute("onclick","MODIFIER()");       
    MyNewChild9.setAttribute("onclick",'SUPRIMER('+i+')');

  let Textnom = document.createTextNode(nom);             
  let textoption = document.createTextNode(option);
  let textPrix = document.createTextNode(Prix);
  let textdate = document.createTextNode(date);
  let texttype = document.createTextNode(type);
  let buttonM = "🖍️​";
  let buttonS = "❌​";
  let ButtonNameM = document.createTextNode(buttonM);
  let ButtonNames = document.createTextNode(buttonS);    


  
  MyNewChild1.appendChild(Textnom);                       
  MyNewChild2.appendChild(textoption);
  MyNewChild3.appendChild(textPrix);
  MyNewChild4.appendChild(textdate);
  MyNewChild5.appendChild(texttype);

  MyNewElement.appendChild(MyNewChild1);                
  MyNewElement.appendChild(MyNewChild2);
  MyNewElement.appendChild(MyNewChild3);
  MyNewElement.appendChild(MyNewChild4);
  MyNewElement.appendChild(MyNewChild5);

  if(chekbox==true){                                      
           
      MyNewChild6.appendChild(btnradio);                  
      MyNewElement.appendChild(MyNewChild6);              
  }
  if(chekboxx==true){
      MyNewChild6.appendChild(btnradio1);
      MyNewElement.appendChild(MyNewChild6)
  }
  
  MyNewChild8.appendChild(ButtonNameM);                   
  MyNewChild9.appendChild(ButtonNames); 
  MyNewChild7.appendChild(MyNewChild8);                   
  MyNewChild7.appendChild(MyNewChild9);
  MyNewElement.appendChild(MyNewChild7);                  


  table.appendChild(MyNewElement);

}
function SUPRIMER(i){
  document.getElementById('tr'+i).remove();
}


let table = document.getElementById('tableau'),rIndex; 
function MODIFIER(){
  document.getElementById('button1').style.display="none";
  document.getElementById('button2').style.display="block";

    for (let i = 0 ; i<=table.rows.length ; i++){
        table.rows[i].onclick = function(){                                          
            rIndex = this.rowIndex;                                                  
            document.getElementById('nom').value = this.cells[0].innerHTML;          
            document.getElementById('marque').value = this.cells[1].innerHTML;
            document.getElementById('Prix').value = this.cells[2].innerHTML;
            document.getElementById('date').value = this.cells[3].innerHTML;
            document.getElementById('Type').value = this.cells[4].innerHTML;
            document.getElementById('promotion').checked = this.cells[5].innerHTML;
            document.getElementById('promotions').checked = this.cells[5].innerHTML;
        };

    }
}
function MODEFIER2(){
  document.getElementById('button1').style.display="block"
  document.getElementById('button2').style.display="none"
  let chekbox = document.getElementById('promotion').checked; 
  let chekboxx = document.getElementById('promotions').checked;
  table.rows[rIndex].cells[0].innerHTML = document.getElementById('nom').value;
  table.rows[rIndex].cells[1].innerHTML = document.getElementById('marque').value;
  table.rows[rIndex].cells[2].innerHTML = document.getElementById('Prix').value;
  table.rows[rIndex].cells[3].innerHTML = document.getElementById('date').value;
  table.rows[rIndex].cells[4].innerHTML =document.getElementById('Type').value;
  if(chekbox==true){
      table.rows[rIndex].cells[5].innerHTML = document.getElementById('promotion').value;
  }
  if(chekboxx==true){
      table.rows[rIndex].cells[5].innerHTML = document.getElementById('promotions').value;
  }

}