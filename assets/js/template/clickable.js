// Функция для добавления обработчиков кликов
function addClickHandlers() {
  document.querySelectorAll('.clickable:not(.initialized)').forEach(function (element) {
    element.classList.add('initialized'); // Пометить как инициализированный, чтобы не добавлять обработчик повторно
    element.addEventListener('click', function (event) {
      // Предотвращаем стандартное действие
      event.preventDefault();
      event.stopPropagation();
      window.location.href = this.getAttribute('data-url');
    });
  });
}