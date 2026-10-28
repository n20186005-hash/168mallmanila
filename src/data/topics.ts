// Topic registry for the 168 Shopping Mall visitor guide.
// A-class (transport & visit-planning) long-tail pages, each produced in
// fil / en / zh with a shared slug. Single source of truth for topic content;
// every topic page, its JSON-LD, breadcrumb and internal links derive from here.
import type { Locale } from './content';

export type TopicLocale = Locale;
export type TopicGroup = 'transport' | 'food' | 'shopping' | 'culture';

export interface TopicFact { label: string; value: string }
export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}
export interface TopicFaq { q: string; a: string }
export interface TopicContent {
  meta: { title: string; description: string };
  kicker: string;
  h1: string;
  lead: string;
  facts: TopicFact[];
  sections: TopicSection[];
  faqs: TopicFaq[];
  related: string[];
}

// Group label shown above the internal-link grid on topic pages / homepage.
export const TOPIC_GROUP: TopicGroup = 'transport';

// The 10 A-class slugs. Slugs are identical across all three locales.
export const TOPIC_SLUGS = [
  'how-to-get-to-168-mall',
  '168-mall-parking',
  'lrt-to-divisoria',
  'jeepney-to-168-mall',
  '168-mall-opening-hours',
  'best-time-to-visit-168-mall',
  '168-mall-with-kids',
  'divisoria-safety-tips',
  '168-mall-entrance-fee',
  '168-mall-from-naia',
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];

// URL path for a topic in a given locale (fil is the default, no prefix).
export const topicPathFor = (slug: string, locale: TopicLocale): string =>
  locale === 'fil' ? `/${slug}/` : `/${locale}/${slug}/`;

export const topicContent: Record<TopicSlug, Record<TopicLocale, TopicContent>> = {
  'how-to-get-to-168-mall': {
    en: {
      meta: {
        title: 'How to Get to 168 Mall Divisoria (2026 Guide)',
        description:
          'Reach 168 Shopping Mall from LRT, jeepney, taxi or NAIA. Step-by-step routes, drop-off points and travel times to 918 Soler St, Binondo.',
      },
      kicker: 'GETTING THERE',
      h1: 'How to Get to 168 Shopping Mall',
      lead: '168 Mall sits in the heart of Divisoria, Binondo. Here are the practical routes from trains, jeepneys, ride-hailing and the airport.',
      facts: [
        { label: 'Address', value: '918 Soler St, Binondo, Manila 1006' },
        { label: 'Nearest LRT', value: 'LRT-1 Doroteo Jose / LRT-2 Recto' },
        { label: 'Best with bags', value: 'Taxi or ride-hailing to the door' },
        { label: 'Coordinates', value: '14.6051405, 120.9721347' },
      ],
      sections: [
        {
          heading: 'From LRT and the last stretch',
          paragraphs: [
            'The two nearest rail lines get you close, then a short jeepney or e-trike covers the final stretch to Soler Street.',
            'From LRT-1 Doroteo Jose or LRT-2 Recto, take a jeepney or e-trike toward Divisoria or Tutuban and alight near Soler Street.',
          ],
          bullets: [
            'LRT-1 Doroteo Jose: alight, then jeepney/e-trike to Divisoria or Tutuban.',
            'LRT-2 Recto: alight, then jeepney toward Divisoria; ask for 168 / Soler Street.',
            'The final ride is 5–15 minutes depending on traffic.',
          ],
        },
        {
          heading: 'Taxi, ride-hailing and driving',
          paragraphs: [
            'Pin 168 Shopping Mall, 918 Soler St. This is the easier option when you are carrying heavy shopping bags, though expect congestion around the market streets at peak hours.',
          ],
          callout:
            'Confirm any access or event rules with the mall before travelling. Shopping, food, transport and parking are separate expenses; this guide does not sell tickets.',
        },
      ],
      faqs: [
        { q: 'What is the nearest LRT station to 168 Mall?', a: 'LRT-1 Doroteo Jose and LRT-2 Recto are both within a short jeepney or e-trike ride of the mall on Soler Street. Neither line stops directly at the door.' },
        { q: 'Can I walk from Binondo Church to 168 Mall?', a: 'It is walkable but not a short stroll — roughly 10–20 minutes through busy Divisoria streets. Many visitors prefer a short jeepney or tricycle for the final stretch, especially with bags.' },
        { q: 'Is there a drop-off point at the mall?', a: 'Ride-hailing and taxi drivers can drop you on or near Soler Street. Ask for 168 Shopping Mall / Soler Street so the driver knows the exact stop.' },
        { q: 'How long does the trip take from downtown Manila?', a: 'From Quiapo or Sta. Cruz, allow 20–40 minutes by jeepney depending on traffic; longer during Divisoria peak shopping periods.' },
      ],
      related: ['168-mall-parking', '168-mall-from-naia', 'lrt-to-divisoria', 'jeepney-to-168-mall'],
    },
    fil: {
      meta: {
        title: 'Paano Pumunta sa 168 Mall Divisoria (Gabay 2026)',
        description:
          'Punta sa 168 Shopping Mall mula LRT, jeepney, taxi o NAIA. Hakbang-hakbang na ruta, drop-off at oras ng biyahe papuntang 918 Soler St, Binondo.',
      },
      kicker: 'PAPUNTA ROON',
      h1: 'Paano Pumunta sa 168 Shopping Mall',
      lead: 'Nasa gitna ng Divisoria, Binondo ang 168 Mall. Narito ang mga praktikal na ruta mula tren, jeepney, ride-hailing at airport.',
      facts: [
        { label: 'Tirahan', value: '918 Soler St, Binondo, Manila 1006' },
        { label: 'Pinakamalapit na LRT', value: 'LRT-1 Doroteo Jose / LRT-2 Recto' },
        { label: 'Pinakamainam may bag', value: 'Taxi o ride-hailing hanggang pintuan' },
        { label: 'Koordinado', value: '14.6051405, 120.9721347' },
      ],
      sections: [
        {
          heading: 'Mula LRT at huling biyahe',
          paragraphs: [
            'Ang dalawang pinakamalapit na linya ng tren ay malapit na, tapos maikling jeepney o e-trike ang tutulong sa huling parte papuntang Soler Street.',
            'Mula LRT-1 Doroteo Jose o LRT-2 Recto, sumakay ng jeepney o e-trike papuntang Divisoria o Tutuban at bumaba malapit sa Soler Street.',
          ],
          bullets: [
            'LRT-1 Doroteo Jose: bumaba, tapos jeepney/e-trike papuntang Divisoria o Tutuban.',
            'LRT-2 Recto: bumaba, tapos jeepney papuntang Divisoria; sabihin 168 / Soler Street.',
            'Ang huling biyahe ay 5–15 minuto depende sa trapiko.',
          ],
        },
        {
          heading: 'Taxi, ride-hailing at pagdadala ng sasakyan',
          paragraphs: [
            'I-pin ang 168 Shopping Mall, 918 Soler St. Ito ang mas madaling opsyon kapag marami kang bitbit na shopping bags, pero asahan ang siksok sa paligid ng market tuwing peak hours.',
          ],
          callout:
            'Kumpirmahin ang anumang access o event rules sa mall bago bumiyahe. Magkahiwalay ang shopping, food, transport at parking; hindi nagbebenta ng ticket ang gabay na ito.',
        },
      ],
      faqs: [
        { q: 'Ano ang pinakamalapit na istasyon ng LRT sa 168 Mall?', a: 'Ang LRT-1 Doroteo Jose at LRT-2 Recto ay parehong nasa maikling jeepney o e-trike mula sa mall sa Soler Street. Walang direktang humihinto sa pintuan.' },
        { q: 'Pwede bang lakarin mula Binondo Church papuntang 168 Mall?', a: 'Pwede pero hindi maikli — mga 10–20 minuto sa maugong na kalsada ng Divisoria. Marami ang mas gustong sumakay ng maikling jeepney o tricycle, lalo na kung may bitbit.' },
        { q: 'May drop-off point ba sa mall?', a: 'Ang ride-hailing at taxi ay pwedeng magbaba sa o malapit sa Soler Street. Sabihin sa driver na 168 Shopping Mall / Soler Street para alam ang eksaktong babaan.' },
        { q: 'Gaano katagal ang biyahe mula downtown Manila?', a: 'Mula Quiapo o Sta. Cruz, maglaan ng 20–40 minuto sa jeepney depende sa trapiko; mas mahaba tuwing peak shopping sa Divisoria.' },
      ],
      related: ['168-mall-parking', '168-mall-from-naia', 'lrt-to-divisoria', 'jeepney-to-168-mall'],
    },
    zh: {
      meta: {
        title: '怎么去 168 Mall Divisoria（2026 攻略）',
        description:
          '从 LRT、jeepney、出租车或 NAIA 机场前往 168 Shopping Mall。逐步路线、下车点与到 918 Soler St, Binondo 的车程。',
      },
      kicker: '详细交通',
      h1: '怎么去 168 Shopping Mall',
      lead: '168 Mall 位于 Divisoria 核心的 Binondo。下面是从轻轨、jeepney、网约车到机场的实用路线。',
      facts: [
        { label: '地址', value: '918 Soler St, Binondo, Manila 1006' },
        { label: '最近轻轨', value: 'LRT-1 Doroteo Jose / LRT-2 Recto' },
        { label: '带大包首选', value: '出租车或网约车直达门口' },
        { label: '坐标', value: '14.6051405, 120.9721347' },
      ],
      sections: [
        {
          heading: '从轻轨到最后一程',
          paragraphs: [
            '最近的两条轻轨线能把你带到附近，再换乘短途 jeepney 或 e-trike 到 Soler Street。',
            '从 LRT-1 Doroteo Jose 或 LRT-2 Recto 下车后，搭乘前往 Divisoria 或 Tutuban 的 jeepney / e-trike，在 Soler Street 附近下车。',
          ],
          bullets: [
            'LRT-1 Doroteo Jose：下车后换乘 jeepney/e-trike 前往 Divisoria 或 Tutuban。',
            'LRT-2 Recto：下车后搭乘前往 Divisoria 的 jeepney，告诉司机「168 / Soler Street」。',
            '最后一程约 5–15 分钟，视路况而定。',
          ],
        },
        {
          heading: '出租车、网约车与自驾',
          paragraphs: [
            '目的地可设为「168 Shopping Mall, 918 Soler St」。买得多、带大包时最省力，但高峰时段市场周边容易堵车。',
          ],
          callout:
            '出发前请向商场确认任何活动或通行规定；购物、餐饮、交通与停车须另行预算。本站不销售门票。',
        },
      ],
      faqs: [
        { q: '离 168 Mall 最近的轻轨站是哪个？', a: 'LRT-1 Doroteo Jose 与 LRT-2 Recto 都离 Soler Street 上的商场仅一段短途 jeepney / e-trike 车程，两条线都不直接停在门口。' },
        { q: '可以从 Binondo Church 走到 168 Mall 吗？', a: '可以走，但不是短距离——穿过繁忙的 Divisoria 街市约需 10–20 分钟。多数人带包时会选择短途 jeepney 或 tricycle。' },
        { q: '商场有下车点吗？', a: '网约车与出租车可在 Soler Street 上或附近放下乘客，告诉司机「168 Shopping Mall / Soler Street」即可。' },
        { q: '从马尼拉市中心过来要多久？', a: '从 Quiapo 或 Sta. Cruz 乘 jeepney 约 20–40 分钟，Divisoria 购物高峰期会更久。' },
      ],
      related: ['168-mall-parking', '168-mall-from-naia', 'lrt-to-divisoria', 'jeepney-to-168-mall'],
    },
  },

  '168-mall-parking': {
    en: {
      meta: {
        title: '168 Mall Parking: Where to Park in Divisoria',
        description:
          'Parking at 168 Shopping Mall and nearby Divisoria lots. Arrive early, rates and availability are posted on site — plan before you go.',
      },
      kicker: 'PARKING',
      h1: 'Parking Near 168 Shopping Mall',
      lead: 'Divisoria fills quickly. The mall has its own parking facility; nearby public lots are the fallback when it is full.',
      facts: [
        { label: 'Mall parking', value: 'Available on site' },
        { label: 'Best arrival', value: 'Early morning, before peak' },
        { label: 'Payment', value: 'Posted rates on site' },
        { label: 'Nearby', value: 'Tutuban, Lucky Chinatown lots' },
      ],
      sections: [
        {
          heading: 'The mall’s parking facility',
          paragraphs: [
            '168 Shopping Mall has a parking facility. Because Divisoria congestion builds through the day, arriving earlier is the easier choice.',
            'Availability, rates and operating rules can change, so follow the posted information when you arrive rather than relying on older figures.',
          ],
        },
        {
          heading: 'Nearby alternatives',
          paragraphs: [
            'If the mall lot is full, public parking around Divisoria, Tutuban Center and Lucky Chinatown are common fallbacks.',
          ],
          bullets: [
            'Tutuban Center: shopping-complex parking a short ride away.',
            'Lucky Chinatown: a more modern mall with its own parking.',
            'Street-side lots exist but fill first and vary in price.',
          ],
          callout:
            'Rates and rules are set by each operator and shown on site. This guide does not publish a fixed price because they change.',
        },
      ],
      faqs: [
        { q: 'Is there parking at 168 Mall?', a: 'Yes, the mall has a parking facility. How full it is depends on the hour — Divisoria gets busy, so earlier arrivals have a better chance of a slot.' },
        { q: 'How much does parking cost?', a: 'The mall posts its rates on site, and they can change. Carry some cash and check the displayed fee before leaving your vehicle rather than assuming a fixed price.' },
        { q: 'Is motorcycle parking available?', a: 'Divisoria areas generally accommodate two-wheelers, but the exact bays and fees are determined on site. Ask the attendant where to park when you arrive.' },
        { q: 'Where do I park if the mall lot is full?', a: 'Nearby public lots around Divisoria, Tutuban Center and Lucky Chinatown are the usual alternatives. Arriving early keeps more options open.' },
      ],
      related: ['how-to-get-to-168-mall', 'best-time-to-visit-168-mall', 'divisoria-safety-tips'],
    },
    fil: {
      meta: {
        title: 'Paradahan sa 168 Mall: Saan Mag-park sa Divisoria',
        description:
          'Paradahan sa 168 Shopping Mall at malapit na lot sa Divisoria. Dumating nang maaga, ang rate at availability ay nakapaskil sa lugar — magplano bago umalis.',
      },
      kicker: 'PARADAAN',
      h1: 'Paradahan Malapit sa 168 Shopping Mall',
      lead: 'Mabilis mapuno ang Divisoria. May sariling parking facility ang mall; ang mga public lot sa paligid ang fallback kapag puno na.',
      facts: [
        { label: 'Parking ng mall', value: 'Available sa lugar' },
        { label: 'Pinakamainam na dating', value: 'Maagang umaga, bago ang peak' },
        { label: 'Bayad', value: 'Nakapaskil na rate sa lugar' },
        { label: 'Malapit', value: 'Tutuban, Lucky Chinatown lots' },
      ],
      sections: [
        {
          heading: 'Ang parking facility ng mall',
          paragraphs: [
            'May parking facility ang 168 Shopping Mall. Dahil tumitindi ang siksok sa Divisoria sa buong araw, mas mainam ang maagang pagdating.',
            'Ang availability, rates at rules ay pwedeng magbago, kaya sundin ang nakapaskil na impormasyon pagdating sa halip na umasa sa lumang datos.',
          ],
        },
        {
          heading: 'Mga alternatibo sa malapit',
          paragraphs: [
            'Kung puno na ang lot ng mall, ang public parking sa paligid ng Divisoria, Tutuban Center at Lucky Chinatown ay karaniwang fallback.',
          ],
          bullets: [
            'Tutuban Center: parking ng shopping complex na malapit lang.',
            'Lucky Chinatown: mas modernong mall na may sariling parking.',
            'Street-side lots ay mayroon pero una nauubos at magkakaiba ang presyo.',
          ],
          callout:
            'Ang rates at rules ay itinatakda ng bawat operator at ipinapakita sa lugar. Hindi naglalabas ng fixed price ang gabay dahil pwedeng magbago.',
        },
      ],
      faqs: [
        { q: 'May paradahan ba sa 168 Mall?', a: 'Oo, may parking facility ang mall. Ang kapuno ay depende sa oras — mabilis maugong ang Divisoria, kaya mas malaki ang chance ng slot kapag maaga ang dating.' },
        { q: 'Magkano ang parking?', a: 'Ang mall ay naglalagay ng rate sa lugar, at pwedeng magbago. Magdala ng cash at tingnan ang nakapaskil na bayad bago iwan ang sasakyan.' },
        { q: 'May motorcycle parking ba?', a: 'Kadalasang tinatanggap ang two-wheeler sa Divisoria, pero ang exact na bays at fees ay nasa lugar. Tanong sa attendant kung saan mag-park pagdating.' },
        { q: 'Saan mag-park kung puno na ang lot ng mall?', a: 'Ang mga public lot sa paligid ng Divisoria, Tutuban Center at Lucky Chinatown ang karaniwang alternatibo. Ang maagang dating ay nagbubukas ng mas maraming opsyon.' },
      ],
      related: ['how-to-get-to-168-mall', 'best-time-to-visit-168-mall', 'divisoria-safety-tips'],
    },
    zh: {
      meta: {
        title: '168 Mall 停车：Divisoria 哪里能停',
        description:
          '168 Shopping Mall 商场内与周边 Divisoria 停车场。早点到达，费率与车位以现场公示为准——出发前先规划。',
      },
      kicker: '停车',
      h1: '168 Shopping Mall 周边停车',
      lead: 'Divisoria 很容易满位。商场自有停车设施；满了之后周边公共停车场可作备选。',
      facts: [
        { label: '商场停车', value: '场内设有停车设施' },
        { label: '最佳到达', value: '清晨、高峰前' },
        { label: '缴费', value: '以现场公示费率' },
        { label: '周边', value: 'Tutuban、Lucky Chinatown 停车场' },
      ],
      sections: [
        {
          heading: '商场内的停车设施',
          paragraphs: [
            '168 Shopping Mall 设有停车设施。由于 Divisoria 一天内会愈来愈挤，越早到达越容易停。',
            '车位、费率与运营规则可能变化，到达后请以现场公示信息为准，不要依赖旧数字。',
          ],
        },
        {
          heading: '周边备选',
          paragraphs: [
            '若商场车位已满，Divisoria 周边、Tutuban Center 与 Lucky Chinatown 的公共停车场是常见备选。',
          ],
          bullets: [
            'Tutuban Center：购物中心停车场，距离不远。',
            'Lucky Chinatown：较现代化的商场，自有停车场。',
            '路边车位也有，但最先满、价格不一。',
          ],
          callout:
            '费率与规则由各运营方现场公示。本站不公布固定价格，因为它们会变动。',
        },
      ],
      faqs: [
        { q: '168 Mall 有停车场吗？', a: '有，商场设有停车设施。是否满位取决于时段——Divisoria 很热闹，越早到达越容易有位。' },
        { q: '停车要多少钱？', a: '商场会现场公示费率，且可能变动。请带现金并在离车前查看标示费用，不要假设固定价格。' },
        { q: '有摩托车位吗？', a: 'Divisoria 一带通常可停两轮机，但具体车位与费用以现场为准，到达时询问管理员即可。' },
        { q: '商场满了停哪里？', a: '周边 Divisoria、Tutuban Center、Lucky Chinatown 的公共停车场是常见替代。早到能保留更多选择。' },
      ],
      related: ['how-to-get-to-168-mall', 'best-time-to-visit-168-mall', 'divisoria-safety-tips'],
    },
  },

  'lrt-to-divisoria': {
    en: {
      meta: {
        title: 'LRT to Divisoria: Doroteo Jose & Recto Routes',
        description:
          'Take LRT-1 to Doroteo Jose or LRT-2 to Recto, then a jeep or e-trike to Divisoria. Last-mile steps and travel times to 168 Mall.',
      },
      kicker: 'BY TRAIN',
      h1: 'Taking the LRT to Divisoria & 168 Mall',
      lead: 'The two nearest LRT lines get you close; a short jeepney or e-trike ride covers the final stretch to Soler Street.',
      facts: [
        { label: 'LRT-1 station', value: 'Doroteo Jose' },
        { label: 'LRT-2 station', value: 'Recto' },
        { label: 'Final ride', value: 'Jeepney / e-trike to Soler' },
        { label: 'Walking', value: '5–15 min final stretch' },
      ],
      sections: [
        {
          heading: 'LRT-1 via Doroteo Jose',
          paragraphs: [
            'Ride LRT-1 to Doroteo Jose. From there, jeepneys and e-trikes bound for Divisoria or Tutuban are easy to find.',
            'Tell the driver you are going to 168 / Soler Street and alight near Soler Street; the mall is a short walk from the drop-off.',
          ],
        },
        {
          heading: 'LRT-2 via Recto',
          paragraphs: [
            'Ride LRT-2 to Recto. Jeepneys heading to Divisoria pass through this area; board one and ask for the 168 / Soler Street stop.',
          ],
          bullets: [
            'Both lines require a transfer to a jeepney or e-trike for the last stretch.',
            'Keep small bills ready for the jeepney fare.',
            'Peak-hour market traffic can slow the final ride.',
          ],
          callout:
            'Train and jeepney schedules shift; check the official LRT and local transit information before you travel.',
        },
      ],
      faqs: [
        { q: 'Which LRT station is closest to Divisoria?', a: 'LRT-1 Doroteo Jose and LRT-2 Recto are the two common gateways. Neither reaches the mall directly, so budget a short jeepney or e-trike ride afterward.' },
        { q: 'Which line is faster?', a: 'It depends on where you start. From the north or south via LRT-1, Doroteo Jose is convenient; from the east via LRT-2, Recto is the natural exit. Both need the same last-mile ride.' },
        { q: 'How do I pay for the LRT?', a: 'Use a stored-value card accepted on LRT-1 and LRT-2, or buy a single-journey ticket at the station. Have the card or cash ready at the gate.' },
        { q: 'Can I reach 168 Mall from EDSA via LRT?', a: 'Yes. Take LRT-1 along EDSA toward Doroteo Jose, then transfer to a Divisoria/Tutuban jeepney or e-trike for the final stretch to Soler Street.' },
      ],
      related: ['jeepney-to-168-mall', 'how-to-get-to-168-mall', '168-mall-from-naia'],
    },
    fil: {
      meta: {
        title: 'LRT papuntang Divisoria: Doroteo Jose at Recto',
        description:
          'Sakay ng LRT-1 papuntang Doroteo Jose o LRT-2 papuntang Recto, tapos jeep o e-trike papuntang Divisoria. Huling biyahe at oras papuntang 168 Mall.',
      },
      kicker: 'SA TREN',
      h1: 'Sakay ng LRT papuntang Divisoria at 168 Mall',
      lead: 'Ang dalawang pinakamalapit na linya ng LRT ay malapit na; maikling jeepney o e-trike ang tutulong sa huling parte papuntang Soler Street.',
      facts: [
        { label: 'LRT-1 station', value: 'Doroteo Jose' },
        { label: 'LRT-2 station', value: 'Recto' },
        { label: 'Huling biyahe', value: 'Jeepney / e-trike papuntang Soler' },
        { label: 'Lakarin', value: '5–15 min huling parte' },
      ],
      sections: [
        {
          heading: 'LRT-1 via Doroteo Jose',
          paragraphs: [
            'Sakay ng LRT-1 papuntang Doroteo Jose. Mula roon, madaling makahanap ng jeepney at e-trike papuntang Divisoria o Tutuban.',
            'Sabihin sa driver na sa 168 / Soler Street ka at bumaba malapit sa Soler Street; maikli ang lakad mula sa babaan papuntang mall.',
          ],
        },
        {
          heading: 'LRT-2 via Recto',
          paragraphs: [
            'Sakay ng LRT-2 papuntang Recto. Ang mga jeepney papuntang Divisoria ay dadaan sa area na ito; sumakay at humingi ng stop na 168 / Soler Street.',
          ],
          bullets: [
            'Parehong linya ay nangangailangan ng transfer sa jeepney o e-trike para sa huling parte.',
            'Mag-ready ng small bills para sa pamasahe sa jeepney.',
            'Ang siksok sa market tuwing peak ay pwedeng magpabagal sa huling biyahe.',
          ],
          callout:
            'Ang schedule ng tren at jeepney ay nagbabago; tingnan ang opisyal na LRT at lokal na impormasyon bago bumiyahe.',
        },
      ],
      faqs: [
        { q: 'Aling istasyon ng LRT ang pinakamalapit sa Divisoria?', a: 'Ang LRT-1 Doroteo Jose at LRT-2 Recto ang dalawang karaniwang gateway. Walang direktang humihinto sa mall, kaya maglaan ng maikling jeepney o e-trike pagkatapos.' },
        { q: 'Aling linya ang mas mabilis?', a: 'Dependi kung saan ka nagsisimula. Mula north o south via LRT-1, abante ang Doroteo Jose; mula east via LRT-2, ang Recto ang natural na exit. Pareho may huling biyahe.' },
        { q: 'Paano magbayad sa LRT?', a: 'Gamitin ang stored-value card na tinatanggap sa LRT-1 at LRT-2, o bumili ng single-journey ticket sa istasyon. Ihanda ang card o cash sa gate.' },
        { q: 'Pwede bang abutin ang 168 Mall mula EDSA via LRT?', a: 'Oo. Sakay ng LRT-1 sa EDSA papuntang Doroteo Jose, tapos transfer sa jeepney/e-trike papuntang Divisoria/Tutuban para sa huling parte papuntang Soler Street.' },
      ],
      related: ['jeepney-to-168-mall', 'how-to-get-to-168-mall', '168-mall-from-naia'],
    },
    zh: {
      meta: {
        title: '坐 LRT 到 Divisoria：Doroteo Jose 与 Recto 线',
        description:
          '搭 LRT-1 到 Doroteo Jose 或 LRT-2 到 Recto，再换乘 jeepney / e-trike 到 Divisoria。到 168 Mall 的最后一程与车程。',
      },
      kicker: '轨道交通',
      h1: '坐 LRT 到 Divisoria 与 168 Mall',
      lead: '最近的两条 LRT 线能把你带到附近；再换乘短途 jeepney 或 e-trike 到 Soler Street。',
      facts: [
        { label: 'LRT-1 站', value: 'Doroteo Jose' },
        { label: 'LRT-2 站', value: 'Recto' },
        { label: '最后一程', value: 'jeepney / e-trike 到 Soler' },
        { label: '步行', value: '最后一程 5–15 分钟' },
      ],
      sections: [
        {
          heading: 'LRT-1 经 Doroteo Jose',
          paragraphs: [
            '搭 LRT-1 到 Doroteo Jose。出站后很容易找到前往 Divisoria 或 Tutuban 的 jeepney 与 e-trike。',
            '告诉司机你去「168 / Soler Street」，在 Soler Street 附近下车，商场离下车点步行不远。',
          ],
        },
        {
          heading: 'LRT-2 经 Recto',
          paragraphs: [
            '搭 LRT-2 到 Recto。途经此地的 jeepney 多开往 Divisoria，上车后请司机在「168 / Soler Street」停靠。',
          ],
          bullets: [
            '两条线都需在最后一程换乘 jeepney 或 e-trike。',
            '准备小额钞票付 jeepney 车资。',
            '高峰时段市场车流会拖慢最后一程。',
          ],
          callout:
            '列车与 jeepney 班次会变，出行前请查看 LRT 官方与当地交通信息。',
        },
      ],
      faqs: [
        { q: '离 Divisoria 最近的 LRT 站是哪个？', a: 'LRT-1 Doroteo Jose 与 LRT-2 Recto 是两个常用入口。两条线都不直达商场，需再换乘短途 jeepney 或 e-trike。' },
        { q: '哪条线更快？', a: '取决于你的起点。从北/南走 LRT-1，Doroteo Jose 最方便；从东走 LRT-2，Recto 是自然的出口。两者最后一程相同。' },
        { q: 'LRT 怎么付费？', a: '使用 LRT-1、LRT-2 通用的储值卡，或在车站购买单程票。在闸机前备好卡片或现金。' },
        { q: '能从 EDSA 经 LRT 到 168 Mall 吗？', a: '可以。沿 EDSA 搭 LRT-1 到 Doroteo Jose，再换乘前往 Divisoria/Tutuban 的 jeepney / e-trike 走完最后一程到 Soler Street。' },
      ],
      related: ['jeepney-to-168-mall', 'how-to-get-to-168-mall', '168-mall-from-naia'],
    },
  },

  'jeepney-to-168-mall': {
    en: {
      meta: {
        title: 'Jeepney to 168 Mall: Routes & Drop-off Tips',
        description:
          'Find Divisoria and Tutuban jeepneys, tell the driver 168 / Soler Street, and plan the walking finish. A practical Binondo ride guide.',
      },
      kicker: 'BY JEEPNEY',
      h1: 'Riding a Jeepney to 168 Mall',
      lead: 'Jeepneys are the cheapest link to Divisoria. Know the signboard and the drop-off phrase before you board.',
      facts: [
        { label: 'Look for', value: 'Divisoria / Tutuban signboards' },
        { label: 'Tell driver', value: '168 / Soler Street' },
        { label: 'Fare', value: 'Small bills recommended' },
        { label: 'Final walk', value: 'Short walk from drop-off' },
      ],
      sections: [
        {
          heading: 'Which jeepney to ride',
          paragraphs: [
            'Look for jeepneys with a Divisoria or Tutuban signboard. They run from hubs like Quiapo, Sta. Cruz and Recto toward the market district.',
            'Board at the designated stop, drop your fare in the coin box and watch for your stop.',
          ],
        },
        {
          heading: 'On board and drop-off',
          paragraphs: [
            'Tell the driver you are getting off for 168 / Soler Street. From the drop-off, the mall is a short walk into the Divisoria–Binondo cluster.',
          ],
          bullets: [
            'Say the stop clearly when you board so the driver remembers.',
            'Keep your bag in front of you in a crowded jeepney.',
            'Have small bills ready; drivers may not have change for large notes.',
          ],
          callout:
            'Routes and terminals shift over time. Confirm the current Divisoria jeepney loading point with locals or the mall before relying on a fixed stop.',
        },
      ],
      faqs: [
        { q: 'Which jeepney goes to 168 Mall?', a: 'Any jeepney bound for Divisoria or Tutuban passes close to the mall. Board one with that signboard and ask for the 168 / Soler Street stop.' },
        { q: 'How much is the jeepney fare?', a: 'Fares are low and paid in cash on board. Carry small bills and coins, since drivers often cannot break large notes during busy periods.' },
        { q: 'Can I reach 168 Mall from Quiapo by jeepney?', a: 'Yes. Quiapo is a common starting hub for Divisoria-bound jeepneys. Ride one toward Divisoria or Tutuban and alight at the 168 / Soler Street stop.' },
        { q: 'Is the jeepney safe with shopping bags?', a: 'Like any crowded public transport, keep your bag closed and in front of you, and stay alert near the door. A taxi or ride-hailing is easier if you are carrying a lot.' },
      ],
      related: ['lrt-to-divisoria', 'how-to-get-to-168-mall', 'divisoria-safety-tips'],
    },
    fil: {
      meta: {
        title: 'Jeepney papuntang 168 Mall: Ruta at Drop-off Tips',
        description:
          'Hanapin ang Divisoria at Tutuban jeepney, sabihin sa driver 168 / Soler Street, at planuhin ang lakarin. Praktikal na gabay sa Binondo.',
      },
      kicker: 'SA JEEPNEY',
      h1: 'Sakay ng Jeepney papuntang 168 Mall',
      lead: 'Ang jeepney ang pinakamurang link papuntang Divisoria. Alamin ang signboard at drop-off phrase bago sumakay.',
      facts: [
        { label: 'Hanapin', value: 'Divisoria / Tutuban signboards' },
        { label: 'Sabihin sa driver', value: '168 / Soler Street' },
        { label: 'Pamasahe', value: 'Small bills inirerekomenda' },
        { label: 'Huling lakad', value: 'Maikling lakad mula babaan' },
      ],
      sections: [
        {
          heading: 'Aling jeepney ang sasakyan',
          paragraphs: [
            'Hanapin ang jeepney na may signboard na Divisoria o Tutuban. Dumadaan ito mula sa hubs tulad ng Quiapo, Sta. Cruz at Recto papuntang market district.',
            'Sumakay sa designated stop, ihulog ang pamasahe sa coin box at abangan ang iyong stop.',
          ],
        },
        {
          heading: 'Sakay at drop-off',
          paragraphs: [
            'Sabihin sa driver na sa 168 / Soler Street ka bababa. Mula sa babaan, maikli ang lakad papuntang mall sa loob ng Divisoria–Binondo cluster.',
          ],
          bullets: [
            'Sabihin nang malinaw ang stop pagkasakay para maalala ng driver.',
            'Panatilihing nakaharap ang bag sa siksok na jeepney.',
            'Mag-ready ng small bills; minsan wala nang sukli ang driver sa malalaking bill.',
          ],
          callout:
            'Ang ruta at terminal ay nagbabago. Kumpirmahin ang kasalukuyang Divisoria jeepney loading point sa mga lokal o sa mall bago umasa sa fixed stop.',
        },
      ],
      faqs: [
        { q: 'Aling jeepney ang papuntang 168 Mall?', a: 'Ang anumang jeepney papuntang Divisoria o Tutuban ay dadaan malapit sa mall. Sumakay ng may signboard na iyon at humingi ng stop na 168 / Soler Street.' },
        { q: 'Magkano ang pamasahe sa jeepney?', a: 'Mababa ang pamasahe at cash ang bayad sa board. Magdala ng small bills at coins, dahil madalas walang sukli ang driver sa busy periods.' },
        { q: 'Pwede bang abutin ang 168 Mall mula Quiapo sa jeepney?', a: 'Oo. Ang Quiapo ay karaniwang starting hub ng Divisoria-bound jeepney. Sumakay papuntang Divisoria o Tutuban at bumaba sa 168 / Soler Street stop.' },
        { q: 'Ligtas ba ang jeepney kapag may shopping bags?', a: 'Tulad ng ibang siksok na public transport, panatilihing sarado at nakaharap ang bag, at maging alerto malapit sa pinto. Mas madali ang taxi kung marami kang bitbit.' },
      ],
      related: ['lrt-to-divisoria', 'how-to-get-to-168-mall', 'divisoria-safety-tips'],
    },
    zh: {
      meta: {
        title: '坐 Jeepney 到 168 Mall：路线与下车提示',
        description:
          '找 Divisoria / Tutuban 的 jeepney，告诉司机「168 / Soler Street」，并规划步行收尾。实用的 Binondo 乘车指南。',
      },
      kicker: '吉普车',
      h1: '坐 Jeepney 到 168 Mall',
      lead: 'Jeepney 是到 Divisoria 最便宜的交通方式。上车前先认准路线牌与下车说法。',
      facts: [
        { label: '认准', value: 'Divisoria / Tutuban 路线牌' },
        { label: '告诉司机', value: '168 / Soler Street' },
        { label: '车资', value: '建议备小额钞票' },
        { label: '最后步行', value: '下车后步行不远' },
      ],
      sections: [
        {
          heading: '该坐哪班 jeepney',
          paragraphs: [
            '找挂有 Divisoria 或 Tutuban 路线牌的 jeepney。它们从 Quiapo、Sta. Cruz、Recto 等枢纽开往市场区。',
            '在指定站点上车，把车资投入零钱箱，并留意你的站。',
          ],
        },
        {
          heading: '车上与下车',
          paragraphs: [
            '告诉司机你在「168 / Soler Street」下车。从下车点到商场，步行进入 Divisoria–Binondo 街区即可。',
          ],
          bullets: [
            '上车时清楚说出站名，司机才好记住。',
            '拥挤的 jeepney 里把包拉好并放在身前。',
            '备好小额钞票，司机高峰期常无零钱可找。',
          ],
          callout:
            '路线与站点会随时间变动。依赖固定站点前，请向当地人或商场确认当前 Divisoria jeepney 上车点。',
        },
      ],
      faqs: [
        { q: '哪班 jeepney 到 168 Mall？', a: '任何开往 Divisoria 或 Tutuban 的 jeepney 都会经过商场附近。搭挂该路线牌的车，并请在「168 / Soler Street」停靠。' },
        { q: 'jeepney 车资多少？', a: '车资低，车上付现金。备好小额钞票与硬币，高峰期司机常无法破开大钞。' },
        { q: '能从 Quiapo 坐 jeepney 到 168 Mall 吗？', a: '可以。Quiapo 是开往 Divisoria 的 jeepney 常用起点。搭前往 Divisoria 或 Tutuban 的车，在「168 / Soler Street」下车。' },
        { q: '带购物袋坐 jeepney 安全吗？', a: '和任何拥挤公共交通一样，包要扣好并放在身前、靠近车门时保持警觉。若带很多东西，出租车更轻松。' },
      ],
      related: ['lrt-to-divisoria', 'how-to-get-to-168-mall', 'divisoria-safety-tips'],
    },
  },

  '168-mall-opening-hours': {
    en: {
      meta: {
        title: '168 Mall Hours: When It Opens & Closes (2026)',
        description:
          '168 Shopping Mall is open Mon–Thu 9 AM–6 PM and Fri–Sun & holidays 9 AM–7 PM. Note the difference with Google Maps and confirm before travel.',
      },
      kicker: 'OPENING HOURS',
      h1: '168 Shopping Mall Opening Hours',
      lead: 'Hours come from the official mall website, which differs slightly from Google Maps. Use the official schedule as your starting point.',
      facts: [
        { label: 'Monday–Thursday', value: '9:00 AM – 6:00 PM' },
        { label: 'Friday–Sunday & holidays', value: '9:00 AM – 7:00 PM' },
        { label: 'Google Maps lists', value: '8:00 AM – 7:00 PM daily' },
        { label: 'Verify', value: 'Before travelling' },
      ],
      sections: [
        {
          heading: 'Official vs Google Maps',
          paragraphs: [
            'The official mall website lists Monday–Thursday 09:00–18:00 and Friday–Sunday and holidays 09:00–19:00.',
            'Google Maps differs, listing 08:00–19:00 daily. Use the official mall schedule as the starting point and confirm before travelling, especially on holidays or special dates.',
          ],
        },
        {
          heading: 'Holiday & special schedules',
          paragraphs: [
            'Special schedules can change around Philippine holidays and mall events. Individual stalls may also keep their own hours within the building.',
          ],
          callout:
            'Confirm the current schedule through official mall channels before you travel — opening times can shift without notice.',
        },
      ],
      faqs: [
        { q: 'What time does 168 Mall open?', a: 'The official schedule is 9:00 AM, Monday to Sunday. Google Maps shows 8:00 AM, so treat 9:00 AM as the reliable figure and confirm if you plan to arrive very early.' },
        { q: 'What days is it closed?', a: '168 Shopping Mall generally opens daily, including weekends and holidays, with extended hours on Friday–Sunday and holidays. There is no widely published fixed weekly closure day.' },
        { q: 'Why do the hours differ between sources?', a: 'The official mall website and Google Maps list different times. Always prefer the official mall schedule and call or check before travelling, especially around holidays.' },
        { q: 'Are all stores open at opening time?', a: 'Individual stalls set their own hours within the building, so some may open a little later than the mall’s general hours even on a normal day.' },
      ],
      related: ['best-time-to-visit-168-mall', '168-mall-entrance-fee'],
    },
    fil: {
      meta: {
        title: 'Oras ng 168 Mall: Kailan Bumabukas at Sumasara (2026)',
        description:
          'Ang 168 Shopping Mall ay bukas Lunes–Huwebes 9 AM–6 PM at Biyernes–Linggo at holidays 9 AM–7 PM. Pansinin ang kaibahan sa Google Maps at kumpirmahin bago bumiyahe.',
      },
      kicker: 'ORAS NG BUKA',
      h1: 'Oras ng Pagbukas ng 168 Shopping Mall',
      lead: 'Ang oras ay mula sa opisyal na website ng mall, na bahagyang kaiba sa Google Maps. Gamitin ang opisyal na schedule bilang simula.',
      facts: [
        { label: 'Lunes–Huwebes', value: '9:00 AM – 6:00 PM' },
        { label: 'Biyernes–Linggo at holidays', value: '9:00 AM – 7:00 PM' },
        { label: 'Google Maps lists', value: '8:00 AM – 7:00 PM araw-araw' },
        { label: 'Kumpirmahin', value: 'Bago bumiyahe' },
      ],
      sections: [
        {
          heading: 'Opisyal vs Google Maps',
          paragraphs: [
            'Ang opisyal na website ng mall ay may Lunes–Huwebes 09:00–18:00 at Biyernes–Linggo at holidays 09:00–19:00.',
            'Iba ang Google Maps: 08:00–19:00 araw-araw. Gamitin ang opisyal na schedule bilang simula at kumpirmahin bago bumiyahe, lalo na sa holidays o special dates.',
          ],
        },
        {
          heading: 'Holiday at special schedules',
          paragraphs: [
            'Ang special schedules ay pwedeng magbago sa paligid ng Philippine holidays at mall events. Ang bawat stall ay may sariling oras sa loob ng gusali.',
          ],
          callout:
            'Kumpirmahin ang kasalukuyang schedule sa opisyal na mall channels bago bumiyahe — pwedeng magbago ang oras nang walang abiso.',
        },
      ],
      faqs: [
        { q: 'Anong oras bumabukas ang 168 Mall?', a: 'Ang opisyal na schedule ay 9:00 AM, Lunes hanggang Linggo. Ang Google Maps ay 8:00 AM, kaya ituring ang 9:00 AM bilang reliable figure at kumpirmahin kung pupunta nang napakaaga.' },
        { q: 'Anong araw ito sarado?', a: 'Ang 168 Shopping Mall ay karaniwang bukas araw-araw, kasama ang weekends at holidays, na may extended hours tuwing Biyernes–Linggo at holidays. Walang widely published fixed weekly closure day.' },
        { q: 'Bakit magkaiba ang oras sa iba’t ibang sources?', a: 'Ang opisyal na website ng mall at Google Maps ay magkaibang oras ang nililista. Laging piliin ang opisyal na mall schedule at tumawag o mag-check bago bumiyahe, lalo na sa paligid ng holidays.' },
        { q: 'Bukas ba ang lahat ng stores sa opening time?', a: 'Ang bawat stall ay may sariling oras sa loob ng gusali, kaya ang iba ay bumabukas nang kaunti pang late kaysa general hours ng mall kahit ordinaryong araw.' },
      ],
      related: ['best-time-to-visit-168-mall', '168-mall-entrance-fee'],
    },
    zh: {
      meta: {
        title: '168 Mall 营业时间：几点开门关门（2026）',
        description:
          '168 Shopping Mall 周一至周四 9:00–18:00，周五至周日及节假日 9:00–19:00。注意与 Google Maps 的差异，出发前请确认。',
      },
      kicker: '营业时间',
      h1: '168 Shopping Mall 营业时间',
      lead: '营业时间来自商场官网，与 Google Maps 略有差异。请以官网时间表为基准。',
      facts: [
        { label: '周一至周四', value: '9:00–18:00' },
        { label: '周五至周日及节假日', value: '9:00–19:00' },
        { label: 'Google Maps 列', value: '每天 8:00–19:00' },
        { label: '确认', value: '出行前' },
      ],
      sections: [
        {
          heading: '官网 vs Google Maps',
          paragraphs: [
            '商场官网列周一至周四 09:00–18:00，周五至周日及节假日 09:00–19:00。',
            'Google Maps 则列每天 08:00–19:00。请以官网时间表为基准，并在出发前确认，尤其是节假日或特殊日期。',
          ],
        },
        {
          heading: '节假日与特殊时段',
          paragraphs: [
            '菲律宾节假日与商场活动前后，时间表可能调整。商场内各摊位也会自行决定营业时间。',
          ],
          callout:
            '出行前请通过商场官方渠道确认当前时间——营业时间可能在没有通知的情况下变动。',
        },
      ],
      faqs: [
        { q: '168 Mall 几点开门？', a: '官方时间为每天上午 9:00。Google Maps 显示 8:00，因此以 9:00 为可靠数字；若打算非常早到，请先确认。' },
        { q: '哪天关门？', a: '168 Shopping Mall 通常每天开放，含周末与节假日，周五至周日及节假日延长营业。没有广泛公布的固定每周休市日。' },
        { q: '为什么不同来源时间不一样？', a: '商场官网与 Google Maps 列的时间不同。请优先采用官网时间，并在出行前（尤其节假日）电话或上网确认。' },
        { q: '开门时所有店都开吗？', a: '商场内各摊位自行决定营业时间，因此即便平日，也有些会比商场整体时间稍晚开门。' },
      ],
      related: ['best-time-to-visit-168-mall', '168-mall-entrance-fee'],
    },
  },

  'best-time-to-visit-168-mall': {
    en: {
      meta: {
        title: 'Best Time to Visit 168 Mall (Avoid Crowds)',
        description:
          'Weekday mornings after opening are easiest. Weekends and holiday periods are busier. Tips to dodge the Divisoria crowds.',
      },
      kicker: 'TIMING',
      h1: 'Best Time to Visit 168 Shopping Mall',
      lead: 'Timing changes everything in Divisoria. A few hours of shift can mean a calmer, cooler, more productive shopping trip.',
      facts: [
        { label: 'Quietest', value: 'Weekday mornings' },
        { label: 'Busiest', value: 'Weekends & holidays' },
        { label: 'Suggested stay', value: '2–4 hours casual' },
        { label: 'Season', value: 'Dry months are popular' },
      ],
      sections: [
        {
          heading: 'Weekday mornings',
          paragraphs: [
            'Weekday mornings right after opening are generally the easiest for browsing — lighter crowds, cooler aisles and shorter queues at popular stalls.',
            'Weekends and holiday shopping periods are busier, with tighter walkways and longer waits.',
          ],
        },
        {
          heading: 'How long to plan',
          paragraphs: [
            'Allow 2–4 hours for casual browsing. Wholesale sourcing or detailed price canvassing can easily take half a day.',
            'If you are combining the trip with Binondo food or nearby malls, build in extra time so you are not rushing.',
          ],
          callout:
            'Arriving close to opening gives you the calmest first hour and the best pick of stock before the midday rush.',
        },
      ],
      faqs: [
        { q: 'What is the best day to visit 168 Mall?', a: 'A weekday, especially Tuesday to Thursday, is usually calmer than Friday to Sunday. Mornings right after the 9:00 AM opening are the most comfortable.' },
        { q: 'What is the best time of day?', a: 'Arrive near the 9:00 AM opening. You get cooler aisles, thinner crowds and first pick before the midday and weekend rush builds up.' },
        { q: 'How long should I spend there?', a: 'Plan 2–4 hours for casual shopping. If you are sourcing wholesale or comparing many stalls, set aside half a day.' },
        { q: 'Is it worth visiting with kids?', a: 'Yes, but choose a weekday morning and keep the visit short. See the family guide for stroller and rest-stop tips.' },
      ],
      related: ['168-mall-with-kids', '168-mall-opening-hours', 'divisoria-safety-tips'],
    },
    fil: {
      meta: {
        title: 'Pinakamagandang Oras sa 168 Mall (Iwas Siksik)',
        description:
          'Ang weekday mornings pagkatapos magbukas ay pinakamadali. Mas siksik ang weekends at holiday periods. Tips para iwas sa crowd ng Divisoria.',
      },
      kicker: 'PANAHON',
      h1: 'Pinakamagandang Oras sa 168 Shopping Mall',
      lead: 'Lahat ay nagbabago sa Divisoria depende sa oras. Ilang oras ng shift ay pwede mangahulugan ng mas kalmado at productive na shopping.',
      facts: [
        { label: 'Pinakatahimik', value: 'Umaga ng weekday' },
        { label: 'Pinakasiksik', value: 'Weekend tuwing holiday' },
        { label: 'Inirerekomendang tagal', value: '2–4 oras casual' },
        { label: 'Pananahon', value: 'Sikat ang dry months' },
      ],
      sections: [
        {
          heading: 'Weekday mornings',
          paragraphs: [
            'Ang weekday mornings pagkatapos magbukas ay karaniwang pinakamadali para mamili — mas kaunting tao, mas preskong aisle at maikling pila sa sikat na stalls.',
            'Mas siksik ang weekends at holiday shopping periods, may masikip na daan at mas mahabang hintayan.',
          ],
        },
        {
          heading: 'Gaano katagal ang plano',
          paragraphs: [
            'Maglaan ng 2–4 oras para sa casual browsing. Ang wholesale sourcing o detailed price canvassing ay pwede umabot ng kalahating araw.',
            'Kung isasabay ang Binondo food o malapit na mall, maglaan ng extra time para hindi nagmamadali.',
          ],
          callout:
            'Ang pagdating malapit sa opening ay nagbibigay ng pinakamahinahong unang oras at pinakamagandang pagpipilian bago ang tanghaling rush.',
        },
      ],
      faqs: [
        { q: 'Anong araw ang pinakamagandang bisitahin ang 168 Mall?', a: 'Ang weekday, lalo na Martes hanggang Huwebes, ay karaniwang mas kalmado kaysa Biyernes hanggang Linggo. Ang umaga pagkatapos ng 9:00 AM opening ay pinaka-comfortable.' },
        { q: 'Anong pinakamagandang oras ng araw?', a: 'Dumating malapit sa 9:00 AM opening. Mas preskong aisle, kaunting tao at first pick bago tumindi ang tanghaling rush.' },
        { q: 'Gaano katagal dapat manatili?', a: 'Magplano ng 2–4 oras para sa casual shopping. Kung wholesale sourcing o maraming stall ang ico-compare, maglaan ng kalahating araw.' },
        { q: 'Sulit ba bisitahin with kids?', a: 'Oo, pero piliin ang weekday morning at gawing maikli ang visita. Tingnan ang family guide para sa stroller at rest-stop tips.' },
      ],
      related: ['168-mall-with-kids', '168-mall-opening-hours', 'divisoria-safety-tips'],
    },
    zh: {
      meta: {
        title: '168 Mall 最佳游览时间（避开人潮）',
        description:
          '工作日开门后上午最轻松。周末与节假日更挤。避开 Divisoria 人潮的小贴士。',
      },
      kicker: '时机',
      h1: '168 Shopping Mall 最佳游览时间',
      lead: '在 Divisoria，时间差很关键。错开几小时，就能换来更从容、更凉快、更有效率的一趟购物。',
      facts: [
        { label: '最安静', value: '工作日上午' },
        { label: '最拥挤', value: '周末与节假日' },
        { label: '建议停留', value: '普通逛 2–4 小时' },
        { label: '季节', value: '旱季人气高' },
      ],
      sections: [
        {
          heading: '工作日上午',
          paragraphs: [
            '开门后不久的工作日上午通常最好逛——人少、通道凉快、热门摊位排队短。',
            '周末与节假日购物旺季更拥挤，过道更窄、等待更久。',
          ],
        },
        {
          heading: '预留多久',
          paragraphs: [
            '普通逛街建议 2–4 小时。若做批发采购或认真比价，半天很常见。',
            '若顺路安排 Binondo 美食或周边商场，请留足时间，避免赶场。',
          ],
          callout:
            '接近开门时到达，能享受最从容的第一小时，并在中午与周末人潮涌来前挑到更好的货。',
        },
      ],
      faqs: [
        { q: '哪天去 168 Mall 最好？', a: '工作日，尤其周二到周四，通常比周五到周日安静。上午 9:00 开门后最初一段时间最舒服。' },
        { q: '一天中什么时段最好？', a: '尽量在 9:00 开门时到达。通道更凉快、人更少，且能在中午与周末人潮前先挑一轮。' },
        { q: '应该逛多久？', a: '普通购物预留 2–4 小时。若做批发或比对很多摊位，请留半天。' },
        { q: '带小孩去值得吗？', a: '值得，但选工作日上午并控制时长。亲子建议请看家庭指南的推车与休息点提示。' },
      ],
      related: ['168-mall-with-kids', '168-mall-opening-hours', 'divisoria-safety-tips'],
    },
  },

  '168-mall-with-kids': {
    en: {
      meta: {
        title: '168 Mall with Kids: A Family Visiting Guide',
        description:
          'Visiting 168 Shopping Mall with children? Stroller tips, rest spots, food inside the mall and a calmer route for families in Divisoria.',
      },
      kicker: 'FAMILY',
      h1: 'Visiting 168 Mall with Kids',
      lead: 'Divisoria is energetic and crowded. With a little planning, families can shop comfortably and keep kids fed and rested.',
      facts: [
        { label: 'Stroller', value: 'Compact, carry if needed' },
        { label: 'Food', value: 'Familiar brands inside' },
        { label: 'Rest', value: 'Food court breaks' },
        { label: 'Best time', value: 'Weekday morning' },
      ],
      sections: [
        {
          heading: 'Getting around with a stroller',
          paragraphs: [
            'Aisles can get tight on busy days, so a compact stroller is easier than a full-sized one. In very crowded periods, carrying a toddler may actually be simpler than navigating a stroller.',
            'Use elevators where available and take breaks in the food areas rather than in the busy walkways.',
          ],
        },
        {
          heading: 'Keeping everyone comfortable',
          paragraphs: [
            'Bring water, a light layer and small snacks. The mall has familiar fast-food and snack brands inside, which helps with picky eaters.',
            'Plan a shorter visit — 1.5–2 hours is often enough for younger children before they tire.',
          ],
          callout:
            'Hold hands in crowds and agree on a meeting point near the entrance in case anyone gets separated.',
        },
      ],
      faqs: [
        { q: 'Is a stroller okay at 168 Mall?', a: 'Yes, but aisles get crowded. A compact, foldable stroller is easier; on peak days many families simply carry toddlers through the busiest sections.' },
        { q: 'Where can we eat with kids?', a: 'The mall has familiar fast-food and snack brands inside, convenient when you do not want to leave mid-shop. Binondo classics are a short walk or ride away if you want a sit-down meal.' },
        { q: 'Are there nursing or rest areas?', a: 'There is no widely advertised dedicated nursing room; the food court and quieter seating areas are the practical rest spots. Plan breaks there.' },
        { q: 'What is the best time to go with children?', a: 'A weekday morning right after opening is calmest and coolest — best for a shorter, lower-stress family visit.' },
      ],
      related: ['best-time-to-visit-168-mall', 'divisoria-safety-tips', '168-mall-parking'],
    },
    fil: {
      meta: {
        title: '168 Mall with Kids: Gabay sa Pamilya',
        description:
          'Bibisita sa 168 Shopping Mall with kids? Tips sa stroller, rest spots, food sa loob ng mall at mas kalmadong ruta para sa pamilya sa Divisoria.',
      },
      kicker: 'PAMILYA',
      h1: 'Pagbisita sa 168 Mall with Kids',
      lead: 'Masigla at siksik ang Divisoria. Sa kaunting plano, pwede pa ring mamili nang komportable ang pamilya at panatiling busog at rested ang mga bata.',
      facts: [
        { label: 'Duyaan ng bata', value: 'Compact, buhatin kung kailangan' },
        { label: 'Pagkain', value: 'Pamilyar na brands sa loob' },
        { label: 'Pahinga', value: 'Food court breaks' },
        { label: 'Pinakamainam', value: 'Weekday morning' },
      ],
      sections: [
        {
          heading: 'Paglibot with stroller',
          paragraphs: [
            'Ang aisle ay pwedeng maging siksik sa busy days, kaya mas madaling compact stroller kaysa full-sized. Sa sobrang siksik, mas simple ang buhatin ang toddler kaysa mag-stroller.',
            'Gamitin ang elevator kung available at magpahinga sa food areas sa halip na sa abalang walkway.',
          ],
        },
        {
          heading: 'Panatiling komportable ang lahat',
          paragraphs: [
            'Magdala ng tubig, light layer at maliliit na snack. May pamilyar na fast-food at snack brands sa loob ng mall, nakatulong sa picky eaters.',
            'Magplano ng maikling visita — 1.5–2 oras ay kadalasang sapat sa mas batang bata bago mapagod.',
          ],
          callout:
            'Hawakan ang kamay sa siksok at magkasundo ng meeting point malapit sa entrance kung sakaling maghiwalay.',
        },
      ],
      faqs: [
        { q: 'Okay ba ang stroller sa 168 Mall?', a: 'Oo, pero siksok ang aisle. Mas madaling compact, foldable stroller; sa peak days maraming pamilya ang bumabuhat na lang ng toddler sa pinakasiksok na parte.' },
        { q: 'Saan pwede kumain with kids?', a: 'May pamilyar na fast-food at snack brands sa loob ng mall, convenient kung ayaw mong umalis mid-shop. Ang Binondo classics ay maikling lakad o sakay kung gusto ng sit-down meal.' },
        { q: 'May nursing o rest area ba?', a: 'Walang widely advertised dedicated nursing room; ang food court at mas tahimik na seating areas ang practical na rest spots. Magplano ng breaks doon.' },
        { q: 'Anong pinakamainam na oras with children?', a: 'Ang weekday morning pagkatapos ng opening ay pinakamahinahon at presko — best para sa maikling, mababang-stress na family visit.' },
      ],
      related: ['best-time-to-visit-168-mall', 'divisoria-safety-tips', '168-mall-parking'],
    },
    zh: {
      meta: {
        title: '带娃逛 168 Mall：家庭游览指南',
        description:
          '带孩子去 168 Shopping Mall？推车建议、休息点、商场内餐饮，以及 Divisoria 更从容的家庭路线。',
      },
      kicker: '亲子',
      h1: '带孩子逛 168 Mall',
      lead: 'Divisoria 热闹又拥挤。稍作规划，全家也能逛得舒服，让孩子吃饱、休息好。',
      facts: [
        { label: '推车', value: '轻便款，必要时抱' },
        { label: '餐饮', value: '场内熟悉品牌' },
        { label: '休息', value: '美食区歇脚' },
        { label: '最佳时间', value: '工作日上午' },
      ],
      sections: [
        {
          heading: '带推车怎么逛',
          paragraphs: [
            '繁忙日通道会变窄，轻便折叠推车比全尺寸更好用。极度拥挤时，很多家长直接抱娃穿过最挤的区段。',
            '尽量用电梯，并在美食区休息，而不是挤在通道里。',
          ],
        },
        {
          heading: '让大家都舒服',
          paragraphs: [
            '带水、薄外套和小零食。商场内有熟悉的快餐与小吃品牌，对挑食的孩子更友好。',
            '行程短一点——幼儿通常在 1.5–2 小时后就会累。',
          ],
          callout:
            '人多处牵好手，并在入口附近约定集合点，以防走散。',
        },
      ],
      faqs: [
        { q: '168 Mall 能推婴儿车吗？', a: '可以，但通道拥挤。轻便折叠推车更好；高峰日许多家庭直接在最挤的区段抱娃。' },
        { q: '带孩子哪里吃？', a: '商场内有熟悉的快餐与小吃品牌，不想中途离开时很方便。若想坐下来吃，Binondo 老味道步行或短乘即达。' },
        { q: '有哺乳或休息区吗？', a: '没有广泛宣传的专用哺乳室；美食广场与较安静的座位区是实际的休息点，可在那里安排休息。' },
        { q: '带小孩什么时间去最好？', a: '开门后不久的工作日上午最从容、最凉快——最适合时间短、压力低的亲子行程。' },
      ],
      related: ['best-time-to-visit-168-mall', 'divisoria-safety-tips', '168-mall-parking'],
    },
  },

  'divisoria-safety-tips': {
    en: {
      meta: {
        title: 'Divisoria Safety Tips: Pickpocket & Crowd Guide',
        description:
          'Stay safe in Divisoria’s busy markets. Practical anti-theft, crowd and bag tips for shopping around 168 Mall and Binondo.',
      },
      kicker: 'STAY SAFE',
      h1: 'Safety Tips for Divisoria & 168 Mall',
      lead: 'Like any busy market district, Divisoria needs basic street smarts. A few habits keep your shopping bags and phone secure.',
      facts: [
        { label: 'Bag', value: 'Closed, worn in front' },
        { label: 'Phone', value: 'Avoid long display' },
        { label: 'Cash', value: 'Carry only what you need' },
        { label: 'Meeting point', value: 'Agree before shopping' },
      ],
      sections: [
        {
          heading: 'Anti-theft basics',
          paragraphs: [
            'Keep your bag closed and in front of you. Do not leave it on a stall or chair unattended.',
            'Avoid displaying your phone for long periods in crowds, and keep wallets in a front pocket or secure pouch.',
          ],
          bullets: [
            'Use a crossbody or zip bag worn to the front.',
            'Carry only the cash you expect to spend; keep cards separate.',
            'Be extra alert near jeepney doors and busy intersections.',
          ],
        },
        {
          heading: 'In the crowd',
          paragraphs: [
            'If you buy in bulk, agree on a pickup point so the group can regroup without panicking.',
            'Use marked crossings when available and watch your belongings on public transport.',
          ],
          callout:
            'This site is an independent, non-profit visitor guide and is not affiliated with any government agency or commercial operator. These are general precautions, not guarantees.',
        },
      ],
      faqs: [
        { q: 'Is Divisoria safe for visitors?', a: 'It is a normal, busy market district. Standard big-city precautions — secured bags, minimal displayed valuables and awareness in crowds — go a long way.' },
        { q: 'How do I avoid pickpockets?', a: 'Wear your bag in front, keep phones and wallets out of back pockets, and stay alert near transport doors and dense crowds. Bulk buyers should set a meeting point.' },
        { q: 'Is it safe at night?', a: 'The area is livelier and busier in daytime. If you stay late, keep to well-lit main streets, use a trusted ride home and stay aware of your surroundings.' },
        { q: 'What if something goes wrong?', a: 'Note the nearest help point or mall security, and keep a copy of important contacts. Report lost items to mall or local authorities promptly.' },
      ],
      related: ['168-mall-with-kids', 'best-time-to-visit-168-mall', 'jeepney-to-168-mall'],
    },
    fil: {
      meta: {
        title: 'Tips sa Kaligtasan sa Divisoria: Pickpocket at Crowd',
        description:
          'Maging ligtas sa abalang market ng Divisoria. Praktikal na anti-theft, crowd at bag tips para sa pamimili sa paligid ng 168 Mall at Binondo.',
      },
      kicker: 'MAGING LIGTAS',
      h1: 'Tips sa Kaligtasan para sa Divisoria at 168 Mall',
      lead: 'Tulad ng ibang abalang market district, ang Divisoria ay nangangailangan ng basic street smarts. Ilang habit ang nagpapanatiling ligtas ng shopping bags at phone mo.',
      facts: [
        { label: 'Bag', value: 'Sarado, suot sa harap' },
        { label: 'Telepono', value: 'Iwas sa mahabang display' },
        { label: 'Pera', value: 'Dala lang kailangan' },
        { label: 'Tagpuan', value: 'Pagkasunduan bago mamili' },
      ],
      sections: [
        {
          heading: 'Anti-theft basics',
          paragraphs: [
            'Panatilihing sarado at nasa harap ang bag. Huwag iwan ito sa stall o upuan nang walang bantay.',
            'Iwasang ipakita nang matagal ang phone sa siksok, at ilagay ang wallet sa front pocket o secure pouch.',
          ],
          bullets: [
            'Gamitin ang crossbody o zip bag na suot sa harap.',
            'Dala lang ang cash na gagastusin; ihiwalay ang cards.',
            'Maging alerto lalo na malapit sa pinto ng jeepney at abalang kalsada.',
          ],
        },
        {
          heading: 'Sa siksok',
          paragraphs: [
            'Kung bibili ng maramihan, magkasundong pickup point para makapag-group muli nang hindi nagpapanic.',
            'Gamitin ang marked crossings kung available at bantayan ang gamit sa public transport.',
          ],
          callout:
            'Ang site na ito ay independent, non-profit visitor guide at hindi kaakibat ng anumang ahensiya ng gobyerno o commercial operator. Ito ay general precautions, hindi garantiya.',
        },
      ],
      faqs: [
        { q: 'Ligtas ba ang Divisoria para sa mga bisita?', a: 'Ito ay normal na abalang market district. Ang standard na big-city precautions — secured bags, minimal na ipinapakitang valuables at awareness sa crowd — ay malaking tulong.' },
        { q: 'Paano iwasan ang pickpocket?', a: 'Suotin ang bag sa harap, panatilihing nasa labas ng back pocket ang phone at wallet, at maging alerto malapit sa pinto ng transport at siksok. Ang bulk buyers ay dapat may meeting point.' },
        { q: 'Ligtas ba sa gabi?', a: 'Mas maingay at mas siksik ang area sa daytime. Kung tatagal, manatili sa well-lit main streets, gumamit ng trusted ride pauwi at manatiling alerto sa paligid.' },
        { q: 'Ano kung may mangyaring masama?', a: 'Tandaan ang pinakamalapit na help point o mall security, at magkeep ng copy ng important contacts. I-report agad ang nawalang gamit sa mall o local authorities.' },
      ],
      related: ['168-mall-with-kids', 'best-time-to-visit-168-mall', 'jeepney-to-168-mall'],
    },
    zh: {
      meta: {
        title: 'Divisoria 安全提示：防盗与人潮指南',
        description:
          '在繁忙的 Divisoria 市场保持安全。围绕 168 Mall 与 Binondo 购物的实用防盗、人群与背包建议。',
      },
      kicker: '安全第一',
      h1: 'Divisoria 与 168 Mall 的安全提示',
      lead: '和任何热闹的市场区一样，Divisoria 需要基本的安全意识。几个习惯就能保护好购物袋和手机。',
      facts: [
        { label: '背包', value: '拉好、背在身前' },
        { label: '手机', value: '避免长时间外露' },
        { label: '现金', value: '只带要花的' },
        { label: '集合点', value: '购物前先约好' },
      ],
      sections: [
        {
          heading: '防盗基础',
          paragraphs: [
            '包要拉好并背在身前，不要随手放在摊位或椅子上无人看管。',
            '在人群中避免长时间亮出手机，钱包放在前袋或防盗袋里。',
          ],
          bullets: [
            '用斜挎或拉链包，并背到身前。',
            '只带预计要花的现金，银行卡分开存放。',
            '在 jeepney 车门与拥挤路口格外警觉。',
          ],
        },
        {
          heading: '在人潮中',
          paragraphs: [
            '若大量采购，先约定集合点，方便走散后重新会合而不慌张。',
            '有斑马线就走斑马线，并在公共交通上留意随身物品。',
          ],
          callout:
            '本站是独立的非营利游客指南，不与任何政府机构或商业运营方有关联。以上为一般性防范建议，并非保证。',
        },
      ],
      faqs: [
        { q: 'Divisoria 对游客安全吗？', a: '它是正常的繁忙市场区。大城市的基本防范——包收好、少露贵重物品、在人群中保持警觉——就很管用。' },
        { q: '怎么防扒手？', a: '包背身前，手机与钱包别放后袋，在车门与密集人群处保持警觉。大量采购者应约好集合点。' },
        { q: '晚上安全吗？', a: '白天更热闹。若逗留到较晚，请走照明良好的主街、用可信的网约车回家，并留意周围环境。' },
        { q: '万一出事怎么办？', a: '记住最近的求助点或商场安保，并保留重要联系方式副本。遗失物品请尽快向商场或当地警方报案。' },
      ],
      related: ['168-mall-with-kids', 'best-time-to-visit-168-mall', 'jeepney-to-168-mall'],
    },
  },

  '168-mall-entrance-fee': {
    en: {
      meta: {
        title: 'Is 168 Mall Free? Entrance & Access Guide',
        description:
          '168 Shopping Mall is free to enter for shopping. This guide covers access, no tickets sold here, and what costs extra (food, parking, transport).',
      },
      kicker: 'ADMISSION',
      h1: 'Is 168 Shopping Mall Free to Enter?',
      lead: 'Good news for planners: walking in to browse and shop costs nothing. This page clarifies access and what you actually pay for.',
      facts: [
        { label: 'Entry', value: 'Free to enter' },
        { label: 'Tickets', value: 'None sold here' },
        { label: 'Extra costs', value: 'Shopping, food, parking' },
        { label: 'Official', value: 'Confirm event rules' },
      ],
      sections: [
        {
          heading: 'No ticket to enter',
          paragraphs: [
            '168 Shopping Mall is free to enter for shopping and browsing. Confirm any event or access rules with the mall, since special events can change how areas are used.',
            'This guide does not sell tickets and is not the mall’s official website.',
          ],
        },
        {
          heading: 'What costs money',
          paragraphs: [
            'Shopping, food, transport and parking are separate expenses. Bring a budget for purchases and small cash for stalls that prefer it.',
          ],
          bullets: [
            'Stalls set their own prices; ask about best or wholesale rates for multiple pieces.',
            'Food courts and snacks are paid separately inside the mall.',
            'Parking, if you drive, is a separate on-site fee.',
          ],
          callout:
            'Confirm any event or access rules with the mall before travelling; this guide cannot guarantee specific building access during special events.',
        },
      ],
      faqs: [
        { q: 'Is 168 Mall free to enter?', a: 'Yes. Walking in to browse and shop is free. There is no general admission ticket for the mall.' },
        { q: 'Do I need a ticket?', a: 'No ticket is needed to enter for normal shopping. Only special events might have their own rules, which you should confirm with the mall.' },
        { q: 'Are there fees inside?', a: 'You pay for what you buy — goods, food and parking are separate. Entry itself is free.' },
        { q: 'Does this guide sell tickets?', a: 'No. This is a free, independent visitor guide and not the mall’s official website. We do not sell or reserve tickets.' },
      ],
      related: ['168-mall-parking', '168-mall-opening-hours'],
    },
    fil: {
      meta: {
        title: 'Libre ba ang 168 Mall? Gabay sa Pasok at Access',
        description:
          'Ang 168 Shopping Mall ay libre pumasok para mamili. Sakop ng gabay na ito ang access, walang ticket na binebenta, at ano ang may extra cost (food, parking, transport).',
      },
      kicker: 'PASOK',
      h1: 'Libre bang Pumasok sa 168 Shopping Mall?',
      lead: 'Magandang balita para sa mga planner: ang pagpasok para mamili ay walang bayad. Lilinawin ng page na ito ang access at kung saan ka talaga nagbabayad.',
      facts: [
        { label: 'Pagpasok', value: 'Libre pumasok' },
        { label: 'Tiket', value: 'Wala ritong binebenta' },
        { label: 'Extras', value: 'Shopping, food, parking' },
        { label: 'Opisyal', value: 'Kumpirmahin event rules' },
      ],
      sections: [
        {
          heading: 'Walang ticket para pumasok',
          paragraphs: [
            'Ang 168 Shopping Mall ay libre pumasok para mamili at mag-browse. Kumpirmahin ang anumang event o access rules sa mall, dahil ang special events ay pwedeng magbago ng gamit ng areas.',
            'Hindi nagbebenta ng ticket ang gabay na ito at hindi ito opisyal na website ng mall.',
          ],
        },
        {
          heading: 'Ano ang may bayad',
          paragraphs: [
            'Ang shopping, food, transport at parking ay magkakaibang gastos. Magdala ng budget para sa purchases at small cash para sa stalls na pabor doon.',
          ],
          bullets: [
            'Ang bawat stall ay may sariling presyo; magtanong ng best o wholesale rate para sa maramihan.',
            'Ang food courts at snacks ay bayad nang hiwalay sa loob ng mall.',
            'Ang parking, kung magdadala ng sasakyan, ay hiwalay na fee sa lugar.',
          ],
          callout:
            'Kumpirmahin ang anumang event o access rules sa mall bago bumiyahe; hindi matitiyak ng gabay na ito ang specific building access sa special events.',
        },
      ],
      faqs: [
        { q: 'Libre bang pumasok sa 168 Mall?', a: 'Oo. Ang pagpasok para mag-browse at mamili ay libre. Walang general admission ticket para sa mall.' },
        { q: 'Kailangan ba ng ticket?', a: 'Walang ticket na kailangan para pumasok para sa normal shopping. Ang special events lang ang pwedeng may sariling rules, na dapat kumpirmahin sa mall.' },
        { q: 'May fee ba sa loob?', a: 'Bayad ang binibili mo — ang goods, food at parking ay hiwalay. Ang pagpasok mismo ay libre.' },
        { q: 'Nagbebenta ba ng ticket ang gabay na ito?', a: 'Hindi. Ito ay free, independent visitor guide at hindi opisyal na website ng mall. Hindi kami nagbebenta o nagre-reserve ng ticket.' },
      ],
      related: ['168-mall-parking', '168-mall-opening-hours'],
    },
    zh: {
      meta: {
        title: '168 Mall 要门票吗？入场与通行指南',
        description:
          '168 Shopping Mall 购物免费入场。本页说明通行、这里不售票，以及哪些要另付费（餐饮、停车、交通）。',
      },
      kicker: '门票',
      h1: '168 Shopping Mall 要门票吗？',
      lead: '对计划者是个好消息：进来逛街购物不花钱。本页厘清通行方式，以及你实际要付的是什么。',
      facts: [
        { label: '入场', value: '免费进入' },
        { label: '门票', value: '此处不出售' },
        { label: '额外费用', value: '购物、餐饮、停车' },
        { label: '官方', value: '确认活动规定' },
      ],
      sections: [
        {
          heading: '入场无需门票',
          paragraphs: [
            '168 Shopping Mall 逛街购物免费入场。请向商场确认任何活动或通行规定，因为特殊活动可能改变区域用途。',
            '本站不售票，也不是商场官方网站。',
          ],
        },
        {
          heading: '哪些要花钱',
          paragraphs: [
            '购物、餐饮、交通与停车是分开的费用。请为采购准备预算，并备小额现金给偏好现金的摊位。',
          ],
          bullets: [
            '各摊位自定价格；多件可询问最优价或批发价。',
            '美食广场与小吃在商场内另行付费。',
            '若自驾，停车是现场另收的费用。',
          ],
          callout:
            '出行前请向商场确认任何活动或通行规定；本站无法保证特殊活动期间的特定通行安排。',
        },
      ],
      faqs: [
        { q: '168 Mall 免费入场吗？', a: '是的。进来逛街购物免费，商场没有通用的入场门票。' },
        { q: '需要门票吗？', a: '正常购物无需门票。只有特殊活动可能有自己的规定，请向商场确认。' },
        { q: '场内要付费吗？', a: '你只为买的东西付钱——商品、餐饮、停车都另计。入场本身免费。' },
        { q: '本站卖门票吗？', a: '不卖。这是免费的独立游客指南，并非商场官网，不售卖或预订门票。' },
      ],
      related: ['168-mall-parking', '168-mall-opening-hours'],
    },
  },

  '168-mall-from-naia': {
    en: {
      meta: {
        title: '168 Mall from NAIA Airport: Routes & Cost',
        description:
          'From NAIA to 168 Mall: taxi or ride-hailing direct to 918 Soler St is easiest with luggage; budget options use EDSA/LRT. Times and tips.',
      },
      kicker: 'FROM THE AIRPORT',
      h1: 'Getting from NAIA to 168 Shopping Mall',
      lead: 'Landing at Ninoy Aquino International Airport? With luggage, a direct taxi or ride-hailing trip to Binondo is the simplest start.',
      facts: [
        { label: 'Easy option', value: 'Taxi / ride-hailing direct' },
        { label: 'Budget option', value: 'EDSA / LRT transfer' },
        { label: 'Distance', value: 'Around 10–12 km' },
        { label: 'Travel time', value: '40–90 min by road' },
      ],
      sections: [
        {
          heading: 'Direct by taxi or ride-hailing',
          paragraphs: [
            'From any NAIA terminal, the most straightforward option with luggage is a taxi or ride-hailing service direct to 918 Soler St.',
            'Expect congestion around the market streets near Divisoria, so build in buffer time if you have a flight or appointment afterward.',
          ],
        },
        {
          heading: 'Budget via EDSA / LRT',
          paragraphs: [
            'For a more budget-friendly route, take an airport transfer or city bus toward EDSA / Taft Avenue, then switch to LRT-1 to Doroteo Jose and a jeepney to Divisoria.',
            'This saves money but takes longer and involves more transfers — allow extra time during peak hours.',
          ],
          callout:
            'Road time varies widely with Manila traffic. If you are heading to the airport after shopping, leave earlier than the estimate to avoid missing a flight.',
        },
      ],
      faqs: [
        { q: 'What is the easiest way from NAIA to 168 Mall?', a: 'A taxi or ride-hailing trip direct to 918 Soler St is easiest with luggage. It avoids multiple transfers and drops you close to the mall.' },
        { q: 'How much does a taxi from the airport cost?', a: 'Metered airport taxis and ride-hailing use metered or quoted fares that vary with traffic and terminal. Agree on the meter or confirm the app fare before you ride.' },
        { q: 'How long is the trip?', a: 'By road it is typically 40–90 minutes depending on traffic, with the longer end during rush hours and around Divisoria.' },
        { q: 'Is there a budget way from NAIA?', a: 'Yes: an airport bus or transfer to EDSA / Taft, then LRT-1 to Doroteo Jose and a jeepney to Divisoria. Cheaper but slower and with transfers.' },
      ],
      related: ['how-to-get-to-168-mall', 'lrt-to-divisoria', '168-mall-parking'],
    },
    fil: {
      meta: {
        title: '168 Mall mula NAIA Airport: Ruta at Gastos',
        description:
          'Mula NAIA papuntang 168 Mall: taxi o ride-hailing direct sa 918 Soler St ang pinakamadali may bag; ang budget options ay EDSA/LRT. Oras at tips.',
      },
      kicker: 'MULA SA AIRPORT',
      h1: 'Pagpunta mula NAIA papuntang 168 Shopping Mall',
      lead: 'Bababa sa Ninoy Aquino International Airport? May bag, ang direktang taxi o ride-hailing papuntang Binondo ang pinakasimpleng simula.',
      facts: [
        { label: 'Madaling opsyon', value: 'Taxi / ride-hailing direct' },
        { label: 'Opsyong tipid', value: 'EDSA / LRT transfer' },
        { label: 'Distansya', value: 'Mga 10–12 km' },
        { label: 'Tagal ng biyahe', value: '40–90 min by road' },
      ],
      sections: [
        {
          heading: 'Direct sa taxi o ride-hailing',
          paragraphs: [
            'Mula sa kahit anong NAIA terminal, ang pinakastraightforward na opsyon may bag ay taxi o ride-hailing direct sa 918 Soler St.',
            'Asahan ang siksok sa paligid ng market streets malapit sa Divisoria, kaya maglaan ng buffer time kung may flight o appointment pagkatapos.',
          ],
        },
        {
          heading: 'Budget via EDSA / LRT',
          paragraphs: [
            'Para sa mas tipid na ruta, sumakay ng airport transfer o city bus papuntang EDSA / Taft Avenue, tapos LRT-1 papuntang Doroteo Jose at jeepney papuntang Divisoria.',
            'Nakatipid pero mas matagal at maraming transfers — maglaan ng extra time sa peak hours.',
          ],
          callout:
            'Ang road time ay umaabo nang malaki depende sa traffic ng Manila. Kung papuntang airport after shopping, umalis nang mas maaga sa estimate para hindi ma-miss ang flight.',
        },
      ],
      faqs: [
        { q: 'Ano ang pinakamadaling paraan mula NAIA papuntang 168 Mall?', a: 'Ang taxi o ride-hailing direct sa 918 Soler St ang pinakamadali may bag. Iwas sa maraming transfers at ibinababa malapit sa mall.' },
        { q: 'Magkano ang taxi mula airport?', a: 'Ang metered airport taxi at ride-hailing ay may metered o quoted fare na nagbabago ayon sa traffic at terminal. Sumang-ayon sa meter o ikumpirma ang app fare bago sumakay.' },
        { q: 'Gaano katagal ang biyahe?', a: 'Sa kalsada karaniwang 40–90 minuto depende sa traffic, mas mahaba tuwing rush hours at paligid ng Divisoria.' },
        { q: 'May budget way ba mula NAIA?', a: 'Oo: airport bus o transfer papuntang EDSA / Taft, tapos LRT-1 papuntang Doroteo Jose at jeepney papuntang Divisoria. Mas mura pero mas mabagal at may transfers.' },
      ],
      related: ['how-to-get-to-168-mall', 'lrt-to-divisoria', '168-mall-parking'],
    },
    zh: {
      meta: {
        title: '从 NAIA 机场到 168 Mall：路线与费用',
        description:
          '从 NAIA 到 168 Mall：带行李时出租车或网约车直达 918 Soler St 最轻松；省钱走 EDSA / LRT。时间与贴士。',
      },
      kicker: '从机场',
      h1: '从 NAIA 到 168 Shopping Mall',
      lead: '降落在尼诺伊·阿基诺国际机场？带行李时，直接打车或网约车去 Binondo 是最简单的开始。',
      facts: [
        { label: '轻松之选', value: '出租车 / 网约车直达' },
        { label: '省钱之选', value: 'EDSA / LRT 换乘' },
        { label: '距离', value: '约 10–12 公里' },
        { label: '车程', value: '陆路 40–90 分钟' },
      ],
      sections: [
        {
          heading: '出租车或网约车直达',
          paragraphs: [
            '从任一 NAIA 航站楼，带行李时最直截了当的是出租车或网约车直达 918 Soler St。',
            'Divisoria 周边市场街道容易堵车，若之后还有航班或约见，请预留缓冲时间。',
          ],
        },
        {
          heading: '经 EDSA / LRT 省钱',
          paragraphs: [
            '想更省钱，可先搭机场接驳或市区公交前往 EDSA / Taft Avenue，再换乘 LRT-1 到 Doroteo Jose，最后坐 jeepney 到 Divisoria。',
            '省钱但更久、换乘更多——高峰时段请留足时间。',
          ],
          callout:
            '陆路时间随马尼拉交通波动很大。若购物后要去机场，请比预估更早出发，以免误机。',
        },
      ],
      faqs: [
        { q: '从 NAIA 到 168 Mall 最轻松的方式？', a: '带行李时，出租车或网约车直达 918 Soler St 最轻松，免换乘，且下车点靠近商场。' },
        { q: '从机场打车多少钱？', a: '机场计程车与网约车按表或报价收费，随交通与航站楼变动。上车前确认跳表或 App 报价。' },
        { q: '车程多久？', a: '陆路通常 40–90 分钟，视交通而定，高峰时段与 Divisoria 周边会更久。' },
        { q: '从 NAIA 有省钱方式吗？', a: '有：机场公交或接驳到 EDSA / Taft，再 LRT-1 到 Doroteo Jose、jeepney 到 Divisoria。更便宜但更慢且需换乘。' },
      ],
      related: ['how-to-get-to-168-mall', 'lrt-to-divisoria', '168-mall-parking'],
    },
  },
};

export function getTopic(slug: string, locale: TopicLocale): TopicContent | undefined {
  return topicContent[slug as TopicSlug]?.[locale];
}

export function topicSlugsForLocale(locale: TopicLocale): TopicSlug[] {
  return TOPIC_SLUGS.filter((s) => topicContent[s]?.[locale]);
}

// Localized section labels for the internal-link grids (homepage + topic pages).
export const topicGridUi: Record<TopicLocale, { label: string; title: string; body: string; relatedLabel: string; relatedTitle: string }> = {
  fil: {
    label: 'KARAGDAGANG GABAY',
    title: 'Mga praktikal na gabay para sa 168 Mall',
    body: 'Isa pang tingin sa pagpunta, parking, oras at kaligtasan sa paligid ng 168 Shopping Mall.',
    relatedLabel: 'SUBUKAN DIN',
    relatedTitle: 'Kaugnay na gabay',
  },
  en: {
    label: 'MORE GUIDES',
    title: 'Practical guides around 168 Mall',
    body: 'Deeper looks at getting here, parking, opening hours and staying safe around 168 Shopping Mall and Divisoria.',
    relatedLabel: 'RELATED',
    relatedTitle: 'Related guides',
  },
  zh: {
    label: '更多指南',
    title: '168 Mall 周边实用指南',
    body: '深入了解如何到达、停车、营业时间，以及在 168 Mall 与 Divisoria 周边的安全贴士。',
    relatedLabel: '相关阅读',
    relatedTitle: '相关指南',
  },
};
