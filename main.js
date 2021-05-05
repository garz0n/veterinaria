let consulta = [];

class veterinaria{
    constructor(nombreD, nombreMascota, tipoConsulta, tipoAnimal, diagnostico){
        this.nombreD = nombreD;
        this.nombreMascota = nombreMascota;
        this.tipoConsulta = tipoConsulta;
        this.tipoAnimal = tipoAnimal;
        this.diagnostico = diagnostico;
    }
}

function agregarConsulta(){
    let nombreD = document.getElementById('nombre').value;
    let nombreMascota = document.getElementById('nmascota').value;
    let tipoConsulta = document.getElementById('tConsulta').value;
    let tipoAnimal = document.getElementById('tipo').value;
    let diagnostico = document.getElementById('diagnostico').value;
    let veterinario = new veterinaria(nombreD, nombreMascota, tipoConsulta, tipoAnimal, diagnostico);
    consulta.push(veterinario);
    console.log(JSON.stringify(veterinario));
    agregarLista1();
}

function agregarLista1(){
    document.getElementById('tabla1').innerHTML='';
    for (let i=0; i < consulta.length; i++){//Iniciamos a recorrer el arreglo
        document.getElementById('tabla1').innerHTML=document.getElementById('tabla1').innerHTML
        +`<tr>
            <td> ${consulta[i].nombreD}</td>
            <td> ${consulta[i].nombreMascota}</td>
            <td> ${consulta[i].tipoConsulta}</td>
            <td>${consulta[i].tipoAnimal}</td>
            <td>${consulta[i].diagnostico}</td>
        </tr>`//Ingresamos los valores a la tabla
    }    
}

function eliminar(){
    let busqueda = JSON.stringify({
        nombreD : document.getElementById('nombre'),
        nombreMascota : document.getElementById('nmascota'),
        tipoConsulta : document.getElementById('tConsulta'),
        tipoAnimal : document.getElementById('tipo'),
        diagnostico : document.getElementById('diagnostico')
    });
    let indice = consulta.findIndex(consulta => JSON.stringify(consulta) === busqueda);
    console.log(busqueda, indice);
    if(indice != -1){
        alert('Se eliminó correctamente');
        consulta.splice(indice,1);
        agregarConsulta();
        agregarLista1();
    }
    else{
        alert('No se pudo eliminar');
    }
}

function buscarConsulta(){
    let busqueda = JSON.stringify({
        nombreD : document.getElementById('nombre'),
        nombreMascota : document.getElementById('nmascota'),
        tipoConsulta : document.getElementById('tConsulta'),
        tipo : document.getElementById('tipo'),
        diagnostico : document.getElementById('diagnostico')
     });
     let i = consulta.findIndex(consulta => JSON.stringify(consulta) === busqueda);
     if(i == false){
         alert('Encontrado correctamente');
     }else{
         alert('No se pudo encontrar');
     }
    }
