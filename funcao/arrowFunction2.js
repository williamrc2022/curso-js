function Pessoa () {
    this.idade = 0 

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    },900)
}

new Pessoa