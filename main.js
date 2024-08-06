let employes = JSON.parse(localStorage.getItem('employees')) || [

    {
        id: 1,
        fullName: "Lionel Messi",
        position: "Forward",
        age: 36,
        team: "Inter Miami CF",
        goals: 672,
        photoUrl: "https://tiermaker.com/images/templates/20-mejores-jugadores-de-la-historia-15609426/156094261676490866.jpg",
        phone: "+1234567890",
        salary: 41000000,
        description: "Lionel Messi is an Argentine professional footballer who plays as a forward for Inter Miami CF. Widely regarded as one of the greatest players of all time, Messi has won numerous awards including seven Ballon d'Or titles. He spent most of his career at FC Barcelona, where he became the club's all-time top scorer."
    },
    {
        id: 2,
        fullName: "Cristiano Ronaldo",
        position: "Forward",
        age: 39,
        team: "Al Nassr",
        goals: 700,
        photoUrl: "https://i1.sndcdn.com/avatars-000268336997-p18twn-t500x500.jpg",
        phone: "+1234567891",
        salary: 65000000,
        description: "Cristiano Ronaldo is a Portuguese professional footballer who plays as a forward for Al Nassr. Known for his goal-scoring abilities and athleticism, Ronaldo has won five Ballon d'Or awards and is considered one of the best players in football history. He has played for clubs such as Manchester United, Real Madrid, and Juventus."
    },
    {
        id: 3,
        fullName: "Neymar Jr",
        position: "Forward",
        age: 32,
        team: "Al Hilal",
        goals: 400,
        photoUrl: "https://s3mn.mnimgs.com/img/shared/userimages/userimage_1707477.jpg",
        phone: "+1234567892",
        salary: 36000000,
        description: "Neymar Jr is a Brazilian professional footballer who plays as a forward for Al Hilal. Renowned for his dribbling skills, flair, and goal-scoring capabilities, Neymar has been a crucial player for both his club and the Brazilian national team. He has previously played for Santos, Barcelona, and Paris Saint-Germain."
    },
    {
        id: 4,
        fullName: "Kylian Mbappe",
        position: "Forward",
        age: 25,
        team: "Paris Saint-Germain",
        goals: 200,
        photoUrl: "https://f.ptcdn.info/292/079/000/rmwd32asiPc8GRA1d3c-s.jpg",
        phone: "+1234567893",
        salary: 30000000,
        description: "Kylian Mbappe is a French professional footballer who plays as a forward for Paris Saint-Germain. Known for his incredible speed and finishing ability, Mbappe has quickly risen to fame and is considered one of the best young talents in the world. He played a key role in France's 2018 World Cup victory."
    },
    {
        id: 5,
        fullName: "Robert Lewandowski",
        position: "Forward",
        age: 35,
        team: "Barcelona",
        goals: 500,
        photoUrl: "https://tiermaker.com/images/templates/delanteros-laliga-23-24-16136710/161367101693865235.webp",
        phone: "+1234567894",
        salary: 24000000,
        description: "Robert Lewandowski is a Polish professional footballer who plays as a forward for Barcelona. Known for his goal-scoring prowess, Lewandowski has been one of the top strikers in Europe for over a decade. He has won multiple league titles and individual awards during his time at Borussia Dortmund, Bayern Munich, and now Barcelona."
    },
    {
        id: 6,
        fullName: "Kevin De Bruyne",
        position: "Midfielder",
        age: 32,
        team: "Manchester City",
        goals: 90,
        photoUrl: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjAzMjc3OTg3MzA1NDk3Nzgy/imago1038444564h.jpg",
        phone: "+1234567895",
        salary: 28000000,
        description: "Kevin De Bruyne is a Belgian professional footballer who plays as a midfielder for Manchester City. Known for his passing, vision, and playmaking abilities, De Bruyne is considered one of the best midfielders in the world. He has been a key player in Manchester City's success in recent years."
    },
    {
        id: 7,
        fullName: "Virgil van Dijk",
        position: "Defender",
        age: 32,
        team: "Liverpool",
        goals: 30,
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyWNRy8KNyRYNuf71kk_uZmqf8NoaKgjwnw&s",
        phone: "+1234567896",
        salary: 22000000,
        description: "Virgil van Dijk is a Dutch professional footballer who plays as a defender for Liverpool. Renowned for his defensive skills, leadership, and aerial ability, Van Dijk is considered one of the best defenders in the world. He has been instrumental in Liverpool's recent successes, including their Champions League victory."
    },
    {
        id: 8,
        fullName: "Luka Modric",
        position: "Midfielder",
        age: 38,
        team: "Real Madrid",
        goals: 70,
        photoUrl: "https://imageio.forbes.com/specials-images/imageserve/65d47bae988113674c790633/Real-Madrid-CF-v-Girona-FC---LaLiga-EA-Sports/960x0.jpg?format=jpg&width=960",
        phone: "+1234567897",
        salary: 20000000,
        description: "Luka Modric is a Croatian professional footballer who plays as a midfielder for Real Madrid. Known for his creativity, passing, and dribbling, Modric has won numerous awards, including the Ballon d'Or. He has been a key player in Real Madrid's midfield for many years."
    },
    {
        id: 9,
        fullName: "Sergio Ramos",
        position: "Defender",
        age: 37,
        team: "Sevilla",
        goals: 130,
        photoUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4500,h_2531,x_0,y_148/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/384/01hkayt7ht7vkzc7d34s.jpg",
        phone: "+1234567898",
        salary: 15000000,
        description: "Sergio Ramos is a Spanish professional footballer who plays as a defender for Sevilla. Known for his leadership, defensive skills, and goal-scoring ability, Ramos is considered one of the best defenders of his generation. He spent most of his career at Real Madrid, where he won numerous titles."
    },
    {
        id: 10,
        fullName: "Mohamed Salah",
        position: "Forward",
        age: 32,
        team: "Liverpool",
        goals: 250,
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ah8K24Ut39NPateObyY2ipq6cRijhY8LDA&s",
        phone: "+1234567899",
        salary: 30000000,
        description: "Mohamed Salah is an Egyptian professional footballer who plays as a forward for Liverpool. Known for his speed, dribbling, and goal-scoring ability, Salah is considered one of the best forwards in the world. He has been a key player in Liverpool's recent successes, including their Premier League and Champions League titles."
    }
]

let tBody = document.querySelector('tbody')
let table = document.querySelector('.mainTable')
let info = document.querySelector('.fullInfo')
let playersText = document.querySelector('.players')
render(employes)

function render(array) {
    array.forEach((employee, index) => {
        let cloneTemplate = document.querySelector('.template')
        let clone = document.importNode(cloneTemplate.content, true)

        clone.querySelector('.name').textContent = employee.fullName + ': touch me for more info'
        clone.querySelector('.name').onclick = function () {
            playersText.innerHTML = ''
            table.innerHTML = ''

            let infoTemplate = document.querySelector('.contnetTemplate')
            let infoClone = document.importNode(infoTemplate.content, true)

            infoClone.querySelector('.image').src = employee.photoUrl
            infoClone.querySelector('.description').textContent = employee.description
            infoClone.querySelector('.fullName').textContent = employee.fullName 
            infoClone.querySelector('.age').textContent = 'Age: ' + employee.age
            infoClone.querySelector('.position').textContent = 'Position: ' + employee.position
            infoClone.querySelector('.goals').textContent = 'Goals: ' + employee.goals
            infoClone.querySelector('.team').textContent = 'Currrent Team: ' + employee.team
            infoClone.querySelector('.phone').textContent = 'Phone number: ' + employee.phone
            infoClone.querySelector('.salary').textContent = 'Total salary: ' + employee.salary

            let closeBtn = document.createElement('a')
            closeBtn.href = "./index.html"
            closeBtn.classList.add('btn', 'btn-outline-info', 'w-25', 'closeBtn')
            closeBtn.innerHTML = 'Back to main menu'

            console.log(infoClone);
            infoClone.append(closeBtn)
            info.append(infoClone)
        }

        clone.querySelector('.age').textContent = employee.age
        clone.querySelector('.position').textContent = employee.position
        clone.querySelector('.number').textContent = employee.phone
        clone.querySelector('.salary').textContent = '$' + employee.salary
        clone.querySelector('.id').textContent = index + 1
        clone.querySelector('.delete').setAttribute('onclick', `deleteEmployee(${employee.id})`)

        clone.querySelector('.update').onclick = () => {

            document.querySelector('.nameOfEmployee_update').value = employee.fullName
            document.querySelector('.nameOfEmployee_update').setAttribute('edit-emp-id', employee.id)
            document.querySelector('.ageOfEmployee_update').value = employee.age
            document.querySelector('.positionOfEmployee_update').value = employee.position
            document.querySelector('.salaryOfEmployee_update').value = Number(employee.salary)
            document.querySelector('.phoneOfEmployee_update').value = Number(employee.phone)

            document.querySelector('.team_update').value = employee.team
            document.querySelector('.goal_update').value = employee.goals
            document.querySelector('.photo_update').value = employee.photoUrl
            document.querySelector('.description_update').value = employee.description
        }


        tBody.append(clone)

    });
}

function addEmployee() {
    let name = document.querySelector('.nameOfEmployee').value
    let age = document.querySelector('.ageOfEmployee').value
    let position = document.querySelector('.positionOfEmployee').value
    let salary = document.querySelector('.salaryOfEmployee').value
    let phone = '+' + document.querySelector('.phoneOfEmployee').value
    let team = document.querySelector('.team').value
    let goal = document.querySelector('.goal').value
    let photo = document.querySelector('.photo').value
    let description = document.querySelector('.description').value


    let newEmployee = {
        id: employes[employes.length - 1].id + 1,
        fullName: name,
        position: position,
        age: age,
        salary: salary,
        phone: phone,
        team: team,
        goals: goal,
        photoUrl: photo,
        description: description

    }

    employes.push(newEmployee)

    tBody.innerHTML = ''
    render(employes)

    localStorage.setItem('employees', JSON.stringify(employes))

    document.querySelector('.nameOfEmployee').value = ''
    document.querySelector('.ageOfEmployee').value = ''
    document.querySelector('.positionOfEmployee').value = ''
    document.querySelector('.salaryOfEmployee').value = ''
    document.querySelector('.phoneOfEmployee').value = ''
    document.querySelector('.team').value = ''
    document.querySelector('.goal').value = ''
    document.querySelector('.photo').value = ''
    document.querySelector('.description').value = ''

}

function deleteEmployee(id) {
    employes = employes.filter(employee => {
        return employee.id !== id
    })

    let index = 0

    employes.map(employee => {
        index++
        employee.id = index
    })

    tBody.innerHTML = ''
    render(employes)
    localStorage.setItem('employees', JSON.stringify(employes))
}


let saveChanges = document.querySelector('.save-changes')

saveChanges.addEventListener('click', () => {
    
    tBody.innerHTML = ''
    let empId = document.querySelector('.nameOfEmployee_update').getAttribute('edit-emp-id')

    employes.forEach(employee => {
        if (employee.id == empId) {
            employee.fullName = document.querySelector('.nameOfEmployee_update').value
            employee.age = document.querySelector('.ageOfEmployee_update').value
            employee.position = document.querySelector('.positionOfEmployee_update').value
            employee.salary = document.querySelector('.salaryOfEmployee_update').value
            employee.phone = document.querySelector('.phoneOfEmployee_update').value
            employee.team = document.querySelector('.team_update').value
            employee.goals = document.querySelector('.goal_update').value
            employee.photoUrl = document.querySelector('.photo_update').value
            employee.description = document.querySelector('.description_update').value 
        }
    })

    render(employes)

    document.querySelector('.nameOfEmployee_update').removeAttribute('edit-emp-id')
    localStorage.setItem('employees', JSON.stringify(employes))
    
})

function search() {
    tBody.innerHTML = ''
    let search = document.querySelector('.search')
    let searchedEmployee = employes.filter(employee => {
        return employee.fullName.toLowerCase().includes(search.value)
    })

    render(searchedEmployee)
}

function fullInfo() {
    table.innerHTML = ''

    employes.forEach(employee => {
        let infoTemplate = document.querySelector('.contnetTemplate')
        let infoClone = document.importNode(infoTemplate.content, true)

        infoClone.querySelector('.image').src = employee.photoUrl
        infoClone.querySelector('.description').textContent = employee.description
        infoClone.querySelector('.fullName').textContent = employee.fullName
        infoClone.querySelector('.age').textContent = 'Age: ' + employee.age
        infoClone.querySelector('.position').textContent = 'Position: ' + employee.position
        infoClone.querySelector('.goals').textContent = 'Goals: ' + employee.goals
        infoClone.querySelector('.team').textContent = 'Currrent Team: ' + employee.team
        infoClone.querySelector('.phone').textContent = 'Phone number: ' + employee.phone
        infoClone.querySelector('.salary').textContent = 'Total salary: ' + employee.salary

        console.log(infoClone);

        info.append(infoClone)

    })


}
