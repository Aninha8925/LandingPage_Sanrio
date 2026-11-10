const personagem = [
    {
        "imgpersonagem": "img/helloKitty.png",
        "nomepersonagem": "Hello Kitty",
        "descricaopersonagem": "A Hello Kitty é uma garota feliz e divertida, que adora espalhar alegria pelo mundo. Ela mora com seus pais e sua irmã gêmea, Mimmy,em Londres, na Inglaterra. Seu lema é: “Muitos amigos nunca são demais!” Por isso, ela está sempre cercada de amigos e adora fazer novas amizades.",
        "curiosidadepersonagem": "Ela tem a altura de 3 maças empilhadas",
        "cor": "#df0521"
    },
    {
        "imgpersonagem": "img/kuromi.png",
        "nomepersonagem": "Kuromi",
        "descricaopersonagem": "Kuromi é muito bagunceira e sempre causa confusões. Por trás de sua aparência radical, ela é super feminina. Adora escrever em seu diário e ler romances. Sua cor preferida é a preta. Ela é amiga da My Melody, mas encara essa amizade com uma certa competição.",
        "curiosidadepersonagem": " É vocalista da banda fictícia Kuromi and the Bad Badtz-Maru's, expressando sua personalidade punk",
        "cor": "#dec0fa"
    },
    {
        "imgpersonagem": "img/mymelody.png",
        "nomepersonagem": "My Melody",
        "descricaopersonagem": "A My Melody nasceu na floresta de Mary Land. Ela é super legal e faz amizade facilmente. Sua marca registrada é um lindo capuz, que sua avó costurou especialmente para ela.",
        "curiosidadepersonagem": " A comida favorita da minha melodia é o Delicado de Bolo de Morango",
        "cor": "#fa9ab1"
    },
    {
        "imgpersonagem": "img/cina.png",
        "nomepersonagem": "Cinamionroll",
        "descricaopersonagem": "O Cinnamoroll é um filhote de cachorro branco que se parece com uma nuvem macia. Ele tem o rabinho enrolado como um biscoitinho de canela (Cinnamon Roll) e pode voar batendo suas enormes orelhas. Ele é o mascote oficial do Café Cinnamon e gosta de tirar sonecas no colo dos clientes.",
        "curiosidadepersonagem": " Suas orelhas permitem que ele voe. Apesar da aparência, ele não é um coelho, mas um filhote (embora às vezes seja confundido com um)",
        "cor": "#42c7f4"
    },
    {
        "imgpersonagem": "img/Pompompurin.png",
        "nomepersonagem": "Pompompurin",
        "descricaopersonagem": "O Pompompurin é um tranquilo filhotinho Golden Retriever que tem um enorme talento para cochilar. Ele ama a frase “vamos sair”, tanto quanto odeia a palavra “ficar”. Faz amizade com todos que encontra, e tem um sonho de ser realmente grande. Seu hobby é colecionar os sapatos de seus donos e tem seu próprio esconderijo secreto.",
        "curiosidadepersonagem": "Ele adora beber leite, comer comida macia e pudim que sua mãe faz. ",
        "cor": "#fef4a9"
    },
];

let i = 0

function mostrarPersonagem() {
    const person = personagem[i];
    document.getElementById("imgpersonagem").src = person.imgpersonagem;
    document.getElementById("nomepersonagem").textContent = person.nomepersonagem;
    document.getElementById("descricaopersonagem").textContent = person.descricaopersonagem;

    document.getElementById("curiosidadepersonagem").textContent = person.curiosidadepersonagem;
    document.getElementById("nomepersonagem").style.color = person.cor;
    document.querySelectorAll(".seta").forEach(seta => {
        seta.style.backgroundColor = person.cor;
    }); console.log(person)
    document.getElementById("imgpersonagem").style.setProperty(
        "--cor-personagem",
        person.cor
    );

   personagemespecifico.classList.remove("animar");

    void personagemespecifico.offsetWidth;

   personagemespecifico.classList.add("animar");


}

function proximoPersonagem() {
    i++
    if (i == personagem.length) {
        i = 0;
    }
    mostrarPersonagem();
}
function personagemAnterior() {
    i--
    if (i < 0) {
        i = personagem.length - 1;
    }
    mostrarPersonagem();
}
mostrarPersonagem();

let form = document.getElementById("form");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;
    let mensagem = document.getElementById("textAreaMensagem").value;

    alert(`Olá ${nome}, sua mensagem foi enviada para nossos personagens com muito carinho!`);

    form.reset();

});
let aumenta = document.getElementById("aumenta");
let diminui = document.getElementById("diminui");

let tamanhoFonte = 30;

aumenta.addEventListener("click", () => {

    tamanhoFonte += 2;

    document.querySelectorAll("#dadospersonagem p").forEach(p => {
        p.style.fontSize = tamanhoFonte + "px";
    });

});

diminui.addEventListener("click", () => {

    tamanhoFonte -= 2;

    if (tamanhoFonte < 12) {
        tamanhoFonte = 12;
    }

    document.querySelectorAll("#dadospersonagem p").forEach(p => {
        p.style.fontSize = tamanhoFonte + "px";
    });

});

let menu = document.getElementById("menu");

let girado = false;
let bloco = document.querySelectorAll(".bloco");

menu.addEventListener("click", () => {

    if (girado == false) {
        menu.style.transform = "rotate(90deg)";
        girado = true;

        bloco.forEach(elemento => {
            elemento.style.display = "flex";
        });

    } else {
        menu.style.transform = "rotate(0deg)";
        girado = false;

        bloco.forEach(elemento => {
            elemento.style.display = "none";
        });
    }

});