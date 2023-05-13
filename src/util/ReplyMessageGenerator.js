export default class ReplyMessageGenerator {
    constructor(name, language) {
        this.name = name;
        this.lang = language;
    }

    repliesENG = [
        "Why did the programmer quit his job? He didn't get arrays.",
        "Why do programmers prefer dark mode? Less watts per screen.",
        "Why did the computer go to the doctor? Because it had a virus!",
        "Why did the database administrator leave his wife? She had one-to-many relationships.",
        "Why did the web developer refuse to work on the website over the weekend? He didn't want to deal with weekend exceptions.",
        "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
        "Why did the developer go broke? He used up all his cache.",
        "Why did the JavaScript developer break up with his girlfriend? He didn't know how to 'null' the relationship.",
        "Why do Java developers wear glasses? Because they can't C#",
        "Why did the programmer quit his job? He didn't get arrays."
    ];
    repliesIT = ["Perché il pomodoro è rosso? Perché non ha ancora imparato a blush.",
        "Cosa dice un albero quando viene messo in punizione? Mi hanno messo al tronco!",
        "Perché le formiche non si ammalano mai? Perché hanno le difese immunitarie super!",
        "Perché il pollo ha attraversato la strada? Per arrivare dall’altra parte!",
        "Perché i gatti non fanno shopping online? Perché preferiscono fare acquisti di persona!",
        "Cosa dice un cane al suo padrone? Grazie per avermi fatto canoscere!",
        "Perché il mare è blu? Perché i pesci non sanno cantare la musica blues!",
        "Cosa dice un povero ad un altro povero? Ci vediamo al lavoro!",
        "Qual è il contrario di Google? Tu sai tutto.",
        "Cosa dice un elefante quando incontra un altro elefante? Vediamo se sei di buona memoria!"
    ];
    repliesRU = [
        "Как называется кража воровки-любительницы? - Хоббит",
        "Я перепутал свои пилюли для похудения с витаминами для роста волос. Теперь у меня лысина на животе, но ногти выросли до потолка!",
        "Если вы хотите узнать, как убить время, то это уже не убийство времени.",
        "Почему люди не боятся призраков на день святого Валентина? - Потому что они не существуют.",
        "Какой самый ленивый день недели? - Пятница. Дважды нажать кнопку «отложить» всё-таки проще, чем думать о завтрашнем дне.",
        "Как на войне? - На войне как на войне, но хуже.",
        "Когда пираты перешли на удаленную работу, они стали фрилансерами.",
        "Почему в августе так много мух? - Потому что в июле все уезжают в отпуск.",
        "Почему моряки всегда улыбаются? - Потому что им приятно видеть берега.",
        "Как назвать двух музыкантов, упавших с крыши? - Соль-минор."
    ];

    getJoke() {
        switch (this.lang.toLowerCase()) {
            case 'en': {
                const randomIndex = Math.floor(Math.random() * this.repliesENG.length);
                return this.repliesENG[randomIndex];
            }
            case 'it': {
                const randomIndex = Math.floor(Math.random() * this.repliesIT.length);
                return this.repliesIT[randomIndex];
            }
            case 'ru': {
                const randomIndex = Math.floor(Math.random() * this.repliesRU.length);
                return this.repliesRU[randomIndex];
            }
            default: {
                return 'Invalid language code';
            }
        }
    }

    // greeting() {
    //     switch (this.lang.toLowerCase()) {
    //         case 'en':
    //             return `Hey ${this.name}, listen to my joke!`;
    //         case 'it':
    //             return `Ciao ${this.name}, ascolta la mia battuta`;
    //         case 'ru':
    //             return `Привет ${this.name}, cлушай рофл)))`;
    //         default:
    //             return `${this.name}! 你忘了指定语言...`;
    //     }
    // }
    //
    // joke() {
    //     return this.greeting() + ' ' + this.getJoke();
    // }
}