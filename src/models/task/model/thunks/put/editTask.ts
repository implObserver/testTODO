import { PutService } from "@/models/task/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const editTask = createAsyncThunk(
    'tasks/edit/task/',
    async (task: Task, thunkAPI) => {
        try {
            const response = await PutService.editTask(task);
            const result: EmulateResponse = {
                id: 'editTask',
                message: `Задача успешно обновлена`,
                isError: false,
                data: response,
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'editTask',
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