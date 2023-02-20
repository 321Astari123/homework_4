const student = "Дедов Даниил Романович";

document.getElementById("student").innerHTML = student;

const erorVer = 0.2;

function throwRandomError(chance) {
    let max_chance = 1;
    let min_chance = 0.0;
    if ((chance >= min_chance) || (chance <= max_chance)) {
        rand = Math.random(max_chance).toFixed(1);
        console.log(`рандомное число: ${rand}`)
    }
    if (rand <= chance) {
        throw new Error(`Что-то сломалось`)
    }
}
try{
    throwRandomError(erorVer)
    console.log('Всё хорошо, приложение работает так как нужно')
} catch (error){
   console.log('Возникла ошибка, попробуйте обновить страницу')
   console.log('error404')
}