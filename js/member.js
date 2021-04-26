const activeMembers = [
  { firstName: "Beatrix", lastName: "Potter" },
  { firstName: "Ann", lastName: "Martin" },
  { firstName: "Beverly", lastName: "Cleary" },
  { firstName: "Roald", lastName: "Dahl" },
  { firstName: "Taino", lastName: "Dominguez" },
  { firstName: "Carol", lastName: "Dixon" },
  { firstName: "Autumn", lastName: "Dominguez" },
  { firstName: "David", lastName: "Burns" },
  { firstName: "Erika", lastName: "Ziznet" },
  { firstName: "Frank", lastName: "Mueller" },
  { firstName: "Gail", lastName: "Winds" },
  { firstName: "Harry", lastName: "Potter" },
  { firstName: "Ice", lastName: "Cube" },
  { firstName: "Kim", lastName: "Kardashian" },
  { firstName: "Larry", lastName: "David" },
  { firstName: "Marilyn", lastName: "Manson" },
  { firstName: "Nick", lastName: "Jonas" },
  { firstName: "Orlando", lastName: "Bloom" },
  { firstName: "Peter", lastName: "Griffin" },
  { firstName: "Queen", lastName: "Latifah" },
  { firstName: "Scarlett", lastName: "Johansson" },
  { firstName: "Tom	", lastName: "Cruise" },
  { firstName: "Usain", lastName: "Bolt" },
  { firstName: "Vin", lastName: "Diesel" },
  { firstName: "Wild", lastName: "Jones" },
  { firstName: "Xi", lastName: "Ling" },
];
let fullActiveMembers;

fullActiveMembers = activeMembers.map(
  (activeMembers) => `${activeMembers.firstName} ${activeMembers.lastName}`
);

const members = document.querySelectorAll("#new-members .member-info p");

let memberArray = [];

members.forEach((member) => {
  memberArray.push(member.textContent);
});

for (let x = 0; x < fullActiveMembers.length; x++) {
  memberArray.push(fullActiveMembers[x]);
}
