import { PostService } from "@/models/task/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addTask = createAsyncThunk(
    'tasks/add/task/',
    async (task: Task, thunkAPI) => {
        try {
            const response = await PostService.addTask(task);
            const result: EmulateResponse = {
                id: 'addTask',
                message: `Задача успешно создана`,
                isError: false,
                data: response,
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'addTask',
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