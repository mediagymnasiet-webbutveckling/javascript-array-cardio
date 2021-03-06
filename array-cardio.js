    // Ok. Du ska öva array-metoderna MAP, FILTER, REDUCE, SORT på de ifyllda arrayerna inventors, people och transportations
    // Se uppgift 1-7 nedan

    const inventors = [{
      first: 'Albert',
      last: 'Einstein',
      year: 187
      passed: 1955
    },
    {
      first: 'Isaac',
      last: 'Newton',
      year: 1643,
      passed: 1727
    },
    {
      first: 'Galileo',
      last: 'Galilei',
      year: 1564,
      passed: 1642
    },
    {
      first: 'Marie',
      last: 'Curie',
      year: 1867,
      passed: 1934
    },
    {
      first: 'Johannes',
      last: 'Kepler',
      year: 1571,
      passed: 1630
    },
    {
      first: 'Nicolaus',
      last: 'Copernicus',
      year: 1473,
      passed: 1543
    },
    {
      first: 'Max',
      last: 'Planck',
      year: 1858,
      passed: 1947
    },
    {
      first: 'Katherine',
      last: 'Blodgett',
      year: 1898,
      passed: 1979
    },
    {
      first: 'Ada',
      last: 'Lovelace',
      year: 1815,
      passed: 1852
    },
    {
      first: 'Sarah E.',
      last: 'Goode',
      year: 1855,
      passed: 1905
    },
    {
      first: 'Lise',
      last: 'Meitner',
      year: 1878,
      passed: 1968
    },
    {
      first: 'Hanna',
      last: 'Hammarström',
      year: 1829,
      passed: 1909
    }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
    'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester',
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
    'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle',
    'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
    'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'
  ];

  const transportation = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car',
  'truck'
];

  // 1. Använd FILTER för att få en ny array av "inventors" födda på 1500-talet

  // 2. Använd MAP så att du får en ny array med för- och efternamn ihopslagna för alla "inventors"
 
  // 3. Använd REDUCE för att summera hur många år totalt alla "inventors" var i livet
  
  // 4. Använd SORT för att sortera "inventors" från yngst till äldst
  
  // 5. Använd SORT för att sortera "people" i alfabetisk ordning efter efternamn!
  // Tips: Använd metoden split()

  // 6. Använd REDUCE för att summera varje typ av "transportation". D.v.s antal "cars", "trucks", etc. (Liten utmaning..)

  // 7. Kom på en egen twist med datat du har :-)
