'use strict'

async function initialize() {
    const tasks = await getAllTasks();

    for (let task of tasks) {
        let item =
            `<li class="mt-2" id="${task.id}">
            <div class="block p-5 bg-white rounded shadow">
            <div class="flex justify-between">
                <p>${task.text}</p>
                <span class="material-icons text-gray-500">
                <a onclick="deleteItem(${task.id})" class="large material-icons icon-red cursor-pointer">delete</a>
                </span>
            </div>
            <div class="mt-5 flex justify-between">
                <p class="text-sm text-gray-600 ">${task.date}</p>
                <div>
                <span class="inline-flex items-center rounded px-2 py-1 bg-indigo-100">
                    <a class="small material-icons icon-red cursor-pointer" onclick="moveLeft(${task.id})">navigate_before</a>
                </span>
                <span class="inline-flex items-center rounded px-2 py-1 bg-indigo-100">
                    <a class="small material-icons icon-red cursor-pointer" onclick="moveRight(${task.id})">navigate_next</a>
                </span>
                </div>
            </div>
            </div>
        </li>`;

        document.getElementById(task.state).innerHTML += item;
    }
}

async function addTask() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let month = months[d.getMonth()];

    let description = document.getElementById("descriptionInput").value;

    const UUID = await getUUID();
    let id = UUID.id;

    await fetch("http://localhost:8000/api/list", {
        method: "POST",
        body: JSON.stringify({ id: id, text: description, date: month + " " + d.getDate(), state: 'todo' })
    });

    let item =
        `<li class="mt-2" id="${id}">
        <div class="block p-5 bg-white rounded shadow">
        <div class="flex justify-between">
            <p>${description}</p>
            <span class="material-icons text-gray-500">
            <a onclick="deleteItem(${id})" class="large material-icons icon-red cursor-pointer">delete</a>
            </span>
        </div>
        <div class="mt-5 flex justify-between">
            <p class="text-sm text-gray-600 ">${month + " " + d.getDate()}</p>
            <div>
            <span class="inline-flex items-center rounded px-2 py-1 bg-indigo-100">
                <a class="small material-icons icon-red cursor-pointer" onclick="moveLeft(${id})">navigate_before</a>
            </span>
            <span class="inline-flex items-center rounded px-2 py-1 bg-indigo-100">
                <a class="small material-icons icon-red cursor-pointer" onclick="moveRight(${id})">navigate_next</a>
            </span>
            </div>
        </div>
        </div>
    </li>`;

    document.getElementById("todo").innerHTML += item;
}

async function moveRight(id) {
    let item = document.getElementById(id);
    let parent = item.parentNode.id;

    switch (parent) {
        case 'todo':
            updateState(id, 'progress');
            document.getElementById("progress").append(item);
            break;
        case 'progress':
            updateState(id, 'done');
            document.getElementById("done").append(item);
            break;
    }
}

async function moveLeft(id) {
    let item = document.getElementById(id);
    let parent = item.parentNode.id;

    switch (parent) {
        case 'progress':
            updateState(id, 'todo');
            document.getElementById("todo").append(item);
            break;
        case 'done':
            updateState(id, 'progress');
            document.getElementById("progress").append(item);
            break;
    }
}

async function updateState(id, state) {
    await fetch("http://localhost:8000/api/list/", {
        method: "PUT",
        body: JSON.stringify({
            id: id,
            state: state
        }),
    });
}

async function deleteItem(id) {
    await fetch("http://localhost:8000/api/list/", {
        method: "DELETE",
        body: JSON.stringify({
            id: +id
        }),
    });

    document.getElementById(id).remove();
}

async function getUUID() {
    const response = await fetch("http://localhost:8000/api/id", {
        method: "GET"
    });

    return await response.json();
}

async function getAllTasks() {
    const response = await fetch("http://localhost:8000/api/list", {
        method: "GET"
    });
    return await response.json();
}

initialize();

