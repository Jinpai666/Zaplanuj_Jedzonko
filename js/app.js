
window.addEventListener('DOMContentLoaded', (event) => {

    const nameInput = document.querySelector("#name");
    const submitButton = document.querySelector("#btn");
    const userName = document.querySelector("#app-header__user");
    const welcomeSection = document.querySelector("#welcome-message");
    const app = document.querySelector("#display-panel");
    const schedules = document.querySelector("#schedules-panel");
    const schedulesWidget = document.querySelector("#schedules-widget")
    const recipes = document.querySelector("#recipes-panel");
    const recipesWidget = document.querySelector("#recipes-widget");


    /*WELCOME MESSAGE~Łukasz*/

    const toggle = () => {
        welcomeSection.style.display = "none";
        app.style.display = "block";
    }
    const checkStorage = () => {
        if(localStorage.getItem('savedName') !== null) {
            return toggle();
        } else {
            app.style.display = "none";
            welcomeSection.style.display = "flex";
        }
    }
    const submit = (e) => {
        if((nameInput.value).length <= 0){
            return alert("Podaj swoje imię!");
        }else if (Number(nameInput.value)){
            return alert("Imię musi zawierać litery!")
            }else{
            localStorage.setItem('savedName', nameInput.value);
            localStorage.getItem('savedName');
        }
    }
    userName.innerHTML = localStorage.getItem('savedName');
    submitButton.addEventListener('click', submit)
    checkStorage();


   /*KLIKNIĘCIA W WIDGETY~Łukasz*/

    const schedulesToggle = () => {
        schedules.style.display = "block";
        app.style.display = "none"
    }
    schedulesWidget.addEventListener('click', schedulesToggle);
    const recipesToggle = () => {
        recipes.style.display = "block";
        app.style.display = "none";
    }
    recipesWidget.addEventListener('click', recipesToggle);


    /*KLIKNIĘCIA W LOGO*/

    const indexLink = document.querySelectorAll(".website-link-logo");
    indexLink.forEach((el)=>{
        el.addEventListener("click",()=>{
            window.open("index.html","_self")
        })
    })



    /*DODAWANIE PLANÓW*/

    const planName = document.querySelector("#planName")
    const planDescription = document.querySelector("#planDescription")
    const weekNumber = document.querySelector("#weekNumber")
    const newPlanBtn = document.querySelector("#new-plan__btn");
    const monday = document.querySelectorAll(".monday td select")
    const tuesday = document.querySelectorAll(".tuesday td select")
    const wednesday = document.querySelectorAll(".wednesday td select")
    const thursday = document.querySelectorAll(".thursday td select")
    const friday = document.querySelectorAll(".friday td select")
    const saturday = document.querySelectorAll(".saturday td select")
    const sunday = document.querySelectorAll(".sunday td select")

    const newPlan = {
        title: "",
        description: "",
        weekNumber: "",
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    }

    function savePlanToLocalStorage(newObject) {
        let dataFromLocalStorage = [];
        if (localStorage.getItem("schedules") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("schedules"));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("schedules", JSON.stringify(dataFromLocalStorage));
        } else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("schedules", JSON.stringify(dataFromLocalStorage));
        }
        alert("Przepis zapisany do localStorage");
    }

    saveAndClose = (e) => {
            e.preventDefault();
            if(planName.value == null || planName.value == "" ||
            planDescription.value == null || planDescription.value == "" ||
            weekNumber.value == null || weekNumber.value == ""){
                return alert("wypełnij wszystkie pola!")
            }else{
            newPlan.title = planName.value;
            newPlan.description = planDescription.value;
            newPlan.weekNumber = weekNumber.value;
        monday.forEach(function (element) {
            newPlan.monday.push(element.options[element.selectedIndex].value)
        });
        tuesday.forEach(function (element) {
            newPlan.tuesday.push(element.options[element.selectedIndex].value)
        });
        wednesday.forEach(function (element) {
            newPlan.wednesday.push(element.options[element.selectedIndex].value)
        });
        thursday.forEach(function (element) {
            newPlan.thursday.push(element.options[element.selectedIndex].value)
        });
        friday.forEach(function (element) {
            newPlan.friday.push(element.options[element.selectedIndex].value)
        });
        saturday.forEach(function (element) {
            newPlan.saturday.push(element.options[element.selectedIndex].value)
        });
        sunday.forEach(function (element) {
            newPlan.sunday.push(element.options[element.selectedIndex].value)
        });
            savePlanToLocalStorage(newPlan);
            console.log("Zapisano:", newPlan);
        schedules.style.display = "none";
        app.style.display = "block";
        }};
    newPlanBtn.addEventListener('click', saveAndClose);





    //PRZEPISY-----------------------------------------------------------

    //Instrukcje
    const instDesc = document.getElementById("instDesc");
    const instructionList = document.getElementById("instList");
    const addInstructionButton = document.getElementById("addIns");
    function addInstruction(){
        if (instDesc.value.length > 0){
            instructionList.innerHTML += `<li class="recipes__list-item_inst recipes__list-item">${instDesc.value} <i class="recipes__edit-icon fa-solid fa-pen-to-square"></i> <i class="recipes__remove-icon fa-solid fa-trash-can"></i></li>`
            instDesc.value = ""}
        removeInstruction();
    }
    function removeInstruction(){
        const removeInst = document.querySelectorAll(".recipes__remove-icon");
        removeInst.forEach(el => el.addEventListener("click", () => {
            el.parentElement.remove();
            addInstructionButton.addEventListener("click", addInstruction);
        }))}
    removeInstruction();
    addInstructionButton.addEventListener("click", addInstruction);

    //Składniki
    const ingDesc = document.getElementById("ingDesc");
    const ingredientList = document.getElementById("ingList");
    const addIngredientButton = document.getElementById("addIng");

    function addIngredient() {
        if (ingDesc.value.length > 0){
            ingredientList.innerHTML += `<li class="recipes__list-item_ingr recipes__list-item">${ingDesc.value} <i class="recipes__edit-icon fa-solid fa-pen-to-square"></i> <i class="recipes__remove-icon fa-solid fa-trash-can"></i></li>`
            ingDesc.value = ""}
        removeInstruction();
    }
    addIngredientButton.addEventListener("click", addIngredient);

    //zapisywanie przepisu w local storage
    const recipeName = document.getElementById("recipeName");
    const recipeDesc = document.getElementById("recipeDesc");
    const addRecipeBtn = document.getElementById("addRecipeBtn");

    function saveToLocalStorage(newObject) {
        let dataFromLocalStorage = [];
        if (localStorage.getItem("recipes") != null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem("recipes"));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
            alert("Przepis zapisany do localStorage");
        } else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem("recipes", JSON.stringify(dataFromLocalStorage));
            alert("Przepis zapisany do localStorage");
        }

    }
    //Dodaj nowy przepis
    addRecipeBtn.addEventListener("click", function(el) {
        el.preventDefault();
        const newRecipe = {};
// zapisujemy detale przepisu do pola obiektu newRecipe
        newRecipe.title = recipeName.value;
        newRecipe.description = recipeDesc.value;
        newRecipe.instruction = Array.from(instructionList.children).map((e)=> e.innerText)
        newRecipe.ingredients = Array.from(ingredientList.children).map((e)=> e.innerText)
// zapisujemy nowy przepis do localStorage + validacja
        if (recipeName.value === "" || recipeDesc.value === "" || instructionList.children.length === 0 || ingredientList.children.length === 0){
            alert("Wypełnij wszystkie pola i dodaj opis i składniki zanim zapiszesz!");
        }else {
            saveToLocalStorage(newRecipe);

            // podglądamy w konsoli co zostało zapisane
            console.log("Zapisano:", newRecipe);
        }

// powracamy do strony głównej aplikacji
        recipes.style.display = "none";
        app.style.display = "block";
    });
});

