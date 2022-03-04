alert("Please Click on \n📇 Input-A or\n📇 Input-B \nto show the different results.")



var ttOfAnd = [
    [0,0,0],
    [0,1,0],
    [1,0,0],
    [1,1,1]
];


var ttOfOr = [
    [0,0,0],
    [0,1,1],
    [1,0,1],
    [1,1,1]
];


var ttOfNor = [
    [0,0,1],
    [0,1,0],
    [1,0,0],
    [1,1,0]
];


var ttOfNand = [
    [0,0,1],
    [0,1,1],
    [1,0,1],
    [1,1,0]
];

var ttOfNot = [
    [0, 1],
    [1, 0]  
];



var html_for_other_gates = `<div class="input">
            <div class="input-buttons">
                <div id="input-A" onclick="inputClickedA(this.id)">A</div>
                <div id="input-B" onclick="inputClickedB(this.id)">B</div>
            </div>
          
            <div class="wires">
             <div class="wire" id="wireA"></div>
             <div class="wire" id="wireB"></div>
            </div>
          </div>
          
          <div class="gate-logo">
           <div id="gate-logo">
            
               
           </div>
          </div>
       
       
          <div class="output">
              
            
            <div class="wires">
             <div class="wire">
                 
             </div>
            </div>
            
            <div id="output">C</div>
            
            
          </div>
      </div>
       
       
          `;


var original_table_html = `
         <caption>Truth Table</caption>
         
         <tr>
             <th>A</th>
             <th>B</th>
             <th>C</th>
         </tr>
         
         <tr>
             <td id="bit00">0</td>
             <td id="bit01">0</td>
             <td id="bit02">0</td>
         </tr>
         
         <tr>
             <td id="bit10">0</td>
             <td id="bit11">1</td>
             <td id="bit12">0</td>
         </tr>
         
         <tr>
             <td id="bit20">1</td>
             <td id="bit21">0</td>
             <td id="bit22">0</td>
         </tr>
         
         
         <tr>
             <td id="bit30">1</td>
             <td id="bit31">1</td>
             <td id="bit32">1</td>
         </tr> 
 `;







var selected = "and-gate";

const andGate = (id) => {
    
   document.getElementById("gate-engine").innerHTML = html_for_other_gates;
   
   document.getElementById("table").innerHTML = original_table_html;
    
    
   truthTable(ttOfAnd);
    
   document.getElementById(id).style.backgroundColor = "grey";
   
   if(selected != "" && selected != id) document.getElementById(selected).style.backgroundColor = "#222222";
     selected = id; document.getElementById("gate-logo").innerHTML = "";
    document.getElementById("gate-logo").borderRadius = "5px 50% 50% 5px";
    
    turnOnA = true;
    turnOnB = true;
    inputClickedA("input-A");
    inputClickedB("input-B");
   // outputResult(false,false);
}





const orGate = (id) => {
    
   document.getElementById("gate-engine").innerHTML = html_for_other_gates;
   
    document.getElementById("table").innerHTML = original_table_html;
    
    truthTable(ttOfOr);
    document.getElementById(id).style.backgroundColor = "grey";
    if(selected != "" && selected != id) document.getElementById(selected).style.backgroundColor = "#222222";
     selected = id;
    document.getElementById("gate-logo").innerHTML = `<div id="gate-cut">
                   <div class="wires">
             <div class="wire cut1"></div>
             <div class="wire cut2"></div>
            </div>
               </div>`;
               
               document.getElementById("gate-logo").borderRadius = "5px 20% 20% 5px";
               
               //outputResult(false,false);
    turnOnA = true;
    turnOnB = true;
    inputClickedA("input-A");
    inputClickedB("input-B");
}







const notGate = (id) => {
    //truthTable(ttOfAnd);
    
   document.getElementById("gate-engine").innerHTML = html_for_not_gate;
   
   document.getElementById("table").innerHTML = not_gate_table;
   
    document.getElementById(id).style.backgroundColor = "grey";
    if(selected != "" && selected != id) document.getElementById(selected).style.backgroundColor = "#222222";
     selected = id;
     
     
     
    /*turnOnA = true;
    turnOnB = true;
    inputClickedA("input-A");
    inputClickedB("input-B");*/
    
    not_input_A = true;
    inputClickedA_not("input-A");
     
}









const norGate = (id) => {
   document.getElementById("gate-engine").innerHTML = html_for_other_gates;
    
    document.getElementById("table").innerHTML = original_table_html;
    
    truthTable(ttOfNor);
    document.getElementById(id).style.backgroundColor = "grey";
    if(selected != "" && selected != id) document.getElementById(selected).style.backgroundColor = "#222222";
     selected = id;
    
    document.getElementById("gate-logo").innerHTML = `<div id="gate-cut">
                   <div class="wires">
             <div class="wire cut1"></div>
             <div class="wire cut2"></div>
            </div>
            
               </div>
               
               <div class="gate-circle" style="left:70%;"></div>`;
               
               //outputResult(false,false);
               turnOnA = true;
    turnOnB = true;
    inputClickedA("input-A");
    inputClickedB("input-B");
}







const nandGate = (id) => {
    
    
   document.getElementById("gate-engine").innerHTML = html_for_other_gates;
   
    
    document.getElementById("table").innerHTML = original_table_html;
    
   truthTable(ttOfNand);
   
    document.getElementById(id).style.backgroundColor = "grey";
    if(selected != "" && selected != id) document.getElementById(selected).style.backgroundColor = "#222222";
     selected = id;
     
     
     document.getElementById("gate-logo").innerHTML = `<div class="gate-circle"></div>`;
     
     outputResult(false,false);
     turnOnA = true;
    turnOnB = true;
    inputClickedA("input-A");
    inputClickedB("input-B");
     
}

const truthTable = (tt) =>{
    for(let i=0; i<4 ;i++){
        for(let j=0; j<3 ; j++){
            document.getElementById(`bit${i}${j}`).innerHTML = tt[i][j];
        }
    }
}


var turnOnA = false;
const inputClickedA = (id) => {

    if(turnOnA){
       document.getElementById(id).style.backgroundColor = "pink";
       document.getElementById(id).style.boxShadow = "none";

/*       document.getElementById("wireA").style.backgroundColor = "pink";
       document.getElementById("wireA").style.boxShadow = "none";*/
       
       
       turnOnA = false;
       outputResult(turnOnA, turnOnB);
    } else{
        document.getElementById(id).style.backgroundColor = "lightgreen";
        document.getElementById(id).style.boxShadow = "0 0 7px lightgreen";
        
/*        document.getElementById("wireA").style.backgroundColor = "lightgreen";
       document.getElementById("wireA").style.boxShadow = "0 0 7px lightgreen";*/
       
       
        turnOnA = true;
        outputResult(turnOnA, turnOnB);
        
    }
    
    
}
 


var turnOnB = false;
const inputClickedB = (id) => {

    if(turnOnB){
       document.getElementById(id).style.backgroundColor = "pink";
       document.getElementById(id).style.boxShadow = "none";
       
/*       document.getElementById("wireB").style.backgroundColor = "pink";
       document.getElementById("wireB").style.boxShadow = "none";*/
       
       
       turnOnB = false;
       outputResult(turnOnA, turnOnB);
    } else{
        document.getElementById(id).style.backgroundColor = "lightgreen";
        document.getElementById(id).style.boxShadow = "0 0 7px lightgreen";
        
 /*       document.getElementById("wireB").style.backgroundColor = "lightgreen";
       document.getElementById("wireB").style.boxShadow = "0 0 7px lightgreen";*/
       
        turnOnB = true;
        outputResult(turnOnA, turnOnB);
    }
}


const outputResult = (bit1, bit2) => {
var ttOfGates;

    if(selected == "and-gate"){
         ttOfGates = ttOfAnd;
         if(bit1 && bit2){
             document.getElementById("output").style.backgroundColor = "lightgreen"; 
           
           document.getElementById("output").style.boxShadow = "0 0 7px lightgreen";
         }
         else{
             document.getElementById("output").style.backgroundColor = "pink";   
           
            document.getElementById("output").style.boxShadow = "none"; 
         }
     }
     
     
    else if(selected  == "or-gate"){
         ttOfGates = ttOfOr;
         
         if(bit1 || bit2){
             document.getElementById("output").style.backgroundColor = "lightgreen"; 
           
           document.getElementById("output").style.boxShadow = "0 0 7px lightgreen";
         }
         else{
             document.getElementById("output").style.backgroundColor = "pink";   
           
            document.getElementById("output").style.boxShadow = "none"; 
         }
     }
    else if(selected == "nor-gate"){
        ttOfGates = ttOfNor;
    
        if(!bit1 && !bit2){
             document.getElementById("output").style.backgroundColor = "lightgreen"; 
           
           document.getElementById("output").style.boxShadow = "0 0 7px lightgreen";
         }
         else{
             document.getElementById("output").style.backgroundColor = "pink";   
           
            document.getElementById("output").style.boxShadow = "none"; 
         }
    }
     
     else if(selected == "nand-gate"){
         ttOfGates = ttOfNand;
         
         if(bit1 && bit2){
             document.getElementById("output").style.backgroundColor = "pink";   
           
            document.getElementById("output").style.boxShadow = "none"; 
         }
         else{
            document.getElementById("output").style.backgroundColor = "lightgreen"; 
           
           document.getElementById("output").style.boxShadow = "0 0 7px lightgreen";
           
            
         }
     }
     
     
     
     
     
     
     
     
     
     
       for(let i=0 ; i<4 ; i++){
               if(ttOfGates[i][0] == bit1 && ttOfGates[i][1] == bit2){
                   document.getElementById(`bit${i}${0}`).style.backgroundColor = "#3d3d5c";
                   document.getElementById(`bit${i}${1}`).style.backgroundColor = "#3d3d5c";
           
           document.getElementById(`bit${i}${2}`).style.backgroundColor = "#3d3d5c";        
          
          
           }
           else {
               document.getElementById(`bit${i}${0}`).style.backgroundColor = "#222222";
                   document.getElementById(`bit${i}${1}`).style.backgroundColor = "#222222";
           
           document.getElementById(`bit${i}${2}`).style.backgroundColor = "#222222"; 
              
           }
       }

}


var html_for_not_gate = `<div class="input">
            <div class="input-buttons">
                <div id="input-A" onclick="inputClickedA_not(this.id)">A</div>
                
            </div>
          
            <div class="wires">
             <div class="wire" id="wireA"></div>
             
            </div>
          </div>
          
          <div class="gate-logo">
           <div id="not-gate-logo">
               <div class="gate-circle" style="left:68%; top:-13px;"></div>
           </div>
          </div>
          
          
          <div class="output">
              
            
            <div class="wires">
             <div class="wire">
                 
             </div>
            </div>
            
            <div id="output">C</div>
            
            
          </div> `;

var not_gate_table = `  
         <caption>Truth Table</caption>
         
         <tr>
             <th>A</th>
             <th>C</th>
         </tr>
         
         <tr>
             <td id="bit00">0</td>
             <td id="bit01">1</td>
         </tr>
         
         <tr>
             <td id="bit10">1</td>
             <td id="bit11">0</td>
         </tr>`;


var not_input_A = false;
const inputClickedA_not = (id) => {
    
    if(not_input_A){
        document.getElementById(id).style.backgroundColor  = "pink";
    document.getElementById(id).style.boxShadow = "none";
    
    
    document.getElementById("bit10").style.backgroundColor = "#222222";
    
    document.getElementById("bit11").style.backgroundColor = "#222222";
    
    document.getElementById("bit00").style.backgroundColor = "#3d3d5c";
    
    document.getElementById("bit01").style.backgroundColor = "#3d3d5c";
    
    document.getElementById("output").style.backgroundColor = "lightgreen";
    
    document.getElementById("output").style.boxShadow = "0 0 7px lightgreen";
    
    not_input_A = false;
    
    } else{
        document.getElementById(id).style.backgroundColor  = "lightgreen";
    document.getElementById(id).style.boxShadow = "0 0 7px lightgreen";
    
    document.getElementById("bit10").style.backgroundColor = "#3d3d5c";
    
    document.getElementById("bit11").style.backgroundColor = "#3d3d5c";
    
    document.getElementById("bit00").style.backgroundColor = "#222222";
    
    document.getElementById("bit01").style.backgroundColor = "#222222";
    
    document.getElementById("output").style.backgroundColor = "pink";
    
    document.getElementById("output").style.boxShadow = "none";
    
    
    not_input_A = true;
    
    
    }
    
}