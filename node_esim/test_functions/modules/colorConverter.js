exports.rgbToHex = function (red, green, blue) {
    return pad(red.toString(16)) + pad(green.toString(16)) + pad(
        blue.toString(16))
}

function pad(hex) {
    return (hex.length === 1 ? "0" + hex : hex)
}

exports.hexToRgb = function (hex) {
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return [r, g, b]
}
