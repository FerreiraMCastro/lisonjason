const obj = [
    {
        nome: "Marcia",
        idade: 35,
        esta_trabalhando: true,
        detalhes_profissao:{
            profissao:"estudante",
            o_que_estuda:"Desenvolvimento web"
        },
        hobbies:["Cozinhar", "programar", "Ouvir música"],
    },
    {
        nome: "Paulo",
        idade: 35,
        esta_trabalhando: false,
        detalhes_profissao:{
            profissao:null,
            o_que_estuda:null,
        },
        hobbies:["Cozinhar", "programar", "Ouvir música"],
    },
]

//JSON
//converter para JSON
const jsonData = JSON.stringify(obj)
console.log(jsonData)
console.log(typeof jsonData)
console.log(typeof obj)
//converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)
//o metodo map percorre um objeto e RETORNA um dado. 
//ex.: "vai la no objeto pessoa, na propiedade nome e me trás o nome da pessoa".
objData.map((pessoa) => {
    console.log(pessoa.nome)
})