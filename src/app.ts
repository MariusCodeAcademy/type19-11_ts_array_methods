import { StudArr, StudType, students } from './data/data.js';

console.log('Hello from app.ts!');

// importuoti students

// iskonsolinti pirma studenta
// console.log('students ===', students[0]);

// sukurti funkcija kuri atspausdina ir grazina prima studenta
// argumnetu primima studentu masyva
function printFirst(arr: StudArr): StudType {
  console.log('pirmas el yra', arr[0]);
  return arr[0];
}
printFirst(students);

// sukurti funkcija kuri ima studentu masyva kaip argumenta ir:

// 1. grazina nauja masyva studentus kurie turi masina
// 2. grazina nauja masyva su zmonemis is Vilniaus
// 3. grazina nauja masyva kuriame yra moterys
// 4. grazina true jei yra nors vienas zmogus is Kauno
// 4.1 ima antra argumenta miesta. Grazina true jei yra nors vienas zmogus is argumentu gauto miesto. isTherePersonFrom('Vilnius')
// 4.2 atlikti [4.1] bet kad veiktu nepriklausomai nuo didziuju ir mazuju raidziu
// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
// 6  Grazinti nauja masyva kuriame yra visu zmoniu amziai;
// 7. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
// 8. Grazinti isrikiuota masyva pagal amziu
// 8. Grazinti isrikiuota masyva pagal varda
// 9. Grazinti isrikiuota masyva pagal antra argumenta kuris yra string
// 9.1. [9uzd] bet antras argumentas yra vienas is studento objektu key reiksmiu tipas

// 10 grazinti objekta kuriame yra suskirstytos lytys i objektus:
//  { males: [vyru objektai], females: [moteru objektai] };
