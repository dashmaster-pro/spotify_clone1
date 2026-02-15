const addItem = async (item) => {
    await randomdelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}


const randomdelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}
async function main() {
   let t =  setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length-1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);

    // setTimeout(() => {
        
    // }, 700);

    let text = [
        "Initialising Hacking",
        "Rading your files",
        "password file detected",
        "sending all pasword and personal files to server",
        "cleaning up"
    ]

    for (const item of text) {
        await addItem(item)
    }
    await randomdelay()
    clearInterval(t)
}
main()

