export function headerCounter() {
    const headers = document.getElementsByClassName('section-header');
    let counter = 0;

    Array.from(headers).forEach((el, i) => {
        let number = counter < 10 ? `0${counter}` : counter.toString();
        const fullName = el.textContent.split(' ');

        if(i === 0 && fullName[1]) {
            el.innerHTML = `${fullName[0]} <br> ${fullName[1]} <span class="section-header-count">${number}</span>`;
        } else{
            el.innerHTML = `${fullName[0]} <span class="section-header-count">${number}</span>`;
        }

        counter++;
    });
}
