function School (name, minYears) {
    if (!name.trim()) { // 1
        throw Error("Не указано название школы");
    }
    if (!parseInt(minYears)) { // 2
        throw new Error("Не указано минимальное количество лет");
    }

    this.MIN_YEARS = minYears;
    this.SCHOOL_NAME = name;

    this.checkAge = function (age, name) {// 3
        if (age <= this.MIN_YEARS) {
            return {
                result: false,
                message: `Вам запрещено водить авто, вам должно быть ${this.MIN_YEARS} лет или больше` // 3
            };
        } else{ // 5
            return {
                result: true,
                message: "Добро пожаловать в автошколу \""  + this.SCHOOL_NAME + "\", " + name //6 //
            };
        }
    }

    this.getTeacherList = function () {
        return [// 8
            "А. С. Иванов",
            "В. С. Петров",
            "И. А. Сидоров",
        ];
    }
    this.getTeacher = function (id) { // 9
        var id = Math.floor(Math.random() * this.getTeacherList().length); // 10
        return this.getTeacherList()[id];
    }

    this.welcome = function (name, years) {
        const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

        name = name && prompt('Как вас зовут?');

        if (!name.trim()) { // 11
            alert('Вы не указали имя!');
            return false; // 12
        }

        years = years && Math.abs(parseFloat(prompt('Укажите ваш возраст'))); // 13

        if (!years) { // 14
            alert('Вы не указали возраст!');
            return false// 15
        }

        var res = this.checkAge(years, name);//16
        if (res.result) { // 16,
            alert(res.message);
        } else { // 17
            alert(res.message); // 18, 19
            return false;
        }

        const TEACHER_NAME = this.getTeacher();// 20

        alert(`Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}`); // 21

        return true;
    };
}

var autoSchool = new School('Парус', 19);
try{
  autoSchool.welcome();
}
catch (e){
  alert(e.message);
};
try{
  autoSchool.welcome("Тест");
}
catch (e){
  alert(e.message);
};
try{
    autoSchool.welcome("", 15);
}
catch (e){
  alert(e.message);
};
try{
  autoSchool.welcome("Тест", 16);
}
catch (e){
  alert(e.message);
};
try{
  autoSchool.welcome("Тест", 18);
}
catch (e){
  alert(e.message);
};
