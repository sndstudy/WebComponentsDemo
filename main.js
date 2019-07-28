/// <reference path="types/jQuery/index.d.ts" />
/// <reference path="types/jQueryUI/index.d.ts" />

$('button-component').on('click', () => {
    $("#createToDo").dialog({
        modal: true,
        title: "ToDo作成",
        buttons: {
            "作成": () => {
                const element = document.createElement('todo-component');
                element.setAttribute('data-title', $('#title').val());
                element.setAttribute('data-detail', $('#details').val());
                $('#title').val('');
                $('#details').val('');
                $('#toDolist').append(element);
                $('#createToDo').dialog("close");
            }
        }
    });
});
