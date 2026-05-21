export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = ['uk', 'ru', 'en'];
export const ROLE_KEYS = ['farmer', 'contractor', 'dealer', 'other'];

export const TRANSLATIONS = {
  en: {
    logoAlt: 'TerraNavix logo',
    nav: {
      product: 'Product',
      technology: 'Technology',
      roi: 'ROI',
      quote: 'Request a quote',
    },
    hero: {
      eyebrow: 'AUTOSTEER GUIDANCE KIT',
      title: 'Autosteer that keeps your rows straight - every pass, every field.',
      subtitle:
        'TerraNavix is an all-in-one guidance kit that turns your tractor into a precision autosteer machine with high accuracy and simple controls.',
      bullets: [
        'Fast installation - typically ready to work in about one day.',
        'Universal kit for different tractors and implements.',
        'High accuracy with GNSS and terrain compensation.',
        'Simple interface operators can learn in a day.',
      ],
      ctaPrimary: 'Request a quote',
      ctaSecondary: 'Explore the product',
      chip: 'TerraNavix field view',
      sidebar: [
        'AB line: A-B North',
        'Pass-to-pass: high accuracy',
        'Speed: 7.5 km/h',
        'Overlap: reduced',
        'Operator: hands off the wheel',
      ],
    },
    why: {
      title: 'Why farmers choose TerraNavix',
      text: 'TerraNavix is built to keep guidance simple in real fields: straight rows, less overlap and a calmer day in the cab - even for seasonal operators.',
      cards: [
        {
          tag: 'Straight passes',
          title: 'Straighter rows with less effort',
          text: 'Let TerraNavix keep the tractor on line, so your operator can focus on the implement and the job, not on fighting the steering wheel.',
        },
        {
          tag: 'Low speed ready',
          title: 'Works at low speeds',
          text: 'Maintain accurate guidance even at low speeds, ideal for planting, specialty crops and operations where precision really matters.',
        },
        {
          tag: 'Terrain compensation',
          title: 'Handles slopes and rough ground',
          text: 'External sensors help maintain guidance accuracy on uneven fields, slopes and rough conditions throughout the season.',
        },
        {
          tag: 'Easy to learn',
          title: 'Simple, clean interface',
          text: 'A modern layout with clear maps and guidance view, so new and seasonal operators can get comfortable in a single day.',
        },
      ],
    },
    kit: {
      title: "What's in the TerraNavix kit",
      text: 'TerraNavix is delivered as a complete autosteer kit. All major components, cables and mounting hardware are included - so you can go from box to field without hunting for extra parts.',
      items: [
        {
          title: 'Rugged 10.1" display',
          text: 'Sunlight-readable touch display designed for daily use in the cab.',
        },
        {
          title: 'Electric steering wheel',
          text: 'High-torque steering wheel unit that keeps your tractor on the guidance line.',
        },
        {
          title: 'GNSS antenna',
          text: 'Multi-constellation GNSS antenna with an external modem/RTK antenna for high-accuracy corrections.',
        },
        {
          title: 'External IMU',
          text: 'Terrain compensation sensor to help maintain accuracy on slopes and rough ground.',
        },
        {
          title: 'Cables & mounting hardware',
          text: 'Full cable set, brackets and fixing hardware for a clean and reliable install, including wiring for the GNSS and modem/RTK antennas.',
        },
        {
          title: 'Installation & user guides',
          text: 'Printed and digital manuals to help your team install and start using TerraNavix quickly.',
        },
      ],
    },
    field: {
      title: 'Manual driving vs TerraNavix',
      text: 'The same field, two different outcomes. Here is what changes when steering precision is automated.',
      withoutLabel: 'Without Autosteer',
      withoutText: 'Manual steering creates small pass-to-pass errors that compound over the day.',
      withoutSubtitle: 'What happens in the field',
      withoutList: [
        'Up to 15% overlap across the field.',
        'Occasional double application of fertilizers and crop protection products.',
        'The operator constantly corrects the line and gets tired faster.',
      ],
      withLabel: 'With TerraNavix',
      withText: 'Guidance stays steady with straight passes and consistent field geometry.',
      withSubtitle: 'What TerraNavix changes',
      withList: [
        'Overlap can drop to around 3%.',
        'Up to 10-12% savings on fertilizers, crop protection products, and fuel.',
        'Straighter rows, calmer night shifts, and lower operator fatigue.',
      ],
    },
    useCases: {
      title: 'Where TerraNavix helps the most',
      text: 'One autosteer system for many operations across the season - from the first pass in spring to the last loads at harvest.',
      cards: [
        {
          tag: 'Planting & seeding',
          title: 'Consistent row spacing',
          text: 'Keep rows straight and spacing uniform so emergence is more even and harvest is easier.',
        },
        {
          tag: 'Spraying & fertilizing',
          title: 'Less overlap, fewer skips',
          text: 'Reduce wasted inputs and protect crops by following guidance lines instead of guessing in tall or thick crops.',
        },
        {
          tag: 'Tillage',
          title: 'Straight passes in low visibility',
          text: "Dust, night work or long days - TerraNavix keeps the tractor on line when it's hard to see markers.",
        },
        {
          tag: 'Harvest',
          title: 'Follow previous passes',
          text: 'Track previous operations accurately so the header stays full and operators stay calmer during busy harvest days.',
        },
      ],
    },
    results: {
      title: 'See the impact in your fields',
      text: 'TerraNavix helps reduce overlaps and skips, save fuel and inputs, and keep operators fresher over long work days. Even on smaller farms, these gains add up over the season.',
      cards: [
        {
          label: 'Overlap',
          value: 'Less wasted passes',
          text: 'Straighter passes and more accurate tracking mean fewer wasted trips over the same ground.',
        },
        {
          label: 'Inputs',
          value: 'More efficient use',
          text: 'Reduce double-applied areas and misses when spraying and fertilizing.',
        },
        {
          label: 'Operator',
          value: 'Less fatigue',
          text: 'Autosteer takes over the repetitive steering, so operators stay calmer and make fewer mistakes.',
        },
      ],
    },
    contact: {
      title: "Let's talk about your fields",
      text: "Tell us a bit about your tractor, implements and how you work today. We'll help you understand if TerraNavix is a good fit and what configuration makes the most sense.",
      bullets: ['No obligation - just a conversation.', 'We respond by email within a few business days.'],
      intlLabel: 'International sales contact',
      form: {
        name: 'Name',
        email: 'Email',
        country: 'Country / State',
        tractor: 'Tractor brand / model',
        role: 'I am a',
        message: 'Message',
        placeholderName: 'John Smith',
        placeholderEmail: 'you@example.com',
        placeholderCountry: 'Ukraine, Lviv region',
        placeholderTractor: 'John Deere 8R / New Holland T7',
        placeholderMessage: 'Tell us about your fields and how you plan to use autosteer.',
        roleOptions: {
          farmer: 'Farmer',
          contractor: 'Contractor',
          dealer: 'Dealer',
          other: 'Other',
        },
        sending: 'Sending...',
        submit: 'Send my request',
        note: 'We only use your details to respond to your request. No spam, no sharing with third parties.',
        validationRequired: 'Please fill in Name and Email before sending.',
        validationEmail: 'Please enter a valid email address.',
        success: 'Thanks! Your request was sent. We will reply to your email soon.',
        errorPrefix: 'Could not send the request now. Please write us directly at',
        subjectPrefix: 'TerraNavix quote request from',
      },
    },
    footer: {
      rights: 'All rights reserved.',
      text: 'Autosteer guidance kit for modern fields.',
    },
  },
  uk: {
    logoAlt: 'Логотип TerraNavix',
    nav: {
      product: 'Продукт',
      technology: 'Технологія',
      roi: 'Економіка',
      quote: 'Запитати ціну',
    },
    hero: {
      eyebrow: 'КОМПЛЕКТ АВТОПІЛОТА',
      title: 'Автопілот, що тримає рівний ряд - кожен прохід, кожне поле.',
      subtitle:
        'TerraNavix - це all-in-one комплект навігації, який перетворює ваш трактор на точну машину з автопілотом, високою точністю та простим керуванням.',
      bullets: [
        'Швидкий монтаж - зазвичай система готова до роботи приблизно за один день.',
        'Універсальний комплект для різних тракторів і агрегатів.',
        'Висока точність завдяки GNSS і компенсації рельєфу.',
        'Простий інтерфейс, який оператор опановує за день.',
      ],
      ctaPrimary: 'Запитати ціну',
      ctaSecondary: 'Переглянути продукт',
      chip: 'Огляд поля TerraNavix',
      sidebar: [
        'AB-лінія: A-B North',
        'Pass-to-pass: висока точність',
        'Швидкість: 7.5 км/год',
        'Перекриття: зменшено',
        'Оператор: руки не на кермі',
      ],
    },
    why: {
      title: 'Чому фермери обирають TerraNavix',
      text: 'TerraNavix створений, щоб зробити водіння по полю простішим: рівні ряди, менше перекриттів і спокійніша робота в кабіні навіть для сезонних операторів.',
      cards: [
        {
          tag: 'Рівні проходи',
          title: 'Рівніші ряди з меншими зусиллями',
          text: 'TerraNavix тримає трактор на лінії, щоб оператор концентрувався на агрегаті та роботі, а не постійно ловив кермо.',
        },
        {
          tag: 'Робота на малій швидкості',
          title: 'Стабільно працює на низьких швидкостях',
          text: 'Точна навігація навіть на малій швидкості, що важливо для посіву, овочевих культур та операцій, де точність критична.',
        },
        {
          tag: 'Компенсація рельєфу',
          title: 'Працює на схилах і складному рельєфі',
          text: 'Зовнішні сенсори допомагають зберігати точність на нерівних полях, схилах та в складних умовах протягом сезону.',
        },
        {
          tag: 'Легко навчитися',
          title: 'Простий та зрозумілий інтерфейс',
          text: 'Сучасний інтерфейс з наочними картами і лінією руху, тому новий або сезонний оператор швидко входить у роботу.',
        },
      ],
    },
    kit: {
      title: 'Що входить у комплект TerraNavix',
      text: 'TerraNavix постачається як повний комплект автопілота. Усі основні компоненти, кабелі та кріплення вже в комплекті, щоб ви могли швидко перейти від коробки до поля.',
      items: [
        {
          title: 'Захищений дисплей 10.1"',
          text: 'Яскравий сенсорний дисплей, який добре видно на сонці та зручно використовувати щодня в кабіні.',
        },
        {
          title: 'Електричне кермо',
          text: 'Силовий модуль керма, що точно утримує трактор на заданій лінії.',
        },
        {
          title: 'GNSS-антена',
          text: 'Багатосистемна GNSS-антена із зовнішньою modem/RTK-антеною для високоточних поправок.',
        },
        {
          title: 'Зовнішній IMU',
          text: 'Датчик компенсації рельєфу, який допомагає зберігати точність на схилах і нерівній поверхні.',
        },
        {
          title: 'Кабелі та кріплення',
          text: 'Повний набір кабелів, кронштейнів і кріплень для акуратного та надійного монтажу, включно з проводкою для GNSS і modem/RTK антен.',
        },
        {
          title: 'Інструкції з монтажу та роботи',
          text: 'Друковані та цифрові інструкції, щоб команда швидко встановила систему і почала роботу.',
        },
      ],
    },
    field: {
      title: 'Ручне керування vs TerraNavix',
      text: 'Те саме поле, але різний результат. Ось що змінюється, коли керування бере на себе точний автопілот.',
      withoutLabel: 'Без автопілота',
      withoutText: 'Ручне керування створює дрібні похибки в кожному проході, і вони накопичуються протягом дня.',
      withoutSubtitle: 'Що відбувається на полі',
      withoutList: [
        'До 15% перекриття по всьому полю.',
        'Місцями подвійне внесення добрив та ЗЗР.',
        'Механізатор постійно коригує напрямок і швидше втомлюється.',
      ],
      withLabel: 'З TerraNavix',
      withText: 'Автопілот тримає стабільну траєкторію з рівними проходами та чіткою геометрією поля.',
      withSubtitle: 'Що змінює TerraNavix',
      withList: [
        'Перекриття можуть знижуватися до приблизно 3%.',
        'До 10-12% економії на добривах, ЗЗР та пальному.',
        'Рівні ряди, спокійніші нічні зміни та менша втома механізатора.',
      ],
    },
    useCases: {
      title: 'Де TerraNavix дає найбільший ефект',
      text: 'Одна система автопілота для різних операцій протягом сезону - від першого проходу навесні до завершення збирання.',
      cards: [
        {
          tag: 'Посів',
          title: 'Стабільна ширина міжряддя',
          text: 'Рівні проходи та стабільна відстань між рядами допомагають отримати більш рівномірні сходи і спростити збирання.',
        },
        {
          tag: 'Обприскування та підживлення',
          title: 'Менше перекриттів і пропусків',
          text: 'Менше перевитрат і кращий захист рослин завдяки руху по лінії, а не на око у високих культурах.',
        },
        {
          tag: 'Обробіток ґрунту',
          title: 'Рівні проходи навіть при поганій видимості',
          text: 'Пил, нічні зміни або довгий робочий день - TerraNavix тримає трактор на лінії, коли орієнтири погано видно.',
        },
        {
          tag: 'Збирання врожаю',
          title: 'Точний рух по попередніх проходах',
          text: 'Система точно повторює попередні операції, щоб жатка працювала стабільно, а оператор менше втомлювався в пікові дні.',
        },
      ],
    },
    results: {
      title: 'Подивіться ефект на ваших полях',
      text: 'TerraNavix допомагає зменшити перекриття і пропуски, економити пальне та матеріали, а також знижувати втому оператора під час довгих змін.',
      cards: [
        {
          label: 'Перекриття',
          value: 'Менше зайвих проходів',
          text: 'Рівніша траєкторія і точніше ведення означають менше повторних проїздів по тій самій ділянці.',
        },
        {
          label: 'Матеріали',
          value: 'Ефективніше використання',
          text: 'Зменшує зони подвійного внесення та пропуски під час обприскування і внесення добрив.',
        },
        {
          label: 'Оператор',
          value: 'Менша втома',
          text: 'Автопілот забирає рутинне підрулювання, тому оператор працює спокійніше і робить менше помилок.',
        },
      ],
    },
    contact: {
      title: 'Обговорімо ваші поля',
      text: 'Розкажіть про ваш трактор, агрегати та поточний процес роботи. Ми підкажемо, чи підходить TerraNavix саме вам і яка конфігурація буде оптимальною.',
      bullets: ['Без зобовʼязань - просто консультація.', 'Відповідаємо на email протягом кількох робочих днів.'],
      intlLabel: 'Контакт для міжнародних продажів',
      form: {
        name: "Ім'я",
        email: 'Email',
        country: 'Країна / Регіон',
        tractor: 'Марка / модель трактора',
        role: 'Я',
        message: 'Повідомлення',
        placeholderName: 'Іван Петренко',
        placeholderEmail: 'you@example.com',
        placeholderCountry: 'Україна, Львівська область',
        placeholderTractor: 'John Deere 8R / New Holland T7',
        placeholderMessage: 'Коротко опишіть ваші поля і як плануєте використовувати автопілот.',
        roleOptions: {
          farmer: 'Фермер',
          contractor: 'Підрядник',
          dealer: 'Дилер',
          other: 'Інше',
        },
        sending: 'Надсилаємо...',
        submit: 'Надіслати запит',
        note: 'Ми використовуємо ваші дані лише для відповіді на запит. Без спаму та передачі третім сторонам.',
        validationRequired: "Заповніть, будь ласка, поля Ім'я та Email.",
        validationEmail: 'Вкажіть коректну email-адресу.',
        success: 'Дякуємо! Ваш запит надіслано. Ми скоро відповімо на вашу пошту.',
        errorPrefix: 'Зараз не вдалося надіслати запит. Напишіть нам напряму на',
        subjectPrefix: 'Запит на прорахунок TerraNavix від',
      },
    },
    footer: {
      rights: 'Усі права захищено.',
      text: 'Комплект автопілота для сучасних полів.',
    },
  },
  ru: {
    logoAlt: 'Логотип TerraNavix',
    nav: {
      product: 'Продукт',
      technology: 'Технология',
      roi: 'Экономика',
      quote: 'Запросить цену',
    },
    hero: {
      eyebrow: 'КОМПЛЕКТ АВТОПИЛОТА',
      title: 'Автопилот, который держит ровный ряд - каждый проход, каждое поле.',
      subtitle:
        'TerraNavix - это all-in-one комплект навигации, который превращает ваш трактор в точную машину с автопилотом, высокой точностью и простым управлением.',
      bullets: [
        'Быстрый монтаж - обычно система готова к работе примерно за один день.',
        'Универсальный комплект для разных тракторов и агрегатов.',
        'Высокая точность благодаря GNSS и компенсации рельефа.',
        'Простой интерфейс, который оператор осваивает за день.',
      ],
      ctaPrimary: 'Запросить цену',
      ctaSecondary: 'Посмотреть продукт',
      chip: 'Обзор поля TerraNavix',
      sidebar: [
        'AB-линия: A-B North',
        'Pass-to-pass: высокая точность',
        'Скорость: 7.5 км/ч',
        'Перекрытие: снижено',
        'Оператор: руки не на руле',
      ],
    },
    why: {
      title: 'Почему фермеры выбирают TerraNavix',
      text: 'TerraNavix создан, чтобы упростить работу в поле: ровные ряды, меньше перекрытий и более спокойная смена в кабине даже для сезонных операторов.',
      cards: [
        {
          tag: 'Ровные проходы',
          title: 'Более ровные ряды с меньшими усилиями',
          text: 'TerraNavix держит трактор на линии, чтобы оператор фокусировался на агрегате и работе, а не на постоянной корректировке руля.',
        },
        {
          tag: 'Работа на низкой скорости',
          title: 'Стабильная точность на малых скоростях',
          text: 'Точная навигация даже на низкой скорости, что важно для посева, овощных культур и операций, где точность критична.',
        },
        {
          tag: 'Компенсация рельефа',
          title: 'Работает на склонах и неровных полях',
          text: 'Внешние датчики помогают сохранять точность на неровных полях, склонах и в сложных условиях в течение сезона.',
        },
        {
          tag: 'Легко обучить',
          title: 'Простой и понятный интерфейс',
          text: 'Современный интерфейс с наглядной картой и линией движения, поэтому новый или сезонный оператор быстро включается в работу.',
        },
      ],
    },
    kit: {
      title: 'Что входит в комплект TerraNavix',
      text: 'TerraNavix поставляется как полный комплект автопилота. Все основные компоненты, кабели и крепления уже в наборе, чтобы быстро перейти от коробки к работе в поле.',
      items: [
        {
          title: 'Защищенный дисплей 10.1"',
          text: 'Яркий сенсорный дисплей, хорошо читаемый на солнце и удобный для ежедневной работы в кабине.',
        },
        {
          title: 'Электрический руль',
          text: 'Силовой модуль рулевого управления, который точно удерживает трактор на заданной линии.',
        },
        {
          title: 'GNSS-антенна',
          text: 'Многосистемная GNSS-антенна с внешней modem/RTK-антенной для высокоточных поправок.',
        },
        {
          title: 'Внешний IMU',
          text: 'Датчик компенсации рельефа, который помогает сохранять точность на склонах и неровной поверхности.',
        },
        {
          title: 'Кабели и крепления',
          text: 'Полный набор кабелей, кронштейнов и крепежа для аккуратного и надежного монтажа, включая проводку для GNSS и modem/RTK антенн.',
        },
        {
          title: 'Инструкции по монтажу и работе',
          text: 'Печатные и цифровые инструкции, чтобы команда быстро установила систему и начала работу.',
        },
      ],
    },
    field: {
      title: 'Ручное вождение vs TerraNavix',
      text: 'То же поле, но другой результат. Вот что меняется, когда управление берет на себя точный автопилот.',
      withoutLabel: 'Без автопилота',
      withoutText: 'Ручное управление создает небольшие ошибки в каждом проходе, и они накапливаются в течение дня.',
      withoutSubtitle: 'Что происходит в поле',
      withoutList: [
        'До 15% перекрытия по всему полю.',
        'Местами двойное внесение удобрений и СЗР.',
        'Механизатор постоянно корректирует направление и быстрее устает.',
      ],
      withLabel: 'С TerraNavix',
      withText: 'Автопилот держит стабильную траекторию с ровными проходами и четкой геометрией поля.',
      withSubtitle: 'Что меняет TerraNavix',
      withList: [
        'Перекрытия могут снижаться примерно до 3%.',
        'До 10-12% экономии на удобрениях, СЗР и топливе.',
        'Ровные ряды, более спокойные ночные смены и меньшая усталость механизатора.',
      ],
    },
    useCases: {
      title: 'Где TerraNavix дает максимальный эффект',
      text: 'Одна система автопилота для разных операций в течение сезона - от первого прохода весной до завершения уборки.',
      cards: [
        {
          tag: 'Посев',
          title: 'Стабильная ширина междурядья',
          text: 'Ровные проходы и одинаковый интервал между рядами помогают получить более равномерные всходы и упростить уборку.',
        },
        {
          tag: 'Опрыскивание и подкормка',
          title: 'Меньше перекрытий и пропусков',
          text: 'Меньше перерасхода и лучше защита растений благодаря движению по линии, а не по визуальной оценке.',
        },
        {
          tag: 'Обработка почвы',
          title: 'Ровные проходы при низкой видимости',
          text: 'Пыль, ночные смены или длинный рабочий день - TerraNavix держит трактор на линии, когда ориентиры плохо видны.',
        },
        {
          tag: 'Уборка урожая',
          title: 'Точное движение по предыдущим проходам',
          text: 'Система точно повторяет предыдущие операции, чтобы жатка работала стабильно, а оператор меньше уставал в пиковые дни.',
        },
      ],
    },
    results: {
      title: 'Оцените эффект на ваших полях',
      text: 'TerraNavix помогает снизить перекрытия и пропуски, экономить топливо и материалы, а также уменьшать усталость оператора в длинные смены.',
      cards: [
        {
          label: 'Перекрытия',
          value: 'Меньше лишних проходов',
          text: 'Более ровная траектория и точное ведение означают меньше повторных проездов по одному и тому же участку.',
        },
        {
          label: 'Материалы',
          value: 'Более эффективное использование',
          text: 'Снижаются зоны двойного внесения и пропуски при опрыскивании и внесении удобрений.',
        },
        {
          label: 'Оператор',
          value: 'Меньше усталости',
          text: 'Автопилот берет на себя рутинное подруливание, поэтому оператор работает спокойнее и допускает меньше ошибок.',
        },
      ],
    },
    contact: {
      title: 'Обсудим ваши поля',
      text: 'Расскажите о вашем тракторе, агрегатах и текущем процессе работы. Мы подскажем, подходит ли TerraNavix именно вам и какая конфигурация будет оптимальной.',
      bullets: ['Без обязательств - просто консультация.', 'Отвечаем на email в течение нескольких рабочих дней.'],
      intlLabel: 'Контакт для международных продаж',
      form: {
        name: 'Имя',
        email: 'Email',
        country: 'Страна / Регион',
        tractor: 'Марка / модель трактора',
        role: 'Я',
        message: 'Сообщение',
        placeholderName: 'Иван Петров',
        placeholderEmail: 'you@example.com',
        placeholderCountry: 'Украина, Львовская область',
        placeholderTractor: 'John Deere 8R / New Holland T7',
        placeholderMessage: 'Коротко опишите ваши поля и как планируете использовать автопилот.',
        roleOptions: {
          farmer: 'Фермер',
          contractor: 'Подрядчик',
          dealer: 'Дилер',
          other: 'Другое',
        },
        sending: 'Отправляем...',
        submit: 'Отправить запрос',
        note: 'Мы используем ваши данные только для ответа на запрос. Без спама и передачи третьим сторонам.',
        validationRequired: 'Заполните, пожалуйста, поля Имя и Email.',
        validationEmail: 'Укажите корректный email.',
        success: 'Спасибо! Ваш запрос отправлен. Мы скоро ответим на вашу почту.',
        errorPrefix: 'Сейчас не удалось отправить запрос. Напишите нам напрямую на',
        subjectPrefix: 'Запрос на расчет TerraNavix от',
      },
    },
    footer: {
      rights: 'Все права защищены.',
      text: 'Комплект автопилота для современных полей.',
    },
  },
};

export const INITIAL_FORM_VALUES = {
  name: '',
  email: '',
  country: '',
  tractor: '',
  role: 'farmer',
  message: '',
};


