import { createStore } from 'vuex'
 
const data = "https://mufuniwa8.github.io/Data-EOMP/data.json"

export default createStore({
  state: {
    skills: null,
    education: null,
    projects: null,
    testimonials: null
  },
  
  mutations: {
    // start of skills
    setSkills(state,skills) {
      state.skills = skills;
    },
    // end of skills

    // start of education
setEducation(state,education){
  state.education = education;
},
    // end of education

    // star of projects
    setProjects(state,projects) {
state.projects = projects;
    },
    // end of projects

    // start of testimonial
    setTestimonials(state, testimonials){
      state.testimonials = testimonials;
    },
    // end of testimonial
  },
  actions: {
    // start of skills
    async fetchSkills(context) {
      try {
        let res = await fetch(data)
        let {skills} = await res.json()
        context.commit("setSkills", skills)
        // console.log(res);
      }
      catch(error) {alert(error.message)}
    },
// end of skil

// start of education
async fetchEducation(context) {
  let res = await fetch(data)
  let {education} = await res.json()
  context.commit("setEducation", education)
},
// end of educati

// start of projects
async fetchProjects(context) {
  try{
    let res = await fetch(data)
    let {projects} = await res.json()
    context.commit("setProjects", projects)
    console.log(projects);
  }
  catch(error) {alert(error.message)}
},
// end of projects

// start of testimonials
    async fetchTestimonials(context) {
      try{
        let res = await fetch(data)
        let {testimonials} = await res.json()
        context.commit("setTestimonials", testimonials)
        console.log(testimonials);
      }
      catch(error) {alert(error.message)}
    }
// end of testimonials

  },
  modules:{}
})
