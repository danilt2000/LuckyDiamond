export default (await import('vue')).defineComponent({
data() {
return {
Object: {
bg: "value",
nickname: "value",
icons: {},
textTacholgy: { text1: "text2" },
},
name: 'HelpPage',
components: {
HelpComponent
}
};

},
components: {
HeaderComponent,
AsideBarComponent,
HelpComponent,
},
});
