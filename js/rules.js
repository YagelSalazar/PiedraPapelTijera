var player = null
var pc = null
var result = null
var p1 = 0
var p2 = 0

window.onload = function() {
    document.getElementById('secondM').style.display='none'
    hide()
    this.p1
    this.p2
    document.getElementById('p1').innerHTML = this.p1
    document.getElementById('p2').innerHTML = this.p2
}

function hide() {
    document.getElementById('win').style.display='none'
    document.getElementById('lose').style.display='none'
    document.getElementById('tie').style.display='none'
}

function piedra() {
    hide()
    document.getElementById('secondM').style.display='block'
    document.getElementById('firstM').style.display='none'
    this.pc = Math.floor(Math.random() * 3)
    this.player = 0
    this.result = compare(player, pc)
    score(this.result)
  }

function papel() {
    hide()
    document.getElementById('secondM').style.display='block'
    document.getElementById('firstM').style.display='none'
    this.pc = Math.floor(Math.random() * 3)
    this.player = 1
    this.result = compare(player, pc)
    score(this.result)
  }

function tijera() {
    hide()
    document.getElementById('secondM').style.display='block'
    document.getElementById('firstM').style.display='none'
    this.pc = Math.floor(Math.random() * 3)
    this.player = 2
    this.result = compare(this.player, this.pc)
    score(this.result)
  }

function compare(p1,p2) {
    if(p1 == p2){
        document.getElementById('tie').style.display='block'
    }else{
        if(p1 == 0 && p2 == 1){
            document.getElementById('lose').style.display='block'
            return false
        }else{
            if(p1 == 0 && p2 == 2){
                document.getElementById('win').style.display='block'
                return true
            }else{
                if(p1 == 1 && p2 == 0){
                    document.getElementById('win').style.display='block'
                    return true
                }else{
                    if(p1 == 1 && p2 == 2){
                        document.getElementById('lose').style.display='block'
                        return false
                    }else{
                        if(p1 == 2 && p2 == 0){
                            document.getElementById('lose').style.display='block'
                            return false
                        }else{
                            if(p1 == 2 && p2 == 1){
                                document.getElementById('win').style.display='block'
                                return true
                            }
                        }
                    }
                }
            }
        }   
    }
}

function score(res){
    if(res == true){
        document.getElementById('p1').innerHTML = this.p1+= 1
    }else{
        if(res == false){
            document.getElementById('p2').innerHTML = this.p2+= 1
        }
    }
}