var hotel = {
    room1: [420,40,10],
    room2: [460,20,100],
    room3: [230,3,0],
	room4: [0,0,0]
    };
var carro = new Array(4);
carro[0]={cor0:100, cor1:208, cor2:150};
carro[1]={cor0:300, cor1:25,  cor2:150};
carro[2]={cor0:500, cor1:125, cor2:170};
carro[3]={cor0:400, cor1:105, cor2:380};
 
document.write("<H2>ARRAYS EM UM OBJETO:</H2><br>");  
document.write("Qauarto1: ", hotel.room1[0],"<br>");  
document.write("Qauarto2: ", hotel.room2[1],"<br>");  
document.write("Qauarto3: ", hotel.room3[1],"<br>");  

document.write("<H2>OBJETOS EM ARRAY:</H2><br>");  
document.write("Carro 1, diponibilidade preto: ",  carro[0].cor1,"<br>");
document.write("Carro 4, diponibilidade branco: ", carro[3].cor2,"<br>");

 for (i in carro){
	 
	 for (k=0; k<1;k++){

	
		 document.write("carro: ", i, " cor "+ k, " = C1: ",
						carro[i].cor0, " C2: ", carro[i].cor1,
						" C3: ",carro[i].cor2, " <br>");
		 
	 }
 }


