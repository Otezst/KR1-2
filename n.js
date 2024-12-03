const change = document.getElementById("change")

function change_all(){
    if (document.getElementsByTagName('div')[3].innerText==='Gordeev'){

        document.getElementsByTagName('div')[3].innerText='Гордеев';
        document.getElementsByTagName('div')[4].innerText='Станислав';
        document.getElementsByTagName('div')[5].innerText='Андреевич';
    }
    else{

        if (document.getElementsByTagName('div')[3].innerText==='Гордеев'){

            document.getElementsByTagName('div')[3].innerText='Gordeev';
            document.getElementsByTagName('div')[4].innerText='Stanislav';
            document.getElementsByTagName('div')[5].innerText='Andreevich';


        }
    }
}

change.addEventListener("click", change_all)