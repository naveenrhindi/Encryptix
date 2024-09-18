document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');
    const toggleTheme = document.getElementById('toggleTheme');
    let isDark = false;
    let memory = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.innerText === 'C') {
                screen.innerText = '';
            } else if (button.innerText === '=') {
                try {
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = 'Error';
                }
            } else if (button.innerText === '⌫') {
                screen.innerText = screen.innerText.slice(0, -1);
            } else if (button.innerText === 'M+') {
                memory += parseFloat(screen.innerText) || 0;
            } else if (button.innerText === 'M-') {
                memory -= parseFloat(screen.innerText) || 0;
            } else if (button.innerText === 'MR') {
                screen.innerText = memory;
            } else if (button.innerText === 'MC') {
                memory = 0;
            } else {
                if (screen.innerText === 'Error') {
                    screen.innerText = button.innerText;
                } else {
                    screen.innerText += button.innerText;
                }
            }
        });
    });

    toggleTheme.addEventListener('change', () => {
        document.body.classList.toggle('theme-dark');
        isDark = !isDark;
    });
});
