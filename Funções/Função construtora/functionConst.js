function Fabrica( nome , anoFundacao , local , nicho){
   this.nome = nome; 
   this.anoFundacao = anoFundacao ; 
   this.local = local;
   this.nicho = nicho; 
}

const Fabrica01 = new Fabrica('BornTech' , 2000 , "Descalvado" , "Tecnologia"); 

console.log(Fabrica01.nome)