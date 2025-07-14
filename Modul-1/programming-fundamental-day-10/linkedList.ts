// -- SINGLE LINKED LIST
// case : daftar tugas harian

class TaskNode {
    public task: string;
    public next: TaskNode | null;

    constructor(task: string, next: TaskNode | null = null) {
        this.task = task;
        this.next = next;
    }
}

class TaskList {
    private head: TaskNode | null = null

    public addTask(task: string) {
        const newNode = new TaskNode(task)
        if (!this.head) {
            this.head = newNode
        } else {
            let current: TaskNode = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }
    }

    public showTask() {
        let result: string[] = []
        let current = this.head

        while (current) {
            result.push(current.task)
            current = current.next
        }

        return result
    }
}

const list = new TaskList()
list.addTask("Belajar")
list.addTask("Makan")
console.log(list.showTask())