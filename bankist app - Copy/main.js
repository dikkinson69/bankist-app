'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//najpre zelimo da movemente od accounta displejujemo u kontenjeru 
//sa desne strane
//sa forEach cemo to. 
//najbolje je ne pisati kod u globalu, vec smesiti u funkciju

//parametar joj je data koji ce da uzme ova funkcija da obradjuje
//jer ce da prima niz movements od accounta
//i po pitanju parametara.Bolje je da funkciji passujemo data koji joj treba, nego da ga uzima iz globala
//u forEachu nam trebaju parametri mov i i. (movement i index)
//mov je da li je radnja withdraw ili deposit.
//a bitno je da se zna broj, tj index.
//u htmlu ima movements deo. U njemu ima movements row, to nam treba
//iskopiracemo ceo deo movementsa u templte string
//zatim je bitno samo da zamenimo data koji je hardcoded u htmlu
//sa onim koji je relevantan, sa mov parametrom
//dakle za movements value je to. date cemo kasnije obradjivati
//zatim i type  deposit, nam treba index umesto defaulta 2 deposit
//kao posebna varijabla nam treba terniary ioperator, da vidimo da li je
// novac podignut ili ulozen. Imamo type deposit i type withdrawal
//dodacemo tu varijablu terinarija type pored indexa 
//a takodje cemo i class name --deposit da promenimo da bude ${type} varijabla, tj termiary
//sada moramo attachovati ovaj html dole u movements kontejner u htmlu
//toce biti sa metodom. insertAdjacentHTML
//tu metodu cemo da odradimo na movements kontejneru. Dakle stvaramo nove movements rowowve
//trebaju anm elementu klase movements npt containerMovements
//u inserAdjacnetHTML imamo u () prvo DOMstring koji predstavlja poziciju, relativnu od elemetna
//beforebegin, afterbegin, beforeend, afterend
//drugi argument ce biti samo string za ubacivanje html
//to je to ceo movements accounta1 se ucitao u kontejneru movements. napravili se novi rowovi   

//sada nem treba da ispraznimo ceo kontejner, da mozemo da overwritujemo, ubacujemo nove movments rowove
//  containerMovements.innerHTML = ''; na ovu foricu
// slicno kao kad bi .textContent = '' ili 0


//displayMovements(account1.movements);



//COPMUTING USERNAMES

//postoji acounts array gore
//uzecemo usera account 3 npr i napraviti varijablu sa stringom
//splitovacemo ga u NIZ sa  3 razlicia stringa , posto su 3 reci u imenu
//const user = 'Steven Thomas Williams';
//loopojemo sa mapom kroz niz da izvucemo samo prva slova iz svake 3 reci



//hocemo da napravimo username za sve accounte u accounts nizu
//const accounts = [account1, account2, account3, account4];
//loopovacemo kroz ovaj niz sa forEachom. necemo map jer map napravi novi niz, mutira ga
//napravicu novu funkciju kao createUserNames, jer da bi svakog
//acounta provukao kroz funkciju i izbacioo pocetna 3 slova
//u parametru funkcije mora da bude accounts, kojem ce argument
//biti niz accounts
//koristicemo properije objekata razlicitih accounta
//ima owner property sto je string sa imenom. Kod svakog objekta
//ne treba nam da returnujemo nista



//testiramo prvog accounta

//calcDisplayBalance(currentAccount);

//i drugog

//calcDisplayBalance(account2.movements);

//fora je kada se neko uloguje, da mu pokaze ukupnno stanje racuna

//od flow charta imamo display movements i calculate balance


//izracunavamo income,outcome, interests u donjem levom uglu
//to su u sustini svi deposits
//znaci chainujemo filter i reduce da odradimo ovo
//sada ga moramo zvajznuti u div class summary, pa tu ima neki <p> summary value ine
//gore smo ga uhvatili domom kao labelSumIN, labelSumOut  i labelSumInterest
//interest je fazon da bana svaki put uzeme proviziju kada ulazemo repa
// i to je 1.2% ulozenog
//hocemo da napravimo i da banka uzima proviziju, samo ako je interest 1€, nikako nesto ispod
//to je onih 0,84 u nizu, sto nece uracunati

//calcDisplaySummary(account1.movements);

//IMPLEMENTING LOGIN

//html element form ima login button(btnLogin), na koji cemo staviti event listener
//<input> element ina login (inputLoginUserename ) input klasu
//drugi <input> ima pin klasu. (inputLoginPin)
//to nam sve treba

//ovaj console.log ucitava LOGIN samo na sekundu
//jer je btn u form html elementu, a po defaultu, on uvek
//ucitava, refreshuje stranicu!!!!
//zato ide ova built in funkcija preventDefault()

//ono sto zelimo stvarno je da nadjemo account po  osnovu na username
//koji je user napisao. Za to je koristan FIND
//potrebna nam je i variabla currentAccount
//ali van event listenera!!! u globalu
//na koju cemo da asajnujemo find acc inputLoginUsername.value

//sada pin da odradimo
//vazno! input value je uvek string, tako da treba u number da ga pretvorimo
//currentAccount?.pin ovo je optional chaining metoda sa ?
//znaci ako pin postoji i ako je account tacan, dozvoljava login. U vidu poruke u konzooli
//treba na m display UI and welcome message, i kasnije display summary, baance i movements
//sve to kad ase ulogujujemo
//u cssu u .app klasi opaciyy je stavljen u komentar, a inace je 0;
//to ce refreshovanjem staviti nas na prvu stranicu za logovanje
//zato cemo da manipulisemo containerApp dom elementom, cele stranice i aplikacije
//da mu damo opacity 100, kako bi bio accoun vidljiv
//welecome message currentAccount.owner.split(' ')[0] ovo je da pise welcome back, first name...
//imamo za display calcDisplay summary, movements, balance... gore nam je hard coded, al nam ne treba u sustini to ni za kurac
//nego cemo da ga lepo ubacino u event handler buttona, sto ga radimo dole
//

//interest rate moramo da koristimo tako sto svaki user ima razlicit interest rate
//modifikovacemo interes rate u calcSummary


//   if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
//     console.log('LOOGIN');
//   }s]




//TRANSFERING MONEY
//imamo button btn transfer, koji smo uhvatili domom kao
//btnTransfer, na njega stavljamo event handler
//takodje nam treba i form input ammount (inputTransferTo)i form input to(formInputAmmount)
//vrlo slicne operacija kao i sa btnLoginom gore
//treba nam da addujemo negativ movement za usera i positiv za primaoca
//jer user gubi kada salje pare, a primalac dobija
//moramo takodje cekirati da li je amount positive value 
//i da li user koji salje pare ima trenutno dovoljno para
//takodje i da user ne moze sebi da sibne pare


//dodajemo i sort kao parametar da je = false
const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML = '';
  
  //za sortovanje cemo morti i slice ovaj da iskoristimo
  //ovaj terniary imamamo i da bude ascending order
  const movs = sort ? movements.slice().sort((a,b) => a - b) 
  : movements;

  movs.forEach(function(mov, i){
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}</div>
        </div>
        `;

      containerMovements.insertAdjacentHTML
      ('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

//ovu funkciju mozemo da pozovemo bilo gde u kodi i odradice ova 3 taska
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event listeneri
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

   
    // Updating UI
    
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  //clearing the input field
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
     receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    
    //console.log('transfer valid');
    //- minus oznacava da je ovo negative amount
    //a ovo dole ispod positive amount
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    
    updateUI(currentAccount);
  }
});


/////////
//banka ima pravilo da dozvoljava pozajmicu samo ako
//ima jedan deposit koji je minimum 10% od sume koju hocemo
//da ujmimo
//btn loan cemo koristini
//i inputLoanAmount cemo koristiti, to je field za repa
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  
  //if this is true
  if (amount > 0 && currentAccount.movements
    .some(mov => mov >= amount * 0.1)) {
      //add positive movements
      currentAccount.movements.push(amount);

      //update ui
      updateUI(currentAccount);
    }
    //clear input field
    inputLoanAmount.value =''
});






/////////////////
//find index metoda
// nju cemo koristiti za close account, sto u sustini
//brise account iz accounts niza
//za brisanje elementa koristimo splice metod, ali nam treba
// index koji bi trebali da brisemo
//na btnClose nam treba event  handler

btnClose.addEventListener('click', function(e){
  e.preventDefault();
  ///clearing the input field
  console.log('deleted');

  //proveravamo user name i pin da l su dobri
  //input close user name i input close use pin
  //ako ulogujemo js index mu je 0, jd 1, stw 3 itd
  if(inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin) {
      
      //definisemo index
      const index = accounts.findIndex(function(acc) {
        return   acc.username === currentAccount.username;
      });
      //splice metoda, na odredjenom indexu i komada 1
      //delete account
      console.log(index);
      accounts.splice(index, 1);

      //logging out the user je hide UI u sustini
      //i namestanje opacity = 0;
      containerApp.style.opacity = 0;


  }
  inputCloseUsername.value = inputTransferTo.value = '';


});

/////////////////////
//SORTOVANJE

//ima sort button na dnu, hocemo da sortujemo movemente po redu
//u display movements cemo da dodamo i sort parametar
//sada cemo btnSort da odradimo
//!sorted false operator, fa bi bilo oposite 
//da mozemo da ga obrcemo sa klikom na sort, zato ovo sve radimo
let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);//gore u display funkciji smo ga stavili kao false
  sorted = !sorted;
});