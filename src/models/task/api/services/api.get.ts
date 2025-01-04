import { asyncTimeout } from "@/common/shared/lib"

export const GetService = {
    async getTasks(): Promise<ResponseData> {
        //тут должна быть логика создания запросов к API

        //Симуляция
        await asyncTimeout(1000);
        
        return {
            status: 200,
            message: '',
        }
    }
}