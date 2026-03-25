class Automovel {
    #id
    #modelo
    #marca
    #preco
    #active

    constructor(id, modelo, marca, preco) {

        if (!id) throw new Error("ID obrighatorio")

        if (!modelo || modelo.length < 2) {
            throw new Error("Modelo invalido")
        }

        if (!marca || marca.length < 2) {
            throw new Error("Marca invalida")
        }

        if (preco <= 0) {
            throw new Error("Preço invalido")
        }

        this.#id = id
        this.#modelo = modelo
        this.#marca = marca
        this.#preco = preco
        this.#active = true
    }

    getId() {
        return this.#id
    }

    getMarcaModelo() {
        return `${this.#marca} ${this.#modelo}`
    }

    getPreco() {
        return this.#preco
    }

    estaDisponivel() {
        return this.#active
    }

    alterarPreco(preco) {
        if (!this.#active) {
            console.log("Nao pode alterar preço de veculo vendido")
            return
        }

        if (preco <= 0) {
            console.log("Preço invalido")
            return
        }

        this.#preco = preco
    }

    vender() {
        if (!this.#active) {
            console.log("Veiculo ja vendido")
            return
        }

        this.#active = false
        console.log("Venda realizada")
    }

    retornarEstoque() {
        if (this.#active) {
            console.log("Ja esta disponvel")
            return
        }

        this.#active = true
    }

    exibirDados() {
        console.log("ID:", this.#id)
        console.log("Marca/Modelo:", this.#marca, this.#modelo)
        console.log("Preço:", this.#preco)
        console.log("Status:", this.#active ? "Disponivel" : "Vendido")
    }
}

class Carro extends Automovel {
    #portas

    constructor(id, modelo, marca, preco, portas) {
        super(id, modelo, marca, preco)

       
        if (typeof portas !== "number" || portas <= 0) {
            throw new Error("Portas invslidas")
        }

        this.#portas = portas
    }

    getPortas() {
        return this.#portas
    }

    exibirDados() {
        super.exibirDados()
        console.log("Portas:", this.#portas)
    }
}

class Moto extends Automovel {
    #cilindradas

    constructor(id, modelo, marca, preco, cilindradas) {
        super(id, modelo, marca, preco)

        if (
            typeof cilindradas !== "number" ||
            cilindradas <= 0 ||
            cilindradas < 50 ||
            cilindradas > 2000
        ) {
            throw new Error("Ciliindradas invalidas")
        }

        this.#cilindradas = cilindradas
    }

    getCilindradas() {
        return this.#cilindradas
    }

    exibirDados() {
        super.exibirDados()
        console.log("Cilindradas:", this.#cilindradas)
    }
}

const c1 = new Carro(2, "gol", "volwagen",32000,4)

const m1 = new Moto(1, "shineray","shi 250", 22000, 250)

console.log(c1)
console.log(m1)