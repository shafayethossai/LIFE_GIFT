function Liver() {
  const liverGroups= [
      { group: "A+", donors: 4 },
      { group: "A−", donors: 3 },
      { group: "B+", donors: 6 },
      { group: "B−", donors: 2 },
      { group: "AB+", donors: 3 },
      { group: "AB−", donors: 1 },
      { group: "O+", donors: 7 },
      { group: "O−", donors: 2 },
    ]

    return (
      <div>
        <div className="liver-container">
          <h1 className="liver-title">Available Liver Donors</h1>
          <p className="liver-subtitle">
            Select a blood group to view available liver donors
          </p>

          <div className="liver-grid">
            {liverGroups.map((item, index) => (
              <div
                key={index}
                className="liver-card"
              
              >
                <h2 className="liver-group">{item.group}</h2>
                <p className="liver-donors">{item.donors} Donors Available</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
}

export default Liver;