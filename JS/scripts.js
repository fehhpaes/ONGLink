 /*
 // Obtendo elementos
 const radioForm = document.getElementById('radioForm');
 const dynamicFields = document.getElementById('dynamicFields');

 // Listener para mudanças no tipo de entidade
 radioForm.addEventListener('change', (event) => {
   const selectedValue = event.target.value;

   // Limpar campos dinâmicos antes de adicionar novos
   dynamicFields.innerHTML = '';

   if (selectedValue === '2') { // Empresa
	 dynamicFields.innerHTML = `
	 <p id="par_sep">******************************</p>
	   <h3>Campo para Empresa</h3>
	   <label for="empresaField1">Tipo de contrato social:</label>
	   <p></p>
	   <input type="text" id="empresaField1" name="empresaField1"><br><br>
	   
	   <label for="empresaField2">Area de atuação:</label>
	   <p></p>
	   <input type="text" id="empresaField2" name="empresaField2"><br><br>
	   
	 `;
   } else if (selectedValue === '3') { // ONG
	 dynamicFields.innerHTML = `
	 <p id="par_sep">******************************</p>
	   <h3>Campos para ONG</h3>


	   
	   <label for="estatuto_social_ong">Estatuto social da ONG (PDF):</label>
	 	<p></p>  
	   <input type="file" name="estatuto_social_ong" id="estatuto_social_ong" accept=".pdf"><br><br>
	   
	   <label for="ata_fundacao_ong">Ata de fundação (PDF):</label>
		<p></p>
	   <input type="file" name="ata_fundacao_ong" id="ata_fundacao_ong" accept=".pdf"><br><br>
	   
	<p id="par_sep">******************************</p>

        <div class="row">
          <div class="col-1"></div>
          <div class="col-10" id="div_esc_causa">
            <label for="esc_causa">Escolha a causa principal da sua organização</label>
            <p></p>
            <input type="radio" name="esc_causa" id="esc_causa_amb" value="Ambiental" checked>Ambiental                 
            <input type="radio" name="esc_causa" id="esc_causa_ani" value="Animal">Animal                    
            <input type="radio" name="esc_causa" id="esc_causa_edu" value="Educação">Educação
            <p></p>
            <input type="radio" name="esc_causa" id="esc_causa_sau" value="Saúde">Saúde
            <input type="radio" name="esc_causa" id="esc_causa_soc" value="Social">Social
            <input type="radio" name="esc_causa" id="esc_causa_out" value="Outra">Outra
            <p></p>
          </div>
            <div class="col-1"></div>
          </div>
			<div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <label for="esc_causa">Se selecionou a opção "Outra", digite aqui:</label>
                <p></p>
                <input type="text" name="esc_causa" id="esc_causa_out_txt">
              </div>  
              <div class="col-1"></div>
            </div>

	<p id="par_sep">******************************</p>

	   


	   <div class="row " >
          <div class="col-2"></div>
            <div class="col-3" id="div_data_fund">
                <label for="data_fund">Data de fundação</label>
                <p></p>
                <input type="text" name="data_fund" id="data_fund" placeholder="DD/MM/AAAA" >
              </div>
			  <div class="col-2"></div>
            <div class="col-3" id="div_sigla_ong">
              <label for="sigla_ong">Sigla da ONG</label>
              <p></p>
              <input type="text" name="sigla_ong" id="sigla_ong" >
            </div>
            <div class="col-2"></div>
	 `;
   }
 });

*/


 //validação compos cadastro_1.html
// Função de validação personalizada
function validarFormulario() {
  var form = document.getElementById("formulario");
  var inputs = form.querySelectorAll("input, select, textarea");

  var isValid = true;

  inputs.forEach(function(input) {
    if (input.required && !input.value) {
      input.classList.add("is-invalid");
      isValid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  });

  // Validando CNPJ, CPF, CEP e Telefones com regex
  var regexCNPJ = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
  var regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  var regexCEP = /^\d{5}-\d{3}$/;
  var regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;

  // Validando CNPJ
  var cnpj = document.getElementById("cnpj");
  if (cnpj.value && !regexCNPJ.test(cnpj.value)) {
    cnpj.classList.add("is-invalid");
    isValid = false;
  }

  // Validando CPF
  var cpf = document.getElementById("cpf");
  if (cpf.value && !regexCPF.test(cpf.value)) {
    cpf.classList.add("is-invalid");
    isValid = false;
  }

  // Validando CEP
  var cep = document.getElementById("cep");
  if (cep.value && !regexCEP.test(cep.value)) {
    cep.classList.add("is-invalid");
    isValid = false;
  }

  // Validando Telefones
  var telefone1 = document.getElementById("telefone1");
  if (telefone1.value && !regexTelefone.test(telefone1.value)) {
    telefone1.classList.add("is-invalid");
    isValid = false;
  }

  var telefone2 = document.getElementById("telefone2");
  if (telefone2.value && !regexTelefone.test(telefone2.value)) {
    telefone2.classList.add("is-invalid");
    isValid = false;
  }

  return isValid;
}





























/*cadastro_2.html*/

const radioForm = document.getElementById('radioForm');
const dynamicFields = document.getElementById('dynamicFields');
const continueButton = document.getElementById('btn_continuar');

// Função para criar a mensagem de erro abaixo do campo
function createErrorMessage(field, message) {
    let error = field.nextElementSibling;

    if (!error || !error.classList.contains('error-message')) {
        error = document.createElement('div');
        error.classList.add('error-message');
        error.textContent = message;
        field.insertAdjacentElement('afterend', error); // Adiciona a mensagem de erro abaixo do campo
    }
}

// Função para remover a mensagem de erro
function clearErrorMessage(field) {
    const error = field.nextElementSibling;
    if (error && error.classList.contains('error-message')) {
        error.remove(); // Remove a mensagem de erro
    }
}

// Função para rolar até o campo com erro
function scrollToField(field) {
    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Função para mostrar/esconder o campo "Outra" baseado na seleção
function toggleEscCausaOutTxt() {
    const escCausa = document.querySelector('input[name="esc_causa"]:checked'); // Radio selecionado
    const escCausaOutTxtRow = document.getElementById('row_out_causa'); // Campo "Outra"

    if (escCausa && escCausa.value === 'Outra') {
        escCausaOutTxtRow.style.display = 'block'; // Mostra o campo "Outra"
    } else {
        escCausaOutTxtRow.style.display = 'none'; // Esconde o campo "Outra"
        const escCausaOutTxt = document.getElementById('esc_causa_out_txt');
        if (escCausaOutTxt) clearErrorMessage(escCausaOutTxt); // Limpa erro caso seja escondido
    }
}

// Função para atualizar os campos dinâmicos
radioForm.addEventListener('change', (event) => {
    const selectedValue = event.target.value;

    // Limpa os campos dinâmicos antes de adicionar novos
    dynamicFields.innerHTML = '';

    if (selectedValue === '2') { // Empresa
        dynamicFields.innerHTML = `
        <div class="row">
            <div class="col-12 text-center">
                <h3>Campo para Empresa</h3>
                <p id="par_sep">******************************</p>
                <label for="logo_entidade">Logo da empresa (obrigatório):</label><br>
                <input type="file" id="logo_entidade" name="logo_entidade" accept="image/*" class="form-control" required><br><br>
                
                <label for="empresaField1">Área de atuação:</label><br>
                <input type="text" id="empresaField1" name="empresaField1" class="form-control">
            </div>
        </div>
        `;
    } else if (selectedValue === '3') { // ONG
        dynamicFields.innerHTML = `
        <div class="row">
            <div class="col-12 text-center">
                <h3>Campos para ONG</h3>
                <p id="par_sep">******************************</p>
                <label for="esc_causa">Escolha a causa principal da sua organização:</label><br>
                <input type="radio" name="esc_causa" id="esc_causa_amb" value="Ambiental"> Ambiental
                <input type="radio" name="esc_causa" id="esc_causa_ani" value="Animal"> Animal
                <input type="radio" name="esc_causa" id="esc_causa_edu" value="Educação"> Educação<br>
                <input type="radio" name="esc_causa" id="esc_causa_sau" value="Saúde"> Saúde
                <input type="radio" name="esc_causa" id="esc_causa_soc" value="Social"> Social
                <input type="radio" name="esc_causa" id="esc_causa_out" value="Outra"> Outra
            </div>
        </div>
        <div class="row" id="row_out_causa" style="display: none;">
        <div class="col-1 text-center" >
                
            </div>
            <div class="col-10 text-center" >
                <label for="esc_causa_out_txt">Se selecionou a opção "Outra", digite aqui:</label><br>
                <p id="par_sep"></p>
                <input type="text" name="esc_causa_out_txt" id="esc_causa_out_txt" class="form-control">
            </div>
            <div class="col-1 text-center" >
                
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center">
            <p id="par_sep">******************************</p>
                <label for="logo_entidade">Insira seu logo (obrigatório):</label><br>
                <input type="file" id="logo_entidade" name="logo_entidade" accept="image/*" class="form-control" required>
            </div>
        </div>
        `;
    }

    // Adiciona o listener de mudança aos novos botões radio
    const escCausaRadios = document.querySelectorAll('input[name="esc_causa"]');
    escCausaRadios.forEach((radio) => {
        radio.addEventListener('change', toggleEscCausaOutTxt);
    });

    toggleEscCausaOutTxt(); // Atualiza visibilidade do campo "Outra"
});

// Função de validação do campo "Outra"
function validateEscCausaOutTxt() {
    const escCausaOutTxt = document.getElementById('esc_causa_out_txt');
    const escCausa = document.querySelector('input[name="esc_causa"]:checked');

    if (escCausa && escCausa.value === 'Outra' && !escCausaOutTxt.value.trim()) {
        createErrorMessage(escCausaOutTxt, 'Por favor, informe a causa no campo abaixo.');
        scrollToField(escCausaOutTxt);
        return false;
    } else if (escCausa && escCausa.value === 'Outra') {
        clearErrorMessage(escCausaOutTxt);
    }
    return true;
}

// Função para validar o campo logo_entidade
function validateLogoEntidade() {
    const logoEntidade = document.getElementById('logo_entidade');
    const file = logoEntidade.files[0];

    if (!file) {
        createErrorMessage(logoEntidade, 'A logo é obrigatória. Por favor, insira uma imagem.');
        scrollToField(logoEntidade); // Rola até o campo de erro
        return false;
    }

    const validExtensions = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validExtensions.includes(file.type)) {
        createErrorMessage(logoEntidade, 'Por favor, insira um arquivo de imagem válido (JPG, PNG ou GIF).');
        scrollToField(logoEntidade); // Rola até o campo de erro
        return false;
    } else {
        clearErrorMessage(logoEntidade);
        return true;
    }
}

// Função para validar o campo empresaField1
function validateEmpresaField1() {
    const empresaField1 = document.getElementById('empresaField1');

    if (empresaField1 && !empresaField1.value.trim()) {
        createErrorMessage(empresaField1, 'Por favor, informe a área de atuação.');
        scrollToField(empresaField1);
        return false;
    } else {
        clearErrorMessage(empresaField1);
    }
    return true;
}

// Adiciona listener ao botão de continuar para validar o formulário
continueButton.addEventListener('click', (event) => {
    event.preventDefault();

    const isEscCausaOutTxtValid = validateEscCausaOutTxt();
    const isLogoValid = validateLogoEntidade();
    const isEmpresaField1Valid = validateEmpresaField1();

    if (isEscCausaOutTxtValid && isLogoValid && isEmpresaField1Valid) {
        alert('Formulário válido! Submetendo...');
        // Aqui você pode implementar a lógica para submissão do formulário.
    }
});
