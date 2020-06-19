const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'FAMÍLIA AGUIAR - JOGO DO SHOW DO MILHÃO',
    options: [
      {
        text: 'INICIAR JOGO',
        setState: { blueGoo: true },
        nextText: 2
      },
      {
        text: 'AINDA NÃO',
        nextText: -1
      }
    ]
  },
  {
    id: 2,
    text: '1) Quantas letras tem no alfabeto brasileiro? (10 pontos)',
    options: [
      {
        text: '20 LETRAS',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, sword: true },
        nextText: 4
      },
      {
        text: '21 LETRAS',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { blueGoo: false, shield: true },
        nextText: 4
      },
      {
        text: '26 LETRAS',
        nextText: 5
      },
      {
        text: '19 LETRAS',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: '2) Quem nasceu no Brasil é? (10 pontos)',
    options: [
      {
        text: 'Amerciano',
        nextText: 4
      },
      {
        text: 'Imigrante',
        nextText: 4
      },
      {
        text: 'Brasileiro',
        nextText: 6
      },
      {
        text: 'Carioca',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Você errou, tente novamente!',
    options: [
      {
        text: 'Jogar novamente',
        nextText: - 1
      }
    ]
  },
  {
    id: 5,
    text: 'Parabéns você acertou e ganhou 10 pontos',
    options: [
      {
        text: 'Continuar',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Parabéns você acertou as Duas - Total de Pontos = 20',
    options: [
      {
        text: 'Continuar',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: '3) A cor Vermelha na lingua inglesa, se escreve de qual forma? (10 pontos)',
    options: [
      {
        text: 'Read',
        nextText: 8
      },
      {
        text: 'Red',

        nextText: 12
      },
      {
        text: 'Yellow',
        nextText: 8
      },
      {
        text: 'Blue',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'Você errou, tente novamente!',
    options: [
      {
        text: 'Jogar novamente',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'Você chegou ao final do jogo. Parabéns pela conquista! Você somou 80 pontos',
    options: [
      {
        text: 'Jogar Novamente!',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: '4) Qual a capital mais populosa do Brasil? (10 pontos)',
    options: [
      {
        text: 'São Paulo',
        nextText: 18
      },
      {
        text: 'Rio de Janeiro',
        nextText: 4
      },
      {
        text: 'Brasília',
        nextText: 4
      },
      {
        text: 'Minas Gerais',
        nextText: 4
      },
    ]
  },
  {
    id: 13,
    text: '5) Qual desses é um ser herbívoro? (10 pontos)',
    options: [
      {
        text: 'Zebra',
        nextText: 14
      },
      {
        text: 'Cachorro',
        nextText: 4
      },
      {
        text: 'Gato',
        nextText: 4
      },
      {
        text: 'Rato',
        nextText: 4
      },
    ]
  },
  {
    id: 14,
    text: '6) Qual o país mais populoso do mundo? (10 pontos)',
    options: [
      {
        text: 'Ásia',
        nextText: 4
      },
      {
        text: 'China',
        nextText: 15
      },
      {
        text: 'Europa',
        nextText: 4
      },
      {
        text: 'Canadá',
        nextText: 4
      },
    ]
  },
  {
    id: 15,
    text: 'Parabéns você acertou as Duas - Total de Pontos = 60',
    options: [
      {
        text: 'Continuar',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: '7) Vicent Van Gogh era um? (10 pontos)',
    options: [
      {
        text: 'Bispo',
        nextText: 4
      },
      {
        text: 'Escultor',
        nextText: 4
      },
      {
        text: 'Pintor',
        nextText: 17
      },
      {
        text: 'Aviador',
        nextText: 4
      },
    ]
  },
  {
    id: 17,
    text: '8) Em que código as pessoas cegas leem? (10 pontos)',
    options: [
      {
        text: 'Morse',
        nextText: 4
      },
      {
        text: 'Penal',
        nextText: 4
      },
      {
        text: 'De Ética',
        nextText: 4
      },
      {
        text: 'Braille',
        nextText: 11
      },
    ]
  }
  ,
  {
    id: 18,
    text: 'Parabéns você acertou as Duas - Total de Pontos = 40',
    options: [
      {
        text: 'Continuar',
        nextText: 13
      }
    ]
  }
]

startGame()