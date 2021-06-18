// alert('ap.js is ready to work')
document.querySelector('.cube-list').addEventListener('click', (event) => {
    // console.log(event.target)
    const target = event.target;
    if (target.classList.contains('more')) {
        const dsc = target.parentNode.querySelector('.cube-description');
        if (dsc.style.display =='block') {
            dsc.style.display = 'none';
            target.textContent = 'See More';
        } else {
            dsc.style.display = 'block';
            target.textContent = 'Hide';
        }
        
    }
    })