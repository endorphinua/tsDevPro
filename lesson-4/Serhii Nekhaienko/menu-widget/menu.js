var menuWidget = {
    init: function () {
        let headers = document.querySelectorAll('li span');
        headers.forEach(function (element) {
            element.addEventListener('click', menuWidget.onClick);
            element.addEventListener('dblclick', menuWidget.onDoubleClick);
        })
    },
    onClick: function (event) {
        let element = event.target.parentElement;
        let child = element.querySelector('.child');
        if (child) {
            child.classList.toggle('showed');
        }
    },
    onDoubleClick: function (event) {
        let element = event.target;
        element.childNodes.addEventListener('selectstart', function (e) {
            e.preventDefault();
        })
    }
};

addEventListener('DOMContentLoaded', function () {
    menuWidget.init();
});