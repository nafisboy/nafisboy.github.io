function copyText(htmlElement)
{
    if (!HTMLElement) {
        return;
    }

    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);

    inputElement.select();

    document.execCommand('copy');

    // Simulating a task that takes 3 seconds
    setTimeout(function() {
        document.body.appendChild(inputElement);
        inputElement = document.createElement('input');
        inputElement.setAttribute('value', elementText);
        inputElement.select();
        document.execCommand('copy');
        elementText = htmlElement.innerText;
        inputElement.value = '';
        // let inputElement = document.createElement('input');
        document.querySelector('#text');
    }, 3000);
}


document.querySelector('#copy-text-btn').onclick = function ()
{
    copyText(document.querySelector('#text'));
}