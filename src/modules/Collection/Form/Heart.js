function Heart() {
  const heartGroups = [
    { group: "A+", donors: 5 },
    { group: "A−", donors: 3 },
    { group: "B+", donors: 8 },
    { group: "B−", donors: 2 },
    { group: "AB+", donors: 4 },
    { group: "AB−", donors: 1 },
    { group: "O+", donors: 6 },
    { group: "O−", donors: 2 },
  ];
  
  return (
    <div>
      <div className="heart-container">
        <h1 className="heart-title">Available Heart Donors</h1>
        <p className="heart-subtitle">
          Select a blood group to view available heart donors
        </p>

        <div className="heart-grid">
          {heartGroups.map((item, index) => (
            <div
              key={index}
              className="heart-card"
              
            >
              <h2 className="heart-group">{item.group}</h2>
              <p className="heart-donors">{item.donors} Donors Available</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Heart;