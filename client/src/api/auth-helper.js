const signout = async () => {
  try {
    localStorage.removeItem('Profile')
    let response = await fetch(process.env.REACT_APP_NODE_JS+'users/signout/', { method: 'GET' })
    //console.log(response)
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const auth = {
  isAuthenticated() {
    if (typeof window == "undefined")
      return false;

    if (localStorage.getItem('Profile')) {
      console.log("User is authenticated.");
      return JSON.parse(localStorage.getItem('Profile'));
    } else {
      console.log("User is not authenticated.");
      return false;
    }
  },
  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      localStorage.setItem('Profile', JSON.stringify(jwt))
    cb()
  },
  clearJWT(cb) {
    if (typeof window !== "undefined")
      localStorage.removeItem('Profile')
    cb()
    //optional
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    })
  }
}

export default auth