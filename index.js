import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.sendFile("C:/Users/matheus.osantos60/OneDrive - SENAC - SP/rotas-express/frontend/index.html");
});
// sendFILE mandar o caminho da pasta 

app.get("/sobre", (req, res) => {
  res.send("<h1> Sobre nós</h1>");
});


//extraindo conteúdo dos parametros da requisição. 
app.get("/inicio/:nome/:nivel", (req, res) => {
  res.send(
    `<h1>Bem Vindo, ${req.params.nome}! Seu nível de acesso é ${req.params.nivel}</h1> `,
  );
});

// métodos listen tem q ficar por ultimo, depois das requisições  HTTP criadas
app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
