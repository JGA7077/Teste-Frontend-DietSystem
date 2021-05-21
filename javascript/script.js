function changeDescription() {

    let windowWidth = window.innerWidth;
    let description = document.querySelector('#food_description')

    /* 
        Através da largura do dispositivo, decidi mudar a altura do input,
        já que em diferentes larguras a altura do input pode ser pequena demais ou grande demais
    */

    if ( windowWidth >= 320 ) {
        if ( description.value.length >= 30 ) {
            description.style.height = "100px"
        } 
        if ( description.value.length >= 135 ) {
            description.style.height = "200px"
        }
        if ( description.value.length >= 270 ) {
            description.style.height = "250px"
        }
    } else if ( windowWidth >= 1020 ) {
        if ( description.value.length >=77 ) {
            description.style.height = "100px"
        }
    }

}

function timeMask() {

    /* 
        Adicionei essa função ao usuário dar o foco no input de tempo,
        e após digitado e tirado o foco, o número é formatado
    */

    let foodTime = document.querySelector('#food_time')

    foodTime.addEventListener("change", function() {

        foodTime.value = parseFloat(foodTime.value).toFixed(2)

    })

}

function getPortionWeight() {

    /* 
        Essa função é executada ao colocar os valores na primeira seção, nos inputs de quantidade de porções e peso,
        pego esses valores, calculo a quantidade por porção e coloco nos valores na seção de porções e medidas caseiras
    */

    let totalWeight = document.querySelector('#food_weightNum')
    let foodPortions = document.querySelector('#food_portions')
    let portionWeight = document.querySelector('#portion_weight')
    let foodPortionQtd = document.querySelector('#portion_qtd')

    foodPortionQtd.value = foodPortions.value
    portionWeight.value = ( Number(totalWeight.value) / Number(foodPortions.value) ).toFixed(2)

}

function addMethod() {

    /* 
        Essa função é disparada quando o usuário coloca o foco do curso no primeiro da lista,
        e adiciona uma nova linha de lista se o último input estiver vazio
    */

    let olList = document.querySelector('.method_input')
    let listContainer = document.querySelector('.list_item')

    let lastLine = listContainer.lastElementChild

    if ( lastLine.value.length == 0 ) {


        let newListItem = `
            <div class="list_item">

                <p class="numbered"></p>
                <input type="text" name="method_instruction" id="method_instruction" onfocus="addMethod()">

                <button type="button" class="delete_method" onclick="deleteMethod()" id=${indexButton}>

                    <i class="fas fa-trash trash_icon"></i>

                </button>

            </div>
        `

        olList.insertAdjacentHTML("beforeend", newListItem)

    }

}

function portionName() {

    /* 
        Essa função é disparada apenas se o usuário mudar o valor da porção, 
        fiz aqui toda a lógica de porção no singular e no plural,
        e já que o input do plural é mostrado no layout mesmo se a porção for "singular", resolvi colocar uma mensagem amiǵavel "Deu apenas uma porção",
        caso dê apenas uma porção, dessa forma, o site passa um feedback mais consciente para o usuário
    */

    let portionName = document.querySelector('#portion_name')
    let portionNamePlural = document.querySelector('#portion_pluralName')
    let portionQtd = document.querySelector('#portion_qtd')
    let nutrientsQtd = document.querySelector('.nutrients_qtd')

    if ( portionQtd.value == 1 ) {

        portionNamePlural.value = "Deu apenas uma porção"
        nutrientsQtd.innerHTML = ` ${portionQtd.value}  ${portionName.value}`

    } else if ( portionQtd.value >= 2 ) {

        portionNamePlural.value = `${portionName.value}s`
        nutrientsQtd.innerHTML = ` ${portionQtd.value}  ${portionNamePlural.value}`

    }

}