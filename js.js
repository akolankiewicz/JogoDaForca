const palavras = ['abacaxi', 'banana', 'cachorro', 'elefante', 'girafa', 'computador', 'programacao', 'python', 'javascript', 'html', 'css', 'sorvete', 'praia', 'montanha', 'floresta', 'lua', 'sol', 'estrela', 'carro', 'bicicleta', 'avião', 'navio', 'helicoptero', 'balao', 'teclado', 'mouse', 'monitor', 'impressora', 'copo', 'prato', 'talheres', 'sofa', 'cadeira', 'mesa', 'cama', 'travesseiro', 'cobertor', 'almofada', 'tapete', 'espelho', 'armario', 'geladeira', 'fogao', 'microondas', 'liquidificador', 'ventilador', 'ar-condicionado', 'lampada', 'lanterna', 'bateria', 'carregador', 'celular', 'tablet', 'relógio', 'carteira', 'óculos', 'chapéu', 'camiseta', 'calça', 'casaco', 'meia', 'sapato', 'chinelo', 'bolsa', 'mochila', 'guarda-chuva', 'lapis', 'caneta', 'borracha', 'caderno', 'livro', 'dicionario', 'agenda', 'jornal', 'revista', 'filme', 'serie', 'documentario', 'musica', 'instrumento', 'piano', 'violao', 'guitarra', 'flauta', 'trompete', 'bateria', 'violino', 'clarinete', 'saxofone', 'tambor', 'baixo', 'contrabaixo', 'cello', 'harpa', 'trombone', 'fagote', 'oboé', 'piccolo', 'gaita', 'acordeão'];
let palavraEscolhida = '';
let letrasCorretas = [];
let letrasErradas = [];
let tentativasRestantes = 5;

function iniciarJogo() {
    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    letrasCorretas = [];
    letrasErradas = [];
    tentativasRestantes = 5;

    mostrarPalavra();
    mostrarTentativas();
    mostrarLetrasErradas();
}

function mostrarPalavra() {
    let palavraMostrada = '';
    for (let letra of palavraEscolhida) {
        if (letrasCorretas.includes(letra)) {
            palavraMostrada += letra + ' ';
        } else {
            palavraMostrada += '_ ';
        }
    }
    document.getElementById('palavra').textContent = palavraMostrada;
}

function mostrarLetrasErradas() {
    document.getElementById('letras').textContent = `Letras citadas: ${letrasErradas.join(', ')}`;
}

function mostrarTentativas() {
    document.getElementById('tentativas').textContent = `Tentativas restantes: ${tentativasRestantes}`;
}

function verificarVitoria() {
    if (!document.getElementById('palavra').textContent.includes('_')) {
        alert('Parabéns, você venceu!');
        iniciarJogo();
    }
}

function verificarDerrota() {
    if (tentativasRestantes === 0) {
        alert(`Você perdeu! A palavra era: ${palavraEscolhida}`);
        iniciarJogo();
    }
}

function adivinharLetra(letra) {
    if (palavraEscolhida.includes(letra)) {
        if (!letrasCorretas.includes(letra)) {
            letrasCorretas.push(letra);
            mostrarPalavra();
            verificarVitoria();
        }
    } else {
        if (!letrasErradas.includes(letra)) {
            letrasErradas.push(letra);
            tentativasRestantes--;
            mostrarTentativas();
            mostrarLetrasErradas();
            verificarDerrota();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    iniciarJogo();

    document.addEventListener('keypress', (event) => {
        const letra = String.fromCharCode(event.keyCode).toLowerCase();
        if (/[a-z]/.test(letra)) {
            adivinharLetra(letra);
        }
    });
});