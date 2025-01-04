import { asyncTimeout } from "@/common/shared/lib";

export const DeleteService = {
    async deleteTask(task: Task): Promise<ResponseData> {
        await asyncTimeout(1000);
        return {
            status: 200,
            message: task,
        }
    },
}