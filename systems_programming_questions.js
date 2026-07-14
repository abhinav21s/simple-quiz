const questions = [
  {
    question: "Which Unix system call creates a new child process?",
    options: [
      "fork()",
      "exec()",
      "wait()",
      "clone()"
    ],
    answer: "fork()"
  },
  {
    question: "Which system call replaces the current process image with a new program?",
    options: [
      "exec()",
      "fork()",
      "exit()",
      "kill()"
    ],
    answer: "exec()"
  },
  {
    question: "What is the default file descriptor number for standard output (stdout)?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    answer: "1"
  },
  {
    question: "Which IPC mechanism allows multiple processes to access the same memory region?",
    options: [
      "Shared Memory",
      "Pipe",
      "Signal",
      "Socket"
    ],
    answer: "Shared Memory"
  },
  {
    question: "Which synchronization primitive is primarily used to ensure mutual exclusion?",
    options: [
      "Mutex",
      "Pipe",
      "Signal",
      "Message Queue"
    ],
    answer: "Mutex"
  },
  {
    question: "Which Linux system call is commonly used to map a file into a process's address space?",
    options: [
      "mmap()",
      "malloc()",
      "brk()",
      "sbrk()"
    ],
    answer: "mmap()"
  },
  {
    question: "Which signal cannot be caught, blocked, or ignored by a process?",
    options: [
      "SIGTERM",
      "SIGINT",
      "SIGKILL",
      "SIGSTOP"
    ],
    answer: "SIGKILL"
  },
  {
    question: "What is the main purpose of the wait() system call?",
    options: [
      "To create a child process",
      "To suspend the parent until a child process terminates",
      "To terminate the current process",
      "To send a signal to another process"
    ],
    answer: "To suspend the parent until a child process terminates"
  },
  {
    question: "Which scheduling algorithm gives each process an equal time slice in a cyclic order?",
    options: [
      "First Come First Serve",
      "Shortest Job First",
      "Round Robin",
      "Priority Scheduling"
    ],
    answer: "Round Robin"
  },
  {
    question: "What is the primary purpose of a context switch in an operating system?",
    options: [
      "To allocate memory to a process",
      "To save the state of one process and load the state of another",
      "To increase CPU clock speed",
      "To create a new thread"
    ],
    answer: "To save the state of one process and load the state of another"
  },
 
  {
    question: "Which system call is used to terminate the calling process immediately?",
    options: [
      "exit()",
      "wait()",
      "fork()",
      "pause()"
    ],
    answer: "exit()"
  },
  {
    question: "What is the primary purpose of the exec() family of functions?",
    options: [
      "Create a new process",
      "Replace the current process image with a new program",
      "Suspend a process",
      "Allocate additional memory"
    ],
    answer: "Replace the current process image with a new program"
  },
  {
    question: "Which of the following is NOT a valid POSIX thread state?",
    options: [
      "Running",
      "Blocked",
      "Zombie",
      "Ready"
    ],
    answer: "Zombie"
  },
  {
    question: "Which data structure does a Unix-like file system use to store metadata about a file?",
    options: [
      "Superblock",
      "Inode",
      "Sector Table",
      "File Descriptor"
    ],
    answer: "Inode"
  },
  {
    question: "Which command-line utility displays all currently running processes on a Linux system?",
    options: [
      "ls",
      "ps",
      "cat",
      "grep"
    ],
    answer: "ps"
  },
  {
    question: "What is the purpose of a semaphore in concurrent programming?",
    options: [
      "Compress files",
      "Synchronize access to shared resources",
      "Create new processes",
      "Manage file permissions"
    ],
    answer: "Synchronize access to shared resources"
  },
  {
    question: "Which networking protocol guarantees reliable, ordered, and error-checked data delivery?",
    options: [
      "UDP",
      "TCP",
      "ICMP",
      "ARP"
    ],
    answer: "TCP"
  },
  {
    question: "Which memory management technique allows a process to use more memory than the available physical RAM?",
    options: [
      "Segmentation",
      "Virtual Memory",
      "Caching",
      "DMA"
    ],
    answer: "Virtual Memory"
  },
  {
    question: "Which Linux I/O multiplexing mechanism is designed to efficiently handle thousands of file descriptors?",
    options: [
      "scanf()",
      "epoll",
      "printf()",
      "fopen()"
    ],
    answer: "epoll"
  },
  {
    question: "Which condition is NOT one of the four Coffman conditions required for a deadlock?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Circular Wait",
      "Dynamic Allocation"
    ],
    answer: "Dynamic Allocation"
  },
  {
  question: "Which Linux system call opens a file and returns a file descriptor?",
  options: [
    "open()",
    "read()",
    "close()",
    "access()"
  ],
  answer: "open()"
},
{
  question: "Which function is used to read data from a file descriptor in Unix?",
  options: [
    "write()",
    "read()",
    "fread()",
    "scanf()"
  ],
  answer: "read()"
},
{
  question: "What is the primary purpose of the close() system call?",
  options: [
    "Delete a file",
    "Release an open file descriptor",
    "Lock a file",
    "Rename a file"
  ],
  answer: "Release an open file descriptor"
},
{
  question: "Which scheduling algorithm always executes the process with the smallest execution time first?",
  options: [
    "Round Robin",
    "Priority Scheduling",
    "Shortest Job First",
    "First Come First Serve"
  ],
  answer: "Shortest Job First"
},
{
  question: "Which page replacement algorithm replaces the page that has not been used for the longest time?",
  options: [
    "FIFO",
    "LRU",
    "Optimal",
    "Clock"
  ],
  answer: "LRU"
},
{
  question: "Which protocol is connectionless and does not guarantee packet delivery?",
  options: [
    "TCP",
    "UDP",
    "HTTP",
    "FTP"
  ],
  answer: "UDP"
},
{
  question: "What is the primary role of the kernel in an operating system?",
  options: [
    "Compile source code",
    "Manage hardware and system resources",
    "Store user files",
    "Run web applications"
  ],
  answer: "Manage hardware and system resources"
},
{
  question: "Which system call is commonly used to create a communication channel between related processes?",
  options: [
    "pipe()",
    "socket()",
    "dup()",
    "link()"
  ],
  answer: "pipe()"
},
{
  question: "Which synchronization problem is commonly used to demonstrate deadlock and resource sharing?",
  options: [
    "Producer-Consumer",
    "Dining Philosophers",
    "Readers-Writers",
    "Sleeping Barber"
  ],
  answer: "Dining Philosophers"
},
{
  question: "What does DMA stand for in systems programming?",
  options: [
    "Direct Memory Access",
    "Dynamic Memory Allocation",
    "Distributed Memory Architecture",
    "Data Management Access"
  ],
  answer: "Direct Memory Access"
},
{
  question: "Which function duplicates an existing file descriptor?",
  options: [
    "dup()",
    "copy()",
    "clone()",
    "link()"
  ],
  answer: "dup()"
},
{
  question: "Which scheduling algorithm may cause starvation for long-running processes?",
  options: [
    "Round Robin",
    "First Come First Serve",
    "Shortest Job First",
    "Multilevel Queue"
  ],
  answer: "Shortest Job First"
},
{
  question: "What is the primary purpose of a page table?",
  options: [
    "Store CPU registers",
    "Translate virtual addresses to physical addresses",
    "Manage file permissions",
    "Track running processes"
  ],
  answer: "Translate virtual addresses to physical addresses"
},
{
  question: "Which system call changes the current working directory of a process?",
  options: [
    "mkdir()",
    "cd()",
    "chdir()",
    "pwd()"
  ],
  answer: "chdir()"
},
{
  question: "Which POSIX thread function waits for another thread to finish execution?",
  options: [
    "pthread_wait()",
    "pthread_join()",
    "pthread_exit()",
    "pthread_lock()"
  ],
  answer: "pthread_join()"
},
{
  question: "Which CPU scheduling algorithm selects the process with the highest priority?",
  options: [
    "Priority Scheduling",
    "Round Robin",
    "Shortest Remaining Time First",
    "FIFO"
  ],
  answer: "Priority Scheduling"
},
{
  question: "Which file permission allows a user to modify the contents of a file?",
  options: [
    "Read",
    "Write",
    "Execute",
    "Append"
  ],
  answer: "Write"
},
{
  question: "Which IPC mechanism enables communication between unrelated processes over a network?",
  options: [
    "Socket",
    "Pipe",
    "Semaphore",
    "Shared Memory"
  ],
  answer: "Socket"
},
{
  question: "What is the primary advantage of multithreading over multiple processes?",
  options: [
    "Threads have separate address spaces",
    "Threads share memory and have lower creation overhead",
    "Threads cannot communicate",
    "Threads use more memory"
  ],
  answer: "Threads share memory and have lower creation overhead"
},
{
  question: "Which memory allocation function initializes the allocated memory to zero?",
  options: [
    "malloc()",
    "calloc()",
    "realloc()",
    "alloca()"
  ],
  answer: "calloc()"
},
{
  question: "Which system call is used to send a signal to another process?",
  options: [
    "kill()",
    "signal()",
    "raise()",
    "alarm()"
  ],
  answer: "kill()"
},
{
  question: "Which memory allocation function can resize an existing memory block?",
  options: [
    "malloc()",
    "calloc()",
    "realloc()",
    "free()"
  ],
  answer: "realloc()"
},
{
  question: "What is the primary purpose of the SIGCHLD signal?",
  options: [
    "Notify a parent that its child has terminated or changed state",
    "Terminate a process",
    "Pause a process",
    "Resume a stopped process"
  ],
  answer: "Notify a parent that its child has terminated or changed state"
},
{
  question: "Which data structure is commonly used by an operating system to keep track of running processes?",
  options: [
    "Process Control Block (PCB)",
    "Hash Table",
    "Stack",
    "Binary Tree"
  ],
  answer: "Process Control Block (PCB)"
},
{
  question: "Which file system component stores information such as file size, permissions, and timestamps?",
  options: [
    "Directory Entry",
    "Inode",
    "Boot Block",
    "Superblock"
  ],
  answer: "Inode"
},
{
  question: "Which CPU register usually stores the address of the next instruction to execute?",
  options: [
    "Program Counter (PC)",
    "Stack Pointer (SP)",
    "Accumulator",
    "Base Register"
  ],
  answer: "Program Counter (PC)"
},
{
  question: "Which synchronization mechanism allows multiple readers but only one writer at a time?",
  options: [
    "Read-Write Lock",
    "Mutex",
    "Binary Semaphore",
    "Spinlock"
  ],
  answer: "Read-Write Lock"
},
{
  question: "Which Linux command displays the hierarchy of running processes?",
  options: [
    "pstree",
    "lsproc",
    "tree",
    "top"
  ],
  answer: "pstree"
},
{
  question: "What is the primary purpose of the execve() system call?",
  options: [
    "Replace the current process with a new executable",
    "Create a new thread",
    "Allocate virtual memory",
    "Send data through a socket"
  ],
  answer: "Replace the current process with a new executable"
},
{
  question: "Which scheduling algorithm always executes the process with the shortest remaining execution time?",
  options: [
    "Shortest Remaining Time First (SRTF)",
    "Round Robin",
    "Priority Scheduling",
    "First Come First Serve"
  ],
  answer: "Shortest Remaining Time First (SRTF)"
}
];



export default questions;
