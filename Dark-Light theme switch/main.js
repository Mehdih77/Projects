const toggle = document.getElementById('toggle');

const changeTheme = () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme')
    } else {
        document.body.setAttribute('data-theme', 'dark')
    }
};

toggle.addEventListener('change', changeTheme);