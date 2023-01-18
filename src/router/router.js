const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};
console.log('wqewq')

const routes = {
    "/": "/../index.html",
    "/login": "./../Login/login.html",
    "/signup": "./../SignUp/signUp.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path]
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();