import React from 'react'; //import React library




// This is the card for each content creator. Used for aboutus main content. 
export default function Profilecard() {
  const peopleData = [
    {
      imgSrc: 'img/Vincent.png',
      name: 'Vincent Liu',
      description: 'Junior at UW Informatics'
    },
    {
      imgSrc: 'img/Zareen.png',
      name: 'Zareen Tasnim',
      description: 'Sophomore at UW Informatics'
    },
    {
      imgSrc: 'img/Nika.png',
      name: 'Nika Zhang',
      description: 'Sophomore at UW Informatics'
    },
    {
      imgSrc: 'img/Leo.png',
      name: 'Leo Ren',
      description: 'Senior at UW Informatics'
    }
  ];

  return (
    <div>
      <main>
        <div className="container">
          <div className="row">
            {peopleData.map((person, index) => (
              <div className="col-md-6 col-xl-3 d-flex" key={index}>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col col-sm-auto col-xl-12">
                        <img className="img-fluid" src={person.imgSrc} alt={person.name} />
                      </div>
                      <div className="col-sm">
                        <h2 className="card-title">{person.name}</h2>
                        <p className="card-text">{person.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rectangle"></div>
      </main>
    </div>
  );
}
