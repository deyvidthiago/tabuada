function calcular() {
  let num = document.getElementById('num')
  let tab = document.getElementById('selecionar')
  if (num.value.length == 0) {
    alert('Digite um número primeiro :)')
  } else {
    let nmr = Number(num.value)
    tab.innerHTML = ''
    for (let i = 1; i <= 50; i++) {
      let item = document.createElement('option')
      item.text = `${nmr} X ${i} = ${nmr * i}`
      tab.appendChild(item)
    }
  }
}
