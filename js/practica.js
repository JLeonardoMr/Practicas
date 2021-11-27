let dineroCofla = 3;
let dineroRoberto = 2;
let dineroPedro = 0.9;

dineroCofla = parseInt(dineroCofla);
dineroRoberto = parseInt(dineroRoberto);
//no entiendo porque da un error esta verga
//dineroPedro = parseInt(dineroPedro);


//if(dineroCofla >= 3){
 //   document.write(`<br>pote de 1/4 KG`);
//}else if(dineroCofla >= 2.9){
 //   document.write(`<br>Potecito de helado con confites`);
//}else if(dineroCofla >= 1.8){
 //  document.write(`<br>bombon helado marca helardo`);
//}else if(dineroCofla >= 1.7){
 //  document.write(`<br>bombon helado marca helardovich`);
//}else if(dineroCofla >= 1.6){
 //   document.write(`<br>bombon helado marca heladix`);
//}else if(dineroCofla >= 1){
 //   document.write(`<br>Palito de helado de crema`);
//}else if(dineroCofla >= 0.6){
 //   document.write(`<br>Palito de helado de agua`);
//}else if(dineroCofla >= 0){
 //   document.write(`<br>un puñetazo`);
//}

if(dineroCofla >= 0.6 && dineroCofla < 1){
    document.write(`<br>Palito de helado de agua`);
    document.write(" Y te sobran " + (dineroCofla - 0.6));
}else if(dineroCofla >= 1 && dineroCofla < 1.6){
    document.write(`<br>Palito de helado de crema`);
    document.write(" Y te sobran " + (dineroCofla - 1));
}else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
   document.write(`<br>bombon helado marca heladix`);
   document.write(" Y te sobran " + (dineroCofla - 1.6));
}else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
   document.write(`<br>bombon helado marca helardovich`);
   document.write(" Y te sobran " + (dineroCofla - 1.7));
}else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    document.write(`<br>bombon helado marca helardo`);
    document.write(" Y te sobran " + (dineroCofla - 1.8));
}else if(dineroCofla >= 2.9 && dineroCofla < 3){
    document.write(`<br>Potecito de helado con confites`);
    document.write(" Y te sobran " + (dineroCofla - 2.9));
}else if(dineroCofla >= 3 && dineroCofla >= 3){
    document.write(`<br>pote de 1/4 KG`);
    document.write(" Y te sobran " + (dineroCofla - 3));
}

if(dineroRoberto >= 3){
    document.write(`<br>pote de 1/4 KG`);
    document.write(" Y te sobran " + (dineroRoberto - 3));
}else if(dineroRoberto >= 2.9){
    document.write(`<br>Potecito de helado con confites`);
    document.write(" Y te sobran " + (dineroRoberto - 2.9));
}else if(dineroRoberto >= 1.8){
    document.write(`<br>bombon helado marca helardo`);
    document.write(" Y te sobran " + (dineroRoberto - 1.8));
}else if(dineroRoberto >= 1.7){
    document.write(`<br>bombon helado marca helardovich`);
    document.write(" Y te sobran " + (dineroRoberto - 1.7));
}else if(dineroRoberto >= 1.6){
    document.write(`<br>bombon helado marca heladix`);
    document.write(" Y te sobran " + (dineroRoberto - 1.6));
}else if(dineroRoberto >= 1){
    document.write(`<br>Palito de helado de crema`);
    document.write(" Y te sobran " + (dineroRoberto - 1));
}else if(dineroRoberto <= 0.6){
    document.write(`<br>Palito de helado de agua`);
    document.write(" Y te sobran " + (dineroRoberto - 0.6));
}
//ESTE METODO DA UN ERROR NO SE PORQUE
if(dineroPedro >= 3){
    document.write(`<br>pote de 1/4 KG`);
    document.write(" Y te sobran " + (dineroPedro - 3));
}else if(dineroPedro >= 2.9){
    document.write(`<br>Potecito de helado con confites`);
    document.write(" Y te sobran " + (dineroPedro - 2.9));
}else if(dineroPedro >= 1.8){
    document.write(`<br>bombon helado marca helardo`);
    document.write(" Y te sobran " + (dineroPedro - 1.8));
}else if(dineroPedro >= 1.7){
    document.write(`<br>bombon helado marca helardovich`);
    document.write(" Y te sobran " + (dineroPedro - 1.7));
}else if(dineroPedro >= 1.6){
    document.write(`<br>bombon helado marca heladix`);
    document.write(" Y te sobran " + (dineroPedro - 1.6));
}else if(dineroPedro >= 1){
    document.write(`<br>Palito de helado de crema`);
    document.write(" Y te sobran " + (dineroPedro - 1));
}
//AQUI EL ERROR
else if(dineroPedro >= 0.6){
    document.write(`<br>Palito de helado de agua`);
    document.write(" Y te sobran " + (dineroPedro - 0.6));
}
//AQUI EL ERROR