import s1 from "../images/Star.png";


export function Card( props ) {  
   let badgeText;
  if (props.openSpots === 0) badgeText = 'SOLD OUT' 
  else if (props.location==='Online') badgeText='ONLINE'

  return (
    <div className="cardSection">
      { badgeText &&<div className='badge'>{ badgeText}</div> }
      <img src={props.coverImg} alt="" className="cardImage" />
      <div>
        <img src={s1} alt="" />
        <p className="p1">
          {" "}
          {props.stats.rating} ({props.stats.reviewCount}) • {props.location}
        </p>
        <p>{props.title}</p>
        <p>
          <b>From ${props.price} </b>/ person
        </p>
      </div>
    </div>
  );
}
