import React from 'react';
import wezoImg from '../assets/photos/WezoIMG.jpg';
import asandaImg from '../assets/photos/img_2_1791220933820.jpg';

const Team = () => {
  const members = [
    {
      name: 'Wezo Ntsokota',
      title: 'Director / Co-founder / Software Developer',
      image: wezoImg,
    },
    {
      name: 'Asanda Magaga',
      title: 'Director / Co-founder / Business Specialist',
      image: asandaImg,
    },
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Enterprise Leadership
          </h2>
          <div className="w-20 h-1 bg-[#76B900] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 border border-gray-800"
            >
              <div className="p-8 text-center">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover rounded-full border-4 border-[#76B900] ${member.name === 'Wezo Ntsokota' ? 'object-top' : ''}`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#76B900] font-medium uppercase tracking-wider text-sm">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
