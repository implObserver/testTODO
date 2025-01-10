import { asyncTimeout } from "@/common/shared/lib";

export const PutService = {
    async editTask(task: Task): Promise<ResponseData> {
        return {
            status: 200,
            message: task,
        }
    },
}