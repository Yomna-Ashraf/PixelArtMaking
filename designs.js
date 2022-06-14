function makeGrid(){
    const x = document.getElementById('inputHeight').value;
    const y = document.getElementById('inputWidth').value;
    const table= document.getElementById('pixelCanvas');
    html=' ';
     for( var i=0 ; i<x; i++ ){
       html+="<tr>";
       
       for( var k=0 ; k<y; k++ ){
           html+="<td onclick='this.style.backgroundColor=setColor()'></td>";
       }
 
       html+="</tr>";
     }
     table.innerHTML=html;  
       return false;
 }
 function setColor(){
      const c= document.getElementById('colorPicker').value;
     return c;
 }
 
 
 