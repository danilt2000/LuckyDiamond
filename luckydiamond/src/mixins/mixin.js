export const Mixins = {
    methods: {
        checkWindowSize() {
            this.mobile = window.innerWidth <= 600
        },
        AddWindowListener() {
            window.addEventListener('resize', this.checkWindowSize)
        },
        RemoveWindowListener() {
            window.removeEventListener('resize', this.checkWindowSize)
        }
    }
}