**BuscaCEP**

Aplicação para consulta de endereços a partir do CEP (Código de Endereçamento Postal) brasileiro, utilizando um backend em Java Spring Boot e frontend em Angular.

Tecnologias usadas
Backend: Java, Spring Boot, REST API, CORS configurado

Frontend: Angular, Angular Material, TypeScript, HTTP Client

Outros: Maven, Node.js, Git

**Funcionalidades**

Consulta de endereço via CEP usando serviço externo

Interface amigável com Angular Material

Validação básica e tratamento de erros

**Como rodar o projeto**

Backend
Navegue até a pasta apiCep

Execute:

bash
Copiar
Editar
mvn spring-boot:run
API estará disponível em http://localhost:8080/api/endereco

Frontend
Navegue até a pasta via-cep-front

Instale as dependências:

bash
Copiar
Editar
npm install
Execute o servidor de desenvolvimento:

bash
Copiar
Editar
ng serve
Acesse em http://localhost:4200

**Observações**

Certifique-se que o backend esteja rodando antes de iniciar o frontend para evitar erros de CORS ou requisições falhas.

Configuração CORS já habilitada no backend para o frontend http://localhost:4200.
