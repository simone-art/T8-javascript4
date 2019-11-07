let obterAlunos = async() => {
    const ta = await getTurma(`A`)
    const tb = await getTurma(`B`)
    const tc = await getTurma(`C`)
    return [].concat(ta, tb, tc)
}

obterAlunos().then(alunos => alunos.map
(a => a.nome)).then(nomes =>
console.log(nomes))

