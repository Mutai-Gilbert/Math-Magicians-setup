import './style.css';

// event listener to the home page

const home = document.querySelector('.home');
const calc = document.querySelector('.calc');
const myQuote = document.querySelector('.my-quote');

// various sections

home.addEventListener('click', () => {
  const calculator = document.querySelector('.calculator');
  calculator.style.display = 'none';
  const quotes = document.querySelector('.quote');
  quotes.style.display = 'none';
  const divHome = document.createElement('div');
  divHome.innerHTML = `
        <h2>Welcome to our page</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis perspiciatis ex ad, 
            laudantium distinctio inventore aperiam id officiis aliquam neque. Autem, quo asperiores. Minus, 
            quasi eum! Id cupiditate alias blanditiis quidem officiis at labore voluptates, 
            laudantium placeat facilis quas soluta hic esse recusandae quasi possimus eos facere saepe ut temporibus eaque? 
           
           <br>
           <br> Voluptas, aperiam inventore maiores libero sit dolores repellat sapiente rem. Et consequuntur, 
            tempore maiores, officia modi aspernatur inventore architecto error perspiciatis tempora vero quos,
             labore commodi nobis officiis. 
             
             <br>
             <br>
             Reprehenderit distinctio minus architecto blanditiis!
              Similique suscipit molestias laudantium, aperiam eos nisi ducimus!
              <br>
              <br>
              Dignissimos dolorum ea minus libero quisquam voluptates quam? Necessitatibus a quidem animi id dolor adipisci 
               vero labore quae est enim minus magnam, doloremque voluptatum iusto expedita nisi reiciendis.</p>
    `;
  document.body.append(divHome);
});

calc.addEventListener('click', () => {
  const divCalc = document.createElement('div');
  divCalc.innerHTML = `
        <h2 class="calculator-heading">
            Let's do some math
        </h2>
        <div class="my-calculator">

            <p class="para">Your calculator</p>

        </div>
    `;
  const welcomePage = document.querySelector('.welcome-page');
  welcomePage.style.display = 'none';
  const quotes = document.querySelector('.quote');
  quotes.style.display = 'none';

  document.body.append(divCalc);
});

myQuote.addEventListener('click', () => {
  const welcomePage = document.querySelector('.welcome-page');
  welcomePage.style.display = 'none';
  const calculator = document.querySelector('.calculator');
  calculator.style.display = 'none';
  const divThree = document.createElement('div');
  divThree.innerHTML = `
  
    <p>Mathematics is not about numbers, equations, computations,
        or algorithms: it is about understanding. -William Paul Thurston</p>

    `;

  document.body.append(divThree);
});