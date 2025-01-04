interface Tasks {
    tasks: Task[],
}

interface Task {
    id: string,
    number: string,
    name: string,
    status: string,
}

interface TaskStatuses {
    todo: 'Todo',
    inProgress: 'In Progress',
    complete: 'Complete',
}