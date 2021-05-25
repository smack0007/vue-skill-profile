import { writeFile } from "fs/promises";
import { join } from "path";

const DATA_PATH = join(__dirname, "..", "src", "data");
const PEOPLE_COUNT = 135;
const PROJECT_COUNT = 144;
const MIN_PEOPLE_COUNT = 2;
const MAX_PEOPLE_COUNT = 4;
const MIN_SKILL_COUNT = 2;
const MAX_SKILL_COUNT = 4;

function nextInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

const firstNames = [
  "Anna",
  "Angela",
  "Billy",
  "Bob",
  "Corey",
  "Daniel",
  "Daniela",
  "Dave",
  "Elena",
  "Emma",
  "Eric",
  "Frida",
  "Hannah",
  "Henry",
  "Heidi",
  "Jake",
  "John",
  "Leslie",
  "Mike",
  "Sally",
  "Sam",
  "Sophie",
  "Sherri",
  "Stephan",
  "Steven",
  "Tina",
  "Zac",
];

const lastNames = [
  "Andrews",
  "Burke",
  "Clarke",
  "Craig",
  "Freeman",
  "Harvey",
  "Jennings",
  "Lewis",
  "Murphey",
  "Mustermann",
  "Perez",
  "Price",
  "Schulte",
  "Smith",
  "Snow",
  "Snyder",
  "Turner",
  "West",
  "Williams",
];

const projectPrefixes = [
  "Berlin",
  "Buffalo",
  "Chicago",
  "Constantinople",
  "Istanbul",
  "IT",
  "Miami",
  "Portland",
  "Simple",
  "Seattle",
  "Vista",
  "Wonderwall",
];

const projectPostfixes = [
  "2.0",
  "Conversion",
  "Changeover",
  "Overhaul",
  "Project",
  "Redesign",
  "Rework",
  "Rebranding",
  "Renovation",
  "Revision",
];

const skills = [
  "angular",
  "blockchain",
  "C#",
  "C++",
  "css",
  "dependency-injection",
  "excel",
  "git",
  "html",
  "IoT",
  "javascript",
  "powerpoint",
  "react",
  "rust",
  "rxjs",
  "svg",
  "svn",
  "typescript",
  "word",
  "vue",
  "zig",
];

const people = [];

for (let i = 0; i < PEOPLE_COUNT; i++) {
  people.push({
    id: i + 1,
    firstName: firstNames[nextInt(firstNames.length)],
    lastName: lastNames[nextInt(lastNames.length)],
  });
}

const projects = [];

for (let i = 0; i < PROJECT_COUNT; i++) {
  const projectPeopleCount =
    nextInt(MAX_PEOPLE_COUNT - MIN_PEOPLE_COUNT) + MIN_PEOPLE_COUNT;
  const projectPeopleIds: number[] = [];

  for (let j = 0; j < projectPeopleCount; j++) {
    projectPeopleIds.push(nextInt(people.length) + 1);
  }

  const projectSkillCount =
    nextInt(MAX_SKILL_COUNT - MIN_SKILL_COUNT) + MIN_SKILL_COUNT;
  const projectSkills: string[] = [];

  for (let j = 0; j < projectSkillCount; j++) {
    projectSkills.push(skills[nextInt(skills.length)]);
  }

  projects.push({
    id: i + 1,
    name:
      projectPrefixes[nextInt(projectPrefixes.length)] +
      " " +
      projectPostfixes[nextInt(projectPostfixes.length)],
    peopleIds: projectPeopleIds,
    skills: projectSkills,
  });
}

writeFile(
  join(DATA_PATH, "people.ts"),
  "export const people = " + JSON.stringify(people, null, 2) + ";"
);

writeFile(
  join(DATA_PATH, "projects.ts"),
  "export const projects = " + JSON.stringify(projects, null, 2) + ";"
);
