
function changeColor() {
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    document.body.style.background = color;
    window.setTimeout("chBackColor()", 10);

}

