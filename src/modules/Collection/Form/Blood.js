function Blood() {
  const bloodGroups = [
    { name: "A+", count: 12 },
    { name: "A−", count: 7 },
    { name: "B+", count: 9 },
    { name: "B−", count: 5 },
    { name: "AB+", count: 3 },
    { name: "AB−", count: 2 },
    { name: "O+", count: 15 },
    { name: "O−", count: 4 },
  ];

  return (
    <div className="blood-container">
      <h1 className="blood-title">Blood Groups Collection</h1>
      <p className="blood-subtitle">
        Choose your desired blood group to view available donors
      </p>

      <div className="blood-grid">
        {bloodGroups.map((group, index) => (
          <div
            key={index}
            className="blood-card"
          
          >
            <h2>{group.name}</h2>
            <p className="blood-count">{group.count} donors available</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blood;