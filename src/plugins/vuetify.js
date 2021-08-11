import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#002E5D",
                secondary: "#0062B8",
                white: "#FFFFFF",
                accent: "#FFD700",
                info: "#1FB3D1",
                success: "#10A170",
                warning: "#FFB700",
                error: "#E61744"
            },
            dark: {
                primary: "#002E5D",
                secondary: "#0062B8",
                white: "#FFFFFF",
                accent: "#FFD700",
                info: "#1FB3D1",
                success: "#10A170",
                warning: "#FFB700",
                error: "#E61744"
            }
        }
    }
});
