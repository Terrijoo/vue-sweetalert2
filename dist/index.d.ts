import Vue from 'vue';
import Swal, {SweetAlertOptions} from 'sweetalert2';
declare type VueSwalInstance = typeof Swal.fire;
declare module 'vue/types/vue' {
    interface Vue {
        $swal: VueSwalInstance;
    }
    interface VueConstructor<V extends Vue = Vue> {
        swal: VueSwalInstance;
    }
}
declare class VueSweetalert2 {
    static install(vue: Vue | any, options?: SweetAlertOptions): void;
}
export default VueSweetalert2;
