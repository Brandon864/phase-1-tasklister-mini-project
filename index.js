document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#create-task-form");
    const taskList = document.querySelector("#tasks");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // ✅ Prevents HTTP request (Fixes 405 error)

        const input = document.querySelector("#new-task-description");
        const taskText = input.value.trim(); // Get input value

        if (taskText !== "") {
            // ✅ Create new list item
            const li = document.createElement("li");
            li.textContent = taskText;

            // ✅ Add delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "❌";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.addEventListener("click", () => {
                li.remove();
            });

            // ✅ Append delete button to task
            li.appendChild(deleteBtn);

            // ✅ Add task to list
            taskList.appendChild(li);

            // ✅ Clear input field
            input.value = "";
        }
    });
});
