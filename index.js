const carsList = {
    VAZ: ["Выберите модель", "CL", "Integra","MDX", "RDX", "RL", "RSX", "TL", "TLX", "TSX", "ZDX"],
    AUDI: ["Выберите модель", "Crir", "Integra","MDX", "RDX", "RL", "RSX", "TL", "TLX", "TSX", "ZDX"],
    BMW: ["Выберите модель", "Crir", "Integra","MDX", "RDX", "RL", "RSX", "TL", "TLX", "TSX", "ZDX"],
    Changan: ["Выберите модель", "Changan CS"],
  };
  
  const modificationList = {
    VAZ_1: ["Выберите модификацию", "RDX 01.2012- настоящее время", "RDX 04.2006-01.2012"],
    AUDI_1: ["Выберите модификацию", "RDX 01.2012- настоящее время", "RDX 04.2006-01.2012"],
    BMW_1: ["Выберите модификацию", "RDX 01.2012- настоящее время", "RDX 04.2006-01.2012"],
    Changan_1: ["Выберите модель", "Changan CS 35", "Changan CS 55"],
  };
  
  const cars = document.querySelector("#cars");
  const model = document.querySelector("#model");
  const modification = document.querySelector("#modification");
  
  window.onload = selectCars;
  window.onload = selectModification;
  cars.onchange = selectCars;
  model.onchange = selectModification;
  modification.onchange = getFilter;
  
  function selectCars(ev){
   
    model.innerHTML = "";
     modification.innerHTML = "";
    var c = this.value || "0", o;
    for(let i = 0; i < carsList[c].length; i++){
      o = new Option(carsList[c][i],this.value+"_"+i,false,false);
      model.add(o);
    };
  }
  
  function selectModification(ev){
   
     modification.innerHTML = "";
    var c = this.value || "0", o;
    for(let i = 0; i < modificationList[c].length; i++){
      o = new Option(modificationList[c][i],modificationList[c][i],false,false);
      modification.add(o);
   //console.log(o);
    };
   
  }
  
  function getFilter (ev) {
    console.log(this.value);
  }

