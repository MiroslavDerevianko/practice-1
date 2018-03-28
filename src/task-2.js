
export default function getNthItem(a, n) {
    //Перевірка на число

    //Первірка на нуль
     

    let S = 0;
    for (let i = 0; i < n; i++) {
        S = a - 2 * S;
    }
    return S;
}
