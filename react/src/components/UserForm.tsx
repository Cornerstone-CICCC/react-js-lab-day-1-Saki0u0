import React,{ useState } from 'react'
import { FormData } from '../types/user.types'


const UserForm = () => {

  const [users, setUsers] = useState<FormData[]>([])
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const [formData, setFormData] = useState<FormData>
    ({
      id:0,
      fullname: "",
      age: 0,
      education: "",
      gender: "",
      skills: [],
      bio: ""
    })

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name,value, type } = e.target
      if(type === "checkbox"){
        const checked = (e.target as HTMLInputElement).checked
        setFormData(prevState => {
          const skills = checked? [...prevState.skills,value]:prevState.skills.filter(langage => langage !== value)
          return {...prevState, skills }
        })
      } else if (type === "radio") {
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          [name]:value
        }))
      } 
    }

    const handleSubmit = (e:React.FormEvent) => {
      e.preventDefault()
      console.log(formData)
      setIsSubmitted(true)
    }

    const handleClear = () => {
      setFormData({
        id:0,
        fullname: "",
        age: 0,
        education: "",
        gender: "",
        skills: [],
        bio: ""
      });
      console.log("Form cleared:", formData);
      setIsSubmitted(false)
    };

  return (
    <>
      <form onSubmit={handleSubmit} className='form'>
      <div className="field">
        <label htmlFor="fullname">Fullname</label>
        <input type="text" name="fullname" value={formData.fullname} onChange={handleChange}/>
      </div>
      <div className="field">
        <label htmlFor="age">Age</label>
        <input type="text" name="age" value={formData.age} onChange={handleChange}/>
      </div>
      <div className="field">
        <label htmlFor="education">Education</label>
        <select name="education" id="education" value={formData.education} onChange={handleChange}>
          <option value="">Select your role</option>
          <option value="Primary">Primary</option>
          <option value="GradeSchool">GradeSchool</option>
          <option value="highSchool">HightSchool</option>
          <option value="college">College</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" value={formData.gender} onChange={handleChange}/>female
        <input type="radio" name="gender" value={formData.gender} onChange={handleChange}/>male
        <input type="radio" name="gender" value={formData.gender} onChange={handleChange}/>other
      </div>
      <div className="field">
        <label htmlFor="">Skills</label>
        <label htmlFor="typescript">Typescript</label>
        <input type="checkbox" name="skills" value="typescript" 
          checked= {formData.skills.includes("typescript")} onChange={handleChange}/>
        <label htmlFor="react">React</label>
        <input type="checkbox" name="skills" value="react" 
          checked= {formData.skills.includes("react")}onChange={handleChange}/>
        <label htmlFor="node">Node</label>
        <input type="checkbox" name="skills" value="node" checked= {formData.skills.includes("node")} onChange={handleChange}/>
        <label htmlFor="nosql">NoSQL</label>
        <input type="checkbox" name="skills" value="nosql"checked= {formData.skills.includes("nosql")} onChange={handleChange}/>
      </div>
      <div className="field">
          <label htmlFor="bio">About Yourself</label>
          <textarea name="bio" id="bio" value={formData.bio} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Add User</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </form>
    </>
   
  )
}

export default UserForm