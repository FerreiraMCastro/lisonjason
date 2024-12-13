# Repositório criado  para introdução a linguagem JSON
--- 
** O intuito desse repositório é puramente para fins didáticos, todos os arquivos de vídeo, materias bibliográficos serão devidamente citados e dado os devidos créditos. A finalidade desses materias que estarão aqui presente é apenas de obter e compartilhar conhecimento sobre linguagens de programação, desenvolvimento web e tecnologias diversas na área de Software. Sinta-se a vontade para fazer forks, clonar,comentar,sugerir melhorias, sua contribuição será sempre bem vinda. Caso haja algum material pertencente a algum autor que não deseje permanecer aqui, por favor entre em contato que irei retirar de imediato. Peço apenas a compreenção de que estou começando na área de tecnologia e desenvolvimento e desejo aprender com vocês.🚀🚀🎯🤓📖

Tecnologia 💻  
Amo desenvolver e explorar novidades na área da computação!


---

## O que é JSON
JSON (JavaScript Object Notation) é um formato leve e amplamente utilizado para
armazenar e transmitir dados entre sistemas web. Ele é baseado em texto e segue uma estrutura que é fácil de ler para humanos e simples de interpretar por máquinas. JSON é muito comum na comunicação entre um cliente (como navegador) e um servidor em aplicações web.

---

## Principais características do JSON:
1 ** Estrutura simples baseada em chave-valor:
    a. Os dados são organizados em pares de chave e valor.
    Exemplo:
    {
        "nome": "Marcia",
        "idade": 30,
        "interesses": ["tecnologia", "moda", "programação"]
    }

    ** Aceita os seguintes tipos de dados:
    ->String - "Olá mundo" ¨precisam estar entre aspas duplas¨;
    ->Números - 1 ou 12.54 ¨Não diferencia os tipos int ou double;
    ->Arrays - [1, 2, 3] ¨Não são envolvidos por aspas;
    ->Objetos -{"nome": "Márcia"} ¨atribuição com dois pontos;
    ->Dados nulos - null;

2 **Formato baseado em texto:
    a. É representado como string, o que torna fácil de transmitir via HTTP, especialmente em APIs RESTful.
    b.Independência de linguagem, embora tenha raízes no JavaScript, JSON é compatível com a maioria das linguagens de programação, incluindo Python, Java, PHP e muitas outras.

---

## Onde o JSON é usado:
APIs(Application Programming Interfaces), JSON é usado frequentemente para enviar e receber dados entre o cliente (front-end) e o servidor (back-end). Exemplo:
     
    1 ¨O Servidor retorna informações de um produto em um e-commerce:
    {
    "produto": "Camiseta",
    "preco": 29.99,
    "tamanhos": ["P", "M", "G"]
    }

    2 ¨Configurações:
        Muitas aplicações  usam JSON como arquivo de configurações (ex.:packge.json em projetos Node.js)
    
    3 ¨Armazenamento de dados:
        Bancos de dados NoSQL, como MongoDB, usam JSON para armazenar informações.

## Vantagens do JSON:
Leve e eficiente
Fácil de entender e editar manualmente.
Amplamente suportado.
Estrutura flexível, adaptando-se a diferentes tipos de dados.
## Comparação com XML:
JSON é uma alternativa mais simples ao XML para troca de dados.
JSON é menos verboso, o que o torna mai leve.
Exemplo de JSON vs XML:
    JSON:
    { "nome": "João", "idade": 25 }

    XML:
    <pessoa>
        <nome>João</nome>
        <idade>25</idade>
    </pessoa>

## Referências:
    **Matheus Battist , canal Hora de Codar. Aprendendo JSON em 20 minutos
    [🎥 Assista no YouTube](https://youtu.be/BWPUSXzSWA8?si=jlPF5I1zfkiKxDEo)
 
    