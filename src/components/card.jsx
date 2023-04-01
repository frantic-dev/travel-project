export default function Card(props) {
  return (
    <>
      <div className="card">
        <img
          src={`../../public/${props.item.imageUrl}`}
          className="card--img"
        />
        <div className="card--details">
          <p>
            <img src="https://img.icons8.com/ios-filled/50/FD7E14/address--v1.png" className="card--locationLogo"/>
            <span className="card--location">{props.item.location}</span>
            <a className="card--link" href={props.item.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </p>
          <h3 className="card--title">{props.item.title}</h3>
          <b className="card--dates">
            <span className="card--startDate">{props.item.startDate}</span>
            <span className="card--endDate">{props.item.endDate}</span>
          </b>
          <p className="card--description">{props.item.description} </p>
        </div>
      </div>
      {props.item.id !== 3 && <hr /> } 
    </>
  );
}
