const btn = document.querySelector('#calcular')
const inputPrice = document.querySelector('#price')
const inputCupon = document.querySelector('#cupon')
const pResult = document.querySelector('#result')

//const cuponesObj = { 
    //'RamsesGV': 30, 
    //'12': 25,
    //'Ale': 80
//}

const cuponesArr = []
cuponesArr.push({
    name: 'Ramses',
    discount: 30,
    limite: 500
})

cuponesArr.push({
    name: 'Ale',
    discount: 25
})




const calcularPrecioDescuento = () => { 
const price = Number(inputPrice.value)
const cupon = inputCupon.value;

if(!price || !cupon) { 
    pResult.innerText = 'Por favor llena el formulario'
    return;
}

let discount;

const cuponesEnArray = cuponesArr.find( (cuponElement) => {
return cuponElement.name == cupon
})

if (cuponesEnArray) { 
discount = cuponesEnArray.discount
} else { 
pResult.innerText = 'no existe el cupon'
return;
}

//if (cuponesObj[cupon]) { 
// discount = cuponesObj[cupon]
//} else { 
//pResult.innerText = 'no existe el cupon'
//return;
//}

//switch (cupon) {
    //case 'RamsesGV':
      //discount = 30  
        //break;
    //case 'Ale':
        //discount = 25
        //break
    //default: 
         //pResult.innerText = 'no existe el cupon'
    //return;
        //break;
//}

//if(cupon == 'RamsesGV') { 
//discount = 30
//} else if  (cupon == 'Ale') { 
//discount = 25
//} else { 
//pResult.innerText = 'no existe el cupon'
//return;
//}





const newPrice = (price *(100 - discount)) / 100
pResult.innerText = 'El nuevo precio con descuento es $ ' + newPrice
}




btn.addEventListener('click', calcularPrecioDescuento)