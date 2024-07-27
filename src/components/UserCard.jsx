const UserCard = (props) => {
    console.log(props.data);
  return (
    <div className="">
        <img style={{borderRadius: "50px", border: "4px solid pink"}} className="user-img" src={props.data.picture.large} alt="Image" />
        <h3>Name : {props.data.name.first}</h3>
        <p>Phone : {props.data.phone}</p>
        <p>Country : {props.data.location.country}</p>
    </div>
  )
}

export default UserCard