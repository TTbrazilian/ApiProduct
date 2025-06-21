# 🛒 API REST de Produtos – Node.js + MongoDB

API desenvolvida como desafio técnico final da disciplina de Desenvolvimento Web.  
Permite realizar operações CRUD completas para o cadastro de produtos diversos em uma loja de departamentos.

---

## 🧠 Funcionalidades da API

- ✅ Listar todos os produtos  
- ✅ Buscar produto por **ID**  
- ✅ Buscar produto por **nome**  
- ✅ Cadastrar novo produto  
- ✅ Atualizar produto existente  
- ✅ Deletar produto  

---

## 🧾 Endpoints disponíveis:
Método	Rota	Descrição
POST	/produto	Cadastra um novo produto
GET	/produto	Retorna todos os produtos
GET	/produto/:valor	Busca por ID ou nome exato
PUT	/produto/:id	Atualiza um produto
DELETE	/produto/:id	Remove um produto do sistema (Produto)



---

## 🛠️ Tecnologias Usadas

Node.js
Express.js
MongoDB Atlas
Mongoose
Postman (Documentação)


---

## ⚙️ Como rodar o projeto localmente

1. Clone o repositório:

```bash
git clone https://github.com/TTbrazilian/ApiProduct.git
cd ApiProduct
```

2. Instale as dependências:

```bash
npm install
```

4. Rode o servidor em modo dev:

```bash
npm run dev
```

---

## Configure as variáveis de ambiente:

Crie um ficheiro chamado .env na raiz do projeto.

Adicione a sua string de conexão do MongoDB Atlas a este ficheiro:
**MONGO_URI=mongodb+srv://seu_usuario:sua_senha@seu_cluster...**




## 📑 Documentação Pública (Postman)

A documentação pública está disponível no link abaixo:

   https://documenter.getpostman.com/view/46036785/2sB2xBBoqJ


---

## 🧪 Testes esperados pelo cliente

✅ Listar todos os produtos  
✅ Buscar produto por ID ou Nome  
✅ Cadastrar novo produto  
✅ Atualizar produto  
✅ Deletar produto

---

## 👤 Desenvolvedor

**Túlio Teixeira Silva - 24811**  
Estudante de Engenharia de Software 5º semestre
