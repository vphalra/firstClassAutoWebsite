import React from 'react';
import { Phone, MapPin, Clock, Award, Send } from 'lucide-react';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    phone: string;
    languages: string[];
    telegram: string;
}

const team: TeamMember[] = [
    {
        id: 1,
        name: "Nhem Daungvuthy",
        role: "Sales Manager",
        languages: ["Khmer", "English"],
        phone: "+855 78 555 129",
        telegram: "+855 10 555 712",
        image: "https://imgur.com/osVhORw.jpg"
    },
    {
        id: 2,
        name: "Sreng Hokchhay",
        role: "Sales Consultant",
        languages: ["Khmer", "Chinese"],
        phone: "+855 17 555 734",
        telegram: "+855 10 555 021",
        image: "https://imgur.com/Esf4fxR.jpg"
    },
    {
        id: 3,
        name: "Soun Chevmarineth",
        role: "Sales Consultant",
        languages: ["Khmer", "English"],
        phone: "+855 17 555 340",
        telegram: "+855 10 555 249",
        image: "https://imgur.com/scYG0ts.jpg"
    }
];

function TeamPage() {
    return (
        <div className="bg-white pt-20">
            {/* Stats Section */}
            <div className="relative overflow-hidden font-cinzel red-flow-container">
                <div className="absolute inset-0 animate-3d-red-flow bg-[radial-gradient(circle_at_20%_20%,_rgba(255,0,0,1)_0%,_rgba(255,0,0,0)_50%),_radial-gradient(circle_at_80%_80%,_rgba(200,0,0,0.9)_0%,_rgba(200,0,0,0)_50%)] bg-[length:400%_400%]" />
                <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-16">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest drop-shadow-md">#1</div>
                            <div className="text-white font-nunito tracking-wide drop-shadow-md text-sm sm:text-base">Dealership in Cambodia</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest drop-shadow-md">1000+</div>
                            <div className="text-white font-nunito tracking-wide drop-shadow-md text-sm sm:text-base">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-widest drop-shadow-md">7</div>
                            <div className="text-white font-nunito tracking-wide drop-shadow-md text-sm sm:text-base">Days a Week Support</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                        {team.map(member => (
                            <div key={member.id} className="flex flex-col items-center">
                                {/* Circular Image */}
                                <div className="w-24 sm:w-32 h-24 sm:h-32 rounded-full overflow-hidden mb-4">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                                {/* Compact Card with Details */}
                                <div className="team-card bg-white rounded-xl shadow-md p-4 w-full max-w-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <div className="mb-2">
                                        <h3 className="text-base sm:text-lg font-semibold text-neutral-900 tracking-wide text-center">
                                            {member.name}
                                        </h3>
                                        <p className="text-neutral-600 tracking-wide text-xs sm:text-sm text-center">
                                            {member.role}
                                        </p>
                                    </div>
                                    <div className="mb-2 text-center">
                                        <h4 className="text-xs font-semibold text-neutral-900 tracking-wide mb-1">
                                            Languages
                                        </h4>
                                        <p className="text-xs text-neutral-600 tracking-wide">
                                            {member.languages.join(" & ")}
                                        </p>
                                    </div>
                                    <div className="border-t pt-2">
                                        <div className="flex flex-col gap-1 items-center">
                                            <a
                                                href={`tel:${member.phone}`}
                                                className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 tracking-wide text-xs sm:text-sm"
                                            >
                                                <Phone size={12} />
                                                <span>{member.phone}</span>
                                            </a>
                                            <a
                                                href={`tel:${member.telegram}`}
                                                className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 tracking-wide text-xs sm:text-sm"
                                            >
                                                <Send size={12} />
                                                <span>{member.telegram}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4">
                <hr className="border-t-2 border-neutral-300 w-1/2 sm:w-1/4 mx-auto my-6 sm:my-8" />
            </div>

            {/* Contact Section */}
            <div className="bg-neutral-50">
                <div className="max-w-7xl mx-auto px-4 py-10 sm:py-16">
                    <div className="text-center mb-8 sm:mb-12 font-cinzel">
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-widest">
                            Ready for a First Class Experience?
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto font-nunito tracking-wide text-sm sm:text-base">
                            Connect with our team to discover your dream car with Cambodia’s #1 dealership.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center">
                            <div className="mb-4 flex items-center justify-center gap-3 sm:flex sm:flex-col sm:items-center sm:gap-2">
                                <div className="p-2 sm:p-3 bg-neutral-100 rounded-full">
                                    <MapPin size={20} className="text-neutral-700" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold font-cinzel tracking-widest">Visit Us</h3>
                            </div>
                            <p className="text-neutral-600 font-nunito tracking-wide text-sm sm:text-base">
                                <a
                                    href="https://g.co/kgs/VpTfwej"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-600 hover:text-neutral-900"
                                >
                                    #420, Preah Monivong Blvd.<br />
                                    Sangkat Boeung Keng Kang I, Khan Chamkarmorn<br />
                                    Phnom Penh, Cambodia
                                </a>
                            </p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center">
                            <div className="mb-4 flex items-center justify-center gap-3 sm:flex sm:flex-col sm:items-center sm:gap-2">
                                <div className="p-2 sm:p-3 bg-neutral-100 rounded-full">
                                    <Clock size={20} className="text-neutral-700" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold font-cinzel tracking-widest">Business Hours</h3>
                            </div>
                            <p className="text-neutral-600 font-nunito tracking-wide text-sm sm:text-base">
                                Monday - Sunday<br /> 8:00 AM - 5:00 PM
                            </p>
                        </div>
                        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center">
                            <div className="mb-4 flex items-center justify-center gap-3 sm:flex sm:flex-col sm:items-center sm:gap-2">
                                <div className="p-2 sm:p-3 bg-neutral-100 rounded-full">
                                    <Award size={20} className="text-neutral-700" />
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold font-cinzel tracking-widest">Our Promise</h3>
                            </div>
                            <p className="text-neutral-600 font-nunito tracking-wide text-sm sm:text-base">
                                First Class Automobiles<br />First Class Deals<br />First Class Service
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamPage;