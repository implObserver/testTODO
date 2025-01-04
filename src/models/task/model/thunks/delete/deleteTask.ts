import { DeleteService } from "@/models/task/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteTask = createAsyncThunk(
    'tasks/delete/task/',
    async (task: Task, thunkAPI) => {
        try {
            const response = await DeleteService.deleteTask(task);
            const result: EmulateResponse = {
                id: 'deleteTask',
                message: `Задача успешно удалена`,
                isError: false,
                data: response,
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'deleteTask',
                message: `Произошла ошибка`,
                isError: true,
                data: {
                    status: error.status,
                    message: error.message,
                },
            }
            return result;
        }
    }
)