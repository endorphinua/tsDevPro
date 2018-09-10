var removeWidget = {
    init: function (container) {
        let containerElement = document.querySelector(container);
        containerElement.addEventListener('click', this.onClick);
    },
    onClick: function (event) {
        let element = event.target;
        if(element.classList.contains('remove')) {
            element.parentElement.remove();
        }
    }
};

addEventListener('DOMContentLoaded', function () {
    removeWidget.init('section');
});