$(document).ready(function() {
    $("#addTask").click(function() {
        const taskText = $("#taskInput").val().trim();
        if (taskText !== "") {
            $("#taskList").append(`
                <li>
                    <span class="task-text">${taskText}</span>
                    <button class="remove-btn">❌</button>
                </li>
            `);
            $("#taskInput").val("");
        }
    });

    $("#taskList").on("click", ".task-text", function() {
        $(this).parent().toggleClass("completed");
    });

    $("#taskList").on("click", ".remove-btn", function() {
        $(this).parent().remove();
    });
});
