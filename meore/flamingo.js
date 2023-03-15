


function ferebi() {
    const input1 = document.getElementById('input').value;
    const ravici = ['blue', 'white', 'black', 'green', 'red']

    if (ravici.includes(input1))  {
        return document.body.style.backgroundColor = input1;
    } else {
        alert("you can't choose this color, please try one of them: Green(arrow), Red(Rafael), Blue(Power Rangers), black or white.")
    }


    

}