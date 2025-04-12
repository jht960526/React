const Destination = ({place = '서울', description = '남사타워'}) => {
  return (
    <div>
      <h2>{place}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Destination;