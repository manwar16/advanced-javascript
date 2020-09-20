const officers = [
  { id: 20, name: "Captain Piett" },
  { id: 24, name: "General Veers" },
  { id: 56, name: "Admiral Ozzel" },
  { id: 88, name: "Commander Jerjerrod" },
];
const officersName = [];

for (let i = 0; i < officers.length; i++) {
  const element = officers[i];
  const result = element.name;
  officersName.push(result);
  
}
console.log(officersName);