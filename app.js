var shop={
    iphone: {
        iphone4: {
          name: "iphone4",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 10000,
        },
        iphone4s: {
          name: "iphone4s",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 20000,
        },
        iphone5: {
          name: "iphone5",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
        iphone6: {
          name: "iphone6",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 30000,
        },
      },
      samsung: {
        a30: {
          name: "a30",
          ram: "4gb",
          rom: "64gb",
          camera: "50px",
          price: 2000,
        },
        note10: {
          name: "note10",
          ram: "6gb",
          rom: "128gb",
          camera: "50px",
          price: 4000,
        },
        s10: {
          name: "s10",
          ram: "3gb",
          rom: "128gb",
          camera: "10px",
          price: 5000,
        },
          },
          xiomi: {
            redminote10: {
              name: "redminote10",
              ram: "4gb",
              rom: "64gb",
              camera: "50px",
              price: 10000,
            },
            redminote11: {
              name: "redminote11",
              ram: "4gb",
              rom: "64gb",
              camera: "50px",
              price: 10000,
            },
            redmi10: {
              name: "redmi10",
              ram: "4gb",
              rom: "64gb",
              camera: "50px",
              price: 10000,
            },
            redmi10pro: {
              name: "redmi10pro",
              ram: "4gb",
              rom: "64gb",
              camera: "50px",
              price: 10000,
            },
       
      },
}


let ModelId;
innerBody=document.getElementById("parent")

function showModels(Model){

     ModelId=Model.id;
     let keys=Object.keys(shop[ModelId]);
    

      for(var i=0;i<keys.length;i++){
                                     innerBody.innerHTML +=`<label for="${ModelId}">${keys[i]}</label>  
                                     <input onchange="showSpecs(this)" type="checkbox"  id="${keys[i]}">`
                                    }


}
var showC=document.getElementsByClassName("show")
var show=document.getElementById("show")
let specsId;
function showSpecs(specs){
    show.innerHTML="";
   

   specsId=specs.id;
   let keys2=Object.keys(shop[ModelId][specsId])
   let value2=Object.values(shop[ModelId][specsId])
   for(var i=0;i<keys2.length;i++){
    show.innerHTML +=`<p>${keys2[i]} : ${value2[i]}       </p>  `
    
   }
 
   
    console.log(keys2)
    console.log(value2)


   

}







