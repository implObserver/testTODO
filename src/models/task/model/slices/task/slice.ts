import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getTasks } from "../../thunks/get/getTasks";
import { addTask } from "../../thunks/post/addTask";
import { deleteTask } from "../../thunks/delete/deleteTask";
import { editTask } from "../../thunks/put/editTask";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        resetState: () => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        const pendingHandler = (state: Tasks) => {

        };

        const errorHandler = (state: Tasks) => {

        }

        const getTasksHandler = (state: Tasks, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {

            } else {

            }
        }

        const addTaskHandler = (state: Tasks, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {

            } else {
                const newTask = action.payload.data.message;
                const index = state.tasks.findIndex(task => task.id === newTask.id);
                const index2 = state.tasks.findIndex(task => task.name === newTask.name);
                if (index === -1 && index2 === -1) {
                    state.tasks.push(newTask);
                }
            }
        }

        const editTaskHandler = (state: Tasks, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {

            } else {
                const newTask = action.payload.data.message;
                const index = state.tasks.findIndex(task => task.id === newTask.id);
                if (index !== -1) {
                    state.tasks.splice(index, 1, newTask);
                }
            }
        }

        const deleteTaskHandler = (state: Tasks, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {

            } else {
                const newTask = action.payload.data.message;
                const index = state.tasks.findIndex(task => task.id === newTask.id);
                if (index !== -1) {
                    state.tasks.splice(index, 1);
                }
            }
        }

        const asyncActions = [
            { action: getTasks, handler: getTasksHandler },
            { action: addTask, handler: addTaskHandler },
            { action: deleteTask, handler: deleteTaskHandler },
            { action: editTask, handler: editTaskHandler },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, pendingHandler)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, errorHandler);
        });
    },
})

export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;