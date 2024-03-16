<template>
    <div class=" d-flex aling-items-center justify-content-center  w-100">
        <div>
            <div class="app">
                <img class="arrow-top" src="@/assets/icons-games/saper-game/arrowTop.png" alt="" width="50" height="50" />
                <div class="scopeHidden">
                    <ul ref="list">
                        <li v-for="(value, index) in numbers" :key="index" class="list-item-style" :class="[(index % 2) ? 'middle' : '',
                        (value >= 1 && value <= 7) ? 'bg-red' : '',
                        (value >= 8 && value <= 14) ? 'bg-black' : '',
                        (value === 15) ? 'bg-white' : '']" ref="listItem">
                            {{ value }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    data() {
        return {
            numbers: Array.from({ length: 15 }, () => Math.floor(Math.random() * 15) + 1),
            canSpin: true,
            list: null,
        }
    },
    props: {
  winnerNumber: {
    type: Number,
    required: true
  }
},
    mounted() {
        if (this.$refs.list) {
            this.list = this.$refs.list;
        }
        this.listItem = this.$refs.listItem[0];
    },
    methods: {
        start() {
            if (this.etapa === 'Girando...') {
                if (!this.list) {
                    return;
                }

                this.numbers = Array.from({ length: 25 }, () => Math.floor(Math.random() * 15) + 1);

                const move = -150 * 15;
                this.list.style.left = move + 'px';

                //null checking
                if (this.$refs.list) {
                    const index = -Math.floor((move + this.$refs.list.offsetWidth / 2 / -150) / 150) + 1;
                    console.log(index);
                    if (index >= 0 && index < this.$refs.listItem.length) {
                        this.$refs.listItem[index].classList.add('this-list');
                    }
                    this.$emit('number-roll', { num: this.numbers[index] })
                    console.log(`numero vencedor: ${this.numbers[index]}`);

                    this.canSpin = false;

                    const totalTime = 10000; // 10 segundos
                    let elapsedTime = 0;
                    const interval = setInterval(() => {
                        elapsedTime += 100;
                        if (elapsedTime >= totalTime) {
                            clearInterval(interval);
                            this.list.style.left = '0';
                            this.$refs.listItem.forEach(li => li.style.background = '');
                            this.canSpin = true;
                        }
                    }, 100);
                }
            }
        },
        autoSpin() {
            setInterval(() => {
                if (this.canSpin) {
                    this.start();
                }
            }, 4000);
        }
    },
    created() {
        this.autoSpin();
    }
}
</script>

<style scoped>
.app {
    color: #e8e8e8;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
}

.arrow-top {
    position: relative;
    z-index: 1;
    left: 50%;
    transform: translate(-50%, 25px);
}

.this-list {
    /* border: 3px solid #00ff1a; */
}

.bg-white {
    background-color: #fff;
    color: #000;
}

.list-item-style {
    font-size: 25px;
    border: 3px solid #2f2f2f;
    border-radius: 5px;
}

.bg-red {
    background-color: #ff0037;
}

.bg-black {
    background-color: #000;
}

.scopeHidden {
    overflow: hidden;
    width: 800px;
    height: 150px;
    background: #2f2f2f;
    border-radius: 10px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.5);
}

.scopeHidden>ul {
    position: relative;
    /*

  left: 0; Тоже укажите, иначе transition не будет работать

  */
    left: 0;
    display: inline-flex;
    transition: 3s ease;
}

.scopeHidden>ul>li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
}

.scopeHidden>ul>li.middle {
    /* background: #000000; */
}
</style>