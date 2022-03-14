import { useState, userEffect, useEffect } from "react";
import axios from "axios"

export const AddHouse = ({ x }) => {

  const [formData, setFormData] = useState({

    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: ""


  })


  const [getFormData, setgFormData] = useState([])

  const getData = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setgFormData(res.data)

    })
  }

  useEffect(() => {
    getData()
  }, [])

  // { getHouse(() => getFormData) }


  const handleChange = (e) => {

    const { className, value } = e.target
    setFormData({
      ...formData,
      [className]: value
    })

  }

  console.log(formData)

  { x = formData }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:8080/houses", formData).then(() => {
      alert("Done")
      getData()
      setFormData({

        name: "",
        ownerName: "",
        address: "",
        areaCode: "",
        rent: "",
        bachelor: "",
        married: "",
        image: ""

      })
    })


  }



  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input value={formData.ownerName} type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input value={formData.address} type="text" className="address" onChange={handleChange} required />
        <br />
        <label>areaCode</label>
        <input value={formData.areaCode} type="text" className="areaCode" onChange={handleChange} required />
        <br />
        <label>rent</label>
        <input value={formData.rent} type="text" className="rent" onChange={handleChange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={formData.bachelor} type="checkbox" className="bachelor" onChange={handleChange} />
        <br />
        <label>married</label>
        <input checked={formData.married} type="checkbox" className="married" onChange={handleChange} />
        <br />
        <label>image</label>
        <input value={formData.image} type="text" className="image" onChange={handleChange} required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
