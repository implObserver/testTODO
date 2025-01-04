import { GetService } from "@/models/task/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTasks = createAsyncThunk(
    'tasks/get/task/',
    async (thunkAPI) => {
        try {
            const response = await GetService.getTasks();
            const result: EmulateResponse = {
                id: 'getTasks',
                message: `Задачи успешно получены`,
                isError: false,
                data: response,
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'getTasks',
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