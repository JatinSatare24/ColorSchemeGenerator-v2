const selectedColor = document.getElementById("input-color")
const selectedColorScheme = document.getElementById("scheme-select")
const btn = document.getElementById("btn")
const colorContainer = document.getElementById("colors")
const colorHex = document.getElementById("color-hex")


btn.addEventListener("click", function () {
    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor.value.substring(1)}&mode=${selectedColorScheme.value}`)
        .then(res => res.json())
        .then(
            data => {
                console.log(data)
                colorContainer.innerHTML = ''
                colorHex.innerHTML = ''
                data.colors.forEach(color => {
                    colorContainer.innerHTML += `<div id="singleColorDiv" style="background-color: ${color.hex.value};"><div>`
                    colorHex.innerHTML += `<div id="hexValues"> ${color.hex.value}</div>`
                });
            }

        )
})
