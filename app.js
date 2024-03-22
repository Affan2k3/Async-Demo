console.log("Before")
const data = getUser(1, (user) => {


    // 
    getRepos(user.username, (repos) => {
        console.log("Repos:",repos)
    }) 
})
console.log("After")

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading user from database")
        callback({id:id, username: "affan"})
    }, 2000);
}

function getRepos(id,callback) {
    setTimeout(() => {
        console.log("Getting Repos")
        callback([
            'repo1','repo2','repo3','repo4'
        ])
    }, 2000);
}