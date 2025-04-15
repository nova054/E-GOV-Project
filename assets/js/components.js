const headerContainer = document.getElementById('header');
const footerContainer = document.getElementById('footer');

const headerFile = async () => {
    const response = await fetch('../../components/nav.html');
    const navHtml = await response.text();
    headerContainer.innerHTML = navHtml;
}

const footerFile = async () => {
    const response = await fetch('../../components/footer.html');
    const footerHtml = await response.text();
    footerContainer.innerHTML = footerHtml;
}

headerFile();
footerFile();