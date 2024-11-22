// Definimos la clase base Opcion
class Opcion {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método polimórfico para calcular el resultado
    calcularResultado(opcion) {
        throw new Error("Este método debe ser implementado en una clase hija");
    }
}

// Clases derivadas de Opcion: Piedra, Papel, Tijera
class Piedra extends Opcion {
    constructor() {
        super("piedra");
    }

    calcularResultado(opcion) {
        if (opcion instanceof Piedra) return "Empate!";
        if (opcion instanceof Papel) return "Perdiste!";
        if (opcion instanceof Tijera) return "Ganaste!";
    }
}

class Papel extends Opcion {
    constructor() {
        super("papel");
    }

    calcularResultado(opcion) {
        if (opcion instanceof Piedra) return "Ganaste!";
        if (opcion instanceof Papel) return "Empate!";
        if (opcion instanceof Tijera) return "Perdiste!";
    }
}

class Tijera extends Opcion {
    constructor() {
        super("tijeras");
    }

    calcularResultado(opcion) {
        if (opcion instanceof Piedra) return "Perdiste!";
        if (opcion instanceof Papel) return "Ganaste!";
        if (opcion instanceof Tijera) return "Empate!";
    }
}

// Clase Juego para manejar la lógica del juego
class Juego {
    constructor() {
        this.resultText = document.getElementById("txt_inicial");
        this.user_img = document.getElementById("user_img");
        this.machineImg = document.getElementById("machineImg");

        // Asociamos los botones con los eventos
        const piedraBtn = document.getElementById("piedra");
        const papelBtn = document.getElementById("papel");
        const tijerasBtn = document.getElementById("tijera");

        piedraBtn.addEventListener("click", () => this.play(new Piedra()));
        papelBtn.addEventListener("click", () => this.play(new Papel()));
        tijerasBtn.addEventListener("click", () => this.play(new Tijera()));
    }

    // Método para jugar
    play(userOption) {
        // Generar la opción de la máquina aleatoriamente
        const machineOption = this.getMachineOption();

        // Calcular el resultado
        const resultado = userOption.calcularResultado(machineOption);

        // Mostrar las imágenes de las opciones seleccionadas
        this.user_img.src = "img/" + userOption.nombre + ".png";
        this.machineImg.src = "img/" + machineOption.nombre + ".png";

        // Mostrar el resultado en la pantalla
        this.resultText.innerHTML = resultado;
    }

    // Método para obtener una opción aleatoria de la máquina
    getMachineOption() {
        const opciones = [new Piedra(), new Papel(), new Tijera()];
        const randomIndex = Math.floor(Math.random() * 3);
        return opciones[randomIndex];
    }
}

// Crear una instancia del juego y empezar
const juego = new Juego();
