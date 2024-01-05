console.log("Before");

// getUser(1, (user) => {
//   getRepositories(user.githubUsername, (repos) =>
//     getCommits(repos[0], (commits) => console.log(commits))
//   );
// });

getUser(1)
  .then((user) => getRepositories(user.githubUsername))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log(commits))
  .catch((err) => console.log("Error", err.message));

console.log("After");

function getUser(id) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Reading user from database...");
      resolve({ id: id, githubUsername: "shunichkaaaa" });
    }, 2000)
  );
}

function getRepositories(username) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Calling github API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000)
  );
}

function getCommits(repo) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Returning commits...");
      // resolve(["commit"]);
      reject(new Error("crashed"));
    }, 2000)
  );
}
