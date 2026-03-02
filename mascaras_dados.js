/**PEGANDO ELEMENTOS DO DOM */
const inputCPF = document.querySelector("#cpf")
const inputTelefone = document.querySelector("#telefone")
const inputData = document.querySelector("#datas")
const inputEmail = document.querySelector("#email")
const inputCEP = document.querySelector("#cep")
const fomulario = document.querySelector("#formulario_pessoa")
const btnCadatro = document.querySelector("#btn_cadastrar")

/**FUNÇÕES VALIDAÇÃO DE DADOS E DEFINIÇÃO DE MÁSCARAS */
inputCPF.addEventListener("input", (evt) => {
    let numCPF = evt.target.value

    numCPF = numCPF.replace(/\D/g, '')

    numCPF = numCPF.replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    evt.target.value = numCPF

    if (numCPF.length == 14) {
        infoCPF(validaCPF(numCPF))
    }
})

const infoCPF = (validade) => {
    const div_msg_cpf = document.querySelector("#msg_cpf")

    if (!validade) {
        div_msg_cpf.classList.remove("msg_cpf")
        div_msg_cpf.textContent = 'CPF inválido'
        btnCadatro.setAttribute("disabled", "disabled")
    } else {
        div_msg_cpf.classList.add("msg_cpf")
        div_msg_cpf.textContent = ''
        btnCadatro.removeAttribute("disabled")
    }
}

const validaCPF = (pCPF) => {
    //https://www.campuscode.com.br/conteudos/o-calculo-do-digito-verificador-do-cpf-e-do-cnpj

    //https://www.macoratti.net/alg_cpf.htm
    
    const cpfArray_bloco1 = pCPF.replaceAll('.', '').split('-')
    const cpfArray_bloco2 = cpfArray_bloco1[1]
    let cont = 0, acum = 0
    let validade = false

    for (i = 10; i >= 2; i--) {
        acum += parseInt(cpfArray_bloco1[0].charAt(cont)) * i
        cont++
    }

    let num_verificador_bloco1 = 11 - (acum % 11)

    if (num_verificador_bloco1 == cpfArray_bloco2[0]) {
        validade = true
    }


    if (validade) {
        cont = 0, acum = 0

        let digitos = cpfArray_bloco1[0] + cpfArray_bloco2[0]

        for (i = 11; i >= 2; i--) {
            acum += parseInt(digitos.charAt(cont)) * i
            cont++
        }

        let num_verificador_bloco2 = 11 - (acum % 11)

        if (num_verificador_bloco2 == cpfArray_bloco2[1]) {
            validade = true
        }

    }

    return validade
}

inputTelefone.addEventListener("input", (evt) => {
    let numTel = evt.target.value

    numTel = numTel.replace(/\D/g, "")

    if (numTel.length > 11) {
        numTel = numTel.slice(0, 11); // Limita a 11 dígitos
    }

    if (numTel.length > 10) {
        // Celular: (99) 99999-9999
        numTel = numTel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    } else if (numTel.length > 5) {
        // Fixo: (99) 9999-9999
        numTel = numTel.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (numTel.length > 2) {
        numTel = numTel.replace(/(\d{2})(\d{0,5})/, "($1) $2");
    }

    evt.target.value = numTel

})

inputData.addEventListener("input", (evt) => {
    let numData = evt.target.value

    numData = numData.replace(/\D/g, "")

    numData = numData.replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{2})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d{1,4})/, "$1/$2")

    evt.target.value = numData

    if (numData.length == 10) {
        validaData(numData)
    }
})

const validaData = (pData) => {
    const div_msg_data = document.querySelector("#msg_data")

    const dataArray = pData.split('/')
    const dataConvertida = `${dataArray[2]}-${dataArray[1]}-${dataArray[0]}`
    const inputData = new Date(dataConvertida)

    if (isNaN(inputData.getTime())) {
        div_msg_data.classList.remove('msg_data')
        div_msg_data.textContent = "Data inválida!"
        btnCadatro.setAttribute("disabled", "disabled")
    } else {
        div_msg_data.classList.add('msg_data')
        div_msg_data.textContent = ""
        btnCadatro.removeAttribute("disabled")
    }
}

inputCEP.addEventListener("input", (evt) => {
    let numCEP = evt.target.value
   
    numCEP = numCEP.replace(/\D/g, "")

    numCEP = numCEP.replace(/(\d{5})(\d{3})/, "$1-$2")

    evt.target.value = numCEP

    if (numCEP.length == 9) {
        buscaDadosCEP(numCEP.replace("-", "").trim())
    }
})

const buscaDadosCEP = (numCEP) => {

    const api = `https://viacep.com.br/ws/${numCEP}/json/`

    fetch(api)
        .then(resp => resp.json())
        .then(dados => {
            montaEndereco(dados)
        })
        .catch(erro => {
            console.log("Erro: ", erro)
        })
    return false
}

const montaEndereco = (dados) => {

    document.querySelector("#div_endereco").classList.remove('oculto')

    if (dados.logradouro != undefined) {
        document.querySelector("#logradouro").value = dados.logradouro
        document.querySelector("#logradouro").setAttribute("disabled", "disabled")
        document.querySelector("#bairro").value = dados.bairro
        document.querySelector("#bairro").setAttribute("disabled", "disabled")
        document.querySelector("#localidade").value = dados.localidade
        document.querySelector("#localidade").setAttribute("disabled", "disabled")
        document.querySelector("#uf").value = dados.uf
        document.querySelector("#uf").setAttribute("disabled", "disabled")

        document.querySelector("#numero").focus()
    }else{
        document.querySelector("#logradouro").removeAttribute("disabled")
        document.querySelector("#logradouro").value = ''
        document.querySelector("#bairro").removeAttribute("disabled")
        document.querySelector("#bairro").value = ''
        

        document.querySelector("#logradouro").focus()

    }

}

fomulario.addEventListener("reset", () => {
    document.querySelector("#div_endereco").classList.add('oculto')
    document.querySelector("#msg_data").classList.add('msg_data')
    document.querySelector("#msg_data").textContent = ""
    document.querySelector("#msg_cpf").classList.add("msg_cpf")
    document.querySelector("#msg_cpf").textContent = ''
})