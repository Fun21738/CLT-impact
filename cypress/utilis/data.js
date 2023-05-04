const links = [
    "","team", "investments", "contact"
 ]

 
 const contact =[
     {key: "#wpforms-5113-field_0", value: "joe"},
     {key: "#wpforms-5113-field_0-last", value: "doe"},
     {key: "#wpforms-5113-field_1", value: "test@gmail.com"},
     {key: "#wpforms-5113-field_2", value: "test"},
]

const updateArray = (arr, searchName, newValue)=>{

    let cloneArray = [...arr]

    const objectKey = cloneArray.findIndex((obj)=> obj.key === searchName)

    const updateObj = {...cloneArray[objectKey], value: newValue}

    const updateArray = [
        ...cloneArray.slice(0, objectKey), updateObj, ...cloneArray.slice(objectKey + 1)
    ]

    cloneArray = updateArray

    const name = cloneArray

    return name
}
    
    module.exports ={
        links,
        contact,
        updateArray
    }


