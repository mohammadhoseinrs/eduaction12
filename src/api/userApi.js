import api from "./api";
import axios from "axios";
const loginUrl ='https://cafevira.com/api/api/v1/login'
export const userLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await api.post('login', JSON.stringify(frmData),
        {
            headers: { 'Content-Type': 'application/json' },
         });

        resolve(res);
        if(res.data.status==200){
          localStorage.setItem('educationsite',JSON.stringify(res.data))
        }
      } catch (error) {
        reject(error);
      }
    });
  };
  export const teacherLogin = (frmData) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await api.post('login/teacher', JSON.stringify(frmData),
        {
            headers: { 'Content-Type': 'application/json' },
         });

        resolve(res);
        if(res.data.status==200){
          localStorage.setItem('educationsite',JSON.stringify(res.data))
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  export const getdetail=async (endpoint)=>{
    try{
      const res=await api.get(`${endpoint}`,
          {
              headers: { 'Content-Type': 'application/json' },
          })
       return res
     }catch(err){
      console.log(err);
     }
  }

  export const getuser=async(id)=>{
    console.log(id);
    try{
      const res=await api.get(`UsersCourse?id=${id}`,
      {
        headers: { 'Content-Type': 'application/json' },
    })
    if(res.data.length){
      localStorage.setItem('userdetail',JSON.stringify(res.data))
    }
    return res
    }catch(err){
      console.log(err);
    }

  }
  export const getTeacherCourse=async(id)=>{
    console.log(id);
    try{
      const res=await api.get(`Teacher/TeachersCourses?teacher_id=${id}`,
      {
        headers: { 'Content-Type': 'application/json' },
    })
    console.log(res);
    if(res.data.length){
      console.log(res.data);
      localStorage.setItem('userdetail',JSON.stringify(res.data))
    }
    return res
    }catch(err){
      console.log(err);
    }

  }
  export const getTeacher=async(id)=>{
    try{
      const res=await api.get(`Teacher/editProfile?id=${id}`,
      {
        headers: { 'Content-Type': 'application/json' },
    })
    {/* if(res.data.length){
      localStorage.setItem('userdetail',JSON.stringify(res.data))
    } */}

    return res
    }catch(err){
      console.log(err);
    }

  }
