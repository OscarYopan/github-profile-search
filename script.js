const APIURL = 'https://api.github.com/users/'

const form = document.querySelector('#form')
const search = document.querySelector('#search')
const main = document.querySelector('#main')

async function getUser(username) {
  try {
    const { data }  = await axios.get(APIURL + username)

    console.log(data); 
  } catch(err) {
    console.log(err);
  }
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
      <div class="pohto">
        <img src="https://randomuser.me/api/portraits/men/40.jpg" alt="avatar" class="avatar">
      </div>

      <div class="user-info">

        <h2>John Smith</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, distinctio!</p>

        <ul>
          <li>14 <strong>Followers</strong></li>
          <li>8 <strong>Following</strong></li>
          <li>76 <strong>Repos</strong></li>
        </ul>

        <div id="repos">
          <a href="#" class="repo">Repo 1</a>
          <a href="#" class="repo">Repo 2</a>
          <a href="#" class="repo">Repo 3</a>
        </div>

      </div>
    </div>
  `
  main.innerHTML = cardHTML
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const user = search.value

  if (user) {
    getUser(user)

    search.value = ''
  }
})