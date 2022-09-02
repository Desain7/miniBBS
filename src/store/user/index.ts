import {defineStore} from "pinia"

export const useUserStore = defineStore({    //js命名
    id: "user", 
    state: () => {
        return {
            name: '张三',
            age: 18
        }
    }
})