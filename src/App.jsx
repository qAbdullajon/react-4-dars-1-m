import React, { useState } from 'react'

export default function App() {
  let [users, setUsers] = useState([
    { id: 1, first_name: "Ahmad", last_name: "Temurov", age: 13, dept_number: 100, city: "Toshkent", state: "IL", salary: 5000 },
    { id: 1, first_name: "Ahmad", last_name: "Temurov", age: 28, dept_number: 100, city: "Toshkent", state: "IL", salary: 5000 },
    { id: 1, first_name: "Ahmad", last_name: "Temurov", age: 16, dept_number: 100, city: "Toshkent", state: "IL", salary: 5000 },
    { id: 1, first_name: "Ahmad", last_name: "Temurov", age: 30, dept_number: 100, city: "Toshkent", state: "IL", salary: 5000 }
  ])
  const hendleClicked = () => {
    users = users.filter(item => item.age > 17)
    setUsers(users)
  }
  return (
    <div className='w-[70%] m-auto'>
      <div>
        <button onClick={hendleClicked} className='border px-6 py-1 my-4'>Armiyaga qabul qilish</button>
      </div>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='border'>ID</th>
            <th className='border'>First name</th>
            <th className='border'>Last name</th>
            <th className='border'>Age</th>
            <th className='border'>Dept number</th>
            <th className='border'>City</th>
            <th className='border'>State</th>
            <th className='border'>Salary</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, i) => {
              return <tr key={i}>
                <td className='border text-center'>{i + 1}</td>
                <td className='border text-center'>{item.first_name}</td>
                <td className='border text-center'>{item.last_name}</td>
                <td className='border text-center'>{item.age}</td>
                <td className='border text-center'>{item.dept_number}</td>
                <td className='border text-center'>{item.city}</td>
                <td className='border text-center'>{item.state}</td>
                <td className='border text-center'>{item.salary}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
