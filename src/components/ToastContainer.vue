<template>
    <div class="toast-container">
        <Toast v-for="toast in toasts"
        :key="toast.id"
        :message="toast.message"
        :position="toast.position"
        :duration="toast.duration"
        @remove="removeToast(toast.id)"
        />
    </div>
</template>

<script>
import Toast from './Toast.vue';

export default {
    name: 'ToastContainer',
    components: { Toast },
    data () {
        return {
            toasts: [] // 管理所有 Toast 的列表
        };
    },
    methods: {
        show (message, position = 'topRight', duration = 3000) {
            const id = Date.now(); // 用時間戳作為唯一 ID
            this.toasts.push({ id, message, position, duration });
            console.log(this.toasts)
        },
        removeToast (id) {
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
        }
    }
};
</script>

<style>
.toast-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
    z-index: 9999;
}
</style>
