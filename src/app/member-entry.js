export default function MemberEntry({firstname, lastname, age, position, gender}) {
    return (
        <div>
            <h3>{firstname} {lastname}</h3>
            <p>Position: {position}</p>
            <p>Alter: {age}</p>
            <p>Geschlecht: {gender}</p>
        </div>
    );
}