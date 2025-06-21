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

## 🧾 Modelo de Dados (Produto)

| Campo         | Tipo     | Obrigatório | Descrição                      |
|---------------|----------|-------------|--------------------------------|
| `nome`        | String   | ✅           | Nome do produto                |
| `descricao`   | String   | ✅           | Descrição do produto           |
| `cor`         | String   | ✅           | Cor do produto                 |
| `peso`        | Number   | ✅           | Peso do produto (em kg)        |
| `tipo`        | String   | ✅           | Tipo ou categoria              |
| `preco`       | Number   | ✅           | Preço em reais                 |
| `dataCadastro`| Date     | ❌ (auto)    | Data de cadastro no sistema    |

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

## 🌍 Deploy da API:

 https://apiprodutostrabmarcio.onrender.com




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
