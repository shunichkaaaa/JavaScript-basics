console.log("Before");

//First approach (--)
// getRepositories(
//   getUser(1, (user) => {
//     return user.githubUsername;
//   }),
//   (repos) => console.log(repos)
// );

//Second approach
value = getUser(1, (user) => {
  getRepositories(user.githubUsername, (repos) => console.log(repos));
});

console.log(value);

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from database...");
    callback({ id: id, githubUsername: "shunichkaaaa" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling github API...");
    console.log(username);
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
