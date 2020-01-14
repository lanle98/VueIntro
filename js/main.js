// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {
    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: true,
      isLoggedIn: false,
      avatar: null
    },
    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      {
        name: "Star Wars The Force Awakens",
        thumb: "forceawakens.jpg",
        vidsource: "forceawakens.mp4",
        description: "yet another star wars movie"
      },
      {
        name: "Stranger Things",
        thumb: "strangerthings.jpg",
        vidsource: "strangerthings.mp4",
        description: "don't get lost in the upside down"
      },
      {
        name: "Marvel's The Avengers",
        thumb: "avengers.jpg",
        vidsource: "avengers.mp4",
        description: "will they make black widow action figures this time?"
      }
    ],

    videotitle: "",
    videodescription: "",
    videosource: "",

    showDetails: false
  },

  methods: {
    logInOut() {
      // test the login / logout UI ->button should change color
      //eventually we'll use routing and loging component
      console.log("do login/ logout on click");
      this.user.isLoggedIn = this.user.isLoggedIn ? false : true;
      // this.user.avatar = this.user.avatar == null ? "thor.png" : null;
    },

    setUserPrefs() {
      console.log("set user prefs via routing and probably a component");
    },

    // this is ES6 data destructuring = pull the keys and values you need, not the whole object
    loadMovie({ name, description, vidsource }) {
      this.videotitle = name;
      this.videodescription = description;
      this.videosource = vidsource;

      this.showDetails = true;
    }
  }
});
