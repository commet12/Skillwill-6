const gilaki = document.getElementById('gilaki');
const input = document.getElementById('input');
const sabolood = document.getElementById('sabolood')


gilaki.addEventListener("click", () => {
    const chawera = input.value;
    const dashlaarmoshla = chawera.split(":").map(i => Number(i))
    
    
    

    let finish = 0;

    for (let i = 0; i < dashlaarmoshla.length; i++) {
        finish += dashlaarmoshla[i];
    }

    const sashualo = finish / dashlaarmoshla.length;
    sabolood.textContent = `sashualo aris ${sashualo.toFixed(1)}`
    
})



