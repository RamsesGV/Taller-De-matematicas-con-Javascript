const btn = document.querySelector('#calcular')
const inputPrice = document.querySelector('#price')
const inputDiscount = document.querySelector('#discount')
const pResult = document.querySelector('#result')

const calcularPrecioDescuento = () => { 
const price = Number(inputPrice.value)
const discount = Number(inputDiscount.value)

if(!price || !discount) { 
    pResult.innerText = 'Por favor llena el formulario'
    return;
}
if(discount > 100) { 
    pResult.innerText = 'no puede tener un descuento mayor a 100'
    return;
}

const newPrice = (price *(100 - discount)) / 100
pResult.innerText = 'El nuevo precio con descuento es $ ' + newPrice
}




btn.addEventListener('click', calcularPrecioDescuento)