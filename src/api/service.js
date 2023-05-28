const BASE_URL = "https://mack-webmobile.vercel.app/api/users";
const AVATAR_BASE_URL = "https://randomuser.me/api/portraits";

export async function readUsers() {
  try {
    const response = await fetch(BASE_URL);
    const users = await response.json();
    return users;
  } catch (err) {
    console.error(err);
  }
  return [];
}

export async function readUser(id) {
  try {
    const response = await fetch(BASE_URL + "/" + id);
    const user = await response.json();
    return user;
  } catch (err) {
    console.error(err);
  }
  return [];
}

const getAvatar = () => {
  var num = Math.floor(Math.random() * 100) + 1;
  console.log(num)

 return num % 2 === 0 ? getMenAvatar(num) : getWomenAvatar(num);
};

const getMenAvatar = (num) => {
  return (AVATAR_BASE_URL + "/men/" + num + ".jpg");
};

const getWomenAvatar = (num) => {
  return (AVATAR_BASE_URL + "/women/" + num + ".jpg");
};

export async function createUser(name, salary, email, status, date) {
  try {
    const avatar = getAvatar();
    // const date = setDatePattern(oldDate);
    console.log(avatar);


    const user = { name, salary, email, status, date, avatar};

    console.table(user);
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(BASE_URL, options);
    const userResp = await response.json();
    return userResp;
  } catch (err) {
    console.error(err);
  }
  return undefined;
}

export async function updateUser(id, name, salary, email, status, birthday) {
  try {
    const user = { name, salary, email, status, birthday };

    const options = {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(BASE_URL + "/" + id, options);
    const userResp = await response.json();
    return userResp;
  } catch (err) {
    console.error(err);
  }
  return undefined;
}

export async function deleteUser(id) {
  try {
    const options = {
      method: "DELETE",
    };
    await fetch(BASE_URL + "/" + id, options);
  } catch (err) {
    console.error(err);
  }
}
