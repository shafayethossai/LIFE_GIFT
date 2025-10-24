function Kidney(){
    const kidneyGroups=[
      { group: "A+", donors: 4 },
      { group: "A−", donors: 2 },
      { group: "B+", donors: 6 },
      { group: "B−", donors: 1 },
      { group: "AB+", donors: 3 },
      { group: "AB−", donors: 2 },
      { group: "O+", donors: 5 },
      { group: "O−", donors: 1 }
    ];

    return (
      <div>
        
        <div className="kidney-container">
          <h1 className="kidney-title">Available Kidney Donors</h1>
          <p className="kidney-subtitle">
            Select a blood group to view available kidney donors
          </p>

          <div className="kidney-grid">
            {kidneyGroups.map((item, index) => (
              <div
              key={index}
              className="kidney-card"
              
            >
              <h2 className="kidney-group">{item.group}</h2>
              <p className="kidney-donors">{item.donors} Donors Available</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


export default Kidney;