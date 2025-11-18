function Lung() {
  const  lungGroups= [
      { group: "A+", donors: 5 },
      { group: "A−", donors: 3 },
      { group: "B+", donors: 7 },
      { group: "B−", donors: 2 },
      { group: "AB+", donors: 4 },
      { group: "AB−", donors: 1 },
      { group: "O+", donors: 6 },
      { group: "O−", donors: 2 },
    ]
  
    return (
      <div>
        <div className="lung-container">
          <h1 className="lung-title">Available Lung Donors</h1>
          <p className="lung-subtitle">
            Select a blood group to view available lung donors
          </p>

          <div className="lung-grid">
            {lungGroups.map((item, index) => (
              <div
                key={index}
                className="lung-card"
                //onClick={() => this.handleClick(item.group)}
              >
                <h2 className="lung-group">{item.group}</h2>
                <p className="lung-donors">{item.donors} Donors Available</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
}

export default Lung;