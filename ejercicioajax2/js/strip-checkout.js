import stripeKeys from "./module/stripe-keys.js";
// console.log(stripeKeys);
const $zapatos = document.getElementById('zapatos'),
    $template = document.getElementById('zapatos-template').content,
    $fragment = document.createDocumentFragment(),
    fetchOptions = {
        headers:{
            authorization: `Bearer ${stripeKeys.secret}`
        }
    };


let prices, products;
Promise.all([
    fetch('https://api.stripe.com/v1/products',fetchOptions),
    fetch('https://api.stripe.com/v1/prices',fetchOptions)
])
.then(response=> Promise.all(response.map(res=>res.json())))
.then(json=>{
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices);
    prices.forEach(element => {
        let productData = products.filter(product=>product.id === element.product)
        console.log(productData);

        $template.querySelector('.zapato').setAttribute('data-price',element.id);
        $template.querySelector('.zapato').setAttribute('data-type',element.type)
        $template.querySelector('img').setAttribute('src',productData[0].images[0]);
        $template.querySelector('img').setAttribute('alt',productData[0].name);
        $template.querySelector('figcaption').innerHTML = `${productData[0].name}
        <br>
        $${element.unit_amount_decimal.slice(0,-2)},00/${element.currency.toUpperCase()}
        `;

        let $clone = document.importNode($template,true);
        $fragment.appendChild($clone);
        $zapatos.appendChild($fragment);
    });
})
.catch(error=>{
    console.log(error);
    let message = error.statusText||'Ocurrio un error';
    $zapatos.insertAdjacentHTML('afterend',`<p><b>Error: ${error.status}: ${message}</b></p>`);
})

document.addEventListener('click',e=>{
    if (e.target.matches(".zapato *")) {
        let price = e.target.parentElement.getAttribute('data-price')
        let mode = e.target.parentElement.getAttribute('data-type')
        Stripe(stripeKeys.public)
        .redirectToCheckout({
            lineItems:[{price:price,quantity:1}],
            mode:"payment",
            successUrl:"http://127.0.0.1:5500/ejercicioajax2/Tecnologia.html",
            cancelUrl:"http://127.0.0.1:5500/ejercicioajax2/home.html"
        })
        .then(res=>{
            console.log(res);
            if (res.error) {
                $zapatos.insertAdjacentHTML('afterend',res.error.message);   
            }
        })
    }
})







// fetch('https://api.stripe.com/v1/products',{
//     headers:{
//         authorization: `Bearer ${stripeKeys.secret}`
//     }
// })
// .then(res=>{
//     console.log(res);
//     return res.json()
// })
// .then(json=>{
//     console.log(json);
// })
// fetch('https://api.stripe.com/v1/prices',{
//     headers:{
//         authorization: `Bearer ${stripeKeys.secret}`
//     }
// })
// .then(res=>{
//     console.log(res);
//     return res.json()
// })
// .then(json=>{
//     console.log(json);
// })