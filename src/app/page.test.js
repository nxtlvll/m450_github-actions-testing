import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from "@/app/page";
/*
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})*/
/*
test('renders Home heading and About link', () => {
  render(<Page />);
  const heading = screen.getByText(/Home/i);
  const link = screen.getByRole('link', { name: /About/i});

  const linkText = screen.getByText(/About/i);

  expect(heading).toBeInTheDocument();
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/about');
  expect(linkText).toBeInTheDocument();
});
*/


test('Render all team members.', () => {
    render(<Page />);

    const teamMembers = [
        { firstname: 'Julia', lastname: 'Meier', position: 'Recruiting Specialist', age: 29, gender: 'female' },
        { firstname: 'Michael', lastname: 'Schneider', position: 'HR Manager', age: 45, gender: 'male' },
        { firstname: 'Sandra', lastname: 'Müller', position: 'Talent Acquisition Lead', age: 38, gender: 'female' },
        { firstname: 'Tom', lastname: 'Wagner', position: 'Senior Recruiter', age: 33, gender: 'male' },
        { firstname: 'Anna', lastname: 'Schulz', position: 'Recruitment Coordinator', age: 26, gender: 'female' }
    ];

    teamMembers.forEach(member => {
        // const fullName = `Vorname: ${member.firstname} Nachname: ${member.lastname}`;
        // expect(screen.getByText(fullName)).toBeInTheDocument();

        const ageText = `Alter: ${member.age}`;
        expect(screen.getByText(ageText)).toBeInTheDocument();

        const positionText = `Position: ${member.position}`;
        expect(screen.getByText(positionText)).toBeInTheDocument();

        // const genderText = `Geschlecht: ${member.gender}`;
        // expect(screen.getAllByText(genderText));
    });

});