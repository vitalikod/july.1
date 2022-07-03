 const tovar = [
    {name: 'samsung', rating: 9, price: 800,},
    {name: 'iphone', rating: 7, price: 650,},
    {name: 'huaway', rating: 6, price: 350,},
    {name: 'xiaomi', rating: 4, price: 700,},
    {name: 'arnautskaystreet', rating: 10, price: 500,},
    {name: 'citrus', rating: 3, price: 600,},
    {name: 'allo', rating: 2, price: 550,},
    {name: 'tesla', rating: 11, price: 1550,},
    {name: 'microsoft', rating: 12, price: 2550,},
    {name: 'amazon', rating: 14, price: 3550,},
    {name: 'meta', rating: 24, price: 3660,},
    {name: 'google', rating: 21, price: 3770,},
    {name: 'britishpetrolium', rating: 22, price: 3850,},
    {name: 'spacex', rating: 25, price: 4550,},
];

const container = document.createElement('div');
container.classList.add('con');
document.body.appendChild(container);

const button1 = document.createElement('button');
button1.classList.add('btn1');
button1.innerText = 'click me "sort"';
document.body.appendChild(button1);

const button2 = document.createElement('button');
button2.classList.add('btn2');
button2.innerText = 'click me "filter"';
document.body.appendChild(button2);

const button3 = document.createElement('button');
button3.classList.add('btn3');
button3.innerText = 'click me "map"';
document.body.appendChild(button3);

// const option1 = document.createElement('option');
// const option2 = document.createElement('option');
// const option3 = document.createElement('option');
// const select = document.createElement('select');
// option1.setAttribute('value', 1);
// option2.setAttribute('value', 2);
// option3.setAttribute('value', 3);
// select.classList.add('sel');
// document.body.appendChild(select);
// select.appendChild(option1);
// select.appendChild(option2);
// select.appendChild(option3);

const outsort = tovar.sort((a, b) => {
    if (a.rating > b.rating) {
        return 1;
        } else {
        return -1;
   }
});
let out1 = '';
for (let key in outsort) {
    out1 += 'название:' +' ' +outsort[key].name + ' ' + 'rating:' + ' ' +outsort[key].rating + ' ' +outsort[key].price +'<br>'
};
button1.addEventListener('click', () => {
    container.innerHTML = out1
});

const outfilter = tovar.filter(lowprice => {
    if (lowprice.price >= 350 && lowprice.price < 2000) {
        return true;
    }
});
let out2 = '';
for (let key2 in outfilter) {
    out2 += 'название:' +' ' +outfilter[key2].name + ' ' + 'rating:' + ' ' +outfilter[key2].rating + ' ' +outfilter[key2].price +'<br>'
};
button2.addEventListener('click', () => {
    container.innerHTML = out2
});


const outmap = tovar.map(company => {
    return company.name
});
let out3 = '';
for (let key3 in outmap) {
    out3 += 'название:' +' ' +outmap[key3].name + '<br>'
}
button3.addEventListener('click', () => {
    container.innerHTML = out3
});

