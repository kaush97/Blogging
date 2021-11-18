import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username:'blogger@gmail.com',
    password:'blog@123',
    userDetails:{
      name:"Kaushal",
    },
    isLogedIn:false,
    count: 0,
    blogs: [
      {
        avatar: "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_960_720.jpg",
        title: "Science and Technology",
        subTitle:`One look at Live Science’s homepage and you get a glimpse into the biggest advancements in science today.
         Find the latest research coming out of academic institutes as well as the newest innovations in industry.`,
        data: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        createdBy:'blogger@gmail.com'
      },
      {
        avatar: "https://cdn.pixabay.com/photo/2020/12/30/11/00/syringe-5873159_960_720.jpg",
        title: 'Covid-19',
        subTitle:`Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
        Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill and require medical attention.`,
        data: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        createdBy:'blogger@gmail.com'
      },
      {
        avatar: "https://cdn.pixabay.com/photo/2018/04/15/18/02/books-3322275_960_720.jpg",
        title: "Education",
        subTitle:`An education blog or edublog is a blog (weblog) created for educational purposes. ... 
        A learning weblog is a learning diary that reports the learning experience, both the learning content and the learning process.
        Besides, a weblog can also be the result or the learning outcome of a subject`,
        data:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
          createdBy:'kaushal@gmail.com'
      },
      {
        avatar: "https://cdn.pixabay.com/photo/2018/02/24/21/40/smartphone-3179295_960_720.jpg",
        title: "Mobile PCs: Smart compute for the new generation",
        subTitle:`Over the past decade or so, smartphones have become increasingly powerful, and their performance is coming closer to traditional personal computers (PCs) and laptops. Smartphones have also taken a leap on many other aspects – power consumption; thin and light form factors; camera features; location technologies; and the overall mobility experience enabled by continuous connectivity.`,
        data:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
          createdBy:'kaushal@gmail.com'
      },
      {
        avatar: "https://cdn.pixabay.com/photo/2015/05/11/13/28/software-762486_960_720.jpg",
        title: "Software Testing",
        subTitle:`Access largest variety of devices for manual and automated App Testing. Try now. Test Your Apps With Speed Without Ever Worrying About Devices And Tools. Trusted by Top USA based. Test On Real iOS Devices. Trusted By Many Companies. Test Education Apps.`,
        data:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
          createdBy:'blogger@gmail.com'
      },
    ],
  },
  plugins: [createPersistedState()],

  mutations: {
    isLogedIn: (state,payload)=> state.isLogedIn=payload,
    increment: state => state.count++,
    decrement: state => state.count--,
    hide: state=> state.isLogedIn = false,
    show: state=> state.isLogedIn = true,
    postBlog:(state,payload)=>{
      state.blogs.push(payload)
    }
  },
  actions: {
    isLogedIn({ commit},payload) {
      console.log(payload,"payload")
      commit('isLogedIn',payload)
    },
    postBlog({ commit},payload) {
      console.log(payload,"payload")
      commit('postBlog',payload)
    }
  },
  modules: {
  }
})
