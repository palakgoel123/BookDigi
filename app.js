// local reviews data
const reviews = [
  {
    id: 1,
    name: "The Hunger Games",
    job: "Suzanne Collins",
    img: "https://www.rd.com/wp-content/uploads/2018/11/hungergames.jpg?w=765",
    text: "Consistently ranked neck-and-neck with the Harry Potter novels, Suzanne Collins’ novel—the first in the dystopian Hunger Games trilogy—has more than 6.3 million ratings with an average rating of 4.3. The book introduces us to hero Katniss Everdeen, who leads a rebellion against the rulers of the post-apocalyptic country of Panem, where children are selected annually to participate in a televised, fight-to-the-death battle called the Hunger Games. Twelve boys and twelve girls with only one rule: kill or be killed. Fans of the book call it everything from “breathless” to “brutal”.",
  },
  {
    id: 2,
    name: "Divergent",
    job: "Veronica Roth",
    img: "https://www.rd.com/wp-content/uploads/2020/06/divergent.jpg?resize=1024,1024",
    text: "With more than 2.9 million ratings and a solid score of 4.19, the first installment in Veronica Roth’s series is another highly rated novel on BookDigi. Told from the point of view of main character Beatrice Prior, the story is set in a dystopian society where everyone is separated by their traits and attributes. Once every year, all 16-year-olds must choose the faction to which they will live the rest of their lives. The combination of very real characters and an original plot make this an absolute must-read ",
  },
  {
    id: 3,
    name: "Clockwork Angel",
    job: "Cassandra Clare",
    img: "https://www.rd.com/wp-content/uploads/2018/11/clockworkangel.jpg?resize=1024,1024",
    text: "Cassandra Clare’s best-selling 2010 young-adult novel Clockwork Angel is the first volume of her “Infernal Devices” trilogy, which is also part of her larger “Shadowhunter Chronicles” series. The supernatural series is set in 1878, where 16-year-old Tessa, upon arrival in London to find her brother, is kidnapped by two evil sisters. Later, a group of rescuers called the Shadowhunters are tasked with saving her. Fans swoon over the historical romance, which averages 4.3 stars from more than 574,000 ratings",
  },
  {
    id: 4,
    name: "To Kill a Mocking Bird",
    job: "Harper Lee",
    img: "https://www.rd.com/wp-content/uploads/2020/06/tokillamockingbird.jpg?resize=1024,1024",
    text: "With more than 4.5 million ratings and an average rating of 4.28, Harper Lee’s 1961 novel To Kill a Mockingbird is one of the highest-rated pieces of classic literature on BookDigi. Widely considered a literary masterpiece, the Pulitzer-prize-winning novel tells the story of eccentric protagonist Jean Louise (“Scout”) Finch and her family living in the fictional town of Maycomb, Alabama during the Great Depression, and touches on weighty subjects such as social inequality, prejudice, and good versus evil. The novel has also been chosen as “America’s Favorite Novel.”",
  },
  {
    id: 5,
    name: "Pride and Prejudice",
    job: "Jane Austen",
    img: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
    text: "With more than 3 million ratings and an average score of 4.26, Jane Austen’s enduring 1813 novel Pride and Prejudice remains one of the highest-rated novels. Set in rural England, this witty, humorous tale tells the story of the tumultuous relationship between outspoken Elizabeth and the much more reserved wealthy landowner Fitzwilliam Darcy. The novel has gone on to foster numerous adaptations for film and TV, as well as graphic novel versions. This book truly has the best of all worlds-- a wonderful romance, lovable characters, humor, and beautiful writing. ",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

let current = 0;
window.addEventListener("DOMContentLoaded", function () {
  show(current);
});
function show() {
  const item = reviews[current];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
nextbtn.addEventListener("click", function () {
  if (current == reviews.length - 1) current = -1;
  current++;
  show();
});
prevbtn.addEventListener("click", function () {
  if (current == 0) current = reviews.length;
  current--;
  show();
});
randombtn.addEventListener("click", function () {
  current = Math.floor(Math.random() * reviews.length);
  show();
});
