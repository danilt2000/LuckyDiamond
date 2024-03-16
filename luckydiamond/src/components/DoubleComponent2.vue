<template>
    <div class="containerbox">
        <div class="container main d-flex p-5 my-5">
            <div>
                <div>
                    <span class="text-white">
                        sua escolha foi: {{ corSelecionada }}
                    </span>
                </div>
                <h5 class="text-white">
                    Seu saldo na carteira: <span class="text-primary"> {{ `R$ ${wallet},00 ` }}</span>
                </h5>
                <div class="d-flex">
                    <button class="mx-1" :class="corSelecionada === 'vermelho' ? 'btn-red-active' : 'btn-red'"
                        @click="corSelecionada = 'vermelho'">2x</button>
                    <button class="mx-1" :class="corSelecionada === 'branco' ? 'btn-white-active' : 'btn-white '"
                        @click="corSelecionada = 'branco'">14x</button>
                    <button class="btn-black mx-1" :class="corSelecionada === 'preto' ? 'btn-black-active' : 'btn-black '"
                        @click="corSelecionada = 'preto'">2x</button>
                </div>
                <div class="my-3">
                    <!-- <label class="text-white" for="aposta">Valor da Aposta:</label> -->
                    <div class="d-flex aling-items-center my-3 p-2 input-container">
                        <input class="input-controler" type="number" id="aposta" v-model.number="valorAposta" :max="wallet"
                            placeholder="Quantia" />
                        <span class="text-white fw-bold">R$</span>
                    </div>
                    <button class="btn btn-primary w-100" @click="iniciarJogo()"
                        :disabled="indiceEtapa !== 0 || !corSelecionada || !valorAposta || valorAposta > wallet">Começar Jogo</button>
                </div>
            </div>
            <div class="container">
                <div class="progress">
                    <div class="progress-bar" role="progressbar" :style="{ width: `${contador * 10}%` }">
                        <span class="timer-count">
                            {{ contador.toFixed(1) }} {{ etapas[indiceEtapa] }} <span v-if="indiceEtapa === 2">{{
                                numeroGerado }}</span>
                        </span>
                    </div>
                </div>
                <roll :etapa="etapas[indiceEtapa]" :winnerNumber="numeroGerado" @number-roll="atualizarNumero" />
            </div>
        </div>
    </div>
    <!-- <tutorial-page></tutorial-page> -->
    <roll-page></roll-page>
</template>
<script>
import RollPage from '@/pages/games-pages/RollPage.vue';
// import TutorialPage from '@/pages/games-pages/TutorialPage.vue';

export default {
    components: {
        RollPage,
        // TutorialPage
    },
    data() {
        return {
            contador: 10,
            etapas: ['Iniciar...', 'Girando...', 'Vencedor:'],
            indiceEtapa: 0,
            corSelecionada: null,
            valorAposta: null,
            resultado: null,
            numeroGerado: null,
            numtest: 6,
            numeroDaRoleta: '',
            wallet: 500,
        }
    },
    mounted() {
        setInterval(() => {
            this.contador -= 0.1
            if (this.contador < 0.1) {
                this.indiceEtapa = (this.indiceEtapa + 1) % this.etapas.length
                this.contador = 10
                if (this.indiceEtapa === 2) {
                    this.gerarNumero()
                    this.avaliarResultado()
                    this.resetGame()
                }
            }
        }, 100)
    },
    methods: {
        atualizarNumero(num) {
            this.numeroDaRoleta = num.num
        },
        iniciarJogo() {
            if (this.valorAposta > this.wallet) {
                alert('Valor da aposta é maior do que a carteira')
                return
            }
            if (!this.corSelecionada || !this.valorAposta) {
                alert('Selecione uma cor e insira o valor da aposta')
                return
            }
            this.resultado = null
            this.indiceEtapa = 1
            // this.wallet -= this.valorAposta
        },
        gerarNumero() {
            this.numeroGerado = this.numeroDaRoleta;
        },
        resetGame() {
            this.corSelecionada = null,
                this.numeroDaRoleta = null
        },
        avaliarResultado() {
            if (this.numeroGerado <= 7 && this.corSelecionada === "vermelho" && this.corSelecionada != null && this.valorAposta <= this.wallet) {
                this.resultado = "Parabéns! Você ganhou!";
                this.wallet += this.valorAposta * 2;
            } else if (this.numeroGerado > 7 && this.numeroGerado <= 14 && this.corSelecionada === "preto" && this.corSelecionada != null && this.valorAposta <= this.wallet) {
                this.resultado = "Parabéns! Você ganhou!";
                this.wallet += this.valorAposta * 2;
            } else if (this.numeroGerado === 15 && this.corSelecionada === "branco" && this.corSelecionada != null && this.valorAposta <= this.wallet) {
                this.resultado = "Parabéns! Você ganhou!";
                this.wallet += this.valorAposta * 14;
            } else {
                if (this.corSelecionada != null && this.valorAposta <= this.wallet) {
                    this.resultado = "Que pena! Tente novamente.";
                    this.wallet -= this.valorAposta;
                }
            }
            this.indiceEtapa = 2;
        }
    }
}
</script>

<style scoped>
.progress {
    width: 40vh;
}
.containerbox {
    width: 432px;
    height: 438px;
    margin-right: 300px;
}
.input-container {
    background-color: #000;
    border-radius: 5px;
}

.input-controler {
    background-color: transparent;
    outline: none;
    border: none;
    color: #fff;
}

.main {
    background-color: #2f2f2f;
    border-radius: 10px;
}

.active {
    border: 3px solid #fff;
}

.progress-bar {
    background-color: #ff0037;
    transition: width 0.1s ease-in-out;
    width: 10vh;
}

.btn-white {
    background-color: #fff;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
}

.btn-black {
    background-color: #000;
    color: white;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
}

.btn-red {
    background-color: #ff0037;
    color: white;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
}

.btn-red-active {
    background-color: #940826;
    color: white;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
    border: 3px solid #fff;
}

.btn-black-active {
    background-color: #000000;
    color: white;
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
    border: 3px solid #fff;
}

.btn-white-active {
    background-color: #858283;
    color: rgb(0, 0, 0);
    width: 100%;
    border: none;
    height: 50px;
    border-radius: 10px;
    border: 3px solid #000000;
}

.timer-count {
    position: absolute;
    
    
    font-size: 17px;
    color: #000;
    font-weight: bold;
}
</style>