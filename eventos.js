let DataEvento = new Date(2021, 11, 26);
let DataAtual = new Date(2021, 10, 26);
let IdadeParticipantes = 19
let ListaParticipantes = ["Leandro", " Davi", " Adriano", " Leticia", " Livia", " Roberto", " Maria"]
let ListaPalestrantes = ["Ricardo", " Robson", " Nazia", "Lucia"]
let Evento = ["TI", "Midia", "TV"]

//Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
if (DataEvento <= DataAtual) {
    console.log("Evento não permitido, Data inválida");

    //Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
} else if (IdadeParticipantes < 18) {
    console.log("Cadastro não permitido, devido participante ser menor de 18 anos");

    //Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
} else if (ListaParticipantes.length > 100) {
    console.log("Cadastro não permitido, Devido ter excedido o limite de participantes");

} else {

    //Novo Participante
    let NovoParticipante = ListaParticipantes.push(" Noah");

    //Listar participantes e palestrantes por evento
    console.log("");
    console.log(`Participante${ListaParticipantes[7]} cadastrado com sucesso!`);
    console.log("-----------------------------------------");
    console.log("Evento: " + Evento[0]);
    console.log("Palestrantes: " + ListaPalestrantes[0], "e" + ListaPalestrantes[2]);
    console.log("Lista de Participantes: " + ListaParticipantes);
    console.log("");
}

