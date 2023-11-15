document.addEventListener('DOMContentLoaded', function () {
    var labels = document.querySelectorAll('.tooltip-container');

    labels.forEach(function (label) {
        var tooltipText = label.getAttribute('data-tooltip');

        var tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = tooltipText;

        label.appendChild(tooltip);

        label.addEventListener('mouseover', function () {
            tooltip.style.opacity = '1';
        });

        label.addEventListener('mouseout', function () {
            tooltip.style.opacity = '0';
        });
    });
});