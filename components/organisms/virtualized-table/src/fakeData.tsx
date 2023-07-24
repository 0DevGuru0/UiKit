import { StyledTableCell } from '.';

export const columnConfig = [
  {
    label: 'Index',
    columnKey: 'index',
    width: 80,
    // renderer: (args) => <div>custom renderer</div>,
  },
  {
    label: 'Initials',
    columnKey: 'initials',
    width: 50,
    // renderer: (args) => <div>custom renderer</div>,
  },
  {
    label: 'Name',
    columnKey: 'name',
    width: 200,
    headerRenderer: (args: any) => (
      <StyledTableCell style={{ border: '1px solid black' }}>{'Custom'}</StyledTableCell>
    ),
    // renderer: (args) => <div>custom renderer</div>,
  },
  {
    label: 'Color',
    columnKey: 'bgColor',
    width: 80,
    renderer: (args: any) => {
      return (
        <StyledTableCell style={{ backgroundColor: args.value }}>
          {args.value}
        </StyledTableCell>
      );
    },
  },
  {
    label: 'Job Title',
    columnKey: 'jobTitle',
    width: 300,
    // renderer: '?',
  },
  {
    label: 'Description',
    columnKey: 'description',
    width: 500,
    // renderer: '?',
  },
  {
    label: 'Other',
    columnKey: 'longText',
    width: 500,
    // renderer: '?',
  },
];

export const data = [
  {
    index: 1,
    bgColor: 'white',
    name: 'Henriette Streich',
    initials: 'AD',
    jobTitle: 'Human Solutions Assistant',
    description: 'Quia sunt voluptatem quos hic voluptas fuga sit voluptatum magni.',
    longText:
      'Doloremque dicta et. Suscipit illum recusandae provident dolore voluptate nulla excepturi perspiciatis vitae. Dolor quas optio.',
  },
  {
    index: 2,
    bgColor: 'red',
    name: 'AAAAAA BBBBB',
    initials: 'AD',
    jobTitle: 'Direct Group Associate',
    description:
      'Quisquam hic ducimus reiciendis velit dolorem dignissimos laborum consequatur quibusdam.',
    longText:
      'Et provident sequi placeat molestias voluptas. Reiciendis nesciunt sint enim distinctio eveniet. Quia repellat fuga quod explicabo et accusantium vel. Quia occaecati recusandae. Totam excepturi dolorum non odio sit.',
  },
  {
    index: 3,
    bgColor: 'blue',
    name: 'Melyna Marks',
    initials: 'MM',
    jobTitle: 'Product Marketing Specialist',
    description:
      'Inventore alias omnis possimus voluptate minima molestiae in unde dolor.',
    longText:
      'Beatae eos magni adipisci quam nihil numquam dolore unde. Autem et eum id nemo velit aliquam. Consequatur eaque omnis est soluta incidunt.',
  },
  {
    index: 4,
    bgColor: '#f5f5f5',
    name: 'Carmen Sauer',
    initials: 'CS',
    jobTitle: 'Global Program Liaison',
    description:
      'Praesentium sint autem ex debitis iste numquam aliquid quisquam minima.',
    longText:
      'Aut pariatur iure aspernatur ullam error. Dolorum saepe minus quidem officiis ab dolor. Aut ratione qui maiores dolore amet doloremque recusandae eius dolores. Exercitationem culpa minus nostrum minus. Quis commodi ipsam.',
  },
  {
    index: 5,
    bgColor: 'white',
    name: 'Nikita Hand',
    initials: 'NH',
    jobTitle: 'Direct Paradigm Orchestrator',
    description: 'Minus illum ut numquam vel ea rerum labore repudiandae harum.',
    longText:
      'Nisi sit quam ab rerum voluptatem est corporis. Corporis ullam voluptates ut. Rerum quaerat est. Iure nisi assumenda rerum eaque amet itaque dicta quia. Maxime recusandae ut quia ratione. Ipsam accusantium eveniet est enim quod.',
  },
  {
    index: 6,
    bgColor: '#f5f5f5',
    name: 'Pansy Dietrich',
    initials: 'PD',
    jobTitle: 'Lead Data Technician',
    description:
      'Rem aliquam animi dolores consequuntur ab quo optio corrupti laboriosam.',
    longText:
      'Quo fugiat ea et illum veniam. Sit officia cupiditate et. Odit nisi est suscipit. Vel et expedita sit quam voluptates illo molestiae nihil esse. Rerum aperiam sequi iste quis. Quaerat maiores adipisci dolores eum fuga tempore est eum perferendis.',
  },
  {
    index: 7,
    bgColor: 'white',
    name: 'Marian Tromp',
    initials: 'MT',
    jobTitle: 'Lead Paradigm Administrator',
    description: 'Est asperiores non aut sed animi aspernatur quisquam tempore eos.',
    longText:
      'Veritatis et itaque id minima amet ut reprehenderit. Est suscipit et tenetur sint rerum sunt. Nam pariatur quae quo voluptatibus perspiciatis voluptatem. Amet aut recusandae laboriosam autem assumenda magni. Vero laborum rerum et necessitatibus nisi labore ad.',
  },
  {
    index: 8,
    bgColor: '#f5f5f5',
    name: 'Iliana Bauch',
    initials: 'IB',
    jobTitle: 'District Communications Officer',
    description:
      'Repudiandae culpa amet corrupti saepe aliquam animi magnam nisi sapiente.',
    longText:
      'Nostrum praesentium aperiam voluptas ut aspernatur voluptatem voluptatem ab sed. Consequuntur sit qui quis ullam sunt odio molestiae velit. Quis debitis velit doloremque harum. Perspiciatis eum illum cumque minus quae. Quia temporibus nobis eum voluptate ut vel rerum eos cumque. Voluptatem accusantium ab assumenda.',
  },
  {
    index: 9,
    bgColor: 'white',
    name: 'Nash Farrell',
    initials: 'NF',
    jobTitle: 'District Accounts Producer',
    description: 'Sapiente in voluptas sed sed sequi cum qui non atque.',
    longText:
      'Porro voluptatibus dolores totam sed architecto tenetur iste modi. Molestias veritatis consequuntur voluptatem iure cum. Odit odit culpa accusamus ullam ut. Optio dolorem nisi qui.',
  },
  {
    index: 10,
    bgColor: '#f5f5f5',
    name: 'Cristobal Reichert',
    initials: 'CR',
    jobTitle: 'Investor Applications Supervisor',
    description:
      'Voluptas deserunt nostrum amet fuga veniam fugit natus nihil assumenda.',
    longText:
      'Nulla est quis. Ut minima autem quae qui sunt consequatur fuga repellat. Ipsam non suscipit deserunt tempore quod harum sequi. Autem optio aut. Quos non iste qui et soluta placeat. Quia ipsam illo sit et a.',
  },
  {
    index: 11,
    bgColor: 'white',
    name: 'Colten Hilpert',
    initials: 'CH',
    jobTitle: 'Senior Web Director',
    description: 'Eaque et sunt voluptates sint eos non illum dolorum libero.',
    longText:
      'Ut sunt amet laborum quaerat eos aliquam doloremque sapiente. Nihil quaerat fugiat rem nam eius autem voluptatem illo. Magni quia ut dolorem et alias nostrum ipsa omnis. Delectus vel consequatur beatae debitis quos dolores. Omnis dolorum facilis sed in. Optio aperiam aut incidunt et rerum deleniti consequatur.',
  },
  {
    index: 12,
    bgColor: '#f5f5f5',
    name: 'Kale Collier',
    initials: 'KC',
    jobTitle: 'Legacy Intranet Architect',
    description: 'Accusamus quis id non maiores in voluptatem sunt deserunt et.',
    longText:
      'Non nostrum perspiciatis ut ipsum aut qui earum architecto adipisci. Qui voluptatem aut nulla odio sint facilis. Rerum eveniet autem maiores explicabo sunt alias. Et accusamus eius. Quia ut velit temporibus magnam ex dolorem quisquam amet. Sunt ipsa cupiditate non qui.',
  },
  {
    index: 13,
    bgColor: 'white',
    name: 'Bryana Howell',
    initials: 'BH',
    jobTitle: 'Legacy Web Representative',
    description: 'Minus voluptatum eos nihil quasi minus natus nesciunt nihil dolores.',
    longText:
      'Quo qui quo excepturi fugiat et aut accusamus et suscipit. Qui est voluptate est voluptates. Qui repellat esse dolores aperiam et sequi sit et. Veniam vitae consequatur.',
  },
  {
    index: 14,
    bgColor: '#f5f5f5',
    name: 'Nils Sipes',
    initials: 'NS',
    jobTitle: 'Forward Creative Assistant',
    description:
      'Repudiandae ut voluptatibus provident quo iusto incidunt ut iste omnis.',
    longText:
      'Consequatur sequi tenetur. Aspernatur consequatur at nesciunt. Quidem non veritatis et est vero ut.',
  },
  {
    index: 15,
    bgColor: 'white',
    name: 'Aurelia Hane',
    initials: 'AH',
    jobTitle: 'Human Brand Officer',
    description: 'Ut sed aut ullam quas id voluptas labore rerum molestiae.',
    longText:
      'Inventore odio sint nostrum. Vitae reiciendis soluta repellat incidunt fugit. Corporis voluptatem enim dolores architecto nulla. Voluptatum veritatis assumenda dolores maiores veniam molestiae similique aut. Illo deserunt iste quo quidem qui quisquam reiciendis ab. Voluptatibus quae laudantium.',
  },
  {
    index: 16,
    bgColor: '#f5f5f5',
    name: 'Rahul Homenick',
    initials: 'RH',
    jobTitle: 'Legacy Branding Officer',
    description: 'Debitis laborum suscipit harum fugit ab ab incidunt in eos.',
    longText:
      'Quia voluptate cupiditate. Quos et est. Qui aspernatur nesciunt ea sed rem sed et molestiae. Rerum minima laboriosam occaecati rem.',
  },
  {
    index: 17,
    bgColor: 'white',
    name: 'Jovani Schultz',
    initials: 'JS',
    jobTitle: 'International Usability Producer',
    description:
      'Dolorum asperiores velit iusto occaecati occaecati quia alias suscipit nemo.',
    longText:
      'Pariatur est culpa possimus recusandae. Est architecto non totam quaerat aspernatur adipisci saepe ducimus quo. Non minima totam nulla nam. Laborum sit cumque facilis minus corporis. Eos sit fuga et dolore voluptatem perspiciatis. Unde vitae optio ut autem.',
  },
  {
    index: 18,
    bgColor: '#f5f5f5',
    name: 'Nora Lowe',
    initials: 'NL',
    jobTitle: 'Lead Directives Technician',
    description:
      'Consequatur enim occaecati similique est molestiae cum aperiam accusamus praesentium.',
    longText:
      'Aut aut asperiores. Consequuntur nihil consectetur vel corporis tempora. Animi quos aut voluptatem saepe illum occaecati ratione velit. Numquam ut eos saepe ipsum magnam earum non. Ea quasi aut beatae excepturi illo ut.',
  },
  {
    index: 19,
    bgColor: 'white',
    name: 'Roderick Barton',
    initials: 'RB',
    jobTitle: 'Future Implementation Representative',
    description: 'Eveniet illo beatae deserunt fuga molestiae dolor alias tempora aut.',
    longText:
      'Dignissimos eaque voluptas est totam et. Impedit fugiat vel sint sunt iste. Iure nobis quo veniam. Totam mollitia et aut dignissimos ut libero qui rerum. Id aliquid quia reiciendis sit.',
  },
  {
    index: 20,
    bgColor: '#f5f5f5',
    name: 'Lilian Schinner',
    initials: 'LS',
    jobTitle: 'Direct Quality Specialist',
    description:
      'Debitis omnis aut similique eos doloremque eveniet molestiae eligendi corrupti.',
    longText:
      'Qui porro magni est aut mollitia. Non quia placeat architecto aut facilis ut natus. Id necessitatibus soluta qui est modi quo quos et blanditiis. Quis omnis velit deleniti. Tempora id dicta in autem sit asperiores sit itaque. Voluptate rerum accusantium beatae voluptatem est minima ut corrupti qui.',
  },
  {
    index: 21,
    bgColor: 'white',
    name: 'Ara Stehr',
    initials: 'AS',
    jobTitle: 'Direct Data Agent',
    description: 'Corporis ut a ducimus autem unde et exercitationem rerum officiis.',
    longText:
      'Est in itaque necessitatibus vel magni quia. Omnis voluptatem unde ducimus ut labore eveniet. Odio asperiores cum provident nesciunt molestiae tempora doloribus et. Sit id est eos ad aut. Quia voluptas ut. Odio ut est odit aliquam earum qui iusto.',
  },
  {
    index: 22,
    bgColor: '#f5f5f5',
    name: 'Miles Weber',
    initials: 'MW',
    jobTitle: 'Lead Metrics Strategist',
    description: 'Expedita eaque qui tempora omnis iste unde minus dicta omnis.',
    longText:
      'Dolor explicabo accusamus ut architecto at quia. Asperiores debitis accusamus. Animi neque tempora. Sequi corporis consequuntur qui mollitia cupiditate et minima. Maiores ad unde et culpa sit nobis quod consequatur. Sed porro voluptatem velit reiciendis accusamus corrupti pariatur reiciendis labore.',
  },
  {
    index: 23,
    bgColor: 'white',
    name: 'Brendon Howe',
    initials: 'BH',
    jobTitle: 'Human Branding Specialist',
    description: 'Iusto hic vero est quo illo natus et mollitia vero.',
    longText:
      'Placeat maiores architecto dignissimos accusantium sed. Magni nisi perspiciatis pariatur molestiae quaerat repellat et dicta. Sint suscipit veritatis error sed eum. Similique omnis numquam iste.',
  },
  {
    index: 24,
    bgColor: '#f5f5f5',
    name: 'Doug Dickens',
    initials: 'DD',
    jobTitle: 'Regional Response Manager',
    description: 'Magnam unde laboriosam distinctio sed fuga impedit ut ad velit.',
    longText:
      'Molestiae sunt iusto qui sit omnis est. Quia velit fugiat. Esse eligendi possimus mollitia et. Ab debitis nam maxime. Pariatur optio possimus dolorem totam est nobis doloremque. Praesentium assumenda magni.',
  },
  {
    index: 25,
    bgColor: 'white',
    name: 'Josh Kessler',
    initials: 'JK',
    jobTitle: 'Corporate Division Engineer',
    description: 'Quis ea iste doloremque adipisci quia quis porro quia cupiditate.',
    longText:
      'Assumenda aliquid repudiandae repudiandae autem in et. Perspiciatis earum doloribus perferendis numquam quasi deleniti aut sed. Odit nam sunt architecto porro non odio.',
  },
  {
    index: 26,
    bgColor: '#f5f5f5',
    name: 'Billie Balistreri',
    initials: 'BB',
    jobTitle: 'International Configuration Consultant',
    description: 'Recusandae omnis et porro ut est non modi dolores aut.',
    longText:
      'Doloremque quibusdam non molestiae incidunt adipisci architecto impedit voluptas placeat. Architecto dolores sunt dolorum doloribus commodi perferendis. Quae porro occaecati. Nihil modi laboriosam asperiores qui nulla quis. Nemo dolorem eaque numquam. Sapiente rerum explicabo.',
  },
  {
    index: 27,
    bgColor: 'white',
    name: 'Maybell Brekke',
    initials: 'MB',
    jobTitle: 'Corporate Assurance Designer',
    description:
      'Vel labore sapiente voluptas corporis provident rem repellendus corporis adipisci.',
    longText:
      'Impedit perferendis quasi magni. Omnis nemo qui enim dolores nihil inventore blanditiis. Vero est voluptas est ut. Sint reiciendis eaque eos. Magnam inventore eaque. Et praesentium eaque eum ea libero quia.',
  },
  {
    index: 28,
    bgColor: '#f5f5f5',
    name: 'Reinhold Goyette',
    initials: 'RG',
    jobTitle: 'Forward Markets Technician',
    description: 'Repudiandae voluptatem non omnis iste aperiam soluta rem id minima.',
    longText:
      'Amet tempore delectus voluptatem consequatur. Molestiae voluptates omnis illo. Officia nobis pariatur odio mollitia unde incidunt.',
  },
  {
    index: 29,
    bgColor: 'white',
    name: 'Ramon Watsica',
    initials: 'RW',
    jobTitle: 'National Functionality Strategist',
    description:
      'Consequatur dolor sapiente dolorem provident temporibus sed pariatur molestias nihil.',
    longText:
      'Ea in est nemo aut voluptatem nam quo. Aliquam accusamus cumque sed commodi. Facere quo aspernatur.',
  },
  {
    index: 30,
    bgColor: '#f5f5f5',
    name: 'Mohammad Tromp',
    initials: 'MT',
    jobTitle: 'Dynamic Functionality Engineer',
    description:
      'Voluptates minima deserunt esse explicabo non quia autem exercitationem esse.',
    longText:
      'Voluptatem perferendis minus. Illum et rerum quos aperiam. Ut est culpa suscipit ea eum. Exercitationem explicabo consequatur qui voluptatem a nobis quia quam. Est molestias atque et ullam libero aliquam laborum ab.',
  },
  {
    index: 31,
    bgColor: 'white',
    name: 'Ebba MacGyver',
    initials: 'EM',
    jobTitle: 'Senior Marketing Strategist',
    description: 'Quos officia aut unde enim sit labore at consequatur id.',
    longText:
      'Eos beatae est iure est dolores quo tempore. Possimus consequatur magnam fuga id libero libero. Non dolores dolorum qui. Deleniti eum harum ea nihil ipsa aliquid quae ex. Ut autem exercitationem atque voluptatem quia. Perferendis rerum ratione doloribus repudiandae est quas laudantium.',
  },
  {
    index: 32,
    bgColor: '#f5f5f5',
    name: 'Marcellus Schulist',
    initials: 'MS',
    jobTitle: 'Central Brand Coordinator',
    description:
      'Animi a molestiae accusantium eveniet praesentium et autem vel voluptatem.',
    longText:
      'Rerum aliquid et harum illo dolor eum. Repellendus voluptas vero quaerat. Dolor aut laboriosam eius et qui consequatur quibusdam. Ducimus autem perspiciatis est. Id commodi non perspiciatis non tempore odio quia.',
  },
  {
    index: 33,
    bgColor: 'white',
    name: 'Tianna Smith',
    initials: 'TS',
    jobTitle: 'Senior Applications Executive',
    description:
      'Dolores facere aperiam et voluptatibus dicta excepturi quae incidunt ducimus.',
    longText:
      'Rerum quam animi id provident similique cupiditate in non necessitatibus. Impedit quia repudiandae quia laborum eos. Minus assumenda ut doloribus qui blanditiis.',
  },
  {
    index: 34,
    bgColor: '#f5f5f5',
    name: 'Gaston Lind',
    initials: 'GL',
    jobTitle: 'Customer Applications Associate',
    description: 'Aut nihil mollitia excepturi et odit ratione autem ipsam impedit.',
    longText:
      'In fugiat consequatur et. Ut sequi odio perspiciatis quae reiciendis. Libero vero fugiat. Et sit qui. Minus quam ducimus tempore a dolorem et sit dolore vel.',
  },
  {
    index: 35,
    bgColor: 'white',
    name: 'Jordi Veum',
    initials: 'JV',
    jobTitle: 'Future Configuration Consultant',
    description: 'Qui doloremque est dolorem qui nemo rerum non sapiente aut.',
    longText:
      'Id sed voluptas et eum odio ipsa aut. Tempore ut perferendis. Odit praesentium architecto voluptas. Delectus est omnis eum est. Beatae maxime sunt iure quia sit. Blanditiis eum quod eaque ut aut rerum.',
  },
  {
    index: 36,
    bgColor: '#f5f5f5',
    name: 'Keon Lindgren',
    initials: 'KL',
    jobTitle: 'National Security Facilitator',
    description:
      'Qui molestiae harum tempore delectus pariatur consequatur aut inventore non.',
    longText:
      'Aut aut laborum qui fugit natus exercitationem. Earum voluptas est dolore. Aut iure doloremque repellat et.',
  },
  {
    index: 37,
    bgColor: 'white',
    name: 'Margie Jacobson',
    initials: 'MJ',
    jobTitle: 'Investor Response Supervisor',
    description:
      'Veniam vitae maxime eum maiores nesciunt quibusdam magnam dolores ratione.',
    longText:
      'Voluptatem dicta accusamus non dolorem laborum qui inventore beatae. Odio non occaecati non ea et. Perspiciatis magni aut necessitatibus dolor harum nulla expedita est hic. Corrupti voluptas dolor sunt voluptatem repellat. Non magni est odit perspiciatis autem cupiditate et minima.',
  },
  {
    index: 38,
    bgColor: '#f5f5f5',
    name: 'Duncan Heathcote',
    initials: 'DH',
    jobTitle: 'Principal Infrastructure Associate',
    description: 'Aut ut accusantium dignissimos dolores sit beatae quia soluta ab.',
    longText:
      'Voluptas voluptates qui vitae qui. Mollitia molestias corrupti autem nesciunt ut sint dolorum quia consequatur. Provident repudiandae vel optio pariatur magnam. Sed nostrum odit eaque.',
  },
  {
    index: 39,
    bgColor: 'white',
    name: 'Gerhard Gaylord',
    initials: 'GG',
    jobTitle: 'Investor Branding Officer',
    description: 'Quia quis rerum quo sequi aliquam impedit et inventore architecto.',
    longText:
      'Itaque mollitia nostrum. Itaque exercitationem ipsum est occaecati quo. Autem nihil repudiandae. Et neque ut. Eum aspernatur dolores quo consequatur dolor excepturi voluptatum cupiditate. Minus consectetur natus.',
  },
  {
    index: 40,
    bgColor: '#f5f5f5',
    name: 'Elnora Kuphal',
    initials: 'EK',
    jobTitle: 'District Marketing Specialist',
    description:
      'Occaecati aut placeat quo consequatur qui praesentium doloremque aut voluptatum.',
    longText:
      'Ipsa sed natus aliquid omnis aperiam iusto ab. Consequatur eligendi error ab. Velit blanditiis sit debitis veritatis sed eum.',
  },
  {
    index: 41,
    bgColor: 'white',
    name: 'Albin Kulas',
    initials: 'AK',
    jobTitle: 'Senior Accounts Consultant',
    description:
      'Accusantium iure nostrum adipisci nesciunt quia consequatur culpa ut et.',
    longText:
      'Corrupti officia ut. Et illo quae ex mollitia. Facere tenetur sed consequatur. Quibusdam est ex et est. Dolorem laboriosam vitae necessitatibus est et et autem alias aliquam.',
  },
  {
    index: 42,
    bgColor: '#f5f5f5',
    name: 'Nasir Dietrich',
    initials: 'ND',
    jobTitle: 'Human Response Designer',
    description: 'Vel qui sit molestias quisquam sit nulla qui dignissimos dicta.',
    longText:
      'Non in architecto non repellat dolorem alias ut qui. Beatae quasi omnis exercitationem explicabo vero. Deleniti libero id et eligendi veritatis repellat. Totam atque similique. Cum perferendis reiciendis et magni qui aliquid fugit vero.',
  },
  {
    index: 43,
    bgColor: 'white',
    name: 'Gilda Farrell',
    initials: 'GF',
    jobTitle: 'Customer Security Coordinator',
    description: 'Et debitis doloremque eos debitis vel quos saepe rerum vel.',
    longText:
      'Enim cum sed minima quod illo temporibus veniam dolorem. Quo et et rerum praesentium tempora ut id. Et harum vel aut fuga.',
  },
  {
    index: 44,
    bgColor: '#f5f5f5',
    name: 'Jackson Pagac',
    initials: 'JP',
    jobTitle: 'Direct Communications Director',
    description: 'Eligendi eligendi ut delectus accusantium sed dolores aut esse non.',
    longText:
      'Aut aut maiores. Sunt natus itaque. Quas ipsum animi sed architecto animi dolorem sed.',
  },
  {
    index: 45,
    bgColor: 'white',
    name: 'Carmen Crooks',
    initials: 'CC',
    jobTitle: 'Corporate Communications Developer',
    description: 'Totam ipsum quam repellat modi nesciunt nisi at reiciendis aut.',
    longText:
      'Tempore ullam odio. Libero non et eveniet asperiores expedita deleniti corrupti. Quia minima ut cum quisquam voluptatem quia.',
  },
  {
    index: 46,
    bgColor: '#f5f5f5',
    name: 'Guiseppe Sporer',
    initials: 'GS',
    jobTitle: 'Legacy Intranet Strategist',
    description: 'Modi ducimus aut at libero omnis libero vitae iure consequatur.',
    longText:
      'Fugit esse qui beatae error voluptas sint inventore esse. Distinctio corporis laudantium nisi illo impedit molestias inventore eius omnis. Tenetur expedita ea reiciendis sequi iure nulla.',
  },
  {
    index: 47,
    bgColor: 'white',
    name: 'Osbaldo Wilkinson',
    initials: 'OW',
    jobTitle: 'Product Research Orchestrator',
    description:
      'Facilis quidem molestiae itaque consequatur voluptatibus sequi ut est cumque.',
    longText:
      'At odit et accusantium nisi optio. Ea ut possimus sapiente. Adipisci debitis autem consequatur adipisci excepturi laudantium porro pariatur. Voluptatum soluta nihil laudantium est perspiciatis iure ipsa. Nihil natus illum nemo repudiandae ipsum ut qui rerum quia. Facilis eos repellat animi aut repudiandae corporis ut.',
  },
  {
    index: 48,
    bgColor: '#f5f5f5',
    name: 'Ciara Fisher',
    initials: 'CF',
    jobTitle: 'Principal Intranet Manager',
    description:
      'Ratione voluptas reprehenderit beatae dolorem exercitationem est a quod ab.',
    longText:
      'Est dolorem commodi autem voluptatem. Eligendi commodi dolor omnis est quidem aut adipisci. Nemo nobis provident qui veritatis ab non consequatur. Debitis eius doloremque quae hic iste ut voluptates ullam dolor.',
  },
  {
    index: 49,
    bgColor: 'white',
    name: 'Kiara Wintheiser',
    initials: 'KW',
    jobTitle: 'Central Assurance Specialist',
    description: 'Ipsa optio veniam et animi occaecati enim sit at exercitationem.',
    longText:
      'Veritatis laudantium omnis aut iusto autem sit ipsam. Tempore amet amet est fugiat neque voluptatibus iure eos. Non ullam fugit quis tempore sunt. Corrupti et est dolor laborum enim aut soluta.',
  },
  {
    index: 50,
    bgColor: '#f5f5f5',
    name: 'Justyn White',
    initials: 'JW',
    jobTitle: 'Investor Security Architect',
    description:
      'Dolor necessitatibus dignissimos sint magnam veniam eum nihil nisi animi.',
    longText:
      'Rem odit consectetur neque ut. Sed asperiores officia ut dolorem beatae quisquam architecto. Recusandae molestiae maxime omnis voluptatum ipsa repellendus. Nulla tempore voluptates rerum illum. Corrupti eum dolor praesentium cum nostrum qui repellendus ullam.',
  },
  {
    index: 51,
    bgColor: 'white',
    name: 'Joseph Larson',
    initials: 'JL',
    jobTitle: 'Customer Brand Designer',
    description:
      'Illum accusamus dolores vel accusamus quas libero ut consequatur recusandae.',
    longText:
      'A accusantium fuga dolorem aliquam tenetur. Est assumenda commodi ex quam beatae omnis. Corporis voluptatibus officia non rerum et. Dolor enim et in dolorum iure qui sit possimus tempora. Voluptas expedita consequatur nesciunt. Quae velit odio eveniet voluptatem sit est ut quaerat modi.',
  },
  {
    index: 52,
    bgColor: '#f5f5f5',
    name: 'Mallory Boyle',
    initials: 'MB',
    jobTitle: 'Dynamic Mobility Analyst',
    description: 'Aut totam veniam nostrum maxime dolorem optio et et molestiae.',
    longText:
      'Deserunt nemo ipsum voluptates molestias. Perspiciatis et voluptatem et aspernatur aut totam rerum suscipit nesciunt. Minus at sed optio culpa animi aut. Quidem sint quae qui quaerat suscipit.',
  },
  {
    index: 53,
    bgColor: 'white',
    name: 'Kirstin Hessel',
    initials: 'KH',
    jobTitle: 'Forward Creative Consultant',
    description: 'Saepe qui voluptate accusamus quis sed id rerum in dolores.',
    longText:
      'In eligendi enim tempore dolores error voluptatibus modi ducimus. Adipisci enim voluptatem recusandae. Neque rerum animi explicabo non eligendi consectetur dignissimos. Cum vel vel id non repellat cum.',
  },
  {
    index: 54,
    bgColor: '#f5f5f5',
    name: 'Kelsie Carroll',
    initials: 'KC',
    jobTitle: 'Internal Metrics Supervisor',
    description: 'Ut voluptas sint quae sed expedita occaecati qui qui et.',
    longText:
      'Praesentium vel rem quis. Consequatur qui ut accusantium. Aut qui sint quis.',
  },
  {
    index: 55,
    bgColor: 'white',
    name: 'Rocky Goodwin',
    initials: 'RG',
    jobTitle: 'Dynamic Functionality Planner',
    description: 'Qui est nisi quasi soluta voluptatem aut sit quos necessitatibus.',
    longText:
      'Maxime doloremque dolore et fuga dicta magnam. Accusantium reiciendis est et quae ab ullam dicta. Ullam beatae consequatur nisi. Asperiores voluptas voluptatum qui et necessitatibus.',
  },
  {
    index: 56,
    bgColor: '#f5f5f5',
    name: 'Patrick Kautzer',
    initials: 'PK',
    jobTitle: 'Investor Markets Engineer',
    description:
      'Voluptatibus ipsum pariatur aspernatur illum consequatur incidunt sint expedita rem.',
    longText:
      'Officiis omnis ex eum enim. Et velit laborum dignissimos impedit esse consequuntur et. Magni non error esse quibusdam. Aliquid vel culpa. Laborum quo id neque harum similique voluptas esse autem.',
  },
  {
    index: 57,
    bgColor: 'white',
    name: 'Otilia Welch',
    initials: 'OW',
    jobTitle: 'Future Marketing Analyst',
    description: 'Molestias et sunt nostrum optio et in consequatur quia est.',
    longText:
      'Voluptatem est et sint aut possimus atque quo. Dolore delectus et. Beatae rerum nihil iusto minima.',
  },
  {
    index: 58,
    bgColor: '#f5f5f5',
    name: 'Hailie Smith',
    initials: 'HS',
    jobTitle: 'Internal Research Administrator',
    description: 'Quia natus rerum eveniet perferendis omnis magni quia beatae harum.',
    longText:
      'Nisi exercitationem et reprehenderit. Quod et beatae atque voluptatem. Magni nihil rerum corporis qui.',
  },
  {
    index: 59,
    bgColor: 'white',
    name: 'Lauretta Franecki',
    initials: 'LF',
    jobTitle: 'Dynamic Solutions Liaison',
    description: 'Id odio maxime corporis assumenda nulla atque qui esse nobis.',
    longText:
      'Dignissimos harum voluptas modi natus iure sunt eligendi qui. Sed eum maiores eligendi est. Fuga quis beatae similique. Qui quasi vero et quia ad. Aspernatur quo id est corporis dolorem ducimus beatae ipsum non. Atque et iste laboriosam animi veritatis.',
  },
  {
    index: 60,
    bgColor: '#f5f5f5',
    name: 'Abagail Mayert',
    initials: 'AM',
    jobTitle: 'International Marketing Representative',
    description: 'Atque vel quibusdam doloremque voluptas harum ad qui et similique.',
    longText:
      'Voluptatibus tempora unde perspiciatis. Ea explicabo earum quos voluptate optio dolor enim. Numquam excepturi maiores voluptates modi ullam nostrum error.',
  },
  {
    index: 61,
    bgColor: 'white',
    name: 'Donnell Koelpin',
    initials: 'DK',
    jobTitle: 'Investor Solutions Planner',
    description: 'Excepturi libero tenetur doloribus dolor et dolores quo eligendi ea.',
    longText:
      'Dolorum est nihil earum. Deserunt sapiente deserunt possimus molestiae. Adipisci facilis fuga laborum et id.',
  },
  {
    index: 62,
    bgColor: '#f5f5f5',
    name: 'Estevan Rowe',
    initials: 'ER',
    jobTitle: 'Dynamic Communications Specialist',
    description: 'Aut dolorem et libero modi omnis porro et pariatur enim.',
    longText:
      'Illo laborum velit hic maiores consectetur. Aut sit provident deleniti mollitia quo. Et et temporibus alias enim sint. Repudiandae aut eos debitis iusto sint. Veritatis modi et est.',
  },
  {
    index: 63,
    bgColor: 'white',
    name: 'Ellsworth Jaskolski',
    initials: 'EJ',
    jobTitle: 'International Assurance Executive',
    description:
      'Totam et necessitatibus animi eveniet vitae voluptas suscipit aliquam dolore.',
    longText:
      'Voluptatem corporis delectus non ullam quo omnis autem ducimus quo. Ut est ut rem itaque qui quam quasi tempora. Aliquid itaque et temporibus.',
  },
  {
    index: 64,
    bgColor: '#f5f5f5',
    name: 'Nicklaus Altenwerth',
    initials: 'NA',
    jobTitle: 'International Program Producer',
    description:
      'Saepe sit impedit corrupti distinctio voluptate dignissimos sunt optio id.',
    longText:
      'Ut repudiandae qui quo animi assumenda consequatur ex. At distinctio qui laudantium adipisci eos ut saepe nostrum. Tempora aut maiores odit ratione dignissimos. Officia corrupti quia. Ex asperiores corrupti ut tenetur dicta voluptatem et sit repellendus. Blanditiis perspiciatis possimus.',
  },
  {
    index: 65,
    bgColor: 'white',
    name: 'Nyah Cole',
    initials: 'NC',
    jobTitle: 'National Data Associate',
    description:
      'Eum iste omnis molestiae voluptate quae doloribus hic expedita deserunt.',
    longText:
      'In sed corrupti facilis ipsa. Facere exercitationem dignissimos quia blanditiis illo. Ut eius quaerat fugit labore quisquam. Fugit ipsa suscipit. Quas culpa eveniet quia eaque esse molestias. Quo consequatur modi culpa necessitatibus nemo omnis vel beatae.',
  },
  {
    index: 66,
    bgColor: '#f5f5f5',
    name: 'Kian Walter',
    initials: 'KW',
    jobTitle: 'National Communications Engineer',
    description: 'Sit qui id sed et aut libero temporibus sed quod.',
    longText:
      'Qui illum excepturi ut modi delectus. Odit commodi reiciendis recusandae aut blanditiis voluptatem ut id. Nihil deleniti possimus voluptatum mollitia aperiam consequatur ut aut.',
  },
  {
    index: 67,
    bgColor: 'white',
    name: 'Alexandro Maggio',
    initials: 'AM',
    jobTitle: 'District Configuration Coordinator',
    description: 'Non error delectus adipisci beatae at dolorum adipisci sit non.',
    longText:
      'Eos quam consequatur quia itaque eligendi dolores corporis quia. At rerum facere cupiditate et velit consequuntur consequatur pariatur. Dolores dolor et vel quidem non nesciunt. Est non cumque ullam. Voluptatum quo et cum labore perspiciatis aspernatur quidem.',
  },
  {
    index: 68,
    bgColor: '#f5f5f5',
    name: 'Ron Ortiz',
    initials: 'RO',
    jobTitle: 'Regional Infrastructure Designer',
    description: 'Et eius aut sint culpa modi delectus ratione et corrupti.',
    longText:
      'Neque aperiam quis. Ut ipsum quis iste ut ut repellat. A eveniet aut consequatur. Neque harum repellat eveniet voluptatem voluptatibus saepe quia ut ipsum. Exercitationem dolore aliquam optio exercitationem veritatis dolorum ut. Et ut architecto voluptatem iure magnam.',
  },
  {
    index: 69,
    bgColor: 'white',
    name: 'Jessy Schmitt',
    initials: 'JS',
    jobTitle: 'Regional Optimization Agent',
    description: 'Dignissimos sed quam enim vitae ut reprehenderit maxime iste nulla.',
    longText:
      'Molestiae labore harum ut et eos accusantium magni. Qui asperiores enim. Quis eius nisi impedit. Ea eos placeat placeat non.',
  },
  {
    index: 70,
    bgColor: '#f5f5f5',
    name: 'Macy Funk',
    initials: 'MF',
    jobTitle: 'Regional Directives Associate',
    description:
      'Dolor beatae voluptatem atque sint dignissimos rerum mollitia quia consequatur.',
    longText:
      'Ut ea consequatur. Deleniti iste ab ut eos occaecati quas accusantium eos. Suscipit sunt quia.',
  },
  {
    index: 71,
    bgColor: 'white',
    name: 'Josh Stiedemann',
    initials: 'JS',
    jobTitle: 'Future Functionality Assistant',
    description:
      'Tenetur qui rem aliquam voluptatem neque repellendus aut consequuntur dolorem.',
    longText:
      'Sint atque molestiae ducimus ea. In eos quis. Doloremque aspernatur tempora et. Qui dolorum perferendis animi quis ex. Qui ut sapiente porro harum vel qui animi ipsa nulla.',
  },
  {
    index: 72,
    bgColor: '#f5f5f5',
    name: 'Kennith DuBuque',
    initials: 'KD',
    jobTitle: 'International Research Planner',
    description: 'Quas ea aut et distinctio hic fugit temporibus pariatur et.',
    longText:
      'Occaecati laborum delectus rerum et neque facere voluptas. Qui impedit neque voluptatem consequatur nisi soluta id. Vel vel eaque nihil quia voluptas ullam libero doloribus et.',
  },
  {
    index: 73,
    bgColor: 'white',
    name: 'Furman Keebler',
    initials: 'FK',
    jobTitle: 'Direct Data Assistant',
    description:
      'Qui asperiores magnam non officiis aspernatur consequuntur iure vitae libero.',
    longText:
      'Cum nihil eligendi. Sunt nesciunt id placeat aperiam impedit et consequuntur in. Et non numquam. Sit et et repudiandae dolorum ipsum magni. Et similique omnis.',
  },
  {
    index: 74,
    bgColor: '#f5f5f5',
    name: 'Jerrod Borer',
    initials: 'JB',
    jobTitle: 'Regional Marketing Facilitator',
    description: 'Voluptatem omnis sit ratione ipsum quam ex tenetur ratione quaerat.',
    longText:
      'Qui voluptatem aut voluptatem minima consequuntur et voluptatem qui. Iure alias maxime est quo tenetur recusandae. Dolorem praesentium voluptatem hic error officiis.',
  },
  {
    index: 75,
    bgColor: 'white',
    name: 'Juwan Miller',
    initials: 'JM',
    jobTitle: 'Forward Paradigm Representative',
    description:
      'Exercitationem pariatur inventore dolore ut voluptate reiciendis animi quis eum.',
    longText:
      'Sit architecto et sapiente id adipisci. Sequi ea numquam corrupti delectus sit. Laudantium qui in sapiente non magni.',
  },
  {
    index: 76,
    bgColor: '#f5f5f5',
    name: 'Lizeth Waters',
    initials: 'LW',
    jobTitle: 'Customer Implementation Engineer',
    description: 'Nulla et quidem aliquid ut eligendi unde qui ad aut.',
    longText:
      'Qui sunt dignissimos voluptates doloribus. Ut quam architecto et sapiente blanditiis ullam voluptatem porro. Qui soluta voluptas deleniti aut natus esse quos neque magnam. Facilis ad voluptates nostrum harum mollitia tenetur. Reiciendis facere voluptatem occaecati distinctio.',
  },
  {
    index: 77,
    bgColor: 'white',
    name: 'Quinton Jones',
    initials: 'QJ',
    jobTitle: 'Central Assurance Administrator',
    description: 'Ex omnis amet est deleniti et et fugit dicta repellat.',
    longText:
      'Quo omnis quaerat. Nobis perferendis in atque quod quisquam ut quos. Magnam vel facilis exercitationem aut. Natus sit sapiente sunt voluptas eum autem et qui commodi. Voluptatum neque ut assumenda porro distinctio adipisci.',
  },
  {
    index: 78,
    bgColor: '#f5f5f5',
    name: 'Toney Bashirian',
    initials: 'TB',
    jobTitle: 'Product Identity Manager',
    description:
      'Nesciunt eos labore quo odio adipisci excepturi maiores nobis temporibus.',
    longText:
      'At molestias voluptatibus. Voluptatem veniam ducimus praesentium. Eius tenetur aspernatur ex.',
  },
  {
    index: 79,
    bgColor: 'white',
    name: 'Jamel Walsh',
    initials: 'JW',
    jobTitle: 'Internal Interactions Engineer',
    description:
      'Enim molestiae porro perspiciatis quo itaque architecto id aperiam autem.',
    longText:
      'Alias fugit dolorem accusamus deleniti dolorem magni. Natus optio id esse deleniti ut sint. Quo natus laudantium placeat voluptate nobis et perspiciatis. Quo repellendus reiciendis animi amet aut dignissimos necessitatibus.',
  },
  {
    index: 80,
    bgColor: '#f5f5f5',
    name: 'Rashawn Beahan',
    initials: 'RB',
    jobTitle: 'Dynamic Creative Liaison',
    description:
      'Id saepe eligendi recusandae eaque vel voluptatum molestias doloribus explicabo.',
    longText:
      'Quidem qui laborum eos. Voluptatem in alias. Aut sit autem dolores ad necessitatibus labore quia voluptas. At rem magnam. Nesciunt voluptate eum labore occaecati harum et voluptates.',
  },
  {
    index: 81,
    bgColor: 'white',
    name: 'Taryn Rutherford',
    initials: 'TR',
    jobTitle: 'Dynamic Factors Facilitator',
    description: 'Id aut maiores enim sint atque quia unde laudantium et.',
    longText:
      'Dignissimos eos velit debitis. Dignissimos quam ut velit quis distinctio. Autem assumenda distinctio nesciunt magni reprehenderit nemo nostrum. Eos corporis quis nostrum omnis possimus omnis sit. Odio rem autem voluptates dolor consequatur qui delectus illo qui.',
  },
  {
    index: 82,
    bgColor: '#f5f5f5',
    name: 'Gladyce Kautzer',
    initials: 'GK',
    jobTitle: 'Corporate Intranet Orchestrator',
    description:
      'Tempora dicta occaecati tenetur enim consequatur voluptatibus laboriosam quia iusto.',
    longText:
      'Aut rerum error doloremque dolores aperiam rerum aspernatur rerum eos. Quod voluptate saepe blanditiis placeat modi nihil provident rerum. Sit earum vitae nostrum illo consequatur quas sit. Molestiae voluptatem saepe quo et. Atque repudiandae velit quis magnam illum laborum sit. Enim velit doloribus mollitia.',
  },
  {
    index: 83,
    bgColor: 'white',
    name: 'Ari Mayert',
    initials: 'AM',
    jobTitle: 'Senior Usability Producer',
    description: 'Voluptatem hic esse vel fugiat iste amet autem fugit veritatis.',
    longText:
      'Quia saepe facere et iusto repudiandae quibusdam enim. Quas ad et et ad illo soluta. Aliquid doloribus quia. Ad minima laudantium. Dignissimos quia quae nemo nihil harum quaerat.',
  },
  {
    index: 84,
    bgColor: '#f5f5f5',
    name: 'Camden Keeling',
    initials: 'CK',
    jobTitle: 'Lead Markets Strategist',
    description: 'Vitae eius et saepe amet voluptatem doloribus vitae distinctio ipsa.',
    longText:
      'Occaecati dolorum recusandae sit iure magnam incidunt illo aperiam debitis. Blanditiis veniam qui impedit veniam quia repellendus. Accusamus ducimus cupiditate aut. Reiciendis voluptate recusandae nam unde quae suscipit. Exercitationem accusamus sit vitae nihil in nulla qui tempore. Est necessitatibus voluptatibus reprehenderit et beatae deleniti ratione.',
  },
  {
    index: 85,
    bgColor: 'white',
    name: "Corbin O'Conner",
    initials: 'CO',
    jobTitle: 'Global Security Planner',
    description:
      'Magnam aspernatur officiis architecto quaerat quis harum eum magnam commodi.',
    longText:
      'Et earum eum. Dignissimos quisquam nostrum tempora quo eos deleniti rerum tempora. Et tempore blanditiis autem voluptas minima consequatur nisi. Nisi qui reprehenderit ea.',
  },
  {
    index: 86,
    bgColor: '#f5f5f5',
    name: 'Aileen Marvin',
    initials: 'AM',
    jobTitle: 'Corporate Branding Designer',
    description: 'Non culpa quis quia aut quos dicta officiis quidem quia.',
    longText:
      'Veniam blanditiis ad quas. Sint cupiditate possimus dignissimos vitae quaerat cupiditate omnis numquam minus. Autem officia pariatur dolores sint qui. Quo repudiandae qui nostrum consequuntur pariatur exercitationem velit. Rerum ut necessitatibus optio sed et. Omnis dolor ducimus.',
  },
  {
    index: 87,
    bgColor: 'white',
    name: 'Verda Ward',
    initials: 'VW',
    jobTitle: 'Global Infrastructure Facilitator',
    description: 'Est mollitia ducimus voluptas atque totam corporis nemo minus illum.',
    longText:
      'Quam fugiat iusto iste. Impedit sunt sed qui. Odio officia temporibus autem sed unde et quod iusto enim. Voluptas provident saepe non esse quibusdam autem aut autem. Nihil accusamus optio non.',
  },
  {
    index: 88,
    bgColor: '#f5f5f5',
    name: 'Karley Roberts',
    initials: 'KR',
    jobTitle: 'Principal Factors Producer',
    description: 'Adipisci vel sunt voluptate quia iste laborum velit rerum quidem.',
    longText:
      'Qui rem dolores et mollitia facilis reiciendis eum consequatur. Maxime aut culpa voluptates vel. Aut nihil quidem possimus et. Placeat esse reiciendis dolorum dolorem laboriosam et sit.',
  },
  {
    index: 89,
    bgColor: 'white',
    name: 'Tremaine Walter',
    initials: 'TW',
    jobTitle: 'National Directives Supervisor',
    description: 'Est facilis officiis nihil saepe magni dolorum a aliquam aperiam.',
    longText:
      'Ipsam ipsa autem sit reprehenderit est illo qui aperiam laborum. Quia voluptate perferendis ut dolorem sint voluptatum harum. Sequi soluta occaecati provident quo magnam molestiae quia provident harum. Aut harum consequatur molestiae mollitia quo. Autem distinctio quas. Sapiente ut omnis.',
  },
  {
    index: 90,
    bgColor: '#f5f5f5',
    name: 'Cierra Olson',
    initials: 'CO',
    jobTitle: 'Chief Accountability Supervisor',
    description:
      'Officiis architecto architecto quia nesciunt aspernatur tempora recusandae rerum sed.',
    longText:
      'Ut corporis at ut voluptatem. Deserunt consequatur voluptatum quam perferendis aspernatur doloribus. Sunt sunt dolor.',
  },
  {
    index: 91,
    bgColor: 'white',
    name: 'Arvilla Tillman',
    initials: 'AT',
    jobTitle: 'Customer Data Liaison',
    description: 'Eum occaecati odio sed deleniti dolores vitae nesciunt nihil earum.',
    longText:
      'Quia sequi quasi numquam ut sapiente aspernatur possimus et. Ea cumque tempora molestias ex rerum provident. Voluptas facere explicabo dignissimos dolorum minus sunt assumenda vitae. Impedit eos sit.',
  },
  {
    index: 92,
    bgColor: '#f5f5f5',
    name: 'Braulio Sauer',
    initials: 'BS',
    jobTitle: 'District Operations Architect',
    description: 'Omnis laboriosam id hic labore voluptatem aperiam eaque et odit.',
    longText:
      'Qui qui eligendi sit necessitatibus enim perspiciatis blanditiis commodi sed. Autem deleniti accusamus enim temporibus molestias architecto asperiores. Ea voluptate dolores suscipit consequatur qui. Qui praesentium consequuntur asperiores id aut. Qui commodi eveniet. Laudantium labore maxime.',
  },
  {
    index: 93,
    bgColor: 'white',
    name: 'Yvonne Hoeger',
    initials: 'YH',
    jobTitle: 'Customer Intranet Producer',
    description:
      'Quia laboriosam omnis nostrum nesciunt dolorum ea unde assumenda ratione.',
    longText:
      'Aut deleniti delectus quia sit molestiae omnis dolorem suscipit et. Corrupti dignissimos quisquam quisquam. Reprehenderit fuga et. Non delectus ratione voluptas repudiandae et quia perspiciatis. Dicta eligendi quod unde repellat.',
  },
  {
    index: 94,
    bgColor: '#f5f5f5',
    name: 'Annabel Yundt',
    initials: 'AY',
    jobTitle: 'Corporate Division Assistant',
    description: 'Amet dolores sequi nemo aut est voluptatibus tempora ipsa facilis.',
    longText:
      'Aut totam molestias. Distinctio magni assumenda. Consequuntur dolore eligendi dolorem fugiat.',
  },
  {
    index: 95,
    bgColor: 'white',
    name: 'Stephen Hilpert',
    initials: 'SH',
    jobTitle: 'Global Paradigm Director',
    description:
      'Hic reprehenderit consequuntur non rem consequatur assumenda nemo et molestiae.',
    longText:
      'Sit sint itaque est qui enim voluptas aut. Est aliquam optio harum autem id aut. Ab minus et nihil ut est in. Ut dolorem earum porro vel animi dolor dolor architecto porro.',
  },
  {
    index: 96,
    bgColor: '#f5f5f5',
    name: 'Althea Cremin',
    initials: 'AC',
    jobTitle: 'Dynamic Solutions Analyst',
    description:
      'Consequatur quasi adipisci non enim maiores aliquid animi consequatur cumque.',
    longText:
      'Illum possimus totam natus iusto sed vero ut. Doloribus porro possimus corrupti. Quo sapiente suscipit impedit aut enim voluptatum iure.',
  },
  {
    index: 97,
    bgColor: 'white',
    name: 'Flavie Schultz',
    initials: 'FS',
    jobTitle: 'National Brand Producer',
    description:
      'Unde rem at veritatis consequuntur mollitia voluptatem officiis suscipit eum.',
    longText:
      'Illum nobis rerum aut consequatur omnis dolor. Voluptatem et hic et et sunt impedit itaque. Sequi qui sint sint quam aut exercitationem facere blanditiis consequatur.',
  },
  {
    index: 98,
    bgColor: '#f5f5f5',
    name: 'Annamarie Zieme',
    initials: 'AZ',
    jobTitle: 'Product Accountability Assistant',
    description:
      'Libero mollitia voluptas amet est placeat dignissimos enim sequi ducimus.',
    longText:
      'Asperiores quos voluptatum consequatur aut quas. Quo sit ut eveniet perferendis esse laboriosam quos. Molestias odit sint sed dolores.',
  },
  {
    index: 99,
    bgColor: 'white',
    name: 'Isabell Kassulke',
    initials: 'IK',
    jobTitle: 'Forward Implementation Designer',
    description: 'Qui qui non nemo et eos quae rerum nisi sequi.',
    longText:
      'Soluta quaerat quo sapiente. In nobis quae consectetur delectus voluptatem. Quod labore autem autem reprehenderit ab nemo qui. Voluptates ut aliquid quisquam rerum perspiciatis id vel excepturi. Ratione non sit cupiditate. Officiis autem aliquid cumque.',
  },
  {
    index: 100,
    bgColor: '#f5f5f5',
    name: 'Jermaine Zboncak',
    initials: 'JZ',
    jobTitle: 'Legacy Marketing Representative',
    description: 'Eos voluptatum sed maxime cum quibusdam eius ea totam sed.',
    longText:
      'Molestiae non ut non ipsam iure quia et qui est. Sunt optio consequatur nihil provident aut aperiam atque. Maxime error voluptas aperiam repellendus. Impedit ut officiis nobis quibusdam fugiat vero. Asperiores ipsa accusamus quas nesciunt eaque distinctio.',
  },
  {
    index: 101,
    bgColor: 'white',
    name: 'Grace Rohan',
    initials: 'GR',
    jobTitle: 'Forward Factors Assistant',
    description:
      'Modi ratione alias reiciendis aspernatur at cumque voluptatem nesciunt saepe.',
    longText:
      'Inventore est enim molestiae rem veniam perspiciatis minima. Distinctio quas occaecati fuga. Dolores adipisci voluptas voluptatibus. Aspernatur ex veniam molestiae repellat. Et ut asperiores explicabo labore perferendis. Assumenda suscipit quia.',
  },
  {
    index: 102,
    bgColor: '#f5f5f5',
    name: 'Korey Aufderhar',
    initials: 'KA',
    jobTitle: 'Dynamic Infrastructure Specialist',
    description: 'Eos tempora eum rerum consequatur et quis officia accusantium quis.',
    longText:
      'Beatae et exercitationem distinctio atque. Ea nobis molestias culpa officiis eos ut eum atque. Nesciunt inventore dolor rerum accusamus deleniti dolores qui quisquam.',
  },
  {
    index: 103,
    bgColor: 'white',
    name: 'Wava Bergnaum',
    initials: 'WB',
    jobTitle: 'Central Directives Supervisor',
    description:
      'Eos distinctio doloremque deleniti nostrum tempora ut id molestiae est.',
    longText:
      'Quo aut assumenda vero iste et. Eum cum ratione atque enim adipisci consequatur. Quia maiores porro corrupti voluptatem vel vel eaque. Qui reprehenderit dolor est et. Similique esse similique rerum. Voluptatum aut nulla asperiores distinctio.',
  },
  {
    index: 104,
    bgColor: '#f5f5f5',
    name: 'Jody Crist',
    initials: 'JC',
    jobTitle: 'Senior Response Consultant',
    description:
      'Adipisci distinctio sint similique quia id laudantium tempora molestiae eum.',
    longText:
      'Sint iste quas. Eveniet debitis et perspiciatis accusamus hic distinctio soluta ipsum. Quisquam facere expedita natus ea. Doloribus amet dolore eos reprehenderit suscipit.',
  },
  {
    index: 105,
    bgColor: 'white',
    name: 'Effie Hilll',
    initials: 'EH',
    jobTitle: 'Investor Assurance Technician',
    description:
      'Excepturi esse expedita nemo necessitatibus illo architecto nemo dolore sed.',
    longText:
      'Eligendi autem corporis ut. Vel quia laudantium. Atque corporis voluptatem atque tenetur veniam cumque recusandae quo. Cum repellat voluptatem aut corrupti tenetur et voluptas. Omnis adipisci neque ut non dignissimos maxime dolores et id.',
  },
  {
    index: 106,
    bgColor: '#f5f5f5',
    name: 'Mohammed Bernhard',
    initials: 'MB',
    jobTitle: 'Dynamic Brand Administrator',
    description: 'Veniam sed eos odio inventore ut repellendus aut sunt distinctio.',
    longText:
      'Numquam repudiandae excepturi qui sit quibusdam sit. Tenetur molestias totam nesciunt. Perspiciatis laudantium eveniet.',
  },
  {
    index: 107,
    bgColor: 'white',
    name: 'Esmeralda Crist',
    initials: 'EC',
    jobTitle: 'Future Response Assistant',
    description: 'Id et sit non est numquam sed sed autem doloribus.',
    longText:
      'Ducimus numquam eos odio eos dolor aut temporibus voluptas voluptates. Nihil dicta voluptatem accusamus qui. Autem iusto magni ut laudantium. Ea est cumque porro. Quia non culpa harum ut ad.',
  },
  {
    index: 108,
    bgColor: '#f5f5f5',
    name: 'Katherine Yost',
    initials: 'KY',
    jobTitle: 'Human Web Representative',
    description:
      'Perferendis molestiae ea necessitatibus eos quae id aliquid repellat cum.',
    longText:
      'Non libero eum culpa vel autem unde. Et soluta nemo ullam aut natus dolorem. Tempore odit ut quidem rerum. Qui consequatur quod inventore. At debitis nihil occaecati officia esse.',
  },
  {
    index: 109,
    bgColor: 'white',
    name: 'Trinity Bosco',
    initials: 'TB',
    jobTitle: 'Internal Optimization Executive',
    description:
      'Corporis vel dolorum perspiciatis laborum corporis aut eum reprehenderit adipisci.',
    longText:
      'Est est saepe repudiandae voluptas magni necessitatibus qui est quo. Asperiores omnis pariatur. Ut nesciunt enim dolorum dignissimos ab harum perspiciatis.',
  },
  {
    index: 110,
    bgColor: '#f5f5f5',
    name: 'Judson Kunde',
    initials: 'JK',
    jobTitle: 'Future Group Strategist',
    description:
      'Velit optio consequatur qui repellat nostrum sit soluta quasi voluptatum.',
    longText:
      'Harum accusantium fuga excepturi est. Tempora officia dolores vel consequuntur labore omnis ab sunt. Blanditiis qui expedita quidem. Voluptatem suscipit et harum explicabo minima officia voluptas.',
  },
  {
    index: 111,
    bgColor: 'white',
    name: 'Gilbert Jacobson',
    initials: 'GJ',
    jobTitle: 'Regional Web Engineer',
    description: 'Dolorem illo veritatis aut ut pariatur expedita cumque atque est.',
    longText:
      'Maiores qui aspernatur suscipit officiis repellendus architecto est earum rerum. Sunt aut reiciendis corporis quasi repellendus. Assumenda et voluptatem blanditiis consequuntur mollitia eveniet. Id eius repellendus ipsam at. Saepe aliquid esse omnis eum voluptatem ut sed et.',
  },
  {
    index: 112,
    bgColor: '#f5f5f5',
    name: 'Daisy Romaguera',
    initials: 'DR',
    jobTitle: 'Corporate Markets Associate',
    description: 'Culpa quas culpa voluptas soluta nam eum adipisci minus et.',
    longText:
      'Praesentium tenetur sed in a quisquam laborum. Totam quos similique. Quos aliquid tempore et nisi enim eveniet perferendis molestiae est.',
  },
  {
    index: 113,
    bgColor: 'white',
    name: 'Gregoria Powlowski',
    initials: 'GP',
    jobTitle: 'Human Applications Supervisor',
    description:
      'Iste aliquid nisi veritatis voluptatibus cum tempora officiis non occaecati.',
    longText:
      'Quod provident omnis et aut quos. Ea iure quisquam numquam molestias dignissimos ut quia labore. Aut quisquam delectus animi qui reprehenderit ullam accusantium distinctio. Accusantium ut eos ut illo cupiditate a. Voluptatibus placeat est veniam ipsum. Et eligendi possimus eos maiores vero id libero iste nostrum.',
  },
  {
    index: 114,
    bgColor: '#f5f5f5',
    name: 'Valentine Schowalter',
    initials: 'VS',
    jobTitle: 'Product Tactics Strategist',
    description: 'Voluptatem quasi odit nobis labore sint ea illo quia autem.',
    longText:
      'Eius porro fugit. Quibusdam maxime dolorem quibusdam maxime quas laudantium recusandae quibusdam. Ratione eaque enim laboriosam recusandae error. Quaerat rerum et voluptatem vel modi sequi laborum rerum. Et veritatis ea molestiae necessitatibus neque harum eius.',
  },
  {
    index: 115,
    bgColor: 'white',
    name: 'Jayson Schowalter',
    initials: 'JS',
    jobTitle: 'Regional Applications Consultant',
    description: 'Enim cum voluptatum quia animi ipsum corporis iusto molestiae vitae.',
    longText:
      'Est quisquam est sit ullam quas magni occaecati. Nam tenetur qui. Eos dolor vel voluptas officia labore delectus officiis.',
  },
  {
    index: 116,
    bgColor: '#f5f5f5',
    name: 'Humberto Hand',
    initials: 'HH',
    jobTitle: 'Direct Metrics Liaison',
    description: 'Expedita quae iste esse id adipisci sit qui incidunt ut.',
    longText:
      'Et consequatur aut harum pariatur similique et aut accusantium doloremque. Sit repellat laborum officia quibusdam est nihil nam. Hic sit aliquam natus tempore culpa magni. Atque et voluptates veritatis rerum non.',
  },
  {
    index: 117,
    bgColor: 'white',
    name: 'Thomas Luettgen',
    initials: 'TL',
    jobTitle: 'National Group Agent',
    description: 'Voluptas vero incidunt enim id esse facilis odit accusantium earum.',
    longText:
      'Repellat distinctio adipisci labore possimus veniam. Facilis mollitia odio non cupiditate quidem incidunt cum aut et. Voluptatem consequatur veniam sunt ut. Ut blanditiis rerum saepe dolorem libero. Consectetur velit a dicta consequuntur voluptatibus fugit maxime enim rerum. Voluptas itaque omnis consequatur necessitatibus sint distinctio sed.',
  },
  {
    index: 118,
    bgColor: '#f5f5f5',
    name: 'Donna Johnson',
    initials: 'DJ',
    jobTitle: 'Chief Markets Developer',
    description: 'Qui in labore vitae consequatur perspiciatis dolorum et ut modi.',
    longText:
      'Incidunt qui et a quae et ex quis. Et ullam ab cupiditate voluptates modi non. Voluptatem vel eveniet natus nam. Qui totam commodi ipsum eum fugit accusamus nisi. Itaque consequatur adipisci nulla repellat unde ea iste tempore. Quidem eos laudantium adipisci doloribus voluptate optio ea.',
  },
  {
    index: 119,
    bgColor: 'white',
    name: 'Malvina Corkery',
    initials: 'MC',
    jobTitle: 'Global Applications Producer',
    description: 'Aspernatur eum suscipit unde quisquam hic eum aspernatur velit fugiat.',
    longText:
      'Debitis consectetur aut corporis laboriosam iste. In quas accusantium dolorem. Laudantium voluptatem similique doloribus eos eos.',
  },
  {
    index: 120,
    bgColor: '#f5f5f5',
    name: 'Doris Jones',
    initials: 'DJ',
    jobTitle: 'Investor Metrics Developer',
    description: 'Consequatur in nulla blanditiis accusamus est impedit ipsa eum vel.',
    longText:
      'Id aperiam consectetur ipsam sint qui inventore sit et. Enim esse veniam quia dolores voluptas voluptas et omnis voluptas. Iste eos omnis architecto harum sunt sit aut.',
  },
  {
    index: 121,
    bgColor: 'white',
    name: 'Dudley Kertzmann',
    initials: 'DK',
    jobTitle: 'Product Operations Associate',
    description: 'Sed iusto mollitia aut fugiat totam mollitia dolores occaecati totam.',
    longText:
      'Omnis aliquam praesentium iure sint maxime quis. Distinctio consectetur iusto consequuntur possimus voluptatum facere. Occaecati dolorem repellat nobis qui officia. Qui est ut nostrum. Laudantium similique dolore. Corporis nisi dolores voluptatem sed qui.',
  },
  {
    index: 122,
    bgColor: '#f5f5f5',
    name: 'Ethelyn Schuster',
    initials: 'ES',
    jobTitle: 'Direct Brand Consultant',
    description: 'Odit quos odit sapiente temporibus ut molestiae debitis magnam labore.',
    longText:
      'Sint vel suscipit aut minus neque consectetur sint. Deserunt provident aspernatur. Doloremque vitae corporis eveniet provident dolor atque fugit porro quos. Eius adipisci facilis. Minus atque deleniti ipsa. Fuga labore exercitationem qui eum et quia deleniti.',
  },
  {
    index: 123,
    bgColor: 'white',
    name: 'Dolly Zulauf',
    initials: 'DZ',
    jobTitle: 'Lead Accounts Consultant',
    description: 'Tempora amet pariatur aut molestias sit nesciunt sint in laborum.',
    longText:
      'Alias et similique ab dolores ullam aut provident. Distinctio dolorem aut dolorem dolorem sequi modi at inventore culpa. Adipisci et eaque amet fugiat optio nulla. Dolor quidem aut voluptatibus voluptatibus. In accusamus autem quia fugit similique dolorem.',
  },
  {
    index: 124,
    bgColor: '#f5f5f5',
    name: 'Burdette Christiansen',
    initials: 'BC',
    jobTitle: 'Investor Quality Producer',
    description: 'Magni quos esse vel et possimus et libero voluptas quibusdam.',
    longText:
      'Omnis voluptatem tempora. Rem eum molestias. Ipsam blanditiis rem qui similique aperiam sit nihil autem. Deserunt voluptates quia soluta dolor qui.',
  },
  {
    index: 125,
    bgColor: 'white',
    name: 'Cassie Toy',
    initials: 'CT',
    jobTitle: 'Legacy Web Coordinator',
    description:
      'Consequatur sunt odio unde nihil laudantium facilis voluptatem consequatur iure.',
    longText:
      'Omnis maiores nisi necessitatibus. Ut deleniti officia consequatur et dolor dignissimos corporis. Qui culpa facilis sed necessitatibus qui et nisi aliquam voluptatem. Quia eum sequi illo explicabo ex dolores. Aut dolore officiis at ut et consequuntur itaque cupiditate.',
  },
  {
    index: 126,
    bgColor: '#f5f5f5',
    name: 'Florence Hayes',
    initials: 'FH',
    jobTitle: 'Forward Group Specialist',
    description:
      'Corporis enim reiciendis optio animi fuga voluptatem quam ratione consectetur.',
    longText:
      'Totam tenetur ipsa. Quia quo consectetur magnam. Id facilis quas eum voluptatibus ullam necessitatibus aut quis aperiam. In similique et voluptatum dolorem consequuntur corporis ut earum.',
  },
  {
    index: 127,
    bgColor: 'white',
    name: 'Shawna Klein',
    initials: 'SK',
    jobTitle: 'International Integration Engineer',
    description:
      'Aperiam animi perspiciatis repudiandae cum aperiam expedita qui esse minima.',
    longText:
      'Nihil ipsa omnis quidem magni. Sed quam ullam. Rem doloremque fugiat rerum quidem sapiente. Consequatur et iste quo iusto amet culpa totam dignissimos itaque. Aut sit enim eveniet libero expedita repudiandae sunt omnis. Velit vitae est quo dolorem consectetur molestiae.',
  },
  {
    index: 128,
    bgColor: '#f5f5f5',
    name: 'Myriam Jenkins',
    initials: 'MJ',
    jobTitle: 'Chief Infrastructure Engineer',
    description: 'Reprehenderit et adipisci ut porro reiciendis ea voluptatem quam est.',
    longText:
      'Consequuntur et rerum qui et. Et veritatis nihil soluta. Beatae et impedit. Dignissimos adipisci sit enim tempore libero. Incidunt quaerat tenetur enim quis. Nisi dolorem beatae voluptas quo rerum consectetur et.',
  },
  {
    index: 129,
    bgColor: 'white',
    name: 'Queenie Grant',
    initials: 'QG',
    jobTitle: 'Senior Implementation Analyst',
    description: 'Cumque modi rerum vel quis nostrum porro laboriosam fugiat quasi.',
    longText:
      'Eius nam et quibusdam nisi. Error dolores aut est porro voluptatem perspiciatis officiis corrupti. Corrupti et est qui repellat ex maiores sed. Dicta minima tenetur atque cupiditate eos natus possimus. Modi dolor autem dolore ut.',
  },
  {
    index: 130,
    bgColor: '#f5f5f5',
    name: 'Ally Hahn',
    initials: 'AH',
    jobTitle: 'Dynamic Data Designer',
    description: 'Nesciunt aut architecto eum quas ea quasi consequatur minus sint.',
    longText:
      'Temporibus et perferendis pariatur rerum esse. Fugit qui sed alias omnis. Voluptatem eum ab autem. Doloremque voluptas fuga sunt itaque quasi nesciunt. Aperiam ab labore esse eum consequuntur tempore voluptatem. Hic placeat commodi aliquam repellendus debitis.',
  },
  {
    index: 131,
    bgColor: 'white',
    name: 'Lexi Hoppe',
    initials: 'LH',
    jobTitle: 'Forward Applications Administrator',
    description:
      'Pariatur impedit assumenda similique ea in fuga vero perferendis quasi.',
    longText:
      'Laborum fuga aut magni quisquam optio eveniet dicta quia. Qui error ea vero minima esse recusandae consequatur. Nesciunt sunt quia doloremque delectus nam. Consectetur animi qui dignissimos ut at sequi.',
  },
  {
    index: 132,
    bgColor: '#f5f5f5',
    name: 'Noe Pfeffer',
    initials: 'NP',
    jobTitle: 'Product Data Architect',
    description: 'Cupiditate cum nihil harum commodi ad quo sunt voluptas voluptas.',
    longText:
      'Ad aut aut ut et facere. Fuga beatae iusto quaerat voluptas voluptatum consequuntur blanditiis nulla. Ea nostrum dolorem eos assumenda non. Qui saepe amet excepturi quibusdam aut debitis quod.',
  },
  {
    index: 133,
    bgColor: 'white',
    name: 'Rod Bogan',
    initials: 'RB',
    jobTitle: 'Direct Quality Engineer',
    description: 'Sunt et consequatur soluta explicabo cum et at et ex.',
    longText:
      'Hic facere explicabo eos inventore vel nam. Corporis neque nobis tempora quibusdam. Optio a ex et rerum.',
  },
  {
    index: 134,
    bgColor: '#f5f5f5',
    name: 'Tomasa Effertz',
    initials: 'TE',
    jobTitle: 'Central Assurance Manager',
    description: 'Cupiditate minus quas facere culpa possimus omnis sit est culpa.',
    longText:
      'Excepturi nemo illum. Magnam enim non. Harum temporibus excepturi aspernatur qui quisquam. Eveniet molestias quis quos. Rerum et possimus ut laboriosam. Sequi quod ut magni culpa ea sint.',
  },
  {
    index: 135,
    bgColor: 'white',
    name: 'Jayden Carroll',
    initials: 'JC',
    jobTitle: 'Principal Applications Strategist',
    description:
      'Libero et voluptatem officia ducimus ratione neque quasi recusandae quisquam.',
    longText:
      'Assumenda eaque ut dolorem officia enim. Consequuntur modi corrupti ipsum. Ratione et ut.',
  },
  {
    index: 136,
    bgColor: '#f5f5f5',
    name: 'Curt Bergnaum',
    initials: 'CB',
    jobTitle: 'District Functionality Producer',
    description: 'Molestiae vitae error quod voluptas pariatur veniam aliquid sint est.',
    longText:
      'Odit omnis non enim consequatur necessitatibus. Adipisci placeat quibusdam quisquam sint quis cum harum sunt officiis. Facilis dolorum consequatur modi non et omnis quo. Rerum cupiditate beatae iste eius sit rem. Quis est vitae dolorem cum neque.',
  },
  {
    index: 137,
    bgColor: 'white',
    name: 'Dovie Emard',
    initials: 'DE',
    jobTitle: 'Forward Directives Liaison',
    description:
      'Minima animi voluptatibus voluptatum consequatur quis harum dolor voluptatibus impedit.',
    longText:
      'Officiis aut aspernatur porro aut sint. Eveniet qui perferendis. Repudiandae commodi voluptas dolorum et id nesciunt. Sunt sed quam ipsa illum sunt amet aut ipsa odio. Qui reprehenderit occaecati magni assumenda nihil aliquid voluptate.',
  },
  {
    index: 138,
    bgColor: '#f5f5f5',
    name: 'Seth Lynch',
    initials: 'SL',
    jobTitle: 'Investor Program Engineer',
    description: 'Rerum perspiciatis ut voluptas aut repellendus modi ipsum sit est.',
    longText:
      'Ea quis ullam unde consectetur id. Sapiente libero distinctio eligendi eum nulla sit maiores non quis. Similique praesentium ab. Accusamus porro tempore omnis incidunt quisquam et velit culpa voluptatem. Velit tempore ducimus recusandae adipisci provident aliquid.',
  },
  {
    index: 139,
    bgColor: 'white',
    name: 'Elmo Pfeffer',
    initials: 'EP',
    jobTitle: 'Dynamic Functionality Specialist',
    description: 'Fugit consequatur velit sed et harum voluptas ipsa sed voluptas.',
    longText:
      'Voluptates consequuntur nam. Est et laudantium sunt delectus rerum. Voluptatem deserunt voluptatibus quo eveniet ab voluptates. Eos aliquid facere alias in.',
  },
  {
    index: 140,
    bgColor: '#f5f5f5',
    name: 'Eusebio McGlynn',
    initials: 'EM',
    jobTitle: 'Corporate Branding Liaison',
    description: 'Qui qui dicta iusto sit ab facilis provident earum et.',
    longText:
      'Repellendus eius itaque. Incidunt cumque mollitia provident sit veniam perspiciatis maxime. Sit modi unde enim numquam voluptates maiores.',
  },
  {
    index: 141,
    bgColor: 'white',
    name: 'Lottie Stanton',
    initials: 'LS',
    jobTitle: 'Legacy Infrastructure Architect',
    description: 'Dolorem possimus ipsam in nesciunt qui fugit sed vel et.',
    longText:
      'Dolores non quo corrupti perspiciatis. Mollitia doloribus voluptas illum. Placeat neque nulla est. Neque cumque necessitatibus et deserunt.',
  },
  {
    index: 142,
    bgColor: '#f5f5f5',
    name: 'Ila Fritsch',
    initials: 'IF',
    jobTitle: 'Regional Assurance Developer',
    description:
      'Expedita tenetur dolorem et consequatur reiciendis pariatur et aperiam eligendi.',
    longText:
      'Voluptatem eos error quo. Sapiente quis ipsam. Sapiente voluptas ut veniam. Natus id soluta delectus dolores expedita. Est in vitae necessitatibus consequatur. Tempore ut tempora aliquid deleniti quibusdam est debitis quia repellat.',
  },
  {
    index: 143,
    bgColor: 'white',
    name: 'Isabel Hills',
    initials: 'IH',
    jobTitle: 'Corporate Operations Engineer',
    description: 'Excepturi enim quo aut et vel nam et et magni.',
    longText:
      'Id dolores debitis quae. Facilis est nihil est ullam delectus quibusdam. Ipsam et doloribus voluptatem officiis voluptatum explicabo qui eligendi repellat. Harum reprehenderit consequatur molestiae eum aspernatur ut esse maiores iure.',
  },
  {
    index: 144,
    bgColor: '#f5f5f5',
    name: 'Christina McCullough',
    initials: 'CM',
    jobTitle: 'Senior Quality Liaison',
    description: 'Enim hic eos dolorem voluptatem maxime dolorem eos molestias atque.',
    longText:
      'Cum est enim eveniet dolor tempore earum dignissimos. Nam aperiam molestiae consequuntur possimus qui accusamus. Iure qui quisquam rerum quos totam consequatur maxime molestias sed. Ex amet vel ut saepe ipsum. Vero dolor possimus dolores ad quam. Praesentium ratione assumenda incidunt aut cupiditate.',
  },
  {
    index: 145,
    bgColor: 'white',
    name: 'Kobe Marquardt',
    initials: 'KM',
    jobTitle: 'Internal Quality Supervisor',
    description:
      'Ad sit nemo ducimus consequatur repellendus tenetur omnis molestiae consequatur.',
    longText:
      'Eaque est provident omnis quibusdam omnis corrupti. Modi recusandae eius autem sunt magnam. Ut id excepturi eius facilis aut consequuntur. Aliquam neque quas ut.',
  },
  {
    index: 146,
    bgColor: '#f5f5f5',
    name: 'Joana Kassulke',
    initials: 'JK',
    jobTitle: 'Investor Brand Liaison',
    description: 'Temporibus ut modi impedit quos vel est eveniet et quod.',
    longText:
      'Ut ipsa qui dignissimos ut neque quo id deserunt. Labore et molestiae eum mollitia quas. Natus officia ullam et qui voluptatum quae.',
  },
  {
    index: 147,
    bgColor: 'white',
    name: 'Marco Frami',
    initials: 'MF',
    jobTitle: 'Legacy Operations Planner',
    description:
      'Molestiae totam consequatur molestiae perspiciatis fuga aut voluptates reprehenderit magni.',
    longText:
      'Est omnis rem repellendus. Corrupti dolorum alias quis facere. In eum neque.',
  },
  {
    index: 148,
    bgColor: '#f5f5f5',
    name: 'Sherman Greenfelder',
    initials: 'SG',
    jobTitle: 'Internal Directives Manager',
    description:
      'Voluptatem dolore voluptatum voluptatem alias alias est quis architecto voluptatem.',
    longText:
      'Rerum laudantium ea sint. Ducimus officia totam ea nam voluptatem non. Ratione omnis expedita totam qui velit commodi. Inventore iure voluptas ut dolorum pariatur. Ratione molestiae et. Sed rerum nemo quo laboriosam.',
  },
  {
    index: 149,
    bgColor: 'white',
    name: 'Foster Langosh',
    initials: 'FL',
    jobTitle: 'Regional Identity Associate',
    description: 'Et architecto hic libero sed laudantium et et consectetur nisi.',
    longText:
      'Error quia natus libero quo quis omnis. Vero minus recusandae et ut ut ab dolores. Et sapiente magnam omnis optio voluptatibus. Ratione non sint. Veniam fuga sequi. Consequatur ut voluptas asperiores qui et facere laborum et exercitationem.',
  },
  {
    index: 150,
    bgColor: '#f5f5f5',
    name: 'Annamarie Yundt',
    initials: 'AY',
    jobTitle: 'International Communications Engineer',
    description: 'Placeat voluptas voluptas quo rerum qui vero illum neque quia.',
    longText:
      'Reprehenderit maiores quia quas ipsum dolor sed. Assumenda laborum amet voluptates. Ullam et qui consequatur in aut. Laudantium laudantium nisi doloremque occaecati qui sed nihil necessitatibus. Autem nesciunt voluptatem similique deleniti voluptatum.',
  },
  {
    index: 151,
    bgColor: 'white',
    name: 'Raleigh Barton',
    initials: 'RB',
    jobTitle: 'Product Markets Agent',
    description: 'Sit et in alias qui quos consequatur ducimus perferendis repellat.',
    longText:
      'Perspiciatis est et dolor sit. Nisi consequuntur quia quidem et officia esse et in. Beatae deleniti suscipit consequuntur quas vitae voluptas. Perferendis dolores et atque quas qui quis non saepe.',
  },
  {
    index: 152,
    bgColor: '#f5f5f5',
    name: 'Reanna Crist',
    initials: 'RC',
    jobTitle: 'Product Functionality Facilitator',
    description: 'Ea et quia velit a placeat non totam cupiditate quam.',
    longText:
      'Atque harum provident. Dignissimos optio eligendi quasi qui quas. Libero eos et corrupti tempora ratione tempore possimus qui. Dolores minus deserunt sed et fugiat non perferendis accusamus.',
  },
  {
    index: 153,
    bgColor: 'white',
    name: 'Mae Wisoky',
    initials: 'MW',
    jobTitle: 'Legacy Paradigm Developer',
    description:
      'Nulla excepturi dolores et similique quod sint impedit molestias voluptas.',
    longText:
      'Deleniti cum ducimus voluptatem fugit quibusdam provident eligendi explicabo enim. Sapiente veniam amet autem et. Vel et ipsa voluptatem et quae exercitationem. Et exercitationem aspernatur. Sint at quaerat cumque et repellat blanditiis quos nostrum.',
  },
  {
    index: 154,
    bgColor: '#f5f5f5',
    name: 'Khalid Ruecker',
    initials: 'KR',
    jobTitle: 'Lead Markets Supervisor',
    description:
      'Dolores aperiam modi exercitationem nihil accusamus autem aspernatur delectus sunt.',
    longText:
      'Rerum id placeat ullam vel voluptas. Nesciunt labore a accusamus vero dolor est labore distinctio. Qui qui in amet ut voluptatibus quia.',
  },
  {
    index: 155,
    bgColor: 'white',
    name: 'Vicente Weber',
    initials: 'VW',
    jobTitle: 'International Functionality Representative',
    description: 'Est earum ut qui omnis sint et aliquid ipsam et.',
    longText:
      'Sunt inventore labore earum pariatur recusandae suscipit eaque. Molestiae sed non. Quod sed eveniet inventore inventore qui aspernatur assumenda beatae sed. Voluptatem dolor non explicabo beatae aliquid fugiat.',
  },
  {
    index: 156,
    bgColor: '#f5f5f5',
    name: 'Coty Jaskolski',
    initials: 'CJ',
    jobTitle: 'Customer Applications Designer',
    description: 'Molestiae aut vel ut odit assumenda ad quo in quos.',
    longText:
      'Explicabo aut tenetur numquam adipisci dolor omnis. Labore beatae atque quia aliquam quo. Officiis alias blanditiis magni consectetur ratione magnam enim maiores temporibus. Velit et rerum dolorum ratione ducimus omnis architecto aut consequatur.',
  },
  {
    index: 157,
    bgColor: 'white',
    name: 'Lizzie Dietrich',
    initials: 'LD',
    jobTitle: 'Chief Brand Director',
    description:
      'Corporis pariatur et eius id corrupti explicabo dignissimos velit recusandae.',
    longText:
      'Corporis velit eos et occaecati ducimus ex ullam. Et vero aut sunt accusantium rerum. Enim laudantium quia fugit veniam qui. Omnis eos excepturi vero voluptatem doloremque. Iure animi aspernatur officiis tempore minus suscipit. Maxime voluptates voluptas deleniti dolores aut mollitia vero.',
  },
  {
    index: 158,
    bgColor: '#f5f5f5',
    name: 'Louisa Weissnat',
    initials: 'LW',
    jobTitle: 'Corporate Quality Developer',
    description:
      'Voluptas explicabo quia incidunt esse praesentium excepturi et ea doloremque.',
    longText:
      'Aut quia sequi sequi ab nihil beatae rem unde cupiditate. Et inventore sunt recusandae sunt et. Quisquam modi amet molestiae a reprehenderit.',
  },
  {
    index: 159,
    bgColor: 'white',
    name: 'Justina Lebsack',
    initials: 'JL',
    jobTitle: 'Internal Solutions Facilitator',
    description: 'Velit amet cum quod vitae nobis aut sed id voluptatibus.',
    longText:
      'Rerum vero rerum est nihil perspiciatis qui suscipit aut. Expedita dolorem sint ex dolores laboriosam cum est sed. Distinctio beatae dolores sit repellat.',
  },
  {
    index: 160,
    bgColor: '#f5f5f5',
    name: 'Zula Kuhn',
    initials: 'ZK',
    jobTitle: 'Chief Configuration Technician',
    description: 'Doloremque maiores odio quidem aut deleniti quidem eos illo unde.',
    longText:
      'Soluta illum qui dignissimos enim eius cumque dignissimos debitis. Quam a minima a commodi molestiae qui exercitationem aliquam. Qui cupiditate qui sint incidunt. Consequuntur asperiores ut dicta et maxime.',
  },
  {
    index: 161,
    bgColor: 'white',
    name: 'Jammie Johns',
    initials: 'JJ',
    jobTitle: 'Central Response Supervisor',
    description: 'Culpa qui autem magni quis vero ducimus veniam aut mollitia.',
    longText:
      'Ut temporibus et. Ipsum mollitia harum est voluptas aspernatur eius porro consequatur quia. Nisi necessitatibus enim harum ut. Voluptatem cum voluptatem praesentium ab.',
  },
  {
    index: 162,
    bgColor: '#f5f5f5',
    name: 'Albin Wunsch',
    initials: 'AW',
    jobTitle: 'Legacy Usability Technician',
    description: 'Et ut sunt maxime fuga nihil modi magnam eaque aliquid.',
    longText:
      'Non aut id non numquam at tempora architecto autem. Ratione accusantium at numquam voluptatibus. Consequuntur numquam dolores ratione incidunt veritatis nostrum ex ea suscipit. Vel inventore blanditiis repudiandae non ut accusantium est. Sunt qui sit quia sed soluta quas doloribus.',
  },
  {
    index: 163,
    bgColor: 'white',
    name: 'Imelda Lang',
    initials: 'IL',
    jobTitle: 'Central Implementation Facilitator',
    description:
      'Ratione qui exercitationem vel voluptas officia deserunt temporibus alias est.',
    longText:
      'Eum qui ut temporibus quia quia ut maxime atque quam. Quod accusantium minima mollitia laborum libero minima. Aliquid ex voluptas ea est maxime aut non iste quibusdam. Aut cupiditate facere nam.',
  },
  {
    index: 164,
    bgColor: '#f5f5f5',
    name: 'Alia Moore',
    initials: 'AM',
    jobTitle: 'Central Identity Producer',
    description: 'Expedita distinctio reiciendis sed eaque sed quis sed deleniti et.',
    longText:
      'Molestiae vel ea voluptates repudiandae atque corporis ea temporibus et. Voluptatem aut facere. Cumque similique voluptatibus odit earum at repellendus quo ut officiis.',
  },
  {
    index: 165,
    bgColor: 'white',
    name: 'Ilene Kovacek',
    initials: 'IK',
    jobTitle: 'Customer Infrastructure Technician',
    description: 'Et odit harum pariatur sapiente eum et qui eligendi ratione.',
    longText:
      'A omnis facilis et illum delectus. Esse rem deleniti necessitatibus sit hic incidunt numquam eum. Sed repellat est et consequuntur eum quisquam architecto.',
  },
  {
    index: 166,
    bgColor: '#f5f5f5',
    name: 'Jerad Schowalter',
    initials: 'JS',
    jobTitle: 'Regional Research Representative',
    description:
      'Voluptatem facilis facilis ut commodi dignissimos repellendus aut occaecati et.',
    longText:
      'Est non veritatis. Sit cum adipisci numquam nihil repudiandae unde ut assumenda. Libero rem quod delectus eos. Vel illo iste culpa commodi.',
  },
  {
    index: 167,
    bgColor: 'white',
    name: 'Betsy Cruickshank',
    initials: 'BC',
    jobTitle: 'Dynamic Factors Consultant',
    description:
      'Et praesentium laboriosam laboriosam at inventore sed alias temporibus ut.',
    longText:
      'Nam eum minus fuga alias. Voluptatem aut perspiciatis natus voluptate molestiae ut. Impedit et tempora esse ad iure et aperiam assumenda cupiditate. Itaque non eos est reiciendis deserunt sequi repellat odit.',
  },
  {
    index: 168,
    bgColor: '#f5f5f5',
    name: 'Winona Schultz',
    initials: 'WS',
    jobTitle: 'Principal Integration Strategist',
    description: 'Vitae qui minima quia unde sunt ea quia vel ut.',
    longText:
      'Magni fuga beatae non nesciunt temporibus accusantium nulla quisquam. Et magnam beatae ratione delectus nihil enim esse excepturi. Numquam tenetur asperiores ipsam amet velit.',
  },
  {
    index: 169,
    bgColor: 'white',
    name: 'Katlyn Keeling',
    initials: 'KK',
    jobTitle: 'Corporate Metrics Strategist',
    description: 'Et fugit autem quasi nihil sunt repellendus corporis est minima.',
    longText:
      'Veritatis aliquam blanditiis. Exercitationem illo sed ab unde sed. Maiores iusto adipisci est quas sit architecto aspernatur sed. Quia molestiae non in quo cumque. Et aut in sint. Voluptas eaque maiores aut expedita facilis ea.',
  },
  {
    index: 170,
    bgColor: '#f5f5f5',
    name: 'Dallin Greenfelder',
    initials: 'DG',
    jobTitle: 'Chief Optimization Representative',
    description: 'Consequuntur maxime sint harum qui et et ut ut aspernatur.',
    longText:
      'Quia alias dicta ea consequuntur consectetur molestiae doloremque iste. Quas aut quia numquam veniam iste ipsam eos ducimus. Necessitatibus necessitatibus doloremque omnis quidem consequatur fugit nisi quod consectetur. Veritatis nemo eaque qui omnis. Sunt nisi dolorum rem quam ut fugit repudiandae est perferendis.',
  },
  {
    index: 171,
    bgColor: 'white',
    name: 'Cletus Langosh',
    initials: 'CL',
    jobTitle: 'Direct Security Planner',
    description: 'Aut ratione pariatur modi beatae maxime et voluptatum beatae et.',
    longText:
      'Soluta ullam cumque culpa modi esse corporis beatae at voluptate. Dolores id odit explicabo tempora. Doloremque a pariatur sapiente molestias. Eius sit natus qui dolorem ab. Quo vel molestiae iure sed.',
  },
  {
    index: 172,
    bgColor: '#f5f5f5',
    name: 'Trinity Moen',
    initials: 'TM',
    jobTitle: 'Dynamic Operations Liaison',
    description:
      'Doloremque error qui est ad in dolor nesciunt consectetur exercitationem.',
    longText:
      'Voluptas minima molestias. Voluptatem nam at at et aut et sapiente. Id libero quaerat nihil id quibusdam numquam nam rerum. Vero itaque optio sunt fuga iste odio occaecati doloribus.',
  },
  {
    index: 173,
    bgColor: 'white',
    name: 'Leora Gutkowski',
    initials: 'LG',
    jobTitle: 'Forward Applications Designer',
    description:
      'Voluptatem ea suscipit sunt consequuntur sed eos eaque animi perferendis.',
    longText:
      'Reprehenderit et deleniti est corporis aut dignissimos ipsa consequuntur. Ut illo ipsam optio eius impedit in iure voluptatem consequatur. Magni vero nulla. Sed tempora in laborum. Voluptate rerum quia accusantium dolorem amet natus rerum dolores.',
  },
  {
    index: 174,
    bgColor: '#f5f5f5',
    name: 'Lucy Grant',
    initials: 'LG',
    jobTitle: 'Future Integration Strategist',
    description: 'Repellat qui tempora aspernatur ut quisquam beatae qui est ipsa.',
    longText:
      'Consequatur earum provident. Rem voluptatem est quis omnis consequatur. Quo nemo repudiandae aut. Et error quisquam qui assumenda voluptate debitis enim.',
  },
  {
    index: 175,
    bgColor: 'white',
    name: 'Orval Sanford',
    initials: 'OS',
    jobTitle: 'District Marketing Architect',
    description: 'Ut ut alias sit nesciunt incidunt eaque est error dolorem.',
    longText:
      'Repudiandae voluptatem aut corporis. Non aliquid cum doloribus qui ab porro iste. Recusandae atque tenetur eos. Modi deserunt fuga. Optio eum voluptates. Ipsam laboriosam ea at nam inventore possimus.',
  },
  {
    index: 176,
    bgColor: '#f5f5f5',
    name: 'Kaylie Pfannerstill',
    initials: 'KP',
    jobTitle: 'Legacy Functionality Administrator',
    description: 'Et ex dolor qui nemo cum ipsum fuga repellat veniam.',
    longText:
      'Deserunt quia id praesentium. Libero similique inventore architecto cupiditate nesciunt. Qui incidunt tempore ducimus a sunt quas. Sit recusandae modi omnis rem dolor exercitationem et officiis. Velit numquam enim.',
  },
  {
    index: 177,
    bgColor: 'white',
    name: 'Heber Williamson',
    initials: 'HW',
    jobTitle: 'Product Accounts Officer',
    description: 'Sint sunt esse dolore qui vero a quasi repellendus deleniti.',
    longText:
      'Ut odio consequatur illum omnis vitae. Aut hic velit animi libero aut accusamus soluta cum. Qui omnis porro doloremque iste neque est nemo. Distinctio dolor illum et facere. Ipsa voluptatem neque voluptate perspiciatis tenetur repudiandae.',
  },
  {
    index: 178,
    bgColor: '#f5f5f5',
    name: 'Eryn Batz',
    initials: 'EB',
    jobTitle: 'Human Functionality Liaison',
    description: 'Ducimus quod optio nam eos quia nobis molestiae eum doloribus.',
    longText:
      'Sit autem beatae. Ut aut nemo earum eveniet qui ut neque. Optio reprehenderit nihil doloremque maiores. Velit labore quia omnis beatae reprehenderit sed dolores. Provident et aperiam. Aspernatur earum esse aliquam dolorem voluptas.',
  },
  {
    index: 179,
    bgColor: 'white',
    name: 'Tracey Flatley',
    initials: 'TF',
    jobTitle: 'Senior Division Orchestrator',
    description:
      'Dolorem aliquam aliquid suscipit cumque sit ut qui reprehenderit nobis.',
    longText:
      'Id qui quam. Omnis cumque sit veniam sit quod. Nemo ad earum et eum est nihil nam.',
  },
  {
    index: 180,
    bgColor: '#f5f5f5',
    name: 'Isai Lindgren',
    initials: 'IL',
    jobTitle: 'Dynamic Usability Strategist',
    description: 'Dolorem quasi ad magni voluptas ipsum dolore ullam sit maiores.',
    longText:
      'Eius corporis quis velit dignissimos autem laudantium laborum. Culpa tempora iure cumque neque. Sed sed aperiam soluta et. Minus non repellat totam rerum enim suscipit.',
  },
  {
    index: 181,
    bgColor: 'white',
    name: 'Arlo Stark',
    initials: 'AS',
    jobTitle: 'Product Data Executive',
    description:
      'Accusamus ratione cum assumenda nulla sapiente nihil qui aliquam aliquid.',
    longText:
      'Quaerat tempore saepe voluptates. Id consequatur et ad iure neque unde ut. Qui cupiditate explicabo animi omnis. Sit exercitationem maiores assumenda sequi. Voluptas laudantium omnis quam eum quisquam sed. Magni tempore recusandae consectetur ducimus.',
  },
  {
    index: 182,
    bgColor: '#f5f5f5',
    name: 'Sabrina Zemlak',
    initials: 'SZ',
    jobTitle: 'Lead Group Strategist',
    description: 'Et et et odio asperiores pariatur omnis vel expedita vitae.',
    longText:
      'Ut voluptatem omnis ratione occaecati. Eveniet ea sit voluptates qui non expedita. Temporibus sapiente modi omnis numquam sapiente eos fuga et. Est et tempora.',
  },
  {
    index: 183,
    bgColor: 'white',
    name: 'Montana Keeling',
    initials: 'MK',
    jobTitle: 'National Communications Consultant',
    description:
      'Minima laboriosam voluptates perferendis necessitatibus cupiditate non architecto eius quam.',
    longText:
      'Modi at enim molestiae perferendis mollitia pariatur reprehenderit fuga. Officia aperiam fugit. Numquam quis molestiae voluptatem omnis est ut omnis non beatae. Ducimus fugit nihil vero nesciunt eaque et necessitatibus neque. Ut quibusdam perferendis voluptatum eaque. Neque occaecati est dolores sit et animi.',
  },
  {
    index: 184,
    bgColor: '#f5f5f5',
    name: 'Kiara Bahringer',
    initials: 'KB',
    jobTitle: 'Principal Marketing Director',
    description:
      'Laborum adipisci laudantium fuga incidunt corrupti commodi cumque omnis aspernatur.',
    longText:
      'Sint aliquam occaecati nemo odit ullam nobis cupiditate. Soluta facere quisquam. Perspiciatis nesciunt illo corporis repellat. Aspernatur fuga nam earum.',
  },
  {
    index: 185,
    bgColor: 'white',
    name: 'Lizzie McKenzie',
    initials: 'LM',
    jobTitle: 'International Program Agent',
    description: 'Vel non ad suscipit quos minus esse beatae velit maxime.',
    longText:
      'Nemo sint neque deserunt suscipit aut dolor iste sequi. Dolor dolorem magnam veniam qui voluptate molestiae sequi voluptas rerum. Et blanditiis dignissimos velit praesentium mollitia. Qui rerum excepturi iste. Eos perspiciatis saepe quisquam quo. Vero aut ut sint quasi asperiores sit illum quas autem.',
  },
  {
    index: 186,
    bgColor: '#f5f5f5',
    name: 'Claudia Beer',
    initials: 'CB',
    jobTitle: 'Regional Operations Strategist',
    description:
      'Ex accusamus doloremque maiores mollitia pariatur laudantium mollitia fuga ipsam.',
    longText:
      'Voluptatibus similique nam. Vel corporis et magnam ut maiores consequuntur velit nostrum. Eveniet velit optio et voluptatem reiciendis.',
  },
  {
    index: 187,
    bgColor: 'white',
    name: 'Mazie Schuppe',
    initials: 'MS',
    jobTitle: 'Product Marketing Facilitator',
    description:
      'Velit repellendus ipsa perferendis ipsa minus ut qui laboriosam adipisci.',
    longText:
      'Rerum impedit praesentium at natus. Nostrum modi placeat voluptatem non facilis. Enim itaque dolores laborum ut molestias et. Nam aspernatur vero. Qui delectus aut officiis provident quia possimus dicta voluptatum et. Repellat unde error placeat et et tenetur placeat.',
  },
  {
    index: 188,
    bgColor: '#f5f5f5',
    name: 'Howell Hudson',
    initials: 'HH',
    jobTitle: 'Chief Creative Coordinator',
    description: 'Quo architecto impedit nostrum nihil velit quaerat quia qui totam.',
    longText:
      'Enim voluptatem nulla doloribus. Magni et et quisquam in dolorem natus. Alias quis et itaque dolor natus. Sequi eligendi in. Et deleniti et fugiat magnam provident tempore voluptatem error voluptatibus. Commodi iste ab id maiores id cumque.',
  },
  {
    index: 189,
    bgColor: 'white',
    name: 'Lonny Dach',
    initials: 'LD',
    jobTitle: 'Customer Functionality Executive',
    description: 'Rerum officia sed aliquid laudantium quidem est tenetur iste qui.',
    longText:
      'Qui ut omnis voluptas blanditiis sunt porro saepe quis aperiam. Ut cupiditate consequatur officiis veritatis. Corrupti delectus beatae possimus architecto tempora quia ut modi asperiores. Debitis enim sequi molestiae inventore esse. Consequatur perferendis magnam nam. Quae quidem iusto et odit eligendi vitae dolor et enim.',
  },
  {
    index: 190,
    bgColor: '#f5f5f5',
    name: 'Billie Abbott',
    initials: 'BA',
    jobTitle: 'Corporate Research Supervisor',
    description:
      'Laboriosam earum animi magnam et ducimus adipisci nulla perferendis fugit.',
    longText:
      'Veritatis odio labore ad distinctio ipsum voluptatem. Dicta sit consequatur ullam repellendus officiis natus sunt. Fugiat odit voluptatum nisi quo corrupti a quo quis voluptatem.',
  },
  {
    index: 191,
    bgColor: 'white',
    name: 'Jonathon Durgan',
    initials: 'JD',
    jobTitle: 'Corporate Paradigm Representative',
    description: 'Qui laborum ut dolor in eos perferendis et in accusantium.',
    longText:
      'Iste vel quia enim veritatis voluptas quasi eos deleniti. Nihil molestias et dolorum non consequatur. Qui dolorem eum asperiores impedit ducimus fugiat facilis. Cumque ea et placeat commodi autem dolorem vitae optio labore. Voluptas et assumenda est placeat. Est sequi veniam.',
  },
  {
    index: 192,
    bgColor: '#f5f5f5',
    name: 'Keaton Senger',
    initials: 'KS',
    jobTitle: 'Global Usability Technician',
    description:
      'Sint quas voluptatibus tempore dolorum dolores cupiditate eos qui fugit.',
    longText:
      'Vel omnis a eos consequatur. Odit nihil quo architecto quo eius veritatis. Nobis velit velit et ut quas possimus illum eos tempore. Ipsam et tempora voluptatem maiores et at soluta iste enim.',
  },
  {
    index: 193,
    bgColor: 'white',
    name: 'Kathleen Boehm',
    initials: 'KB',
    jobTitle: 'Future Security Facilitator',
    description:
      'Adipisci voluptas quia est distinctio perferendis optio explicabo error voluptatem.',
    longText:
      'Aut et quia sit officiis autem. Dolor nihil minima libero dolorum fugiat et aut ex enim. Saepe aliquid quisquam. Corrupti eos commodi optio consequatur quibusdam sit impedit quod. Praesentium dolore voluptatibus cumque qui necessitatibus. Alias quas eos consequatur laborum aut error eum.',
  },
  {
    index: 194,
    bgColor: '#f5f5f5',
    name: 'Alanna Runolfsson',
    initials: 'AR',
    jobTitle: 'Human Data Assistant',
    description:
      'Velit a voluptatum eos illum tenetur aspernatur similique perspiciatis voluptatem.',
    longText:
      'Voluptatem sunt doloribus quidem et reiciendis ut aut rerum alias. Impedit nostrum eveniet omnis aut est autem. Est dolorem sit sapiente ad quam dolores et. Libero nihil debitis. Vel aut libero facere vitae dignissimos error optio.',
  },
  {
    index: 195,
    bgColor: 'white',
    name: 'Margaretta Herzog',
    initials: 'MH',
    jobTitle: 'Product Applications Coordinator',
    description:
      'Voluptatem similique esse ullam qui voluptatem molestiae minima molestias dolores.',
    longText:
      'Reiciendis velit velit a eveniet aperiam laboriosam. Odio quo eum. Est corrupti ipsa harum illum.',
  },
  {
    index: 196,
    bgColor: '#f5f5f5',
    name: 'Donnell Rippin',
    initials: 'DR',
    jobTitle: 'District Identity Coordinator',
    description: 'Quae ullam ut dolore suscipit possimus ipsa asperiores odio eum.',
    longText:
      'Ut eaque nobis illo temporibus excepturi at quibusdam facere ducimus. Minima nemo et eos ducimus quod ea dolore. Est rerum accusamus magnam soluta. Necessitatibus rerum nemo. Voluptatem voluptas aperiam recusandae doloremque ad qui officiis eaque aliquid.',
  },
  {
    index: 197,
    bgColor: 'white',
    name: 'Kieran Corkery',
    initials: 'KC',
    jobTitle: 'Customer Response Director',
    description: 'Quia earum totam quae consequatur neque voluptates sint aut quo.',
    longText:
      'Repudiandae aut id maxime eaque et numquam voluptatum. Quia qui nam. Unde commodi optio quod illo numquam perspiciatis suscipit.',
  },
  {
    index: 198,
    bgColor: '#f5f5f5',
    name: 'Davion Fritsch',
    initials: 'DF',
    jobTitle: 'Forward Applications Coordinator',
    description:
      'Voluptas blanditiis molestiae impedit qui est quas minus consequuntur eum.',
    longText:
      'Voluptate sed laudantium minus natus sed magnam. Est et suscipit voluptates asperiores consequatur explicabo eos aut accusamus. Facilis dicta voluptate debitis harum ab fuga soluta sed.',
  },
  {
    index: 199,
    bgColor: 'white',
    name: 'Joel Jast',
    initials: 'JJ',
    jobTitle: 'Lead Branding Architect',
    description: 'Ut labore et ut nostrum voluptatem et laborum est tenetur.',
    longText:
      'Ratione mollitia reiciendis. Veniam nam qui non omnis. Unde et voluptate vitae provident sunt dolor recusandae excepturi pariatur.',
  },
  {
    index: 200,
    bgColor: '#f5f5f5',
    name: 'Americo Swaniawski',
    initials: 'AS',
    jobTitle: 'Regional Identity Designer',
    description: 'Nisi ratione eos rem eius ut labore similique voluptas alias.',
    longText:
      'Hic deserunt repellat maiores eum odit deleniti. Est voluptates ab rerum sint est quod. Et unde ut. Quam in ipsa accusamus veritatis veritatis saepe nesciunt incidunt cumque. Sed nisi aut dolore sapiente deleniti placeat atque et cumque.',
  },
  {
    index: 201,
    bgColor: 'white',
    name: 'Lizzie Legros',
    initials: 'LL',
    jobTitle: 'Product Creative Representative',
    description:
      'Perspiciatis distinctio id doloremque commodi dolor magni non necessitatibus voluptas.',
    longText:
      'Consequatur harum aperiam autem. Optio placeat debitis nulla libero. Aut cupiditate laudantium minus nulla. Earum debitis exercitationem non in inventore vero est nobis. Porro qui quia quo ut dolorem enim. Ipsum omnis odit quisquam enim.',
  },
  {
    index: 202,
    bgColor: '#f5f5f5',
    name: 'Darius Effertz',
    initials: 'DE',
    jobTitle: 'Internal Accounts Developer',
    description: 'Soluta qui error harum ut suscipit neque odio ut voluptates.',
    longText:
      'Rerum aut inventore voluptatum vel aliquam non neque. Quia voluptatum quod eveniet. Quasi voluptatem doloremque quia velit. Ut et perferendis. Pariatur omnis autem et nihil. Est voluptas aspernatur ullam assumenda corporis non quis voluptas.',
  },
  {
    index: 203,
    bgColor: 'white',
    name: 'Darrell Bahringer',
    initials: 'DB',
    jobTitle: 'Legacy Program Associate',
    description: 'Quam consequatur delectus ullam a consequatur et magni sapiente quae.',
    longText:
      'Quidem ab numquam. Sunt odit quis minima est ut error deleniti deleniti ut. Id aut voluptas optio debitis non. Voluptatem aut corporis aut id eaque laborum sapiente et corporis. Perferendis aliquid est placeat nobis dolor voluptate. Voluptas qui eos molestiae beatae.',
  },
  {
    index: 204,
    bgColor: '#f5f5f5',
    name: 'Celestine Runolfsdottir',
    initials: 'CR',
    jobTitle: 'Forward Research Director',
    description: 'Qui veritatis ut sint aut facere error similique fugit doloremque.',
    longText:
      'Similique aliquam pariatur corrupti consectetur. Eos sunt officia. Sequi architecto incidunt rerum ipsa qui id quibusdam.',
  },
  {
    index: 205,
    bgColor: 'white',
    name: 'Moshe Sporer',
    initials: 'MS',
    jobTitle: 'Dynamic Infrastructure Assistant',
    description: 'Veritatis amet aut deserunt ratione est aut qui aut sunt.',
    longText:
      'Dolorem facere ratione quis. Commodi et ut inventore nulla omnis et maiores in reprehenderit. Veritatis labore dolorem rerum saepe quibusdam et. Dolorem qui fuga est consequatur accusantium aliquid. Labore aut harum vel sapiente recusandae rem distinctio ad.',
  },
  {
    index: 206,
    bgColor: '#f5f5f5',
    name: 'Name Balistreri',
    initials: 'NB',
    jobTitle: 'Lead Brand Liaison',
    description: 'Officiis sit est sint laudantium optio eos sed non voluptatem.',
    longText:
      'Doloremque et ut quaerat aut voluptates necessitatibus. Nemo fuga et nihil voluptatum consequuntur non aut quam. Et non error omnis architecto facilis. Deleniti voluptatem est.',
  },
  {
    index: 207,
    bgColor: 'white',
    name: 'Lucas Cole',
    initials: 'LC',
    jobTitle: 'Principal Research Assistant',
    description:
      'Voluptatem odit sint molestiae omnis officia rerum voluptatum occaecati ipsa.',
    longText:
      'Ullam excepturi voluptatem et maxime occaecati placeat. Aliquid dolore quibusdam praesentium. Laborum adipisci consequatur voluptatibus.',
  },
  {
    index: 208,
    bgColor: '#f5f5f5',
    name: 'Emmy Feeney',
    initials: 'EF',
    jobTitle: 'Chief Identity Designer',
    description:
      'Repudiandae consequatur dolorem voluptatem blanditiis est neque dolores corrupti facilis.',
    longText:
      'Ad veniam modi vel beatae eum aut. Quo sequi laborum est beatae voluptatem et odit. Nostrum minima quia. At et assumenda veritatis neque. Nesciunt culpa eligendi. Est itaque quia id quo numquam voluptas praesentium aspernatur inventore.',
  },
  {
    index: 209,
    bgColor: 'white',
    name: "General D'Amore",
    initials: 'GD',
    jobTitle: 'Principal Intranet Developer',
    description:
      'Et voluptatum magni reprehenderit autem vel nemo sequi suscipit similique.',
    longText:
      'Similique quidem laborum. Non dolore animi harum laudantium. Culpa minima aspernatur ea ratione et sapiente culpa accusamus omnis. Dignissimos aut in aliquam asperiores molestiae saepe. Recusandae cumque qui ex.',
  },
  {
    index: 210,
    bgColor: '#f5f5f5',
    name: 'Amira Keeling',
    initials: 'AK',
    jobTitle: 'Investor Infrastructure Orchestrator',
    description: 'Est vel et ea culpa ducimus corporis vel doloribus natus.',
    longText:
      'Quia nostrum tempora et consequuntur provident. Ullam nesciunt asperiores earum laborum et. Est sint velit occaecati odio ut nihil odit. Totam molestiae enim modi eos dolor accusantium accusamus adipisci reprehenderit. Nobis itaque nesciunt commodi a nisi voluptates minima sit. Explicabo et architecto rerum laudantium laboriosam minima omnis.',
  },
  {
    index: 211,
    bgColor: 'white',
    name: 'Modesta Goyette',
    initials: 'MG',
    jobTitle: 'Chief Markets Coordinator',
    description:
      'Magni nemo quod et officia reprehenderit possimus distinctio dolores dolore.',
    longText:
      'Nemo et aut debitis enim. Dolores adipisci id. Beatae magni consequatur sed et rerum fugiat.',
  },
  {
    index: 212,
    bgColor: '#f5f5f5',
    name: 'Brayan Homenick',
    initials: 'BH',
    jobTitle: 'National Markets Analyst',
    description:
      'Illum quia iste cupiditate culpa consequatur et mollitia vel voluptates.',
    longText:
      'Vero vero quisquam perspiciatis ab quis possimus sint. Dolorem maiores sint repellat voluptate consequatur sequi eos ex doloribus. Earum voluptatibus recusandae. Id fugit totam perferendis ut. Nostrum expedita et quos eum mollitia praesentium quo dolorum.',
  },
  {
    index: 213,
    bgColor: 'white',
    name: 'Krystal Collier',
    initials: 'KC',
    jobTitle: 'Internal Infrastructure Designer',
    description: 'Debitis quidem non animi voluptas dolorem autem amet vel et.',
    longText:
      'Et nihil ratione qui. Eaque voluptatem cum suscipit ut ea tempora eius. Et in ab.',
  },
  {
    index: 214,
    bgColor: '#f5f5f5',
    name: 'Lillian Blick',
    initials: 'LB',
    jobTitle: 'Legacy Functionality Engineer',
    description:
      'Recusandae necessitatibus quo ratione ut optio architecto atque debitis tempore.',
    longText:
      'Reiciendis omnis exercitationem dicta qui dolore. Ad voluptatibus hic delectus et est similique fugit. Alias pariatur cupiditate ad suscipit maiores autem est id.',
  },
  {
    index: 215,
    bgColor: 'white',
    name: 'Fatima Moore',
    initials: 'FM',
    jobTitle: 'Chief Applications Developer',
    description: 'Rerum omnis consequatur quo qui eveniet fuga qui cumque molestias.',
    longText:
      'Necessitatibus similique vitae nesciunt sint voluptatem repudiandae quis dolor. Sint eum voluptatem nulla et itaque doloremque ad eveniet quos. Quam quis aliquid temporibus. Nesciunt dignissimos rerum quas facilis similique odio quas dolore sit. Corrupti sed qui expedita id neque laudantium.',
  },
  {
    index: 216,
    bgColor: '#f5f5f5',
    name: 'Salvatore Predovic',
    initials: 'SP',
    jobTitle: 'Lead Web Facilitator',
    description: 'Dolor expedita vel in unde et nobis voluptatem temporibus molestiae.',
    longText:
      'Eveniet omnis dicta aut. Aperiam non veritatis. Aut aperiam ut corrupti possimus accusamus et aut.',
  },
  {
    index: 217,
    bgColor: 'white',
    name: 'Jose Mayert',
    initials: 'JM',
    jobTitle: 'Forward Response Architect',
    description:
      'Quis vitae quasi nulla similique et possimus distinctio nihil aspernatur.',
    longText:
      'Sequi architecto et itaque qui consectetur aut molestias sapiente. Blanditiis harum magnam perferendis voluptas porro dicta incidunt fugit. Perspiciatis et illo a repellendus doloremque. Tempora id alias. Necessitatibus quia odit non architecto odit enim voluptatibus vero nostrum.',
  },
  {
    index: 218,
    bgColor: '#f5f5f5',
    name: 'Amara Blick',
    initials: 'AB',
    jobTitle: 'International Program Developer',
    description:
      'Hic explicabo ullam sit quasi nesciunt reiciendis facere maxime repellat.',
    longText:
      'Id commodi non voluptatibus commodi provident exercitationem adipisci ut. Odio asperiores officiis dolorum tempore. Culpa pariatur reprehenderit. Quis consequatur et minima suscipit aut.',
  },
  {
    index: 219,
    bgColor: 'white',
    name: 'Triston Kohler',
    initials: 'TK',
    jobTitle: 'Principal Accounts Engineer',
    description: 'Qui earum aut enim voluptatem nisi illum quaerat voluptatum porro.',
    longText:
      'Sunt fugit est ut odit et aperiam cupiditate ut cum. Nemo perferendis qui minus nesciunt culpa. Unde ducimus doloribus consequatur et. Recusandae porro voluptatum amet earum consequatur sit sapiente molestias. Magnam possimus velit est eum enim ea minima repellat odio.',
  },
  {
    index: 220,
    bgColor: '#f5f5f5',
    name: 'Estevan Schaden',
    initials: 'ES',
    jobTitle: 'Internal Quality Designer',
    description: 'Est et qui fuga magni minima voluptas eum ea et.',
    longText:
      'Omnis asperiores eveniet tempora. Nisi nobis deleniti laborum quia neque fugiat ad eum. Ullam dolores omnis et et quia in perferendis maxime. Unde sapiente quia iusto qui.',
  },
  {
    index: 221,
    bgColor: 'white',
    name: 'Betty Reichel',
    initials: 'BR',
    jobTitle: 'Future Interactions Manager',
    description:
      'Nihil voluptatibus pariatur atque error architecto consequatur ut ipsa hic.',
    longText:
      'Eligendi reprehenderit in. Laboriosam ea et tenetur ratione totam impedit atque dolorem corporis. Non nostrum et.',
  },
  {
    index: 222,
    bgColor: '#f5f5f5',
    name: 'Kendall Cruickshank',
    initials: 'KC',
    jobTitle: 'Global Quality Associate',
    description: 'Id ratione incidunt eum et nesciunt dolor repellat amet autem.',
    longText:
      'Rerum voluptatem quasi voluptatem necessitatibus ad odit. Rerum cumque provident maiores. Quidem porro molestias tempore.',
  },
  {
    index: 223,
    bgColor: 'white',
    name: 'Immanuel Hermiston',
    initials: 'IH',
    jobTitle: 'Product Security Developer',
    description: 'Non rem necessitatibus eligendi dolor aut delectus sunt eum et.',
    longText:
      'Laboriosam delectus autem doloremque et vel harum ipsam. Eveniet et quod veniam excepturi at facere in cupiditate. Architecto rerum in accusamus quos veritatis perferendis quo ut. Molestiae eius autem illo dolores quisquam.',
  },
  {
    index: 224,
    bgColor: '#f5f5f5',
    name: "Emery O'Reilly",
    initials: 'EO',
    jobTitle: 'Global Accounts Technician',
    description: 'Aut et deserunt qui dolor aut architecto sequi impedit blanditiis.',
    longText:
      'Et laboriosam veniam quo veniam impedit asperiores. Est excepturi dolorem iusto velit quas. Reiciendis dolore provident qui exercitationem sunt. Repellat dolores praesentium et ipsa minima qui perspiciatis quasi. Unde culpa nostrum numquam.',
  },
  {
    index: 225,
    bgColor: 'white',
    name: 'Pink Leannon',
    initials: 'PL',
    jobTitle: 'Central Response Consultant',
    description:
      'Impedit ut molestias repellat asperiores enim voluptatem veniam qui et.',
    longText:
      'Necessitatibus non eum harum culpa eaque saepe quidem totam. Nihil ut nam voluptatum. Qui ea dicta. Sint eum accusantium est est fugit optio. Iure ut quia quia beatae iure voluptatibus quae inventore nesciunt.',
  },
  {
    index: 226,
    bgColor: '#f5f5f5',
    name: 'Delmer Ferry',
    initials: 'DF',
    jobTitle: 'National Research Supervisor',
    description:
      'Praesentium ut sit ab commodi voluptates modi tempora consequuntur sint.',
    longText:
      'Sit voluptas iure ratione dicta tenetur ad quia quia velit. Numquam consequatur atque. Libero et omnis sit sed quo. Cumque in placeat deserunt. Itaque et ea id.',
  },
  {
    index: 227,
    bgColor: 'white',
    name: 'Laney Durgan',
    initials: 'LD',
    jobTitle: 'Central Directives Liaison',
    description: 'Modi non eos mollitia sint eligendi numquam nobis facilis vel.',
    longText:
      'Labore qui quas dolor ut. Non voluptates magni doloribus dolores sit vitae. Et tenetur quaerat.',
  },
  {
    index: 228,
    bgColor: '#f5f5f5',
    name: 'Tara Mertz',
    initials: 'TM',
    jobTitle: 'Human Functionality Developer',
    description: 'Soluta ipsa qui aspernatur placeat et eum itaque sed quia.',
    longText:
      'Ullam asperiores aperiam repellat qui commodi ipsa ipsum nam. Et doloremque velit deleniti est corrupti. Ea perspiciatis reprehenderit et minus ipsam aliquid cupiditate iure. Labore velit libero. Officiis assumenda nihil sit est quaerat quod omnis.',
  },
  {
    index: 229,
    bgColor: 'white',
    name: 'Maude Leannon',
    initials: 'ML',
    jobTitle: 'Forward Assurance Orchestrator',
    description:
      'Officiis quas beatae beatae omnis perspiciatis repellendus ipsa at ipsum.',
    longText:
      'Qui tempora possimus neque quia quos provident blanditiis non. Magni illum aut ipsam. Consectetur a laborum cumque adipisci in dolorem eius. Accusantium odit sed quis velit omnis est sunt.',
  },
  {
    index: 230,
    bgColor: '#f5f5f5',
    name: 'Thad Heathcote',
    initials: 'TH',
    jobTitle: 'Corporate Tactics Engineer',
    description: 'Molestiae est corrupti qui itaque vero recusandae quasi id id.',
    longText:
      'Molestiae consectetur debitis velit quidem ipsam natus libero id numquam. Qui vero tenetur facilis modi error tenetur temporibus quos doloremque. Quisquam ad repellendus unde velit saepe alias molestias harum. Aut deserunt asperiores quos voluptas veniam.',
  },
  {
    index: 231,
    bgColor: 'white',
    name: 'Jaron Hudson',
    initials: 'JH',
    jobTitle: 'Investor Creative Supervisor',
    description: 'Quis quae vitae et quia aperiam accusantium asperiores nostrum est.',
    longText:
      'Vitae quia ratione inventore nisi natus. Labore qui earum. Eum aspernatur et odit vel est doloremque aut. Omnis excepturi sunt est sint illum et impedit.',
  },
  {
    index: 232,
    bgColor: '#f5f5f5',
    name: 'Asia Greenholt',
    initials: 'AG',
    jobTitle: 'Human Markets Manager',
    description: 'Quas quos quis sint ratione eum ad quod repellat amet.',
    longText:
      'Soluta ipsam enim reiciendis maxime autem. Dolores magnam amet ut repellendus est est magni laborum similique. Dolor incidunt molestiae et est fugit praesentium sunt. Totam non sapiente culpa quae veniam eos. Quia consequatur in.',
  },
  {
    index: 233,
    bgColor: 'white',
    name: 'Ronny Jaskolski',
    initials: 'RJ',
    jobTitle: 'Dynamic Quality Coordinator',
    description: 'Fugiat enim sed quis placeat placeat voluptas velit amet tempora.',
    longText:
      'Dolorum quia harum. Minus aut similique eos est. Recusandae nulla illum magni architecto modi voluptatum in. Exercitationem nulla labore non aut odio aut necessitatibus quis exercitationem. Sunt et dolorem aut omnis assumenda eum dolor sed molestias.',
  },
  {
    index: 234,
    bgColor: '#f5f5f5',
    name: 'Orlo Langworth',
    initials: 'OL',
    jobTitle: 'Forward Interactions Agent',
    description: 'Nostrum et iure delectus ullam quisquam deserunt quas cumque tempora.',
    longText:
      'Temporibus sit exercitationem quam ad nostrum ducimus rerum neque. Ut blanditiis aut quisquam. Tempora dolorum aspernatur quia sed minima dolorum. Debitis voluptatem voluptas et et earum quibusdam ut doloremque. Est suscipit facere tempora.',
  },
  {
    index: 235,
    bgColor: 'white',
    name: 'Hayden Hauck',
    initials: 'HH',
    jobTitle: 'Global Program Specialist',
    description:
      'Unde quia laudantium rerum assumenda dolores cum voluptas accusantium cumque.',
    longText:
      'Molestiae placeat omnis. Harum ut rerum vero repellat. Voluptatum odio eum sapiente in odit rerum enim. Deserunt ex ut voluptatem est id ducimus voluptas sequi nemo. Nulla magni natus.',
  },
  {
    index: 236,
    bgColor: '#f5f5f5',
    name: 'Albert Nader',
    initials: 'AN',
    jobTitle: 'Lead Operations Facilitator',
    description: 'Ad voluptatum provident ab et dolorem sit eos placeat dolorum.',
    longText:
      'Cumque modi repellendus nemo quae dolorum rerum fuga. Ratione quis ullam nostrum dolores dolorem deleniti quaerat aspernatur. Est ea rerum sunt numquam minima at. Saepe in earum vel. Repellendus porro minima ad eaque perferendis nihil voluptatem.',
  },
  {
    index: 237,
    bgColor: 'white',
    name: 'Eduardo Toy',
    initials: 'ET',
    jobTitle: 'Lead Program Supervisor',
    description: 'Quae sint non occaecati amet inventore veritatis et voluptatem natus.',
    longText:
      'Distinctio odio sed nihil repellendus libero corrupti eum. Animi magni qui provident dolore corrupti earum veniam. Atque at ea repellendus minima aliquam nisi occaecati qui et. Et natus alias ea aut distinctio fugiat veniam illo. Et ipsa id est aut.',
  },
  {
    index: 238,
    bgColor: '#f5f5f5',
    name: 'Augustine Parisian',
    initials: 'AP',
    jobTitle: 'Principal Infrastructure Facilitator',
    description: 'Veniam ea quia magni est distinctio aut dolorem mollitia autem.',
    longText:
      'Animi non repudiandae. Ipsam rerum molestiae sapiente sit iure blanditiis qui. Doloribus est labore aut.',
  },
  {
    index: 239,
    bgColor: 'white',
    name: 'Bryon Braun',
    initials: 'BB',
    jobTitle: 'Customer Directives Developer',
    description: 'Pariatur ipsam sint dolor atque fugit voluptatem nesciunt non in.',
    longText:
      'Dolorum nobis est blanditiis accusantium. Incidunt magni a dicta a quia accusantium. Sit voluptas quod vel omnis rerum nemo beatae facere. Soluta atque delectus saepe. Nulla ad ut deserunt itaque libero et.',
  },
  {
    index: 240,
    bgColor: '#f5f5f5',
    name: 'Shea Abernathy',
    initials: 'SA',
    jobTitle: 'Principal Program Supervisor',
    description: 'Error aut id veniam sint a excepturi nostrum rem rerum.',
    longText:
      'Facere illum id quo excepturi. Eos sit quo totam illum quia atque. Ut non maiores quos modi ut sunt facere fugiat exercitationem.',
  },
  {
    index: 241,
    bgColor: 'white',
    name: 'Bert Paucek',
    initials: 'BP',
    jobTitle: 'Dynamic Branding Assistant',
    description: 'Odit dolore voluptatibus ea sit aut nam natus omnis eveniet.',
    longText:
      'Distinctio aliquid assumenda sed. Officia aperiam sequi sed deserunt molestiae. Eos eligendi tempore est deserunt earum et culpa dolor. Iure earum non. Et rerum aut.',
  },
  {
    index: 242,
    bgColor: '#f5f5f5',
    name: 'Elmira Spinka',
    initials: 'ES',
    jobTitle: 'Principal Functionality Facilitator',
    description: 'Velit ratione magni vitae debitis similique et ea officia ipsa.',
    longText:
      'Et nihil blanditiis est. Error dicta quo id et exercitationem tempore temporibus. Asperiores aliquid sed molestiae.',
  },
  {
    index: 243,
    bgColor: 'white',
    name: 'Christ Prohaska',
    initials: 'CP',
    jobTitle: 'Product Tactics Developer',
    description: 'Dolorum ex autem alias aut reiciendis et pariatur quia nam.',
    longText:
      'Voluptatem quam ex. Beatae non ducimus. Quaerat cum ipsum sed facilis autem consequatur iusto. Ut neque distinctio velit voluptatum a aliquid sit quasi.',
  },
  {
    index: 244,
    bgColor: '#f5f5f5',
    name: 'Krista Heaney',
    initials: 'KH',
    jobTitle: 'Lead Factors Coordinator',
    description:
      'Sint consequatur autem modi voluptate eligendi vel totam voluptatem quisquam.',
    longText:
      'Repellat ut vel facere aperiam neque magni et voluptas laborum. Non architecto autem quod ipsum quia repellat laboriosam numquam. Ad tenetur atque harum vitae quaerat eos facilis repudiandae voluptatibus. Consequatur ipsam iusto consequuntur animi est. Natus maiores recusandae. Ea sed sed.',
  },
  {
    index: 245,
    bgColor: 'white',
    name: 'Gayle Medhurst',
    initials: 'GM',
    jobTitle: 'Lead Program Manager',
    description: 'Architecto dolores nihil nemo impedit cum quo non ut modi.',
    longText:
      'Recusandae impedit dolorem et asperiores ad. Aut et nisi itaque sint voluptatem enim laborum. Repellendus sunt molestiae. Iure odio voluptatem occaecati.',
  },
  {
    index: 246,
    bgColor: '#f5f5f5',
    name: 'Tierra Spencer',
    initials: 'TS',
    jobTitle: 'Customer Program Engineer',
    description: 'Inventore culpa est magnam iusto dolor iure similique id voluptatum.',
    longText:
      'Qui magni et similique est. Animi eligendi temporibus. Dignissimos magnam repudiandae architecto qui. Aut ad mollitia.',
  },
  {
    index: 247,
    bgColor: 'white',
    name: 'Alyce Rau',
    initials: 'AR',
    jobTitle: 'Lead Infrastructure Orchestrator',
    description:
      'Modi quod nihil aut veniam tempora sit accusantium voluptas laboriosam.',
    longText:
      'Officiis officia quia nihil autem eligendi laborum porro voluptatem. Enim consectetur sed iure et. Similique cumque quis cumque minus dolorum modi voluptate.',
  },
  {
    index: 248,
    bgColor: '#f5f5f5',
    name: 'Sydni McKenzie',
    initials: 'SM',
    jobTitle: 'National Branding Supervisor',
    description: 'Quae sint et aliquid autem iure sed quia est nihil.',
    longText:
      'Nostrum magnam ut quisquam exercitationem dolorem veniam doloribus neque culpa. Mollitia et error repellat ut et iusto velit qui ut. Culpa dolores voluptatem aut ab reiciendis totam tenetur repellat.',
  },
  {
    index: 249,
    bgColor: 'white',
    name: 'Audrey Pollich',
    initials: 'AP',
    jobTitle: 'Global Security Developer',
    description: 'Autem sed rem ea expedita quo tempora est tempora ad.',
    longText:
      'Vero reiciendis et qui non incidunt modi occaecati. Impedit officia ad id voluptatem qui fugit et. Ut a magni asperiores quo soluta doloremque et. Sit provident ipsa enim molestiae rerum inventore quo consequatur nulla.',
  },
  {
    index: 250,
    bgColor: '#f5f5f5',
    name: 'Lorenz Schneider',
    initials: 'LS',
    jobTitle: 'Internal Accountability Coordinator',
    description:
      'Cupiditate ullam voluptas autem repudiandae eum vitae aut voluptas occaecati.',
    longText:
      'Atque assumenda dolores voluptatem voluptatibus quaerat quas est. Voluptatem ut repudiandae excepturi dolores quae sunt et. Repudiandae praesentium aut consequuntur ab harum. Rerum rem sint a perferendis quisquam sit doloribus consequuntur sapiente. Odit neque qui qui. Eos nobis velit labore perspiciatis et libero mollitia quidem quibusdam.',
  },
  {
    index: 251,
    bgColor: 'white',
    name: 'Alexzander Feest',
    initials: 'AF',
    jobTitle: 'Direct Configuration Representative',
    description:
      'Eveniet impedit exercitationem occaecati voluptatem reprehenderit tempore at esse autem.',
    longText:
      'Vel minima aliquid et. Rerum eligendi ex et fuga veniam voluptatum consequatur autem. Assumenda corrupti perspiciatis et voluptas aut.',
  },
  {
    index: 252,
    bgColor: '#f5f5f5',
    name: 'Kennedy Von',
    initials: 'KV',
    jobTitle: 'Lead Optimization Liaison',
    description:
      'Aspernatur exercitationem necessitatibus saepe et optio doloribus illo iste suscipit.',
    longText:
      'Placeat qui nihil aut neque. Ratione odio magnam quo sit a voluptates qui voluptatem. Distinctio id sint ullam. Facere facere possimus beatae voluptas minus totam.',
  },
  {
    index: 253,
    bgColor: 'white',
    name: 'Tavares Legros',
    initials: 'TL',
    jobTitle: 'Chief Factors Developer',
    description:
      'Culpa iste voluptatem odio nihil odit necessitatibus amet optio commodi.',
    longText:
      'Non quos perferendis labore. Dolor at quos voluptates. Ut quia molestias et odit quo et ipsam aut.',
  },
  {
    index: 254,
    bgColor: '#f5f5f5',
    name: 'Leatha Walsh',
    initials: 'LW',
    jobTitle: 'Principal Metrics Associate',
    description: 'Sint dolor voluptatem nostrum neque et est ex necessitatibus voluptas.',
    longText:
      'Natus molestias in optio ipsam omnis molestiae eveniet. Repellendus inventore dolorem. Qui fugit ipsam enim sapiente qui. Sed quis quasi voluptatibus.',
  },
  {
    index: 255,
    bgColor: 'white',
    name: 'Flossie Rice',
    initials: 'FR',
    jobTitle: 'Legacy Infrastructure Engineer',
    description: 'Corrupti ipsa nesciunt sequi atque quia aperiam vel ut tempora.',
    longText:
      'Esse eos dolores ipsa consequatur qui quia. Nihil sunt et non dolorum. Placeat aut maxime incidunt facilis. Voluptatibus adipisci velit qui hic est fugiat consequuntur. Aspernatur nemo deserunt nostrum vero non. Consequatur provident eum.',
  },
  {
    index: 256,
    bgColor: '#f5f5f5',
    name: 'Bernadine Beer',
    initials: 'BB',
    jobTitle: 'Internal Research Facilitator',
    description: 'Ut perspiciatis id sit rem quidem quo non ut explicabo.',
    longText:
      'Quisquam sapiente blanditiis facere praesentium quos quisquam numquam libero sapiente. Voluptate inventore eos qui magni molestiae nisi sit. Ut eum laboriosam est quo aspernatur. Nam necessitatibus pariatur tempore iure corrupti. Perferendis nisi non nobis alias enim quidem qui. Modi porro recusandae qui quae sapiente vitae similique et cumque.',
  },
  {
    index: 257,
    bgColor: 'white',
    name: 'Margaret Swaniawski',
    initials: 'MS',
    jobTitle: 'Direct Applications Planner',
    description:
      'Voluptatem eaque temporibus voluptas eius provident et dolorem est quo.',
    longText:
      'Sequi ea voluptatum est itaque iste debitis. Commodi dignissimos id voluptatem inventore repellat asperiores quos ipsam fugiat. Enim quia consequatur alias quia necessitatibus est. Similique vitae aut quisquam pariatur eaque ea non omnis.',
  },
  {
    index: 258,
    bgColor: '#f5f5f5',
    name: 'Lucious Langworth',
    initials: 'LL',
    jobTitle: 'Lead Division Officer',
    description: 'Quis aut animi et et accusamus aut non dolorem nihil.',
    longText:
      'Dolor fugit nulla. Veritatis nemo rerum ex explicabo et dolor velit. Quo facilis cum. Distinctio sapiente consequatur eos praesentium debitis. Eligendi nihil officiis voluptatem ullam reiciendis. Reprehenderit provident est iste odio debitis animi eos.',
  },
  {
    index: 259,
    bgColor: 'white',
    name: 'Gladyce Yost',
    initials: 'GY',
    jobTitle: 'Central Paradigm Administrator',
    description: 'Non nesciunt et dicta aliquam magni et vel ut sit.',
    longText:
      'Voluptas qui dolor. Ratione magnam omnis reiciendis deserunt et consequatur. At delectus sit magni enim veniam similique beatae repellat. Qui natus occaecati recusandae ut voluptas. Cupiditate vitae quia cumque.',
  },
  {
    index: 260,
    bgColor: '#f5f5f5',
    name: 'Koby Hettinger',
    initials: 'KH',
    jobTitle: 'Regional Optimization Producer',
    description:
      'Deserunt quasi sint vel consequatur debitis modi provident sint accusantium.',
    longText:
      'Doloribus autem et dolor cumque delectus consequuntur sint velit odio. Reprehenderit adipisci rerum veniam natus. Alias voluptatibus temporibus distinctio qui nisi asperiores consequatur.',
  },
  {
    index: 261,
    bgColor: 'white',
    name: 'Nellie Bailey',
    initials: 'NB',
    jobTitle: 'Regional Accountability Executive',
    description:
      'Sapiente optio tempora mollitia dolores doloribus repudiandae aut est sit.',
    longText:
      'Voluptatibus qui et. Vero iste eos ad alias rerum distinctio nostrum. Voluptate earum dolorum sint qui. Laudantium sequi distinctio sapiente unde qui fugiat. Voluptatum molestiae ut nostrum error quaerat. Enim sint porro voluptas est voluptatem distinctio.',
  },
  {
    index: 262,
    bgColor: '#f5f5f5',
    name: 'Madisyn Botsford',
    initials: 'MB',
    jobTitle: 'National Tactics Producer',
    description: 'Quos quibusdam aliquam vitae aut eos atque maiores reiciendis iusto.',
    longText:
      'Et dignissimos similique iure consequatur neque. Sit fuga et fuga commodi nobis. Sint autem quisquam aperiam corrupti minus dolores. Atque aut dolor. Voluptatum et asperiores. Aut mollitia incidunt facere fugit facere est asperiores voluptate.',
  },
  {
    index: 263,
    bgColor: 'white',
    name: 'Joey Rutherford',
    initials: 'JR',
    jobTitle: 'Principal Intranet Executive',
    description:
      'Autem eos quibusdam eveniet incidunt consequatur dolorem laudantium eligendi aut.',
    longText:
      'Consectetur et ullam accusamus laudantium voluptatem fuga deserunt dolor at. Voluptatem autem dolor sint est illum et ratione ut commodi. Nostrum exercitationem nulla et suscipit et. Nihil ut recusandae aut. Asperiores quos aut ea expedita quisquam.',
  },
  {
    index: 264,
    bgColor: '#f5f5f5',
    name: 'Jaylin Jacobi',
    initials: 'JJ',
    jobTitle: 'Corporate Markets Engineer',
    description: 'Aut est ut enim sequi nesciunt minima voluptatem temporibus non.',
    longText:
      'Itaque eos eaque. Dolores est a. Eum et fuga repudiandae consequatur soluta delectus. Fugit vero facilis recusandae officia assumenda. Beatae et odit.',
  },
  {
    index: 265,
    bgColor: 'white',
    name: 'Kianna McDermott',
    initials: 'KM',
    jobTitle: 'Senior Quality Representative',
    description:
      'Doloribus voluptatibus sapiente magni saepe voluptatibus exercitationem aperiam saepe nesciunt.',
    longText:
      'Molestias tempora consequuntur similique reprehenderit suscipit ea beatae velit rem. Reprehenderit non enim et dolores voluptas consequatur temporibus sit voluptatem. Delectus nostrum dolorum cumque quia voluptatem. Ut aut et ad molestiae harum rem. Impedit eum illo expedita recusandae cupiditate ut.',
  },
  {
    index: 266,
    bgColor: '#f5f5f5',
    name: 'Cristian Bergstrom',
    initials: 'CB',
    jobTitle: 'Senior Communications Analyst',
    description: 'Aut illum ea est inventore voluptatem dolorem expedita quam nostrum.',
    longText:
      'Reprehenderit amet vitae non. Eveniet omnis beatae vel ut eius et id sed officiis. Qui excepturi aut rerum earum autem. Exercitationem enim et itaque ab earum illo enim nostrum.',
  },
  {
    index: 267,
    bgColor: 'white',
    name: 'Milan Durgan',
    initials: 'MD',
    jobTitle: 'Principal Optimization Executive',
    description: 'Minus eos perferendis rerum nisi accusamus magni placeat nam rerum.',
    longText:
      'Et sed impedit aliquam nostrum in quam. Quisquam autem sequi quis non et sit. Minus sed harum deleniti officia adipisci voluptates non.',
  },
  {
    index: 268,
    bgColor: '#f5f5f5',
    name: 'Jordan Hills',
    initials: 'JH',
    jobTitle: 'Principal Paradigm Executive',
    description:
      'Laboriosam deserunt sapiente impedit molestias ea qui eos rerum pariatur.',
    longText:
      'Doloribus officiis ullam vero. Illum similique est eaque tenetur et ut quia et occaecati. Cupiditate accusantium et. Voluptas voluptas quas. Assumenda aut ut sit ut ut reiciendis ex. Quia quis praesentium libero quia excepturi.',
  },
  {
    index: 269,
    bgColor: 'white',
    name: 'Alanis Ferry',
    initials: 'AF',
    jobTitle: 'Central Accounts Technician',
    description: 'Nostrum harum nemo et nesciunt ut expedita ex temporibus et.',
    longText:
      'Eos quo temporibus eveniet sed. Sit placeat incidunt rerum vitae blanditiis veniam iste doloribus. Unde aliquam dolore voluptatem modi delectus qui. Aut totam quo. Voluptas error quia nostrum laboriosam minus.',
  },
  {
    index: 270,
    bgColor: '#f5f5f5',
    name: 'Jessyca Bode',
    initials: 'JB',
    jobTitle: 'Internal Configuration Officer',
    description:
      'Ipsam perspiciatis aliquid officiis in consequatur velit aut at officia.',
    longText:
      'Ratione et aut et facere est. Ut dolorem consequatur culpa. Maiores maxime commodi enim sed ullam aperiam.',
  },
  {
    index: 271,
    bgColor: 'white',
    name: 'Morton Ledner',
    initials: 'ML',
    jobTitle: 'Internal Program Agent',
    description: 'Hic voluptatum laborum optio minima qui odio nisi tenetur et.',
    longText:
      'Corrupti corporis esse minus error voluptas. Maiores mollitia accusamus. Nulla sequi eligendi pariatur culpa quod dolor. Ut commodi ut omnis cumque nisi a accusamus.',
  },
  {
    index: 272,
    bgColor: '#f5f5f5',
    name: 'Vernon Schoen',
    initials: 'VS',
    jobTitle: 'International Response Engineer',
    description: 'Labore placeat rerum et qui aut aut voluptatem necessitatibus non.',
    longText:
      'Corrupti dolor adipisci inventore ut sequi. Sed ut ad similique aliquid autem et. Ratione in rerum. Eos rem dolor voluptatem eum.',
  },
  {
    index: 273,
    bgColor: 'white',
    name: 'Pat Ullrich',
    initials: 'PU',
    jobTitle: 'International Optimization Orchestrator',
    description:
      'Consectetur est eum ut occaecati nobis asperiores voluptatem molestiae dolor.',
    longText:
      'Magni omnis velit non consequatur. Quas quia quis. Ipsum voluptate repellat ea unde nihil ab necessitatibus aut. Non aut labore et ea voluptatem maiores sapiente aspernatur voluptatem. Officia et facilis necessitatibus voluptas tempore.',
  },
  {
    index: 274,
    bgColor: '#f5f5f5',
    name: "Jamaal D'Amore",
    initials: 'JD',
    jobTitle: 'Human Quality Director',
    description: 'Numquam et eligendi consequatur veniam quibusdam odio itaque autem et.',
    longText:
      'Corporis maiores voluptas sit voluptas facilis quam non. Aut est in quasi est accusamus ut sit. Est asperiores quasi molestiae consequatur hic eum a exercitationem voluptas. Vel nihil quo dolores repellat impedit earum.',
  },
  {
    index: 275,
    bgColor: 'white',
    name: 'Terence Weber',
    initials: 'TW',
    jobTitle: 'Future Metrics Administrator',
    description:
      'Recusandae nisi quisquam quas commodi nisi qui quisquam doloremque ipsa.',
    longText:
      'Cupiditate non unde eligendi est. Dolore ea voluptatum aut assumenda expedita aliquid occaecati. Earum est inventore voluptatibus nobis repellat. Enim dolorum qui voluptas magnam libero. Et veritatis sed laborum alias voluptates suscipit. Pariatur maxime exercitationem doloremque enim unde omnis porro deleniti.',
  },
  {
    index: 276,
    bgColor: '#f5f5f5',
    name: 'Bartholome Braun',
    initials: 'BB',
    jobTitle: 'Forward Security Administrator',
    description:
      'Aut exercitationem saepe exercitationem optio molestiae voluptas voluptas unde autem.',
    longText:
      'Neque dolores est. Voluptatem sit ut enim quidem rerum est molestiae rerum. Consequuntur voluptate consequatur est suscipit.',
  },
  {
    index: 277,
    bgColor: 'white',
    name: 'Ned Collier',
    initials: 'NC',
    jobTitle: 'Dynamic Marketing Executive',
    description: 'Vero et quia voluptas distinctio voluptate excepturi aut non corporis.',
    longText:
      'Voluptatem nulla occaecati reiciendis sunt. Debitis vel soluta perferendis. Necessitatibus aut expedita. Qui asperiores sunt consectetur. Ut consequatur ratione eos quis.',
  },
  {
    index: 278,
    bgColor: '#f5f5f5',
    name: 'Joaquin Kulas',
    initials: 'JK',
    jobTitle: 'Corporate Research Designer',
    description: 'Et numquam maiores consequuntur aliquam fugit enim nesciunt in et.',
    longText:
      'Assumenda optio quis quia ullam et quidem eum. Voluptates beatae aspernatur temporibus sint modi. Esse fugit totam labore itaque veniam. Quas tempore et praesentium voluptatem optio qui vero.',
  },
  {
    index: 279,
    bgColor: 'white',
    name: 'Delilah Rogahn',
    initials: 'DR',
    jobTitle: 'Central Implementation Specialist',
    description: 'Aut dolores aut dolor itaque voluptate sunt minus quidem et.',
    longText:
      'Eius itaque fuga qui sed minus laborum magnam ipsa. Explicabo velit unde. Et est aut est earum ab veniam id quia.',
  },
  {
    index: 280,
    bgColor: '#f5f5f5',
    name: 'Cara Kihn',
    initials: 'CK',
    jobTitle: 'Global Brand Technician',
    description: 'Unde aut occaecati repellat nemo ea ut et sunt sed.',
    longText:
      'Rerum voluptas vel dolores voluptas velit doloremque quis. Corporis animi quod vitae numquam optio vero. Qui vel qui velit nulla sequi nesciunt. Dolor in a rem. Unde assumenda dignissimos illo quisquam tempora blanditiis eum eaque. Eligendi atque eius praesentium inventore sed magnam quidem.',
  },
  {
    index: 281,
    bgColor: 'white',
    name: 'Clementina Wolf',
    initials: 'CW',
    jobTitle: 'Human Quality Supervisor',
    description: 'In in delectus quaerat est illo vero ea saepe voluptas.',
    longText:
      'Voluptas rerum doloremque. Facere est iusto vel quis nemo dolorem. Eveniet ut quasi aut. Molestiae molestiae quo ducimus et odit velit natus. Quod corporis voluptatem accusantium ullam ipsam. Et similique dicta inventore dolorem facere nihil similique atque.',
  },
  {
    index: 282,
    bgColor: '#f5f5f5',
    name: 'Tia Swift',
    initials: 'TS',
    jobTitle: 'National Quality Technician',
    description:
      'Ut voluptatem repudiandae vel est minima quasi dignissimos soluta minima.',
    longText:
      'Perspiciatis ut ut alias doloremque et nulla quia explicabo. Qui aut enim voluptas excepturi. Doloribus dolor voluptate architecto iusto quam sequi nam commodi quae. Numquam velit blanditiis totam numquam quia modi ipsum qui qui.',
  },
  {
    index: 283,
    bgColor: 'white',
    name: 'Marc Kuhlman',
    initials: 'MK',
    jobTitle: 'Legacy Configuration Supervisor',
    description: 'Quia eligendi est illo aliquam libero dolorum saepe quasi sunt.',
    longText:
      'Praesentium est tempora animi saepe velit non. Quo non adipisci dolores ut eius labore nulla. Voluptas incidunt aut nisi odit omnis ut dolor voluptatibus. Ex non deserunt. Quia qui consectetur eum omnis. Aspernatur perferendis iusto aut.',
  },
  {
    index: 284,
    bgColor: '#f5f5f5',
    name: 'Dejah Russel',
    initials: 'DR',
    jobTitle: 'Senior Tactics Administrator',
    description:
      'Rem enim dolorem cupiditate iste officia odit harum distinctio laudantium.',
    longText:
      'Tempore necessitatibus rerum nesciunt repudiandae ab placeat. Dolorem et quaerat dolores illum ut perferendis voluptatem minima. Porro impedit voluptates quam eum praesentium et porro odio qui. Recusandae dolor adipisci est repellat. Laboriosam placeat fugit exercitationem quo doloremque recusandae omnis qui.',
  },
  {
    index: 285,
    bgColor: 'white',
    name: 'Daphney MacGyver',
    initials: 'DM',
    jobTitle: 'International Research Producer',
    description: 'Accusantium est molestias sed quae in consequatur maxime quos et.',
    longText:
      'Debitis aspernatur itaque dolores asperiores blanditiis dolorem aspernatur omnis. Voluptatem natus eos itaque harum a est ut. Voluptatem non est maxime ratione asperiores modi corporis. Deleniti dolores asperiores ut. Repudiandae totam officia minima. Aut voluptatem corrupti necessitatibus qui nam eius.',
  },
  {
    index: 286,
    bgColor: '#f5f5f5',
    name: 'Shania Wiza',
    initials: 'SW',
    jobTitle: 'Central Security Strategist',
    description:
      'Laboriosam quidem consectetur praesentium aliquid id aliquid vel rerum minus.',
    longText:
      'Et sed reiciendis et dolorem earum. At quasi et perspiciatis perspiciatis et consequatur dolorum. Aperiam autem pariatur deserunt. Doloremque excepturi atque. Qui nisi ratione minima praesentium odio. Et vero nulla voluptates quibusdam illo voluptatem nihil eum repellendus.',
  },
  {
    index: 287,
    bgColor: 'white',
    name: 'Karlie Gaylord',
    initials: 'KG',
    jobTitle: 'Direct Group Agent',
    description:
      'Expedita et incidunt officia porro maxime impedit sed accusantium incidunt.',
    longText:
      'Tempore ut asperiores necessitatibus aliquam ut debitis quo. Minus sunt a laborum quo vel et rerum. Eos omnis reprehenderit excepturi ullam fuga.',
  },
  {
    index: 288,
    bgColor: '#f5f5f5',
    name: 'Forest Daugherty',
    initials: 'FD',
    jobTitle: 'Legacy Implementation Representative',
    description: 'Et quo aut id eaque incidunt aut adipisci recusandae voluptatem.',
    longText:
      'Qui delectus sint. Doloremque eos debitis eum sunt beatae quis et. Deleniti quae quia sed voluptatem saepe.',
  },
  {
    index: 289,
    bgColor: 'white',
    name: 'Maye Larson',
    initials: 'ML',
    jobTitle: 'Central Directives Specialist',
    description: 'Nesciunt cumque sint eius perferendis eveniet ex qui similique et.',
    longText:
      'Distinctio molestias eligendi voluptas dolorem. Facere ut non neque quia nihil repellat doloribus nesciunt dolores. Aut doloribus distinctio earum eveniet maiores quo sapiente. Facilis quia quia aut. Necessitatibus itaque aut ullam cumque doloremque delectus delectus enim. Totam ut atque at.',
  },
  {
    index: 290,
    bgColor: '#f5f5f5',
    name: 'Stacey Sawayn',
    initials: 'SS',
    jobTitle: 'National Directives Representative',
    description: 'Fugiat ad quaerat et earum facere consequuntur sint natus molestiae.',
    longText:
      'Eligendi sapiente fugit quisquam iure dolorum ut quam. Aperiam possimus dolorem optio autem sit laudantium sint non. Voluptatum totam molestias sed non enim explicabo. Laborum et molestiae quos saepe velit.',
  },
  {
    index: 291,
    bgColor: 'white',
    name: 'Wendy Durgan',
    initials: 'WD',
    jobTitle: 'Principal Markets Agent',
    description: 'Iste officiis totam dolore aut dolor perferendis rerum neque aut.',
    longText:
      'Quasi sequi molestiae tempore asperiores et. Veniam sed eos aut explicabo officia voluptas aut id omnis. Expedita consequatur eaque quam aperiam similique itaque molestiae eaque.',
  },
  {
    index: 292,
    bgColor: '#f5f5f5',
    name: 'Cameron Kessler',
    initials: 'CK',
    jobTitle: 'Legacy Creative Executive',
    description:
      'Rerum voluptatem dicta sed eaque alias praesentium asperiores incidunt nulla.',
    longText:
      'Repellat sunt ut sint tempora accusamus rerum et temporibus et. Voluptas alias quam dolores libero corporis saepe. Et deserunt non totam voluptates est consequatur voluptatibus omnis. Atque cumque nam porro qui et. Quo harum dicta mollitia inventore et sapiente omnis hic corrupti.',
  },
  {
    index: 293,
    bgColor: 'white',
    name: 'Amparo Aufderhar',
    initials: 'AA',
    jobTitle: 'Lead Directives Officer',
    description:
      'Error consequuntur vel omnis voluptates voluptas laboriosam corporis ad quia.',
    longText:
      'Qui quaerat ut. Dicta et eos natus non consequatur sit. Dolorem aut est eos dolores quis rerum cumque delectus omnis. Ipsa non est aut. Quis delectus ipsam est et iste amet a fugiat accusamus. Ut id eligendi corrupti aperiam ad.',
  },
  {
    index: 294,
    bgColor: '#f5f5f5',
    name: 'Bo Gorczany',
    initials: 'BG',
    jobTitle: 'Product Usability Analyst',
    description: 'In quae aperiam fugit voluptas et ea ipsum consequatur facilis.',
    longText:
      'Soluta id officiis voluptas eaque. Minima sed alias. Reiciendis omnis ut aut eveniet sint non ea. Ab magni aut sit corporis sunt sit ipsa.',
  },
  {
    index: 295,
    bgColor: 'white',
    name: 'Gregory Grady',
    initials: 'GG',
    jobTitle: 'Principal Brand Architect',
    description: 'Sequi mollitia vitae quo expedita ut eligendi omnis qui et.',
    longText:
      'Occaecati provident rerum consequuntur amet deleniti et deleniti explicabo. Vel ut cumque minima provident eius doloremque aut adipisci. Provident et est tempora laboriosam facilis. Natus excepturi commodi saepe. Quaerat facere optio veritatis provident. Voluptas dolorum architecto ullam minima temporibus reiciendis at.',
  },
  {
    index: 296,
    bgColor: '#f5f5f5',
    name: 'Alivia Hahn',
    initials: 'AH',
    jobTitle: 'Human Response Analyst',
    description: 'Doloribus quia iste sunt aut expedita facilis dicta quia hic.',
    longText:
      'Totam nihil voluptate similique veritatis dicta laudantium. Voluptatibus corrupti nostrum quam fuga iure ab tenetur repellendus aliquid. Sunt eveniet aliquid est minima cumque rerum doloremque. Consequatur et blanditiis est iure sint.',
  },
  {
    index: 297,
    bgColor: 'white',
    name: 'Felton Lehner',
    initials: 'FL',
    jobTitle: 'Chief Security Manager',
    description: 'Non at quis voluptatem porro et mollitia eligendi rem consequatur.',
    longText:
      'Quia quibusdam nulla quaerat ut. Qui modi error facilis beatae voluptatem. Et laboriosam impedit labore cumque totam eveniet. Minus itaque recusandae aperiam at praesentium. Aut natus at architecto a.',
  },
  {
    index: 298,
    bgColor: '#f5f5f5',
    name: 'Reba Lehner',
    initials: 'RL',
    jobTitle: 'Legacy Accountability Producer',
    description:
      'Corrupti consequuntur et dignissimos cum non rerum et voluptatibus exercitationem.',
    longText:
      'Sint facilis dolorem velit tempora commodi molestiae eum tenetur blanditiis. Enim accusamus enim vitae nihil quasi et in. Dignissimos consectetur nesciunt neque est quia dolorem.',
  },
  {
    index: 299,
    bgColor: 'white',
    name: 'Justyn Bernier',
    initials: 'JB',
    jobTitle: 'Future Brand Manager',
    description: 'Ut laborum quos quas omnis optio quia in eum nulla.',
    longText:
      'Fugit error qui. Nisi asperiores harum inventore ut aut voluptate aut. Voluptatem architecto et illum aut. Dolor non rerum facilis esse est ut optio nisi. Repellendus minima in consequatur illo et quae earum et.',
  },
  {
    index: 300,
    bgColor: '#f5f5f5',
    name: 'Jarrett Halvorson',
    initials: 'JH',
    jobTitle: 'Principal Usability Consultant',
    description: 'Voluptatem id consectetur tempora nihil architecto qui quo qui et.',
    longText:
      'Tenetur ad enim cum voluptatem odit maiores adipisci expedita laboriosam. Delectus perspiciatis sit perferendis dolor est ut et accusamus quae. Repudiandae in omnis neque eos nihil vel sit. Provident autem aspernatur et repellendus dolores sit animi et.',
  },
  {
    index: 301,
    bgColor: 'white',
    name: 'Horace Baumbach',
    initials: 'HB',
    jobTitle: 'Direct Assurance Coordinator',
    description: 'Totam et at quia iusto vitae sint quidem omnis sunt.',
    longText:
      'Harum sit hic animi quidem magni. Rerum voluptas voluptas tenetur et id. Ut voluptatem molestiae ullam. Vel vel eveniet consequuntur aut occaecati. Reprehenderit ea id aliquam delectus. Eum doloremque officiis eius aut id amet.',
  },
  {
    index: 302,
    bgColor: '#f5f5f5',
    name: 'Rocio Heathcote',
    initials: 'RH',
    jobTitle: 'Internal Tactics Representative',
    description:
      'Distinctio voluptates quia cupiditate iste rerum officia exercitationem iure quia.',
    longText:
      'Dolores culpa quibusdam esse error. Fugiat consequatur perferendis. Rerum et saepe aperiam impedit eius aspernatur alias.',
  },
  {
    index: 303,
    bgColor: 'white',
    name: 'Kelsi Schmitt',
    initials: 'KS',
    jobTitle: 'Lead Security Liaison',
    description: 'Minima sint quo cum sequi voluptatem odio quia dolorum cum.',
    longText:
      'Facere numquam est officiis et est vitae ipsa. Eius voluptatem deserunt. Quo rerum sunt. Impedit sunt provident ut sit voluptas. Velit quia laboriosam.',
  },
  {
    index: 304,
    bgColor: '#f5f5f5',
    name: 'Christelle Haag',
    initials: 'CH',
    jobTitle: 'International Applications Liaison',
    description:
      'Voluptate eaque saepe ducimus sunt sed unde a praesentium exercitationem.',
    longText:
      'Ducimus eius est ratione quas quis. Soluta consequuntur temporibus aliquam quas velit delectus iure. Et possimus repudiandae quis quo nostrum sed omnis laudantium cumque. Laudantium itaque dolores assumenda deserunt ut. Ut ipsa veniam officiis consequatur provident doloribus.',
  },
  {
    index: 305,
    bgColor: 'white',
    name: 'Cale Lubowitz',
    initials: 'CL',
    jobTitle: 'Investor Usability Consultant',
    description: 'Sunt voluptates aut fugit itaque delectus mollitia neque et inventore.',
    longText:
      'Error ipsam neque saepe quaerat doloremque numquam iusto officiis. Dolorum consequuntur soluta. Sed illum aspernatur sequi doloribus sequi. Voluptatem consequatur quae aut. A quod exercitationem cumque repellat consequatur reprehenderit. Sit cumque esse officia iste soluta.',
  },
  {
    index: 306,
    bgColor: '#f5f5f5',
    name: 'Oceane DuBuque',
    initials: 'OD',
    jobTitle: 'Dynamic Applications Architect',
    description: 'Iusto placeat placeat iste quis quas est illum mollitia voluptas.',
    longText:
      'Quo nostrum consequatur impedit. Dolore exercitationem tenetur nostrum soluta hic numquam sunt voluptatem. Quidem laborum sed quidem quidem voluptate et expedita sed eligendi. Quo magnam id consequatur aperiam velit ex enim cupiditate voluptatem. Repellendus aut mollitia ex eos pariatur. Enim ea maxime et.',
  },
  {
    index: 307,
    bgColor: 'white',
    name: 'Mckenna Rempel',
    initials: 'MR',
    jobTitle: 'Customer Paradigm Executive',
    description:
      'Reiciendis voluptatibus ut saepe possimus aut quia consectetur minus harum.',
    longText:
      'Atque a alias ratione officiis optio dolorem quia. Non voluptates accusantium omnis voluptatem nulla quo omnis. Impedit voluptatem voluptas. Nesciunt cupiditate assumenda et ducimus consectetur voluptates dolores dolor.',
  },
  {
    index: 308,
    bgColor: '#f5f5f5',
    name: 'Hilma Ritchie',
    initials: 'HR',
    jobTitle: 'Senior Paradigm Coordinator',
    description:
      'Autem perferendis aut ut inventore provident sunt eos necessitatibus repellendus.',
    longText:
      'Enim voluptatem sed asperiores nam magnam fuga amet. Ab accusantium ut deserunt voluptatem ab labore nostrum quo. Voluptatum sapiente error veritatis dolorem qui consequatur ea sunt. Et et tenetur animi natus laboriosam. Asperiores quisquam illo aut ipsa reiciendis quaerat veniam non sed. Eaque non molestiae eveniet quidem enim dolor.',
  },
  {
    index: 309,
    bgColor: 'white',
    name: 'Luna Kovacek',
    initials: 'LK',
    jobTitle: 'Dynamic Operations Facilitator',
    description:
      'Reiciendis nulla blanditiis dolorum voluptatem ullam aut consequatur ut sunt.',
    longText:
      'Incidunt necessitatibus consectetur quo veniam quo dolorem. Accusamus odio est earum voluptas ea sequi pariatur. Vel corporis qui maiores nam sint molestiae consequuntur expedita voluptatem.',
  },
  {
    index: 310,
    bgColor: '#f5f5f5',
    name: 'Dangelo McClure',
    initials: 'DM',
    jobTitle: 'National Communications Consultant',
    description: 'Ea quia accusantium dolorem totam adipisci rerum minus alias quod.',
    longText:
      'Ut rerum maxime modi ratione nam. Officiis eos nihil voluptates aut in aut rerum. Dignissimos eos sit molestias ipsam dolores adipisci omnis repudiandae error.',
  },
  {
    index: 311,
    bgColor: 'white',
    name: 'Vergie Kiehn',
    initials: 'VK',
    jobTitle: 'Regional Quality Executive',
    description:
      'Eveniet maiores labore dolorem possimus reprehenderit doloremque molestiae iusto occaecati.',
    longText:
      'Est aspernatur tempore commodi quia minima ipsam. Cum doloremque iusto adipisci dolorem quia saepe. Expedita officia vero et et rem. Assumenda rerum animi autem. Sed tempore enim debitis blanditiis. Delectus modi veritatis aliquid ratione recusandae dolores dicta omnis nemo.',
  },
  {
    index: 312,
    bgColor: '#f5f5f5',
    name: 'Rodrick Berge',
    initials: 'RB',
    jobTitle: 'Future Program Assistant',
    description: 'Quisquam nemo et quas sunt sed magnam inventore optio maxime.',
    longText:
      'Aut ipsum fuga quia omnis est recusandae non sequi. Aut eaque ut. Omnis libero esse eveniet est culpa voluptate odio. Soluta consequatur aliquid ut.',
  },
  {
    index: 313,
    bgColor: 'white',
    name: 'Raymond Ankunding',
    initials: 'RA',
    jobTitle: 'Internal Tactics Liaison',
    description: 'Impedit a laborum est ipsa nesciunt necessitatibus ut vel voluptatem.',
    longText:
      'Nam eos minus nisi ut placeat. Sit nulla molestiae laborum rerum. Eveniet soluta molestiae voluptas est architecto quo. Numquam est illo soluta quis beatae eos facilis.',
  },
  {
    index: 314,
    bgColor: '#f5f5f5',
    name: 'Kylie Runolfsdottir',
    initials: 'KR',
    jobTitle: 'Corporate Paradigm Consultant',
    description: 'Rem non et asperiores occaecati nostrum illo natus non ea.',
    longText:
      'Qui possimus atque sit. Consequuntur ut quae qui aut. Facere consequatur adipisci eos molestiae et magni. Hic sequi tempora totam iure accusamus et doloribus blanditiis.',
  },
  {
    index: 315,
    bgColor: 'white',
    name: 'Gussie Ankunding',
    initials: 'GA',
    jobTitle: 'Lead Marketing Technician',
    description: 'Enim nemo et laudantium ipsa nostrum sequi debitis aut aut.',
    longText:
      'Nobis aliquid cupiditate laborum. Expedita commodi ad qui minus et est recusandae consequuntur. Et dolore quas porro. Tempore harum veritatis voluptatum esse sit sed in tempore.',
  },
  {
    index: 316,
    bgColor: '#f5f5f5',
    name: 'Orpha Miller',
    initials: 'OM',
    jobTitle: 'Forward Program Assistant',
    description: 'Consequuntur rem qui unde eius ex ducimus ipsa aut facere.',
    longText:
      'Est non amet dolores quia vero eveniet voluptate incidunt. Sequi aut tempore. Non facilis quisquam eum quisquam velit quia quibusdam recusandae. Voluptatum magni inventore fugiat accusamus soluta tempora.',
  },
  {
    index: 317,
    bgColor: 'white',
    name: 'Janet Crooks',
    initials: 'JC',
    jobTitle: 'District Configuration Supervisor',
    description: 'Eum voluptates autem sunt iure quaerat cum aut est sit.',
    longText:
      'Perferendis repellendus voluptatem cumque architecto sed nam perferendis quia voluptates. Dolorem tenetur recusandae. Perferendis sapiente repudiandae harum illo est id enim ipsa. Totam error sunt temporibus expedita neque suscipit. Saepe nihil ab earum ipsa.',
  },
  {
    index: 318,
    bgColor: '#f5f5f5',
    name: 'Lucas Nikolaus',
    initials: 'LN',
    jobTitle: 'Lead Configuration Technician',
    description: 'Dolor dolore omnis ut sint ad asperiores ut consequatur alias.',
    longText:
      'Labore culpa facere eaque et asperiores. Soluta voluptatum eum cumque impedit quidem eveniet voluptatem beatae sint. Rerum inventore aperiam minus. Et ipsa doloribus laboriosam deleniti numquam odit laboriosam quisquam tenetur.',
  },
  {
    index: 319,
    bgColor: 'white',
    name: 'Luis Williamson',
    initials: 'LW',
    jobTitle: 'Future Infrastructure Officer',
    description:
      'Consequatur asperiores eligendi voluptates tempore corporis aut porro quis minus.',
    longText:
      'Est amet voluptatem alias et. Rerum est optio ab maiores sit ut mollitia. Et aut corporis facilis natus ut veniam ut voluptatem. Dolores autem facilis sit dolorem et est est et.',
  },
  {
    index: 320,
    bgColor: '#f5f5f5',
    name: 'Rashawn Emmerich',
    initials: 'RE',
    jobTitle: 'Direct Brand Engineer',
    description: 'Ut ducimus ut quaerat ad atque aut vitae quos voluptatem.',
    longText:
      'Est in qui soluta at. Soluta asperiores blanditiis quibusdam doloremque eveniet culpa. Non porro ipsa sed quisquam ullam autem rerum veritatis.',
  },
  {
    index: 321,
    bgColor: 'white',
    name: 'Yvonne Williamson',
    initials: 'YW',
    jobTitle: 'Forward Group Strategist',
    description: 'Autem iusto quia deserunt sint corporis quia ea possimus qui.',
    longText:
      'Facilis sint officia ipsam commodi ipsa non dignissimos dolore aliquid. Quo atque eius voluptatem quia maiores ea. Porro reprehenderit quo non quia sed impedit voluptatem.',
  },
  {
    index: 322,
    bgColor: '#f5f5f5',
    name: 'Price Kessler',
    initials: 'PK',
    jobTitle: 'Global Integration Designer',
    description:
      'Sunt dolores quaerat eos distinctio officiis commodi velit laboriosam cumque.',
    longText:
      'Ex corporis mollitia dolores ex animi dolor aperiam ullam. Quis modi cum unde nesciunt sit voluptatem magnam cupiditate a. Enim est numquam non numquam.',
  },
  {
    index: 323,
    bgColor: 'white',
    name: 'Christine Osinski',
    initials: 'CO',
    jobTitle: 'Customer Configuration Strategist',
    description: 'Deleniti nihil atque voluptas aut quae et aspernatur aspernatur in.',
    longText:
      'Consequatur atque omnis fuga. Unde natus molestiae assumenda voluptatum praesentium enim voluptatem aut fugiat. Repellendus accusamus error expedita in. Ipsa est nam qui modi modi eaque quos. Itaque voluptatem odio possimus aut sunt.',
  },
  {
    index: 324,
    bgColor: '#f5f5f5',
    name: "Caroline O'Reilly",
    initials: 'CO',
    jobTitle: 'Forward Solutions Planner',
    description:
      'Vero perspiciatis temporibus excepturi dolorem quia officia ut consequatur et.',
    longText:
      'In aut architecto eos aspernatur aut fugiat consequatur vel. Sed error ut sed ipsam quo. Architecto minus pariatur minima. Pariatur eum blanditiis. Rerum sunt et culpa.',
  },
  {
    index: 325,
    bgColor: 'white',
    name: 'Archibald Morissette',
    initials: 'AM',
    jobTitle: 'Corporate Communications Coordinator',
    description: 'Rem non sit qui aut quas voluptatem accusamus voluptatum error.',
    longText:
      'Unde quo consequatur molestiae voluptatem culpa. Asperiores fugiat earum quia quia est animi aut ut unde. Neque id inventore eveniet aut tempora eligendi mollitia. Nemo sed provident.',
  },
  {
    index: 326,
    bgColor: '#f5f5f5',
    name: 'Aimee Nikolaus',
    initials: 'AN',
    jobTitle: 'Internal Solutions Consultant',
    description: 'Aspernatur et cumque quasi et mollitia fuga aut consequatur voluptas.',
    longText:
      'Exercitationem est voluptas maxime qui. Nemo velit velit quidem odit veritatis aut dolorem beatae. Omnis explicabo et rem.',
  },
  {
    index: 327,
    bgColor: 'white',
    name: 'Stefan Yost',
    initials: 'SY',
    jobTitle: 'Corporate Functionality Administrator',
    description: 'Sed earum ducimus quo voluptas ratione itaque esse et distinctio.',
    longText:
      'Ratione perspiciatis recusandae ad aut non. Totam officia nisi repellendus pariatur excepturi voluptatem. In voluptate nihil molestias et qui eius.',
  },
  {
    index: 328,
    bgColor: '#f5f5f5',
    name: 'Pierre Ernser',
    initials: 'PE',
    jobTitle: 'Legacy Integration Engineer',
    description: 'Sapiente rem et suscipit unde vero qui dolorum omnis occaecati.',
    longText:
      'Praesentium distinctio et sunt id repellat maxime. Laborum numquam labore impedit consequatur non exercitationem pariatur qui nam. Enim est rerum sit totam inventore temporibus praesentium sint. Vero odio error architecto.',
  },
  {
    index: 329,
    bgColor: 'white',
    name: 'Leta Lang',
    initials: 'LL',
    jobTitle: 'Investor Directives Planner',
    description: 'Molestias et iure beatae labore at odio consequatur vero mollitia.',
    longText:
      'Tempora explicabo quos. Similique quaerat consequatur. Quia a ipsa nam doloremque sapiente sapiente. Aperiam iusto culpa corporis sed qui autem repellendus. Earum dolor adipisci facilis labore autem impedit itaque culpa. Molestiae nesciunt id.',
  },
  {
    index: 330,
    bgColor: '#f5f5f5',
    name: 'Heather Streich',
    initials: 'HS',
    jobTitle: 'Customer Paradigm Engineer',
    description:
      'Dolores quo soluta dolores perspiciatis magni officiis tenetur enim est.',
    longText:
      'Cupiditate qui ex illum et illo quidem vero ipsa. Culpa necessitatibus alias molestias. Porro sint fuga animi culpa qui aliquam ea. Excepturi est animi aspernatur corporis.',
  },
  {
    index: 331,
    bgColor: 'white',
    name: 'Maida Medhurst',
    initials: 'MM',
    jobTitle: 'Central Assurance Architect',
    description:
      'Laudantium expedita totam aliquid quo illum eligendi dolorem totam illo.',
    longText:
      'Excepturi ex optio minus voluptas qui molestiae dolores. Rerum occaecati dolorem qui consequatur. Omnis distinctio ipsam quis sapiente reprehenderit voluptas saepe dicta nobis. Ipsa eum fugit sint culpa quia magnam. Maiores porro quidem modi quaerat cum.',
  },
  {
    index: 332,
    bgColor: '#f5f5f5',
    name: 'Trycia Lesch',
    initials: 'TL',
    jobTitle: 'Corporate Interactions Liaison',
    description: 'Suscipit dicta enim nobis qui dolores at ut aperiam molestiae.',
    longText:
      'Doloribus sint omnis soluta eum quo. Est nihil minus soluta consequatur repellendus rerum dolore facere voluptas. Ut magni illo est ipsum quisquam rerum. Voluptatum velit modi molestiae dolores incidunt laborum optio ut qui.',
  },
  {
    index: 333,
    bgColor: 'white',
    name: 'Xavier Shields',
    initials: 'XS',
    jobTitle: 'National Mobility Manager',
    description: 'Fuga in dolore iure blanditiis eum voluptates aut quae consequatur.',
    longText:
      'Possimus blanditiis ipsa neque. Et amet reprehenderit velit voluptatum unde. Harum modi vero earum. Voluptatum porro consequatur. Vel veniam consequuntur voluptate aliquam molestiae illo. Quia quae libero nam fugiat pariatur veritatis eligendi consequatur praesentium.',
  },
  {
    index: 334,
    bgColor: '#f5f5f5',
    name: 'Dolores Zieme',
    initials: 'DZ',
    jobTitle: 'Lead Infrastructure Analyst',
    description: 'Eius libero sit explicabo molestiae dolor ad et animi quasi.',
    longText:
      'Sequi ratione ullam praesentium voluptas aliquid quaerat asperiores nobis. Molestiae veritatis consequuntur in quisquam ipsa quas dolor qui nam. At dolor dolores quo illum quia.',
  },
  {
    index: 335,
    bgColor: 'white',
    name: 'Stefanie Dach',
    initials: 'SD',
    jobTitle: 'National Intranet Architect',
    description: 'Enim assumenda eius commodi dicta dolores maiores fugiat eum ipsam.',
    longText:
      'Accusantium qui facere dolorum nam vero esse dignissimos occaecati esse. Quia architecto et nisi. Magni soluta quo quam omnis quod veritatis magnam sed. Est voluptatem et voluptatibus quidem. Eaque dolores quo natus ratione ducimus incidunt. Ut quidem quidem eos modi iste.',
  },
  {
    index: 336,
    bgColor: '#f5f5f5',
    name: 'Antonetta Purdy',
    initials: 'AP',
    jobTitle: 'Principal Integration Specialist',
    description:
      'Ad molestiae animi suscipit omnis quibusdam ipsam inventore consequuntur modi.',
    longText:
      'In temporibus consequuntur. Vitae occaecati nostrum ipsam fuga. At nisi nesciunt. Omnis nemo nam.',
  },
  {
    index: 337,
    bgColor: 'white',
    name: 'Grady White',
    initials: 'GW',
    jobTitle: 'Dynamic Data Planner',
    description: 'Consectetur nostrum ut laboriosam aperiam modi quis vitae qui numquam.',
    longText:
      'Saepe ut est consequatur sunt qui. Facilis deserunt molestiae est. In consectetur maiores non perferendis nobis et velit. Ut nobis autem eos nihil laborum optio magnam harum.',
  },
  {
    index: 338,
    bgColor: '#f5f5f5',
    name: 'Krystel McKenzie',
    initials: 'KM',
    jobTitle: 'Central Quality Technician',
    description: 'Quo rerum quia atque quia ipsum ea iure voluptatem voluptas.',
    longText:
      'Aut impedit maxime quod illum. Dignissimos quo in enim. Cupiditate inventore ad rem sit delectus provident dolorum distinctio.',
  },
  {
    index: 339,
    bgColor: 'white',
    name: 'Addie Huels',
    initials: 'AH',
    jobTitle: 'Global Program Consultant',
    description: 'Distinctio ad ratione in deleniti consequuntur in impedit amet dolor.',
    longText:
      'Explicabo quia corporis et quibusdam mollitia molestiae quos fugit. A ullam doloremque voluptatem ullam eveniet et. Dolores rerum quae.',
  },
  {
    index: 340,
    bgColor: '#f5f5f5',
    name: 'Cassandra Jacobson',
    initials: 'CJ',
    jobTitle: 'Legacy Research Analyst',
    description: 'Mollitia inventore atque dolore nam provident assumenda qui harum sit.',
    longText:
      'Dignissimos quibusdam consequatur qui laudantium. Possimus alias cum. Animi eum eum. Et qui itaque. Rerum omnis molestiae id.',
  },
  {
    index: 341,
    bgColor: 'white',
    name: 'Susana Zboncak',
    initials: 'SZ',
    jobTitle: 'Regional Program Director',
    description: 'Voluptate libero quidem id minus voluptatum ipsa nihil qui quis.',
    longText:
      'Et aut labore minima. Autem praesentium aliquid dolores impedit in reiciendis deserunt. Ut quia est ut animi. Perspiciatis cumque nemo deleniti dolor quod nemo et qui voluptatem.',
  },
  {
    index: 342,
    bgColor: '#f5f5f5',
    name: 'Deja Lesch',
    initials: 'DL',
    jobTitle: 'Future Identity Executive',
    description: 'Eveniet sed sint ea eaque illum facilis molestias recusandae expedita.',
    longText:
      'Rem sunt est numquam. Porro itaque id. Necessitatibus optio nobis consequatur esse voluptas. Quis est saepe odio modi.',
  },
  {
    index: 343,
    bgColor: 'white',
    name: 'Jamaal Gerhold',
    initials: 'JG',
    jobTitle: 'National Accounts Representative',
    description: 'Perferendis et dolores perspiciatis et et soluta iure rerum quo.',
    longText:
      'Quis enim voluptas quo dolorem. Tenetur omnis eius cum aperiam. Consequatur nostrum quasi accusantium voluptatem qui dicta aliquam quidem. Dignissimos dolorem cumque ut. Error iure eveniet pariatur porro culpa minima et ea sint. Expedita et recusandae ea cum et sed.',
  },
  {
    index: 344,
    bgColor: '#f5f5f5',
    name: 'Sofia Koss',
    initials: 'SK',
    jobTitle: 'Central Interactions Director',
    description: 'Quisquam similique aut saepe quia est sit maxime iste sed.',
    longText:
      'Culpa incidunt eligendi soluta repellendus expedita qui quis eveniet. Nostrum officia delectus consequuntur corrupti et incidunt doloribus fuga. Autem ut tempora eum aspernatur assumenda totam aliquam.',
  },
  {
    index: 345,
    bgColor: 'white',
    name: 'Buck Beahan',
    initials: 'BB',
    jobTitle: 'Global Branding Strategist',
    description:
      'Laudantium maiores ipsam sequi perferendis cupiditate possimus nulla distinctio quia.',
    longText:
      'Dolore eum iure labore odit omnis omnis ducimus. Quas quam molestiae est et excepturi vitae. Quam autem totam qui sed incidunt est reprehenderit non enim. Laudantium quidem enim at aut tempora cum vitae consequatur. Quia incidunt eum sit voluptate nihil rem id aliquid.',
  },
  {
    index: 346,
    bgColor: '#f5f5f5',
    name: 'Imani McGlynn',
    initials: 'IM',
    jobTitle: 'Senior Division Strategist',
    description: 'Voluptas molestias ratione ratione libero quia omnis quos dolores aut.',
    longText:
      'Omnis qui inventore assumenda et qui velit quia qui deleniti. Ratione cum aut dignissimos id sed dolorem. Dolores nihil saepe id voluptatum ut quis dignissimos ex. Error et sit quaerat.',
  },
  {
    index: 347,
    bgColor: 'white',
    name: 'Sasha Yundt',
    initials: 'SY',
    jobTitle: 'District Web Planner',
    description:
      'Aut omnis quasi doloribus temporibus fugiat voluptate et et laudantium.',
    longText:
      'Labore quaerat autem fugiat minima. Repudiandae vel reiciendis sint a neque ut. Voluptate pariatur libero repudiandae sunt iusto voluptatum. Non quia nihil perspiciatis dolorum tempore possimus est omnis. Numquam dignissimos eius a dolor quisquam ea et ex explicabo.',
  },
  {
    index: 348,
    bgColor: '#f5f5f5',
    name: 'Ophelia Wintheiser',
    initials: 'OW',
    jobTitle: 'Principal Creative Administrator',
    description: 'Est culpa quia dolor fugiat ea dicta nulla qui distinctio.',
    longText:
      'Voluptas accusantium id. Mollitia accusamus illum doloremque ab. Perspiciatis molestiae natus et eos suscipit.',
  },
  {
    index: 349,
    bgColor: 'white',
    name: 'Sid Beahan',
    initials: 'SB',
    jobTitle: 'Central Web Architect',
    description: 'Vitae ex corporis qui ut quis nam eaque et perspiciatis.',
    longText:
      'Voluptas laboriosam corporis amet. Qui odio repellat porro qui. Sit illum ut ut.',
  },
  {
    index: 350,
    bgColor: '#f5f5f5',
    name: 'Salma Torp',
    initials: 'ST',
    jobTitle: 'Future Metrics Associate',
    description: 'Ex ad fuga aut qui ut consequatur maxime quia repudiandae.',
    longText:
      'Adipisci eum exercitationem nihil eum non. Odio voluptatibus itaque nostrum qui illo dignissimos suscipit non ducimus. Ullam nulla distinctio numquam laudantium. Repudiandae nihil voluptatem magni itaque ut. Voluptas rerum facere eius magnam.',
  },
  {
    index: 351,
    bgColor: 'white',
    name: 'Rolando Kohler',
    initials: 'RK',
    jobTitle: 'Customer Web Assistant',
    description:
      'Suscipit consequatur asperiores ad nobis repudiandae rerum eius eum optio.',
    longText:
      'Voluptatem praesentium ipsum sint voluptas. Et quasi ad voluptatibus quas est rerum et. Quia alias placeat et. Molestiae aut soluta ducimus quia repellat doloremque maiores. Non nemo omnis cumque quasi quos quaerat at ratione voluptatem. Sint inventore reprehenderit iste quos quis modi quas possimus itaque.',
  },
  {
    index: 352,
    bgColor: '#f5f5f5',
    name: 'Halie Cronin',
    initials: 'HC',
    jobTitle: 'Chief Accounts Facilitator',
    description: 'Velit perspiciatis vitae sit quia optio blanditiis excepturi sed rem.',
    longText:
      'Modi voluptatibus et sequi voluptas ipsam deserunt iure. Veniam totam error nihil sunt nobis. A et ut repellendus saepe molestiae quo magni fugit eum. Dicta ipsum neque veniam facilis ab non iste. Voluptatem sed ut.',
  },
  {
    index: 353,
    bgColor: 'white',
    name: 'Leanna Hirthe',
    initials: 'LH',
    jobTitle: 'International Group Orchestrator',
    description: 'Iusto soluta et eveniet ipsam quaerat sit aut ut repellat.',
    longText:
      'Explicabo nisi officiis ipsum accusantium porro quo. Omnis voluptatem fugiat error at. Nemo nam nulla tempora.',
  },
  {
    index: 354,
    bgColor: '#f5f5f5',
    name: 'Maverick Cronin',
    initials: 'MC',
    jobTitle: 'Internal Branding Supervisor',
    description: 'Veritatis velit numquam inventore tenetur quia vero dolor sit esse.',
    longText:
      'Ab ut maiores. Id placeat dolore autem nihil soluta possimus sint et. Minima commodi voluptas. Est voluptas quo in molestiae fugiat.',
  },
  {
    index: 355,
    bgColor: 'white',
    name: 'Marlon Larkin',
    initials: 'ML',
    jobTitle: 'Product Security Architect',
    description: 'Fuga modi esse nobis iusto est reiciendis omnis voluptatem velit.',
    longText:
      'Omnis vel error et et ut quam. Sit fugit sapiente ex omnis fugiat sunt. Ut nesciunt similique. Eaque ut expedita. Nulla et ab provident delectus. Veniam quae eveniet enim debitis sit qui.',
  },
  {
    index: 356,
    bgColor: '#f5f5f5',
    name: 'Heber Johnston',
    initials: 'HJ',
    jobTitle: 'Global Marketing Architect',
    description: 'Consequatur excepturi error aut nulla optio et occaecati ullam sed.',
    longText:
      'Adipisci et quidem perspiciatis consequatur. Non asperiores voluptas eius labore quae quaerat aspernatur. Eveniet sed natus quod. Sit iure autem consequuntur tempore tempora ut nobis consequatur.',
  },
  {
    index: 357,
    bgColor: 'white',
    name: 'Nigel Douglas',
    initials: 'ND',
    jobTitle: 'Dynamic Metrics Agent',
    description:
      'Quis esse voluptatem quae repellendus deserunt voluptatibus eligendi minima rerum.',
    longText:
      'Quas suscipit minima et atque nihil tempore iste quia. Aut sit dignissimos non amet et et aliquid. Temporibus est officiis quia possimus laboriosam. Expedita id ea qui dolor est eveniet maiores. Quia dolore eos eius voluptatem nobis consectetur.',
  },
  {
    index: 358,
    bgColor: '#f5f5f5',
    name: 'Natasha Ryan',
    initials: 'NR',
    jobTitle: 'Global Solutions Executive',
    description: 'Dolor quisquam similique voluptatem id aut expedita itaque autem vel.',
    longText:
      'Enim ipsum possimus non necessitatibus commodi nisi qui necessitatibus non. Dolorem facilis sed laudantium ex consequatur alias eaque ab esse. Voluptatem ipsam reprehenderit quisquam et aut modi.',
  },
  {
    index: 359,
    bgColor: 'white',
    name: 'Margarett Zboncak',
    initials: 'MZ',
    jobTitle: 'Internal Quality Facilitator',
    description: 'Aperiam nulla qui quo et excepturi quis quam laboriosam non.',
    longText:
      'Aspernatur laborum quis nisi cupiditate. Labore magni est voluptatem ex vel sunt harum et. Officiis necessitatibus itaque ut. Quod aut et. Laborum blanditiis laudantium et soluta quas. Recusandae mollitia eius vel praesentium minima porro sed.',
  },
  {
    index: 360,
    bgColor: '#f5f5f5',
    name: 'Wallace Hickle',
    initials: 'WH',
    jobTitle: 'Regional Integration Director',
    description:
      'Et et veritatis cupiditate consequatur excepturi aut voluptas occaecati aut.',
    longText:
      'Quibusdam beatae nulla odit odit. Exercitationem laboriosam id accusamus saepe quibusdam omnis vel quam voluptatem. Fugit omnis dolor. Ducimus ad dolor in doloremque est rerum mollitia ut. Sunt unde neque et nihil corporis sit.',
  },
  {
    index: 361,
    bgColor: 'white',
    name: 'Laney Larkin',
    initials: 'LL',
    jobTitle: 'National Markets Agent',
    description:
      'Consequatur et dolor adipisci mollitia molestias fuga impedit voluptates in.',
    longText:
      'Necessitatibus qui labore aut animi quis optio odit fugiat. Sunt nesciunt et assumenda nemo. Quidem deleniti placeat molestiae quidem. Ratione nisi ut quo sit. Accusantium impedit non exercitationem sunt consequuntur voluptatibus. Aut laborum quaerat aliquid accusantium eum tenetur.',
  },
  {
    index: 362,
    bgColor: '#f5f5f5',
    name: 'Jackeline Gusikowski',
    initials: 'JG',
    jobTitle: 'International Configuration Liaison',
    description:
      'Sequi sunt minima nulla temporibus voluptatem accusamus porro consequatur sunt.',
    longText:
      'Beatae iure voluptatum. Optio pariatur eos laborum. Unde consequatur dolorum non suscipit. Mollitia placeat et unde aut. Quis provident ea quasi porro.',
  },
  {
    index: 363,
    bgColor: 'white',
    name: 'Porter Raynor',
    initials: 'PR',
    jobTitle: 'Forward Usability Orchestrator',
    description: 'Porro velit et et suscipit doloribus iure dignissimos ipsum at.',
    longText:
      'Illum molestias omnis velit ut iusto odit aut quibusdam. Ad laborum deserunt earum nulla aspernatur ut rerum et. Quis laudantium illum assumenda rerum eligendi ut culpa dolor quis. Aut pariatur rerum est consequatur ut.',
  },
  {
    index: 364,
    bgColor: '#f5f5f5',
    name: 'Maia Grimes',
    initials: 'MG',
    jobTitle: 'Senior Directives Consultant',
    description: 'Sunt omnis et enim nobis officiis eaque quia ab qui.',
    longText:
      'Et libero numquam architecto unde libero qui sunt esse tempora. Autem ut et in dolores praesentium nostrum et dolores doloribus. Occaecati non dolorem debitis. Assumenda ut qui et consequatur consequuntur ex ut.',
  },
  {
    index: 365,
    bgColor: 'white',
    name: 'Aubrey Mayert',
    initials: 'AM',
    jobTitle: 'Future Solutions Administrator',
    description:
      'Molestiae libero repellat magnam in perferendis dolores ut numquam qui.',
    longText:
      'Voluptatem voluptate doloribus numquam enim voluptates quam autem error. Iure atque quaerat dolore qui omnis atque quam est commodi. Sed necessitatibus assumenda doloribus architecto adipisci fugit sunt unde. Vitae nobis temporibus repellat explicabo.',
  },
  {
    index: 366,
    bgColor: '#f5f5f5',
    name: 'Eve Labadie',
    initials: 'EL',
    jobTitle: 'Chief Operations Architect',
    description:
      'Deserunt maxime vel repudiandae commodi iste dolores consequatur eum excepturi.',
    longText:
      'Molestias maxime aspernatur expedita dolorum qui et nisi quas cumque. Quo sed assumenda aut enim ducimus nemo. Dolore quo voluptas architecto sapiente voluptates ratione iste sit. Illo iusto ad enim provident voluptatem. Minima nihil velit et.',
  },
  {
    index: 367,
    bgColor: 'white',
    name: 'Otha Langosh',
    initials: 'OL',
    jobTitle: 'Senior Intranet Manager',
    description:
      'Dicta expedita nisi nam aliquid tenetur occaecati voluptate natus occaecati.',
    longText:
      'Sed unde nemo aut magni perferendis dicta qui tempora quia. Unde iste et in aliquid id assumenda maiores sit est. Officiis ipsa mollitia quisquam fuga unde quibusdam. Laudantium quaerat atque doloremque voluptas ut consequatur. Rerum ipsam atque explicabo dolorem perferendis nisi eum deleniti.',
  },
  {
    index: 368,
    bgColor: '#f5f5f5',
    name: 'Alba King',
    initials: 'AK',
    jobTitle: 'Regional Security Administrator',
    description:
      'Esse mollitia officiis quia eligendi ipsam molestiae consequatur ipsam laboriosam.',
    longText:
      'Asperiores quae unde voluptatum sequi. Minima sequi voluptatem veritatis officia est hic est sint. Voluptatem deserunt atque voluptates. Esse soluta expedita ducimus earum natus sed possimus rerum fuga. Nesciunt ex in eaque rem ipsa.',
  },
  {
    index: 369,
    bgColor: 'white',
    name: 'Lucius Zieme',
    initials: 'LZ',
    jobTitle: 'Corporate Configuration Coordinator',
    description: 'Voluptas incidunt id qui veritatis quia distinctio in nihil animi.',
    longText:
      'Dolore voluptas sed sit ut voluptas facere dicta. Voluptates nobis quaerat voluptatem id et. Ut delectus ipsam voluptas molestiae quod. Velit voluptatem et cum rerum reprehenderit cumque tempora voluptas. Dolor dignissimos quasi eligendi veniam iste saepe quia.',
  },
  {
    index: 370,
    bgColor: '#f5f5f5',
    name: 'Josefa Hills',
    initials: 'JH',
    jobTitle: 'Future Functionality Coordinator',
    description: 'Ullam nesciunt alias alias labore earum ut ut dolore dolorum.',
    longText:
      'Vel natus neque sint amet temporibus. Quod porro consequuntur ut et molestiae excepturi sint. Dicta minima qui illum velit et.',
  },
  {
    index: 371,
    bgColor: 'white',
    name: 'Ashlynn Bednar',
    initials: 'AB',
    jobTitle: 'Customer Response Associate',
    description:
      'Dignissimos quisquam sint alias vitae enim et dignissimos vero perspiciatis.',
    longText:
      'Repellendus molestias deleniti architecto qui est aut aut omnis. Ut tempore delectus dolor quaerat magni sit dolor repellendus. Eaque qui aut velit ex totam eos. Qui numquam aliquid. Illo nisi fugiat consequuntur in voluptatum repellendus id numquam.',
  },
  {
    index: 372,
    bgColor: '#f5f5f5',
    name: 'Stacey Schultz',
    initials: 'SS',
    jobTitle: 'Product Communications Producer',
    description: 'Magni voluptas qui deserunt labore est distinctio aut odit modi.',
    longText:
      'Modi excepturi non est ad placeat fuga qui id id. Quas dolorum saepe magni illum. Sed non quaerat eaque nemo tenetur libero natus quia omnis.',
  },
  {
    index: 373,
    bgColor: 'white',
    name: 'Maximus Rowe',
    initials: 'MR',
    jobTitle: 'Investor Tactics Orchestrator',
    description: 'Tenetur sapiente et quae repellat perferendis laborum ad vitae quia.',
    longText: 'Vel eos quis. Quia vitae illo rem ea nulla. Soluta et non vel rerum.',
  },
  {
    index: 374,
    bgColor: '#f5f5f5',
    name: 'Anais Dare',
    initials: 'AD',
    jobTitle: 'Direct Configuration Director',
    description: 'Dolorum ipsa ut itaque corrupti aspernatur aperiam rem magni id.',
    longText:
      'Corrupti quae dolor veritatis laudantium possimus impedit tempore. Quo eius id perspiciatis rerum voluptatem illo maxime. Non delectus error aut eum illo et sed accusantium. Aliquid autem incidunt expedita qui voluptatem aliquid quos quidem dolores. Omnis in sapiente nisi enim nisi unde exercitationem maiores.',
  },
  {
    index: 375,
    bgColor: 'white',
    name: 'Eduardo Beatty',
    initials: 'EB',
    jobTitle: 'Internal Applications Orchestrator',
    description:
      'Sit eius debitis consectetur voluptatibus unde omnis corrupti consequuntur et.',
    longText:
      'Nostrum eaque voluptates. Fugiat nemo tempore rem ipsam similique aperiam placeat. Aliquam ratione et asperiores inventore nam ea.',
  },
  {
    index: 376,
    bgColor: '#f5f5f5',
    name: 'Lorena Harvey',
    initials: 'LH',
    jobTitle: 'Legacy Applications Consultant',
    description: 'Ipsum assumenda eum voluptatem quos ut at est modi sapiente.',
    longText:
      'Ut ad voluptatem magni dolores. Minus ea sunt iste non ratione officiis est ipsa. Quam unde et quas neque. Mollitia corrupti quo. Est sunt quia labore delectus deserunt non praesentium vitae consectetur. Voluptas ex ea iste in totam.',
  },
  {
    index: 377,
    bgColor: 'white',
    name: 'Herman Rosenbaum',
    initials: 'HR',
    jobTitle: 'Dynamic Implementation Officer',
    description:
      'Adipisci neque sit velit esse omnis architecto harum aspernatur similique.',
    longText:
      'Nihil est aut eum sequi cupiditate adipisci et ex temporibus. Esse omnis quae velit dolor dolor. Animi sed dolor est voluptates. Laboriosam voluptas debitis omnis. Provident sunt est.',
  },
  {
    index: 378,
    bgColor: '#f5f5f5',
    name: 'Shannon Robel',
    initials: 'SR',
    jobTitle: 'Dynamic Marketing Consultant',
    description: 'Architecto sit laborum non nam nisi rerum eligendi maxime non.',
    longText:
      'Eum officia architecto ut et rerum. At autem laudantium voluptatibus ab consequatur odit. Ut amet et odit quia reiciendis.',
  },
  {
    index: 379,
    bgColor: 'white',
    name: 'Marshall Harvey',
    initials: 'MH',
    jobTitle: 'Corporate Security Facilitator',
    description: 'Amet quo reprehenderit odio nam accusamus nobis ratione libero modi.',
    longText:
      'Est aut perspiciatis voluptatibus. Amet eaque aliquam doloremque sit. Et dolorum nulla est repudiandae. Necessitatibus dignissimos quis voluptatem incidunt et qui debitis omnis deleniti. Ipsa quam distinctio. Voluptas commodi rerum qui ipsa laboriosam a.',
  },
  {
    index: 380,
    bgColor: '#f5f5f5',
    name: 'Jacey Borer',
    initials: 'JB',
    jobTitle: 'Corporate Security Coordinator',
    description:
      'Praesentium molestiae consequatur laudantium odit et possimus libero eaque ab.',
    longText:
      'Hic quae sint iste inventore ea dicta voluptatem dolor. Impedit blanditiis enim optio quis nulla. Ut eveniet necessitatibus corrupti dignissimos. Quis voluptates atque quod. Nisi nisi quis.',
  },
  {
    index: 381,
    bgColor: 'white',
    name: 'Doris Haag',
    initials: 'DH',
    jobTitle: 'Internal Factors Strategist',
    description: 'Provident qui ducimus veritatis odit quasi nisi earum et ut.',
    longText:
      'Qui amet inventore esse illum consequuntur. Incidunt id rerum inventore blanditiis quas quos. Iste sunt natus rerum quia molestias sed sit est. Delectus maxime est sapiente omnis qui consequatur. Quisquam soluta repellendus rerum quibusdam. Vero explicabo alias quisquam.',
  },
  {
    index: 382,
    bgColor: '#f5f5f5',
    name: 'Lia Erdman',
    initials: 'LE',
    jobTitle: 'Internal Solutions Associate',
    description:
      'Vel necessitatibus non distinctio voluptatem temporibus exercitationem odio ipsa temporibus.',
    longText:
      'Similique ratione officia reiciendis earum. Quia voluptatibus voluptas expedita quo quod voluptatum labore. Fugiat expedita mollitia et odit et aliquid. Suscipit consequuntur quos. Quia hic aut dignissimos harum.',
  },
  {
    index: 383,
    bgColor: 'white',
    name: 'Ofelia Goyette',
    initials: 'OG',
    jobTitle: 'Future Factors Coordinator',
    description: 'Quod nisi qui deleniti explicabo et velit quis sed minima.',
    longText:
      'Facere veritatis tenetur nesciunt nemo. Accusamus quia tempora est ut consequatur quis quis id. Sapiente consectetur nam cumque qui culpa qui velit. Explicabo et enim.',
  },
  {
    index: 384,
    bgColor: '#f5f5f5',
    name: 'Casimer Jast',
    initials: 'CJ',
    jobTitle: 'Dynamic Markets Strategist',
    description: 'Beatae distinctio autem odit corrupti porro odio vitae quia quisquam.',
    longText:
      'Temporibus dolorem quibusdam unde magnam architecto. Ab fugit sed aut vel voluptatem amet. Incidunt quidem optio quasi.',
  },
  {
    index: 385,
    bgColor: 'white',
    name: 'Dimitri Dooley',
    initials: 'DD',
    jobTitle: 'Central Creative Liaison',
    description:
      'Tempore similique sunt ipsum excepturi earum sint animi a perspiciatis.',
    longText:
      'Omnis reiciendis aspernatur laudantium inventore eum quas ipsum fugiat ea. Nihil sit qui nulla repellendus vel porro est nostrum sed. Quaerat rerum earum aut molestias. Ipsa beatae sint sapiente et labore voluptas quas necessitatibus.',
  },
  {
    index: 386,
    bgColor: '#f5f5f5',
    name: 'Paris Schowalter',
    initials: 'PS',
    jobTitle: 'District Intranet Facilitator',
    description: 'Voluptatem et vero earum sit voluptas beatae iure eveniet beatae.',
    longText:
      'Et perspiciatis dolorem corrupti voluptas aut sit est. Repudiandae ut fuga dolores illum. Qui saepe quisquam sit iusto ut. Maxime voluptates hic suscipit.',
  },
  {
    index: 387,
    bgColor: 'white',
    name: 'Mervin Cummerata',
    initials: 'MC',
    jobTitle: 'Central Communications Administrator',
    description:
      'Officia voluptas exercitationem enim quia rerum eaque enim et perferendis.',
    longText:
      'Vel odio officia delectus a aut quo non. Ducimus cumque explicabo quam est porro. Quaerat debitis quas iusto soluta ullam. Neque voluptatum veritatis est laborum qui nam rem maiores. Laudantium sed quaerat excepturi cupiditate odio. Ipsum aut sed.',
  },
  {
    index: 388,
    bgColor: '#f5f5f5',
    name: 'Sylvester Altenwerth',
    initials: 'SA',
    jobTitle: 'Investor Marketing Manager',
    description: 'Qui quo aut impedit iste est sed omnis asperiores dolor.',
    longText:
      'Eum numquam voluptatibus qui deleniti consequatur. Consequatur temporibus est modi excepturi voluptatem. Eos quia ad. Labore sit doloremque distinctio. Dolores voluptatem non dicta et dolore inventore. Excepturi dignissimos omnis sit placeat dolore sed consequatur quia.',
  },
  {
    index: 389,
    bgColor: 'white',
    name: 'Charlene Mraz',
    initials: 'CM',
    jobTitle: 'Customer Marketing Technician',
    description: 'Aliquid est sunt exercitationem maxime adipisci consequatur aut ea at.',
    longText:
      'Quaerat odit quod qui voluptatum modi libero odio aut et. Amet totam repudiandae sit natus enim vitae rerum. Sit voluptatum nisi facere magni omnis exercitationem dolores est omnis. Dolorem numquam sint velit officiis deserunt. Quaerat dolore quasi non a ex sed necessitatibus sequi natus. Non veniam officia aut omnis.',
  },
  {
    index: 390,
    bgColor: '#f5f5f5',
    name: 'Kaya Cassin',
    initials: 'KC',
    jobTitle: 'District Program Consultant',
    description: 'Laborum illo itaque recusandae nobis a et et maxime soluta.',
    longText:
      'Minus minima placeat. Atque illo dolor mollitia soluta. Est alias odio rerum quas. Quidem reiciendis iste nesciunt. Dolores qui assumenda officia quis.',
  },
  {
    index: 391,
    bgColor: 'white',
    name: 'Jordi Green',
    initials: 'JG',
    jobTitle: 'Central Integration Director',
    description: 'Et maiores et explicabo vel fuga aperiam aut explicabo sed.',
    longText:
      'Aperiam aut voluptates distinctio voluptas ut. Aperiam odit corporis ea incidunt officia repudiandae quidem. Rerum quam mollitia.',
  },
  {
    index: 392,
    bgColor: '#f5f5f5',
    name: 'Enos Gibson',
    initials: 'EG',
    jobTitle: 'Corporate Implementation Technician',
    description:
      'Illo dolor excepturi non illo inventore repudiandae distinctio numquam in.',
    longText:
      'Sunt harum et voluptas ut quisquam sed. Iste illo cupiditate commodi. Aut nihil est minima in consequatur qui consequatur ipsum beatae.',
  },
  {
    index: 393,
    bgColor: 'white',
    name: 'Cary Hermann',
    initials: 'CH',
    jobTitle: 'Human Directives Planner',
    description: 'Recusandae sint iure ut quae dignissimos eum ut reprehenderit dolorum.',
    longText:
      'A sit eos ea voluptatem neque dignissimos aut. Dolorum velit sint quis molestiae. Aspernatur aperiam suscipit odit odio vel quia odio. Nihil blanditiis dolorem omnis aut dolorem consequatur aut.',
  },
  {
    index: 394,
    bgColor: '#f5f5f5',
    name: 'London Yundt',
    initials: 'LY',
    jobTitle: 'Corporate Identity Analyst',
    description:
      'Nemo quis expedita rerum repellat sint consequuntur incidunt nisi totam.',
    longText:
      'Temporibus autem ut dolorum aut at. Ea est saepe ratione accusantium dignissimos voluptas. Reprehenderit aliquid enim est aperiam commodi ut impedit enim assumenda. Est et laborum praesentium vero fugit. Quam voluptate molestiae dolorum omnis culpa adipisci ex facere ullam. Alias culpa voluptates maxime soluta dicta et excepturi.',
  },
  {
    index: 395,
    bgColor: 'white',
    name: 'Ardella Walter',
    initials: 'AW',
    jobTitle: 'Dynamic Integration Technician',
    description:
      'Reprehenderit deleniti voluptas eius eius odit accusamus molestias distinctio est.',
    longText:
      'Sit odio velit dolorum vitae maiores. Veritatis ut animi sint ipsam. Ut exercitationem animi harum et cumque quibusdam similique. Ullam quod iste non quia. Aut sunt commodi commodi neque quod voluptatem dolorum culpa est. Quia et quae odit.',
  },
  {
    index: 396,
    bgColor: '#f5f5f5',
    name: 'Petra Lebsack',
    initials: 'PL',
    jobTitle: 'National Division Manager',
    description:
      'Ut esse eius explicabo consequatur ratione labore provident et perferendis.',
    longText:
      'Ipsum est debitis quam non perspiciatis laborum sed vel nostrum. Et possimus magnam. Corporis earum et omnis sed repellendus esse recusandae praesentium ipsam.',
  },
  {
    index: 397,
    bgColor: 'white',
    name: 'Euna Satterfield',
    initials: 'ES',
    jobTitle: 'Central Division Supervisor',
    description:
      'Laboriosam perspiciatis molestiae sed ad officia omnis provident omnis et.',
    longText:
      'Voluptas omnis qui quisquam cum totam. Nulla facere excepturi voluptatum mollitia quasi. Aperiam esse in magni est. Voluptas cupiditate tempora eligendi tempore ad repellendus dolor qui molestiae. Et ex non. Aliquam eveniet neque consequatur qui dolore cum.',
  },
  {
    index: 398,
    bgColor: '#f5f5f5',
    name: 'Naomie Denesik',
    initials: 'ND',
    jobTitle: 'Customer Brand Strategist',
    description:
      'Commodi non voluptatum saepe tempora repudiandae perspiciatis qui occaecati aut.',
    longText:
      'Ut ea maiores. Nihil est iste nostrum perferendis alias nisi amet debitis minima. Nihil enim aut error officia magnam iste est doloremque aspernatur.',
  },
  {
    index: 399,
    bgColor: 'white',
    name: 'Leonie Cronin',
    initials: 'LC',
    jobTitle: 'Central Quality Administrator',
    description:
      'Ducimus iste quos quaerat iusto assumenda officia est impedit adipisci.',
    longText:
      'Repudiandae ipsum quisquam. Amet qui assumenda repellendus. Corporis tenetur sequi sit. Alias impedit facilis autem veritatis iste. Aspernatur et ipsa similique voluptatem ut.',
  },
  {
    index: 400,
    bgColor: '#f5f5f5',
    name: 'Cynthia Tillman',
    initials: 'CT',
    jobTitle: 'Legacy Communications Specialist',
    description:
      'Blanditiis modi numquam animi repellendus enim aut accusamus et dolore.',
    longText:
      'Voluptatem quaerat reiciendis aut et aut eum. Reprehenderit quis aut voluptatem et. Autem ad quibusdam quis recusandae velit aut itaque labore. Quis et quos sit voluptatem hic ducimus et. Et maiores non ea quod ipsam nulla aut.',
  },
  {
    index: 401,
    bgColor: 'white',
    name: 'Triston Lindgren',
    initials: 'TL',
    jobTitle: 'Dynamic Implementation Technician',
    description:
      'Reprehenderit vitae sapiente culpa occaecati officia aperiam odio magnam assumenda.',
    longText:
      'Cumque tempore magnam qui autem pariatur. Optio aut sunt. Voluptas est ut dolorum quod placeat odio molestiae amet. Eos repudiandae blanditiis fugiat unde eligendi.',
  },
  {
    index: 402,
    bgColor: '#f5f5f5',
    name: 'Ashton Lubowitz',
    initials: 'AL',
    jobTitle: 'Customer Tactics Director',
    description: 'Hic explicabo corrupti eveniet qui placeat cupiditate quia vero illo.',
    longText:
      'Commodi suscipit harum impedit porro non consectetur quia necessitatibus. Sed est distinctio porro nostrum dolores aut. Excepturi est deleniti facere quo. Dolor aut in fuga.',
  },
  {
    index: 403,
    bgColor: 'white',
    name: "Tia D'Amore",
    initials: 'TD',
    jobTitle: 'Dynamic Markets Administrator',
    description: 'Voluptatem alias veritatis ducimus impedit dolor enim est neque qui.',
    longText:
      'Mollitia illo tempore id et. Voluptatem et rerum distinctio laboriosam consequatur ut eum dolorem. Voluptatum maxime et. Aut molestiae voluptatum tempora incidunt dolor ea voluptatum nihil. Assumenda blanditiis odio fugiat. Culpa aut qui ipsum fuga minima harum eaque accusantium excepturi.',
  },
  {
    index: 404,
    bgColor: '#f5f5f5',
    name: 'Cindy Witting',
    initials: 'CW',
    jobTitle: 'Chief Web Specialist',
    description: 'Dicta accusantium et officiis rerum cum in autem aliquid molestias.',
    longText:
      'Ratione nobis nihil voluptatem non qui quod. Voluptas error eos eius. Amet nam exercitationem aut facilis amet itaque. Soluta et illo ratione temporibus accusamus. Et et et corrupti consectetur laudantium voluptates delectus pariatur ut.',
  },
  {
    index: 405,
    bgColor: 'white',
    name: 'Francis Collier',
    initials: 'FC',
    jobTitle: 'Investor Marketing Specialist',
    description: 'Et dolor ex neque et ducimus ut magni voluptatem quam.',
    longText:
      'Ut et sed laudantium ut qui eos ut. Quisquam veniam cupiditate quod est velit voluptatem est non. Optio in qui porro ab quo qui ut optio. Possimus tenetur aperiam voluptatem odit dolor itaque in eos at.',
  },
  {
    index: 406,
    bgColor: '#f5f5f5',
    name: 'Raegan Lesch',
    initials: 'RL',
    jobTitle: 'Dynamic Creative Developer',
    description: 'Ut tenetur esse sed quas asperiores voluptas est nihil minima.',
    longText:
      'Vel aut magni fuga. Deserunt repellendus error autem. Quasi exercitationem corporis repudiandae aut.',
  },
  {
    index: 407,
    bgColor: 'white',
    name: 'Elwin Langosh',
    initials: 'EL',
    jobTitle: 'Central Usability Representative',
    description:
      'Accusamus sunt dolor cumque neque delectus nostrum accusantium at dolor.',
    longText:
      'Voluptatibus in repellendus quo praesentium. Est laborum in voluptatibus recusandae dicta quidem ea architecto. Quia asperiores totam. Laudantium omnis sapiente molestias ad. Quis autem nihil odit reiciendis cupiditate.',
  },
  {
    index: 408,
    bgColor: '#f5f5f5',
    name: 'Kathleen Hudson',
    initials: 'KH',
    jobTitle: 'Product Paradigm Representative',
    description: 'Ut dolores iusto ut non saepe laudantium ducimus et blanditiis.',
    longText:
      'Pariatur quia ducimus earum non ad aut autem. Quibusdam quidem voluptatibus facere voluptatum et. Explicabo et dolorem perspiciatis velit.',
  },
  {
    index: 409,
    bgColor: 'white',
    name: 'Burley Will',
    initials: 'BW',
    jobTitle: 'Human Accounts Supervisor',
    description: 'Facere et fugit atque et numquam nemo commodi at aut.',
    longText:
      'Fugit voluptatem sint. Excepturi itaque ut temporibus. Optio enim et cupiditate quis laboriosam dicta dolores quas. Quo ut officiis non deserunt qui dolorem accusamus ratione. Velit atque eum ab necessitatibus excepturi officia nam itaque labore.',
  },
  {
    index: 410,
    bgColor: '#f5f5f5',
    name: 'Cecile Bayer',
    initials: 'CB',
    jobTitle: 'Customer Integration Engineer',
    description:
      'Corrupti itaque iste ut sint sed eligendi dolores expedita exercitationem.',
    longText:
      'Esse magnam non aut. Corporis voluptate velit magni et quos qui consequuntur aut aliquid. Eius recusandae omnis.',
  },
  {
    index: 411,
    bgColor: 'white',
    name: 'Pearl Skiles',
    initials: 'PS',
    jobTitle: 'Investor Quality Producer',
    description:
      'Dicta dolor quia sit aut deserunt aperiam repellendus exercitationem rerum.',
    longText:
      'Eligendi est quas consequuntur aut eligendi blanditiis nihil repudiandae et. Voluptatem consectetur architecto tempora aut nesciunt. Veritatis veritatis autem qui. Quo occaecati rerum laboriosam adipisci. Possimus expedita dolore nisi dolorem quo nulla vel.',
  },
  {
    index: 412,
    bgColor: '#f5f5f5',
    name: 'Gregg Reinger',
    initials: 'GR',
    jobTitle: 'Investor Interactions Strategist',
    description:
      'Eum doloribus officiis similique quia laboriosam est perspiciatis voluptas placeat.',
    longText:
      'Voluptatem quia et cupiditate nam omnis qui. Enim id quia qui cupiditate nostrum assumenda enim. Doloribus debitis rerum. Aliquam rerum culpa quia. Debitis maxime eum iure nobis aut vitae aspernatur. Exercitationem doloremque corrupti repellendus aut nihil asperiores.',
  },
  {
    index: 413,
    bgColor: 'white',
    name: 'Pierre Lueilwitz',
    initials: 'PL',
    jobTitle: 'Lead Usability Liaison',
    description: 'Iusto quasi velit sunt maxime fuga et necessitatibus quam eos.',
    longText:
      'Minima architecto nihil vel. Iste distinctio et ipsam. Vel quis vero sunt sunt asperiores.',
  },
  {
    index: 414,
    bgColor: '#f5f5f5',
    name: 'Norval Marks',
    initials: 'NM',
    jobTitle: 'Central Response Architect',
    description:
      'Corporis porro recusandae odit sed dignissimos ipsum distinctio qui hic.',
    longText:
      'Eum aut autem dolorem qui non quis ducimus hic deleniti. Quis ut et omnis. Architecto quis delectus pariatur a qui. Praesentium quia natus sequi aspernatur quo quis non magni. Eius minus vitae porro sint dolor id.',
  },
  {
    index: 415,
    bgColor: 'white',
    name: 'Brendon Rolfson',
    initials: 'BR',
    jobTitle: 'Product Accountability Designer',
    description: 'Iure ea quaerat fuga quis impedit repellat expedita voluptate quis.',
    longText:
      'Dolorum dolorem veniam. Qui harum molestiae dolorum nobis fugiat. Tempore ullam sunt nemo ratione ab possimus ut. Quibusdam iste sint.',
  },
  {
    index: 416,
    bgColor: '#f5f5f5',
    name: 'Merl Hickle',
    initials: 'MH',
    jobTitle: 'Dynamic Data Designer',
    description: 'Pariatur tenetur accusantium debitis minus nobis ipsa hic non ad.',
    longText:
      'Voluptas minus eligendi sint voluptatem beatae dolore sapiente. Minima dolor ut et doloribus. Iure neque a nobis vel. Voluptates praesentium vero quos non ut voluptatem nemo maxime.',
  },
  {
    index: 417,
    bgColor: 'white',
    name: 'Ozella Howell',
    initials: 'OH',
    jobTitle: 'Forward Infrastructure Agent',
    description: 'Ipsam qui eligendi qui in pariatur et et ut odio.',
    longText:
      'Autem provident doloremque omnis nobis corporis et nisi. Temporibus ut distinctio aliquid recusandae fugiat autem ut. Dolor eum aut aut vero. Quo aperiam dignissimos rerum. Adipisci et sunt ipsam qui nesciunt laudantium sapiente necessitatibus quo. Rerum iure sunt.',
  },
  {
    index: 418,
    bgColor: '#f5f5f5',
    name: 'Eugene Medhurst',
    initials: 'EM',
    jobTitle: 'Forward Factors Orchestrator',
    description:
      'Voluptatem saepe quam doloribus quia consequatur consequatur dolore ad non.',
    longText:
      'Voluptas ea assumenda. Nisi quia sed commodi voluptate eligendi similique. Ipsa neque sit corrupti enim. Qui eum id quas necessitatibus.',
  },
  {
    index: 419,
    bgColor: 'white',
    name: 'Landen Kulas',
    initials: 'LK',
    jobTitle: 'National Communications Representative',
    description: 'Delectus nobis architecto est impedit cupiditate est ut unde voluptas.',
    longText:
      'Earum fugit quos architecto laborum qui asperiores eos. Est aut ea quaerat ipsa et ullam ut. Odit consequatur vero magnam rerum consequatur sit consequatur earum.',
  },
  {
    index: 420,
    bgColor: '#f5f5f5',
    name: 'Tara Blick',
    initials: 'TB',
    jobTitle: 'Forward Configuration Engineer',
    description: 'Nesciunt sit est et in vel et et voluptas saepe.',
    longText:
      'Voluptate veniam ullam officiis et qui. Voluptatem commodi et labore non accusantium rem. Et dolore itaque et dolorem velit quibusdam nisi. Itaque est magnam animi corporis minus at quia. Eum aut dolores exercitationem tenetur hic deleniti provident.',
  },
  {
    index: 421,
    bgColor: 'white',
    name: 'Janiya Doyle',
    initials: 'JD',
    jobTitle: 'Central Integration Representative',
    description:
      'Blanditiis quisquam numquam architecto beatae voluptatem facere dolore veniam quo.',
    longText:
      'Porro debitis consectetur dignissimos repudiandae sit. Dolor in reprehenderit blanditiis ab rerum quo nam accusamus. Dolorem quis quia et.',
  },
  {
    index: 422,
    bgColor: '#f5f5f5',
    name: 'Stone Stark',
    initials: 'SS',
    jobTitle: 'Lead Mobility Supervisor',
    description: 'Ut dolor aut aut sed nemo dolor tempora quo necessitatibus.',
    longText:
      'Laboriosam ducimus vel culpa in laboriosam minus. Consequuntur saepe consequatur natus nostrum consequatur nostrum recusandae. Error sed iure vero possimus optio harum nisi fugit. Voluptatem qui unde. At nesciunt dolor facilis consequuntur consectetur dolor unde. Accusantium recusandae qui consectetur est est aperiam id.',
  },
  {
    index: 423,
    bgColor: 'white',
    name: 'Dereck Bergstrom',
    initials: 'DB',
    jobTitle: 'Senior Usability Developer',
    description: 'Expedita quas numquam qui in natus minima quo soluta est.',
    longText:
      'Qui accusantium at assumenda quos fuga blanditiis est nisi. Aperiam inventore quo vel occaecati error at. Distinctio eaque in quis qui ipsam et officia omnis. Ducimus ut alias beatae mollitia velit fugiat praesentium dolor quas.',
  },
  {
    index: 424,
    bgColor: '#f5f5f5',
    name: 'Cloyd Adams',
    initials: 'CA',
    jobTitle: 'Corporate Data Technician',
    description: 'Iure nemo saepe itaque quas id numquam fugit sed nobis.',
    longText:
      'Eveniet molestias debitis nam eaque. Quis distinctio aliquam cumque aut perspiciatis sit quia vel nobis. Dolor libero recusandae explicabo provident totam.',
  },
  {
    index: 425,
    bgColor: 'white',
    name: 'Roxanne Spencer',
    initials: 'RS',
    jobTitle: 'District Mobility Strategist',
    description:
      'Et dolorum labore nemo aliquam consequatur ea natus laudantium deserunt.',
    longText:
      'Quae cum amet beatae et ut iste quaerat est. Tempore soluta nulla maxime. Ex consectetur eveniet mollitia atque tenetur architecto veniam ullam.',
  },
  {
    index: 426,
    bgColor: '#f5f5f5',
    name: 'Stanford Fahey',
    initials: 'SF',
    jobTitle: 'Principal Solutions Agent',
    description: 'Qui nihil placeat rerum non odio veniam quos maxime dolor.',
    longText:
      'Molestiae neque enim voluptatem aliquid ut aut molestiae voluptatum. Et quasi facere aut porro veniam. Amet eos odio.',
  },
  {
    index: 427,
    bgColor: 'white',
    name: 'Sofia Johnson',
    initials: 'SJ',
    jobTitle: 'Regional Branding Coordinator',
    description:
      'Unde repellat perspiciatis qui quaerat praesentium rerum nihil doloremque nihil.',
    longText:
      'Eaque sed ea ut autem dolor aut possimus aspernatur saepe. Pariatur dolore non sequi aliquam nobis. Maiores tempora pariatur dolores est omnis unde aperiam tempore. Natus et soluta vel incidunt commodi vitae corrupti alias. Beatae deserunt nemo dolores nemo nisi.',
  },
  {
    index: 428,
    bgColor: '#f5f5f5',
    name: 'Kacey Wisoky',
    initials: 'KW',
    jobTitle: 'Lead Assurance Coordinator',
    description:
      'Repellat consequatur unde sit aut quibusdam corporis neque voluptas enim.',
    longText:
      'Nisi quas dolor consequatur. Similique consequatur quos eligendi dolore impedit architecto dolorem dolorem. Facere eius officiis eius. Accusantium et quia eos fuga maiores voluptate.',
  },
  {
    index: 429,
    bgColor: 'white',
    name: 'Ladarius Connelly',
    initials: 'LC',
    jobTitle: 'District Functionality Designer',
    description: 'Laborum quia qui laboriosam inventore esse corporis et dolores natus.',
    longText:
      'Dolore beatae accusamus. Reprehenderit qui quod dolor excepturi similique dolore ab consectetur. Repudiandae quo ut exercitationem harum omnis nobis. Praesentium eum aut id autem. Qui ratione velit nihil aut neque ut. Velit corrupti earum consequuntur explicabo eveniet et nostrum magnam odit.',
  },
  {
    index: 430,
    bgColor: '#f5f5f5',
    name: 'Max Kilback',
    initials: 'MK',
    jobTitle: 'Principal Integration Orchestrator',
    description: 'Aut dolorum commodi ab deserunt doloribus iste impedit aut laborum.',
    longText:
      'Aut cumque aut et sit. Accusamus quasi quo deleniti quia voluptas. Possimus est officia rem. Et incidunt autem quas qui sit commodi error ratione. Exercitationem rerum aut qui.',
  },
  {
    index: 431,
    bgColor: 'white',
    name: 'Zora Turner',
    initials: 'ZT',
    jobTitle: 'International Applications Assistant',
    description:
      'Et impedit incidunt enim ratione laudantium unde occaecati nostrum voluptatem.',
    longText:
      'Exercitationem qui amet et rerum dolorem libero minima. Eum consectetur consequatur repudiandae optio quaerat possimus. Fugiat placeat in velit consequatur exercitationem. Aut inventore et itaque illo quidem optio. Quos et nihil et molestias esse nihil. Esse eos et natus quis itaque.',
  },
  {
    index: 432,
    bgColor: '#f5f5f5',
    name: 'Dave Bergstrom',
    initials: 'DB',
    jobTitle: 'Customer Interactions Liaison',
    description:
      'Quibusdam pariatur beatae voluptatem reprehenderit omnis culpa expedita voluptate dolorem.',
    longText:
      'Rerum minima esse quam est praesentium quia eveniet. Optio consequatur molestias cumque et amet fuga. A sint qui quo id cupiditate autem. Ipsam quae est ducimus nihil a ut aut odit consequuntur.',
  },
  {
    index: 433,
    bgColor: 'white',
    name: 'Chelsea Bruen',
    initials: 'CB',
    jobTitle: 'Legacy Research Manager',
    description: 'Ratione est quas cumque quo voluptas dolores quos sint sit.',
    longText:
      'Sit qui incidunt qui iusto dolor eum optio autem consequuntur. Occaecati omnis repudiandae voluptatem in quo. Ea pariatur omnis voluptate voluptatibus animi quae enim. Cum incidunt quia. Alias sunt suscipit et dolore fugit sed reiciendis repellat et.',
  },
  {
    index: 434,
    bgColor: '#f5f5f5',
    name: 'Wendy Hagenes',
    initials: 'WH',
    jobTitle: 'Dynamic Mobility Orchestrator',
    description: 'Atque corrupti nobis iure repudiandae est laboriosam nisi quo qui.',
    longText:
      'Ab ipsam magnam impedit labore praesentium. Sunt quam aut. Ut accusantium sed aut cupiditate molestias maxime voluptatum iusto. Qui error quasi est. In harum dolorem repellat temporibus eveniet quasi. Sint tempora fugiat iure.',
  },
  {
    index: 435,
    bgColor: 'white',
    name: 'April Adams',
    initials: 'AA',
    jobTitle: 'Internal Data Technician',
    description: 'Qui et necessitatibus error modi facere quae accusamus et fugiat.',
    longText:
      'Sed cupiditate necessitatibus commodi et nihil qui eos odio. Libero nobis voluptate repellendus consequatur ad eos delectus corrupti. Distinctio quod aliquam reiciendis vel rerum. Non aut qui exercitationem rerum. Aperiam saepe aut sapiente officiis voluptatem.',
  },
  {
    index: 436,
    bgColor: '#f5f5f5',
    name: 'Zachery Waters',
    initials: 'ZW',
    jobTitle: 'Lead Division Producer',
    description: 'Illum sit cum qui voluptas suscipit quo labore consequatur ut.',
    longText:
      'Aut culpa voluptatem ipsa possimus quibusdam minus et iusto. Ratione expedita qui enim odio et reprehenderit commodi non. Similique aut odio quo eos repellendus ea nisi consequatur consequuntur.',
  },
  {
    index: 437,
    bgColor: 'white',
    name: 'Marcelo Kshlerin',
    initials: 'MK',
    jobTitle: 'National Web Specialist',
    description:
      'Eligendi sit magnam reprehenderit fugit pariatur eum earum nesciunt atque.',
    longText:
      'Numquam voluptatem pariatur incidunt nemo quaerat repellat laborum laborum aut. Similique error sapiente blanditiis et aut et quia placeat dolorum. Ex nostrum qui hic dignissimos sunt hic. Nisi assumenda quos. Assumenda cum aliquam velit laboriosam quae commodi dolor. Deleniti suscipit sed est sed magnam reprehenderit.',
  },
  {
    index: 438,
    bgColor: '#f5f5f5',
    name: 'Evert Hermiston',
    initials: 'EH',
    jobTitle: 'International Metrics Supervisor',
    description: 'Fugiat ut dolorem repellat sapiente voluptas quos vel aut amet.',
    longText:
      'Aut possimus omnis quo qui. Ut labore non aut cupiditate ut sed. Fuga dolore ut aliquid. Repudiandae sequi id tempora molestiae aut quo.',
  },
  {
    index: 439,
    bgColor: 'white',
    name: 'Laila Price',
    initials: 'LP',
    jobTitle: 'Direct Tactics Strategist',
    description:
      'Consequatur eum laudantium quaerat similique accusantium veritatis doloribus dolorem fuga.',
    longText:
      'Alias atque tempore molestiae voluptatibus quia illum accusantium minus. Sit et dolor ipsam. Est ut dolorem et accusantium nostrum sint ipsa dolorum nobis. Vel et velit sapiente magnam neque asperiores alias velit.',
  },
  {
    index: 440,
    bgColor: '#f5f5f5',
    name: 'Chauncey Beier',
    initials: 'CB',
    jobTitle: 'Product Optimization Strategist',
    description: 'Est nulla magnam qui nihil maiores nihil voluptatem repellat deserunt.',
    longText:
      'Distinctio quia laborum pariatur ut culpa et officia itaque consequatur. In voluptatem quas dolor minima. Minima aperiam provident qui odio velit.',
  },
  {
    index: 441,
    bgColor: 'white',
    name: 'Cory Powlowski',
    initials: 'CP',
    jobTitle: 'Senior Infrastructure Supervisor',
    description: 'Molestias magni sed aperiam laudantium ad odit commodi vel explicabo.',
    longText:
      'Aspernatur similique commodi sed rerum doloribus. Explicabo laborum quo velit ullam qui. Incidunt tempore quas omnis delectus. Ut quia enim in quisquam quod architecto.',
  },
  {
    index: 442,
    bgColor: '#f5f5f5',
    name: 'Renee Klocko',
    initials: 'RK',
    jobTitle: 'Human Configuration Planner',
    description: 'Quidem iste libero ipsum natus rem minima dolorem consectetur rerum.',
    longText:
      'Magnam temporibus accusamus repellat. Quae ad sed voluptatem fugit odit ut harum repudiandae. Occaecati velit temporibus a qui.',
  },
  {
    index: 443,
    bgColor: 'white',
    name: 'Humberto Upton',
    initials: 'HU',
    jobTitle: 'Future Intranet Associate',
    description: 'Eligendi facilis ea nobis eos vel optio odit culpa eum.',
    longText:
      'Nobis nobis harum illum. Nostrum quis quo molestias ratione eos. Nihil doloremque reiciendis fugiat tenetur. Placeat quia rerum ut excepturi repudiandae. Deserunt fugiat molestiae vel quia et rerum.',
  },
  {
    index: 444,
    bgColor: '#f5f5f5',
    name: 'Tillman Muller',
    initials: 'TM',
    jobTitle: 'Customer Accounts Executive',
    description: 'Rem exercitationem quibusdam eum voluptas ut dolor ut odit fugiat.',
    longText:
      'Eveniet repellat quia sint blanditiis fuga. Eos id id vitae nihil corporis rerum eligendi. Dolorum laudantium et qui at tempora inventore sed.',
  },
  {
    index: 445,
    bgColor: 'white',
    name: 'Trudie Hagenes',
    initials: 'TH',
    jobTitle: 'Dynamic Research Specialist',
    description:
      'Est deleniti et voluptatem delectus ut debitis officiis corrupti praesentium.',
    longText:
      'Sunt exercitationem et sunt. Doloremque ea esse nobis aliquam sed ut. Rem quo quia quia sapiente commodi aut eos.',
  },
  {
    index: 446,
    bgColor: '#f5f5f5',
    name: 'Joany Schneider',
    initials: 'JS',
    jobTitle: 'Legacy Marketing Producer',
    description: 'Occaecati eos debitis et distinctio quam delectus debitis sint veniam.',
    longText:
      'Ea pariatur et commodi cumque laudantium. Omnis est non vitae voluptas maiores atque voluptatum at eveniet. Delectus aut impedit nisi ea deserunt tempora. Natus rerum ut sed voluptatem.',
  },
  {
    index: 447,
    bgColor: 'white',
    name: 'Ivy Upton',
    initials: 'IU',
    jobTitle: 'Forward Solutions Representative',
    description: 'Suscipit laborum aut fugiat praesentium accusantium quia id qui et.',
    longText:
      'A doloremque repellat iusto accusamus. Ut quia nam sit eos magnam voluptate facere. Natus et libero voluptates est tenetur. Natus dolores provident aliquam ipsum aut distinctio et qui. Porro facilis aperiam.',
  },
  {
    index: 448,
    bgColor: '#f5f5f5',
    name: 'Delia Cummerata',
    initials: 'DC',
    jobTitle: 'Lead Optimization Designer',
    description: 'Commodi nihil culpa consectetur dolores eum aut vel maxime sit.',
    longText:
      'Necessitatibus itaque dolorem eum aspernatur reprehenderit. Quis quia nihil saepe accusamus saepe aliquid. Alias libero dolores et et rerum vitae vel qui accusantium. Similique omnis deleniti voluptatem a quidem impedit. Rem perspiciatis fugiat ullam blanditiis tempora voluptate expedita velit. Consectetur distinctio voluptatem nemo quibusdam blanditiis fugiat.',
  },
  {
    index: 449,
    bgColor: 'white',
    name: 'Allison Abernathy',
    initials: 'AA',
    jobTitle: 'Forward Response Strategist',
    description: 'Ipsa nemo doloremque eius ea velit placeat eos eos atque.',
    longText:
      'Quis beatae sint. Maiores sed deleniti. Repellat est voluptatibus rerum. Veniam est illum eum. Quis nisi et quis inventore quas quasi. Sapiente debitis est cum qui sunt aut quisquam.',
  },
  {
    index: 450,
    bgColor: '#f5f5f5',
    name: 'Danny White',
    initials: 'DW',
    jobTitle: 'Dynamic Brand Liaison',
    description: 'Tenetur iste vitae cumque earum dolor reprehenderit voluptas eaque ut.',
    longText:
      'Vel qui qui ipsam iusto magnam saepe ipsam ipsam et. Doloribus ad architecto qui numquam sunt rerum architecto non. Possimus est eos beatae nulla. Quos consectetur ab laborum enim sunt odio dolores. Sed nostrum dolore tenetur est et odit et.',
  },
  {
    index: 451,
    bgColor: 'white',
    name: 'Ressie Harvey',
    initials: 'RH',
    jobTitle: 'Product Response Consultant',
    description:
      'Explicabo officia repellendus a voluptatem est quia natus facere fugit.',
    longText:
      'Quia iste expedita corporis rerum. Voluptatem reprehenderit eum porro nihil. Repellat sequi repellendus. Tempore eligendi est at omnis id placeat voluptas atque.',
  },
  {
    index: 452,
    bgColor: '#f5f5f5',
    name: 'Vaughn Crona',
    initials: 'VC',
    jobTitle: 'Regional Directives Engineer',
    description: 'Voluptatem ut et error ratione qui eum ut dolorem qui.',
    longText:
      'Aut aut debitis et. Tempore magnam consequatur atque qui. Deleniti id repellendus saepe quasi laudantium occaecati autem. Qui deserunt repellendus rem eum tenetur. Rerum aliquid totam. Ad nemo id autem voluptatem illum.',
  },
  {
    index: 453,
    bgColor: 'white',
    name: 'Ursula Hintz',
    initials: 'UH',
    jobTitle: 'Regional Metrics Executive',
    description: 'Odit corporis qui ipsa quia ipsa nemo similique aut quos.',
    longText:
      'Velit aut suscipit sed quod nisi dignissimos. Animi praesentium et cumque. Qui suscipit eos reiciendis alias molestias recusandae. Cumque animi deleniti quo dolorem et. Modi totam debitis tempore qui dignissimos.',
  },
  {
    index: 454,
    bgColor: '#f5f5f5',
    name: 'Karolann Dare',
    initials: 'KD',
    jobTitle: 'Corporate Usability Consultant',
    description: 'Ut expedita occaecati quo quis id totam cumque ea voluptatem.',
    longText:
      'Illo voluptatum ab eum ex ipsa mollitia est dolorem dolore. Possimus molestiae ipsam. Modi quo reprehenderit praesentium tempora architecto voluptas perspiciatis veniam. Suscipit asperiores sed explicabo consequatur consequatur et ut at sed.',
  },
  {
    index: 455,
    bgColor: 'white',
    name: 'Rosalyn Marvin',
    initials: 'RM',
    jobTitle: 'Regional Directives Specialist',
    description:
      'Sit consequuntur tempore voluptate repellat ratione nihil et possimus voluptas.',
    longText:
      'Totam praesentium aut voluptate consequatur ratione eius dolor. Ducimus in voluptas deserunt repudiandae quaerat repellat itaque voluptas. Voluptatum odio vel omnis non quidem qui. Qui voluptas porro dolorem eius.',
  },
  {
    index: 456,
    bgColor: '#f5f5f5',
    name: 'Brice Zulauf',
    initials: 'BZ',
    jobTitle: 'District Paradigm Supervisor',
    description:
      'Et consequatur perspiciatis ipsa delectus facere non sequi impedit inventore.',
    longText:
      'Voluptatum alias tenetur aut perferendis illo. Necessitatibus unde facere placeat quam inventore nihil incidunt. Mollitia corrupti inventore blanditiis quia et commodi alias. Accusamus vitae voluptate rem ut veritatis et eum. Temporibus enim dolorem optio aut eaque inventore similique.',
  },
  {
    index: 457,
    bgColor: 'white',
    name: 'Harrison Strosin',
    initials: 'HS',
    jobTitle: 'Forward Group Executive',
    description: 'Eligendi hic quo ut et est animi ut est aperiam.',
    longText:
      'Quidem pariatur et atque qui veritatis maiores soluta. Rerum ea alias perferendis molestias inventore commodi. Provident et illo et optio maxime quo ut. Est accusantium odit culpa vel dignissimos reiciendis maxime sapiente dolor.',
  },
  {
    index: 458,
    bgColor: '#f5f5f5',
    name: 'Sammie Pollich',
    initials: 'SP',
    jobTitle: 'Product Usability Producer',
    description: 'Ratione et fugit totam sint sit inventore iste sit dolores.',
    longText:
      'Quas adipisci natus ut recusandae est. Facere qui sapiente aut itaque. Quasi quis ea et corporis. Et ratione asperiores delectus quo sed iure.',
  },
  {
    index: 459,
    bgColor: 'white',
    name: 'Catalina Schumm',
    initials: 'CS',
    jobTitle: 'District Accounts Engineer',
    description: 'Blanditiis aliquid ut ea nesciunt nam dolorem in deserunt unde.',
    longText:
      'Doloremque ab quis hic voluptatem. Optio iste in rerum ut consequatur maxime repellendus tempore sunt. Maiores rerum ducimus exercitationem. Quia dolorem tempora beatae placeat ipsa quam et eaque corporis.',
  },
  {
    index: 460,
    bgColor: '#f5f5f5',
    name: 'Ardith Simonis',
    initials: 'AS',
    jobTitle: 'Internal Infrastructure Technician',
    description: 'In perspiciatis ut in dolor dolor qui illo soluta quidem.',
    longText:
      'Iste iusto fugit facilis magni neque. Repellendus maiores deserunt quis vel nam est doloremque dicta dolorem. Et sunt non reprehenderit voluptas quasi. Qui omnis enim fugit numquam nihil id cum consequatur. Debitis at tempora rerum. Autem quas repellat nisi illum.',
  },
  {
    index: 461,
    bgColor: 'white',
    name: 'Valentin Cummerata',
    initials: 'VC',
    jobTitle: 'Central Identity Strategist',
    description: 'Consectetur dolorem non est minima iure rerum nihil reprehenderit aut.',
    longText:
      'Laudantium est hic dicta dolorem veniam rerum. Tempore ut dolores laborum quam non optio. Temporibus corporis quasi. Ipsa dolores amet vel reprehenderit laboriosam aut ut iste doloremque. Labore aperiam aperiam molestiae.',
  },
  {
    index: 462,
    bgColor: '#f5f5f5',
    name: 'Orval Towne',
    initials: 'OT',
    jobTitle: 'International Mobility Planner',
    description: 'Et nostrum nemo quos eaque excepturi ea vitae voluptatem aliquam.',
    longText:
      'Et qui maiores dolorem ipsam est animi. Doloribus et error ut. Debitis accusamus aut ullam et culpa. Sint quisquam et sit dolore aut harum facere id ipsum. Sapiente doloribus distinctio minima sed voluptatem inventore eligendi.',
  },
  {
    index: 463,
    bgColor: 'white',
    name: 'Ernie Rodriguez',
    initials: 'ER',
    jobTitle: 'Customer Configuration Supervisor',
    description:
      'Vitae molestias ullam aliquam quo perferendis itaque provident beatae perferendis.',
    longText:
      'Asperiores suscipit corrupti quasi sed. Rerum quae sequi sint accusamus nisi. Dicta expedita vero ut sit non repellendus. Suscipit voluptas exercitationem nam ut nihil illum similique deleniti in.',
  },
  {
    index: 464,
    bgColor: '#f5f5f5',
    name: 'Aron Wisozk',
    initials: 'AW',
    jobTitle: 'Dynamic Research Agent',
    description: 'Occaecati quia autem enim dolorem tempore at ipsam qui consequatur.',
    longText:
      'Voluptas maxime corrupti voluptas soluta iste quia sequi fugit. Qui quis nobis aut debitis fugiat totam aut velit. Vel distinctio est nostrum sapiente impedit laboriosam accusamus voluptatem. Harum vel est in pariatur. Voluptatem magnam vel aut et. Voluptate quis facilis rerum.',
  },
  {
    index: 465,
    bgColor: 'white',
    name: 'Aubree Keeling',
    initials: 'AK',
    jobTitle: 'Regional Operations Supervisor',
    description:
      'Amet autem praesentium officia culpa necessitatibus nesciunt et nihil accusamus.',
    longText:
      'Dolorem non cupiditate reiciendis. Accusantium qui minima. Ea rerum in dolore sunt enim deserunt atque repellat aliquid. Quasi et inventore officia nam velit illum enim. Odio ea eligendi minus quis minus ratione est eveniet ea.',
  },
  {
    index: 466,
    bgColor: '#f5f5f5',
    name: 'Isadore Collier',
    initials: 'IC',
    jobTitle: 'Direct Accounts Analyst',
    description: 'Et dicta dolores et odit dolor ab exercitationem saepe vel.',
    longText:
      'Sit omnis omnis quaerat et possimus accusamus nesciunt. Placeat vel asperiores numquam omnis magnam velit ab. Nam delectus modi delectus eaque id fuga consectetur non. Ab dolores cupiditate maxime harum iure impedit aspernatur. Officia totam et. Praesentium molestiae hic dolor qui.',
  },
  {
    index: 467,
    bgColor: 'white',
    name: 'Judson Koss',
    initials: 'JK',
    jobTitle: 'Direct Factors Developer',
    description: 'Rerum est ut itaque ut iste temporibus velit et ab.',
    longText:
      'Delectus enim non nesciunt dolorum quis ullam occaecati facilis. Commodi id temporibus quos fugiat ut unde. Et totam eius deleniti ratione. Quasi ut omnis est excepturi nihil quo ea. Eum voluptatem consectetur.',
  },
  {
    index: 468,
    bgColor: '#f5f5f5',
    name: 'Savannah Cassin',
    initials: 'SC',
    jobTitle: 'Regional Program Administrator',
    description: 'Enim atque itaque dolor eos ut explicabo eligendi laudantium nihil.',
    longText:
      'Officiis voluptatibus incidunt ducimus adipisci quod sequi. Perspiciatis dolores odit dolor ab omnis nam ab. Non sit vero. Eaque provident non quo in dolor eos. Qui culpa ipsum tenetur earum impedit id atque unde reprehenderit. Fuga distinctio labore aut praesentium vero unde.',
  },
  {
    index: 469,
    bgColor: 'white',
    name: 'Clemens Aufderhar',
    initials: 'CA',
    jobTitle: 'District Mobility Liaison',
    description:
      'Maxime distinctio ex quaerat consequatur impedit praesentium aliquid ut sed.',
    longText:
      'Tempora voluptatibus amet sequi ipsa. Doloribus blanditiis voluptatum ut placeat itaque esse. Molestiae ut reprehenderit quo cumque perferendis accusantium quaerat. Unde laboriosam nam repellendus fugiat. Dolores quibusdam qui quia. Facilis dignissimos unde.',
  },
  {
    index: 470,
    bgColor: '#f5f5f5',
    name: 'Erling Kuphal',
    initials: 'EK',
    jobTitle: 'Internal Factors Planner',
    description:
      'Voluptas fugiat alias doloremque facere in architecto pariatur eaque aperiam.',
    longText:
      'Tempora repudiandae et quo porro dolorem expedita provident rerum. Qui accusamus porro ex quas soluta optio. Sint iste labore quos maxime eum aliquid nam repellat est.',
  },
  {
    index: 471,
    bgColor: 'white',
    name: 'Letha Wyman',
    initials: 'LW',
    jobTitle: 'Human Accountability Coordinator',
    description: 'Velit animi perspiciatis rerum culpa ut aliquam et assumenda expedita.',
    longText:
      'Deserunt necessitatibus eveniet voluptatem enim nesciunt exercitationem autem reiciendis ab. Voluptatem aut expedita non praesentium ea quo. Consectetur atque deleniti ratione veniam. Aliquam molestiae quod reprehenderit quia non minima quae est repellendus.',
  },
  {
    index: 472,
    bgColor: '#f5f5f5',
    name: 'Leonie DuBuque',
    initials: 'LD',
    jobTitle: 'Direct Factors Coordinator',
    description: 'Vel est vitae nam magni ut qui assumenda distinctio perspiciatis.',
    longText:
      'Est accusamus sint quod id tempora consequatur aut placeat blanditiis. Dignissimos dicta molestias fugiat. Corrupti ea aliquam vel earum mollitia voluptatem qui. Placeat dolorem omnis voluptatum alias ex amet eaque quo expedita.',
  },
  {
    index: 473,
    bgColor: 'white',
    name: 'Brooks Hyatt',
    initials: 'BH',
    jobTitle: 'Future Mobility Producer',
    description: 'Non sunt nobis ut vero aspernatur beatae eum incidunt qui.',
    longText:
      'Et suscipit dolor tempora. Ipsam quia qui. Ut illo rem nemo quidem qui consequatur adipisci est deserunt. Qui vel deserunt. Ducimus excepturi eius commodi cumque. Qui est molestiae alias corrupti voluptatum quia.',
  },
  {
    index: 474,
    bgColor: '#f5f5f5',
    name: 'Eloise Denesik',
    initials: 'ED',
    jobTitle: 'Human Infrastructure Consultant',
    description:
      'Dicta non corporis occaecati voluptas praesentium maiores cupiditate cumque beatae.',
    longText:
      'Id exercitationem quae labore. Eos magnam et. Neque voluptatum in accusamus blanditiis reiciendis explicabo consequatur aut fuga.',
  },
  {
    index: 475,
    bgColor: 'white',
    name: 'Ramiro Abshire',
    initials: 'RA',
    jobTitle: 'Product Mobility Engineer',
    description:
      'Ea expedita nesciunt culpa incidunt porro aperiam vitae delectus tenetur.',
    longText:
      'Odio hic illum. Modi aliquam necessitatibus voluptatem consectetur iusto optio. Nostrum iure in. Modi qui facere sit quia ut praesentium. Saepe quas necessitatibus odio dolorem odit expedita qui nobis. Quidem nesciunt voluptatem perferendis quasi qui distinctio qui id.',
  },
  {
    index: 476,
    bgColor: '#f5f5f5',
    name: 'Marco Nicolas',
    initials: 'MN',
    jobTitle: 'Human Creative Orchestrator',
    description: 'Ex rerum quam perferendis quibusdam quasi est vel eius nisi.',
    longText:
      'Voluptas dignissimos impedit asperiores nihil natus qui voluptate repudiandae. Temporibus consequatur facilis eius quam eligendi. Iure blanditiis inventore. Ad non repudiandae libero. Ipsam architecto occaecati quia quidem eos et in iure alias.',
  },
  {
    index: 477,
    bgColor: 'white',
    name: 'Travon Botsford',
    initials: 'TB',
    jobTitle: 'Principal Configuration Designer',
    description:
      'Omnis veritatis necessitatibus omnis consequuntur tempora nostrum incidunt excepturi voluptate.',
    longText:
      'Omnis numquam veniam corrupti sed inventore. Ipsa et saepe nihil exercitationem in aut mollitia aspernatur. Voluptates voluptatibus pariatur velit animi est quas. Ut cupiditate est.',
  },
  {
    index: 478,
    bgColor: '#f5f5f5',
    name: 'Clair Rau',
    initials: 'CR',
    jobTitle: 'International Response Architect',
    description: 'Illo nemo error est quisquam voluptas fugit unde et quia.',
    longText:
      'Et sapiente temporibus cumque vel in accusamus quae illo quia. Ut qui voluptates minus numquam maiores in. Laudantium inventore consectetur et. Minima et ducimus et ut cumque. Perferendis dolor ut sit aliquam cupiditate error illum ducimus repellendus.',
  },
  {
    index: 479,
    bgColor: 'white',
    name: 'Francesco Adams',
    initials: 'FA',
    jobTitle: 'Investor Configuration Engineer',
    description: 'Accusamus unde consequatur iste nam est autem quas occaecati nesciunt.',
    longText:
      'Quo voluptas nihil. Repellendus et consequuntur. Et itaque temporibus et. Placeat aut perferendis quia unde eius. Est error dignissimos beatae aut enim odio quo asperiores ipsa. Numquam delectus numquam eos quo est dolore porro cum.',
  },
  {
    index: 480,
    bgColor: '#f5f5f5',
    name: 'Junior Nikolaus',
    initials: 'JN',
    jobTitle: 'Investor Security Architect',
    description: 'Laudantium consequatur unde autem et porro iure qui aut libero.',
    longText:
      'Sit vero deleniti minima quidem. Exercitationem nesciunt assumenda eum dolorem aut quaerat odit autem exercitationem. Ea doloremque eaque dolor eligendi esse alias. Voluptate cumque qui est. Culpa ex inventore.',
  },
  {
    index: 481,
    bgColor: 'white',
    name: 'Monte Zboncak',
    initials: 'MZ',
    jobTitle: 'Corporate Brand Specialist',
    description:
      'Iusto aperiam tempore similique optio mollitia consequuntur dicta tempora similique.',
    longText:
      'Aut natus quia non molestias id et. Aliquam dolorem esse repudiandae molestias laboriosam. Possimus animi cumque laboriosam aut vitae inventore maxime. Amet rerum asperiores aperiam labore maxime nulla nostrum hic iste. Commodi nisi quasi.',
  },
  {
    index: 482,
    bgColor: '#f5f5f5',
    name: 'Oswald Kunze',
    initials: 'OK',
    jobTitle: 'Customer Research Agent',
    description: 'Quaerat et labore voluptas ut ut odio neque amet aut.',
    longText:
      'Et dicta optio qui rem ea dignissimos rerum enim non. Eum vitae quos voluptas ipsam aliquam quidem magni tempore. Voluptates incidunt et.',
  },
  {
    index: 483,
    bgColor: 'white',
    name: 'Carolina Fahey',
    initials: 'CF',
    jobTitle: 'Legacy Response Liaison',
    description:
      'Necessitatibus perspiciatis alias et temporibus nisi error asperiores eos magni.',
    longText:
      'In et nam consequatur enim dolores reiciendis. Eligendi ut voluptas accusamus rem ipsa quia inventore est ut. Iste asperiores aut commodi iure voluptas ut enim quae. Laboriosam eveniet et ut voluptas aut. Corporis quis ut nisi. Veritatis vero aut nihil corrupti illum est dolorem quasi.',
  },
  {
    index: 484,
    bgColor: '#f5f5f5',
    name: 'Monroe Schinner',
    initials: 'MS',
    jobTitle: 'National Infrastructure Liaison',
    description:
      'Veniam aut voluptates non voluptas voluptates quia voluptatem veniam sed.',
    longText:
      'Eos aut corrupti ut. Unde sed molestiae non voluptatum. Molestiae rerum quam neque expedita. Veritatis et quaerat facere.',
  },
  {
    index: 485,
    bgColor: 'white',
    name: 'Devonte Paucek',
    initials: 'DP',
    jobTitle: 'National Communications Administrator',
    description: 'Eum impedit laboriosam debitis rerum alias amet occaecati sint nulla.',
    longText:
      'Aut voluptatibus aut vitae perspiciatis odio. Ut cupiditate voluptatem et autem qui temporibus dolor incidunt earum. Culpa consequatur facilis quas sapiente. Quidem tempora et. Dignissimos doloribus architecto temporibus corrupti nihil omnis provident est laborum.',
  },
  {
    index: 486,
    bgColor: '#f5f5f5',
    name: 'Braxton Bergstrom',
    initials: 'BB',
    jobTitle: 'Customer Identity Orchestrator',
    description: 'Fugiat et aut facere at consectetur voluptatem aut eum nostrum.',
    longText:
      'Id illum adipisci nobis libero repellat repellendus. Voluptate et cupiditate eius unde ratione distinctio. Sit non quia. Blanditiis sed aut aspernatur debitis velit rem. Nesciunt debitis quia dolor id in porro est similique blanditiis. Possimus et qui facere quam ut.',
  },
  {
    index: 487,
    bgColor: 'white',
    name: 'Rasheed Turner',
    initials: 'RT',
    jobTitle: 'Human Marketing Analyst',
    description: 'Voluptas nesciunt veniam possimus voluptas ut a iusto aut hic.',
    longText:
      'Veniam nam consequatur commodi. Dolorum neque sed at molestiae odit blanditiis laboriosam. Tempora aliquam blanditiis qui quia ducimus. Aut nulla nesciunt aut ratione similique.',
  },
  {
    index: 488,
    bgColor: '#f5f5f5',
    name: 'Julio Jacobson',
    initials: 'JJ',
    jobTitle: 'Future Accountability Officer',
    description:
      'Sit voluptatem velit laboriosam alias voluptas accusamus dolore in consequatur.',
    longText:
      'Et deleniti dicta et sed maiores ea quia. Optio soluta nostrum. Maxime quisquam facere aliquid nihil. Odio pariatur ut eaque aut et aut aut facere qui. Corporis et porro adipisci sed.',
  },
  {
    index: 489,
    bgColor: 'white',
    name: 'Ayla Bechtelar',
    initials: 'AB',
    jobTitle: 'Direct Interactions Manager',
    description: 'Voluptate quia quasi voluptas beatae et et facilis magni iusto.',
    longText:
      'Sit fugiat iste quidem inventore. Perspiciatis illum voluptatem autem dolore eveniet suscipit accusantium. Sed animi sed voluptas. Aut aut molestiae. Suscipit nesciunt quis adipisci consequuntur numquam dolores.',
  },
  {
    index: 490,
    bgColor: '#f5f5f5',
    name: 'Dortha DuBuque',
    initials: 'DD',
    jobTitle: 'Global Identity Engineer',
    description:
      'Necessitatibus distinctio libero non cum aspernatur ratione facere molestiae eveniet.',
    longText:
      'Sed sit eveniet unde tempora quos officia et nihil. Eum corrupti ea ut error nihil occaecati doloribus. Quis dicta accusamus hic debitis dolorem quia quo voluptates debitis.',
  },
  {
    index: 491,
    bgColor: 'white',
    name: 'Toby Schamberger',
    initials: 'TS',
    jobTitle: 'Dynamic Intranet Director',
    description: 'Autem fugiat assumenda vero dolorem et quo enim ratione et.',
    longText:
      'Distinctio autem mollitia. Dolor odit omnis nam. Blanditiis sequi velit ullam. Et et ut sed eos enim sed quia nihil ex. Accusamus aut at ab dolorem dolorem ea saepe.',
  },
  {
    index: 492,
    bgColor: '#f5f5f5',
    name: 'Ally Spinka',
    initials: 'AS',
    jobTitle: 'Internal Division Engineer',
    description: 'Numquam est quia nesciunt placeat ab est quisquam itaque quia.',
    longText:
      'Facere aliquam id expedita ut consequatur odio. Ea molestiae eum. Repellat adipisci voluptatem nisi et aut.',
  },
  {
    index: 493,
    bgColor: 'white',
    name: 'Vidal Barton',
    initials: 'VB',
    jobTitle: 'Global Branding Administrator',
    description: 'Voluptas rerum temporibus omnis nostrum vel et magnam aperiam natus.',
    longText:
      'Eum quidem saepe debitis. Consequuntur ea perferendis qui et qui laudantium officiis nesciunt id. Dolorum nesciunt aut molestiae ut sit soluta dolorem laudantium nobis. Officia neque est illum delectus et aut aut explicabo maxime. Voluptas non repudiandae.',
  },
  {
    index: 494,
    bgColor: '#f5f5f5',
    name: 'Laura Dare',
    initials: 'LD',
    jobTitle: 'Dynamic Accountability Officer',
    description: 'Asperiores ullam omnis in magnam totam cum deleniti non dolorum.',
    longText:
      'Dignissimos est repellendus. Temporibus dicta et qui dolore occaecati. Consequuntur eum esse commodi quam eum expedita aliquam explicabo. Quae rerum voluptatem quam velit. Modi repellendus earum impedit voluptatibus expedita eos optio voluptatibus. Est sit porro molestiae illum voluptatibus ea tempore modi non.',
  },
  {
    index: 495,
    bgColor: 'white',
    name: 'Neal Gutkowski',
    initials: 'NG',
    jobTitle: 'Lead Applications Strategist',
    description: 'Quia assumenda dolore dolore molestiae ex et autem culpa aspernatur.',
    longText:
      'Molestiae architecto quas quia eius. Dignissimos quia consequatur nisi ipsum commodi minus ea quia sed. Ut commodi cupiditate et sit dolores facilis dolorem in.',
  },
  {
    index: 496,
    bgColor: '#f5f5f5',
    name: 'Darwin Dickinson',
    initials: 'DD',
    jobTitle: 'Customer Marketing Agent',
    description: 'Aut eveniet voluptatibus quod in quo ipsa culpa et et.',
    longText:
      'Consequuntur ipsum est voluptates voluptates asperiores fugiat nobis voluptatibus. Cum quam ullam. Hic quis et voluptas et et ut fugit in.',
  },
  {
    index: 497,
    bgColor: 'white',
    name: 'Lonie Fisher',
    initials: 'LF',
    jobTitle: 'Lead Identity Representative',
    description: 'Qui enim error et voluptas dicta qui impedit corporis voluptatum.',
    longText:
      'Dignissimos a commodi molestiae quo dolores ut et. Voluptatem voluptatibus eos nemo ratione. Totam dolorem ducimus doloremque dolor.',
  },
  {
    index: 498,
    bgColor: '#f5f5f5',
    name: 'Vada Romaguera',
    initials: 'VR',
    jobTitle: 'Lead Implementation Director',
    description:
      'Eveniet illum ratione voluptates minima rem sed quas dolores consequatur.',
    longText:
      'Officiis vel rerum. Est corrupti neque et eius est nemo vel voluptatem eos. Quam sequi voluptatum velit omnis beatae. Quia deserunt eum perferendis at iusto.',
  },
  {
    index: 499,
    bgColor: 'white',
    name: 'Dino Robel',
    initials: 'DR',
    jobTitle: 'Central Research Facilitator',
    description: 'Corporis vel quia dolorem a sequi sit quo consequatur rem.',
    longText:
      'Quasi voluptatum accusamus unde nostrum dolor reprehenderit. Qui cumque non esse voluptates aut iste sunt fugit est. Deserunt itaque optio id consectetur. Iure unde dolorum.',
  },
  {
    index: 500,
    bgColor: '#f5f5f5',
    name: 'Raquel Farrell',
    initials: 'RF',
    jobTitle: 'Central Usability Representative',
    description:
      'Fugit ipsa aut maiores ipsa veritatis delectus exercitationem aperiam repudiandae.',
    longText:
      'Enim nostrum ut. In doloribus dolorem repellendus ipsa. Expedita suscipit eos excepturi excepturi iusto consequatur. Qui recusandae vero.',
  },
  {
    index: 501,
    bgColor: 'white',
    name: 'Zaria Hahn',
    initials: 'ZH',
    jobTitle: 'Internal Group Associate',
    description:
      'Tempore excepturi exercitationem aut deleniti perferendis consequuntur aut et aut.',
    longText:
      'Aperiam debitis sunt vero consectetur. Sit enim soluta eos ducimus blanditiis quo quo culpa suscipit. A ut dicta quis molestiae non. Ut enim quo. Tempore ut amet explicabo omnis suscipit molestias. Rerum omnis animi amet vel rerum.',
  },
  {
    index: 502,
    bgColor: '#f5f5f5',
    name: 'Mac Zemlak',
    initials: 'MZ',
    jobTitle: 'Direct Factors Designer',
    description: 'Est pariatur temporibus voluptates sint expedita laborum quia et nisi.',
    longText:
      'Assumenda corrupti sint iusto perferendis. Explicabo rem fuga consectetur quisquam fugit qui asperiores et modi. Velit quaerat voluptas minus iusto.',
  },
  {
    index: 503,
    bgColor: 'white',
    name: 'Retta Jones',
    initials: 'RJ',
    jobTitle: 'Future Tactics Specialist',
    description:
      'Blanditiis quas iusto corporis dolore sint inventore ducimus minima ullam.',
    longText:
      'Laboriosam ad qui corrupti sit accusantium culpa unde est. Vero tenetur id quae omnis sapiente beatae. Illum numquam nobis. Amet in ut incidunt quae inventore dolores inventore. Quia consequatur aliquid officiis. Sint labore voluptas asperiores distinctio et similique magni.',
  },
  {
    index: 504,
    bgColor: '#f5f5f5',
    name: 'Tatyana Okuneva',
    initials: 'TO',
    jobTitle: 'Corporate Branding Executive',
    description: 'Suscipit sed et earum animi velit sit repellat officia praesentium.',
    longText:
      'Aut libero dolorem qui enim quas asperiores. Facilis sed dolorem repellendus ducimus quo. Voluptas veniam ipsam aut veritatis eveniet dolores exercitationem suscipit quae. Veritatis cupiditate illum delectus veritatis est. Laboriosam nam laboriosam aut placeat. Nihil voluptatum qui.',
  },
  {
    index: 505,
    bgColor: 'white',
    name: 'Nash Stark',
    initials: 'NS',
    jobTitle: 'Product Security Executive',
    description: 'Aperiam recusandae aut temporibus alias ut reprehenderit qui nisi ut.',
    longText:
      'Placeat maiores expedita commodi minus impedit dolorem reprehenderit fugiat dolores. Modi ea eius. Quas iure voluptas blanditiis fuga voluptas atque. Et vitae fuga praesentium. Porro ad qui et eos laudantium rerum ea. Odio enim provident dolores.',
  },
  {
    index: 506,
    bgColor: '#f5f5f5',
    name: 'Amber Volkman',
    initials: 'AV',
    jobTitle: 'Direct Mobility Agent',
    description:
      'Dolore recusandae asperiores est temporibus sequi ea est doloribus nulla.',
    longText:
      'Accusamus consequatur magnam fugiat. Architecto eos quod tempora sed nihil modi. In veniam ex aut eos dolore dignissimos facere aliquam.',
  },
  {
    index: 507,
    bgColor: 'white',
    name: 'Josiah Boyle',
    initials: 'JB',
    jobTitle: 'Corporate Quality Associate',
    description:
      'Nam eaque deserunt voluptatem explicabo aut at voluptatem incidunt iusto.',
    longText:
      'Explicabo quae et quas provident amet. Iusto rem dolores perspiciatis consequuntur. Labore necessitatibus aperiam qui.',
  },
  {
    index: 508,
    bgColor: '#f5f5f5',
    name: 'Jayne Becker',
    initials: 'JB',
    jobTitle: 'Global Research Director',
    description: 'Officiis sed provident omnis veritatis aut deleniti quidem est aut.',
    longText:
      'Quisquam ducimus omnis. Sunt quisquam at facere commodi aut. Voluptatem aut sequi non accusantium minus illo nihil quibusdam. Odio excepturi aut. Laudantium deleniti debitis repellat et.',
  },
  {
    index: 509,
    bgColor: 'white',
    name: 'Hassan Kessler',
    initials: 'HK',
    jobTitle: 'Future Group Liaison',
    description: 'Ut aut fugiat sunt neque excepturi optio rerum nesciunt dolorem.',
    longText:
      'Dolores rerum id. Harum sed repudiandae. Maxime a sapiente ut. Minus delectus harum debitis reiciendis ullam quia pariatur.',
  },
  {
    index: 510,
    bgColor: '#f5f5f5',
    name: 'Janick Zieme',
    initials: 'JZ',
    jobTitle: 'Chief Functionality Engineer',
    description: 'Ex ipsum id culpa quam quos quis aut voluptatem nam.',
    longText:
      'Ab voluptates asperiores dolores nam eos et. Beatae aperiam neque doloribus labore cum. Beatae impedit reiciendis nesciunt. Itaque minima aspernatur qui quia laboriosam et consequatur error.',
  },
  {
    index: 511,
    bgColor: 'white',
    name: 'Fay Zulauf',
    initials: 'FZ',
    jobTitle: 'Dynamic Interactions Architect',
    description:
      'Recusandae cupiditate ipsam laborum suscipit porro qui quia voluptatem totam.',
    longText:
      'Quasi aut repellat dolores sunt qui. Repellat reiciendis magnam consequatur ut nostrum provident aut. Mollitia doloribus ratione quam sint veniam enim. Ea natus et. Vero optio recusandae et.',
  },
  {
    index: 512,
    bgColor: '#f5f5f5',
    name: 'Lawrence Hodkiewicz',
    initials: 'LH',
    jobTitle: 'District Accountability Coordinator',
    description: 'Et qui qui commodi fugiat est non similique ad alias.',
    longText:
      'Enim voluptatem minus. Quia aliquam ratione. Eum ab molestiae eum illo fugit aut ea necessitatibus est. Neque nulla architecto.',
  },
  {
    index: 513,
    bgColor: 'white',
    name: 'Elenora Schmeler',
    initials: 'ES',
    jobTitle: 'Global Marketing Planner',
    description:
      'Ut eum architecto et accusamus quaerat unde veritatis illum reprehenderit.',
    longText: 'Quae saepe sapiente. Perspiciatis qui aut nihil. Ex est quod a.',
  },
  {
    index: 514,
    bgColor: '#f5f5f5',
    name: 'Kendra Hayes',
    initials: 'KH',
    jobTitle: 'Investor Infrastructure Assistant',
    description:
      'Minus dolorem architecto officia distinctio et maiores iusto quidem est.',
    longText:
      'Autem et aperiam vel in et repellat qui quo consequatur. Libero ipsum provident. Laudantium ipsum in est ex rerum saepe aut at eum. Et cupiditate id excepturi. Illo sint nulla beatae ipsum omnis. Tempora amet iure quis.',
  },
  {
    index: 515,
    bgColor: 'white',
    name: 'Arianna Little',
    initials: 'AL',
    jobTitle: 'Senior Functionality Representative',
    description: 'Eum itaque qui odit quis aliquam ut repellat a eaque.',
    longText:
      'Et est et accusantium et molestiae accusamus ut et autem. Provident consectetur non voluptas minima natus quia quo. Cum nulla molestiae minima nihil quia repellat consectetur ipsa corrupti. Aperiam ipsum et.',
  },
  {
    index: 516,
    bgColor: '#f5f5f5',
    name: 'Isabel Labadie',
    initials: 'IL',
    jobTitle: 'Chief Quality Developer',
    description: 'Illo nihil est pariatur autem earum deleniti dolor minima fugiat.',
    longText:
      'Molestiae possimus provident. Voluptate odit enim. Molestias aut consequatur. Omnis enim blanditiis at doloribus sit.',
  },
  {
    index: 517,
    bgColor: 'white',
    name: 'Eleanora Windler',
    initials: 'EW',
    jobTitle: 'Chief Division Technician',
    description: 'Ut sed magni ut doloremque voluptatibus suscipit nihil fugiat in.',
    longText:
      'Aliquam officiis dolor aut. Id dolores odio aut accusantium. Dolor voluptatum dolorem maxime itaque atque pariatur placeat.',
  },
  {
    index: 518,
    bgColor: '#f5f5f5',
    name: 'Percy Pfeffer',
    initials: 'PP',
    jobTitle: 'Global Brand Supervisor',
    description:
      'Voluptate delectus numquam autem nihil quisquam error nobis eligendi quia.',
    longText:
      'Aspernatur modi libero nemo in non voluptatum. Nobis quibusdam expedita voluptate et consequatur quisquam magni. Rerum voluptatum eaque inventore et voluptatum consequatur. Aspernatur quia vitae. Voluptas dolor in autem veniam praesentium dolores necessitatibus officia.',
  },
  {
    index: 519,
    bgColor: 'white',
    name: 'Verona Reichel',
    initials: 'VR',
    jobTitle: 'Chief Group Designer',
    description: 'Asperiores inventore et error illum corrupti et et eius est.',
    longText:
      'Eligendi quas ipsum debitis et labore sed. Quis beatae quia perspiciatis quaerat quos. Aut fugiat velit blanditiis. Esse omnis impedit perferendis culpa sed adipisci. Aliquam non ut reiciendis ut expedita officia. Voluptatum maiores et in.',
  },
  {
    index: 520,
    bgColor: '#f5f5f5',
    name: 'Nolan Cruickshank',
    initials: 'NC',
    jobTitle: 'Future Division Engineer',
    description:
      'Qui repellendus saepe est exercitationem eius atque doloribus blanditiis non.',
    longText:
      'Natus aliquid sed vel provident perferendis dolores aut. Repudiandae corrupti nam sed nobis enim omnis voluptatem. Est rem fuga molestiae quia.',
  },
  {
    index: 521,
    bgColor: 'white',
    name: 'Justen Hickle',
    initials: 'JH',
    jobTitle: 'Product Tactics Administrator',
    description: 'Quisquam ad eos voluptas dignissimos quo enim natus dolor minima.',
    longText:
      'Ea ut aut voluptatem expedita. Nobis illum sunt nostrum eos. Sed velit beatae culpa illum nihil veniam. Omnis sit illo.',
  },
  {
    index: 522,
    bgColor: '#f5f5f5',
    name: 'Kasandra VonRueden',
    initials: 'KV',
    jobTitle: 'Legacy Mobility Architect',
    description: 'Ut omnis provident odio fugit veniam eligendi qui fugit repudiandae.',
    longText:
      'Nobis quae iusto eos. Quia ut accusamus ut illo perferendis ut ipsa ea nisi. Voluptatum corporis qui delectus ad aliquid impedit. Repellendus fuga quidem aut commodi ex. Ad et odit corporis nemo illo cum.',
  },
  {
    index: 523,
    bgColor: 'white',
    name: 'Imogene Marvin',
    initials: 'IM',
    jobTitle: 'National Usability Producer',
    description: 'Incidunt nobis impedit id sed quia alias reprehenderit quisquam dolor.',
    longText:
      'Aut ut qui consequatur expedita et deleniti aut est. Aut culpa sunt officiis ducimus. Dolorem rerum voluptas voluptate corrupti. Reprehenderit nemo consequuntur dolores porro non dolorum. Animi et velit aut et atque eligendi. Sequi aut et praesentium pariatur.',
  },
  {
    index: 524,
    bgColor: '#f5f5f5',
    name: 'Allan Kreiger',
    initials: 'AK',
    jobTitle: 'Customer Identity Assistant',
    description: 'Ut ut praesentium commodi natus omnis rerum sit aut consectetur.',
    longText:
      'Temporibus quod voluptas ratione nobis saepe eos et velit. Ipsam esse placeat doloribus ut voluptatibus provident. Dolor magnam odit exercitationem nihil quasi ut harum facilis. Aliquam iure accusamus illum quae fuga ipsum architecto veritatis id. Error veniam culpa aut animi.',
  },
  {
    index: 525,
    bgColor: 'white',
    name: 'Monroe Schmeler',
    initials: 'MS',
    jobTitle: 'Regional Functionality Facilitator',
    description: 'Et veritatis vel laborum quos et assumenda omnis ut inventore.',
    longText:
      'In sed quibusdam. Velit earum ut nemo aut. In vitae natus. Rerum aut qui nulla quia fugiat soluta minus.',
  },
  {
    index: 526,
    bgColor: '#f5f5f5',
    name: 'Ida King',
    initials: 'IK',
    jobTitle: 'Senior Usability Developer',
    description: 'Maiores inventore velit iste sed quaerat quia sint tenetur possimus.',
    longText:
      'Doloribus quia qui. Et assumenda quibusdam. Vitae omnis et at aperiam odit.',
  },
  {
    index: 527,
    bgColor: 'white',
    name: 'Easter Bruen',
    initials: 'EB',
    jobTitle: 'Future Implementation Consultant',
    description: 'Laborum et nobis sed est excepturi vero accusamus similique et.',
    longText:
      'Quibusdam adipisci dolorem et qui cupiditate dolorem porro rem. Sint quae suscipit saepe odio. Amet quia perferendis.',
  },
  {
    index: 528,
    bgColor: '#f5f5f5',
    name: 'Dallas Mayert',
    initials: 'DM',
    jobTitle: 'Legacy Web Supervisor',
    description: 'Impedit et vel sint alias velit deleniti non tempora facilis.',
    longText:
      'Reiciendis consequatur dolorem possimus beatae ut beatae nisi accusamus. Quis eos corporis sint est modi sed eius aut. Ducimus omnis impedit qui. Dolorem occaecati consectetur natus cum ducimus.',
  },
  {
    index: 529,
    bgColor: 'white',
    name: 'Trey Keeling',
    initials: 'TK',
    jobTitle: 'Direct Directives Coordinator',
    description:
      'Praesentium ad eaque alias expedita quae pariatur voluptatum tenetur soluta.',
    longText:
      'Quaerat sint ea quis cumque sint dolorum quasi est. Qui est occaecati repellendus et ut est et aliquam rerum. Fuga odio tenetur dolorem. Eius praesentium cum et qui.',
  },
  {
    index: 530,
    bgColor: '#f5f5f5',
    name: 'Naomi Bailey',
    initials: 'NB',
    jobTitle: 'International Marketing Strategist',
    description: 'Et dolorem maiores enim soluta aliquid quae repellendus molestiae ut.',
    longText:
      'Aliquam maxime aut iste deleniti sunt ducimus doloribus dolor amet. Ut molestiae sed odit quia repudiandae harum non. At in architecto beatae. Est modi accusamus odit nemo labore. Excepturi iure rerum dolore in in sit repellat.',
  },
  {
    index: 531,
    bgColor: 'white',
    name: 'Rex Bergnaum',
    initials: 'RB',
    jobTitle: 'Regional Mobility Technician',
    description: 'Minima at animi non et quisquam ipsam et quia et.',
    longText:
      'Cum quae provident reprehenderit. Nulla qui eos. Repudiandae atque sit quia porro laborum excepturi temporibus.',
  },
  {
    index: 532,
    bgColor: '#f5f5f5',
    name: 'Evan Hane',
    initials: 'EH',
    jobTitle: 'Human Optimization Orchestrator',
    description: 'Hic alias odit porro ut qui sit sint sed iure.',
    longText:
      'Atque laboriosam tenetur labore. Eius vero et eum sint consequatur rerum molestias vero excepturi. Voluptas quae eveniet sequi. In rerum cumque sit sed quis labore cum.',
  },
  {
    index: 533,
    bgColor: 'white',
    name: 'Bartholome Armstrong',
    initials: 'BA',
    jobTitle: 'National Factors Planner',
    description: 'Reprehenderit qui iste voluptas voluptas sit ea quibusdam quis ut.',
    longText:
      'Nihil aut sint rerum at eaque aspernatur. Voluptatibus nesciunt porro dolor aut incidunt nobis asperiores in error. Sint ut sed in. Molestias facilis ad dolorem rem. Iste ipsam porro perspiciatis voluptatem omnis iste autem necessitatibus.',
  },
  {
    index: 534,
    bgColor: '#f5f5f5',
    name: 'Kiley Tillman',
    initials: 'KT',
    jobTitle: 'Global Tactics Technician',
    description:
      'Repellat labore eos sed magni eum sapiente assumenda dolorem necessitatibus.',
    longText:
      'Itaque suscipit mollitia quisquam. Commodi quo facere explicabo omnis corrupti voluptas reprehenderit minima. Dolores a tempora. Est rerum et animi esse quas ratione nulla aut iste.',
  },
  {
    index: 535,
    bgColor: 'white',
    name: 'Hilda Krajcik',
    initials: 'HK',
    jobTitle: 'Lead Division Technician',
    description: 'Fuga et officia voluptatum dolore quo est cumque odit dicta.',
    longText:
      'Voluptatem omnis consequuntur consectetur consequatur pariatur autem quasi. Cumque facere ipsum ut. Voluptas consequatur velit dolor qui enim nostrum omnis. Autem ipsa reprehenderit quod molestiae quis.',
  },
  {
    index: 536,
    bgColor: '#f5f5f5',
    name: 'Gianni Keebler',
    initials: 'GK',
    jobTitle: 'Chief Division Analyst',
    description: 'Inventore ipsam saepe omnis minus vitae qui sunt quasi rem.',
    longText:
      'Non sint sapiente omnis et. Asperiores quisquam ab inventore sed qui quae voluptatem. Eaque et non quis voluptas est illo. Molestiae nulla aperiam. Dolores laudantium doloribus architecto. Commodi delectus hic maiores nulla.',
  },
  {
    index: 537,
    bgColor: 'white',
    name: 'Tommie Bayer',
    initials: 'TB',
    jobTitle: 'Principal Accounts Facilitator',
    description: 'Exercitationem et vitae dicta quo velit error voluptas debitis ut.',
    longText:
      'Placeat in vel velit. Asperiores at dolor animi. Ut neque porro recusandae. Praesentium similique id. Eum ut vel quibusdam in similique. Voluptas doloribus rerum quas magni numquam suscipit maxime libero.',
  },
  {
    index: 538,
    bgColor: '#f5f5f5',
    name: 'Lemuel Legros',
    initials: 'LL',
    jobTitle: 'National Usability Agent',
    description:
      'Quia vel laborum veniam molestias alias atque maiores asperiores labore.',
    longText:
      'Voluptas et doloremque quod et sed. Eum debitis totam et est et recusandae accusamus. Numquam vero tenetur alias non aut eos. Aperiam sed est. Ut et voluptatum est omnis sapiente facilis.',
  },
  {
    index: 539,
    bgColor: 'white',
    name: 'Jovany Gerhold',
    initials: 'JG',
    jobTitle: 'Legacy Optimization Coordinator',
    description:
      'Sequi vero voluptatem at esse nobis dolorum repudiandae expedita beatae.',
    longText:
      'Fugit modi id nesciunt rerum illum sit error. Minus sint blanditiis commodi. Beatae sit consequatur aliquam consequuntur. Ea ut repudiandae modi minima.',
  },
  {
    index: 540,
    bgColor: '#f5f5f5',
    name: 'Darlene Kulas',
    initials: 'DK',
    jobTitle: 'Dynamic Mobility Manager',
    description:
      'Totam inventore qui aut perferendis possimus id aspernatur quia doloremque.',
    longText:
      'Magnam molestiae accusamus aut distinctio consequatur velit id porro qui. Animi placeat aspernatur sunt earum. Iste aliquid nostrum esse.',
  },
  {
    index: 541,
    bgColor: 'white',
    name: 'Karli Pouros',
    initials: 'KP',
    jobTitle: 'Lead Assurance Coordinator',
    description:
      'Ad ad exercitationem consequatur dignissimos dolorem unde ut quis assumenda.',
    longText:
      'Deleniti omnis facere voluptatem laborum non minima ducimus autem tempore. Eos voluptatem officiis perferendis magni rem sunt nostrum corrupti. Harum veritatis rerum pariatur est sapiente nisi.',
  },
  {
    index: 542,
    bgColor: '#f5f5f5',
    name: 'Rashawn McDermott',
    initials: 'RM',
    jobTitle: 'Corporate Infrastructure Manager',
    description: 'Earum ut dolorem libero et magni voluptatem adipisci libero molestiae.',
    longText:
      'Et et eveniet. Distinctio voluptas quidem. Dolor quas facere cum voluptatibus et maiores. Soluta temporibus aut minima. Omnis et cumque sunt consectetur maxime voluptatem ad neque.',
  },
  {
    index: 543,
    bgColor: 'white',
    name: 'Brionna Russel',
    initials: 'BR',
    jobTitle: 'Internal Branding Administrator',
    description:
      'Culpa laborum occaecati et eveniet accusamus tempora repellat qui amet.',
    longText:
      'Autem sed eos et magnam numquam. Doloremque eum amet in eos ut accusantium rem laboriosam deleniti. Molestiae autem velit quo et architecto ratione sint nemo deserunt. At incidunt voluptatem aut ipsum. Nesciunt alias eum officiis placeat earum officiis suscipit. Dolorem et magni inventore optio.',
  },
  {
    index: 544,
    bgColor: '#f5f5f5',
    name: 'Kathryn Block',
    initials: 'KB',
    jobTitle: 'Regional Paradigm Technician',
    description: 'Cumque id quia quaerat quod quia nisi et nobis dicta.',
    longText:
      'In explicabo aspernatur. Quis harum nesciunt laudantium facilis eos dolores. Eos aliquam est nostrum.',
  },
  {
    index: 545,
    bgColor: 'white',
    name: 'Trey Lebsack',
    initials: 'TL',
    jobTitle: 'Forward Group Engineer',
    description: 'Qui error repellendus ullam enim quia itaque magni accusantium et.',
    longText:
      'Omnis reiciendis et enim. Facere nostrum quibusdam soluta assumenda eveniet et. Repellendus deserunt aperiam facere. Nemo cum vel eum praesentium nesciunt dicta accusantium. Eaque vel amet ab culpa et molestiae aut dolores. Quia excepturi eaque.',
  },
  {
    index: 546,
    bgColor: '#f5f5f5',
    name: 'Concepcion Gaylord',
    initials: 'CG',
    jobTitle: 'Future Optimization Strategist',
    description:
      'Qui provident explicabo cumque expedita fuga repellendus et magnam modi.',
    longText:
      'Vitae doloribus nulla. Iste corporis quidem deleniti eius adipisci odit. In ea aut dolorum sit et tempora et odio nihil. Qui et rerum in. Alias repellat voluptatem tempore soluta ipsam aut blanditiis blanditiis.',
  },
  {
    index: 547,
    bgColor: 'white',
    name: 'Natalia Bartoletti',
    initials: 'NB',
    jobTitle: 'Investor Intranet Technician',
    description:
      'Enim quod enim velit nihil ut reprehenderit voluptas aspernatur expedita.',
    longText:
      'Sunt asperiores porro assumenda distinctio aut qui qui. Maxime natus commodi est. Voluptatibus enim nihil adipisci non ullam excepturi ducimus. Fuga eius at rerum vitae qui tempora.',
  },
  {
    index: 548,
    bgColor: '#f5f5f5',
    name: 'Carrie Green',
    initials: 'CG',
    jobTitle: 'Investor Factors Architect',
    description:
      'Quia rerum explicabo et provident dolorem fugit omnis voluptate nesciunt.',
    longText:
      'Tempora aspernatur facilis accusantium optio corrupti magni odit qui optio. Magnam et est. In quo expedita sequi rerum. Qui maxime occaecati nihil illo ratione non placeat odit rerum. Molestiae ut eius autem quia doloremque quidem. Laborum consequatur amet.',
  },
  {
    index: 549,
    bgColor: 'white',
    name: 'Henderson Green',
    initials: 'HG',
    jobTitle: 'Future Infrastructure Engineer',
    description: 'Atque officiis maxime porro aut quod harum sit rerum recusandae.',
    longText:
      'Quisquam voluptatem delectus. Quia eveniet ex magnam. Corporis quia amet. Totam aut consequatur odit possimus at. Omnis qui vitae ad veritatis dolorum voluptates et et.',
  },
  {
    index: 550,
    bgColor: '#f5f5f5',
    name: 'Abagail Moore',
    initials: 'AM',
    jobTitle: 'Dynamic Accountability Agent',
    description: 'Sunt ipsa nisi tempore tempore facilis magnam ut qui soluta.',
    longText:
      'Distinctio consequatur et. Consequatur et quia molestiae quia repellendus vel. Eum asperiores laboriosam nostrum.',
  },
  {
    index: 551,
    bgColor: 'white',
    name: 'Jayden Stokes',
    initials: 'JS',
    jobTitle: 'Global Paradigm Producer',
    description:
      'Incidunt voluptatibus possimus fugiat minus suscipit labore aut architecto dolorem.',
    longText:
      'Consequatur dolor quaerat quos. Aspernatur omnis numquam rerum qui eligendi tempore quia. Quod quia consequuntur nisi nostrum. Explicabo quia animi amet quibusdam nisi. Et voluptatem et. Quis molestiae minus corporis adipisci quos nobis minima dicta.',
  },
  {
    index: 552,
    bgColor: '#f5f5f5',
    name: 'Michele Stracke',
    initials: 'MS',
    jobTitle: 'Investor Division Designer',
    description: 'Facere quia esse quaerat non hic voluptas ipsum vero labore.',
    longText:
      'Magnam sed quae. Provident ex soluta eos eos. Ullam ut cumque quia et quas iusto accusamus accusamus.',
  },
  {
    index: 553,
    bgColor: 'white',
    name: 'Mark Lind',
    initials: 'ML',
    jobTitle: 'Central Configuration Manager',
    description: 'Aut et eum voluptas adipisci adipisci repellat quis alias omnis.',
    longText:
      'Et repellendus porro sed sit consequatur maiores assumenda. Ipsum est voluptatem est reprehenderit quis et dolorum. Consequatur et placeat possimus inventore nemo. Nihil corrupti error earum voluptatem labore vero ad facere temporibus. Consequuntur nisi voluptate minima occaecati dolore. Qui non qui aspernatur eum exercitationem assumenda dolores.',
  },
  {
    index: 554,
    bgColor: '#f5f5f5',
    name: 'Samson Gaylord',
    initials: 'SG',
    jobTitle: 'Internal Mobility Director',
    description: 'Odio est maxime ex qui error qui voluptas occaecati qui.',
    longText:
      'Magni mollitia alias dicta eius. Assumenda dolorem impedit. Quibusdam sit architecto numquam quibusdam autem similique. Ut autem eaque vel vel. Et dolor et ut qui et laboriosam explicabo.',
  },
  {
    index: 555,
    bgColor: 'white',
    name: 'Queenie Collier',
    initials: 'QC',
    jobTitle: 'Product Configuration Supervisor',
    description:
      'Accusantium sit perferendis dolores voluptatem laudantium illum dolores vel non.',
    longText:
      'Non id alias et voluptatem eos tempora illo qui distinctio. Blanditiis facilis quis quibusdam perspiciatis aut architecto architecto error. Ratione illo quia aspernatur labore dolor rem facere itaque ea. Omnis ut aut dolor eveniet quibusdam omnis.',
  },
  {
    index: 556,
    bgColor: '#f5f5f5',
    name: 'Gregory Keeling',
    initials: 'GK',
    jobTitle: 'Investor Accountability Associate',
    description: 'Possimus saepe qui molestias saepe nemo est aut quam maxime.',
    longText:
      'Dolores consequuntur ut quibusdam quis. Et quia possimus optio et eum excepturi. Natus tempora et magnam asperiores et sed omnis ipsum eaque. Itaque officia tempora quidem ut. Provident atque blanditiis dolorem ut id blanditiis magnam quia consectetur.',
  },
  {
    index: 557,
    bgColor: 'white',
    name: 'Aiden Hettinger',
    initials: 'AH',
    jobTitle: 'Senior Division Facilitator',
    description:
      'Nesciunt maiores natus sit quidem nesciunt possimus architecto quibusdam eum.',
    longText:
      'Nulla sint nobis sit. Fugit tenetur ipsam et quas repudiandae porro odio id. Placeat eum quis temporibus nesciunt. Vel consectetur dolorum quia est nemo autem in. Vitae doloremque sapiente praesentium et eum maxime deleniti qui fugit.',
  },
  {
    index: 558,
    bgColor: '#f5f5f5',
    name: 'Lenna Goyette',
    initials: 'LG',
    jobTitle: 'Global Accounts Officer',
    description:
      'Mollitia ratione fugit vel magni perferendis qui accusantium dolor fugiat.',
    longText:
      'Aut iste unde. Ullam est vel sed odio dolores natus accusamus. Iure consequuntur quod quis ullam dolor et reiciendis. Atque et aut aut. Necessitatibus quis non fuga in quos. Ullam corrupti laborum rerum quia tempore nihil ut.',
  },
  {
    index: 559,
    bgColor: 'white',
    name: 'Benedict Gutkowski',
    initials: 'BG',
    jobTitle: 'Lead Functionality Administrator',
    description:
      'Et nihil quae asperiores quam fugit cupiditate nihil consequatur repudiandae.',
    longText:
      'Voluptatibus facilis odit alias tempore. Omnis distinctio qui voluptatem natus dignissimos et. Dolores aut recusandae. Suscipit omnis et et explicabo. Ut eos nam dolorem id ea soluta.',
  },
  {
    index: 560,
    bgColor: '#f5f5f5',
    name: 'Lemuel Erdman',
    initials: 'LE',
    jobTitle: 'Investor Metrics Designer',
    description: 'Aut temporibus at laborum nihil deserunt sapiente eum qui sit.',
    longText:
      'Dolore earum assumenda enim perspiciatis consequatur quia beatae. Laboriosam delectus ratione ex et qui accusamus quos sequi reiciendis. Facere vel eum. Perspiciatis est et itaque est minus. Modi soluta et possimus alias qui quasi nam quasi.',
  },
  {
    index: 561,
    bgColor: 'white',
    name: 'Jeramy Sauer',
    initials: 'JS',
    jobTitle: 'District Tactics Officer',
    description: 'Laborum sequi quasi minus cum iure tempora ea unde numquam.',
    longText:
      'Aliquam et asperiores quos explicabo. Facere quis quis blanditiis quo rerum officia tempora. Vel enim reprehenderit eius dolorum et et porro id.',
  },
  {
    index: 562,
    bgColor: '#f5f5f5',
    name: 'Olaf Bergstrom',
    initials: 'OB',
    jobTitle: 'Customer Program Facilitator',
    description: 'Suscipit qui eos ex eligendi doloribus optio repudiandae et eum.',
    longText:
      'Et repellendus vitae. Dolor aperiam magnam at enim est cumque rerum consequatur. Temporibus est velit temporibus tempora dolorem deleniti.',
  },
  {
    index: 563,
    bgColor: 'white',
    name: 'Bailee Schinner',
    initials: 'BS',
    jobTitle: 'Dynamic Implementation Manager',
    description: 'Magni qui quasi commodi quis odio velit non quaerat recusandae.',
    longText:
      'Vel ex occaecati. Molestias aliquid eum consequatur cupiditate et. Eum eius aut temporibus nihil a dolores rerum id voluptas. Sed natus eos dicta eos. Vel tempore eum ipsa sequi voluptatem amet enim dolorem.',
  },
  {
    index: 564,
    bgColor: '#f5f5f5',
    name: 'Bettye Leuschke',
    initials: 'BL',
    jobTitle: 'Lead Markets Executive',
    description: 'Ut qui voluptas odio sit rerum et provident quo nisi.',
    longText:
      'Aut iste libero. Voluptas sed consectetur neque eligendi enim temporibus. Labore saepe ipsam aut.',
  },
  {
    index: 565,
    bgColor: 'white',
    name: 'Cory Satterfield',
    initials: 'CS',
    jobTitle: 'International Functionality Agent',
    description: 'Cum nihil et ducimus laboriosam est laborum voluptatem qui quisquam.',
    longText:
      'A sequi tempora in ex beatae ab facere. Debitis ut a accusantium sit aut pariatur excepturi. Neque sed eveniet doloribus fuga alias vero molestias. Sint dolorem placeat explicabo iure. Laboriosam repellendus magni est rerum. Impedit eveniet quo consequatur eos accusantium eos ut est.',
  },
  {
    index: 566,
    bgColor: '#f5f5f5',
    name: 'Maryam Steuber',
    initials: 'MS',
    jobTitle: 'Forward Mobility Assistant',
    description: 'Laudantium et sed iure inventore odit ab explicabo molestiae neque.',
    longText:
      'Sed ut facilis eos est rem ut dolores nulla iste. Distinctio assumenda velit. Quia est autem sit quam qui blanditiis ut quia. Aut et consequatur ex cupiditate voluptatum aliquam placeat.',
  },
  {
    index: 567,
    bgColor: 'white',
    name: 'Frank Harvey',
    initials: 'FH',
    jobTitle: 'Corporate Configuration Supervisor',
    description: 'Velit magni numquam ut in ad illum qui quas voluptatibus.',
    longText:
      'Necessitatibus quis modi. Nihil molestias vitae rerum optio ab. Qui commodi reprehenderit eum voluptatibus.',
  },
  {
    index: 568,
    bgColor: '#f5f5f5',
    name: 'Trenton Weimann',
    initials: 'TW',
    jobTitle: 'District Mobility Supervisor',
    description: 'Et tenetur cupiditate esse voluptate minima aut maxime eos maxime.',
    longText:
      'Vero soluta nihil est accusamus incidunt. Inventore placeat a ut iusto. Beatae recusandae neque occaecati velit vitae.',
  },
  {
    index: 569,
    bgColor: 'white',
    name: 'Xander Hartmann',
    initials: 'XH',
    jobTitle: 'Product Mobility Developer',
    description: 'Dolores earum molestiae saepe et et consectetur odit nesciunt ut.',
    longText:
      'Neque quasi enim. Non aut asperiores vitae. Tenetur voluptatem quo rerum. Autem maiores voluptatem.',
  },
  {
    index: 570,
    bgColor: '#f5f5f5',
    name: 'Matteo Fritsch',
    initials: 'MF',
    jobTitle: 'Principal Directives Facilitator',
    description: 'Fuga fugit id quae incidunt sit vel molestias nesciunt consectetur.',
    longText:
      'Et dolor explicabo asperiores odit odio consequuntur est mollitia. Eius deleniti sed iusto expedita amet. Id eum ut.',
  },
  {
    index: 571,
    bgColor: 'white',
    name: 'Patsy Strosin',
    initials: 'PS',
    jobTitle: 'Dynamic Applications Designer',
    description: 'Facere saepe tempore ut saepe qui neque et non quo.',
    longText:
      'Doloremque eum aut rerum dolores in quidem optio. Consequatur aut officiis repellat. Harum delectus dolores. Non dolores accusamus illum vitae molestias atque fuga sit. Nostrum aperiam asperiores ipsum illum hic minus vel. Dolorem odit blanditiis.',
  },
  {
    index: 572,
    bgColor: '#f5f5f5',
    name: 'Amani Tromp',
    initials: 'AT',
    jobTitle: 'Central Program Designer',
    description: 'Incidunt vero ex nemo hic aliquid voluptas rerum occaecati est.',
    longText:
      'Est doloremque aliquid adipisci nihil qui quae est illum odit. Rem porro magnam aperiam ut quia. Corrupti ipsa placeat et blanditiis voluptate a est ea ut. Atque impedit blanditiis vel.',
  },
  {
    index: 573,
    bgColor: 'white',
    name: 'Barbara Mohr',
    initials: 'BM',
    jobTitle: 'District Infrastructure Orchestrator',
    description: 'Quis ea molestiae qui assumenda eum quam quam assumenda corporis.',
    longText:
      'Est sunt impedit. Totam qui doloribus laborum tempora. Sit neque impedit rem quaerat similique in sit similique libero.',
  },
  {
    index: 574,
    bgColor: '#f5f5f5',
    name: 'Winfield Heidenreich',
    initials: 'WH',
    jobTitle: 'Internal Usability Associate',
    description: 'Expedita est odio quod nihil eaque sit asperiores in ut.',
    longText:
      'Dolores enim sequi sequi voluptatum laudantium tempore aut quia. Quia nemo cupiditate placeat nobis nisi voluptas cupiditate est. Quas nemo non officia. Omnis mollitia quidem eveniet sapiente vitae voluptate. Qui sint eveniet dolores natus eum quia et. Sunt quaerat est qui est ipsa optio consequatur ex.',
  },
  {
    index: 575,
    bgColor: 'white',
    name: 'Nyasia Wiegand',
    initials: 'NW',
    jobTitle: 'Investor Usability Technician',
    description: 'Qui aspernatur ducimus magnam non fugit quisquam maxime quaerat vitae.',
    longText:
      'Enim ab perspiciatis iure et. Consectetur doloremque rerum. Alias nesciunt rerum sunt mollitia delectus nostrum. Nisi ea qui mollitia aperiam fugiat quis et nesciunt.',
  },
  {
    index: 576,
    bgColor: '#f5f5f5',
    name: 'Sid Cremin',
    initials: 'SC',
    jobTitle: 'Product Mobility Producer',
    description:
      'Voluptatem molestias nemo quaerat qui perspiciatis fugiat rerum blanditiis impedit.',
    longText:
      'Ea velit ut dolore praesentium repellendus minima. Et facere nostrum voluptatibus. Repellat ullam dolor velit tempore placeat excepturi sit.',
  },
  {
    index: 577,
    bgColor: 'white',
    name: 'Kayley Bergstrom',
    initials: 'KB',
    jobTitle: 'International Group Consultant',
    description: 'Dignissimos et id nihil esse dignissimos ut asperiores voluptatem id.',
    longText:
      'Eligendi qui nulla est eum omnis. Animi omnis autem eveniet consectetur dolore molestiae eius animi. Minus corporis cum et ab vel quidem molestias facere. Quam consequuntur neque natus necessitatibus. Porro officia autem dignissimos. Nostrum qui voluptas velit libero repudiandae ratione ducimus magnam.',
  },
  {
    index: 578,
    bgColor: '#f5f5f5',
    name: 'Khalid Bergnaum',
    initials: 'KB',
    jobTitle: 'Future Creative Architect',
    description:
      'Commodi voluptas praesentium earum cupiditate error doloribus modi facere repudiandae.',
    longText:
      'Voluptas occaecati voluptas repellendus ipsa molestiae quibusdam. Deleniti quo unde. Vero ut expedita et.',
  },
  {
    index: 579,
    bgColor: 'white',
    name: 'Angelina Lesch',
    initials: 'AL',
    jobTitle: 'International Intranet Analyst',
    description: 'Ex dolore dolores odio deserunt deserunt architecto at nostrum rerum.',
    longText:
      'Eos libero voluptatem nulla quo ipsam illo commodi ea. Voluptate quibusdam porro. Nam qui eos eius distinctio qui eaque. In dolorem quisquam voluptatum.',
  },
  {
    index: 580,
    bgColor: '#f5f5f5',
    name: 'Mikayla Feest',
    initials: 'MF',
    jobTitle: 'Future Implementation Planner',
    description: 'Velit et ut aut inventore voluptatem dolor quia voluptatem voluptas.',
    longText:
      'Molestiae optio qui. Alias aut et enim ut magni quam. Ut dolor est. Voluptatem ipsam nihil architecto dolor rerum. Sed dignissimos quia non totam tempore cupiditate libero ut aut. Omnis sit assumenda et.',
  },
  {
    index: 581,
    bgColor: 'white',
    name: 'Henderson Schumm',
    initials: 'HS',
    jobTitle: 'Internal Mobility Producer',
    description: 'Esse deleniti et aut tempore fugiat ipsam est rem error.',
    longText:
      'Est adipisci consectetur est dolores in sint cumque. Perferendis vero et qui dolorum repudiandae. Quia eos optio est non aut sint unde velit. Qui quaerat rerum et earum iusto. Ipsum autem delectus sint non nam voluptatibus. Occaecati consequatur porro voluptatum.',
  },
  {
    index: 582,
    bgColor: '#f5f5f5',
    name: 'Lesly Lemke',
    initials: 'LL',
    jobTitle: 'Forward Operations Planner',
    description: 'Odio nemo architecto blanditiis magni quasi alias ea mollitia sed.',
    longText:
      'Maiores fuga velit. Voluptatem at qui consequatur. Alias similique molestiae labore alias culpa ipsum.',
  },
  {
    index: 583,
    bgColor: 'white',
    name: 'Lora Greenholt',
    initials: 'LG',
    jobTitle: 'Dynamic Accountability Developer',
    description: 'Voluptatem sit molestiae sunt quia sapiente optio ut quos ullam.',
    longText:
      'Optio autem quia iusto voluptas molestiae maiores reiciendis voluptatem. Quas tempora culpa veniam. Assumenda dignissimos animi sint enim quia voluptatum. Vel sapiente tenetur. Provident natus mollitia cumque et dolorem tempore voluptatem magni sunt.',
  },
  {
    index: 584,
    bgColor: '#f5f5f5',
    name: 'Frederick Prohaska',
    initials: 'FP',
    jobTitle: 'Forward Quality Representative',
    description: 'Voluptas dolore aliquid iste quaerat est et distinctio quibusdam eius.',
    longText:
      'Omnis sunt ea ad magni. Quis fugiat consequuntur. Dicta iusto sint quis iste quasi odio nisi pariatur. Quia ut molestias rerum dolorem sunt.',
  },
  {
    index: 585,
    bgColor: 'white',
    name: 'Jermey Fadel',
    initials: 'JF',
    jobTitle: 'Global Research Manager',
    description: 'Architecto libero illum totam et sit animi placeat natus quis.',
    longText:
      'Sint ut excepturi incidunt. Aut quia vel quo sit quisquam natus praesentium et ullam. Eos qui quidem praesentium esse ipsam nulla culpa. Deleniti molestiae et natus distinctio nulla at ipsam sed eligendi. Debitis at amet sunt. Consequuntur eius ut omnis repellendus in mollitia est.',
  },
  {
    index: 586,
    bgColor: '#f5f5f5',
    name: 'Clarissa Rau',
    initials: 'CR',
    jobTitle: 'Direct Identity Engineer',
    description:
      'Ut qui excepturi consequatur deserunt corrupti molestiae ut veritatis quia.',
    longText:
      'Nesciunt deleniti vel repudiandae quia vel ut magni. Quis voluptatem alias ipsum ut adipisci libero. Consequatur in molestias saepe recusandae ut. Facilis suscipit qui aut numquam provident voluptas exercitationem sit.',
  },
  {
    index: 587,
    bgColor: 'white',
    name: 'Jeffery Kovacek',
    initials: 'JK',
    jobTitle: 'Forward Quality Supervisor',
    description:
      'Incidunt dolore sed autem accusantium quasi dignissimos incidunt sunt enim.',
    longText:
      'Odio dolores maxime ducimus et ea voluptatem aut atque. Unde deserunt inventore nostrum quibusdam incidunt. Assumenda ut quis minima occaecati dolor quidem et.',
  },
  {
    index: 588,
    bgColor: '#f5f5f5',
    name: 'Jaquan White',
    initials: 'JW',
    jobTitle: 'National Security Designer',
    description:
      'Voluptatem repellendus aperiam in itaque sunt id quis illum reiciendis.',
    longText:
      'Sint et aspernatur est. Pariatur qui est praesentium necessitatibus est ut pariatur eligendi. Omnis quaerat minima. Sit nesciunt esse consequatur dolorem ut deleniti qui. Hic eum animi sed modi minima voluptate aspernatur quod.',
  },
  {
    index: 589,
    bgColor: 'white',
    name: 'Mariah Daugherty',
    initials: 'MD',
    jobTitle: 'International Interactions Designer',
    description:
      'Perspiciatis autem at voluptatibus ut vel nihil consectetur dolores quia.',
    longText:
      'Optio est neque sunt quia maiores suscipit ratione modi dolores. Pariatur aut quia ipsam. Aut omnis delectus ut quis aperiam aliquam omnis eum. Qui harum et omnis deserunt laudantium consequatur rem.',
  },
  {
    index: 590,
    bgColor: '#f5f5f5',
    name: 'Karlee Olson',
    initials: 'KO',
    jobTitle: 'Product Integration Designer',
    description:
      'Earum alias aspernatur praesentium quibusdam deleniti unde dolor accusamus eligendi.',
    longText:
      'Nam aut ut velit laudantium ut dolore delectus. Ut vitae dolor est maiores inventore eum quos repudiandae fugit. Enim aut possimus debitis. Officia distinctio et labore error porro non dolores facilis ut.',
  },
  {
    index: 591,
    bgColor: 'white',
    name: 'Chris Tillman',
    initials: 'CT',
    jobTitle: 'Central Markets Designer',
    description: 'Vel sed sequi vitae fugit eum et molestias error doloribus.',
    longText:
      'Quidem qui tenetur nobis. Ut accusamus distinctio totam facilis harum ex sint vel. Sit aut cum aliquid repellat alias ducimus soluta vitae. Est quis eos voluptates.',
  },
  {
    index: 592,
    bgColor: '#f5f5f5',
    name: 'Mekhi Effertz',
    initials: 'ME',
    jobTitle: 'Legacy Optimization Strategist',
    description: 'Aut ea dicta sequi vitae id voluptas est officiis quia.',
    longText:
      'Et est accusantium est praesentium a est eum sit minus. Nesciunt nemo repellat quo porro. Beatae est numquam reprehenderit natus. Est voluptatem iste accusantium accusamus quo quis repellat ut. Facere qui ut consequatur impedit ipsa qui.',
  },
  {
    index: 593,
    bgColor: 'white',
    name: 'Theodora Ankunding',
    initials: 'TA',
    jobTitle: 'Investor Paradigm Orchestrator',
    description: 'Cum fuga vel quidem qui quos quaerat deserunt atque in.',
    longText:
      'Sint qui voluptatum consequatur asperiores quasi et voluptatem est sint. Sit et aliquam sequi maiores atque animi tempore voluptates earum. Ipsa magni vel ea beatae.',
  },
  {
    index: 594,
    bgColor: '#f5f5f5',
    name: 'Aisha Dooley',
    initials: 'AD',
    jobTitle: 'Lead Security Orchestrator',
    description:
      'Quaerat est quaerat quo accusantium officia qui rerum architecto corporis.',
    longText:
      'Earum a vitae enim. Earum itaque ex tempora officia. Vitae sequi sit quis assumenda.',
  },
  {
    index: 595,
    bgColor: 'white',
    name: 'Kathryne Roberts',
    initials: 'KR',
    jobTitle: 'District Interactions Analyst',
    description: 'Rerum natus sunt earum rem accusantium voluptas est ab vero.',
    longText:
      'Nesciunt magnam cumque ipsum ratione suscipit qui occaecati odit. Dolores sit fuga repudiandae. Praesentium iure aut qui.',
  },
  {
    index: 596,
    bgColor: '#f5f5f5',
    name: 'Holden Durgan',
    initials: 'HD',
    jobTitle: 'National Identity Specialist',
    description: 'Inventore aut optio qui assumenda est est nihil reprehenderit sunt.',
    longText:
      'Possimus rem sed incidunt occaecati soluta maiores dignissimos. At similique suscipit. Et perferendis deleniti asperiores fugiat harum ex voluptatem tempore quia. Est dicta sed. Magni exercitationem laborum est. Quae rerum dolorem.',
  },
  {
    index: 597,
    bgColor: 'white',
    name: 'Courtney Skiles',
    initials: 'CS',
    jobTitle: 'Regional Marketing Manager',
    description: 'Illum asperiores harum dolores id ut dolorem nobis officiis et.',
    longText:
      'Asperiores mollitia ipsa est hic nihil earum numquam corporis consequatur. Qui doloremque pariatur perferendis quo quae ut nihil est. Corporis dignissimos aperiam esse eligendi qui enim. Quo nostrum et vero. Eveniet doloribus saepe dicta ea quia facilis inventore.',
  },
  {
    index: 598,
    bgColor: '#f5f5f5',
    name: 'Jennifer Corwin',
    initials: 'JC',
    jobTitle: 'Future Infrastructure Facilitator',
    description: 'Voluptatum et omnis alias consequatur tenetur in est qui asperiores.',
    longText:
      'Doloremque est suscipit est consequatur beatae totam officiis aperiam. Et deserunt nemo ipsa. Occaecati aliquam quos.',
  },
  {
    index: 599,
    bgColor: 'white',
    name: 'Victor Predovic',
    initials: 'VP',
    jobTitle: 'Future Markets Liaison',
    description: 'Ut numquam nulla dolor omnis soluta enim quia omnis nesciunt.',
    longText:
      'Aliquam tenetur rerum laudantium et unde quae est. Adipisci ipsa et sed. Dolorum ab totam. Deserunt odit soluta nostrum doloremque sapiente placeat omnis. Minima eos eos sequi ipsam quod alias.',
  },
  {
    index: 600,
    bgColor: '#f5f5f5',
    name: "Bulah O'Hara",
    initials: 'BO',
    jobTitle: 'Internal Accountability Associate',
    description: 'Veritatis deleniti qui rem modi neque cum eum molestiae non.',
    longText:
      'Nobis in voluptatibus sed molestias. Recusandae aut nostrum. Ipsam velit quibusdam ullam pariatur. Est enim ut aut ipsam nisi reiciendis. Iusto ullam et nostrum eius et et possimus. Voluptatem quia iusto qui.',
  },
  {
    index: 601,
    bgColor: 'white',
    name: 'Josefa Bosco',
    initials: 'JB',
    jobTitle: 'Chief Applications Manager',
    description: 'Eligendi dolor consectetur enim qui nihil atque optio laborum ut.',
    longText:
      'Commodi voluptas maiores eos possimus in quasi tempore assumenda. Nemo ut sint laboriosam non repellendus omnis omnis adipisci ea. Suscipit quo quas.',
  },
  {
    index: 602,
    bgColor: '#f5f5f5',
    name: 'King Pfeffer',
    initials: 'KP',
    jobTitle: 'Regional Intranet Coordinator',
    description:
      'Eum reiciendis nulla molestiae sunt exercitationem soluta quo nesciunt provident.',
    longText:
      'Reprehenderit iure non velit id. Culpa voluptas enim architecto qui. Eum qui non ut porro voluptates ex sed labore. Impedit asperiores aut ipsum.',
  },
  {
    index: 603,
    bgColor: 'white',
    name: 'Rosie Kreiger',
    initials: 'RK',
    jobTitle: 'Customer Paradigm Associate',
    description: 'Est et sequi voluptate similique nesciunt quia sint quia sunt.',
    longText:
      'Neque delectus doloremque. Provident quo ut ducimus. Ea iusto corporis dignissimos tenetur non asperiores. Perspiciatis consectetur nobis quisquam earum numquam iusto. Repudiandae ea eaque repellat sed nihil autem in ex. Quia eligendi rem neque et.',
  },
  {
    index: 604,
    bgColor: '#f5f5f5',
    name: 'Dominique Rempel',
    initials: 'DR',
    jobTitle: 'Regional Operations Agent',
    description: 'Alias enim accusamus eum pariatur ea sequi aut non quibusdam.',
    longText:
      'Adipisci provident itaque iusto quo et debitis dolor. Blanditiis necessitatibus et molestiae numquam omnis dolores. Ratione sit tenetur amet dolor.',
  },
  {
    index: 605,
    bgColor: 'white',
    name: 'Domenic Breitenberg',
    initials: 'DB',
    jobTitle: 'International Tactics Technician',
    description:
      'Dolores laborum quo quia asperiores laudantium optio ex maxime repudiandae.',
    longText:
      'Aut illum laudantium voluptas accusantium. Aut consequatur et omnis voluptate at recusandae nihil deleniti sit. Occaecati a qui mollitia porro qui praesentium vitae. In ipsa eos incidunt et quos eos quis explicabo ut. At nemo et aut. Porro eos id quos consequatur voluptatibus.',
  },
  {
    index: 606,
    bgColor: '#f5f5f5',
    name: 'Gwendolyn Hettinger',
    initials: 'GH',
    jobTitle: 'Global Security Coordinator',
    description: 'Nobis ut reprehenderit voluptates et consequatur quos sit nihil ut.',
    longText:
      'Voluptatem ab eos non impedit id libero. Provident enim asperiores ut eius iusto molestiae. Magnam odio et voluptatum et est officiis. Fugit voluptatum suscipit illum. Et soluta architecto.',
  },
  {
    index: 607,
    bgColor: 'white',
    name: 'Keeley Cole',
    initials: 'KC',
    jobTitle: 'Internal Optimization Supervisor',
    description:
      'Dolorem sapiente temporibus reprehenderit doloribus et dolore aut ea esse.',
    longText:
      'Fugiat officiis ullam illo vel et facere. Ab nihil ab. Voluptatum rerum ab qui quia non qui.',
  },
  {
    index: 608,
    bgColor: '#f5f5f5',
    name: 'Richmond Mayer',
    initials: 'RM',
    jobTitle: 'Future Accounts Technician',
    description: 'Cupiditate quaerat et ex nihil repudiandae qui amet in mollitia.',
    longText:
      'Autem veritatis laboriosam rem ipsa delectus error saepe minima. Et ad quia dolore assumenda. Nihil accusantium veniam sed maiores. Maiores sit error.',
  },
  {
    index: 609,
    bgColor: 'white',
    name: 'Beverly Schulist',
    initials: 'BS',
    jobTitle: 'Chief Tactics Assistant',
    description: 'Ut eaque in exercitationem id nobis vel velit dolor adipisci.',
    longText:
      'Magnam eos vel numquam illo placeat veniam quia at. Blanditiis odit rerum eligendi blanditiis sed velit iste consequatur. Voluptatem natus qui.',
  },
  {
    index: 610,
    bgColor: '#f5f5f5',
    name: 'Emory Cole',
    initials: 'EC',
    jobTitle: 'Customer Division Strategist',
    description: 'Cumque amet doloremque quia voluptas illo et nesciunt ea nostrum.',
    longText:
      'Omnis corrupti quos quidem. Voluptatem assumenda ipsam nihil velit voluptatem. Asperiores voluptas quo tempora porro. Qui reprehenderit eum exercitationem.',
  },
  {
    index: 611,
    bgColor: 'white',
    name: 'Sierra Corkery',
    initials: 'SC',
    jobTitle: 'Global Interactions Facilitator',
    description:
      'Odit natus et consequuntur rerum rerum minima molestiae animi repudiandae.',
    longText:
      'Voluptatem asperiores delectus quod labore reprehenderit qui molestias eum. Sunt quia quod aperiam voluptates sint in nemo est. Aut vitae ut perferendis ratione recusandae molestiae.',
  },
  {
    index: 612,
    bgColor: '#f5f5f5',
    name: 'Evans DuBuque',
    initials: 'ED',
    jobTitle: 'Future Applications Consultant',
    description: 'Vel non magni in est ut odit temporibus eum ipsam.',
    longText:
      'Quaerat dolorum veritatis sed dignissimos qui exercitationem voluptatem. Alias dolorem dolores odit doloribus ab sit commodi aut aut. Quia provident sed excepturi rerum assumenda. In qui non illo.',
  },
  {
    index: 613,
    bgColor: 'white',
    name: 'Leann Hartmann',
    initials: 'LH',
    jobTitle: 'District Factors Specialist',
    description: 'Nemo excepturi ipsum blanditiis nam vel nemo pariatur dolore ipsam.',
    longText:
      'Provident quibusdam optio adipisci sed. Corporis voluptas rerum ad ipsam et. Id repellendus amet dolor. Architecto ea consequuntur omnis impedit corrupti assumenda rem laudantium aut. Recusandae id consequuntur qui autem.',
  },
  {
    index: 614,
    bgColor: '#f5f5f5',
    name: 'Bradford Parisian',
    initials: 'BP',
    jobTitle: 'Senior Assurance Coordinator',
    description: 'Aperiam esse omnis enim amet repudiandae unde officiis in consequatur.',
    longText:
      'Molestiae assumenda et non eligendi sit. Est quo quas aut. Tempora possimus ad ex laboriosam consectetur ducimus eos ab porro.',
  },
  {
    index: 615,
    bgColor: 'white',
    name: 'Ona Hintz',
    initials: 'OH',
    jobTitle: 'Chief Accounts Executive',
    description:
      'Et repudiandae tenetur quaerat odio atque officia consequatur voluptates iure.',
    longText:
      'Accusamus aperiam dolore iusto perspiciatis officiis similique. Delectus mollitia velit. Veritatis dolor ab perferendis impedit asperiores iste qui harum explicabo. Illo qui atque tempore quis ratione. Aut et id similique repellendus recusandae repellendus.',
  },
  {
    index: 616,
    bgColor: '#f5f5f5',
    name: 'Cecilia Marquardt',
    initials: 'CM',
    jobTitle: 'Internal Configuration Officer',
    description:
      'Voluptatibus explicabo similique blanditiis inventore nostrum dolor dolor ducimus et.',
    longText:
      'Tenetur qui consequatur ad minus ut pariatur facere ea laboriosam. Qui impedit ab optio fuga. Velit sed tempora omnis non unde reiciendis et consequatur enim. Laboriosam iure ut laudantium dolorem consequatur. Debitis iusto est neque. Sapiente cumque alias aut at a est et.',
  },
  {
    index: 617,
    bgColor: 'white',
    name: 'Fred Parker',
    initials: 'FP',
    jobTitle: 'Corporate Optimization Analyst',
    description:
      'Voluptas molestias modi eius hic exercitationem autem quia voluptatum laudantium.',
    longText:
      'Similique earum consequatur aut cum voluptates. Et corporis aut odio unde autem aspernatur vel. Cumque sunt nisi aut. Vitae harum repellendus impedit est et et tenetur expedita. Sit aut veniam quia incidunt assumenda non. Ut quasi amet et culpa.',
  },
  {
    index: 618,
    bgColor: '#f5f5f5',
    name: 'Enola MacGyver',
    initials: 'EM',
    jobTitle: 'Principal Research Analyst',
    description:
      'Delectus nam molestiae perferendis natus atque voluptatem vero qui numquam.',
    longText:
      'Consequatur impedit id nesciunt voluptas deleniti temporibus voluptas. Autem quia necessitatibus. Ut reprehenderit natus provident eius. Placeat vel explicabo qui nostrum ut dolores incidunt labore vel.',
  },
  {
    index: 619,
    bgColor: 'white',
    name: 'Lola Rosenbaum',
    initials: 'LR',
    jobTitle: 'Chief Communications Specialist',
    description: 'Velit non occaecati sit quia natus omnis perferendis occaecati est.',
    longText:
      'Et et facere aut est itaque qui et illo. Error temporibus adipisci temporibus harum voluptatem voluptate aspernatur aut. Natus animi quibusdam sunt earum.',
  },
  {
    index: 620,
    bgColor: '#f5f5f5',
    name: 'Salma Carroll',
    initials: 'SC',
    jobTitle: 'Senior Infrastructure Supervisor',
    description:
      'Voluptas ipsa delectus in nobis sed quia repudiandae accusantium possimus.',
    longText:
      'Minima id voluptas. Cupiditate velit sapiente provident inventore. Pariatur nihil cum amet eius. Rerum voluptatem ut architecto excepturi. Vitae necessitatibus quod ad sequi omnis.',
  },
  {
    index: 621,
    bgColor: 'white',
    name: 'Anna Balistreri',
    initials: 'AB',
    jobTitle: 'Internal Optimization Associate',
    description: 'Doloremque veniam et dolores beatae architecto quas beatae eos ut.',
    longText:
      'Illum voluptatem odio omnis. Accusantium maiores aliquam earum minima labore exercitationem. Facilis fugit rerum dolorem iure ea eos rerum ducimus. Qui velit ea.',
  },
  {
    index: 622,
    bgColor: '#f5f5f5',
    name: 'Flavie Ryan',
    initials: 'FR',
    jobTitle: 'Internal Research Assistant',
    description:
      'Sit voluptatem in hic quod suscipit asperiores impedit asperiores consectetur.',
    longText:
      'Reprehenderit ut officia consequatur et et deserunt. Cupiditate id non magni distinctio iusto corporis. Quos laudantium recusandae rerum eaque incidunt vitae modi.',
  },
  {
    index: 623,
    bgColor: 'white',
    name: 'Imelda Lubowitz',
    initials: 'IL',
    jobTitle: 'Central Markets Producer',
    description: 'Quam animi ut aliquid officiis aut molestias dolorem quidem et.',
    longText:
      'Minus necessitatibus qui in aut. Ut exercitationem fugit est id enim ea accusantium laboriosam. Labore laudantium et atque et. Veritatis molestiae commodi a. Sunt non aut quos nesciunt quo maiores laborum dolores facilis. Repellendus maxime tempora eligendi.',
  },
  {
    index: 624,
    bgColor: '#f5f5f5',
    name: 'Abelardo Feest',
    initials: 'AF',
    jobTitle: 'Customer Implementation Analyst',
    description: 'Nesciunt fuga voluptas est qui enim qui est quisquam et.',
    longText:
      'Perspiciatis necessitatibus in nulla voluptas velit. Labore ratione nostrum tenetur eum non sunt. Ullam est libero atque animi qui beatae quis facere qui.',
  },
  {
    index: 625,
    bgColor: 'white',
    name: 'Lolita Runte',
    initials: 'LR',
    jobTitle: 'Investor Factors Executive',
    description: 'In non deserunt deleniti id ut quia quasi qui numquam.',
    longText:
      'Et dolore illum similique fugiat tenetur. Quam nulla et autem laboriosam blanditiis veritatis. Delectus tempore omnis numquam corrupti saepe non iure explicabo ipsa. Dignissimos error et qui incidunt officiis nam. Inventore eum mollitia maiores ducimus ut excepturi cum dolorem.',
  },
  {
    index: 626,
    bgColor: '#f5f5f5',
    name: 'Mariano Swaniawski',
    initials: 'MS',
    jobTitle: 'District Directives Planner',
    description: 'Odio qui minima dolores soluta sed cumque consequatur error corrupti.',
    longText:
      'Dolore quaerat quis alias eum ducimus soluta. Eligendi odio sapiente quos dolorum. Recusandae itaque eius voluptatem consequatur. Omnis voluptatem consectetur autem voluptatem quia autem ducimus.',
  },
  {
    index: 627,
    bgColor: 'white',
    name: 'Ivah Leannon',
    initials: 'IL',
    jobTitle: 'Internal Implementation Analyst',
    description: 'Ipsa ad dolorum explicabo consequatur et voluptatem sed minus sint.',
    longText:
      'Itaque sunt quidem excepturi cumque dolor quo. Ipsa unde excepturi id aut nihil sunt commodi eum. Vero quis corrupti ex non voluptas placeat ut blanditiis rerum. Non nemo quia voluptates dolore velit qui.',
  },
  {
    index: 628,
    bgColor: '#f5f5f5',
    name: 'Eula Hudson',
    initials: 'EH',
    jobTitle: 'Corporate Interactions Executive',
    description: 'Omnis a non odit officiis eaque blanditiis quisquam ducimus aut.',
    longText:
      'Illum quia est consequatur voluptatem omnis non totam quo. Omnis officiis a ea et delectus aliquid qui. Et eius non labore optio. Delectus in facilis ea iure quisquam vel et eos rem. Nostrum quo tempora at quaerat natus sed. Quas at autem at.',
  },
  {
    index: 629,
    bgColor: 'white',
    name: 'Rodger Casper',
    initials: 'RC',
    jobTitle: 'Direct Interactions Executive',
    description:
      'Nesciunt quasi dolorem molestias dolorum enim dolore veritatis nobis voluptas.',
    longText:
      'Inventore aut dolore. Rerum voluptatum error aperiam nihil illum qui rem. Suscipit odio sed perferendis corrupti molestias vitae officiis quibusdam. Molestiae qui dolorum quos tenetur unde nisi reprehenderit est.',
  },
  {
    index: 630,
    bgColor: '#f5f5f5',
    name: 'Cristian Terry',
    initials: 'CT',
    jobTitle: 'Direct Communications Producer',
    description: 'Ex sed tempore optio iusto sunt laboriosam saepe est dolorem.',
    longText:
      'Consequatur possimus voluptatibus et. Et autem commodi est et illo aliquam. Dicta dolor facilis et. Repellendus dolore sint quia id.',
  },
  {
    index: 631,
    bgColor: 'white',
    name: 'Else Beahan',
    initials: 'EB',
    jobTitle: 'Principal Optimization Strategist',
    description: 'Impedit ratione vel dolorum culpa rerum deserunt facilis placeat quis.',
    longText:
      'Qui velit voluptatum possimus aperiam eaque qui. Quis illo ex quod sit aut quia aut. Id consequatur sed. Omnis rerum dolorum tempore molestiae quo voluptatem laboriosam et ipsum.',
  },
  {
    index: 632,
    bgColor: '#f5f5f5',
    name: 'Dale Morar',
    initials: 'DM',
    jobTitle: 'District Marketing Agent',
    description: 'Voluptatem eos non eum magnam ut vitae autem quasi tempora.',
    longText:
      'Aut eligendi illo in. Et saepe adipisci. Alias qui molestias consequatur non consectetur aut et porro. Labore nisi quia harum autem. Quod quod et esse sit ut voluptatem.',
  },
  {
    index: 633,
    bgColor: 'white',
    name: 'Evie Fadel',
    initials: 'EF',
    jobTitle: 'Legacy Metrics Assistant',
    description: 'Incidunt maiores omnis rerum qui cumque ut sed rerum velit.',
    longText:
      'Reprehenderit quis rerum ipsa et provident quod. Nulla eum itaque minus eum voluptas vel saepe magni dolorum. Tenetur harum est labore facere quis. Sunt optio autem saepe est quia recusandae. Veritatis minima est alias deleniti vero odio id qui aut. Eaque reiciendis rerum dolor ex omnis reiciendis et.',
  },
  {
    index: 634,
    bgColor: '#f5f5f5',
    name: 'Lea Herman',
    initials: 'LH',
    jobTitle: 'Dynamic Quality Producer',
    description: 'Ipsa atque enim recusandae ipsam aut odit architecto perferendis sed.',
    longText:
      'Laboriosam temporibus aspernatur et laboriosam esse. Qui eaque illum autem et in et. Repudiandae qui qui voluptatem et soluta mollitia. Sed omnis ut ut sapiente facere soluta ut. Error aut amet. Ut nihil tempore sequi aliquid labore.',
  },
  {
    index: 635,
    bgColor: 'white',
    name: 'Yoshiko Feest',
    initials: 'YF',
    jobTitle: 'Internal Identity Producer',
    description: 'Ut eligendi rerum id dolorem consectetur ea odit illo sit.',
    longText:
      'Accusantium quae ratione veritatis ab explicabo non eum dolorem. Debitis ipsum harum est sunt vel. Distinctio molestias aliquid dolores et minima qui voluptas consequatur libero. Totam natus repellendus quae sint sed.',
  },
  {
    index: 636,
    bgColor: '#f5f5f5',
    name: 'Hellen Bartoletti',
    initials: 'HB',
    jobTitle: 'Human Security Consultant',
    description: 'Rerum sit qui quod deserunt nulla nam in et commodi.',
    longText:
      'Nostrum autem qui nam in ea velit expedita quo ullam. Quia ut omnis. Quae totam voluptate voluptatem.',
  },
  {
    index: 637,
    bgColor: 'white',
    name: "Gerardo O'Reilly",
    initials: 'GO',
    jobTitle: 'Internal Optimization Consultant',
    description: 'Dolores velit rem tempora qui dolores nam voluptas quod alias.',
    longText:
      'Totam repellendus dolore. Incidunt ab eum delectus est adipisci sint neque. Odio aut doloremque libero ea maiores.',
  },
  {
    index: 638,
    bgColor: '#f5f5f5',
    name: 'Molly Anderson',
    initials: 'MA',
    jobTitle: 'Product Optimization Architect',
    description:
      'Nostrum distinctio distinctio rerum nesciunt sit veniam quas eum necessitatibus.',
    longText:
      'Tempore quae quibusdam aut ratione eum eum amet quidem voluptatem. Culpa ad eum suscipit dolorem qui inventore laborum. Sunt qui quis veritatis minus. Nostrum quod tenetur magni blanditiis. Quod fugiat mollitia officia numquam in.',
  },
  {
    index: 639,
    bgColor: 'white',
    name: 'Crystel Rosenbaum',
    initials: 'CR',
    jobTitle: 'Central Security Liaison',
    description: 'Exercitationem rem ut hic et qui sed distinctio nostrum eius.',
    longText:
      'Quaerat et sed ab id. Ad tempora ipsa quidem sunt qui enim nulla. Recusandae dolor sint libero.',
  },
  {
    index: 640,
    bgColor: '#f5f5f5',
    name: 'Pattie Grant',
    initials: 'PG',
    jobTitle: 'Human Communications Officer',
    description:
      'Consequatur voluptatum at reprehenderit voluptatem qui fuga voluptatibus ratione qui.',
    longText:
      'Dolor consequatur cupiditate autem tempora. Iste quia expedita quibusdam voluptatem ipsa in perspiciatis maiores. Aut sed molestiae. Nostrum eius qui nam eos commodi aliquid et labore odit.',
  },
  {
    index: 641,
    bgColor: 'white',
    name: 'Benjamin Moore',
    initials: 'BM',
    jobTitle: 'Customer Directives Planner',
    description: 'Cum et quo corporis earum aspernatur voluptatem aut quis dolorum.',
    longText:
      'Placeat perferendis voluptas enim aspernatur sed sapiente. Voluptates tempore blanditiis. Aliquid veritatis suscipit qui eum rerum voluptatum praesentium earum. Tempore deserunt sapiente.',
  },
  {
    index: 642,
    bgColor: '#f5f5f5',
    name: 'Casimer Gulgowski',
    initials: 'CG',
    jobTitle: 'Central Intranet Director',
    description: 'Voluptatem cum ducimus et nihil id officia debitis consequuntur est.',
    longText:
      'Laboriosam unde hic et ut. Dolorum consequatur velit et explicabo consectetur. Quia dignissimos voluptates sed exercitationem consequatur excepturi voluptates praesentium. Voluptates tempore nam quo delectus accusantium vitae aliquam. Ab autem tempora aut ut est tenetur quam. Ad totam illo nihil doloribus neque.',
  },
  {
    index: 643,
    bgColor: 'white',
    name: 'Hunter Crona',
    initials: 'HC',
    jobTitle: 'Regional Marketing Specialist',
    description: 'Iure qui temporibus corporis dicta mollitia quo cum blanditiis quam.',
    longText:
      'Est minus dolor. Ut fugiat eveniet quibusdam odio sapiente quas repellendus quia et. Omnis minima rerum nam. Voluptatem ab distinctio aut amet facere mollitia.',
  },
  {
    index: 644,
    bgColor: '#f5f5f5',
    name: 'Clarissa Abbott',
    initials: 'CA',
    jobTitle: 'National Group Manager',
    description: 'Et at tempore aspernatur quasi sapiente in facere doloribus nesciunt.',
    longText:
      'Vel et rerum quod eaque et aut dolor vel est. Dolorem iusto quos voluptas quibusdam suscipit eaque. Sit mollitia voluptatem laborum pariatur itaque.',
  },
  {
    index: 645,
    bgColor: 'white',
    name: 'Joshua Jenkins',
    initials: 'JJ',
    jobTitle: 'Future Operations Liaison',
    description: 'A itaque ratione neque ut minima fugiat placeat voluptatum velit.',
    longText:
      'Dicta rerum asperiores ipsam odio est ab vero dolorem. Voluptatem vero veritatis nulla cum et debitis sed qui voluptatibus. Molestiae repudiandae quia placeat eum placeat sed atque sequi. Minus eos ut voluptate. Eos hic saepe officia doloribus ipsam itaque.',
  },
  {
    index: 646,
    bgColor: '#f5f5f5',
    name: 'Kellen Herzog',
    initials: 'KH',
    jobTitle: 'District Brand Developer',
    description: 'Vitae et aut praesentium aut cupiditate quidem voluptatem saepe ut.',
    longText:
      'Omnis necessitatibus molestiae dignissimos. Magnam amet vel distinctio qui unde omnis adipisci. Esse omnis animi aut exercitationem deleniti aut.',
  },
  {
    index: 647,
    bgColor: 'white',
    name: 'Keith Hilpert',
    initials: 'KH',
    jobTitle: 'Forward Implementation Agent',
    description:
      'Repellendus blanditiis voluptas eos omnis porro est ratione cupiditate in.',
    longText:
      'Voluptatum sunt dolores. Ipsum dicta reprehenderit fugit inventore qui qui atque. Vero quia qui architecto molestiae. Exercitationem facere vel voluptate. Non sint ut quo dolore sapiente assumenda. Excepturi veniam nobis tempora aliquid est.',
  },
  {
    index: 648,
    bgColor: '#f5f5f5',
    name: 'Simone Kris',
    initials: 'SK',
    jobTitle: 'Internal Factors Analyst',
    description:
      'Omnis tenetur adipisci quidem maxime doloribus esse magnam consectetur recusandae.',
    longText:
      'Ducimus molestiae velit reprehenderit magnam aliquid excepturi. Unde magnam aperiam dolorem voluptatem commodi distinctio quis id. Recusandae aliquam repudiandae soluta architecto repellendus. Cupiditate ut excepturi incidunt doloremque.',
  },
  {
    index: 649,
    bgColor: 'white',
    name: 'Alycia Yost',
    initials: 'AY',
    jobTitle: 'Legacy Tactics Planner',
    description: 'Ea et provident fugit illum et autem error vel velit.',
    longText:
      'Esse est ducimus provident animi est odio. Sint a nemo harum praesentium ullam praesentium. Soluta dolorem aliquid enim est ea ipsam beatae.',
  },
  {
    index: 650,
    bgColor: '#f5f5f5',
    name: 'Deja Gorczany',
    initials: 'DG',
    jobTitle: 'Human Functionality Developer',
    description: 'Provident rerum et perspiciatis facilis illo quia tempora magnam hic.',
    longText:
      'Ut sint nostrum aliquam aliquid sequi exercitationem quaerat non ut. Provident natus quia aspernatur. Laborum sint mollitia aliquid aliquid in.',
  },
  {
    index: 651,
    bgColor: 'white',
    name: 'Dena Padberg',
    initials: 'DP',
    jobTitle: 'Product Brand Supervisor',
    description:
      'Numquam nesciunt officia dolore vitae dicta perferendis occaecati vel dicta.',
    longText:
      'Deleniti non fuga ut quas. Repellendus dolores sunt ratione ut. Qui voluptatem nulla dicta itaque nostrum dolorem. Iste dolorem eligendi. Aut incidunt numquam ullam quis.',
  },
  {
    index: 652,
    bgColor: '#f5f5f5',
    name: 'Soledad Bogan',
    initials: 'SB',
    jobTitle: 'Direct Usability Analyst',
    description:
      'Repellendus nostrum mollitia soluta a consectetur aut et officia reiciendis.',
    longText:
      'Sit vel molestiae aliquam. Laborum magnam cum doloribus. Ducimus autem suscipit qui exercitationem. Animi quia sint nihil dignissimos et eos. Est sed quibusdam dignissimos beatae dolorem a.',
  },
  {
    index: 653,
    bgColor: 'white',
    name: 'Mikayla Beahan',
    initials: 'MB',
    jobTitle: 'Dynamic Tactics Technician',
    description:
      'Aut eum consectetur inventore qui et ea accusamus repudiandae voluptatum.',
    longText:
      'Quis quaerat rerum et. Nisi a officiis et porro maiores et aut corrupti. Sunt perspiciatis quia voluptatem sequi vitae. Nulla officia velit dolor dolorem.',
  },
  {
    index: 654,
    bgColor: '#f5f5f5',
    name: 'Hipolito Jenkins',
    initials: 'HJ',
    jobTitle: 'Lead Response Administrator',
    description:
      'Eligendi consequatur blanditiis quod aliquam est enim sed architecto doloribus.',
    longText:
      'Eveniet eum non eos rerum exercitationem. Quo est voluptatibus veniam unde officiis asperiores. Natus est rerum numquam ipsum sed laboriosam. Voluptas eveniet voluptatum at eaque. Quos molestiae sed deserunt nesciunt.',
  },
  {
    index: 655,
    bgColor: 'white',
    name: 'Trevor Braun',
    initials: 'TB',
    jobTitle: 'Lead Directives Facilitator',
    description: 'Nemo labore minus illum sint quam enim eius qui tempora.',
    longText:
      'Explicabo voluptatem amet voluptate deleniti voluptatibus quia omnis. Magni voluptatum temporibus vitae error. Rem error sint. Nemo voluptatem eos facilis soluta eius labore. Voluptas molestiae quod doloribus ut aut est amet. Laborum sit quod.',
  },
  {
    index: 656,
    bgColor: '#f5f5f5',
    name: 'Keon Hoppe',
    initials: 'KH',
    jobTitle: 'Dynamic Directives Liaison',
    description:
      'Consectetur sint aut autem voluptatem expedita quibusdam ducimus voluptate ut.',
    longText:
      'Et harum pariatur dolorem qui doloremque vero. Placeat et sed aut. Reprehenderit unde sunt et nihil aliquam dolorem laboriosam. Ut eos suscipit ea porro dolor ad deserunt sed.',
  },
  {
    index: 657,
    bgColor: 'white',
    name: 'Enoch Jenkins',
    initials: 'EJ',
    jobTitle: 'Internal Factors Agent',
    description:
      'Exercitationem tenetur voluptas qui sint quo illum maiores recusandae nostrum.',
    longText:
      'In veritatis voluptatum temporibus et sint maiores. Impedit voluptas est autem mollitia sint. Assumenda quos minima qui. Ut consequatur facilis distinctio error eveniet vel sed. Omnis perferendis non in ipsa sunt et aut sit. Quaerat consequatur qui impedit.',
  },
  {
    index: 658,
    bgColor: '#f5f5f5',
    name: 'Filomena Hirthe',
    initials: 'FH',
    jobTitle: 'Global Marketing Orchestrator',
    description: 'Eaque et nobis est sunt at ea debitis tempora ducimus.',
    longText:
      'Harum vitae culpa. Excepturi accusamus non. Voluptatem aliquam qui ipsam et. Repellat voluptatem doloribus tempora et.',
  },
  {
    index: 659,
    bgColor: 'white',
    name: 'Chloe Koepp',
    initials: 'CK',
    jobTitle: 'Product Identity Administrator',
    description: 'Voluptas ut omnis voluptas occaecati modi doloribus quas quo nulla.',
    longText:
      'Sed harum eum illum veritatis. Quam eum voluptas rerum voluptas et dignissimos sed. Magni debitis eos enim ipsa reiciendis est sint magni quis.',
  },
  {
    index: 660,
    bgColor: '#f5f5f5',
    name: 'Hallie Sanford',
    initials: 'HS',
    jobTitle: 'Dynamic Implementation Engineer',
    description:
      'In accusantium illum maiores tempora excepturi ut assumenda eos corporis.',
    longText:
      'Tempora hic ea voluptatem assumenda eos quia perspiciatis dolorum. Sed minus amet itaque sunt. Aut consequatur velit reiciendis expedita et enim ducimus. Adipisci dolores atque. Consequatur cum et quaerat et sit dolorem quidem. Eum libero in tempora nobis est iste mollitia minima.',
  },
  {
    index: 661,
    bgColor: 'white',
    name: 'Jamil Olson',
    initials: 'JO',
    jobTitle: 'Lead Communications Technician',
    description:
      'Molestiae perferendis ut repellendus velit quas eum veniam et voluptas.',
    longText:
      'Ut sed veritatis sunt ratione sed omnis sit. Quod illum enim. Eum velit dolor modi nostrum aut iure incidunt. Doloribus occaecati ut sit assumenda aliquid consequuntur sed debitis commodi. Aut nemo eius dolores ad minima corrupti atque vel.',
  },
  {
    index: 662,
    bgColor: '#f5f5f5',
    name: 'Caleb McKenzie',
    initials: 'CM',
    jobTitle: 'Chief Applications Executive',
    description: 'Voluptate vel odit aut alias eum ut amet atque magnam.',
    longText:
      'Est iusto a animi explicabo quod odio atque veritatis. Natus animi ea impedit eum non. Quidem molestiae et nesciunt optio ipsam. Atque ut inventore ea est.',
  },
  {
    index: 663,
    bgColor: 'white',
    name: 'Kyler Shields',
    initials: 'KS',
    jobTitle: 'Regional Metrics Representative',
    description:
      'Sunt in quidem rerum officiis praesentium tenetur distinctio nulla adipisci.',
    longText:
      'Ut fuga quo quia qui qui accusamus consequatur autem. Omnis impedit aliquid voluptas mollitia vel quis officiis. Quidem laboriosam consequatur et. Consectetur totam dolores. Quia eius velit explicabo dolorem corrupti quis aut quia.',
  },
  {
    index: 664,
    bgColor: '#f5f5f5',
    name: 'Kathryne Lehner',
    initials: 'KL',
    jobTitle: 'Dynamic Paradigm Administrator',
    description: 'Aperiam sit adipisci laudantium expedita aut qui corrupti vitae iusto.',
    longText:
      'Ipsum qui quia odit dolore temporibus dicta necessitatibus quidem laboriosam. Omnis numquam velit iste magni. Vero pariatur quasi dignissimos ea. Quas ut distinctio deserunt voluptatem et nulla. Quia recusandae ipsam quas architecto.',
  },
  {
    index: 665,
    bgColor: 'white',
    name: 'Myrtie Veum',
    initials: 'MV',
    jobTitle: 'Forward Applications Analyst',
    description: 'Sed excepturi rerum architecto nemo aut non doloremque non modi.',
    longText:
      'Doloremque ratione ratione distinctio quam sequi tempore aut. Quidem saepe autem velit sint mollitia quae non similique dolorum. Earum minima veritatis culpa iste iure non. Quia nemo et quod velit.',
  },
  {
    index: 666,
    bgColor: '#f5f5f5',
    name: 'Domenico Klocko',
    initials: 'DK',
    jobTitle: 'Central Configuration Architect',
    description: 'Enim nobis et voluptate rerum labore voluptas voluptas fugit quia.',
    longText:
      'Quas doloremque unde ut error sit sed ipsum. Debitis et beatae ut tempore fugit earum. Veritatis harum velit iste eaque rerum qui ipsum error. Quisquam voluptatem commodi magnam ut. Deleniti perspiciatis suscipit eum tenetur veritatis et. Tempora est ut temporibus.',
  },
  {
    index: 667,
    bgColor: 'white',
    name: 'Cyrus Keebler',
    initials: 'CK',
    jobTitle: 'Central Configuration Manager',
    description:
      'Perspiciatis magni reprehenderit qui sint impedit tempora aut est blanditiis.',
    longText:
      'Quos porro eos enim molestias cupiditate adipisci et. Iusto ut adipisci voluptatum. Nobis nihil a exercitationem.',
  },
  {
    index: 668,
    bgColor: '#f5f5f5',
    name: 'Anita Schiller',
    initials: 'AS',
    jobTitle: 'Legacy Accounts Director',
    description: 'Odio non itaque nisi et ipsa impedit quia autem iure.',
    longText:
      'Aut quos dolores consequatur tenetur ea similique est quod voluptatem. Ab eaque dignissimos rerum id et autem culpa voluptatibus dolorem. Dolores et vitae ab non et iusto et.',
  },
  {
    index: 669,
    bgColor: 'white',
    name: 'Christy McDermott',
    initials: 'CM',
    jobTitle: 'Global Markets Orchestrator',
    description: 'Saepe est sed sed ea recusandae debitis placeat modi amet.',
    longText:
      'Assumenda laborum illo aut tempora exercitationem excepturi esse. Omnis natus magni voluptas quia. Maiores sed itaque ut quasi quisquam corporis sequi fuga consequuntur. Molestiae exercitationem et ea molestiae delectus voluptatum cum est.',
  },
  {
    index: 670,
    bgColor: '#f5f5f5',
    name: 'Theron McKenzie',
    initials: 'TM',
    jobTitle: 'Corporate Accounts Planner',
    description:
      'Saepe consequatur recusandae quis sint sint dolorem dolor laudantium qui.',
    longText:
      'Sed est aliquam assumenda aliquam tempora voluptatibus. Autem reiciendis aliquid a consectetur dolores. At ut voluptate quibusdam praesentium omnis deleniti. Sunt at voluptatum.',
  },
  {
    index: 671,
    bgColor: 'white',
    name: 'Karelle Block',
    initials: 'KB',
    jobTitle: 'Regional Metrics Technician',
    description: 'Voluptatem aut minus et tenetur quis animi laboriosam ut in.',
    longText:
      'Ullam mollitia aut doloribus omnis eos maiores molestiae qui sequi. Corporis perferendis nihil voluptatibus amet reiciendis inventore. Vero consequatur ipsam ut. Facilis nisi atque officia. Sint quo est unde porro autem repellat eveniet.',
  },
  {
    index: 672,
    bgColor: '#f5f5f5',
    name: 'Stuart Mante',
    initials: 'SM',
    jobTitle: 'Human Solutions Engineer',
    description: 'Libero alias est ratione dolores iusto sed aut sit sapiente.',
    longText:
      'Itaque iure aspernatur nisi et. Temporibus quo incidunt enim ratione expedita odit. Cumque incidunt placeat. Reiciendis esse perspiciatis qui et.',
  },
  {
    index: 673,
    bgColor: 'white',
    name: 'Wilbert Feil',
    initials: 'WF',
    jobTitle: 'Forward Web Strategist',
    description: 'Vel nesciunt qui animi eos vitae ullam tempora qui facilis.',
    longText:
      'Quos fuga in dicta a quas quia aut amet. Ipsum aut alias odit aut non voluptatem autem. Corrupti eligendi necessitatibus corrupti illum mollitia omnis hic fugiat similique. Minima eveniet quos perspiciatis laudantium beatae non ea aut distinctio. Atque esse corrupti molestiae.',
  },
  {
    index: 674,
    bgColor: '#f5f5f5',
    name: 'Brittany Fadel',
    initials: 'BF',
    jobTitle: 'Forward Accounts Consultant',
    description:
      'Debitis dolores quia occaecati consequuntur placeat quo qui harum omnis.',
    longText:
      'Nemo fugiat ipsa assumenda qui eveniet assumenda veritatis. Facilis voluptate distinctio odio qui ipsa dolorem labore id. Aut id molestiae libero rerum autem quaerat officiis asperiores voluptas. Molestiae vero animi libero magnam consequuntur consectetur eius. Enim neque vel tempore. Molestiae ut adipisci laborum eos molestias est deleniti ab.',
  },
  {
    index: 675,
    bgColor: 'white',
    name: 'Santina Mosciski',
    initials: 'SM',
    jobTitle: 'Human Division Designer',
    description:
      'Quis quaerat et mollitia quis voluptatem doloribus corporis commodi nisi.',
    longText:
      'Ut vel sed dolorum dicta provident dolores placeat. Pariatur nostrum reiciendis aliquam nulla illum id doloremque ab quibusdam. Consectetur rerum tempore mollitia autem qui. Fuga quo minus. Dicta non saepe et modi corporis.',
  },
  {
    index: 676,
    bgColor: '#f5f5f5',
    name: "Orland O'Connell",
    initials: 'OO',
    jobTitle: 'Regional Identity Specialist',
    description:
      'Qui recusandae molestias incidunt praesentium est quas consequuntur architecto eveniet.',
    longText:
      'Aut omnis necessitatibus et est accusamus voluptas. Facilis distinctio in nisi vero. Quam modi quia quas dolorum. Odio similique voluptatibus molestias et esse incidunt dolores. Cumque excepturi placeat optio qui consequatur quia et harum quibusdam. Enim distinctio praesentium quas.',
  },
  {
    index: 677,
    bgColor: 'white',
    name: 'Marlin Trantow',
    initials: 'MT',
    jobTitle: 'Future Assurance Coordinator',
    description: 'Non aliquid distinctio esse sed dicta eveniet et ipsum sit.',
    longText:
      'Est perferendis ab sit odit cumque. Et et voluptate dolorum est. Aut tenetur eos quo tempore consequatur ex. Quos voluptate labore sed id consequatur ducimus.',
  },
  {
    index: 678,
    bgColor: '#f5f5f5',
    name: 'Jany Bergstrom',
    initials: 'JB',
    jobTitle: 'Customer Implementation Liaison',
    description: 'Quia vero voluptas nam iure voluptatum autem suscipit molestias in.',
    longText:
      'Hic eum quidem qui maiores autem unde qui. Saepe minima repellendus et voluptatem. Assumenda quis neque hic. Id dicta id sed commodi praesentium at. Ut voluptates asperiores atque id ab aut tenetur magni ullam. Similique expedita quia ullam ex laborum illum animi et.',
  },
  {
    index: 679,
    bgColor: 'white',
    name: 'Landen Kovacek',
    initials: 'LK',
    jobTitle: 'Dynamic Division Producer',
    description: 'Dolorem error beatae vero fugiat libero cupiditate sed assumenda qui.',
    longText:
      'Ipsum omnis deserunt deleniti consequatur quae quod quo minus aliquid. Adipisci quas et. Et eum exercitationem a et quasi maiores. Aut ullam laudantium dolor ut suscipit expedita perspiciatis officia.',
  },
  {
    index: 680,
    bgColor: '#f5f5f5',
    name: 'Camron Nicolas',
    initials: 'CN',
    jobTitle: 'Central Paradigm Analyst',
    description: 'Qui doloribus et ea excepturi natus nam hic neque nesciunt.',
    longText:
      'Excepturi qui et optio adipisci est ut est. Pariatur laboriosam eos quas officia. Architecto sint eos. Reiciendis in quaerat quo quo quisquam aliquid mollitia qui. Minima eius quaerat voluptatem velit voluptate.',
  },
  {
    index: 681,
    bgColor: 'white',
    name: 'Adrienne Hackett',
    initials: 'AH',
    jobTitle: 'Legacy Communications Executive',
    description: 'Aut maiores expedita praesentium nisi laudantium in pariatur sint qui.',
    longText:
      'Quos eligendi consequuntur. Dolores et ut hic. Inventore aspernatur quibusdam eos enim culpa illo sunt. Iste cum ut ex ducimus. Dolor magni dolore omnis quasi et illum nihil est. Ducimus sed quis ad id est voluptatem autem reiciendis.',
  },
  {
    index: 682,
    bgColor: '#f5f5f5',
    name: 'Adelle Abbott',
    initials: 'AA',
    jobTitle: 'Global Response Orchestrator',
    description: 'Eum quaerat officia rem repellat eum nobis illo facere quo.',
    longText:
      'Fugit est error dolor. Quae sit omnis aut recusandae. Quidem possimus est neque ea accusantium consequatur et aut. Veniam et hic et. Ipsa qui vitae eveniet ut et.',
  },
  {
    index: 683,
    bgColor: 'white',
    name: 'Vernon Cormier',
    initials: 'VC',
    jobTitle: 'Corporate Configuration Producer',
    description:
      'Deleniti doloremque placeat eos deserunt et sint aspernatur deserunt modi.',
    longText:
      'Illo quisquam sit minus est. Eum autem placeat ut accusantium aspernatur quae est. Fugiat aut voluptatem voluptatem eum voluptatem dolor dolore. Id dolorum nostrum.',
  },
  {
    index: 684,
    bgColor: '#f5f5f5',
    name: 'Destiney Hand',
    initials: 'DH',
    jobTitle: 'Regional Web Strategist',
    description: 'Doloremque totam consequatur sit iste ipsa temporibus similique et ea.',
    longText:
      'Facere et at. Quia sint ullam illo. Rerum non aliquam omnis. Quas ab et omnis quis sit dolores rerum ut. Molestiae repudiandae consequatur odio ut dolorem nostrum. Eius voluptatem consequuntur consequatur molestiae atque nam eos.',
  },
  {
    index: 685,
    bgColor: 'white',
    name: 'Yazmin Kunze',
    initials: 'YK',
    jobTitle: 'Investor Security Agent',
    description:
      'Et exercitationem cum animi corporis velit quia deleniti ea consequatur.',
    longText:
      'Voluptas et non. Sit ex voluptatibus. Pariatur eligendi possimus illum ab laborum. Maiores fugit veniam consequatur minus ipsa est. Incidunt aut sint enim commodi dolores nobis harum aut facilis. Porro autem deserunt et ullam tempore et.',
  },
  {
    index: 686,
    bgColor: '#f5f5f5',
    name: 'Tomasa Considine',
    initials: 'TC',
    jobTitle: 'Senior Paradigm Director',
    description:
      'Quia eveniet ipsum mollitia consequuntur consequatur harum enim voluptas consequatur.',
    longText:
      'Eos voluptate dolores corporis nam et. Esse delectus quo voluptate. Reiciendis molestiae voluptas est voluptatibus voluptas. Quo earum id qui iure ex pariatur consectetur. Qui illum doloremque commodi quod veniam maiores est dolores nisi. Neque quos similique ea cumque autem qui.',
  },
  {
    index: 687,
    bgColor: 'white',
    name: 'Kitty Sauer',
    initials: 'KS',
    jobTitle: 'International Identity Assistant',
    description: 'Qui quis vero neque delectus deserunt est ab ut soluta.',
    longText:
      'Sit sunt aut eos praesentium minima quas natus. Molestias voluptate et beatae. Et dolores aut ab deleniti est et. Natus voluptates enim reprehenderit laudantium debitis et qui. Ea laboriosam saepe aliquam omnis ut incidunt. Assumenda tenetur et.',
  },
  {
    index: 688,
    bgColor: '#f5f5f5',
    name: 'Jessika Schamberger',
    initials: 'JS',
    jobTitle: 'Regional Brand Supervisor',
    description: 'Voluptate aliquid autem rem dolorem consequuntur sunt et sequi qui.',
    longText:
      'Tenetur nihil aut recusandae ipsa ut asperiores repudiandae voluptatem. Illum exercitationem tempore porro laudantium et provident quos animi enim. Quis corporis maiores aperiam voluptas quisquam voluptate. Enim vel qui enim in sit. Vero maiores dicta maiores eaque ut sed illum. Non non sunt quo est mollitia.',
  },
  {
    index: 689,
    bgColor: 'white',
    name: 'Favian Wiegand',
    initials: 'FW',
    jobTitle: 'Global Interactions Liaison',
    description: 'Quia aut nulla minus dolores corporis est esse alias enim.',
    longText:
      'Ratione numquam minima delectus ut autem ex. Et maxime at expedita esse. Sint nihil quos voluptas possimus. Maiores molestias aperiam laborum necessitatibus voluptas quisquam.',
  },
  {
    index: 690,
    bgColor: '#f5f5f5',
    name: 'Sally Maggio',
    initials: 'SM',
    jobTitle: 'Human Web Orchestrator',
    description: 'Expedita culpa quod est maxime quia ut ea asperiores eveniet.',
    longText:
      'Vero quidem ut omnis repudiandae voluptatem voluptatum praesentium. Et suscipit fugit non voluptates temporibus praesentium minima sit veritatis. Placeat in quis consectetur repellendus voluptatum optio inventore sapiente ea.',
  },
  {
    index: 691,
    bgColor: 'white',
    name: 'Omer Towne',
    initials: 'OT',
    jobTitle: 'Internal Metrics Technician',
    description:
      'Mollitia laudantium consequatur dignissimos blanditiis ipsam sequi quis eius in.',
    longText:
      'Maiores possimus sit dolor error consequatur ullam. Soluta illum facere non. Nemo voluptas facilis quaerat ut eaque.',
  },
  {
    index: 692,
    bgColor: '#f5f5f5',
    name: 'Joana Beatty',
    initials: 'JB',
    jobTitle: 'Global Branding Architect',
    description: 'Ullam velit illo est quis deleniti ut quasi vel sequi.',
    longText:
      'Soluta magni quia voluptatem ea qui. Aliquam suscipit assumenda ut nesciunt tempora. Nesciunt laudantium quos magnam sed est mollitia ea libero a.',
  },
  {
    index: 693,
    bgColor: 'white',
    name: 'Ellis Kulas',
    initials: 'EK',
    jobTitle: 'Central Metrics Liaison',
    description:
      'Ducimus consequatur adipisci tempora voluptatum et inventore esse tenetur possimus.',
    longText:
      'Itaque quisquam error fugiat. Consequatur nihil et facere sequi enim ab soluta maxime ratione. Placeat quidem provident excepturi et.',
  },
  {
    index: 694,
    bgColor: '#f5f5f5',
    name: 'Everett Kuvalis',
    initials: 'EK',
    jobTitle: 'Principal Creative Strategist',
    description:
      'Mollitia quasi eos aliquid quod perferendis consequatur illo facilis quasi.',
    longText:
      'Totam aperiam quaerat aut provident dolorem quos. Perspiciatis saepe ut quam sunt. Unde quibusdam suscipit. Facere iure qui eaque. Sed perspiciatis quia voluptatum quia.',
  },
  {
    index: 695,
    bgColor: 'white',
    name: 'Joseph Davis',
    initials: 'JD',
    jobTitle: 'Dynamic Response Designer',
    description:
      'Aut recusandae pariatur qui dolorum qui expedita occaecati delectus quam.',
    longText:
      'Provident dolor hic possimus pariatur sed laborum. Magni velit et aliquid. Sit nisi doloremque amet non aliquam pariatur. Quos et aut nobis adipisci non cupiditate.',
  },
  {
    index: 696,
    bgColor: '#f5f5f5',
    name: 'Astrid MacGyver',
    initials: 'AM',
    jobTitle: 'Product Mobility Technician',
    description:
      'Suscipit inventore consequuntur pariatur et dignissimos maxime quia debitis pariatur.',
    longText:
      'Aliquid dolore vel adipisci cupiditate sit temporibus et in quis. Quo repudiandae consequuntur nam omnis ea non. Velit itaque incidunt id accusantium provident eos ut in quos. Corporis provident dignissimos iusto reprehenderit et sapiente perspiciatis dolore.',
  },
  {
    index: 697,
    bgColor: 'white',
    name: 'Trevion Gleichner',
    initials: 'TG',
    jobTitle: 'Central Mobility Assistant',
    description: 'Sed id harum aut omnis impedit sequi ut voluptas omnis.',
    longText:
      'Libero sit dolores aut vel officia. Officia non sit omnis. Ad sequi numquam eos maxime qui omnis et. Rerum nemo cumque. Animi voluptas consequatur inventore commodi ipsam. Sint voluptates voluptas unde id.',
  },
  {
    index: 698,
    bgColor: '#f5f5f5',
    name: 'Jada Volkman',
    initials: 'JV',
    jobTitle: 'Future Implementation Architect',
    description: 'Sed expedita distinctio quia soluta ut et tempore fugit corrupti.',
    longText:
      'Placeat omnis consequatur occaecati neque natus temporibus. Qui quia ut est dignissimos odio tempore adipisci. Facere esse saepe voluptas. Ab dolore et aut ea enim vel nisi suscipit. Enim aut omnis mollitia officiis omnis.',
  },
  {
    index: 699,
    bgColor: 'white',
    name: 'Magnolia Bosco',
    initials: 'MB',
    jobTitle: 'Lead Data Officer',
    description:
      'Commodi qui fuga voluptatem exercitationem veniam quia facilis voluptates quas.',
    longText:
      'Consequatur consequatur ut sunt eum et. Aut minima ea dicta dolor explicabo placeat. Quos ullam laboriosam.',
  },
  {
    index: 700,
    bgColor: '#f5f5f5',
    name: 'Sabina Durgan',
    initials: 'SD',
    jobTitle: 'Future Web Representative',
    description: 'Eligendi at saepe ea eum aut id voluptates voluptatem facilis.',
    longText:
      'Accusantium et cumque. Reiciendis ipsa eos doloremque eos eaque. Doloribus et molestiae. Adipisci sunt temporibus quis. Consequuntur dolores veniam voluptate sed amet.',
  },
  {
    index: 701,
    bgColor: 'white',
    name: 'Alva Bechtelar',
    initials: 'AB',
    jobTitle: 'Global Tactics Assistant',
    description: 'Cumque facilis qui impedit qui velit at est autem eos.',
    longText:
      'Rem fugit dicta id sed praesentium est fugit vero. Quibusdam aut deserunt accusantium labore id sed quia ut. Dolores qui qui in. Ea voluptatem reiciendis. Quis est asperiores dolorem earum et hic nam. Consequatur excepturi voluptatem voluptatem sit architecto tenetur non sapiente.',
  },
  {
    index: 702,
    bgColor: '#f5f5f5',
    name: 'Raphaelle Klein',
    initials: 'RK',
    jobTitle: 'Dynamic Markets Agent',
    description:
      'Repellendus consequuntur officia qui a veniam et consequatur neque facilis.',
    longText:
      'Magni et unde et at et ut nihil in. Autem impedit sit laborum ut reprehenderit. Temporibus reiciendis illo maxime qui doloribus aliquam.',
  },
  {
    index: 703,
    bgColor: 'white',
    name: 'Gretchen Renner',
    initials: 'GR',
    jobTitle: 'Forward Accountability Orchestrator',
    description:
      'Repellat eos accusamus quas id illo temporibus occaecati doloremque non.',
    longText:
      'Beatae aut qui nobis est repellendus rem ex fugit eum. Exercitationem et esse qui quisquam animi accusamus. Velit eveniet et sed quo id. Consequuntur temporibus id officia beatae enim ipsam sunt.',
  },
  {
    index: 704,
    bgColor: '#f5f5f5',
    name: 'Ari Gaylord',
    initials: 'AG',
    jobTitle: 'National Research Developer',
    description:
      'Soluta voluptatem libero et autem reprehenderit reprehenderit placeat iste quidem.',
    longText:
      'Quae beatae mollitia quaerat ducimus cupiditate natus ea consequatur. Minima quas voluptate ratione numquam omnis cumque. Aliquam in rem ipsa quasi. Est eos ullam.',
  },
  {
    index: 705,
    bgColor: 'white',
    name: 'Maximus Lubowitz',
    initials: 'ML',
    jobTitle: 'Central Response Engineer',
    description: 'Dolores qui earum eos dolor minima esse consequatur voluptas quia.',
    longText:
      'Voluptatem nihil praesentium beatae et optio. Enim consequatur et sit ut. Soluta asperiores repellat rerum amet provident ut vitae sint. Illum sunt nesciunt corrupti qui incidunt.',
  },
  {
    index: 706,
    bgColor: '#f5f5f5',
    name: 'Pattie Abbott',
    initials: 'PA',
    jobTitle: 'Global Tactics Director',
    description:
      'Est incidunt nulla accusamus possimus voluptatem sunt porro at voluptas.',
    longText:
      'Cumque quo dolorum in ab. Blanditiis ad quod soluta est commodi culpa. Et aut fuga labore eos sed soluta inventore ex. Qui nihil eveniet optio quidem et tenetur.',
  },
  {
    index: 707,
    bgColor: 'white',
    name: 'Hershel Labadie',
    initials: 'HL',
    jobTitle: 'Lead Division Facilitator',
    description: 'Possimus ea officiis modi vel nemo tempore qui doloribus quis.',
    longText:
      'Sint libero omnis deserunt tenetur quia est. Ea aut veniam et rerum fugiat non et. Aspernatur corporis unde repudiandae nobis placeat. Voluptates corporis et. Sunt quam deserunt labore voluptas. Dolores delectus incidunt omnis consequuntur necessitatibus aperiam expedita dolores placeat.',
  },
  {
    index: 708,
    bgColor: '#f5f5f5',
    name: 'Oscar Cruickshank',
    initials: 'OC',
    jobTitle: 'International Division Architect',
    description:
      'Reiciendis enim reprehenderit sequi architecto iste quibusdam distinctio ut ut.',
    longText:
      'Laborum ipsum doloribus modi. Voluptatem labore maxime nihil libero qui omnis. Aperiam accusantium perspiciatis at quis. Deserunt soluta hic voluptates doloribus omnis laboriosam deleniti laudantium expedita. Rerum nihil et optio id. Animi voluptas aut consequuntur odio architecto.',
  },
  {
    index: 709,
    bgColor: 'white',
    name: 'Judah Nader',
    initials: 'JN',
    jobTitle: 'National Brand Liaison',
    description: 'Eius nulla officia quas quas et voluptate id quisquam aut.',
    longText:
      'Deleniti velit quia sit saepe et aspernatur nihil quidem id. Enim qui omnis accusantium. Saepe et necessitatibus in minima. Saepe laboriosam et omnis ut inventore dolorem autem sapiente. A iusto dolore.',
  },
  {
    index: 710,
    bgColor: '#f5f5f5',
    name: 'Hardy Renner',
    initials: 'HR',
    jobTitle: 'District Marketing Orchestrator',
    description: 'Enim hic dolor animi sit quasi a iure excepturi nulla.',
    longText:
      'Et quia est itaque reprehenderit neque labore. Accusamus possimus corrupti quia est praesentium delectus odio. Eligendi sit error sed voluptas ea voluptates. Itaque deleniti iste. Dolores ab consectetur et amet.',
  },
  {
    index: 711,
    bgColor: 'white',
    name: 'Aaron Collier',
    initials: 'AC',
    jobTitle: 'Future Paradigm Specialist',
    description: 'Quia consequuntur nihil quia nisi omnis aliquid et omnis minima.',
    longText:
      'Inventore expedita provident repudiandae aperiam eveniet nam accusantium. Non odio aut. Ut vel pariatur facilis sint deleniti enim alias. Itaque dolorem deserunt doloribus error. Quae quo dolores voluptas ratione iste inventore quia.',
  },
  {
    index: 712,
    bgColor: '#f5f5f5',
    name: 'Henriette Hessel',
    initials: 'HH',
    jobTitle: 'National Security Coordinator',
    description:
      'Voluptatem ad reiciendis fuga voluptatum itaque qui consequuntur magnam possimus.',
    longText:
      'Fuga facilis cupiditate aut animi dolor quisquam dignissimos. Pariatur voluptatem ducimus repudiandae dicta minima. Reiciendis eius quo modi ut qui itaque.',
  },
  {
    index: 713,
    bgColor: 'white',
    name: 'Nasir Abernathy',
    initials: 'NA',
    jobTitle: 'Chief Response Assistant',
    description: 'Ullam hic reprehenderit officia aliquid cumque aperiam hic et maiores.',
    longText:
      'Voluptatem perferendis iure consequatur officia at consectetur. Maxime placeat reprehenderit. Sit ut culpa excepturi ullam sint esse veritatis ipsa doloribus. Eum accusamus et unde officiis dolor autem. Cum laborum dolorem sit voluptatibus autem.',
  },
  {
    index: 714,
    bgColor: '#f5f5f5',
    name: 'Benedict Huel',
    initials: 'BH',
    jobTitle: 'Dynamic Implementation Designer',
    description: 'Aperiam numquam qui magnam voluptatem non et consequatur enim rerum.',
    longText:
      'Rem enim laboriosam tempora nemo natus expedita suscipit rem. Dolores omnis est quia et corrupti asperiores iusto cumque eos. Doloremque repellat tempora at aliquam et repellat. Ipsam vel ex ullam est repellat. Amet natus qui nemo quasi. Asperiores iusto in facere laboriosam.',
  },
  {
    index: 715,
    bgColor: 'white',
    name: 'Herminio Murazik',
    initials: 'HM',
    jobTitle: 'Chief Research Executive',
    description:
      'Temporibus quo accusantium blanditiis numquam architecto dolorem facere nostrum provident.',
    longText:
      'Placeat perferendis nemo. Voluptas aliquid quos culpa quisquam ipsa ut est. Provident enim velit in ex occaecati nobis et.',
  },
  {
    index: 716,
    bgColor: '#f5f5f5',
    name: 'Shayne Kerluke',
    initials: 'SK',
    jobTitle: 'Direct Accountability Architect',
    description:
      'Suscipit unde molestiae incidunt eum dignissimos natus neque similique incidunt.',
    longText:
      'Voluptate molestiae omnis et porro sit praesentium voluptates consectetur natus. Laboriosam inventore fugit numquam recusandae quos est et exercitationem sed. Deserunt quibusdam nesciunt doloribus voluptatem voluptatum et. Enim tempore ipsum fugit. Omnis aut nihil laborum incidunt.',
  },
  {
    index: 717,
    bgColor: 'white',
    name: 'Vicky Towne',
    initials: 'VT',
    jobTitle: 'Regional Metrics Architect',
    description: 'Quo aut consequatur qui ullam sit dolores quo commodi voluptatum.',
    longText:
      'Id iusto velit dignissimos sed exercitationem vel soluta quae commodi. Quaerat rem commodi qui porro unde eos amet et magnam. Aliquam ratione corporis vel sit id omnis.',
  },
  {
    index: 718,
    bgColor: '#f5f5f5',
    name: 'Mckayla Witting',
    initials: 'MW',
    jobTitle: 'Legacy Web Administrator',
    description: 'Quisquam cumque est ex est dolores ab omnis rerum est.',
    longText:
      'Debitis similique quas. Quo nihil iusto ipsa illum officia. Sed vitae voluptatem odio et provident.',
  },
  {
    index: 719,
    bgColor: 'white',
    name: 'Mozell Lemke',
    initials: 'ML',
    jobTitle: 'Internal Accounts Developer',
    description: 'Hic sit reprehenderit laborum et numquam voluptas rerum eum nemo.',
    longText:
      'Qui totam nulla illo cum est qui rerum. Ducimus ab cum dolorum eveniet veritatis voluptatibus maiores incidunt. Qui aliquid consectetur. Doloremque laudantium blanditiis aperiam quia fugiat est cumque qui. A dolor ea reprehenderit illum veritatis molestiae.',
  },
  {
    index: 720,
    bgColor: '#f5f5f5',
    name: "Gerhard O'Kon",
    initials: 'GO',
    jobTitle: 'Global Web Planner',
    description: 'Ut alias asperiores accusantium vitae odit quibusdam vero ea quas.',
    longText:
      'Est et molestias autem quia omnis et perspiciatis. Incidunt quod minima sint laudantium aut animi eos. Dolores occaecati eum accusantium et voluptas. Maxime consequuntur doloribus autem omnis voluptatem commodi.',
  },
  {
    index: 721,
    bgColor: 'white',
    name: 'Marisol Kiehn',
    initials: 'MK',
    jobTitle: 'Dynamic Metrics Facilitator',
    description: 'Qui debitis doloremque quibusdam itaque enim natus ut non corporis.',
    longText:
      'Ea voluptate laborum facilis modi. Accusamus recusandae ea. Omnis ab laborum consequatur dolores.',
  },
  {
    index: 722,
    bgColor: '#f5f5f5',
    name: 'Jordi Conn',
    initials: 'JC',
    jobTitle: 'Customer Communications Technician',
    description:
      'Perferendis assumenda et dolores quaerat corrupti quidem beatae iusto enim.',
    longText:
      'Nemo quisquam mollitia voluptas quasi. Consequatur aut voluptas officia fuga aspernatur amet nisi repudiandae. Accusantium dolore necessitatibus dolores ut quia voluptate doloribus et. Et aspernatur sapiente consequatur perspiciatis rerum. A distinctio accusamus non.',
  },
  {
    index: 723,
    bgColor: 'white',
    name: 'Johnnie Schamberger',
    initials: 'JS',
    jobTitle: 'Investor Accountability Administrator',
    description:
      'Minus modi eveniet quis ut repellat suscipit natus natus exercitationem.',
    longText:
      'Nihil molestiae numquam numquam dolor culpa explicabo veniam quae id. Itaque aliquam itaque earum quibusdam minus. Rerum corrupti similique.',
  },
  {
    index: 724,
    bgColor: '#f5f5f5',
    name: 'Bernard Schumm',
    initials: 'BS',
    jobTitle: 'Principal Division Analyst',
    description:
      'Ex facilis rerum doloremque eos architecto explicabo nulla iure veritatis.',
    longText:
      'Ea laborum hic nesciunt. Vel nemo id quia possimus quis mollitia. Maxime pariatur optio consectetur unde delectus. Aut voluptas consectetur. Expedita facilis dignissimos nemo. Eaque qui et id consectetur.',
  },
  {
    index: 725,
    bgColor: 'white',
    name: 'Sheridan Hahn',
    initials: 'SH',
    jobTitle: 'Future Paradigm Representative',
    description:
      'Aliquam nostrum commodi doloribus dolorem perspiciatis mollitia corporis velit voluptas.',
    longText:
      'Distinctio necessitatibus voluptas ab laborum. Unde sed nobis ipsa. Dolorum quia dolorem aliquam accusamus incidunt vero iure. Quaerat id aut dolores accusantium.',
  },
  {
    index: 726,
    bgColor: '#f5f5f5',
    name: 'Willard Carroll',
    initials: 'WC',
    jobTitle: 'Human Accounts Engineer',
    description: 'At laudantium sint nihil sint tempora consequatur eos minima eligendi.',
    longText:
      'Eius sed et ipsum. Sit omnis consectetur atque delectus. Perspiciatis eos expedita et omnis. Rerum ducimus eveniet voluptatum est. Enim reiciendis laudantium nisi laborum quisquam et dolores facilis. Deserunt necessitatibus est laborum.',
  },
  {
    index: 727,
    bgColor: 'white',
    name: 'Dora Wiza',
    initials: 'DW',
    jobTitle: 'Corporate Markets Developer',
    description:
      'Consequuntur praesentium ea hic expedita dolorem ea praesentium accusantium cum.',
    longText:
      'Et velit id officia veniam animi iste omnis ipsa perferendis. Aspernatur ab corrupti modi. Quisquam nisi voluptas ratione et eos illum nulla ut. Eos et est. Inventore occaecati quisquam veritatis aut incidunt numquam qui sed sit.',
  },
  {
    index: 728,
    bgColor: '#f5f5f5',
    name: 'Price Feest',
    initials: 'PF',
    jobTitle: 'Internal Tactics Executive',
    description:
      'Nulla inventore repellendus enim et culpa reprehenderit iusto consequatur neque.',
    longText:
      'Maxime tempore voluptas id magni hic quia et. Assumenda reprehenderit doloremque corrupti sed consequatur et nulla. Provident velit soluta. Voluptate explicabo corrupti autem facere tempora asperiores provident illo. Consequuntur sed est voluptas maxime voluptatem.',
  },
  {
    index: 729,
    bgColor: 'white',
    name: 'Jeanie Williamson',
    initials: 'JW',
    jobTitle: 'International Metrics Specialist',
    description: 'Cum molestias eius dolores aut qui dolorem voluptatem quis delectus.',
    longText:
      'Dolorem atque repellat dolorem vel est iure sunt. Consequatur laboriosam perferendis nihil et. Non magni dolorum rem et nam veritatis quidem. Sint fuga laudantium dolor officia non molestias maiores esse.',
  },
  {
    index: 730,
    bgColor: '#f5f5f5',
    name: 'Ignacio Zemlak',
    initials: 'IZ',
    jobTitle: 'Chief Security Facilitator',
    description:
      'Assumenda aliquam velit ullam et reprehenderit sunt voluptates iste sunt.',
    longText:
      'Doloribus deserunt et ut. Inventore quo dolores et sint. Est libero beatae voluptatem aspernatur. Eaque deserunt ea voluptate quia et necessitatibus et deleniti. Numquam cumque tenetur earum labore cum aut.',
  },
  {
    index: 731,
    bgColor: 'white',
    name: 'Mireya Terry',
    initials: 'MT',
    jobTitle: 'Internal Communications Manager',
    description: 'Rem sit molestias aut adipisci velit iusto placeat rerum ea.',
    longText:
      'Architecto asperiores eum velit perspiciatis facere. Vero pariatur quisquam soluta repellat doloremque cum. Illo provident dignissimos laborum. Natus est voluptates exercitationem deleniti repellat. Laboriosam nostrum autem itaque facilis id autem esse.',
  },
  {
    index: 732,
    bgColor: '#f5f5f5',
    name: 'Kevon Bednar',
    initials: 'KB',
    jobTitle: 'Dynamic Usability Officer',
    description: 'Accusamus totam quas aut ratione dolores et hic aspernatur vel.',
    longText:
      'Ut voluptas sit reprehenderit aperiam iste. Vero ut aliquid laudantium optio et voluptas harum. Sit iure sint inventore. Ullam autem asperiores omnis consequuntur ipsa aut.',
  },
  {
    index: 733,
    bgColor: 'white',
    name: 'Cordia Windler',
    initials: 'CW',
    jobTitle: 'Future Mobility Technician',
    description:
      'Saepe officiis explicabo temporibus blanditiis itaque et inventore exercitationem porro.',
    longText:
      'Blanditiis aut amet ut voluptatum ut possimus rerum voluptas. Consequatur beatae a illo id. Quae recusandae ea. Non consequatur consequatur voluptas laudantium rerum eum perspiciatis earum at. Voluptatem architecto et. Veniam veritatis odit aut dolorum deserunt.',
  },
  {
    index: 734,
    bgColor: '#f5f5f5',
    name: 'Otilia Lang',
    initials: 'OL',
    jobTitle: 'Dynamic Assurance Representative',
    description:
      'Error blanditiis quibusdam at pariatur eum architecto voluptatem natus ullam.',
    longText:
      'Omnis optio et distinctio. Non fugiat omnis consequuntur earum sunt soluta. Commodi et ut totam ut sint quod repellendus. Tenetur in ea aut odit alias. Non dolore illo molestiae sequi laudantium.',
  },
  {
    index: 735,
    bgColor: 'white',
    name: 'Jennings Conroy',
    initials: 'JC',
    jobTitle: 'Corporate Metrics Officer',
    description: 'Aut voluptas dicta recusandae labore vel ut eaque quasi consequuntur.',
    longText:
      'Suscipit laboriosam error vel aut et sint nobis perferendis. Minima quo inventore recusandae laudantium qui magnam qui quod minima. Non nemo velit eos. Totam praesentium dolorem blanditiis debitis enim sit odit debitis.',
  },
  {
    index: 736,
    bgColor: '#f5f5f5',
    name: 'Katelyn Aufderhar',
    initials: 'KA',
    jobTitle: 'Corporate Program Officer',
    description:
      'Possimus consequuntur sequi quia nostrum sint dolorem nobis quia ullam.',
    longText:
      'Illo quaerat et voluptatum eum. Vitae saepe nostrum voluptatibus nisi voluptatem a. Sunt dolorem perspiciatis sunt pariatur fuga. Qui quo temporibus ullam. Magni porro dicta quo ratione repellendus molestiae ea fuga deserunt.',
  },
  {
    index: 737,
    bgColor: 'white',
    name: 'Clemens Maggio',
    initials: 'CM',
    jobTitle: 'Direct Data Technician',
    description: 'Laborum laborum ut qui magnam quia voluptates non dolore sunt.',
    longText:
      'Et tempore ea ab ratione numquam alias officia facilis quia. Quia quidem sequi vel iste et nobis rerum. Ut magnam qui autem. Dolores veritatis libero temporibus neque vel praesentium labore eveniet fuga. Nulla exercitationem ut. Vel voluptatem doloribus enim possimus expedita cumque quo.',
  },
  {
    index: 738,
    bgColor: '#f5f5f5',
    name: 'Noemi Gorczany',
    initials: 'NG',
    jobTitle: 'Legacy Tactics Strategist',
    description: 'Et fugit consectetur nobis dolores cumque qui eligendi non aut.',
    longText:
      'Vero voluptas sunt. Sit asperiores vitae neque accusamus autem. Dolores dolor aperiam excepturi est rerum. Quaerat blanditiis quia voluptatem voluptas quod iure nobis. Quisquam assumenda dolorum ducimus recusandae illum aut eum. Officiis cupiditate ullam eaque qui accusamus ex sed ut.',
  },
  {
    index: 739,
    bgColor: 'white',
    name: 'Estel Bartell',
    initials: 'EB',
    jobTitle: 'Direct Marketing Agent',
    description: 'Non fugiat quia nostrum excepturi quia quasi qui omnis saepe.',
    longText:
      'Nisi nisi repellendus tempore reiciendis doloremque. Aut doloribus architecto et aliquid dolorem corrupti fugit quo veritatis. Quidem deleniti nulla animi nam eos voluptas quia. Sequi enim amet. In soluta voluptatem neque accusantium dolore sit dolorem id minus. Magnam sit modi incidunt et ut.',
  },
  {
    index: 740,
    bgColor: '#f5f5f5',
    name: 'Xzavier Leffler',
    initials: 'XL',
    jobTitle: 'National Creative Technician',
    description: 'Impedit doloremque dicta vero et repellat officia aut quam ex.',
    longText:
      'Amet facere perferendis eaque. Ut quae eius. Est corporis iste iusto accusamus nesciunt. Fuga tempore cupiditate nam officiis assumenda. Tempora aut deserunt earum error nisi pariatur. Cumque aut omnis recusandae voluptatem incidunt.',
  },
  {
    index: 741,
    bgColor: 'white',
    name: 'Maia Hirthe',
    initials: 'MH',
    jobTitle: 'International Response Executive',
    description: 'Aut laudantium expedita non sit aut pariatur quod possimus libero.',
    longText:
      'Sit aut rerum. Et deleniti rerum. Reprehenderit quam nesciunt natus maiores ea eaque et sunt. Porro illum numquam ullam recusandae. Ducimus ratione qui animi voluptate.',
  },
  {
    index: 742,
    bgColor: '#f5f5f5',
    name: 'Cletus Wisoky',
    initials: 'CW',
    jobTitle: 'Regional Directives Technician',
    description:
      'Magni dignissimos odit ipsa repudiandae cupiditate magnam rerum cupiditate ea.',
    longText:
      'Molestias suscipit sapiente inventore ut ipsam. Repudiandae porro sunt est. Corrupti quia sit non. Aspernatur laboriosam iure odit autem et officiis occaecati odio.',
  },
  {
    index: 743,
    bgColor: 'white',
    name: 'Estel Lemke',
    initials: 'EL',
    jobTitle: 'District Identity Associate',
    description: 'Itaque ut fuga qui earum voluptate id ducimus itaque corrupti.',
    longText:
      'Dolorum qui doloribus occaecati odit ea. Dolorum cum aut animi. In officiis eum ipsa repudiandae quia in laboriosam amet. Et consectetur eum unde consequuntur labore. Dolorum vel earum quis repellendus delectus omnis sed ducimus. Quia asperiores quia qui minima omnis vel.',
  },
  {
    index: 744,
    bgColor: '#f5f5f5',
    name: 'Elena Pagac',
    initials: 'EP',
    jobTitle: 'Chief Applications Supervisor',
    description: 'Earum rerum eveniet et facere eius enim sed architecto consequatur.',
    longText:
      'Eveniet quasi suscipit nobis maxime maiores est voluptates nihil. Porro doloremque molestiae assumenda sit rem sunt eius. Mollitia eius dolor.',
  },
  {
    index: 745,
    bgColor: 'white',
    name: 'Brody Green',
    initials: 'BG',
    jobTitle: 'National Factors Liaison',
    description:
      'Explicabo modi est voluptatibus consequatur ut sunt similique ea autem.',
    longText:
      'Vel veritatis officia. Rerum sit explicabo dolores dolor cupiditate voluptatem esse optio. Vel voluptas asperiores molestiae. Tempora ipsa debitis veniam aut quisquam quod ipsa minima. Maxime sequi temporibus ut vero qui similique exercitationem. Rerum illum et veniam vitae et omnis culpa id et.',
  },
  {
    index: 746,
    bgColor: '#f5f5f5',
    name: 'Brooke Padberg',
    initials: 'BP',
    jobTitle: 'Internal Assurance Producer',
    description: 'Consequatur molestias et fugit illo omnis ducimus quis incidunt et.',
    longText:
      'Voluptatem vel dolorum et. Modi vel exercitationem omnis temporibus et. Voluptatum mollitia porro qui qui velit voluptas perspiciatis. Tenetur minima possimus ut molestias minima. Dolor et dolor voluptatem magni quibusdam. Molestiae ut at nam libero sit et qui.',
  },
  {
    index: 747,
    bgColor: 'white',
    name: 'Rosalia Lockman',
    initials: 'RL',
    jobTitle: 'Chief Communications Executive',
    description:
      'Consequatur quam voluptates voluptatem magnam corrupti recusandae ipsam blanditiis molestiae.',
    longText:
      'Aliquam velit itaque eum. Quo et et et aut doloremque aliquid. Sunt est neque ut cupiditate quas molestiae aut. Libero quia alias quia consequatur non. Est commodi aperiam et ut omnis accusantium quia repellendus corrupti. Modi saepe dolore veritatis aut.',
  },
  {
    index: 748,
    bgColor: '#f5f5f5',
    name: 'Norval Heathcote',
    initials: 'NH',
    jobTitle: 'Principal Accountability Agent',
    description: 'Molestiae nesciunt enim facilis laborum est nihil ipsam ut sunt.',
    longText:
      'Illo odio et aut consequatur. A consequuntur nisi. Assumenda repellendus eum atque.',
  },
  {
    index: 749,
    bgColor: 'white',
    name: 'Kendrick Gleichner',
    initials: 'KG',
    jobTitle: 'Investor Markets Producer',
    description:
      'Dolorem aut adipisci libero accusamus asperiores facilis nobis commodi nobis.',
    longText:
      'Pariatur dolor dolor omnis et et tempore eum. Est repellendus officia consequatur labore illum unde quod. Vitae ut sint possimus. Soluta quis voluptate doloribus ut. Odio nulla omnis sint commodi repellat molestiae.',
  },
  {
    index: 750,
    bgColor: '#f5f5f5',
    name: 'Breana Bosco',
    initials: 'BB',
    jobTitle: 'Regional Mobility Producer',
    description:
      'Porro harum sunt dolores ea error velit voluptatum voluptatibus expedita.',
    longText:
      'Quibusdam aut ratione exercitationem incidunt fugit ut quisquam. Voluptas autem omnis est. Libero consequatur rerum dolor et. Vel exercitationem exercitationem non harum sed. Aut cum voluptatem qui molestiae cumque neque sunt ea totam. Corrupti aliquam illum incidunt.',
  },
  {
    index: 751,
    bgColor: 'white',
    name: 'Rachael Adams',
    initials: 'RA',
    jobTitle: 'District Tactics Planner',
    description: 'Et voluptates quod non et perferendis nisi qui blanditiis dignissimos.',
    longText:
      'Ipsa commodi iusto rerum beatae enim et odit. Quod possimus maxime dicta temporibus incidunt est fugiat quia. Non quia reiciendis culpa voluptatem nulla illum dolor dicta rerum.',
  },
  {
    index: 752,
    bgColor: '#f5f5f5',
    name: 'Devyn Pagac',
    initials: 'DP',
    jobTitle: 'Internal Security Representative',
    description: 'Unde occaecati quasi optio quidem eos qui et dignissimos voluptas.',
    longText:
      'Iure corrupti fuga libero. Alias qui architecto magni. Voluptas officiis voluptatem et eligendi id ullam voluptate omnis. Porro natus nam.',
  },
  {
    index: 753,
    bgColor: 'white',
    name: 'Tavares Hodkiewicz',
    initials: 'TH',
    jobTitle: 'National Communications Director',
    description: 'Fugiat aut alias dolorem quo quae ad dolores modi autem.',
    longText:
      'Maiores et rerum. Tempora ut nam architecto et impedit nesciunt iste distinctio autem. Eum quidem porro quia autem dignissimos nesciunt totam ut error.',
  },
  {
    index: 754,
    bgColor: '#f5f5f5',
    name: 'Paige Schoen',
    initials: 'PS',
    jobTitle: 'Forward Infrastructure Liaison',
    description: 'Corrupti vitae corrupti accusamus assumenda quod et aut non et.',
    longText:
      'Qui laborum quia modi voluptatem dolores et voluptas. Consequatur reiciendis rem ullam error. Nemo a reiciendis ab excepturi eos vero est.',
  },
  {
    index: 755,
    bgColor: 'white',
    name: 'Constance Reichert',
    initials: 'CR',
    jobTitle: 'Legacy Accountability Consultant',
    description: 'Ab est vel ipsa dolores et eaque et consequatur ut.',
    longText:
      'Qui voluptate expedita repellendus laboriosam autem. Et aliquam reiciendis. Quae voluptatem dolores nisi culpa consequatur voluptatum. Reiciendis expedita odio numquam voluptas placeat est et. Earum perspiciatis autem soluta aut suscipit commodi saepe facere.',
  },
  {
    index: 756,
    bgColor: '#f5f5f5',
    name: 'Deondre Hayes',
    initials: 'DH',
    jobTitle: 'Global Quality Associate',
    description: 'Excepturi ipsam qui ipsam tempora sapiente a voluptas sit doloribus.',
    longText:
      'Aut aliquam velit. Ducimus reprehenderit quia. Eum temporibus ut quo. Quia iusto enim repellendus dolorum suscipit recusandae officiis non.',
  },
  {
    index: 757,
    bgColor: 'white',
    name: 'Jalen Ledner',
    initials: 'JL',
    jobTitle: 'Regional Mobility Assistant',
    description: 'Dolor unde voluptate et iure dolorem alias officia harum alias.',
    longText:
      'Dolores magnam distinctio est perferendis possimus. Numquam fugiat repellat nemo dolorum qui eum mollitia veniam. Et qui in vitae aut occaecati quae dolorum placeat dolore. Quas sunt explicabo voluptas provident quidem doloribus voluptas enim. Nobis rerum quibusdam officia labore ea velit.',
  },
  {
    index: 758,
    bgColor: '#f5f5f5',
    name: 'Megane Lueilwitz',
    initials: 'ML',
    jobTitle: 'Global Tactics Coordinator',
    description:
      'Vitae aliquid assumenda quaerat assumenda qui a voluptatum qui inventore.',
    longText:
      'Et laudantium voluptas aliquam officiis voluptatem architecto doloremque praesentium. Ad fugit earum facilis doloribus architecto voluptatum corporis id dolor. Facilis autem fugiat explicabo dolor unde ex eum perferendis. Error quia rem voluptatem eveniet laborum. Et et consequatur id.',
  },
  {
    index: 759,
    bgColor: 'white',
    name: 'Hardy Wolf',
    initials: 'HW',
    jobTitle: 'National Quality Producer',
    description: 'Praesentium vel explicabo et nobis voluptas unde odit rem praesentium.',
    longText:
      'Molestiae aut suscipit natus a ipsum error. Suscipit nihil eum. Error distinctio necessitatibus labore est et assumenda sed quas.',
  },
  {
    index: 760,
    bgColor: '#f5f5f5',
    name: 'Alvis Watsica',
    initials: 'AW',
    jobTitle: 'Senior Research Technician',
    description:
      'Ipsa tempora repudiandae mollitia amet labore necessitatibus aut placeat eius.',
    longText:
      'Assumenda sit et qui odio temporibus numquam ut voluptatum eius. Beatae ratione quo perferendis est. Nesciunt totam suscipit.',
  },
  {
    index: 761,
    bgColor: 'white',
    name: 'Kaylin Pfeffer',
    initials: 'KP',
    jobTitle: 'Customer Operations Director',
    description: 'Non soluta quia voluptate distinctio ullam rerum ipsum id eveniet.',
    longText:
      'Facilis laborum neque sunt quia voluptate animi et sapiente eos. Accusantium possimus fuga quos eius beatae in. Reprehenderit cumque quod rerum fuga ut nostrum voluptas. Doloremque voluptas deleniti ipsam aut ipsum.',
  },
  {
    index: 762,
    bgColor: '#f5f5f5',
    name: 'Ken Pagac',
    initials: 'KP',
    jobTitle: 'National Web Producer',
    description: 'Cum esse aut aut dolorum nihil et debitis iusto quod.',
    longText:
      'Est molestias dolores deleniti excepturi. Sed sequi impedit eum doloribus qui. Illo minus aspernatur.',
  },
  {
    index: 763,
    bgColor: 'white',
    name: 'Angelica Stamm',
    initials: 'AS',
    jobTitle: 'Senior Paradigm Consultant',
    description: 'Dignissimos quasi ut non odit enim assumenda iste nostrum illum.',
    longText:
      'Qui alias optio ea repellendus ea. Quia necessitatibus numquam quia sed placeat qui aspernatur fuga. Illo voluptatem non ullam consequatur dicta autem voluptas autem.',
  },
  {
    index: 764,
    bgColor: '#f5f5f5',
    name: 'Alysson Koelpin',
    initials: 'AK',
    jobTitle: 'Human Directives Developer',
    description:
      'Earum repellat unde necessitatibus non est vero optio necessitatibus maiores.',
    longText:
      'Quia quia corporis. Ut aut iusto aut nisi beatae praesentium. Quia voluptatibus dolore a quas. Amet autem delectus repellat et voluptatibus officiis.',
  },
  {
    index: 765,
    bgColor: 'white',
    name: 'Graciela McKenzie',
    initials: 'GM',
    jobTitle: 'Corporate Factors Technician',
    description:
      'Voluptate laborum ut architecto minima consequatur velit tempore rerum quia.',
    longText:
      'Minima consequatur accusantium quis accusantium cupiditate eum minus. Molestiae dolores a ad et repudiandae corrupti placeat. Neque est eum necessitatibus aut omnis necessitatibus praesentium velit vel.',
  },
  {
    index: 766,
    bgColor: '#f5f5f5',
    name: 'Lacy Considine',
    initials: 'LC',
    jobTitle: 'Product Data Strategist',
    description:
      'Vitae omnis et sequi architecto placeat delectus quibusdam dignissimos autem.',
    longText:
      'Ut similique nulla impedit dolorem rem eveniet esse rerum unde. Est necessitatibus deserunt. Quaerat expedita maxime quaerat reprehenderit sunt cum velit et. Omnis et veritatis quia ut. Impedit perferendis temporibus vitae.',
  },
  {
    index: 767,
    bgColor: 'white',
    name: 'Maida Willms',
    initials: 'MW',
    jobTitle: 'Investor Integration Officer',
    description: 'Esse aut et non earum saepe omnis amet facere expedita.',
    longText:
      'Aut modi tempore quae corrupti vel et enim placeat enim. Est amet ex eius similique consequatur non aut. Est nemo velit. Quidem odit eos voluptatum maxime dolorem ut vel itaque voluptas. Et quia possimus similique eum et autem quis voluptas. Possimus ex odit quasi provident occaecati mollitia harum sit.',
  },
  {
    index: 768,
    bgColor: '#f5f5f5',
    name: "Lukas O'Hara",
    initials: 'LO',
    jobTitle: 'Investor Response Executive',
    description: 'Qui rerum quia aut doloremque dolore beatae sit odit dolores.',
    longText:
      'Mollitia eum animi vel ex est illo reiciendis laboriosam culpa. Earum quae quis magnam a nihil vel aliquam aut. Odit distinctio doloribus et voluptas rerum repellendus nesciunt. Blanditiis natus eligendi quo ipsum veniam architecto dolor eius. In dignissimos officiis aut excepturi et omnis optio dolores atque.',
  },
  {
    index: 769,
    bgColor: 'white',
    name: 'Marcellus Schmitt',
    initials: 'MS',
    jobTitle: 'Direct Usability Officer',
    description: 'Iure et id sequi qui deleniti repellat atque beatae nesciunt.',
    longText:
      'Dolor perspiciatis accusamus sapiente officiis corporis qui totam dolor exercitationem. Qui amet doloremque numquam optio sint aut ullam. Ipsum cum repudiandae reprehenderit autem inventore atque ab.',
  },
  {
    index: 770,
    bgColor: '#f5f5f5',
    name: 'Casper Heathcote',
    initials: 'CH',
    jobTitle: 'Direct Markets Representative',
    description:
      'Modi rem consequatur repellat ut assumenda nesciunt aut laudantium atque.',
    longText:
      'Nobis adipisci enim at debitis. Nostrum doloremque voluptatem quidem nihil quia minus modi in eligendi. Magni numquam provident dolore. Eum eum animi eligendi magnam vitae id. Occaecati assumenda et vero error est. Sunt facere laborum asperiores sit qui aliquam in non.',
  },
  {
    index: 771,
    bgColor: 'white',
    name: 'Tristian Stoltenberg',
    initials: 'TS',
    jobTitle: 'Product Interactions Executive',
    description: 'Sed ea exercitationem accusantium ipsum velit et velit sunt at.',
    longText:
      'Nihil aut accusantium voluptates fuga. Amet est qui maxime officia quisquam voluptatibus sapiente. Repudiandae quam quia. Aut itaque eos neque cupiditate eligendi accusamus laboriosam adipisci occaecati. Enim expedita reiciendis praesentium aut nostrum totam quia laudantium omnis. Ea quis atque voluptas ad sed amet.',
  },
  {
    index: 772,
    bgColor: '#f5f5f5',
    name: 'Felicita Bahringer',
    initials: 'FB',
    jobTitle: 'Central Data Engineer',
    description: 'Aliquam maiores est nihil quia distinctio aperiam quia nulla maiores.',
    longText:
      'Est dolores voluptas non aliquam magnam. Quia minus ut laborum tempore architecto. Explicabo omnis dolorum vel ut aut. Beatae est sint exercitationem molestias ut. Doloremque quas ex est aut voluptatem et debitis.',
  },
  {
    index: 773,
    bgColor: 'white',
    name: 'Tamara Medhurst',
    initials: 'TM',
    jobTitle: 'National Solutions Planner',
    description:
      'Voluptatem suscipit provident amet unde voluptatem ipsam sed eos consequatur.',
    longText:
      'Modi voluptatem nisi quia voluptatem esse quia. Eum aut molestiae distinctio id dolorem a voluptas recusandae. Dolorem eum voluptatem veritatis vero voluptatem sunt laboriosam reprehenderit est.',
  },
  {
    index: 774,
    bgColor: '#f5f5f5',
    name: 'Candice Hartmann',
    initials: 'CH',
    jobTitle: 'Dynamic Communications Architect',
    description:
      'Laudantium quae eaque et voluptas accusantium corrupti quos omnis quos.',
    longText:
      'Numquam nobis facilis accusamus nihil aut in. Sit assumenda inventore non et. Dignissimos id harum quo asperiores laboriosam a explicabo. At eos quaerat.',
  },
  {
    index: 775,
    bgColor: 'white',
    name: 'Muhammad Hand',
    initials: 'MH',
    jobTitle: 'Legacy Tactics Technician',
    description: 'Sed culpa veniam quasi omnis aperiam aperiam veritatis non amet.',
    longText:
      'Sapiente sit magnam voluptatem sunt quia est voluptatem ipsum. Amet quam qui mollitia est. Id sint numquam provident ab. Exercitationem sed eaque odit omnis voluptatem iste.',
  },
  {
    index: 776,
    bgColor: '#f5f5f5',
    name: 'Florencio Williamson',
    initials: 'FW',
    jobTitle: 'Senior Data Specialist',
    description: 'Velit distinctio consequatur sit qui quia nam ab doloremque hic.',
    longText:
      'Facilis soluta eius. Qui facere rerum aut asperiores. Est repellendus nostrum temporibus et eveniet. Voluptatem dolores nisi eligendi sed delectus cum commodi magni corporis. Quas omnis facere delectus laborum est. Et et id earum.',
  },
  {
    index: 777,
    bgColor: 'white',
    name: 'Gudrun Gutmann',
    initials: 'GG',
    jobTitle: 'Central Tactics Associate',
    description: 'Error ut at consequatur ea dignissimos et est sed voluptatum.',
    longText:
      'Vel magnam a molestiae quos esse. Earum necessitatibus repudiandae modi sunt cupiditate veniam incidunt. Inventore minus dolores consequatur facere est unde assumenda quasi velit. Voluptatem laudantium reiciendis id consequatur occaecati nostrum vitae ducimus consectetur.',
  },
  {
    index: 778,
    bgColor: '#f5f5f5',
    name: 'Madelyn Reinger',
    initials: 'MR',
    jobTitle: 'District Identity Analyst',
    description:
      'Rerum temporibus adipisci harum eum vel reiciendis quae eum reprehenderit.',
    longText:
      'Mollitia cupiditate minus quis architecto sed dignissimos dolore odio. Et rerum qui. Inventore quae maiores ipsum esse enim consequuntur beatae libero ea. Et deleniti nihil nam enim et. Rerum expedita numquam atque cum facere qui ratione quisquam.',
  },
  {
    index: 779,
    bgColor: 'white',
    name: 'Letha Hermann',
    initials: 'LH',
    jobTitle: 'Global Brand Administrator',
    description: 'Nam ratione iusto ipsa in modi sapiente ut nihil natus.',
    longText:
      'Est quae temporibus reprehenderit est. Omnis aspernatur quae. Dignissimos neque reiciendis. Est deleniti autem architecto earum ea aut consequatur.',
  },
  {
    index: 780,
    bgColor: '#f5f5f5',
    name: 'Golda Mante',
    initials: 'GM',
    jobTitle: 'Investor Response Coordinator',
    description:
      'Explicabo maxime reprehenderit ut quidem est aut accusantium fugiat molestias.',
    longText:
      'Iure facere maiores autem nam placeat maxime nihil. Nobis impedit tempore. Repudiandae et consequatur eos dignissimos quas qui enim.',
  },
  {
    index: 781,
    bgColor: 'white',
    name: 'Madge Lebsack',
    initials: 'ML',
    jobTitle: 'National Research Executive',
    description:
      'Illum rem dolor minima iusto autem voluptatibus rerum incidunt doloremque.',
    longText:
      'Quia non est dolor aliquid numquam minima adipisci. Ducimus ut quis aliquid. Dolore voluptatem molestias veritatis. Non dignissimos a.',
  },
  {
    index: 782,
    bgColor: '#f5f5f5',
    name: 'Cortney Rowe',
    initials: 'CR',
    jobTitle: 'Legacy Marketing Administrator',
    description:
      'Voluptatem vero voluptatibus quaerat est praesentium doloribus sit harum perspiciatis.',
    longText:
      'Sed commodi rem aut est iusto consequatur vero. Eligendi eius accusantium atque ipsam alias saepe perspiciatis ab dolore. Qui amet et dicta facilis culpa. Aut quia non repellendus saepe. Et ut hic odio ea.',
  },
  {
    index: 783,
    bgColor: 'white',
    name: 'Wendy Kulas',
    initials: 'WK',
    jobTitle: 'Regional Brand Engineer',
    description:
      'Quae iste magni atque aut asperiores iure nobis reiciendis accusantium.',
    longText:
      'Sint maxime voluptatem ut reiciendis autem id id ullam dolore. Officiis consectetur et aperiam aut commodi quidem. Dolores amet deleniti quis molestiae. Laboriosam est vero illo et mollitia voluptatem saepe.',
  },
  {
    index: 784,
    bgColor: '#f5f5f5',
    name: 'Mabel Mosciski',
    initials: 'MM',
    jobTitle: 'Senior Web Agent',
    description: 'Molestias incidunt laboriosam quia ut eos et eaque ea quam.',
    longText:
      'Nostrum vitae non in fugiat et rerum nemo omnis. Aliquam doloremque a rerum beatae voluptas rerum voluptas quia. Nostrum debitis modi odio. Dolore blanditiis commodi. Doloremque aliquid reiciendis. Nobis non consequatur voluptate minima suscipit velit veritatis.',
  },
  {
    index: 785,
    bgColor: 'white',
    name: 'Gino Leffler',
    initials: 'GL',
    jobTitle: 'Chief Solutions Strategist',
    description:
      'Sint corporis beatae consectetur totam dolore illum aliquam quaerat quidem.',
    longText:
      'At harum et odio voluptatem harum ut. Et est praesentium consequatur provident consequatur vitae veritatis culpa perspiciatis. Incidunt sed reprehenderit beatae error deserunt molestias. Commodi sit id enim minus quis quo doloribus et. Tempore vero nemo ratione.',
  },
  {
    index: 786,
    bgColor: '#f5f5f5',
    name: 'Shaniya Emmerich',
    initials: 'SE',
    jobTitle: 'Lead Paradigm Consultant',
    description: 'Enim nihil necessitatibus omnis illo est corporis et pariatur eos.',
    longText:
      'Repellat repellendus blanditiis vel aut quia odit. Omnis sint itaque quidem maxime. Maiores eveniet optio rerum nemo natus aspernatur. Ipsa tempore aut omnis voluptatum laudantium pariatur earum neque. Et impedit repellendus voluptatem cupiditate ullam repellendus delectus. Nostrum et quis corrupti unde non illum.',
  },
  {
    index: 787,
    bgColor: 'white',
    name: 'Ubaldo Jenkins',
    initials: 'UJ',
    jobTitle: 'Forward Optimization Assistant',
    description: 'Quidem magnam voluptate doloremque autem velit saepe nihil error sint.',
    longText:
      'Atque soluta et in dolores. Eius quo error omnis. Voluptatum nulla animi eos voluptatem. Libero alias consectetur neque odit ad molestiae. Cupiditate placeat nemo.',
  },
  {
    index: 788,
    bgColor: '#f5f5f5',
    name: 'Leanne Pouros',
    initials: 'LP',
    jobTitle: 'Global Paradigm Architect',
    description:
      'Tempora sunt voluptatibus occaecati saepe quos deleniti suscipit sed illum.',
    longText:
      'Quas reiciendis repudiandae dolores quasi. Minima et et. Officia ut perferendis aut eum qui itaque officiis iste illo.',
  },
  {
    index: 789,
    bgColor: 'white',
    name: 'Laura Blanda',
    initials: 'LB',
    jobTitle: 'Principal Interactions Specialist',
    description: 'Ea voluptas illo et ipsa eveniet asperiores libero ut odio.',
    longText:
      'Vel molestiae adipisci dignissimos molestias dolores quibusdam. Veritatis quos voluptatibus. Voluptas molestiae perspiciatis pariatur. Aut fugiat voluptas perferendis qui est dolorem vero dolor error. Veniam quasi et voluptates inventore vel dignissimos.',
  },
  {
    index: 790,
    bgColor: '#f5f5f5',
    name: 'Zackary Fay',
    initials: 'ZF',
    jobTitle: 'Corporate Assurance Orchestrator',
    description: 'Dolores est sed velit nihil dolores voluptate delectus sint earum.',
    longText:
      'Eos dolorem optio. Aliquid eum odit eius a et. Dolor quas fuga et qui autem qui harum.',
  },
  {
    index: 791,
    bgColor: 'white',
    name: 'Kristofer Hauck',
    initials: 'KH',
    jobTitle: 'Dynamic Data Manager',
    description: 'Ipsum nisi error sunt quaerat repellat ipsum amet quibusdam sapiente.',
    longText:
      'Sit error omnis et. Cumque esse pariatur aut doloremque vero cupiditate minima. Ullam consequatur voluptatem nesciunt nobis.',
  },
  {
    index: 792,
    bgColor: '#f5f5f5',
    name: 'Cruz Kreiger',
    initials: 'CK',
    jobTitle: 'Investor Solutions Executive',
    description: 'Minus maxime eum sed rerum dolor aut labore nemo vero.',
    longText:
      'Vel ut nostrum nihil sunt atque eius molestiae facere. Voluptate explicabo adipisci aut ut. Veniam eum earum facere eveniet qui recusandae incidunt beatae sint. Id cum quo vitae voluptas fugit occaecati et similique.',
  },
  {
    index: 793,
    bgColor: 'white',
    name: 'Clint Legros',
    initials: 'CL',
    jobTitle: 'International Tactics Representative',
    description: 'Sit non esse accusamus tempore non quas porro quis perferendis.',
    longText:
      'Voluptatem incidunt explicabo ratione ratione corporis labore deleniti. Accusantium excepturi ab et voluptatem dolorum. Impedit quaerat ad et maxime. Rem cum aliquam nulla veritatis qui earum.',
  },
  {
    index: 794,
    bgColor: '#f5f5f5',
    name: 'Cary Cartwright',
    initials: 'CC',
    jobTitle: 'Dynamic Quality Liaison',
    description: 'Assumenda ex enim delectus est fugit consectetur omnis qui qui.',
    longText:
      'Tempore neque inventore quam dolorum recusandae amet aut. Ut voluptas possimus. Tenetur velit saepe eius iste. Architecto labore optio. Ipsa rerum voluptatem repudiandae qui labore rem.',
  },
  {
    index: 795,
    bgColor: 'white',
    name: 'Tia Mosciski',
    initials: 'TM',
    jobTitle: 'Chief Security Planner',
    description: 'Mollitia quas nemo et eum ad quia tenetur eligendi aut.',
    longText:
      'Ipsam architecto aut soluta consequatur possimus dolorem. Voluptatem exercitationem omnis odio numquam laborum. Aut numquam error praesentium eum. Quia aut excepturi voluptatem at ut recusandae facilis veniam. Sunt et nemo laborum quia sequi.',
  },
  {
    index: 796,
    bgColor: '#f5f5f5',
    name: 'Morris Mraz',
    initials: 'MM',
    jobTitle: 'Future Research Representative',
    description:
      'Tenetur distinctio corrupti atque fugit voluptate molestias omnis accusamus fuga.',
    longText:
      'Aut dolore beatae tempora odit totam. Dolor magnam atque enim veniam ut reprehenderit quidem maxime quo. Tempora assumenda rerum quia aut et quasi ut. Enim quisquam corrupti id in. Aperiam quae vero mollitia ut non omnis nostrum laborum exercitationem. Dignissimos explicabo iusto debitis rerum hic.',
  },
  {
    index: 797,
    bgColor: 'white',
    name: 'Darian Mante',
    initials: 'DM',
    jobTitle: 'Senior Program Officer',
    description: 'Quos ea deserunt eos aspernatur fugiat qui nostrum aut perferendis.',
    longText:
      'Atque optio voluptatem et. Repellendus cum nulla. Adipisci numquam voluptatem et. Voluptatem ut ipsam.',
  },
  {
    index: 798,
    bgColor: '#f5f5f5',
    name: 'Vincenzo Johnson',
    initials: 'VJ',
    jobTitle: 'Customer Group Supervisor',
    description:
      'Quaerat aut molestiae nihil consequatur nostrum dignissimos est praesentium voluptas.',
    longText:
      'Nemo veniam possimus eveniet qui. Quia recusandae qui enim et vero. Voluptatibus id nisi ex facere deserunt. Quia et eaque delectus aspernatur dolor nam ipsam voluptatem sit. Omnis nihil corporis rem odit cum. Ex veniam molestias at voluptates explicabo voluptates.',
  },
  {
    index: 799,
    bgColor: 'white',
    name: 'Nicholas Mosciski',
    initials: 'NM',
    jobTitle: 'Human Marketing Analyst',
    description: 'Omnis et sint aliquid consequatur quos magnam aut ipsam error.',
    longText:
      'Eaque modi sit assumenda enim ea qui. Cum vero earum ut. Ut reiciendis id dolorum. Vel et repellendus nesciunt vero consequatur aliquid sed aliquid. Veritatis ab distinctio molestiae est et velit.',
  },
  {
    index: 800,
    bgColor: '#f5f5f5',
    name: 'Garland Boyer',
    initials: 'GB',
    jobTitle: 'Direct Web Producer',
    description: 'Sed laudantium velit aut sint cum ratione est et corporis.',
    longText:
      'Ut incidunt ex sed dolorem laborum. Corrupti quis est corporis nesciunt illo et quidem ut. Totam voluptate doloremque tempora quibusdam velit et omnis est eos.',
  },
  {
    index: 801,
    bgColor: 'white',
    name: 'Delbert Dibbert',
    initials: 'DD',
    jobTitle: 'Principal Identity Producer',
    description:
      'Qui molestiae at temporibus optio excepturi maiores harum assumenda voluptatum.',
    longText:
      'Iste velit et quae ut minus sint non aut libero. Molestiae est nesciunt iusto et. Nesciunt dolores vitae autem velit ut ab vero nesciunt rerum. Architecto minus asperiores officia nihil repellendus odio at. Ipsa ea at repudiandae aperiam fuga neque labore.',
  },
  {
    index: 802,
    bgColor: '#f5f5f5',
    name: "Carolanne O'Hara",
    initials: 'CO',
    jobTitle: 'Dynamic Directives Architect',
    description:
      'Dicta accusantium error molestiae non eveniet quia fugit accusamus maiores.',
    longText:
      'Voluptate sint velit. Rerum aut repellendus ut provident non. Est corrupti dolorum doloremque id fuga non voluptates. Et voluptatum cumque reiciendis saepe quo ad sint. Et nobis aut. Et sapiente quia repudiandae alias ipsa.',
  },
  {
    index: 803,
    bgColor: 'white',
    name: 'Jaylon Morar',
    initials: 'JM',
    jobTitle: 'Central Creative Agent',
    description: 'Natus cumque facere dolores ut maiores deserunt dolorum rerum amet.',
    longText:
      'Quibusdam minima blanditiis adipisci excepturi rerum. Maxime nisi id. Doloribus id omnis neque aut voluptas error cumque earum.',
  },
  {
    index: 804,
    bgColor: '#f5f5f5',
    name: 'Melisa Collins',
    initials: 'MC',
    jobTitle: 'Dynamic Identity Representative',
    description:
      'Voluptatum veritatis omnis veritatis sunt voluptas nesciunt et occaecati minima.',
    longText:
      'Porro quae tenetur voluptatem occaecati maiores similique. Vel enim doloremque at fugit consequatur molestiae. Nihil eligendi nihil fugiat quod est. Et maxime praesentium.',
  },
  {
    index: 805,
    bgColor: 'white',
    name: 'Nelda Rodriguez',
    initials: 'NR',
    jobTitle: 'International Security Coordinator',
    description:
      'Voluptatum dolores quisquam eos aspernatur repellat doloremque dolorem ex hic.',
    longText:
      'Provident ab sed repudiandae sint recusandae quis repudiandae accusamus. Illum possimus vel asperiores sed aspernatur sequi labore. Assumenda dolorem labore et voluptas. Aliquid dolores beatae quasi quaerat. Ab qui voluptate facilis error nostrum. Ut incidunt debitis qui.',
  },
  {
    index: 806,
    bgColor: '#f5f5f5',
    name: 'Jevon Runte',
    initials: 'JR',
    jobTitle: 'Human Data Developer',
    description:
      'Inventore repellat est veniam tempore cupiditate est consectetur et omnis.',
    longText:
      'Molestiae et minus porro ut numquam iusto dignissimos aliquid. Temporibus quas beatae dolores ut dicta consequatur aspernatur. Iusto libero vero sit maiores cum placeat rerum. Fugiat sed illum accusamus. Nihil eos saepe.',
  },
  {
    index: 807,
    bgColor: 'white',
    name: 'Osvaldo Maggio',
    initials: 'OM',
    jobTitle: 'National Identity Liaison',
    description:
      'Doloribus non accusamus illo dolor aperiam iusto rerum assumenda fugit.',
    longText:
      'Qui incidunt qui magnam iure sequi aperiam quis repudiandae. Corporis assumenda et in possimus repellat consequatur officia aut aliquam. Rem amet doloremque veniam eveniet voluptatibus. Eum nulla ducimus libero in hic nobis ut eos sed.',
  },
  {
    index: 808,
    bgColor: '#f5f5f5',
    name: 'Valentina Parker',
    initials: 'VP',
    jobTitle: 'Customer Security Engineer',
    description: 'Voluptatem minus neque non quod soluta velit id adipisci quia.',
    longText:
      'Cupiditate voluptate natus. Error et eius optio atque velit doloremque. Optio omnis quo occaecati adipisci rem amet aut ut. Error eaque qui.',
  },
  {
    index: 809,
    bgColor: 'white',
    name: 'Summer Brakus',
    initials: 'SB',
    jobTitle: 'Direct Solutions Architect',
    description: 'Et saepe et facere commodi nulla amet ut autem dolorem.',
    longText:
      'Nisi itaque qui. Debitis dolor veritatis odit nobis ipsum vero ipsam velit. Reiciendis animi ut.',
  },
  {
    index: 810,
    bgColor: '#f5f5f5',
    name: 'Omer Watsica',
    initials: 'OW',
    jobTitle: 'National Directives Engineer',
    description: 'Ea rem ex ipsum quidem molestiae ut qui ex assumenda.',
    longText:
      'Aliquam ut totam iure. Velit sit minus illum enim molestiae quia molestiae repellendus. Culpa similique in. Rem accusamus autem id.',
  },
  {
    index: 811,
    bgColor: 'white',
    name: 'Dandre Nader',
    initials: 'DN',
    jobTitle: 'Lead Security Consultant',
    description: 'Sed maxime velit sunt aut praesentium aut magni quia autem.',
    longText:
      'Odit molestiae ut quia sed dolorum laudantium tempora qui. Assumenda sint rem debitis ad saepe qui tempore culpa. Aperiam necessitatibus vero ea aliquam cum qui neque perferendis eos.',
  },
  {
    index: 812,
    bgColor: '#f5f5f5',
    name: 'General Conroy',
    initials: 'GC',
    jobTitle: 'Senior Accountability Agent',
    description: 'Magni soluta est est est ea modi dolorem blanditiis ut.',
    longText:
      'Consequatur molestias error nulla reprehenderit libero. Suscipit nihil maiores. Asperiores nam aut exercitationem atque sint ut laborum tenetur saepe. Dicta doloremque unde. Illum facilis voluptate error enim. Sint molestiae et repellat aspernatur quis eum voluptatem.',
  },
  {
    index: 813,
    bgColor: 'white',
    name: 'Edyth Smitham',
    initials: 'ES',
    jobTitle: 'Future Operations Architect',
    description: 'Qui quis sit iure quia pariatur ratione quibusdam saepe ullam.',
    longText:
      'Perferendis eos voluptatem pariatur nobis libero pariatur dolores. Impedit minima et consequatur voluptate blanditiis eius qui. Et consequuntur quis ut perspiciatis doloremque. Impedit cupiditate facere ullam necessitatibus blanditiis quisquam labore itaque et. Soluta voluptatem tempora quidem porro debitis molestias incidunt unde.',
  },
  {
    index: 814,
    bgColor: '#f5f5f5',
    name: 'Deondre Cremin',
    initials: 'DC',
    jobTitle: 'District Communications Technician',
    description: 'Ut maiores delectus est enim itaque suscipit ab labore rerum.',
    longText: 'Non est aut. Odio impedit ut maxime quam. Alias sunt laborum.',
  },
  {
    index: 815,
    bgColor: 'white',
    name: 'Julio Emmerich',
    initials: 'JE',
    jobTitle: 'Legacy Brand Executive',
    description: 'Quis autem qui soluta est corporis adipisci ipsa quo iure.',
    longText:
      'Nemo ut officiis consectetur et incidunt sed voluptas. Qui aliquam officia aut dolores beatae. Expedita amet laborum molestiae non.',
  },
  {
    index: 816,
    bgColor: '#f5f5f5',
    name: 'Saul Gusikowski',
    initials: 'SG',
    jobTitle: 'Corporate Configuration Planner',
    description: 'Non quibusdam est aperiam vitae aut nemo qui saepe blanditiis.',
    longText:
      'Distinctio officia itaque in. Magnam rerum soluta aut sed sint consectetur ut non. Earum magnam accusamus eaque. Corrupti voluptatem sunt. Nobis saepe labore in porro aut ea praesentium. Autem ullam molestias id non consequatur optio.',
  },
  {
    index: 817,
    bgColor: 'white',
    name: 'Jayda Kunde',
    initials: 'JK',
    jobTitle: 'District Factors Producer',
    description:
      'Et eum quos perspiciatis consequatur molestias iusto aut vero delectus.',
    longText:
      'Enim sed optio velit assumenda in recusandae quia sunt magni. Error fugiat aspernatur autem non. Aut velit soluta autem culpa. A molestias soluta non blanditiis molestiae aut. Fugiat repellendus vel enim asperiores et aut. Saepe iste expedita aliquid numquam voluptas.',
  },
  {
    index: 818,
    bgColor: '#f5f5f5',
    name: 'Felicity Cruickshank',
    initials: 'FC',
    jobTitle: 'Principal Factors Supervisor',
    description: 'Ut ex tenetur ea adipisci quidem sequi repudiandae a fuga.',
    longText:
      'Est numquam hic. Amet ut et veniam et cum dicta. Est consequatur cum aut rem consequatur alias sint rerum. Possimus nobis non alias earum dolorem.',
  },
  {
    index: 819,
    bgColor: 'white',
    name: 'Romaine Ward',
    initials: 'RW',
    jobTitle: 'Forward Branding Liaison',
    description: 'Sed similique fugiat id rem qui dignissimos soluta dolor dolorem.',
    longText:
      'Commodi veritatis iusto qui qui voluptates et. Et similique enim nobis aliquam aperiam minima placeat modi adipisci. Saepe esse quo voluptatum possimus doloribus.',
  },
  {
    index: 820,
    bgColor: '#f5f5f5',
    name: 'Bella Watsica',
    initials: 'BW',
    jobTitle: 'Chief Paradigm Orchestrator',
    description: 'Nam voluptatum iure quae quisquam rerum ea aut ducimus officia.',
    longText:
      'Quia vero quos. Quisquam et rerum architecto nisi nam delectus laborum. Vitae dicta cumque ea officia.',
  },
  {
    index: 821,
    bgColor: 'white',
    name: 'Bradly Bogisich',
    initials: 'BB',
    jobTitle: 'Regional Security Executive',
    description:
      'Consequatur eligendi nobis dolores illum praesentium pariatur fugit ut ut.',
    longText:
      'Quaerat qui id dolorem a et asperiores porro. Aut voluptatem sed neque et. Repellat eveniet repellat. Enim qui consequuntur aut dignissimos libero porro.',
  },
  {
    index: 822,
    bgColor: '#f5f5f5',
    name: 'Chanelle Rippin',
    initials: 'CR',
    jobTitle: 'Dynamic Infrastructure Planner',
    description:
      'Et et reiciendis voluptatem ex laborum nostrum autem expedita voluptatem.',
    longText:
      'Laborum quasi eos consequatur. Error aliquam incidunt molestias fugiat veniam voluptatibus vel. Qui est libero. Voluptatibus quae sint. Voluptas tenetur sed aut temporibus numquam et repellendus molestiae. Est ipsum fugiat et odit ea quas quasi.',
  },
  {
    index: 823,
    bgColor: 'white',
    name: 'Demond Krajcik',
    initials: 'DK',
    jobTitle: 'Human Operations Officer',
    description: 'Velit ducimus aliquam repellendus quo est ad aliquid esse et.',
    longText:
      'Non ducimus quis quia repudiandae reprehenderit illum enim beatae perspiciatis. Tempore velit enim eligendi dignissimos veritatis. Voluptatem commodi culpa ut repudiandae vitae quam illo. Voluptatem sint iste fugiat adipisci voluptas omnis non. Enim alias non sed veritatis ut.',
  },
  {
    index: 824,
    bgColor: '#f5f5f5',
    name: 'Hector Hermiston',
    initials: 'HH',
    jobTitle: 'Regional Configuration Director',
    description: 'Et rerum autem rem voluptas eum provident ut accusantium officiis.',
    longText:
      'Quia tempora ab expedita voluptas sint at qui aut. Ut quos consectetur esse dolorum. Ad et sequi nam sed dolorum veritatis nam molestiae. Rerum non ex sit.',
  },
  {
    index: 825,
    bgColor: 'white',
    name: 'Devonte Adams',
    initials: 'DA',
    jobTitle: 'Senior Interactions Architect',
    description:
      'Quo voluptas animi numquam quia quisquam voluptas modi voluptatem reprehenderit.',
    longText:
      'Voluptates repellat sit voluptas recusandae. Et consequatur ut non. Voluptates repudiandae fugit expedita illo amet commodi eaque nemo. Exercitationem et molestiae ut. Laboriosam et sit provident fugiat. Perferendis sunt deserunt non.',
  },
  {
    index: 826,
    bgColor: '#f5f5f5',
    name: 'Oran MacGyver',
    initials: 'OM',
    jobTitle: 'District Functionality Engineer',
    description: 'Voluptatum rerum vitae saepe cum id dolorem laboriosam delectus dolor.',
    longText:
      'Deserunt facilis exercitationem. Dolor cum veritatis cupiditate. Quo et ipsum aliquid tempore quas. Recusandae vero veniam ducimus.',
  },
  {
    index: 827,
    bgColor: 'white',
    name: 'Shanna Carter',
    initials: 'SC',
    jobTitle: 'Dynamic Optimization Director',
    description: 'Ad sint delectus facilis libero non quae et temporibus eligendi.',
    longText:
      'Aliquam porro fugit similique perspiciatis laborum. Maiores ut ut ut maiores ratione ut consequatur. Possimus tempora quis.',
  },
  {
    index: 828,
    bgColor: '#f5f5f5',
    name: 'Sebastian Hartmann',
    initials: 'SH',
    jobTitle: 'District Mobility Director',
    description: 'At nam laborum consequatur eos magni laudantium quasi vitae sit.',
    longText:
      'Quibusdam et saepe voluptates ut tenetur aut odit qui dolores. Dolores mollitia beatae similique. Fugit velit asperiores aut aut molestias possimus.',
  },
  {
    index: 829,
    bgColor: 'white',
    name: 'August Kirlin',
    initials: 'AK',
    jobTitle: 'Investor Group Liaison',
    description: 'Sint commodi modi veritatis suscipit ex veritatis ut sit et.',
    longText:
      'Eligendi est officia cupiditate est qui voluptatem sint. Quas delectus cum non perferendis vero repellat harum. Excepturi accusamus aut voluptatem.',
  },
  {
    index: 830,
    bgColor: '#f5f5f5',
    name: 'Boyd Kovacek',
    initials: 'BK',
    jobTitle: 'Customer Brand Orchestrator',
    description: 'Incidunt vel officiis velit non nihil et quia facilis explicabo.',
    longText:
      'In aut explicabo veniam omnis reiciendis. Magni numquam et sed unde accusantium laudantium voluptas quas. Labore incidunt est maiores quod quo et dolorum. Voluptas doloribus et. Quaerat qui amet repellendus aut dicta quod et adipisci. Consectetur ipsam minus culpa possimus quia dicta minus illum.',
  },
  {
    index: 831,
    bgColor: 'white',
    name: 'Laurel Harris',
    initials: 'LH',
    jobTitle: 'Central Marketing Agent',
    description:
      'Quaerat rerum saepe consequuntur debitis omnis voluptatibus accusantium qui distinctio.',
    longText:
      'Non id asperiores esse sint et harum soluta omnis. Sed voluptate occaecati omnis consequatur autem assumenda sed numquam. Voluptas quas quam nobis maiores amet molestias. Quia id magni voluptate eum repellat dolor placeat eaque. Quidem quis ipsam et voluptatum ut.',
  },
  {
    index: 832,
    bgColor: '#f5f5f5',
    name: 'Anahi Thiel',
    initials: 'AT',
    jobTitle: 'Human Paradigm Associate',
    description:
      'Dolore eos molestiae beatae fugit aut maxime pariatur consequatur vitae.',
    longText:
      'Illum nisi veritatis animi dolor natus. Sapiente sapiente in necessitatibus iste recusandae eum expedita quia. Vel voluptates iusto quas.',
  },
  {
    index: 833,
    bgColor: 'white',
    name: 'Aditya Durgan',
    initials: 'AD',
    jobTitle: 'Internal Response Developer',
    description:
      'Eum ipsum nisi necessitatibus hic corrupti quo rerum consequuntur incidunt.',
    longText:
      'Aut debitis nam vitae est possimus voluptates dolor. Nisi quia a aut et dolor. Reprehenderit sint maiores saepe doloribus qui sapiente in ullam dolor. Rerum nihil aliquid nam recusandae. Voluptates quisquam et at. Eius sit voluptatem ex voluptatem architecto.',
  },
  {
    index: 834,
    bgColor: '#f5f5f5',
    name: 'Agustin Kub',
    initials: 'AK',
    jobTitle: 'Principal Data Supervisor',
    description:
      'Maxime numquam harum quibusdam dicta veniam quo dolor commodi molestias.',
    longText:
      'Eligendi laudantium sit repellendus vero. Labore quod ut voluptas facilis sed quas quibusdam. Odit consectetur esse fugiat inventore inventore et repellat earum nam. Laborum quia iste. Rerum libero id totam aperiam sed dolorem in rem.',
  },
  {
    index: 835,
    bgColor: 'white',
    name: 'Gardner Kuhic',
    initials: 'GK',
    jobTitle: 'Principal Metrics Engineer',
    description: 'Sed voluptates et neque modi iure culpa qui enim tempore.',
    longText:
      'Qui numquam est quo. Optio molestiae quasi blanditiis voluptas aperiam dignissimos soluta sit. Error aliquam rerum sint. Itaque provident officiis animi fuga qui vero. Tenetur doloribus autem ipsa consequuntur amet rem rerum adipisci qui. Et et esse.',
  },
  {
    index: 836,
    bgColor: '#f5f5f5',
    name: 'Gloria Raynor',
    initials: 'GR',
    jobTitle: 'International Marketing Coordinator',
    description: 'Sapiente fugiat iure nam eum ea voluptatum qui alias debitis.',
    longText:
      'Esse odit fugiat doloremque pariatur maiores rerum non alias est. Earum consectetur cumque sequi. Dolore molestiae iste impedit nam non qui consequatur.',
  },
  {
    index: 837,
    bgColor: 'white',
    name: 'Wallace Brown',
    initials: 'WB',
    jobTitle: 'Forward Applications Agent',
    description: 'In aut qui temporibus eos deserunt rerum officiis quia autem.',
    longText:
      'Molestiae et quos labore architecto nihil. Voluptates sunt optio corrupti nam dolorum. Cum rerum odit quas officia doloremque molestiae.',
  },
  {
    index: 838,
    bgColor: '#f5f5f5',
    name: 'Ambrose Johnson',
    initials: 'AJ',
    jobTitle: 'Human Communications Architect',
    description: 'Possimus omnis et sequi doloribus iure maiores in labore doloremque.',
    longText:
      'Voluptatem id tenetur soluta consequatur corrupti culpa. Aliquid vero accusantium dolorem cupiditate aspernatur beatae. Cupiditate aperiam eum delectus non explicabo sed exercitationem atque. Magni delectus nesciunt veniam ducimus et a laudantium repellat temporibus. Dicta debitis veritatis dolore animi atque.',
  },
  {
    index: 839,
    bgColor: 'white',
    name: 'Adele Aufderhar',
    initials: 'AA',
    jobTitle: 'Human Metrics Officer',
    description:
      'Et iusto necessitatibus iusto qui tempore dolorem libero omnis commodi.',
    longText:
      'Et et et reiciendis labore consectetur. Ab eveniet ipsa ducimus molestiae. Ad quibusdam ex doloribus et voluptatem aut aperiam.',
  },
  {
    index: 840,
    bgColor: '#f5f5f5',
    name: 'Jonathan Morar',
    initials: 'JM',
    jobTitle: 'Future Data Agent',
    description: 'Hic odio ratione qui earum veritatis similique odio sit eum.',
    longText:
      'Velit illo animi atque aliquam. Qui libero modi est quae rerum mollitia nisi totam. Nisi sit fugit odit quis voluptatem omnis. Molestiae non sunt cumque iusto. Ullam molestias cum recusandae adipisci et repellendus odit quos tempore. Iure qui et quod eos in consequuntur nam ut dolores.',
  },
  {
    index: 841,
    bgColor: 'white',
    name: 'Conor Prosacco',
    initials: 'CP',
    jobTitle: 'Human Group Producer',
    description: 'Id illo architecto accusamus ab voluptatibus in dolores ut ea.',
    longText:
      'Suscipit nam temporibus inventore molestiae omnis voluptates et. Rerum vel eius voluptatem voluptate ullam repellat voluptas hic aut. Aspernatur eum voluptatem dolorem assumenda qui ut. Reprehenderit sit tempora impedit laboriosam.',
  },
  {
    index: 842,
    bgColor: '#f5f5f5',
    name: 'Lenny Bruen',
    initials: 'LB',
    jobTitle: 'Product Markets Director',
    description: 'Harum dicta eligendi fugit expedita harum nisi nemo porro omnis.',
    longText:
      'Dolorem nesciunt eveniet est esse consequuntur quis. Expedita laudantium dolores corrupti exercitationem aut qui magni distinctio. Sapiente dolore ratione praesentium impedit molestias. Dolorem at voluptatem qui velit illo.',
  },
  {
    index: 843,
    bgColor: 'white',
    name: 'Willis Friesen',
    initials: 'WF',
    jobTitle: 'Senior Identity Strategist',
    description: 'Quam incidunt expedita provident culpa cum vel vel tempore dolor.',
    longText:
      'Velit accusamus maxime ut temporibus. Molestiae accusamus totam recusandae. Non rerum aut quod aperiam.',
  },
  {
    index: 844,
    bgColor: '#f5f5f5',
    name: 'Annalise Heller',
    initials: 'AH',
    jobTitle: 'Investor Marketing Engineer',
    description:
      'Occaecati dolorem deserunt facere ut corporis sint consequuntur sint earum.',
    longText:
      'Sed expedita voluptates quis. Quos sunt repellat. Voluptatibus praesentium occaecati minus voluptate aliquid omnis.',
  },
  {
    index: 845,
    bgColor: 'white',
    name: 'Trudie Dooley',
    initials: 'TD',
    jobTitle: 'Global Quality Engineer',
    description: 'Quasi possimus unde cupiditate aut non non ad maxime et.',
    longText:
      'Aperiam officia dolor ut et sapiente in corrupti quidem. Aut praesentium ea ex autem nulla voluptates incidunt dolores cum. Expedita quia est.',
  },
  {
    index: 846,
    bgColor: '#f5f5f5',
    name: 'Arvilla Kunde',
    initials: 'AK',
    jobTitle: 'District Tactics Associate',
    description: 'Quidem amet autem aut error inventore dolores ea omnis ipsam.',
    longText:
      'Cum tempora accusamus molestias dignissimos beatae in soluta. Temporibus excepturi incidunt officiis consequuntur id non vel. Aut inventore quis sed. Quo iste cupiditate a non deserunt rem facilis ipsum.',
  },
  {
    index: 847,
    bgColor: 'white',
    name: 'Simone Parisian',
    initials: 'SP',
    jobTitle: 'Customer Markets Officer',
    description:
      'Nobis nobis provident architecto temporibus voluptas velit et praesentium natus.',
    longText:
      'Molestiae qui sed fugit ex facere distinctio. Aut nostrum reprehenderit aspernatur ut deleniti enim libero. Incidunt autem eligendi fugiat illo aliquid doloribus tenetur neque consequatur.',
  },
  {
    index: 848,
    bgColor: '#f5f5f5',
    name: 'Samir Medhurst',
    initials: 'SM',
    jobTitle: 'Chief Web Strategist',
    description: 'Nulla sequi vero aliquid sunt quis atque culpa illum voluptates.',
    longText:
      'Vel eveniet deserunt ullam tenetur quae. Qui inventore earum a voluptatem rem ut maxime. Modi vel velit sit accusantium commodi officia omnis nihil nihil.',
  },
  {
    index: 849,
    bgColor: 'white',
    name: 'Mona Lebsack',
    initials: 'ML',
    jobTitle: 'Corporate Assurance Facilitator',
    description:
      'Voluptatum assumenda officia impedit ipsum quod praesentium dolorum in laboriosam.',
    longText:
      'Sint blanditiis sapiente. Recusandae blanditiis qui veniam. Dicta vel reiciendis. Exercitationem facilis aspernatur reprehenderit. Aut libero dolor voluptate quo qui non tempora voluptas dolor.',
  },
  {
    index: 850,
    bgColor: '#f5f5f5',
    name: 'Tierra Rowe',
    initials: 'TR',
    jobTitle: 'Customer Directives Facilitator',
    description: 'Dolores dolores recusandae omnis neque debitis id eos sunt libero.',
    longText:
      'Reiciendis nemo minima ut. Omnis voluptate optio. Voluptas voluptatem magnam. Assumenda non quibusdam recusandae soluta ullam labore.',
  },
  {
    index: 851,
    bgColor: 'white',
    name: 'Hilario Effertz',
    initials: 'HE',
    jobTitle: 'Investor Data Specialist',
    description:
      'Suscipit et ad molestiae magnam repellendus necessitatibus laudantium itaque omnis.',
    longText:
      'Quia vel sequi libero facilis impedit accusamus veniam labore sed. Accusamus magni laborum nam accusantium esse quia ut in harum. Inventore veniam in vitae sed illum laudantium ullam. Delectus delectus tempora architecto id explicabo nulla.',
  },
  {
    index: 852,
    bgColor: '#f5f5f5',
    name: 'Abdiel Considine',
    initials: 'AC',
    jobTitle: 'Direct Paradigm Director',
    description: 'Enim et quo nulla a et temporibus corporis impedit amet.',
    longText:
      'Inventore aspernatur qui occaecati adipisci nesciunt. Ut cum incidunt molestiae dignissimos quas eligendi et et voluptatibus. Harum reiciendis excepturi ab voluptate excepturi magnam. Ducimus numquam beatae mollitia. Blanditiis aut commodi enim facere quis eveniet eligendi voluptas.',
  },
  {
    index: 853,
    bgColor: 'white',
    name: 'Karlee Strosin',
    initials: 'KS',
    jobTitle: 'International Response Technician',
    description: 'Aut non explicabo recusandae aliquid et ut aut qui dolores.',
    longText:
      'Porro quo ipsum autem ex velit. Illum et deleniti exercitationem est distinctio a laborum possimus. Recusandae veniam ipsam excepturi est est. Alias cupiditate sed et.',
  },
  {
    index: 854,
    bgColor: '#f5f5f5',
    name: 'Stewart Ullrich',
    initials: 'SU',
    jobTitle: 'Central Markets Strategist',
    description:
      'Veritatis eum velit alias tempora quo excepturi voluptatibus qui totam.',
    longText:
      'Sed repudiandae esse. Magni et qui voluptatem optio excepturi natus autem minus. Dolore dolorem vel. Dolores sint quia dolorum deleniti est assumenda. Minus ad aliquam enim voluptatum aut.',
  },
  {
    index: 855,
    bgColor: 'white',
    name: 'Cindy Koss',
    initials: 'CK',
    jobTitle: 'Central Usability Manager',
    description: 'Pariatur et ut tenetur sed modi delectus quo accusantium dolores.',
    longText:
      'Rerum nisi iure harum temporibus totam voluptate itaque. Harum quaerat ut. Consequatur minus et et nam dolorum quis veniam asperiores. Neque incidunt non nam nostrum qui accusamus quibusdam. Repellendus non est id doloribus officia modi autem sit.',
  },
  {
    index: 856,
    bgColor: '#f5f5f5',
    name: 'Jany Botsford',
    initials: 'JB',
    jobTitle: 'Corporate Accountability Representative',
    description: 'Eos repudiandae ex quam tenetur suscipit quis delectus et libero.',
    longText:
      'Beatae quod et nihil hic laboriosam dolorum quisquam nihil. Quia dicta incidunt eum laborum suscipit culpa voluptatum dicta alias. Labore quam maiores est doloremque repellendus et accusantium occaecati ipsa. Consectetur et omnis consequuntur ipsa. Adipisci repellat tempore exercitationem quibusdam adipisci. Nesciunt vel placeat.',
  },
  {
    index: 857,
    bgColor: 'white',
    name: 'Alison Kertzmann',
    initials: 'AK',
    jobTitle: 'International Accounts Associate',
    description:
      'Molestiae ab reprehenderit earum expedita dolores voluptas tempore tenetur quibusdam.',
    longText:
      'Qui architecto et illum ut dolorem laudantium eos aut. Perspiciatis nulla voluptatum. Itaque dignissimos rerum est. Debitis ad impedit. Molestias dolores magnam ex alias soluta est dolore.',
  },
  {
    index: 858,
    bgColor: '#f5f5f5',
    name: 'Annetta Spencer',
    initials: 'AS',
    jobTitle: 'Dynamic Metrics Orchestrator',
    description: 'Commodi asperiores qui dolor et dolor deserunt minima officiis quidem.',
    longText:
      'Qui amet exercitationem ad. Ipsum iste ratione accusantium illo perferendis. Qui praesentium et vitae dolor rerum voluptatum nihil commodi. Voluptas tenetur ut quasi recusandae id sunt magnam quod.',
  },
  {
    index: 859,
    bgColor: 'white',
    name: 'Dean Hermiston',
    initials: 'DH',
    jobTitle: 'District Intranet Representative',
    description: 'Aspernatur ut cum praesentium laudantium quis sit quam culpa totam.',
    longText:
      'Ducimus perspiciatis quasi placeat. Qui et aut quis adipisci debitis deleniti. Culpa commodi sed ab nemo blanditiis laborum et eos velit. Odit magni aut molestias unde soluta id quia excepturi architecto.',
  },
  {
    index: 860,
    bgColor: '#f5f5f5',
    name: 'Kiara Miller',
    initials: 'KM',
    jobTitle: 'Future Factors Strategist',
    description: 'Placeat odio assumenda minus quis quod et veritatis quasi corrupti.',
    longText:
      'Et esse id sunt odio tenetur qui asperiores. Beatae id eligendi omnis laudantium suscipit odit. Voluptas tempora quas numquam pariatur molestias earum. Ex vero qui debitis fugit fugit in in.',
  },
  {
    index: 861,
    bgColor: 'white',
    name: 'Annette Heller',
    initials: 'AH',
    jobTitle: 'Central Interactions Agent',
    description: 'Cumque culpa aliquam aut nisi soluta architecto officia sit eum.',
    longText:
      'Omnis vitae placeat voluptas dignissimos adipisci pariatur consequatur autem necessitatibus. Atque molestias ut est atque iste qui. Labore quia iusto voluptas maxime quae et. Adipisci quia nulla ullam est vitae sunt. Est consequatur minus aut.',
  },
  {
    index: 862,
    bgColor: '#f5f5f5',
    name: 'Ruben McDermott',
    initials: 'RM',
    jobTitle: 'Forward Creative Representative',
    description:
      'Natus quod sunt ducimus aperiam neque sequi veniam necessitatibus enim.',
    longText:
      'Reiciendis eos et laborum dignissimos repellat quia non. Enim eum esse possimus. Fugiat laboriosam voluptatum expedita ut vitae nam aut. Esse ea consequuntur maiores tempora nesciunt et explicabo. Nesciunt expedita omnis dolore nesciunt voluptatibus porro. Repellat officiis accusantium quis exercitationem ad nobis sunt atque adipisci.',
  },
  {
    index: 863,
    bgColor: 'white',
    name: 'Keshawn Braun',
    initials: 'KB',
    jobTitle: 'Corporate Mobility Coordinator',
    description: 'Facere itaque sed sit quasi corporis natus aut vero veritatis.',
    longText:
      'Similique facere sapiente. Consequuntur sunt voluptates in sequi sed repudiandae aliquid. Reprehenderit enim aliquam assumenda.',
  },
  {
    index: 864,
    bgColor: '#f5f5f5',
    name: 'Anahi Crooks',
    initials: 'AC',
    jobTitle: 'Product Solutions Agent',
    description:
      'Eligendi provident quasi recusandae quo facere consequuntur laboriosam molestias voluptas.',
    longText:
      'Ullam omnis autem. Voluptatem vitae omnis aut error et suscipit et est eveniet. Ut ab architecto assumenda dolor autem.',
  },
  {
    index: 865,
    bgColor: 'white',
    name: 'Sterling Zboncak',
    initials: 'SZ',
    jobTitle: 'Dynamic Configuration Administrator',
    description:
      'Quaerat molestiae fuga voluptas explicabo dolorum corporis doloremque accusantium aut.',
    longText:
      'Unde quis et saepe tempore tempora sit blanditiis. Ut alias earum autem tenetur eaque eum odio. Asperiores maiores quisquam voluptatum.',
  },
  {
    index: 866,
    bgColor: '#f5f5f5',
    name: 'Obie McClure',
    initials: 'OM',
    jobTitle: 'Forward Research Assistant',
    description: 'Aut eligendi eos qui quas enim amet temporibus alias dolore.',
    longText:
      'Voluptatum non ut excepturi vel voluptatem eius assumenda. Quia est incidunt repellat voluptatem quasi nobis qui molestiae. Quae esse consequatur minus. Amet non magnam. Autem ea est sint magni. Dolor ut voluptatem beatae deleniti sint sed.',
  },
  {
    index: 867,
    bgColor: 'white',
    name: 'Lonny Gleichner',
    initials: 'LG',
    jobTitle: 'Lead Marketing Architect',
    description: 'Qui dolores suscipit voluptatem voluptatum id incidunt et est quo.',
    longText:
      'Ut nihil non voluptates veniam aliquid et adipisci id quaerat. Eos in sed beatae eum dignissimos nam qui similique aut. Cumque ducimus architecto soluta omnis nobis nisi quis. Dolores iure sint et laboriosam.',
  },
  {
    index: 868,
    bgColor: '#f5f5f5',
    name: 'Betty Dare',
    initials: 'BD',
    jobTitle: 'Global Creative Associate',
    description: 'Sit consequatur consequatur eum id hic aut quisquam ut laboriosam.',
    longText:
      'Officia corporis recusandae corporis beatae eos dicta fuga sint rem. Laboriosam et dolores quis. Nihil ut aut et. Porro optio enim rerum itaque adipisci consequatur repudiandae.',
  },
  {
    index: 869,
    bgColor: 'white',
    name: 'Keegan Bailey',
    initials: 'KB',
    jobTitle: 'Senior Directives Director',
    description:
      'Eveniet commodi blanditiis assumenda perferendis sed illum est tempore aperiam.',
    longText:
      'Eveniet qui voluptas ea. Eos odio velit quod. Earum corporis optio et sed laudantium placeat. Quia dicta delectus temporibus quia similique. Sed doloribus suscipit. Reprehenderit est reprehenderit veniam sequi dolor omnis.',
  },
  {
    index: 870,
    bgColor: '#f5f5f5',
    name: 'Cleora Cassin',
    initials: 'CC',
    jobTitle: 'Dynamic Data Director',
    description: 'Qui porro ut consequatur excepturi odio deleniti officiis animi quasi.',
    longText:
      'Impedit praesentium debitis. Expedita aut qui consequatur modi doloribus delectus. Neque nisi voluptate nostrum ullam provident sequi rerum. Voluptates adipisci quod voluptates rerum minus vel. Quam ut qui.',
  },
  {
    index: 871,
    bgColor: 'white',
    name: 'Don Bode',
    initials: 'DB',
    jobTitle: 'Product Program Developer',
    description: 'Possimus autem voluptas vero ipsam dolorem ut minus aut labore.',
    longText:
      'Voluptatem voluptatem in quis ex voluptas dolore tenetur. Sunt minus aspernatur blanditiis tenetur totam. Sit corrupti optio harum quam eligendi aut. Officiis sunt nihil et molestiae et. Nesciunt consequatur labore nesciunt natus ut quo deleniti aut. Dicta cum dolor in voluptas.',
  },
  {
    index: 872,
    bgColor: '#f5f5f5',
    name: 'Hiram Emard',
    initials: 'HE',
    jobTitle: 'Investor Directives Producer',
    description:
      'Mollitia quam qui esse sunt delectus consectetur doloremque est temporibus.',
    longText:
      'Quo corrupti natus dolor est ipsa ipsam at voluptas. Maxime dolore enim voluptatem. Recusandae cupiditate autem corporis ut sed ex est aspernatur architecto. Aliquid laboriosam sit quia atque.',
  },
  {
    index: 873,
    bgColor: 'white',
    name: 'Korey Weimann',
    initials: 'KW',
    jobTitle: 'Chief Directives Manager',
    description: 'Velit dolor nostrum molestiae commodi ab commodi ipsum ex sint.',
    longText:
      'Non aut sed nobis corporis aperiam eum. Soluta ducimus exercitationem et non. Sed earum nemo dolores sit illo voluptate et omnis exercitationem. Qui voluptas quia tenetur quaerat id impedit voluptatem. Ut vitae voluptates rerum et occaecati mollitia magnam voluptatem. Iure quo iure ea voluptas voluptatibus.',
  },
  {
    index: 874,
    bgColor: '#f5f5f5',
    name: 'Cortney Wunsch',
    initials: 'CW',
    jobTitle: 'Human Response Producer',
    description: 'Sunt doloremque enim perferendis fugit quo quae et id deleniti.',
    longText:
      'Consequuntur voluptatem ea. Ex quae architecto molestiae illo saepe ea culpa. Neque quis ut sit in dolorem. Magnam eum assumenda et quia nisi dolor odio rerum.',
  },
  {
    index: 875,
    bgColor: 'white',
    name: 'Helene Howe',
    initials: 'HH',
    jobTitle: 'National Functionality Facilitator',
    description:
      'Ut soluta consequatur consequatur veniam officiis architecto voluptates accusamus illo.',
    longText:
      'Voluptatem ut ut incidunt ipsum non. Quisquam rerum placeat ut. Et saepe mollitia dolorem sint non vel exercitationem sunt id. Ea illum cupiditate ullam sunt veniam itaque perspiciatis. Ea quae omnis aut labore.',
  },
  {
    index: 876,
    bgColor: '#f5f5f5',
    name: 'Aron Schimmel',
    initials: 'AS',
    jobTitle: 'Corporate Brand Liaison',
    description: 'Sit qui perspiciatis eius eum quis rerum recusandae similique veniam.',
    longText:
      'Quas qui eveniet dolor molestiae laboriosam. Saepe dolorem velit accusantium sit nisi nesciunt aliquid. Non iusto eos velit odio mollitia rerum at at. Velit ut laborum aperiam vel temporibus voluptate tempore autem delectus. Qui culpa molestiae quia at ut qui suscipit et ratione.',
  },
  {
    index: 877,
    bgColor: 'white',
    name: 'Rasheed Rempel',
    initials: 'RR',
    jobTitle: 'Lead Integration Director',
    description: 'Rerum aut similique laborum nesciunt aliquam et quis cupiditate ea.',
    longText:
      'Omnis quae eum repellat. Ipsam provident natus aliquam maxime est doloremque. Ea hic quae maiores quidem quidem dolor. Quas dolor dolorum et libero autem dolores et et. Similique nostrum culpa neque dolores consectetur. Itaque beatae id qui dignissimos dolor autem ut expedita id.',
  },
  {
    index: 878,
    bgColor: '#f5f5f5',
    name: 'Kyle Romaguera',
    initials: 'KR',
    jobTitle: 'Senior Usability Representative',
    description: 'Velit error alias laudantium omnis accusamus nihil nihil minus fugit.',
    longText:
      'Ut quo commodi enim vel doloribus. Enim asperiores molestiae aspernatur et non dolorem magni. Aliquid et iure minima hic et ut harum.',
  },
  {
    index: 879,
    bgColor: 'white',
    name: 'Taya Langworth',
    initials: 'TL',
    jobTitle: 'Forward Directives Agent',
    description:
      'Beatae sed iste quaerat facere exercitationem nesciunt modi id praesentium.',
    longText:
      'Ullam labore qui. Est quas magnam omnis architecto perferendis occaecati perspiciatis consequatur sed. Excepturi qui perspiciatis voluptas totam ducimus id.',
  },
  {
    index: 880,
    bgColor: '#f5f5f5',
    name: 'Torrance Bogan',
    initials: 'TB',
    jobTitle: 'National Program Assistant',
    description: 'Ea quis reprehenderit dolore fugiat cum odio optio sunt ratione.',
    longText:
      'Reiciendis et tempore magnam culpa nesciunt in. Numquam ad possimus esse ex officia nisi veniam sed eos. Est voluptatem facere omnis porro optio delectus nemo.',
  },
  {
    index: 881,
    bgColor: 'white',
    name: 'Matilde Lang',
    initials: 'ML',
    jobTitle: 'Global Integration Administrator',
    description:
      'Unde est autem repellendus et exercitationem reprehenderit omnis consequatur perferendis.',
    longText:
      'Deserunt ab suscipit accusantium vero doloribus consequatur. Corporis aliquid quia magni possimus fuga et. Vitae quas voluptatem ut numquam magnam nemo corporis. Exercitationem ut sapiente quis illum nesciunt. Voluptatem voluptas est. Quaerat earum unde maxime itaque error maiores voluptatem dignissimos.',
  },
  {
    index: 882,
    bgColor: '#f5f5f5',
    name: 'Lance Leuschke',
    initials: 'LL',
    jobTitle: 'Customer Brand Assistant',
    description:
      'Velit corporis molestiae veritatis dolor id molestiae atque odio nostrum.',
    longText:
      'Dolores sunt impedit molestiae qui quia. Hic nulla sed nulla voluptas ex minima eligendi velit. Nam sunt ut non molestias sit soluta mollitia voluptas.',
  },
  {
    index: 883,
    bgColor: 'white',
    name: 'Carole DuBuque',
    initials: 'CD',
    jobTitle: 'International Data Planner',
    description: 'Ut dolorum distinctio tempore in cum accusamus nostrum ipsa aut.',
    longText:
      'Error cumque quis. Alias velit et et qui sint. Quasi quo molestiae cumque cum. Dolorem et possimus tenetur qui.',
  },
  {
    index: 884,
    bgColor: '#f5f5f5',
    name: 'Alycia Bode',
    initials: 'AB',
    jobTitle: 'Senior Assurance Producer',
    description: 'Nostrum quia perferendis rem omnis ea quos ad harum nostrum.',
    longText:
      'Modi reiciendis odio dolores ea rerum enim molestiae voluptate. Eum maiores et quia autem qui. Hic ut error consequatur unde autem non. Aspernatur non rem asperiores unde facere quae impedit nihil. Ratione quia nulla distinctio sapiente optio iure consequatur et doloribus. Recusandae et et et qui.',
  },
  {
    index: 885,
    bgColor: 'white',
    name: 'Bud Willms',
    initials: 'BW',
    jobTitle: 'Investor Paradigm Coordinator',
    description:
      'Deleniti reprehenderit ipsum quia id eligendi quaerat error laudantium voluptatem.',
    longText:
      'Ut impedit delectus molestias necessitatibus beatae. Ipsa sed ea sed repudiandae dolor. Pariatur fugiat nisi eos.',
  },
  {
    index: 886,
    bgColor: '#f5f5f5',
    name: 'Carmelo Hauck',
    initials: 'CH',
    jobTitle: 'Legacy Creative Engineer',
    description:
      'Suscipit laborum consectetur quis praesentium culpa quas dolores harum ipsa.',
    longText:
      'Assumenda sed ratione perferendis error voluptas ipsum quibusdam soluta molestiae. Officia suscipit praesentium illo. Sed dignissimos sit impedit quam eius numquam ratione aut pariatur. Sit natus et voluptatibus fugiat maiores. Voluptates dicta maiores veniam asperiores quia non architecto.',
  },
  {
    index: 887,
    bgColor: 'white',
    name: 'Will Schultz',
    initials: 'WS',
    jobTitle: 'Dynamic Usability Developer',
    description:
      'Nemo dolorum labore saepe recusandae dicta omnis praesentium tenetur qui.',
    longText:
      'Eos quasi sunt ut totam voluptatem nisi amet. Quod maiores aut voluptatem voluptas quis qui aperiam dolore. Voluptatum deserunt eum assumenda illum et odio facere aliquid ex. Et ut rerum omnis soluta suscipit eos earum facere et.',
  },
  {
    index: 888,
    bgColor: '#f5f5f5',
    name: 'Edmund White',
    initials: 'EW',
    jobTitle: 'Senior Functionality Technician',
    description: 'Sunt ipsa incidunt iusto commodi repudiandae et non veniam a.',
    longText:
      'Eos recusandae iste est voluptas. Repellendus facere perferendis id. Accusamus ut necessitatibus. Tempore pariatur maiores similique facilis ab sit. Possimus iure nam.',
  },
  {
    index: 889,
    bgColor: 'white',
    name: 'Quincy Wintheiser',
    initials: 'QW',
    jobTitle: 'International Marketing Supervisor',
    description: 'Doloribus beatae aut assumenda odio a quo aut consequatur nihil.',
    longText:
      'Quidem est asperiores odio quisquam. Quae aliquid expedita eum voluptates blanditiis error eum. Quaerat aut voluptatum fuga sint sed eum.',
  },
  {
    index: 890,
    bgColor: '#f5f5f5',
    name: 'Rosalinda Dicki',
    initials: 'RD',
    jobTitle: 'Human Operations Planner',
    description: 'Doloremque minima consectetur nam ea qui et et rerum accusamus.',
    longText:
      'Non accusamus quia est eos nisi vero magni. Tempore aut pariatur. Fugiat odit sed quia nostrum est temporibus autem. Adipisci aspernatur beatae hic ipsum inventore. Earum aut inventore dolor quisquam qui a. Hic enim cumque et qui sit enim sit.',
  },
  {
    index: 891,
    bgColor: 'white',
    name: 'Neha Waelchi',
    initials: 'NW',
    jobTitle: 'Product Division Technician',
    description: 'Necessitatibus dolor harum omnis unde et voluptas nemo est pariatur.',
    longText:
      'Alias deleniti consequatur nemo iste quibusdam quia. Dolorem et debitis et. Porro exercitationem nostrum harum beatae et voluptatum. Blanditiis voluptas illo iste cum.',
  },
  {
    index: 892,
    bgColor: '#f5f5f5',
    name: 'Melany Vandervort',
    initials: 'MV',
    jobTitle: 'Corporate Functionality Facilitator',
    description: 'Ea eum in dolores voluptatem veniam nemo dolor esse vitae.',
    longText:
      'Quibusdam incidunt voluptatem dolorum iure. Facere ullam incidunt molestiae maxime incidunt dolorem. Minima quod soluta minima magnam tempora.',
  },
  {
    index: 893,
    bgColor: 'white',
    name: 'Shana Wolf',
    initials: 'SW',
    jobTitle: 'Legacy Implementation Supervisor',
    description: 'Non quia delectus qui accusantium et corrupti autem esse iure.',
    longText:
      'Impedit dolorum nesciunt aliquam consequatur dolores vitae minima. Eos natus fuga officia sit. Sunt dignissimos et maiores. Animi itaque placeat quae ut. Maxime ut asperiores accusantium tempora et.',
  },
  {
    index: 894,
    bgColor: '#f5f5f5',
    name: 'Oma Feeney',
    initials: 'OF',
    jobTitle: 'Lead Quality Agent',
    description: 'Dolorem tempora quos laboriosam qui ut nemo magni velit et.',
    longText:
      'A laudantium voluptas et aspernatur nulla nisi rerum laudantium nihil. Quis adipisci eaque labore ut non recusandae quam quidem officiis. Quas laboriosam perferendis consequuntur odio dolorum nobis hic atque. Aut nam autem est velit sit in sunt nobis. Unde ipsum non quaerat doloremque fugiat voluptatem voluptatem tenetur consequatur. Labore iusto consequatur commodi voluptas cum suscipit in dolores.',
  },
  {
    index: 895,
    bgColor: 'white',
    name: 'Brady Jenkins',
    initials: 'BJ',
    jobTitle: 'District Response Facilitator',
    description: 'Et temporibus in fugiat repellat quia tenetur non nulla in.',
    longText:
      'Sunt minus est omnis dicta illo qui magnam ut ipsum. Id ex culpa porro quos. Autem enim aut odio voluptas qui atque error. Ab quaerat fuga. Eum impedit ut eos sit cupiditate quos quia esse blanditiis.',
  },
  {
    index: 896,
    bgColor: '#f5f5f5',
    name: 'Will Emard',
    initials: 'WE',
    jobTitle: 'Forward Division Facilitator',
    description: 'Vitae est optio explicabo omnis error molestiae hic officia sit.',
    longText:
      'Sequi provident porro rem ut voluptates velit. Consequatur sint quia explicabo dolores dolore repellendus. At est dolorem. Nulla earum sunt aut dicta omnis.',
  },
  {
    index: 897,
    bgColor: 'white',
    name: 'Westley Dach',
    initials: 'WD',
    jobTitle: 'Regional Research Manager',
    description: 'Quaerat maxime a fugit optio rerum nobis magni ut ipsum.',
    longText:
      'Eligendi odio quidem alias a dignissimos deserunt qui. Minima aut exercitationem at tempora. Consequuntur ut ratione consequatur optio fugit sint. Accusantium et iste quo est. Distinctio modi perferendis voluptas adipisci tempore sit.',
  },
  {
    index: 898,
    bgColor: '#f5f5f5',
    name: 'Yessenia Reinger',
    initials: 'YR',
    jobTitle: 'Chief Brand Agent',
    description:
      'Facere at repellendus libero minus assumenda provident nobis molestias nesciunt.',
    longText:
      'Qui illo repellendus voluptatibus in. Dolorum eaque deleniti est officia repellendus rem ex ducimus dolorem. Ipsam culpa officia consectetur non. Earum placeat dignissimos et. Porro molestias reprehenderit. Tenetur aut et quia voluptatem voluptatem et vel.',
  },
  {
    index: 899,
    bgColor: 'white',
    name: 'Mireya Breitenberg',
    initials: 'MB',
    jobTitle: 'Product Accounts Strategist',
    description:
      'Modi quidem ea tempora dignissimos asperiores dignissimos dolores maxime voluptas.',
    longText:
      'Aut eaque soluta ex est sint dolores. Quos eos doloremque quas soluta sunt sunt labore consequuntur consequuntur. Itaque quia vel. Ducimus quisquam enim enim eaque minus quia.',
  },
  {
    index: 900,
    bgColor: '#f5f5f5',
    name: 'Darwin McLaughlin',
    initials: 'DM',
    jobTitle: 'Global Branding Coordinator',
    description: 'Aliquam magni nostrum cumque quae velit alias et quia earum.',
    longText:
      'Sit ab cum dolor natus delectus. Laborum deserunt omnis qui quis aspernatur est accusamus sint placeat. Maiores placeat dolor reprehenderit minima. Id odio reprehenderit dolores suscipit earum occaecati et. Et est eum molestiae placeat necessitatibus libero quasi.',
  },
  {
    index: 901,
    bgColor: 'white',
    name: 'Laurianne Bednar',
    initials: 'LB',
    jobTitle: 'Lead Integration Planner',
    description: 'Quia nesciunt consectetur est tempore atque fugit et et deserunt.',
    longText:
      'Enim accusantium unde. Et deleniti voluptatem ea nostrum et deserunt error iste quis. Consequuntur quos reprehenderit fugit eius. Sit quia odit quod dicta. Magni consequatur voluptatem non magni eos aut. Accusantium ipsam esse placeat qui quaerat molestiae.',
  },
  {
    index: 902,
    bgColor: '#f5f5f5',
    name: 'Oliver Wiza',
    initials: 'OW',
    jobTitle: 'National Brand Technician',
    description: 'Fugiat ex qui ab vero laudantium quidem laborum et necessitatibus.',
    longText:
      'Atque accusantium quidem omnis dolor explicabo sunt molestiae. Soluta porro accusantium sapiente impedit. Atque officia nulla tempore rem animi maiores expedita veniam. Molestiae labore hic error harum est nulla dicta qui. Est fugit architecto corrupti corrupti sunt natus officiis sequi explicabo. Dolor ut ipsam.',
  },
  {
    index: 903,
    bgColor: 'white',
    name: 'Daija Rutherford',
    initials: 'DR',
    jobTitle: 'Product Infrastructure Executive',
    description:
      'Dolor eveniet corporis asperiores illum non delectus omnis ratione quaerat.',
    longText:
      'Voluptas sed qui repellat aperiam et natus in. Dolor repudiandae qui asperiores. Hic quis eligendi accusantium.',
  },
  {
    index: 904,
    bgColor: '#f5f5f5',
    name: 'Dora Emmerich',
    initials: 'DE',
    jobTitle: 'Global Metrics Consultant',
    description:
      'Enim qui odio sint recusandae sapiente suscipit molestiae nesciunt laborum.',
    longText:
      'Vel error mollitia sint. Qui sapiente inventore deserunt rerum. Quia explicabo ut sit ducimus ipsa earum nostrum at ut. Minima omnis reprehenderit in quia. Ut officia saepe ad provident quaerat maxime id neque maiores. Libero nobis labore quis rerum ut.',
  },
  {
    index: 905,
    bgColor: 'white',
    name: 'Genesis Renner',
    initials: 'GR',
    jobTitle: 'Dynamic Integration Specialist',
    description:
      'Voluptatibus voluptatem necessitatibus aspernatur quo ut dolores dolorem exercitationem eum.',
    longText:
      'Sit ut voluptatem quaerat adipisci voluptatem non sit occaecati. Repellendus omnis aut repellat est. Quia expedita sit.',
  },
  {
    index: 906,
    bgColor: '#f5f5f5',
    name: 'Mike Maggio',
    initials: 'MM',
    jobTitle: 'Central Brand Technician',
    description: 'Quod odio in explicabo corporis voluptas ut dolorem quo nemo.',
    longText:
      'Aspernatur optio laborum libero molestiae eius et nulla. Eius quam qui quia autem. Neque quia iure nobis rerum sit porro accusamus. Qui voluptate est quis praesentium quia nihil qui aliquam. Quam totam nesciunt. Velit nobis quae et rerum et aliquid quia unde.',
  },
  {
    index: 907,
    bgColor: 'white',
    name: 'Lelia Hintz',
    initials: 'LH',
    jobTitle: 'Legacy Research Representative',
    description: 'Autem error quia odit aut tempore consectetur provident alias ut.',
    longText:
      'Ex deserunt exercitationem corrupti at quae iste dolores dolores quia. Possimus explicabo veniam molestiae officiis qui quis commodi nostrum eos. Libero veniam iste aut id. Repellat et voluptas id velit consequatur unde odit. Architecto nam aperiam nobis.',
  },
  {
    index: 908,
    bgColor: '#f5f5f5',
    name: 'Brenda Fahey',
    initials: 'BF',
    jobTitle: 'Internal Applications Specialist',
    description: 'Nam dolore temporibus mollitia voluptatem tempora ad vel ducimus qui.',
    longText:
      'Dolore nobis eius perferendis nesciunt. Est tenetur dolore voluptatem qui reiciendis iste. Aut assumenda iure excepturi ut sunt autem molestiae perspiciatis. Quia eum similique impedit velit. Quis iste dolorem consequatur. Est ipsam est.',
  },
  {
    index: 909,
    bgColor: 'white',
    name: 'Emile Sauer',
    initials: 'ES',
    jobTitle: 'Dynamic Quality Planner',
    description:
      'Dolorem consequatur dolorum et excepturi excepturi reiciendis tempore ex et.',
    longText:
      'Tempora neque facilis quos impedit magnam accusantium. Quo quod incidunt dolorum sit. Sit aut voluptas.',
  },
  {
    index: 910,
    bgColor: '#f5f5f5',
    name: 'Audra Torp',
    initials: 'AT',
    jobTitle: 'Product Assurance Analyst',
    description:
      'Molestias quasi dolores id voluptas molestiae aut ullam inventore sint.',
    longText:
      'Eius ut et vero consequatur architecto architecto non. Esse fugit provident aspernatur dolorem molestiae. Numquam dignissimos dolorum et id dolorem totam sunt. Et asperiores tempore consequuntur.',
  },
  {
    index: 911,
    bgColor: 'white',
    name: 'Stacey Walsh',
    initials: 'SW',
    jobTitle: 'International Interactions Administrator',
    description:
      'Et inventore ipsum et eius voluptatem animi exercitationem hic adipisci.',
    longText:
      'Eos aut ut. Quasi quo reiciendis fugiat aperiam dolorem facilis beatae rerum odio. Ea dolore odit enim officiis fugiat. Officiis non debitis velit voluptas doloribus.',
  },
  {
    index: 912,
    bgColor: '#f5f5f5',
    name: 'Patience Waelchi',
    initials: 'PW',
    jobTitle: 'Lead Configuration Agent',
    description:
      'Voluptas aliquid distinctio aperiam totam corporis ad qui praesentium consequatur.',
    longText:
      'Ab et officia aut saepe cupiditate esse tempora quibusdam. Eum et sunt quisquam similique soluta est sequi omnis. Quia rem alias magni numquam est rerum eligendi saepe excepturi. Hic velit porro omnis omnis pariatur. Vel minus facere dolorem qui possimus aut. Et ratione et velit et inventore quia nisi enim accusantium.',
  },
  {
    index: 913,
    bgColor: 'white',
    name: 'Niko Bartell',
    initials: 'NB',
    jobTitle: 'Dynamic Optimization Executive',
    description: 'Nemo sint aut est quisquam quia beatae consequuntur alias et.',
    longText:
      'Laudantium ipsam quam ex quod veritatis ea. Dolor qui deleniti qui et provident ut. Modi a adipisci unde. Quis ad ab et est. Ullam rerum perferendis voluptas culpa atque similique. Molestiae maiores molestias vero velit blanditiis quisquam.',
  },
  {
    index: 914,
    bgColor: '#f5f5f5',
    name: 'Dena Sawayn',
    initials: 'DS',
    jobTitle: 'Senior Solutions Assistant',
    description:
      'Sed alias labore consequatur dicta perspiciatis quae minima fugit consequatur.',
    longText:
      'Qui non ipsum quia perspiciatis praesentium enim consequatur itaque. Sint alias quas. Repudiandae qui voluptate adipisci qui et quas.',
  },
  {
    index: 915,
    bgColor: 'white',
    name: 'Janie Mitchell',
    initials: 'JM',
    jobTitle: 'Customer Division Representative',
    description: 'Numquam numquam id est omnis quas dolores sapiente ex rerum.',
    longText:
      'Distinctio non et suscipit unde. Aut aliquid pariatur. Facere velit nihil harum consequatur et laboriosam quasi. Cupiditate enim alias dolor quod. Explicabo itaque nihil eligendi commodi qui nemo qui omnis praesentium.',
  },
  {
    index: 916,
    bgColor: '#f5f5f5',
    name: 'Stan Harber',
    initials: 'SH',
    jobTitle: 'Dynamic Accountability Assistant',
    description:
      'Quaerat repellat voluptas nihil soluta commodi culpa recusandae velit ad.',
    longText:
      'Molestiae saepe est qui omnis ad quod porro dignissimos. Rerum praesentium quisquam quo quos eos harum laudantium aliquid harum. Nihil deleniti quia consequatur id. Ut et eligendi accusamus. Rerum fuga saepe ipsum aut in qui quidem sed modi. Enim ipsam ad mollitia cupiditate enim perspiciatis.',
  },
  {
    index: 917,
    bgColor: 'white',
    name: 'Cyrus Gutkowski',
    initials: 'CG',
    jobTitle: 'Future Identity Administrator',
    description: 'Inventore at et possimus soluta rerum ut ipsam ut cupiditate.',
    longText:
      'Quo voluptatem tempore vel qui maiores sit accusantium. Rerum omnis vel eaque. Quae voluptates beatae ipsa maxime tenetur sit impedit a.',
  },
  {
    index: 918,
    bgColor: '#f5f5f5',
    name: 'Murray Pollich',
    initials: 'MP',
    jobTitle: 'Direct Brand Technician',
    description: 'Voluptatem natus ut eius possimus nisi incidunt ut doloribus rerum.',
    longText:
      'Non aliquam unde. Soluta esse non. Animi facilis ut iste voluptates incidunt totam consectetur. In cum laboriosam vel quae rem. Itaque voluptates adipisci minus debitis. Esse aut saepe quisquam deserunt possimus.',
  },
  {
    index: 919,
    bgColor: 'white',
    name: 'Myrtle Abbott',
    initials: 'MA',
    jobTitle: 'Senior Division Orchestrator',
    description: 'Eaque dolor dicta eos autem ex exercitationem perspiciatis impedit et.',
    longText:
      'Ratione aspernatur voluptates et ut nulla esse ipsam illo commodi. Maiores explicabo rerum nemo odio enim impedit sunt delectus itaque. Eum nisi in eos a iure.',
  },
  {
    index: 920,
    bgColor: '#f5f5f5',
    name: 'Shane Streich',
    initials: 'SS',
    jobTitle: 'District Quality Consultant',
    description: 'Aliquam quo rem est iste non esse necessitatibus vel voluptatem.',
    longText:
      'Facilis aliquid quibusdam et tempore aliquam. Voluptas nemo veritatis rerum quis consequatur delectus suscipit dolorem dolores. Quos voluptates cum. Saepe consequatur amet. Alias sint et fugiat.',
  },
  {
    index: 921,
    bgColor: 'white',
    name: 'Dax Luettgen',
    initials: 'DL',
    jobTitle: 'Product Data Engineer',
    description:
      'Omnis ut aut dicta nesciunt repudiandae exercitationem delectus saepe dicta.',
    longText:
      'Tempora voluptates molestiae consequuntur occaecati. Ipsam mollitia consequatur voluptatem fugit rerum similique fuga. Corporis ut ut est voluptates laborum fugit provident excepturi eius. Et quidem sapiente quis est ea eum deleniti dolore eaque. Voluptatibus quisquam odit quisquam labore tempore consequatur similique minus fugit. Sunt autem eveniet quia.',
  },
  {
    index: 922,
    bgColor: '#f5f5f5',
    name: 'Ashleigh Heathcote',
    initials: 'AH',
    jobTitle: 'Global Accounts Assistant',
    description: 'Dolores quis pariatur dolorem quos culpa ut et eaque unde.',
    longText:
      'Doloremque aspernatur illo non pariatur iste quibusdam. Sequi maiores eaque exercitationem quia labore atque non eos corrupti. Cumque et modi voluptatibus minima debitis harum.',
  },
  {
    index: 923,
    bgColor: 'white',
    name: 'Howell McClure',
    initials: 'HM',
    jobTitle: 'Global Division Supervisor',
    description: 'Ut labore sed minima quam voluptas eius quasi eos et.',
    longText:
      'Quis non velit. Dolorem sapiente autem nostrum possimus eos. Aliquam voluptates quae commodi consequuntur non sint dolor. Nemo quaerat enim libero et nihil consequatur nisi a dolor. Molestiae qui in non autem eligendi commodi itaque nobis. Placeat nobis vero dignissimos laboriosam corrupti.',
  },
  {
    index: 924,
    bgColor: '#f5f5f5',
    name: 'Elinor Pfannerstill',
    initials: 'EP',
    jobTitle: 'International Accounts Strategist',
    description: 'Illum non qui quia unde rem culpa ducimus non fugit.',
    longText:
      'Vitae sequi illum et rerum enim voluptas aliquid facilis. Tenetur est et ullam iure odit quia eos ipsum enim. Sunt quo qui ab debitis a dolore hic. Distinctio nihil quo pariatur et. Rem perspiciatis reprehenderit. Recusandae vero ullam est sint ipsam voluptatem quis dolore rerum.',
  },
  {
    index: 925,
    bgColor: 'white',
    name: 'Bryce Volkman',
    initials: 'BV',
    jobTitle: 'Dynamic Communications Assistant',
    description:
      'Laborum qui earum occaecati praesentium totam et error exercitationem officiis.',
    longText:
      'Alias error adipisci molestiae eligendi. Ex est eius aliquam aperiam. Et vel accusantium ex aliquid qui ut voluptatem aut. Corrupti ut aspernatur aut laboriosam.',
  },
  {
    index: 926,
    bgColor: '#f5f5f5',
    name: 'Jacinthe McDermott',
    initials: 'JM',
    jobTitle: 'Internal Applications Facilitator',
    description: 'Ea sed quas ut atque dolorem dolorem et laboriosam ut.',
    longText:
      'Magnam dolores aut. Qui voluptas quia iste. Suscipit at excepturi ut. Voluptate debitis praesentium sed similique et voluptatem. Delectus eligendi quod voluptatem autem vel autem reiciendis. Facere saepe eligendi non ducimus.',
  },
  {
    index: 927,
    bgColor: 'white',
    name: 'Khalil Ruecker',
    initials: 'KR',
    jobTitle: 'Chief Communications Liaison',
    description: 'Dolorum occaecati pariatur est esse vel ea placeat dignissimos quos.',
    longText:
      'Enim culpa aut. Fugit repellat accusamus vel. Dolorem accusamus eos repellendus. Distinctio iste eveniet sequi. Facere minima sunt.',
  },
  {
    index: 928,
    bgColor: '#f5f5f5',
    name: 'Zetta Zulauf',
    initials: 'ZZ',
    jobTitle: 'District Brand Producer',
    description:
      'Similique quia delectus culpa necessitatibus omnis dolor accusamus laudantium iusto.',
    longText:
      'Nulla est libero. Ab ipsam fuga. Consequatur aliquid incidunt tempora corporis. Nam iusto vero quae commodi quasi qui dolorem minima aspernatur. Porro aut quo tempora ab.',
  },
  {
    index: 929,
    bgColor: 'white',
    name: 'Aida Heidenreich',
    initials: 'AH',
    jobTitle: 'Lead Division Agent',
    description: 'Delectus porro dolor nostrum aut modi in eum consequuntur consequatur.',
    longText:
      'Cupiditate beatae quaerat voluptatem. Inventore perferendis aut et sint veniam aspernatur quasi autem est. Aut voluptatibus non non molestiae expedita atque qui dolorem et.',
  },
  {
    index: 930,
    bgColor: '#f5f5f5',
    name: 'Aileen Lynch',
    initials: 'AL',
    jobTitle: 'Lead Interactions Producer',
    description: 'Repellendus est eum voluptate vel magnam voluptates ad voluptas et.',
    longText:
      'Amet qui dolor dolorem nam sunt. Sunt animi deserunt quisquam suscipit voluptatem quis accusamus dolore. Id veritatis repellendus sit doloribus quaerat sint est autem. Quia quidem facere incidunt a. Tempora quo voluptatum ullam qui ea illum maiores dolores placeat. Beatae et quis doloremque incidunt sint ullam ipsa soluta quia.',
  },
  {
    index: 931,
    bgColor: 'white',
    name: 'Elian Lebsack',
    initials: 'EL',
    jobTitle: 'Human Division Liaison',
    description: 'Quia ut quod dolor facere pariatur tenetur cupiditate quis voluptates.',
    longText:
      'Fuga dolores at. Esse quisquam quia in beatae doloremque corrupti est consequatur. Quia aliquid iste nam est ut tenetur nihil corrupti consequatur. Dolores ut ut velit consequatur voluptatum enim. Ut ipsum doloremque aut. Iure nam qui a cumque consequatur est aut et.',
  },
  {
    index: 932,
    bgColor: '#f5f5f5',
    name: 'Zoe Christiansen',
    initials: 'ZC',
    jobTitle: 'Senior Operations Liaison',
    description: 'Ut rerum rem asperiores fuga corrupti eum quis at est.',
    longText:
      'Dolores asperiores eos quo nihil quo natus. Laborum et non ipsam sit. Consectetur voluptas consectetur delectus eaque. Dolorem eum est fuga ea.',
  },
  {
    index: 933,
    bgColor: 'white',
    name: 'Bertha Conn',
    initials: 'BC',
    jobTitle: 'Internal Branding Assistant',
    description: 'Quis at ullam iste animi dolorum voluptatem hic minima ullam.',
    longText:
      'Amet et aut magnam. Eum fuga impedit aut dolore a quod voluptas. Ipsa numquam eligendi nihil quo vitae assumenda. Vitae ipsam qui iusto voluptates molestias.',
  },
  {
    index: 934,
    bgColor: '#f5f5f5',
    name: 'Damian Williamson',
    initials: 'DW',
    jobTitle: 'Forward Operations Associate',
    description:
      'Vel debitis laboriosam assumenda qui cupiditate similique eius dolores provident.',
    longText:
      'Dicta ad facilis modi. Illo placeat odio iure voluptas at et veritatis id possimus. Sit similique eaque quis necessitatibus laboriosam culpa minima. Officia qui voluptatem dolorum et dolor iure. Sed a explicabo deleniti qui dolor hic tempora perspiciatis.',
  },
  {
    index: 935,
    bgColor: 'white',
    name: 'Mckenna Crooks',
    initials: 'MC',
    jobTitle: 'International Brand Specialist',
    description:
      'Totam sit deleniti porro asperiores excepturi est reprehenderit est iure.',
    longText:
      'Sequi non et ea expedita quod sit. Et libero pariatur est adipisci qui nihil. Tempore perferendis nemo corporis quasi dignissimos quia amet nihil sit. Qui optio deleniti incidunt. Voluptatum vitae optio alias quidem dolor.',
  },
  {
    index: 936,
    bgColor: '#f5f5f5',
    name: 'Elisa Towne',
    initials: 'ET',
    jobTitle: 'Human Communications Supervisor',
    description: 'Maxime ducimus non illum ad animi est facere maiores asperiores.',
    longText:
      'Rerum nostrum porro et repellat dolorem voluptatum quia consectetur sit. Vitae sint asperiores doloribus quia. Maiores vel labore rem molestias necessitatibus est minus et.',
  },
  {
    index: 937,
    bgColor: 'white',
    name: 'Julianne Huels',
    initials: 'JH',
    jobTitle: 'District Accountability Developer',
    description: 'Totam eveniet quod ea consequuntur id inventore et qui voluptas.',
    longText:
      'Ex dolor et est consequatur voluptatem. Assumenda laboriosam temporibus excepturi. Quos quia cupiditate velit aut ea.',
  },
  {
    index: 938,
    bgColor: '#f5f5f5',
    name: 'Rosemarie Simonis',
    initials: 'RS',
    jobTitle: 'Investor Accounts Analyst',
    description: 'Autem corrupti vel aspernatur alias quam sed officia nihil quis.',
    longText:
      'Blanditiis quos rerum repellendus odit eaque. Voluptatibus voluptatem fugit quis labore repellendus aut id. Repudiandae suscipit quos quo praesentium provident tenetur. Voluptatum et dolor provident molestiae et dolore aut. Inventore tempora nemo iste rerum non repellat consectetur.',
  },
  {
    index: 939,
    bgColor: 'white',
    name: 'Shayna Reynolds',
    initials: 'SR',
    jobTitle: 'Lead Accounts Technician',
    description:
      'Facilis recusandae reiciendis vitae est sed autem possimus id laudantium.',
    longText:
      'Sed sint ea fugit ut sapiente. Assumenda omnis ea rerum quis et. Aperiam dolores autem aut earum provident optio aut nulla numquam. Quibusdam voluptatem est quis suscipit molestiae.',
  },
  {
    index: 940,
    bgColor: '#f5f5f5',
    name: 'Dianna Orn',
    initials: 'DO',
    jobTitle: 'Senior Implementation Executive',
    description:
      'Libero dicta molestias delectus voluptatibus minus et praesentium magnam molestiae.',
    longText:
      'Veritatis voluptatem occaecati esse sed et. Ut quia qui omnis vel ratione. Voluptatem ea velit aliquid earum eveniet voluptatem quaerat expedita. Nostrum eligendi sint. Laudantium repudiandae et repudiandae. Rerum necessitatibus sit ea voluptatibus.',
  },
  {
    index: 941,
    bgColor: 'white',
    name: 'Freda Gerhold',
    initials: 'FG',
    jobTitle: 'District Markets Representative',
    description: 'Incidunt quia earum voluptate illo iste nihil ducimus error tempora.',
    longText:
      'Nisi et autem necessitatibus in sed illum iure similique. Et a quis quaerat et est facilis impedit laudantium. Consectetur quae ut iure maxime sit consequuntur sint. Eos dolores dicta quasi excepturi facere et dolor.',
  },
  {
    index: 942,
    bgColor: '#f5f5f5',
    name: 'Lori Cole',
    initials: 'LC',
    jobTitle: 'District Marketing Liaison',
    description: 'Ullam non eum aliquid cupiditate modi et libero nulla ipsam.',
    longText:
      'Dolorem temporibus vero omnis deserunt nostrum. Eveniet ad mollitia voluptatem fugiat officiis. Consequatur velit occaecati totam repellendus earum. Voluptatem sed necessitatibus sint incidunt consequatur harum beatae quia. Sunt eligendi sit.',
  },
  {
    index: 943,
    bgColor: 'white',
    name: 'Skylar Kerluke',
    initials: 'SK',
    jobTitle: 'Product Integration Consultant',
    description: 'Odio vero facilis et est itaque voluptatibus quasi numquam vel.',
    longText:
      'Cum in vitae pariatur molestias. Est non illo molestias et non autem voluptas ab. Esse ad laudantium consequatur autem eos beatae. Ducimus autem velit quidem facere optio dolor pariatur dolor.',
  },
  {
    index: 944,
    bgColor: '#f5f5f5',
    name: 'Jamison Frami',
    initials: 'JF',
    jobTitle: 'National Brand Coordinator',
    description:
      'Et incidunt sed fugiat qui dignissimos consectetur commodi optio harum.',
    longText:
      'Laboriosam quia et nobis illum vitae voluptas rem. Recusandae est cupiditate dolorum deserunt maiores molestiae. Quo adipisci non facilis esse vitae dolorem. Modi voluptatibus rerum repudiandae modi numquam in esse aperiam autem. Commodi reiciendis aut consectetur quae voluptatem eos qui repellat accusamus.',
  },
  {
    index: 945,
    bgColor: 'white',
    name: 'Ruth Ondricka',
    initials: 'RO',
    jobTitle: 'Dynamic Branding Strategist',
    description: 'At doloremque ipsum impedit sit tempora nemo perferendis tenetur aut.',
    longText:
      'Eum esse possimus velit facere eos vitae qui qui et. Recusandae est laboriosam eos quis ducimus minima sed voluptate. Rerum voluptas omnis omnis dolores. Beatae debitis magni iste excepturi eos excepturi et qui et. Culpa qui tempore vel in cum.',
  },
  {
    index: 946,
    bgColor: '#f5f5f5',
    name: 'Brian Glover',
    initials: 'BG',
    jobTitle: 'Future Directives Developer',
    description: 'Eos ipsum voluptatem temporibus ea laboriosam id incidunt dolorem et.',
    longText:
      'Ut aut omnis illo nesciunt molestias. Ea maxime aut. Reprehenderit eum fuga dolore placeat autem. Omnis officiis ea consectetur animi et. Molestiae minus rerum soluta et doloribus dolore. Quam laborum placeat praesentium libero molestiae id et et.',
  },
  {
    index: 947,
    bgColor: 'white',
    name: 'Mohammed Herzog',
    initials: 'MH',
    jobTitle: 'Regional Functionality Executive',
    description:
      'Similique dolor temporibus tempore et eaque nobis veritatis nulla dolorum.',
    longText:
      'Quos velit explicabo provident aut pariatur qui eos neque consequatur. Et expedita dolor odit. Nam in sint molestiae vel et. Sint est et omnis molestias est veritatis explicabo eligendi. Placeat reiciendis ut ea error. Esse iste labore eaque ad saepe quod consequatur ut facilis.',
  },
  {
    index: 948,
    bgColor: '#f5f5f5',
    name: 'Elizabeth Hagenes',
    initials: 'EH',
    jobTitle: 'Human Infrastructure Representative',
    description: 'In magnam enim ea id voluptate neque est aut quis.',
    longText:
      'Adipisci molestiae sed quidem quae sed qui vel. Quisquam facilis ad eum dolorum eos. Esse est quos quas labore nisi et odit. Et itaque accusantium. Sit quis voluptatem inventore est cum.',
  },
  {
    index: 949,
    bgColor: 'white',
    name: 'Dannie Terry',
    initials: 'DT',
    jobTitle: 'Direct Interactions Specialist',
    description: 'Eius molestiae magnam qui quis dolorem est totam et et.',
    longText:
      'Est distinctio error a laudantium eum ut quisquam eaque autem. Ipsa expedita esse dolore hic. Possimus repellat a amet alias ut. Dolores voluptatum in voluptas nobis eum dolores rem possimus explicabo.',
  },
  {
    index: 950,
    bgColor: '#f5f5f5',
    name: 'Nicolas Schaden',
    initials: 'NS',
    jobTitle: 'Human Integration Supervisor',
    description: 'Maiores ipsa ut aut quia nulla officiis deleniti itaque ut.',
    longText:
      'Repudiandae iusto tempora assumenda deserunt beatae tenetur impedit voluptas et. Animi blanditiis voluptatem voluptatem nulla est rerum voluptates ut quam. Velit aut dolores nihil corporis quis sunt facilis voluptas error. Delectus recusandae ea omnis pariatur. Et aperiam veniam fuga molestiae recusandae.',
  },
  {
    index: 951,
    bgColor: 'white',
    name: 'Bobby Williamson',
    initials: 'BW',
    jobTitle: 'Corporate Accountability Engineer',
    description: 'Rerum id earum magni inventore aut autem neque ratione nemo.',
    longText:
      'Sit nam molestias. Illum nisi dolores omnis ratione dolores quisquam iure. Ut ratione rerum voluptatem et non voluptatibus. Et omnis fugit facere culpa aperiam ut. A nulla et.',
  },
  {
    index: 952,
    bgColor: '#f5f5f5',
    name: 'Rossie Wehner',
    initials: 'RW',
    jobTitle: 'National Usability Coordinator',
    description:
      'Voluptatum at sed temporibus perferendis saepe dicta repellat facere deleniti.',
    longText:
      'Repellat sequi maiores iusto amet non. Ut doloribus et. Sed ut sit saepe aperiam soluta mollitia.',
  },
  {
    index: 953,
    bgColor: 'white',
    name: 'Ward Schowalter',
    initials: 'WS',
    jobTitle: 'Product Factors Agent',
    description: 'Omnis non suscipit est cumque veritatis minus molestias nihil fuga.',
    longText:
      'Numquam veniam ut assumenda. Est ratione autem. Ex vero dolorum ut aut et cum fugiat ut. Ut sunt aut ad laboriosam. Aut omnis vel quia esse exercitationem dolorem et.',
  },
  {
    index: 954,
    bgColor: '#f5f5f5',
    name: 'Agnes Jacobson',
    initials: 'AJ',
    jobTitle: 'Direct Division Consultant',
    description:
      'Voluptatem omnis fuga ipsam similique sequi facere distinctio numquam qui.',
    longText:
      'Porro temporibus deleniti ea veritatis nihil esse tenetur. Neque optio ipsum vitae modi deleniti quidem consequuntur voluptatem. Possimus debitis dolores velit et minima aut cum rerum eveniet. Veniam omnis est vitae et labore ducimus tempora quis ducimus. Quia omnis dolorem consequatur ipsum quos.',
  },
  {
    index: 955,
    bgColor: 'white',
    name: 'Verla Funk',
    initials: 'VF',
    jobTitle: 'Internal Metrics Producer',
    description:
      'Aut voluptatem a voluptates nostrum animi ullam fugit exercitationem qui.',
    longText:
      'Ea animi assumenda tempora. In voluptatem aperiam vitae culpa non. Rerum rem quasi deserunt repudiandae quo totam.',
  },
  {
    index: 956,
    bgColor: '#f5f5f5',
    name: 'Mathew Deckow',
    initials: 'MD',
    jobTitle: 'Customer Interactions Analyst',
    description: 'Qui mollitia rerum aspernatur nihil quidem dolores in omnis in.',
    longText:
      'Dolore et ratione quis ea a sequi. Non cumque ducimus voluptatum voluptas eos perspiciatis ea rerum. Vero nihil ipsam beatae velit id modi. Voluptatem deleniti eum nisi enim unde nisi magni eos dicta.',
  },
  {
    index: 957,
    bgColor: 'white',
    name: 'Anderson Schinner',
    initials: 'AS',
    jobTitle: 'Central Operations Designer',
    description:
      'Doloremque architecto officia quae nam facere error neque quas tenetur.',
    longText:
      'Consequatur eveniet ea unde architecto corporis doloremque dolorem ullam est. Asperiores aut et sed modi. Consequatur cum dolor quo eveniet et vero consectetur autem. Sequi sunt aut nostrum magnam nulla.',
  },
  {
    index: 958,
    bgColor: '#f5f5f5',
    name: 'Felix Gorczany',
    initials: 'FG',
    jobTitle: 'Direct Data Architect',
    description:
      'Ea temporibus quae fugit exercitationem quis vitae aperiam odio incidunt.',
    longText:
      'Maxime explicabo natus. Aut cumque labore nisi ab. Eum beatae eum. Sit ut unde corporis. Unde eligendi natus porro quae ex. Earum harum aspernatur.',
  },
  {
    index: 959,
    bgColor: 'white',
    name: 'Nestor Kling',
    initials: 'NK',
    jobTitle: 'Legacy Brand Specialist',
    description: 'Ipsum autem dicta omnis consequatur iste blanditiis quo quaerat dicta.',
    longText:
      'Nihil et ab ut consequatur saepe. Hic hic iure magni sunt. Quia aut ut ad eos.',
  },
  {
    index: 960,
    bgColor: '#f5f5f5',
    name: 'Candida Rodriguez',
    initials: 'CR',
    jobTitle: 'Future Configuration Officer',
    description: 'Quo fugit ea voluptas praesentium error ex vel doloribus totam.',
    longText:
      'Quas aut cumque dolores assumenda cumque enim rerum sit. Repudiandae rem ut officiis enim fuga. Voluptatem quia placeat fuga aut animi quam reiciendis.',
  },
  {
    index: 961,
    bgColor: 'white',
    name: 'Jalen Nikolaus',
    initials: 'JN',
    jobTitle: 'Lead Mobility Supervisor',
    description: 'Autem harum nesciunt qui dolorum alias sit qui qui quis.',
    longText:
      'Unde nostrum magni. Qui unde et earum fugiat eius. Doloremque ipsam sint sint quaerat dolores. Rerum cupiditate ut inventore quasi nobis labore expedita repudiandae. Sit consectetur rerum illo omnis ipsa.',
  },
  {
    index: 962,
    bgColor: '#f5f5f5',
    name: 'Stanton Hartmann',
    initials: 'SH',
    jobTitle: 'Regional Accounts Consultant',
    description: 'Molestiae doloremque et sunt et et facilis molestiae beatae vitae.',
    longText:
      'Molestias fugit reprehenderit. Vel sit qui eum a. Dolorem voluptas in animi cumque cum et et doloremque delectus. Eum mollitia assumenda totam ratione suscipit est eligendi veritatis. Doloribus odio voluptas similique perferendis. Officia consequatur facilis necessitatibus.',
  },
  {
    index: 963,
    bgColor: 'white',
    name: 'Orpha Hayes',
    initials: 'OH',
    jobTitle: 'Senior Security Architect',
    description: 'Et est quis sunt pariatur odio dolorum sapiente non commodi.',
    longText:
      'Voluptate quia itaque ratione rerum. Corrupti dignissimos voluptatem fugit et illum qui aut molestias. Repudiandae ratione qui ea. Recusandae dolor ut at autem.',
  },
  {
    index: 964,
    bgColor: '#f5f5f5',
    name: 'Johanna Feest',
    initials: 'JF',
    jobTitle: 'Internal Creative Administrator',
    description:
      'Molestiae id explicabo doloremque blanditiis accusamus recusandae possimus est doloremque.',
    longText:
      'In et adipisci minus aliquam. Id minus ea quaerat aspernatur. Ducimus fugit molestiae corrupti repellendus eum aut sed veniam voluptatem. Enim voluptatibus pariatur est vero architecto architecto veritatis. Repudiandae voluptates officiis.',
  },
  {
    index: 965,
    bgColor: 'white',
    name: 'Neha Kessler',
    initials: 'NK',
    jobTitle: 'Principal Response Planner',
    description: 'Alias vel omnis hic iusto id officiis animi et nostrum.',
    longText:
      'Repellat nobis voluptas modi quo nam reprehenderit omnis delectus. Enim tempore earum illum a. Quo quis ut tenetur velit hic. Et est velit molestiae voluptatem et expedita cum. Cum sunt quia debitis.',
  },
  {
    index: 966,
    bgColor: '#f5f5f5',
    name: 'Sandy Rice',
    initials: 'SR',
    jobTitle: 'Global Group Consultant',
    description:
      'Iure et excepturi tempora pariatur et possimus tenetur molestiae maxime.',
    longText:
      'Eos et blanditiis ratione. Vel dolorum harum ullam et accusantium rerum sunt hic architecto. Hic quod iste non ut autem dolores. Numquam impedit tempore nesciunt magnam distinctio.',
  },
  {
    index: 967,
    bgColor: 'white',
    name: 'Jaqueline Corkery',
    initials: 'JC',
    jobTitle: 'Regional Research Consultant',
    description:
      'Occaecati ipsum ducimus veritatis omnis est veniam voluptatem sunt est.',
    longText:
      'Laboriosam quas illum optio recusandae. Laborum nisi a cumque. Distinctio unde molestiae officiis est molestiae.',
  },
  {
    index: 968,
    bgColor: '#f5f5f5',
    name: 'Keyon Balistreri',
    initials: 'KB',
    jobTitle: 'Regional Program Administrator',
    description: 'Vitae qui sed officia maiores commodi non quas explicabo voluptatem.',
    longText:
      'Impedit esse eius possimus omnis ea ad quidem. Dolorem veritatis quisquam sunt qui impedit. Quis doloremque eveniet esse eius deleniti quam libero illum tempora.',
  },
  {
    index: 969,
    bgColor: 'white',
    name: 'Rocky Terry',
    initials: 'RT',
    jobTitle: 'District Program Orchestrator',
    description: 'Accusantium consequatur sint aut ea sit voluptate est illo qui.',
    longText:
      'Perferendis illum sunt consequatur cumque quos mollitia quis rerum dolores. Illo optio ab ducimus aliquam hic incidunt voluptates qui error. Voluptatum nesciunt et illo possimus. Culpa at vitae.',
  },
  {
    index: 970,
    bgColor: '#f5f5f5',
    name: 'Pablo Stanton',
    initials: 'PS',
    jobTitle: 'Dynamic Accounts Facilitator',
    description: 'Architecto repellat et at labore labore tempore et doloribus sint.',
    longText:
      'Recusandae praesentium molestiae eaque corporis dignissimos et dolores. Nulla optio esse ducimus ipsa nulla sit necessitatibus laborum dolores. Necessitatibus dolores quidem sunt tempore distinctio. Tempora et in culpa accusamus magni. Odit voluptate accusamus beatae sit velit officia.',
  },
  {
    index: 971,
    bgColor: 'white',
    name: 'Dorothy Grant',
    initials: 'DG',
    jobTitle: 'Internal Branding Coordinator',
    description:
      'Voluptatem et consequatur aut velit corrupti sunt quidem accusamus odio.',
    longText:
      'Eaque dolor nemo est. Qui unde atque. Aut tenetur quia aut nihil quaerat velit. Consequatur est pariatur rerum recusandae qui eligendi.',
  },
  {
    index: 972,
    bgColor: '#f5f5f5',
    name: 'Christy Koss',
    initials: 'CK',
    jobTitle: 'Chief Accounts Liaison',
    description: 'Qui quia qui iste atque esse eos cupiditate quis sed.',
    longText:
      'Voluptatem distinctio corporis voluptatibus sed et et perferendis sequi. Repellendus expedita voluptatem. Harum quasi rerum. Consectetur quos voluptate. Ea qui voluptatum odit iure nostrum esse.',
  },
  {
    index: 973,
    bgColor: 'white',
    name: 'Zula Oberbrunner',
    initials: 'ZO',
    jobTitle: 'Forward Accountability Agent',
    description:
      'Et iste dolorem nostrum accusantium modi pariatur eveniet ducimus placeat.',
    longText:
      'Animi animi eaque omnis neque libero repellendus itaque fugiat non. Omnis ab eum voluptas voluptatem accusamus deleniti est sit. Explicabo voluptates quo deserunt. Amet adipisci voluptatem eaque ut ea tenetur.',
  },
  {
    index: 974,
    bgColor: '#f5f5f5',
    name: 'Lorine Feeney',
    initials: 'LF',
    jobTitle: 'Legacy Quality Assistant',
    description: 'Sunt et vel quibusdam fugit veniam et laudantium ipsum dignissimos.',
    longText:
      'Laboriosam consequatur soluta voluptas magnam quo. Non maxime consequatur perferendis tenetur tempora et non. Molestiae doloribus enim nostrum recusandae est quia. Exercitationem assumenda voluptas molestiae voluptatum. Sint ut adipisci. In minus esse quas magni mollitia beatae beatae.',
  },
  {
    index: 975,
    bgColor: 'white',
    name: 'Bobby Schoen',
    initials: 'BS',
    jobTitle: 'Human Directives Manager',
    description:
      'In nisi accusantium saepe nulla ratione accusantium impedit eligendi facilis.',
    longText:
      'Omnis perferendis dignissimos quas totam deserunt in. Sint consequatur delectus fugit ex doloremque assumenda quia accusamus enim. Est molestiae tempora quasi asperiores error laboriosam. Et omnis ratione ut qui ut itaque aut quis.',
  },
  {
    index: 976,
    bgColor: '#f5f5f5',
    name: 'Benedict Weber',
    initials: 'BW',
    jobTitle: 'Chief Tactics Associate',
    description: 'Ullam et quo suscipit suscipit sed quia voluptatem neque accusantium.',
    longText:
      'Dolor eligendi est reiciendis dolorem dolores laborum ad sunt. Illo nulla maiores et exercitationem et iusto autem. Eveniet officiis distinctio soluta qui. Autem ut saepe.',
  },
  {
    index: 977,
    bgColor: 'white',
    name: 'Danika Schaefer',
    initials: 'DS',
    jobTitle: 'Future Research Administrator',
    description:
      'Occaecati quibusdam animi non illo nihil repudiandae aliquid voluptates molestiae.',
    longText:
      'Sunt et aliquam dolores quae id alias nobis corrupti ea. Ut itaque non doloribus. Veritatis provident tempora tempora aut dolor nihil voluptatem recusandae. Expedita soluta ut distinctio at perspiciatis.',
  },
  {
    index: 978,
    bgColor: '#f5f5f5',
    name: 'Magnus Thompson',
    initials: 'MT',
    jobTitle: 'Dynamic Division Orchestrator',
    description: 'Et aliquid ex consequatur in eligendi ab illo non aut.',
    longText:
      'Ut perferendis accusantium sit soluta sit. Quia dolorum neque enim autem ut deserunt ut. Minima doloremque quis ut eum architecto quia est sed. Minima quis aut minus quidem quod laborum quibusdam laudantium.',
  },
  {
    index: 979,
    bgColor: 'white',
    name: 'Zella Marks',
    initials: 'ZM',
    jobTitle: 'Dynamic Communications Specialist',
    description:
      'Inventore odio facere nisi enim consequuntur dolores fuga deserunt eligendi.',
    longText:
      'Perspiciatis neque fuga ut doloribus enim suscipit qui repellat. Repellat ipsa quidem neque magni beatae et. Rerum provident explicabo possimus omnis quod molestiae quos.',
  },
  {
    index: 980,
    bgColor: '#f5f5f5',
    name: 'Torey Crooks',
    initials: 'TC',
    jobTitle: 'National Implementation Assistant',
    description: 'Ut dolores voluptatem et et dolorum ut exercitationem in molestiae.',
    longText:
      'At ad delectus dolor qui earum ipsa nesciunt ut molestiae. Ea placeat voluptatem omnis atque ullam tenetur. Ut doloribus repellendus repudiandae voluptas eligendi illo perspiciatis.',
  },
  {
    index: 981,
    bgColor: 'white',
    name: 'Taylor Lockman',
    initials: 'TL',
    jobTitle: 'Forward Operations Officer',
    description: 'Aut ut vero neque ad fuga quidem voluptas mollitia nulla.',
    longText:
      'Impedit consequatur rerum sapiente voluptatem provident at et. Dolor deserunt ut eligendi reiciendis quo. Et et omnis aut laborum sapiente ut aut porro adipisci.',
  },
  {
    index: 982,
    bgColor: '#f5f5f5',
    name: 'Anne Bayer',
    initials: 'AB',
    jobTitle: 'Customer Division Planner',
    description: 'Aperiam modi rerum quibusdam rem in occaecati quia saepe itaque.',
    longText:
      'Minima mollitia illum iure quae culpa aut odio rem occaecati. Inventore vel cupiditate. Atque beatae iure tempora est provident consequuntur. Non odit voluptatem asperiores laboriosam repudiandae est quos rerum laboriosam. Fuga voluptatem non ea qui aut voluptatem nobis.',
  },
  {
    index: 983,
    bgColor: 'white',
    name: 'Murphy Hessel',
    initials: 'MH',
    jobTitle: 'Internal Metrics Manager',
    description:
      'Numquam ex expedita ipsa omnis voluptatem voluptates dolores tempore harum.',
    longText:
      'Nobis minima minima. Eaque itaque illum. Rerum reprehenderit qui quasi voluptatem sit. Et voluptatem commodi.',
  },
  {
    index: 984,
    bgColor: '#f5f5f5',
    name: 'Salvatore Wintheiser',
    initials: 'SW',
    jobTitle: 'Global Data Executive',
    description: 'Qui debitis laborum id nihil nesciunt asperiores sed dolorem mollitia.',
    longText:
      'Et illo deserunt aliquid omnis nisi error voluptatem vel voluptates. Quaerat molestiae et suscipit delectus ex quam. Molestiae sint illum sequi explicabo ut. Repudiandae suscipit et odio provident qui.',
  },
  {
    index: 985,
    bgColor: 'white',
    name: 'Sharon Rice',
    initials: 'SR',
    jobTitle: 'Investor Factors Designer',
    description: 'Ipsa sint voluptates quo earum alias sed qui perferendis nihil.',
    longText:
      'Est praesentium perspiciatis animi odit est mollitia. Consequuntur aliquid dolorem nisi est laborum tempore et dolores et. Doloribus libero qui. Excepturi eaque deleniti eos. Nisi aliquid et laudantium ut officiis.',
  },
  {
    index: 986,
    bgColor: '#f5f5f5',
    name: 'Wilhelmine Larson',
    initials: 'WL',
    jobTitle: 'Investor Functionality Architect',
    description: 'Quae eius quia et mollitia tempora animi magnam aut quos.',
    longText:
      'Perspiciatis voluptate minus perferendis modi nemo itaque minus molestiae. Distinctio placeat repudiandae ut numquam quasi sequi nesciunt aut non. Impedit culpa reiciendis ut ut similique sint aut.',
  },
  {
    index: 987,
    bgColor: 'white',
    name: 'Peggie Hickle',
    initials: 'PH',
    jobTitle: 'Senior Factors Executive',
    description:
      'Aut rerum exercitationem molestias praesentium veritatis perspiciatis dignissimos omnis qui.',
    longText:
      'Quaerat aperiam a in qui quidem. Suscipit quos eos et at ducimus fugit eum culpa quas. Veniam praesentium inventore at libero dolorem perferendis sit. Eos maiores sed provident eos. Cum magni est autem. Enim vero sed iusto.',
  },
  {
    index: 988,
    bgColor: '#f5f5f5',
    name: 'Kelli Hudson',
    initials: 'KH',
    jobTitle: 'Dynamic Factors Agent',
    description:
      'Inventore doloribus error sit recusandae nihil enim nulla ipsum repellendus.',
    longText:
      'Officiis laborum hic veritatis iusto vel dolores quo quae. Voluptas eos molestiae sit ducimus id qui vitae molestiae. Rerum est nulla eos odit suscipit ipsum rerum. Aspernatur eum cumque totam ratione possimus ipsum voluptatem delectus deleniti.',
  },
  {
    index: 989,
    bgColor: 'white',
    name: 'Kaley Spencer',
    initials: 'KS',
    jobTitle: 'Direct Usability Facilitator',
    description: 'Voluptatem tempora ullam magni nesciunt rerum voluptatem aut eum at.',
    longText:
      'Velit ea sed officia harum quia placeat nostrum. Voluptates illum veniam aliquid ipsum vitae quas. Maiores aliquid praesentium et tenetur ut et quae animi sequi. Libero est impedit fugit quas ab et qui. Sed et accusantium sed distinctio. Atque et qui velit nihil aut.',
  },
  {
    index: 990,
    bgColor: '#f5f5f5',
    name: 'Aracely Boyle',
    initials: 'AB',
    jobTitle: 'District Marketing Associate',
    description:
      'Non repudiandae laboriosam accusantium voluptatem magnam officia consectetur placeat dolores.',
    longText:
      'Beatae eos non sit quidem cum quibusdam. Reiciendis impedit non iusto sit et sunt sequi unde assumenda. Possimus distinctio sunt est. Exercitationem suscipit incidunt maxime placeat eaque quod eligendi fugit.',
  },
  {
    index: 991,
    bgColor: 'white',
    name: 'Roberto Pollich',
    initials: 'RP',
    jobTitle: 'Principal Accounts Supervisor',
    description: 'Ex architecto praesentium est autem quia neque vel possimus qui.',
    longText:
      'Aspernatur veniam nihil et ea. Quia velit id nihil nihil voluptatum enim rerum iure. Aliquam molestiae soluta ut cumque. Deleniti laboriosam impedit distinctio qui.',
  },
  {
    index: 992,
    bgColor: '#f5f5f5',
    name: 'Charlotte Waelchi',
    initials: 'CW',
    jobTitle: 'Customer Optimization Facilitator',
    description:
      'Ipsum doloribus assumenda maiores porro corporis consectetur impedit fuga temporibus.',
    longText:
      'Magnam itaque ut rerum occaecati vel fugiat aut. Ut quae voluptas accusamus commodi molestiae. Molestiae velit maiores sit eaque adipisci eum numquam. Enim consequuntur ea minus ut. Culpa porro culpa perferendis dolores aut aut ut.',
  },
  {
    index: 993,
    bgColor: 'white',
    name: 'Presley Dach',
    initials: 'PD',
    jobTitle: 'Global Solutions Analyst',
    description:
      'Provident asperiores at quasi mollitia blanditiis eos voluptatem debitis quam.',
    longText:
      'Ex doloremque non vel aliquid amet voluptatibus. Et deleniti sed quibusdam doloremque officia consequatur. Aut enim dolorum maiores minima repellendus numquam. Inventore quibusdam deleniti molestias. Repudiandae autem assumenda omnis in dolor ea neque. Laboriosam natus non libero inventore aut aut ipsa labore.',
  },
  {
    index: 994,
    bgColor: '#f5f5f5',
    name: 'Esteban Rogahn',
    initials: 'ER',
    jobTitle: 'Chief Implementation Coordinator',
    description: 'Mollitia cumque voluptatem alias non fuga at harum impedit quo.',
    longText:
      'Est id in. Distinctio dolores rerum mollitia autem et repudiandae quisquam. Earum commodi eligendi illum quos sed et harum distinctio possimus. Harum qui sapiente ut aut et molestias. Consequatur laudantium quo architecto illum ex. Repudiandae incidunt sint in fuga consequatur mollitia dolores sed quia.',
  },
  {
    index: 995,
    bgColor: 'white',
    name: 'Lonie Graham',
    initials: 'LG',
    jobTitle: 'Dynamic Brand Director',
    description:
      'Quis aut dolor reiciendis autem est magni doloribus repudiandae consequatur.',
    longText:
      'Quo voluptates nemo. Rerum beatae hic nihil rerum nobis et perferendis qui ullam. Fuga neque rerum dolore.',
  },
  {
    index: 996,
    bgColor: '#f5f5f5',
    name: 'Velda McGlynn',
    initials: 'VM',
    jobTitle: 'National Brand Producer',
    description:
      'Et pariatur magni ducimus cupiditate nostrum excepturi qui sapiente eum.',
    longText:
      'Magni voluptatem pariatur veritatis. Quo doloremque minus voluptatum est rem fugiat maiores ipsum debitis. Dolor tempore aut. Dolorum magni nihil et qui consequatur illum eos quaerat quia. Ut laudantium quibusdam expedita. Et provident nemo.',
  },
  {
    index: 997,
    bgColor: 'white',
    name: 'Alessandro Hirthe',
    initials: 'AH',
    jobTitle: 'Internal Branding Facilitator',
    description:
      'Et dolor similique ut eligendi expedita culpa quasi molestias necessitatibus.',
    longText:
      'Voluptas voluptas et maxime qui pariatur velit quam. Qui omnis consectetur libero. Similique sed qui nobis autem excepturi et qui. Dolorem aut provident omnis officia sit similique.',
  },
  {
    index: 998,
    bgColor: '#f5f5f5',
    name: 'Leon Stracke',
    initials: 'LS',
    jobTitle: 'Legacy Branding Coordinator',
    description:
      'Accusamus totam iusto quod enim consectetur dolor veritatis maiores aliquam.',
    longText:
      'Est perspiciatis odio rerum dolores perferendis. Deleniti est nisi enim voluptatem et aperiam. Aut recusandae non.',
  },
  {
    index: 999,
    bgColor: 'white',
    name: 'Lennie Witting',
    initials: 'LW',
    jobTitle: 'Central Solutions Technician',
    description:
      'Voluptatem eos sequi aut aperiam asperiores quibusdam in inventore iusto.',
    longText:
      'Repellat iure vitae illum aut possimus. Temporibus et voluptatem eos voluptas et repellendus. In ut saepe ex quas. Ab sit architecto commodi. Quas mollitia qui sunt qui quam eveniet excepturi sit.',
  },
  {
    index: 1000,
    bgColor: '#f5f5f5',
    name: 'Darryl Beer',
    initials: 'DB',
    jobTitle: 'Product Marketing Associate',
    description: 'Aut et qui velit vel recusandae rerum tenetur asperiores aperiam.',
    longText:
      'Assumenda aut fugiat impedit sint. Ab consequatur asperiores culpa nam esse minima. Velit voluptatibus reprehenderit deserunt eveniet.',
  },
];
