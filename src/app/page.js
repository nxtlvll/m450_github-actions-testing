import React from "react";
import Link from 'next/link'
import MemberEntry from "@/app/member-entry";

export function sum (a, b) {
  return a + b;
}



export default function Page() {
    const teamMembers = [
        { firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female' },
        { firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager', age: 45, gender: 'male' },
        { firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead', age: 38, gender: 'female' },
        { firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter', age: 33, gender: 'male' },
        { firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator', age: 26, gender: 'female' }
    ];

    return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
        <div>
            {teamMembers.map((member, value) => (
                <MemberEntry
                    key={value}
                    firstname={member.firstname}
                    lastname={member.lastname}
                    position={member.position}
                    age={member.age}
                    gender={member.gender}
                    />

                ))}
        </div>
    </div>
  )
}
