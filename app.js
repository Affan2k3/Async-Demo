console.log("Before")
getUser(1, getRepos)
console.log("After")

function getRepos(user) {
    getRepos(user.username, getCommits)
}


function getCommits(repo) {
    getCommits(repo, displayCommits)
}

function displayCommits(commits) {
    console.log(commit)
}




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

