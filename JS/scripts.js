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
	   <h3>Campos para Empresa</h3>
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
