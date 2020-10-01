let num = 9
for (let y = 1; y <= num; y++) {
    let data = []
    for (let x = 1; x <= y; x++) {
        data.push(y + '*' + x + '=' + (y * x))
    }
    console.log(data.join(' '))
}