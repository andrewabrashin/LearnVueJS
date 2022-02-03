export default {
    data () {
        return {
            shownHint: false,
        };
    },
    props: {
        label: {
            type: String,
            default: "",
        },
        hint: {
            type: String,
        },
    },
    methods: {
        showHint() {
            setTimeout(() =>
                this.shownHint = true, 1000);
        },
        hideHint() {
            this.shownHint = false;
        },
    }
}