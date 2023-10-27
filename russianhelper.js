
const vocabRus = ["и", 	"в",	"не", 	"он",	"на", 	"я",	"что", 	"тот",	"быть", 	"с",	"а", 	"весь",	"это", 	"как",	"она", 	"по",	"но", 	"они",	"к", 	"у",	"ты", 	"из",	"мы", 	"за",	"вы", 	"так",	"же", 	"от",	"сказать", 	"этот",	"который", 	"мочь",	"человек", 	"о",	"один", 	"ещё",	"бы", 	"такой",	"только", 	"себя",	"своё", 	"какой",	"когда", 	"уже",	"для", 	"вот",	"кто", 	"да",	"говорить", 	"год",	"знать", 	"мой",	"до", 	"или",	"если", 	"время",	"рука", 	"нет",	"самый", 	"ни",	"стать", 	"большой",	"даже", 	"другой",	"наш", 	"свой",	"ну", 	"под",	"где", 	"дело",	"есть", 	"сам",	"раз", 	"чтобы",	"два", 	"там",	"чем", 	"глаз",	"жизнь", 	"первый",	"день", 	"тут",	"во", 	"ничто",	"потом", 	"очень",	"со", 	"хотеть",	"ли", 	"при",	"голова", 	"надо",	"без", 	"видеть",	"идти", 	"теперь",	"тоже", 	"стоять",	"друг", 	"дом",	"сейчас", 	"можно",	"после", 	"слово",	"здесь", 	"думать",	"место", 	"спросить",	"через", 	"лицо",	"что", 	"тогда",	"ведь", 	"хороший",	"каждый", 	"новый",	"жить", 	"должный",	"смотреть", 	"почему",	"потому", 	"сторона",	"просто", 	"нога",	"сидеть", 	"понять",	"иметь", 	"конечный",	"делать", 	"вдруг",	"над", 	"взять",	"никто", 	"сделать",	"дверь", 	"перед",	"нужный", 	"понимать",	"казаться", 	"работа",	"три", 	"ваш",	"уж", 	"земля",	"конец", 	"несколько",	"час", 	"голос",	"город", 	"последний",	"пока", 	"хорошо",	"давать", 	"вода",	"более", 	"хотя",	"всегда", 	"второй",	"куда", 	"пойти",	"стол", 	"ребёнок",	"увидеть", 	"сила",	"отец", 	"женщина",	"машина", 	"случай",	"ночь", 	"сразу",	"мир", 	"совсем",	"остаться", 	"об",	"вид", 	"выйти",	"дать", 	"работать",	"любить", 	"старый",	"почти", 	"ряд",	"оказаться", 	"начало",	"твой", 	"вопрос",	"много", 	"война",	"снова", 	"ответить",	"между", 	"подумать",	"опять", 	"белый",	"деньги", 	"значить",	"про", 	"лишь",	"минута", 	"жена",	"посмотреть", 	"правда",	"главный", 	"страна",	"свет", 	"ждать",	"мать", 	"будто",	"никогда", 	"товарищ",	"дорога", 	"однако",	"лежать", 	"именно",	"окно", 	"никакой",	"найти", 	"писать",	"комната", 	"Москва",	"часть", 	"вообще",	"книга", 	"маленький",	"улица", 	"решить",	"далекий", 	"душа",	"чуть", 	"вернуться",	"утро", 	"некоторый",	"считать", 	"сколько",	"помнить", 	"вечер",	"пол", 	"таки",	"получить", 	"народ",	"плечо", 	"хоть",	"сегодня", 	"бог",	"вместе", 	"взгляд",	"ходить", 	"зачем",	"советский", 	"русский",	"бывать", 	"полный",	"прийти", 	"палец",	"Россия", 	"любой",	"история", 	"наконец",	"мысль", 	"узнать",	"назад", 	"общий",	"заметить", 	"словно",	"прошлый", 	"уйти",	"известный", 	"давно",	"слышать", 	"слушать",	"бояться", 	"сын",	"нельзя", 	"прямо",	"долго", 	"быстро",	"лес", 	"похожий",	"пора", 	"пять",	"глядеть", 	"оно",	"сесть", 	"имя",	"ж", 	"разговор",	"тело", 	"молодой",	"стена", 	"красный",	"читать", 	"право",	"старик", 	"ранний",	"хотеться", 	"мама",	"оставаться", 	"высокий",	"путь", 	"поэтому",	"совершенно", 	"кроме",	"тысяча", 	"месяц",	"брать", 	"написать",	"целый", 	"огромный",	"начинать", 	"спина",	"настоящий", 	"пусть",	"язык", 	"точно",	"среди", 	"чувствовать",	"сердце", 	"вести",	"иногда", 	"мальчик",	"успеть", 	"небо",	"живой", 	"смерть",	"продолжать", 	"девушка",	"образ", 	"ко",	"забыть", 	"вокруг",	"письмо", 	"власть",	"чёрный", 	"пройти",	"появиться", 	"воздух",	"разный", 	"выходить",	"просить", 	"брат",	"собственный", 	"отношение",	"затем", 	"пытаться",	"показать", 	"вспомнить",	"система", 	"четыре",	"квартира", 	"держать",	"также", 	"любовь",	"солдат", 	"откуда",	"чтоб", 	"называть",	"третий", 	"хозяин",	"вроде", 	"уходить",	"подойти", 	"поднять",	"особенно", 	"спрашивать",	"начальник", 	"оба",	"бросить", 	"школа",	"парень", 	"кровь",	"двадцать", 	"солнце",	"неделя", 	"послать",	"находиться", 	"ребята",	"поставить", 	"встать",	"например", 	"шаг",	"мужчина", 	"равно",	"нос", 	"мало",	"внимание", 	"капитан",	"ухо", 	"туда",	"сюда", 	"играть",	"следовать", 	"рассказать",	"великий", 	"действительно",	"слишком", 	"тяжёлый",	"спать", 	"оставить",	"войти", 	"длинный",	"чувство", 	"молчать",	"рассказывать", 	"отвечать",	"становиться", 	"остановиться",	"берег", 	"семья",	"искать", 	"генерал",	"момент", 	"десять",	"начать", 	"следующий",	"личный", 	"труд",	"верить", 	"группа",	"немного", 	"впрочем",	"видно", 	"являться",	"муж", 	"разве",	"движение", 	"порядок",	"ответ", 	"тихо",	"знакомый", 	"газета",	"помощь", 	"сильный",	"скорый", 	"собака",	"дерево", 	"снег",	"сон", 	"смысл",	"смочь", 	"против",	"бежать", 	"двор",	"форма", 	"простой",	"приехать", 	"иной",	"кричать", 	"возможность",	"общество", 	"зеленый",	"грудь", 	"угол",	"открыть", 	"происходить",	"ладно", 	"черный",	"век", 	"карман",	"ехать", 	"немец",	"наверное", 	"губа",	"дядя", 	"приходить",	"часто", 	"домой",	"огонь", 	"писатель",	"армия", 	"состояние",	"зуб", 	"очередь",	"кой", 	"подняться",	"камень", 	"гость",	"показаться", 	"ветер",	"собираться", 	"попасть",	"принять", 	"сначала",	"либо", 	"поехать",	"услышать", 	"уметь",	"случиться", 	"странный",	"единственный", 	"рота",	"закон", 	"короткий",	"море", 	"добрый",	"темный", 	"гора",	"врач", 	"край",	"стараться", 	"лучший",	"река", 	"военный",	"мера", 	"страшный",	"вполне", 	"звать",	"произойти", 	"вперед",	"медленно", 	"возле",	"никак", 	"заниматься",	"действие", 	"довольно",	"вещь", 	"необходимый",	"ход", 	"боль",	"судьба", 	"причина",	"положить", 	"едва",	"черта", 	"девочка",	"лёгкий", 	"волос",	"купить", 	"номер",	"основной", 	"широкий",	"умереть", 	"далеко",	"плохо", 	"глава",	"красивый", 	"серый",	"пить", 	"командир",	"обычно", 	"партия",	"проблема", 	"страх",	"проходить", 	"ясно",	"снять", 	"бумага",	"герой", 	"пара",	"государство", 	"деревня",	"речь", 	"начаться",	"средство", 	"положение",	"связь", 	"скоро",	"небольшой", 	"представлять",	"завтра", 	"объяснить",	"пустой", 	"произнести",	"человеческий", 	"нравиться",	"однажды", 	"мимо",	"иначе", 	"существовать",	"класс", 	"удаться",	"толстый", 	"цель",	"сквозь", 	"прийтись",	"чистый", 	"знать",	"прежний", 	"профессор",	"господин", 	"счастье",	"худой", 	"дух",	"план", 	"чужой",	"зал", 	"представить",	"особый", 	"директор",	"бывший", 	"память",	"близкий", 	"сей",	"результат", 	"больной",	"данный", 	"кстати",	"назвать", 	"след",	"улыбаться", 	"бутылка",	"трудно", 	"условие",	"прежде", 	"ум",	"улыбнуться", 	"процесс",	"картина", 	"вместо",	"старший", 	"легко",	"центр", 	"подобный",	"возможно", 	"около",	"смеяться", 	"сто",	"будущее", 	"хватать",	"число", 	"всякое",	"рубль", 	"почувствовать",	"принести", 	"вера",	"вовсе", 	"удар",	"телефон", 	"колено",	"согласиться", 	"мало",	"коридор", 	"мужик",	"правый", 	"автор",	"холодный", 	"хватить",	"многие", 	"встреча",	"кабинет", 	"документ",	"самолет", 	"вниз",	"принимать", 	"игра",	"рассказ", 	"хлеб",	"развитие", 	"убить",	"родной", 	"открытый",	"менее", 	"предложить",	"желтый", 	"приходиться",	"выпить", 	"крикнуть",	"трубка", 	"враг",	"показывать", 	"двое",	"доктор", 	"ладонь",	"вызвать", 	"спокойно",	"попросить", 	"наука",	"лейтенант", 	"служба",	"оказываться", 	"привести",	"сорок", 	"счет",	"возвращаться", 	"золотой",	"местный", 	"кухня",	"крупный", 	"решение",	"молодая", 	"тридцать",	"роман", 	"требовать",	"компания", 	"частый",	"российский", 	"рабочий",	"потерять", 	"течение",	"синий", 	"столько",	"теплый", 	"метр",	"достать", 	"железный",	"институт", 	"сообщить",	"интерес", 	"обычный",	"появляться", 	"упасть",	"остальной", 	"половина",	"московский", 	"шесть",	"получиться", 	"качество",	"бой", 	"шея",	"вон", 	"идея",	"видимо", 	"достаточно",	"провести", 	"важный",	"трава", 	"дед",	"сознание", 	"родитель",	"простить", 	"бить",	"чай", 	"поздний",	"кивнуть", 	"род",	"исчезнуть", 	"тонкий",	"немецкий", 	"звук",	"отдать", 	"магазин",	"президент", 	"поэт",	"спасибо", 	"болезнь",	"событие", 	"помочь",	"кожа", 	"лист",	"слать", 	"вспоминать",	"прекрасный", 	"слеза",	"надежда", 	"молча",	"сильно", 	"верный",	"литература", 	"оружие",	"готовый", 	"запах",	"неожиданно", 	"вчера",	"вздохнуть", 	"роль",	"рост", 	"природа",	"политический", 	"точка",	"звезда", 	"петь",	"садиться", 	"фамилия",	"характер", 	"пожалуйста",	"выше", 	"офицер",	"толпа", 	"перестать",	"придтись", 	"уровень",	"неизвестный", 	"кресло",	"баба", 	"секунда",	"пожаловать", 	"банк",	"опыт", 	"тихий",	"поскольку", 	"сапог",	"правило", 	"стекло",	"получать", 	"внутренний",	"дочь", 	"называться",	"надеяться", 	"член",	"протянуть", 	"государственный",	"десяток", 	"глубокий",	"цветок", 	"ах",	"желание", 	"дождь",	"впереди", 	"подходить",	"много", 	"лоб",	"улыбка", 	"борьба",	"ворот", 	"ящик",	"этаж", 	"служить",	"вновь", 	"голубой",	"нечего", 	"революция",	"впервые", 	"сосед",	"сестра", 	"долгий",	"чей", 	"поверить",	"ситуация", 	"взглянуть",	"слабый", 	"количество",	"вызывать (See #663)", 	"уверенный",	"выход", 	"совет",	"дурак", 	"любимый",	"союз", 	"лето",	"ожидать", 	"пришлый",	"висеть", 	"граница",	"цвет", 	"серьезный",	"создать", 	"интересно",	"свобода", 	"зато",	"стул", 	"уехать",	"поезд", 	"музыка",	"быстрый", 	"тень",	"лошадь", 	"поле",	"выглядеть", 	"учиться",	"левый", 	"разговаривать",	"детский", 	"тип",	"суд", 	"связанный",	"горячий", 	"площадь",	"помогать", 	"счастливый",	"повернуться", 	"позволить",	"встретить", 	"радость",	"острый", 	"возраст",	"орган", 	"карта",	"входить", 	"обнаружить",	"король", 	"слава",	"полковник", 	"мелкий",	"бок", 	"цена",	"информация", 	"мозг",	"удовольствие", 	"воля",	"область", 	"крыша",	"нести", 	"обратно",	"современный", 	"дама",	"семь", 	"веселый",	"прислать", 	"сад",	"правительство", 	"милый",	"относиться", 	"возникать",	"мол", 	"повторить",	"название", 	"средний",	"пример", 	"невозможно",	"зеркало", 	"погибнуть",	"американский", 	"дым",	"гореть", 	"плакать",	"весьма", 	"факт",	"двигаться", 	"рыба",	"добавить", 	"удивиться",	"бабушка", 	"вино",	"ибо", 	"учитель",	"действовать", 	"осторожно",	"круг", 	"папа",	"правильно", 	"недавно",	"держаться", 	"причем",	"лететь", 	"носить",	"повод", 	"лагерь",	"птица", 	"корабль",	"мнение", 	"ночной",	"здоровый", 	"зима",	"сухой", 	"километр",	"кровать", 	"привыкнуть",	"прочее", 	"свободный",	"лестница", 	"неужели",	"обязательно", 	"вверх",	"детство", 	"остров",	"статья", 	"позвонить",	"столь", 	"мешать",	"водка", 	"темнота",	"возникнуть", 	"способный",	"станция", 	"желать",	"попробовать", 	"получаться",	"гражданин", 	"странно",	"вскоре", 	"интересный",	"команда", 	"заболевание",	"живот", 	"ставить",	"ради", 	"тишина",	"понятно", 	"фронт",	"щека", 	"страшно",	"район", 	"наверно",	"проводить", 	"выражение",	"слегка", 	"мешок",	"обещать", 	"дорогой",	"судить", 	"большинство",	"собраться", 	"управление",	"колоть", 	"мокрый",	"приказ", 	"прямой",	"закричать", 	"кончиться",	"куст", 	"стрелять",	"художник", 	"знак",	"завод", 	"кулак",	"использовать", 	"стакан",	"пахнуть", 	"отсюда",	"рот", 	"пора",];
// let vocabRus = ['актёр', 	'банан', 	'вино', 	'вода', 	'гитАра', 	'да', 	'До встрЕчи', 	'журнАл', 	'и', 	'или', 	'инъЕкция', 	'Как делА?', 	'Как тебЯ зовУт?', 	'кАрта', 	'кот', 	'кОфе', 	'Кто Это?', 	'ликёр', 	'лимОн', 	'мАма', 	'менЯ зовУт...', 	'метрО', 	'МосквА', 	'нет', 	'нормАльно', 	'нОта', 	'Нью-ЙОрк', 	'отлИчно', 	'Очень', 	'Очень приЯтно', 	'ПарИж', 	'пИво', 	'плОхо', 	'пожАлуйцта', 	'покА', 	'привЕт', 	'рАдио', 	'ракЕта', 	'ресторАн', 	'рОза', 	'сок', 	'спасИбо', 	'стадиОн', 	'суп', 	'тОже', 	'томАт', 	'торт', 	'тюльпАн', 	'фильм', 	'жорошО', 	'цирк', 	'чай', 	'чек', 	'Что Это?', 	'шампАнское', 	'шеф', 	'Это', 	'экзАмен', 	'Яхта', 	'Я', 	'ты', 	'он', 	'онА', 	'онО', 	'мы', 	'вы', 	'Вы', 	'онИ', 	'всё', 	'говорИть', 	'До свидАния', 	'ДОброе Утро!', 	'ДОбрый день!', 'ЗдрАвствуйте', 'Как Вас зовУт?', 	'немнОго', 	'октУда ты/Вы?', 	'чуть-чУть', 	'аэропОрт', 	'АмЕрика', ];
//let vocabRusAnswer = ['actor', 	'banana', 	'wine', 	'water', 	'guitar', 	'yes', 	'See you!', 	'newspaper', 	'and', 	'or', 	'injection', 	'How are you?', 	'Whats your name?', 	'Card or Map', 	'cat', 	'coffee', 	'Who is this?', 	'liquor', 	'lemon', 	'mom', 	'My name is...', 	'metro', 	'Moscow', 	'no', 	'normal', 	'note', 	'New York', 	'Great', 	'Very', 	'Very nice to meet you', 	'Paris', 	'beer', 	'bad', 	'please', 	'bye', 	'hi', 	'radio', 	'rocket', 	'restaurant', 	'rose', 	'juice', 	'thank you', 	'stadium', 	'soup', 	'also', 	'tomato', 	'cake', 	'tulip', 	'film', 	'good', 	'circus', 	'tea', 	'check', 	'What is this?', 	'champagne', 	'chef', 	'this', 	'exam', 	'yacht', 	'I', 	'you', 	'he', 	'she', 	'it', 	'we', 	'yall', 	'You', 	'they', 	'everything', 	'to speak', 	'goodbyre', 	'good morning', 	'good day', 	'Hello', 	'What is your name', 	'Not much', 	'Where are you from?', 	'a bit', 	'Airport', 	'America', ];
const vocabRusAnswer = ["and, though", 	"in, at", 	"not", 	"he", 	"on, it, at, to", 	"I", 	"what, that, why", 	"that", 	"to be", 	"with, and, from, of", 	"while, and, but", 	"all, everything", 	"that, this, it", 	"how, what, as, like", 	"she", 	"on, along, by", 	"but", 	"they", 	"to, for, by", 	"by, with, of", 	"you, thou", 	"from, of, in", 	"we", 	"behind, over, at, after", 	"you", 	"so, thus, then", 	"and, as for, but, same", 	"from, of, for", 	"to say, to speak", 	"this", 	"which, who, that", 	"be able", 	"man, person", 	"of, about, against", 	"one, some, alone", 	"still, yet", 	"would", 	"such, so, some", 	"only, merely, but", 	"myself, himself, herself", 	"one\'s own, my, our", 	"what, which, how", 	"when, while, as", 	"already, by now", 	"for, to", 	"here, there, this is, that\'s", 	"who, that, some", 	"yes, but", 	"to say, to tell, to speak", 	"year", 	"to know, be aware", 	"my, mine", 	"to, up to, about, before", 	"or", 	"if", 	"time, season", 	"hand, arm", 	"no, not, but", 	"most, the very, the same", 	"not a, not, neither… nor", 	"to become, begin, come", 	"big, large, important", 	"even", 	"other, another, different", 	"our, ours", 	"my, our, your", 	"now, right, well, come on", 	"under, for, towards, to", 	"where", 	"business, affair, matter", 	"to eat, to be", 	"myself, yourself", 	"time, once, since", 	"that, in order that", 	"two", 	"there, then", 	"than; instead of", 	"eye; sight", 	"life", 	"first, front, former", 	"day", 	"here, now, then", 	"in, at; super, exactly", 	"nothing", 	"afterwards, then", 	"very", 	"with", 	"to want, like", 	"whether, if", 	"attached to, in the presence of, by, about; masterrussian, dot com", 	"head, mind, brains", 	"over, above, ought to", 	"without", 	"to see", 	"to go, come", 	"now, nowadays", 	"also, as well, too", 	"to stand, be, stand up", 	"friend", 	"house, home", 	"now, presently, soon", 	"one can", 	"after, afterwards", 	"word", 	"here", 	"to think; believe", 	"place; seat", 	"to ask", 	"through, across", 	"face; person", 	"what, which, that", 	"then", 	"you see, you know", 	"good, nice (see #152)", 	"each, every", 	"new; modern", 	"to live", 	"due, proper", 	"to look, watch", 	"why", 	"that\'s why", 	"side, party", 	"simply", 	"foot, leg", 	"to sit", 	"to understand; realize", 	"to have, own", 	"final, last", 	"to do, make", 	"suddenly", 	"above, over", 	"to take", 	"nobody", 	"to do, make, finish", 	"door", 	"before, in front of", 	"necessary", 	"to understand", 	"to seem, appear; masterrussian, dot com", 	"work, job", 	"three", 	"yours", 	"really, already", 	"earth, land, soil", 	"end, distance", 	"several, some", 	"hour, time", 	"voice", 	"town, city", 	"last, the latest, new", 	"for the present", 	"well (see #114)", 	"to give; let, allow", 	"water", 	"more", 	"although", 	"always", 	"second", 	"where, what for, much", 	"to go", 	"table, desk; board", 	"child, kid, infant", 	"to see", 	"strength, force", 	"father (see #918)", 	"woman", 	"car, machine, engine", 	"case, occasion, incident", 	"night", 	"at once, right away, just", 	"world, peace", 	"quite, entirely, totally", 	"to remain, stay (see #297)", 	"about, of (see #34)", 	"appearance, look, view", 	"to go out, come out, appear", 	"to give; masterrussian, dot com", 	"to work", 	"to love", 	"old", 	"almost", 	"row, line", 	"find oneself, turn out", 	"beginning, origin, source", 	"your, yours (informal)", 	"question, matter, problem", 	"many, much (see #799)", 	"war", 	"again", 	"to answer, reply (see #404)", 	"between, among", 	"to think", 	"again", 	"white", 	"money", 	"to mean,  signify", 	"about, for", 	"only, as soon as", 	"minute, moment", 	"wife", 	"to take a look, watch, inspect", 	"truth", 	"main, chief", 	"country", 	"light;world", 	"to wait", 	"mother", 	"as if, as though", 	"never", 	"comrade, friend", 	"road, way, journey", 	"however, though", 	"to lie, be situated", 	"namely, just", 	"window, windowsill", 	"no, none", 	"to find, discover, consider", 	"to write", 	"a room", 	"Moscow", 	"part, share, department", 	"in general, altogether, on the whole", 	"a book", 	"small, little", 	"street; masterrussian, dot com", 	"to decide, solve", 	"distant, remote", 	"soul, spirit", 	"hardly, slightly", 	"to return", 	"morning", 	"some", 	"to count, consider", 	"how much, how many", 	"to remember", 	"evening", 	"floor; sex", 	"after all", 	"to receive, get, obtain", 	"people, nation", 	"shoulder, upper arm", 	"even, if you want, though", 	"today", 	"god", 	"together", 	"look, glance; view", 	"to go, walk", 	"what for, why", 	"Soviet", 	"Russian", 	"be, visit, happen", 	"full, complete", 	"to come, arrive (see #464)", 	"finger, toe", 	"Russia", 	"any, every", 	"history, story, event", 	"at last, finally", 	"thought, idea", 	"to know, learn, recognize", 	"back, backwards", 	"general, common", 	"to notice, observe", 	"as if, like", 	"past", 	"to leave, go away", 	"well-known, famous", 	"long ago", 	"to hear", 	"to listen, hear", 	"to be afraid, fear", 	"son", 	"it is impossible, can\'t", 	"straight, frankly", 	"for a long time", 	"fast, quickly", 	"forest", 	"similar, alike", 	"time; pore (see #1000)", 	"five", 	"to look,  gaze", 	"it", 	"to sit", 	"name", 	"and, as for, but (see #27)", 	"talk, conversation", 	"body", 	"young (see #679); bridegroom (as a noun)", 	"wall", 	"red", 	"to read", 	"right", 	"old man", 	"early", 	"want, like", 	"mummy, mum", 	"to remain, stay (see #173)", 	"tall, high", 	"way, track, path", 	"therefore", 	"absolutely, quite", 	"except, besides", 	"a thousand", 	"month", 	"to take; hire", 	"to write", 	"intact, whole, entire", 	"huge, enormous", 	"to begin (see #413)", 	"back", 	"present;real, true", 	"let\'s, though", 	"tongue, language", 	"exactly", 	"among", 	"to feel", 	"heart", 	"to lead", 	"sometimes", 	"boy", 	"to be in time, be successful", 	"sky", 	"living, live, lively", 	"death", 	"to continue", 	"girl, miss (see #524)", 	"shape, form, image", 	"to, towards, by (see #19)", 	"to forget", 	"around", 	"letter", 	"power", 	"black (see #456)", 	"to pass, go by, be over (see #543)", 	"to appear, show up (see #699)", 	"air", 	"different", 	"to go out; nurse (see #176)", 	"to ask", 	"brother", 	"one\'s own", 	"relationship, attitude", 	"then, after that", 	"to try", 	"to show, display", 	"to remember, recall", 	"system", 	"four", 	"flat, apartment", 	"to hold, keep", 	"also, as well, too", 	"love", 	"soldier", 	"where… from", 	"that, in order that, (See #74)", 	"to call, name, (See #597)", 	"third", 	"master, boss, host", 	"like, not unlike", 	"to leave, go away", 	"to approach, come up(See #798)", 	"to lift, raise", 	"especially, particularly", 	"to ask, inquire", 	"chief, head, superior", 	"both", 	"to throw", 	"school", 	"boy, fellow, guy", 	"blood", 	"twenty", 	"sun", 	"week", 	"to send, dispatch", 	"to be found, turn up", 	"guys, children", 	"to put, place, set", 	"to get up, rise, stand up", 	"for example, for instance", 	"step", 	"man, male", 	"alike, in like manner", 	"nose", 	"little, few, (See #630)", 	"attention", 	"captain, master", 	"ear", 	"there", 	"here", 	"to play", 	"to follow, come next", 	"to tell, narrate(See #403)", 	"great", 	"indeed, really", 	"too, too much", 	"heavy", 	"to sleep", 	"to leave, abandon", 	"to enter, come in", 	"long", 	"feeling", 	"to keep silence", 	"to tell, narrate, (See #392)", 	"to answer, reply, (See #190)", 	"to stand; to become", 	"to stop", 	"bank, shore,  coast", 	"family", 	"to search", 	"general", 	"moment, instant", 	"ten", 	"to begin(See #309)", 	"next, following", 	"personal", 	"labour, work", 	"to believe; masterrussian, dot com", 	"group", 	"a little", 	"however, though", 	"evidently, obviously", 	"to appear", 	"husband", 	"really?, perhaps", 	"movement", 	"order", 	"answer, reply", 	"quietly, softly, slowly", 	"familiar, acquainted", 	"newspaper", 	"help", 	"strong, powerful", 	"quick, fast", 	"dog", 	"tree", 	"snow", 	"dream", 	"sense, meaning, purpose", 	"to be able", 	"against, opposite, contrary to", 	"to run, hurry", 	"yard, court", 	"form, shape, uniform", 	"simple, easy, plain", 	"to arrive, come", 	"different, other", 	"to cry, shout(See #656)", 	"possibility, opportunity, chance", 	"society", 	"green", 	"breast, chest", 	"corner, angle", 	"to open", 	"to happen, occur, take place", 	"in harmony, well, all right", 	"black", 	"century, age", 	"pocket", 	"to go, ride, drive, travel", 	"German", 	"probably, most likely(See #972)", 	"lip", 	"uncle", 	"to come, arrive(See #253)", 	"often", 	"home (as in came home)", 	"fire", 	"writer", 	"army", 	"state, condition; fortune", 	"tooth", 	"line, queue, turn", 	"which (old-fashioned, literary); mostly found in set expressions: ни в ко́ем слу́чае, ни ко́им о́бразом, в кои ве́ки, на кой чёрт?", 	"to rise, climb", 	"stone", 	"guest", 	"to appear, come in sight", 	"wind", 	"to gather together, assemble; intend(See #981)", 	"to hit; to find oneself", 	"to take, admit, accept(See #643)", 	"at first, from the beginning", 	"or", 	"to depart, set off", 	"to hear", 	"to be able, know, can", 	"to happen", 	"strange", 	"only, sole", 	"company (military)", 	"law, act, statue", 	"short", 	"sea", 	"kind", 	"dark", 	"mountain, hill", 	"physician, doctor", 	"border, edge; land, country", 	"to try, endeavour", 	"better, best", 	"river", 	"military", 	"measure, step", 	"terrible, frightful", 	"quite, fully", 	"to call", 	"to happen, occur, take place", 	"forward", 	"slowly", 	"by, near, close by", 	"in now way, by no means", 	"to be occupied, engage", 	"action, effect", 	"enough; rather", 	"thing", 	"necessary", 	"move", 	"pain", 	"fate, fortune, destiny", 	"cause, reason, motive", 	"to lay down, put down, place", 	"hardly, just, barely", 	"line, boundary; trait", 	"girl, little girl(See #326)", 	"light, easy", 	"hair", 	"to buy, purchase", 	"number, size, room, issue", 	"main", 	"wide", 	"to die", 	"far, far off", 	"badly", 	"head, chief", 	"beautiful; masterrussian, dot com", 	"grey; dull", 	"to drink", 	"commander, commanding officer", 	"usually", 	"party", 	"problem, issue", 	"fear", 	"to pass, go;study(See #334)", 	"clear, clearly", 	"to take away, take off;photograph", 	"paper", 	"hero", 	"pair, couple", 	"State", 	"village, country", 	"speech", 	"to begin", 	"means, remedy", 	"position, posture, condition, state", 	"tie, bond; connection, relation", 	"quickly, fast, soon", 	"small, not great", 	"to present, introduce, imagine(See #586)", 	"tomorrow", 	"to explain", 	"empty, hollow; idle", 	"to pronounce, say, utter", 	"human", 	"to please, like", 	"once, one day", 	"past, by", 	"otherwise, differentlyl", 	"to exist, to be", 	"class", 	"turn out well, succeed, manage", 	"thick, heavy, fat", 	"goal, object, target", 	"through", 	"to fit, fall; have to", 	"clean, pure", 	"to know(See #51)", 	"former", 	"professor", 	"gentleman, Mr.", 	"happiness, luck", 	"thin, skinny; masterrussian.com", 	"spirit", 	"plan", 	"somebody else\'s;strange, foreign", 	"hall", 	"to presetn, produce, introduce(See #558)", 	"special", 	"director, manager", 	"former, ex-", 	"memory", 	"near, similar; intimate", 	"this", 	"result, outcome", 	"sick", 	"given, present", 	"to the point, at the same time", 	"to call, name(See #356)", 	"track, footprint", 	"to smile(See #605)", 	"bottle", 	"with difficulty", 	"condition, term", 	"before", 	"mind, brains, intellect", 	"to smile(See #599)", 	"process", 	"picture, painting", 	"instead", 	"elder, senior", 	"easily, lightly", 	"center", 	"similar, like", 	"as… as possible", 	"by, near", 	"to laugh", 	"hundred", 	"future", 	"to snatch, seize; be sufficient(See #636)", 	"number", 	"any, every", 	"ruble", 	"to feel", 	"to bring; masterrussian", 	"faith, belief", 	"quiet; not … at all", 	"blow, stroke", 	"telephone", 	"knee", 	"to agree, consent", 	"little, few, not enough(See #384)", 	"corridor, passage", 	"muzhik, man", 	"right", 	"author", 	"cold, cool", 	"to snatch, seize, suffice(See #618)", 	"many", 	"meeting, reception", 	"study, room, office suite", 	"document", 	"aircraft, aeroplane", 	"down, downwards", 	"to take, admit, accept (See #481)", 	"game, play", 	"story", 	"bread", 	"development", 	"to kill", 	"own, native, dear", 	"open", 	"less", 	"to offer, propose, suggest", 	"yellow", 	"to fit, fall; have to", 	"to drink", 	"to cry, shout(See #447)", 	"tube, roll, pipe", 	"enemy", 	"to show, display", 	"two", 	"doctor", 	"palm", 	"to call, send(See #821)", 	"quietly", 	"to ask", 	"science", 	"lieutenant", 	"service, work", 	"to turn out, find oneself(See #183)", 	"to bring", 	"forty", 	"bill, account", 	"to return", 	"golden", 	"local", 	"kitchen", 	"large, big, prominent", 	"decision, conclusion", 	"bride (See #288); young (as an adjective)", 	"thirty", 	"novel, romance", 	"to demand", 	"company", 	"frequent", 	"Russian", 	"working", 	"to lose", 	"current", 	"dark blue", 	"so much, so many", 	"warm", 	"meter, metre", 	"to reach; get, obtain", 	"ferreous, iron", 	"institute", 	"to report, let know", 	"interes", 	"usual, ordinary", 	"to appear, show up(See #335)", 	"to fall", 	"remaining, the rest of", 	"half", 	"Moscow", 	"six", 	"to come, arrive, turn out", 	"quality", 	"battle, fight, combat", 	"neck", 	"out", 	"idea", 	"apparently, seemingly", 	"enough, sufficiently", 	"to accompany, set off; conduct; spend (See #973)", 	"important", 	"grass", 	"grandfather, old man", 	"consciousness", 	"parent; masterrussian, dot, com", 	"to forgive", 	"to beat, hit", 	"tea", 	"late", 	"to nod", 	"family, clan, generation", 	"to disappear", 	"thin", 	"German", 	"sound", 	"to return, give back", 	"shop, store", 	"president; director", 	"poet", 	"gratitude, thanks", 	"illness, sickness, disease", 	"event", 	"to help (See #857)", 	"skin", 	"leaf, sheet", 	"to send", 	"to remember, recall", 	"beautiful, fine", 	"tear", 	"hope", 	"silently, without a word", 	"strongly", 	"correct; faithful; reliable", 	"literature", 	"weapon", 	"ready", 	"smell, odour, scent", 	"unexpectedly, suddenly", 	"yesterday", 	"to take breath, to sigh", 	"role", 	"growth, increase; height", 	"nature", 	"political", 	"dot, point", 	"star", 	"to sing", 	"to sit down", 	"surname", 	"character, disposition, temper", 	"please", 	"higher", 	"officer", 	"crowd", 	"to stop, cease", 	"to fit, fall; have to", 	"level", 	"unknown", 	"armchair", 	"woman, wife, old woman, (See #911)", 	"a second", 	"to grant, bestow", 	"bank", 	"experience", 	"quiet, low, scelent", 	"so far as, since", 	"(high) boot", 	"rule", 	"glass", 	"to receive, get (See #239)", 	"inside, internal", 	"daughter", 	"to call oneself", 	"to hope", 	"member, limb", 	"to stretch, extend", 	"State", 	"ten, dozens", 	"deep", 	"flower", 	"ah!, oh!", 	"wish", 	"rain", 	"before, in front of", 	"to come up, approach;to fit(See #361)", 	"many, much, a lot of(See #187)", 	"forehead", 	"smile", 	"fight, struggle", 	"collar", 	"box, case", 	"floor, storey", 	"to serve", 	"again, once more", 	"blue, sky-blue", 	"there is nothing, there is no need", 	"revolution", 	"for the first time", 	"neighbour", 	"sister", 	"long", 	"whose", 	"to believe", 	"situation", 	"to look, give a glance", 	"weak", 	"quantity", 	"to call, send", 	"confident, sure", 	"exit", 	"advice; masterrussian, dot com", 	"fool, idiot", 	"dear, loved", 	"union, alliance; conjunction", 	"summer", 	"to expect", 	"alien, strange", 	"to hang", 	"border", 	"colour, color", 	"serious", 	"to create, establish", 	"interestingly", 	"freedom", 	"but, but then", 	"chair", 	"to leave, depart", 	"train", 	"music", 	"quick, fast", 	"shadow", 	"horse", 	"field", 	"to look", 	"to study, learn", 	"left", 	"to talk, speak", 	"child\'s, childrens", 	"type, model", 	"court, law-court", 	"related, connected, tied-up", 	"hot", 	"square, area", 	"to help, assist(See #736)", 	"happy", 	"to turn", 	"to allow, permit", 	"to meet", 	"gladness, joy", 	"sharp; spicy", 	"age", 	"organ, body", 	"map", 	"to enter, come in", 	"to discover, find out", 	"king", 	"glory, fame", 	"colonel", 	"shallow, small", 	"side, flank", 	"price", 	"information", 	"brain", 	"pleasure", 	"will", 	"oblast, province; field", 	"roof", 	"to carry", 	"back, backwards", 	"contemporary, modern, up-to-date", 	"lady, partner, queen", 	"seven", 	"cheerful, merry", 	"to send", 	"garden, yard", 	"government", 	"nice, sweet, dear", 	"to treat, regard, relate", 	"to arise, appear", 	"he says, they say, etc.", 	"to repeat", 	"name, title", 	"average, middle", 	"example", 	"impossible", 	"mirror", 	"to perish, be killed", 	"American", 	"smoke", 	"to burn", 	"to cry", 	"very, highly, greatly", 	"fact", 	"to move", 	"fish", 	"to add", 	"to wonder, be surprised", 	"grandmother", 	"wine", 	"for", 	"teacher, instructor", 	"to act", 	"carefully, cautiously", 	"circle; masterrussian, dot com", 	"dad, daddy", 	"correctly, properly", 	"recently, lately", 	"to hold on, behave", 	"moreover, and what\'s more", 	"to fly", 	"to wear", 	"occasion, reason; bridle", 	"camp", 	"bird", 	"ship", 	"opinion", 	"night", 	"healthy", 	"winter", 	"dry", 	"kilometre, kilometer", 	"bed", 	"to get used to, to grow accustomed to", 	"et cetera, other", 	"free", 	"staircase", 	"really, surely", 	"without fail, be sure", 	"up, upwards", 	"childhood", 	"island", 	"article", 	"to call, to telephone", 	"so", 	"to interfere, prevent; mix", 	"vodka", 	"darkness", 	"to arise, spring up", 	"capable (of)", 	"station", 	"to wish", 	"to try, test", 	"to come out", 	"citizen", 	"strangely", 	"soon, shortly", 	"interesting", 	"team; command", 	"disease, illness", 	"stomach, belly", 	"to put, place, set", 	"for the sake of", 	"silence, stillness", 	"clearly, plainly", 	"front", 	"cheek", 	"terribly, awfully", 	"area, region", 	"probably", 	"to lead, escort; accompany", 	"expression", 	"slightly", 	"bag, sack", 	"to promise", 	"on the way", 	"to judge, try", 	"majority", 	"to gather, collect", 	"operation, control", 	"to prick", 	"wet", 	"order", 	"straight", 	"to shout, cry out", 	"to end", 	"bush", 	"to shoot", 	"painter, artist", 	"sign", 	"factory", 	"fist", 	"to use, utilize, make use of", 	"glass", 	"to smell", 	"from here", 	"mouth", 	"it\'s time;at times, now and then"];

const rusNumbers = ["Ноль", 	"Один", 	"Два", 	"Три", 	"Четыре", 	"Пять", 	"Шесть", 	"Семь", 	"Восемь", 	"Девять", 	"Десять", 	"Одиннадцать", 	"Двенадцать", 	"Тринадцать", 	"Четырнадцать", 	"Пятнадцать", 	"Шестнадцать", 	"Семнадцать", 	"Восемнадцать", 	"Девятнадцать", 	"Двадцать", 	"Тридцать", 	"Сорок", 	"Пятьдесят", 	"Шестьдесят", 	"Семьдесят", 	"Восемьдесят", 	"Девяносто", 	"Сто", 	"Двести", 	"Триста", 	"Четыреста", 	"Пятьсот", 	"Шестьсот", 	"Семьсот", 	"Восемьсот", 	"Девятьсот", 	"Тысяча"];

const engNumbers = [0, 	1, 	2, 	3, 	4, 	5, 	6, 	7, 	8, 	9, 	10, 	11, 	12, 	13, 	14, 	15, 	16, 	17, 	18, 	19, 	20, 	30, 	40, 	50, 	60, 	70, 	80, 	90, 	100, 	200, 	300, 	400, 	500, 	600, 	700, 	800, 	900, 	1000];

let studyingVocab = true;

let rusWordSet = 0;
let rusAnsWordSet = 0;
let rusNumberCard = 0;
let engNumberCard = 0;

let accTableVisible = false;
let prepTableVisible = false;
let dativeTableVisible = false;
let instrumentalTableVisible = false;
let genitiveTableVisible = false;

// function cardNo() {
// // for randomized card:    rusWordSet = Math.round(Math.random() * 100);
//     rusWordSet = rusWordSet + 1;
// };

function rusCardClick() {
    if (studyingVocab == true) rusCardDraw();
    else learnNumbers();
};

function engCardClick() {
    if (studyingVocab == true) showEnglishCard();
    else showEnglishNumber();
};

function switchVocabandNumbers() {
    console.log('switch button clicked');

    if (studyingVocab == true) {
        studyingVocab = false;
        document.getElementById("currentDeck").innerHTML = "Current Deck: Numbers";
    }

    else {
        studyingVocab = true;
        document.getElementById("currentDeck").innerHTML = "Current Deck: Vocab";
    }
}

function rusCardDraw() {
    rusWordSet = rusWordSet + 1;
    console.log(vocabRus[rusWordSet]);
    document.getElementById("cardBoxFR").innerHTML = vocabRus[rusWordSet];
    rusAnsWordSet = rusWordSet;
    document.getElementById("cardBoxEN").innerHTML = '...';
};

function randomCard() {
    rusWordSet = randomNumberinRange(1, vocabRus.length);
    console.log(rusWordSet, vocabRus[rusWordSet]);
    document.getElementById("cardBoxFR").innerHTML = vocabRus[rusWordSet];
    rusAnsWordSet = rusWordSet;
    document.getElementById("cardBoxEN").innerHTML = "..."
};

function prevCard() {
    if (rusWordSet >= 1) {
        rusWordSet = rusWordSet - 1;
        console.log(vocabRus[rusWordSet]);
        document.getElementById("cardBoxFR").innerHTML = vocabRus[rusWordSet];
        rusAnsWordSet = rusWordSet;
        document.getElementById("cardBoxEN").innerHTML = '...';
    }

    else alert('You\'re already at the beginning of the deck!');
};

function showEnglishCard() {
    console.log(vocabRusAnswer[rusAnsWordSet]);
    document.getElementById("cardBoxEN").innerHTML = vocabRusAnswer[rusAnsWordSet];
};

function learnNumbers() {
    rusNumberCard = rusNumberCard + 1;
    console.log(rusNumbers[rusNumberCard]);
    document.getElementById("cardBoxFR").innerHTML = rusNumbers[rusNumberCard];
    engNumberCard = rusNumberCard;
    document.getElementById("cardBoxEN").innerHTML = '...';

    if (rusNumberCard > rusNumbers.length) rusNumberCard = 0;
};

function showEnglishNumber() {
    console.log(engNumbers[engNumberCard]);
    document.getElementById("cardBoxEN").innerHTML = engNumbers[engNumberCard];
}

function showAccTable() {
    if (accTableVisible == false) {
    hideTables();
    document.getElementById("accTable").style.display="block";
    document.getElementById("accTableButton").style.backgroundColor="#d0d0d8";
    accTableVisible = true;
}
else {
    hideTables();
}
};

function showPrepTable() {
    if (prepTableVisible == false) {
    hideTables();
    document.getElementById("prepTable").style.display="block";
    prepTableVisible = true;
    document.getElementById("prepTableButton").style.backgroundColor="#d0d0d8";
}
else {
    hideTables();
}
};

function showDativeTable() {
    if (dativeTableVisible == false) {
    hideTables();
    document.getElementById("dativeTable").style.display="block";
    dativeTableVisible = true;
    document.getElementById("dativeTableButton").style.backgroundColor="#d0d0d8";
}
else {
    hideTables();
}
};

function showInstrumentalTable() {
    if (instrumentalTableVisible == false) {
    hideTables();
    document.getElementById("instrumentalTable").style.display="block";
    instrumentalTableVisible = true;
    document.getElementById("instrumentalTableButton").style.backgroundColor="#d0d0d8";
}
else {
    hideTables();
}
};

function showGenitiveTable() {
    if (genitiveTableVisible == false) {
        hideTables();
        document.getElementById("genitiveTable").style.display="block";
        genitiveTableVisible = true;
        document.getElementById("genitiveTableButton").style.backgroundColor="#d0d0d8";
    }
    else {
        hideTables();
    }
}

//figure out if there is a better way to hide other tables than to have get.elementbyid."table".style.display changes

function hideTables() {
    document.getElementById("accTable").style.display="none";
    document.getElementById("prepTable").style.display="none";
    document.getElementById("dativeTable").style.display="none";
    document.getElementById("instrumentalTable").style.display="none";
    document.getElementById("genitiveTable").style.display="none";
    prepTableVisible = false
    accTableVisible = false;
    dativeTableVisible = false;
    instrumentalTableVisible = false;
    genitiveTableVisible = false;
    document.getElementById("prepTableButton").style.backgroundColor="";
    document.getElementById("dativeTableButton").style.backgroundColor="";
    document.getElementById("accTableButton").style.backgroundColor="";
    document.getElementById("instrumentalTableButton").style.backgroundColor="";
    document.getElementById("genitiveTableButton").style.backgroundColor="";
}

// Add/Change as of Oct 22:
// Vocab: split it into nouns, adjectives, verbs, adverbs based on word frequency in RU (look this up)
// WordOrder: initialize at 0+1, wordOrder++, add button to randomize and then continue from there

let rusForTranslation = "";

function searchWord() {
    let rusForTranslation = document.getElementById("wordLookupEntryBox").value;
    let wordFound = false;

    for (let key in vocabRus) {
        if (rusForTranslation.toLowerCase() == vocabRus[key].toLowerCase()) {alert(vocabRusAnswer[key])
        wordFound = true;
        break
        };
    };

    if (wordFound == false) alert('Word not found');
    //could also use !wordFound to be shorter.
    console.log(rusForTranslation);

};

function randomNumberinRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Oct 26 update:
// Remaining things to do:
// -update vocab decks to include top 1000, nouns, verbs, adjectives, adverbs
// -center the word search item beneath the buttons changing the cards 
// -add verb conjugation charts for reflexive and regular verbs