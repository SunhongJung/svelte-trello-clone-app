export function autoFocusout(el, focusOutListener){

    const focusInListener = event => {
        event.stopPropagation() 
    }

    setTimeout(() => {
        el.addEventListener('click', focusInListener)
        window.addEventListener('click', focusOutListener)
    })

    return {
        destroy(){
            el.removeEventListener('click', focusInListener)
            window.removeEventListener('click', focusOutListener)
        }
    }
}