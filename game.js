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
    text: 'Quantas letras tem no alfabeto brasileiro?',
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
        nextText: 3
      },
      {
        text: '19 LETRAS',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: 'Quem nasceu no Brasil é?',
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
    text: 'Você errou, tente novamente!',
    options: [
      {
        text: 'Jogar novamente',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'Parabéns você acertou!',
    options: [
      {
        text: 'Continuar',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'A cor Vermelha na lingua inglesa, se escreve de qual forma?',
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
    text: 'Você chegou ao final do jogo. Parabéns pela conquista!',
    options: [
      {
        text: 'Jogar Novamente!',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'Qual a capital mais populosa do Brasil?',
    options: [
      {
        text: 'São Paulo',
        nextText: 15
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
    text: 'Qual desses é um ser herbívoro?',
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
    text: 'Qual o país mais populoso do mundo?',
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
    text: 'Parabéns você acertou!',
    options: [
      {
        text: 'Continuar',
        nextText: 16
      }
    ]
  },
  {
    id: 16,
    text: 'Vicent Van Gogh era um?',
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
    text: 'Em que código as pessoas cegas leem?',
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
    text: 'Parabéns você acertou!',
    options: [
      {
        text: 'Continuar',
        nextText: 17
      }
    ]
  }
]

startGame()