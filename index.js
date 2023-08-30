const sabadCart = [{
    name: 'nike',
    size: '38'
} , {
    name: 'Fendi',
    size: '36'
}]

const addNewtheProduct = (newtheProduct) => {
    if (!newtheProduct.name && !newtheProduct.size) return null;

    sabadCart.push(newtheProduct)
}
addNewtheProduct({name: 'Skechers' , size: '41'});
delete sabadCart[1]
console.log(sabadCart)