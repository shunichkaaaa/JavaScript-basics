console.log("Before");

// getUser(1)
//   .then((user) => getRepositories(user.githubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log(commits))
//   .catch((err) => console.log("Error", err.message));

//Async and await
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err);
  }
}
displayCommits();

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
      //resolve(["repo1", "repo2", "repo3"]);
      reject(new Error("Could not get the repos."));
    }, 2000)
  );
}

function getCommits(repo) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log("Returning commits...");
      resolve(["commit"]);
      //reject(new Error("crashed"));
    }, 2000)
  );
}
