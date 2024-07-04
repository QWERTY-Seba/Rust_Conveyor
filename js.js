const ref_compontentes = {}
const ref_recursos = {}

//CREAR LISTA DE ELEMENTOS NO TOCABLES Y VALIDAR
//AGREGAR OPCION PARA GUARDAR CONFIGS
//AGREGAR OPCION PARA "CONSIDERAR CUANDO MAX STACK >= ..."

//LA BALA DEL 5 APARECE CON POLVORA NULL
var ultimos_items_filtrados = []

const datos_estadistica = {"Metal Fragments":[2,2,2,2,2,2,2,60,120,90,15,15,90,4,45,30,24,30,60,45,45,12,60,39,45,15,15,6,45,60,9,21,30,45,2,105,15,60,15,6,45,30,45,45,33,45,18,15,15,240,21,90,90,60,36,15,45,45,45,21,45,2,60,3,30,45,60,42,60,32,45,107,12,120,120,60,120,120,45,135,12,60,10,60,18,3,6,15,6,62,195,6,30,72,18,60,45,45,45,45,90,62,120,45,12,45,105,195,12,21,15,18,45,15,18,15,45,19,2,2,45,30,12,12,12,30,15,15,102,72,72,72,72,2,2,2,30,4,4,72,120,45,3,2,2,45,45,2,45,18,45,60,20,30,60,45,6,4,195,15,210,60,30,90,150,2,2,120,30,45,60,60,78,24,15,15,15,15,19,4,4,94,62,2,2,30,24,15,6,180,120,60,42,42,42,42,2,45,45,138,18,120,150,60,15,60,45,62,60,30,6,120,75,135,2,45,0,30,2,60,15,90,27,12,105,30,75,2,60,45,72,180,17,90,90,92,4,60,18,4,45,90,60,90,60,105,90,15,18,15,12,75,120,77,30,2,2,45,2,20,30,32,20,30,27,120,45,2,90,92,362,120,90,120,165,15,45,120,15,72,45,12,15,15,90,300,30,2,2,30,48,45,77,2,12,60,60,4,105,10,90,60,60,60,45,90,60,45,45,2,30,30,60,18,6,60,105,62,105,62,2,17,2,2,45,6,2,90,195,30,30,90,60,30,15,15,15,12,12,75,60,45,135,69,45,2,45,45,60,12,105,27,60,300,600,60],"Gun Powder":[3,3,3,9,5,9,0,36,18,45,3,6,30,18,6,6,15,18,2,2,2,60,18,30,3,2,90,120,18,18,0,18,9,90,3,21,120,18,4,18,9,9],"Sulfur":[6,3,6,2,2,0],"High Quality Metal":[48,30,5,3,12,15,3,30,6,5,12,6,2,6,3,6,3,1,3,7,4,3,2,2,6,9,36,5,5,5,5,5,3,8,12,2,2,24,30,3,3,6,3,24,30,12,17,11,2,3,11,3,9,2,2,21,30,3,15,6,5,5,6,2,11,9,6,3,2,2,24,2,2,2,2,2,2,30,2,5,2,2,5,5,2,3,4,3,3,2,2,15,12,2,2,2,3,2,2,15,8,12,2,2,8,2,12,60],"Scrap":[6,6,12,12,42,12,48,24,14,12,30,2,3,12,6,18,24,12,0,7,13,6,12,12,54,9,9,9,12,12,6,24,30,30,6,24,12,44,48,42,12,12,24,24,2,54,42,18,36,24,6,30,24,2,2,6,12,7,48,12,6,12,24,2,24,24,18,18,18,12,6,30,6,6,6,6,18,8,6,8,2,24,18,24,30,9,12,12,24,24,12,6,6,18,1,12,24,24,24,24,24,18,30,24,6,30,12,12,12,1,24,21],"Explosives":[1,6,12],"Cloth":[60,6,12,108,3,3,108,18,3,12,18,84,9,30,9,9,60,12,6,48,6,12,6,24,3,6,12,6,12,9,6,15,15,15,12,12,57,60,18,18,48,108,6,6,3,12,84,15,15,15,1,60,108,18,12,18,108,6,108,72,30,9,60,78,30,30,6,60,12,12,6,60,60,48,18,1,72,9,48,18,48,9,6,6,108,6,18,84,6,120,3,72,138,6,12,6,60,6,12,15,6,48,48,48,48,18,15,6,6,18,6,6,108,30,15,18,18,48,6,18,78,3,60,6,60,84,12,6,18,18,12,84,3,3,15,48,6,12,60,6,3,1,60,6,6,9,18,18,18,18,18,9,18],"Wood":[300,60,60,120,180,60,30,60,5,120,12,60,75,30,120,60,240,60,60,480,120,60,45,120,60,60,60,60,60,15,45,45,6,45,60,30,60,60,60,240,60,120,60,1,900,6,120,60,60,150,120,15,120,120,45,60,60,60,90,360,90,60,120,300,150,90,360,30,60,60,60,60,30,60,6,60,120,3,60,75,60,300,180,60,60,60,90,120,60,60,78,120,300,30,90,300,30,60,45,60,90,60,300,60,120,60,60,45,60,60,240,12,120,120,120,180,180,75,120,60,90,60,75,30,60,600,18,24,12,60,60,12,150,150,150,90,120,120,60,300,120,120,180,210,120,60,8,180,150,240,180,90,120,180,180,180,30,300,90,105],"Targeting Computer":[1,1],"CCTV Camera":[1,1,1,1],"Low Grade Fuel":[9,6,3,18,3,3,12,2,3,60,18,30,9,6,45,9,45,6,6,60,6,30,9,9,9,6,3,150,15,18,12,1,6,9,6],"Bone Fragments":[42,2,12,18,18,18,18,18,18,12,12,12,12,12,12,30],"Leather":[12,6,6,6,9,6,6,30,12,30,30,12,6,12,12,12,12],"Pumpkin":[1,2,2],"Crude Oil":[3],"Stones":[30,120,120,150,2,1,900,900,300,60,6,60,180,60,300,60,60,12,3],"RF Broadcaster":[1],"RF Receiver":[1],"Road Signs":[3,2,1,1,3,1,3],"Wolf Skull":[1,1,1,1,1,1,1],"Glue":[1],"Charcoal":[2,30],"Raw Human Meat":[4,4,4,2,2,2,2,2,2],"Animal Fat":[9,9,9,12,6,6,6,1,6,6,6,6],"Wooden Ladder":[1,1],"Medical Syringe":[2],"Beancan Grenade":[3],"Small Stash":[1],"Human Skull":[1,1],"Wooden Spear":[1],"Electric Fuse":[3],"Empty Tuna Can":[1]}

//CAMBIAR A UNA MANERA MAS EFICIENTE
var elementos_esenciales = [
"5.56 Rifle Ammo",
"Pistol Bullet",
"Incendiary 5.56 Rifle Ammo",
"Explosive 5.56 Rifle Ammo", 
"Rocket",
"Satchel Charge",
"Targeting Computer",
"Timed Explosive Charge",

"Explosives",
"Gears",
"Gun Powder",

"High External Stone Wall",
"Armored Double Door",
"L96 Rifle",
"Assault Rifle",
"M249",
"MLRS Rocket",
"Minigun",


"Auto Turret", 
"Bed", 
"Coffin",
"Large Rechargeable Battery",
"Large Wood Box",
"Shotgun Trap",
"Storage Barrel Horizontal",
"Storage Barrel Vertical",
"Storage Adaptor",

"Chainsaw",
"Jackhammer",

"Large Medkit",
"Medical Syringe",

"Large Backpack",
"Boots",
"Hoodie",
"Metal Chest Plate",
"Metal Facemask",
"Pants",
"Roadsign Gloves",
"Tactical Gloves",
"Road Sign Kilt"
]
document.querySelector("input[type='checkbox'][name='escential_items']").addEventListener("change", () => {
	


})


//HABILITADO, ES_COMPONENTE, MIN
const valores_input = {}
const recursos = ["Gun Powder", "Sulfur","High Quality Metal","Scrap", "Metal Fragments", "Stones", "Wood", "Cloth"]
const const_componentes = {
	"Empty Propane Tank" : {"Scrap" : 1, "Metal Fragments" : 60},
	"Gears" : {"Scrap" : 12, "Metal Fragments" : 15},
  "Metal Blade" : {"Scrap" : 2, "Metal Fragments" : 18},
  "Metal Pipe" : {"Scrap" : 6, "Metal Fragments" : 2},
  "Metal Spring" : {"Scrap" : 12, "Metal Fragments" : 2},
  "Rifle Body" : {"Scrap" : 30, "Metal Fragments" : 2},
  "Road Sign" : {"Scrap" : 6, "High Quality Metal" : 2},
  "Rope" : {"Cloth" : 18},
  "Semi Automatic Body" : {"Scrap" : 18, "Metal Fragments" : 90, "High Quality Metal" : 2},
  "Sewing Kit" : {"Cloth" : 48},
  "Sheet Metal" : {"Scrap" : 9, "Metal Fragments" : 12, "High Quality Metal" : 2},
  "SMG Body" : {"Scrap" : 18, "High Quality Metal" : 2},
  "Tarp" : {"Cloth" : 60},
  "Tech Trash" : {"Scrap" : 24, "Metal Fragments" : 2},
  "Burst Module" : {"High Quality Metal" : 6} 
}

import * as data from './json.json'
const {const_elementos} = data

//CREAR ELEMENTOS HTML Y ASIGNARLOS A CADA OBJETO DEL LISTADO
//CALCULAR LOS ATRIBUTOS DE RECYCLER
//FILTRADO Y OCULTADO DE ELEMENTOS EN BASE A FILTRO
//AGRUPAR POR X CANTIDAD DE ELEMENTOS



//UTILIZAR CONST Y DECLARAR ACA TODOS LOS INPUTS QUE ESTAN EN EL HTML

const radio_Fullrecycle = document.querySelector("input[type='radio']#FullRecycle")

//AGREGAR  FUNCION PARA PODER OCULTAR LA COLUMNA RECYCLE O FULL RECYCLE DEPENDIENDO DE CUAL SE SELECCIONA
 

let mostrar_tabla = false
let display_fila = mostrar_tabla ? 'table-row' : 'none'

function Crear_Fila_Elemento(elemento){
		  let tr = document.createElement('tr')
      tr.style.display = display_fila
      
      if(!elemento.item){
      	console.warn("NO TIENE ITEM ", elemento.name)
      	elemento.item = {"StackSize" : 1, Shortname : null, id : null}
      }
      tr.innerHTML = `<td><img src="${elemento.image}"/></td>
      <td>${elemento.name}</td>
      <td>${JSON.stringify(elemento.components)}</td>
      <td>${JSON.stringify(elemento.recycler)}</td>
      <td>${JSON.stringify(Multiplicar_Componentes(elemento.components, elemento.item.StackSize ))}</td>
      <td>${JSON.stringify(Multiplicar_Componentes(elemento.recycler, elemento.item.StackSize ))}</td>
      `
     
	return tr
}

/*
function Valor_a_Numero(valor){
	
  
  if (valor.indexOf('%') > -1){
  	return 1
  }
    
  return parseInt(valor.slice(1))
  
}
*/

// COMPONENTE > 


//CREAR REGISTRO CON DATA
//ACEPTAR RECURSO Y COMPONENTES
function mostrar_grafico(elemento){

}



function Crear_filtros_input(){

  let contenedor = document.querySelector("#contenedor_filtros")
  let contenedor_inputs = document.createElement('div')
  contenedor.append(contenedor_inputs)
  contenedor_inputs.id = "contenedor_inputs"
  var crear_elemento = (nombre) => {
  	//AGREGAR ICONO SI USAR CONDICION EN FULL RECY O NORMAL
  	//CAMBIAR A ICONOS Y SEPARAR VISUALMENTE RECURSOS Y COMPONENTES
  	let div = document.createElement("div")
    div.classList.add("input_recurso")
    div.style.border = "1px solid gray"
    
    //CREAR UN SUBDIV QUE SEA DESACTIVADO USANDO EL CHECKBOX
    valores_input[nombre] = {}
    
    let check_deseable = document.createElement("input")
    check_deseable.type = "checkbox"
    check_deseable.name = nombre + "_deseable"
    check_deseable.classList.add("deseable")
    valores_input[nombre].habilitado = check_deseable
    
  	let input = document.createElement("input")
    input.type = "number"
    input.name = nombre
    valores_input[nombre].min = input
    
    
    let label = document.createElement("label")
    label.htmlFor = nombre
    label.innerText = nombre
    

    
    div.append(check_deseable, input, label)
    return div
  }

	for(let recurso of recursos){
  	contenedor_inputs.append(crear_elemento(recurso))
    valores_input[recurso].es_componente = false
  }
  for(let componente of Object.keys(const_componentes)){
  	contenedor_inputs.append(crear_elemento(componente))
    valores_input[componente].es_componente = true
  }

}


function Multiplicar_Componentes(componentes, cantidad){
	let res = structuredClone(componentes)
  for(let componente of Object.keys(res)){
  	res[componente] *= cantidad 
  }
  return res

}

function Calcular_Recycler_Elemento(elemento) {
    let res = {};
    for (let [nombre_componente, valor_componente] of Object.entries(elemento.components)) {
        let elemento_componente = const_elementos[nombre_componente];
        
        if(elemento_componente == undefined){
        	res[nombre_componente] = (res[nombre_componente] || 0) + valor_componente;
            continue
        }
        
        
        if (elemento_componente.category === "Resources") {
            res[nombre_componente] = (res[nombre_componente] || 0) + valor_componente;
            continue
        } 
        for (let [nombre_sub_componente, valor_sub_componente] of Object.entries(elemento_componente.components)) {
          res[nombre_sub_componente] = (res[nombre_sub_componente] || 0) + valor_sub_componente;
        }
       
    }
    return res;
}



function Main(){
	//AGREAGAR CODIGO PARA MAPEAR LAS CATEGORIAS DENTRO DE LOS ELEMENTOS, NO ESTAN  CORRECTAMENTE
	crear_botones_categorias()
  Crear_filtros_input()
  
  let table_body = document.querySelector("tbody")
  
  //DD
  let cat = {}
  let datos_estadistica = {}
  
  for(let elemento of Object.values(const_elementos)){
    //elemento.recycler = Calcular_Recycler_Elemento(elemento)
		
    
    //DD
    /*
    for(let recurso of Object.keys(elemento.recycler)){
    		let grupo = cat[elemento.category]
        if(datos_estadistica[recurso]){
        		datos_estadistica[recurso].push(elemento.recycler[recurso])
        }else{
        datos_estadistica[recurso] = [elemento.recycler[recurso]]	
        }
        
        
        
        if(grupo){
        	if(grupo[recurso] != null){
          	
          	grupo[recurso] += 1
          }else{
          	grupo[recurso] = 1
            
          }
          
        }else{
        	cat[elemento.category] = {}
        }
    }
		*/


    let elemenento_tr = Crear_Fila_Elemento(elemento)
    elemento.html = elemenento_tr
    table_body.append(elemenento_tr)

  }
	console.log(cat)
  console.log(JSON.stringify(datos_estadistica))
}

const input_categorias = {}

function crear_botones_categorias(){
	const categorias = [
  			"#bp_deployables",
        "Ammo",
        "Clothing",
        "Components",
        "Construction",
        "Electrical",
        "Food",
        "Fun",
        "Medical",
        "Other",
        "Resources",
        "Tools",
        "Traps",
        "Weapons"]
        
 	let contenedor = document.querySelector("#contenedor_filtros")
  var crear_html = (categoria) => {
  		let div = document.createElement("div")
      div.classList.add("input_categoria")
      
      let checkbox = document.createElement("input")
      checkbox.type = "checkbox"
      checkbox.name =  categoria + "_checkbox"
      checkbox.checked = "checked"
      
      let label = document.createElement("label")
      label.htmlFor = categoria + "_checkbox"
      label.innerText = categoria
      div.append(checkbox, label)
      
      input_categorias[categoria] = checkbox
      return div
  } 

let div = document.createElement("div")
div.id = "contenedor_categorias"
  for(let categoria of categorias){
  	let html = crear_html(categoria)
    div.append(html)
  }
  contenedor.append(div)
}

//AGREGAR ESTADISTICAS DE LOS OBJETOS?, CANTIDAD DE OBJETOS POR RECURSO Y CANTIDAD OBTENIDA DEL RECURSO

//CREAR MODO DE FILTRADO UTILIZANDO GRAFICOS, UN SLIDE DE IZQUIERDA A DERECHA

function Filtrar_Tabla(){
    const modo = radio_Fullrecycle.checked ? "recycler" : "components";
    console.log("USANDO MODO", modo);

    var res = {};
    let temp_input_values = {};
    
    for(let input of Object.keys(valores_input)){
        res[input] = [[]];
        if(!valores_input[input].habilitado.checked){
            temp_input_values[input] = null;
            continue;
        }
        temp_input_values[input] = valores_input[input].min.value == "" ? 0 : parseInt(valores_input[input].min.value);
    }
    console.log(temp_input_values);

    for(let elemento of Object.values(const_elementos)){
        let category_value = input_categorias[elemento.category].checked;
        if(!category_value || elementos_esenciales.includes(elemento.name) ){
            elemento.html.style.display = 'none';
            continue;
        }

        let sorted_recursos = Object.keys(elemento[modo]).sort((a, b) => recursos.indexOf(a) - recursos.indexOf(b));
        let grouped = false;
        for(let recurso of sorted_recursos){
            if(temp_input_values[recurso] == null || elemento[modo][recurso] == null){
                continue;
            }

            if(temp_input_values[recurso] <= elemento[modo][recurso]){
                elemento.html.style.display = display_fila;
                if(res[recurso][0].length == 30){
                    res[recurso].unshift([]);
                }
                res[recurso][0].push(elemento);
                grouped = true;
                break;
            }
        }

        if(!grouped){
            elemento.html.style.display = "none";
        }
    }

    mostrar_resultado(res);
}

/*
function mostrar_resultado(res){
    console.log("Resultado del filtrado:");
    for(let [recurso, arrays] of Object.entries(res)){
        if(arrays[0].length == 0){
            continue;
        }
        
        let json_res = [];

        for(let datos of arrays){
            for(let elemento of datos){
                let rust_conveyor_item = {
                    "TargetCategory": null,
                    "MaxAmountInOutput": 0,
                    "BufferAmount": 0,
                    "MinAmountInInput": 0,
                    "IsBlueprint": false,
                    "BufferTransferRemaining": 0,
                    "TargetItemName": elemento.item.Shortname
                };
                json_res.push(rust_conveyor_item);
            }
        }

        console.log(`Recurso: ${recurso}`);
        console.log(JSON.stringify(json_res));
    }
}
*/

function mostrar_resultado(res){
    let result_div = document.querySelector("#result");
    result_div.innerHTML = "";

    console.log(res);
    let fragment = document.createDocumentFragment();

    for(let [recurso, arrays] of Object.entries(res)){
        if(arrays[0].length == 0){
            continue;
        }

        let div = document.createElement("div");

        let header = document.createElement("div");
        header.innerHTML = `<h1>${recurso}</h1>`;
        header.classList.add("res_header");
        div.appendChild(header);

        let body = document.createElement("div");
        body.classList.add("res_body");
        div.appendChild(body);

        for(let datos of arrays){
            let group_datos = document.createElement("div");
            body.appendChild(group_datos);

            let copy_button = document.createElement("button");
            copy_button.innerText = `copy to clipboard`;
            group_datos.appendChild(copy_button);

            let json_res = [];

            for(let elemento of datos){
                let elemento_img = document.createElement("img");
                elemento_img.src = elemento.image;
                group_datos.appendChild(elemento_img);

                let rust_conveyor_item = {
                    "TargetCategory": null,
                    "MaxAmountInOutput": 0,
                    "BufferAmount": 0,
                    "MinAmountInInput": 0,
                    "IsBlueprint": false,
                    "BufferTransferRemaining": 0,
                    "TargetItemName": elemento.item.Shortname
                };
                json_res.push(rust_conveyor_item);
            }

            copy_button.addEventListener("click", () => {
                group_datos.style.background = "red";
                navigator.clipboard.writeText(JSON.stringify(json_res));
            });
        }
        fragment.appendChild(div);
    }
    result_div.appendChild(fragment);
}


Main()

//HAY QUE HACER UN FILTRO NEGADO PARA EXTRAER LOS QUE NO QUEREMOS
//EN LA OPTIMIZACION TRATAR DE REDUCIR LA CANTIDAD DE FILTROS de 30
function Optimizar_filtros(){

}
//TRANSFORMAR TODAS LOS 30 A JSON
function Exportar_Tabla(){

}
