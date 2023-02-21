export function loader() {
    const mainContainer = document.querySelector('main > section:nth-of-type(2)')

    const createLoading = document.createElement("div")
    createLoading.setAttribute("id", "loading")
    mainContainer.appendChild(createLoading);
};