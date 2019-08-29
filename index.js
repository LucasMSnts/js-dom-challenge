const data = [
    {
        id: 1,
        description: 'Drama'
    },
    {
        id: 2,
        description: 'Comédia',
    },
    {
        id: 3,
        description: 'Suspense'
    },
    {
        id: 4,
        description: 'Ficção'
    },
    {
        id: 5,
        description: 'Terror'
    },
    {
        id: 6,
        description: 'Comédia romântica'
    },
    {
        id: 7,
        description: 'Ficção científica'
    },
    {
        id: 8,
        description: 'Desenho'
    }
]

 let generosCine = data.map((gen) => 
    `<div class="itens">
        <p>ID: ${gen.id}</p>
        <p>Descricao: ${gen.description}</p>
    </div>`
    )

 let container = document.getElementById('idData')

 // container.innerHTML = data.map((gen) => `<div class="itens"><p>ID: ${gen.id}</p><p>Descricao: ${gen.description}</p></div>`).join('')

 generosCine.forEach((genero) => container.innerHTML = container.innerHTML + genero)



console.log(generosCine)

