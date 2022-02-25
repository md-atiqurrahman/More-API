const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(data => displayBuddies(data.results));
}
loadBuddies();

const displayBuddies = buddies =>{
    const div = document.getElementById('buddies-container');
    for (const buddy of buddies){
       const p = document.createElement('p');
       p.innerText = `Name:${buddy.name.title} ${ buddy.name.first} ${buddy.name.last}  E-mail:${buddy.email}`;
       div.appendChild(p);
    }

}