let amount = '50,000';
let order = '0';

function industry(order){
    if(order < amount){
        console.log('discount will be 5% for industry');
    }
    else if(order > amount){
        console.log('discount will be 7.5% for industry');
    }
    // else if(order === '100,000'){
    //     console.log('discount will be 10% for industry');
    // }
}

function govt(order){
    if(order < amount){
        console.log('discount will be 6.5% for industry');
    }
    else if(order > amount){
        console.log('discount will be 8.5% for industry');
    }
}

function univ(order){
    console.log('discount will be 7.5% for industry');
}

industry('25,000')
// industry('100,000')
govt('75,000')
univ('10,000')
