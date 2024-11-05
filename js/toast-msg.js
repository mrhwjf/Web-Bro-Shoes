//Toast message
function toastMsg({
    title = 'Success',
    message = 'Account created successfully!',
    type = 'success', 
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main){
        const toast = document.createElement('div');
        //Auto remove toast
        const autoRemove = setTimeout(function(){
            main.removeChild(toast);
        },duration+1000);
        //Remove toast when click btn close
        toast.onclick = function(e){
            if(e.target.closest('.fa-regular')){
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const colors = {
            success: '#47d864',
            info: '#2f86eb',
            warning: '#ffc021',
            error: '#ff6243'
        }

        const icons = {
            success: 'fa-light fa-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-bug'
        };

        const color = colors[type];
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast', `toast-${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `<div class="toast-private">
        <div class="toast-icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast-body">
            <h3 class="toast-title">${title}</h3>
            <p class="toast-msg">
                ${message}
            </p>
        </div>
        <div class="toast-close">
            <i class="fa-regular fa-circle-xmark"></i>
        </div>
    </div>
    <div class="toast-background"style="background-color: ${color};">
    </div>`
    main.appendChild(toast);
    }
}