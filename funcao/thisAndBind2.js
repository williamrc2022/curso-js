function pessoa() {
    this.idade = 0
    
    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 150)
}

new pessoa