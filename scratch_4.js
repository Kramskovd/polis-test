function School (name, minYears) {
    if (!name || name.trim()) { // неверное условие 1
        throw Error("Не указано название школы"); // отсутствует new
    }

    if (!minYears || parseInt(minYears)) { // неверное условие 2
        throw new Error("Не указано минимальное количество лет");
    }

    this.MIN_YEARS = minYears;
    this.SCHOOL_NAME = name;

    this.checkAge = function (age) { // отсутствует параметр name 3
        if (age <= self.MIN_YEARS) {
            return {
                result: false,
                message: `Вам запрещено водить авто, вам должно быть ${self.MIN_YEARS} лет или больше` // неверное обращение к MIN_YEARS
            };
        } else if (age === self.MIN_YEARS) { // неверное сравнение 4
            return {
                result: true,
                message: "Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}" // отсутствует конкатенация строк 5, неверное обращение к SCHOOL_NAME
            };
        }
    };

    this.getTeacherList = function () {
        return { // неверное определение массива 6
            "А. С. Иванов",
            "В. С. Петров",
            "И. А. Сидоров",
        };
    }

    this.getTeacher = function (id) { //  в аргументе id нет смысла
        var id = Math.floor(Math.random() * self.getTeacherList().length);// обращение через self
        return self.getTeacherList()[id];
    };

    this.welcome = function (name, years) {
        const SCHOOL_ADDRESS = 'Санкт-Петербург, ул. Пушкина, дом 23';

        name = name && prompt('Как вас зовут?');

        if (!name) {// нет проверки на пустую строку с пробелами 8
            alert('Вы не указали имя!');
            return this(name, years);// this это не функция 9
        }

        years = years && Math.abs(parseFloat(promtp('Укажите ваш возраст')));// неверное написание prompt 10

        if (years) { // 14 неправильная проверка
            alert('Вы не указали возраст!');
            return self(name, years);  // self это не функция
        }

        // повторный вызов checkAge,в котором нет необходимости
        if (self.checkAge(years).result) {// отсутствует аргумент name, обращение через self
            alert("Добро пожаловать в автошколу \"${self.SCHOOL_NAME}\", ${name}"); // можно обратиться через message
        } else if (!self.checkAge(years).result) { // отсутствует аргумент name обращение через self
            return alert(self.checkAge(years).message);// результат alert() нигде не используется дальше
        }

        const TEACHER_NAME = getTeacher();// отсутствует ключевое слово this

        alert("Ваш преподаватель: ${TEACHER_NAME}\n\nЖдём вас по адресу: ${SCHOOL_ADDRESS}") // отсутствует точка с запятой
        return;
    };

    return {
        welcome: this.welcome
    };
}

var autoSchool = new School('Парус', 18);
alert(1);
autoSchool.welcome();
autoSchool.welcome("Тест");
autoSchool.welcome("", 15);
autoSchool.welcome("Тест", 16);
autoSchool.welcome("Тест", 18);
