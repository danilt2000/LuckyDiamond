<template>
    <div class="content__grid-profile" >
        <aside-bar-component></aside-bar-component>
    
        <chat-component></chat-component>
    
        <header-component></header-component>

        <develop-component></develop-component>
      </div>
</template>
<script>
import DevelopComponent from "@/components/DevelopComponent.vue";
import AsideBarComponent from "@/components/AsidebarComponent.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
    data () {
        return {
           Object: {
            bg:'value',
            nickname: 'value',
            icons: {},
            textTacholgy: {'text1': 'text2'}
           }
        }
    }, 
    components: {
    ChatComponent,
    HeaderComponent,
    AsideBarComponent,
    DevelopComponent    
    }
}

</script>