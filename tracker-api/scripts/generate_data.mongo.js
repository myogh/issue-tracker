/* global db print */
/* eslint no-restricted-globals: "off" */
const owners = ['Bob', 'John', 'Peter', 'Chris', 'Victor'];
const statuses = ['New', 'Assigned', 'Fixed', 'Closed'];
const titles = [
  'Lorem ipsum dolor sit amet',
  'Tincidunt nunc pulvinar sapien',
  'Risus sed vulputate odio',
  'Vitae turpis massa sed',
  'Leo urna molestie at elementum',
  'Metus aliquam eleifend mi',
  'Viverra justo nec ultrices dui',
  'Mollis aliquam ut porttitor',
];

const initialCount = db.issues.count();

for (let i = 0; i < 100; i += 1) {
  // generate a random date within 60-day range of current day
  // const created = new Date() - (random(60days) * milliseconds in a day)
  const randomCreatedDate = (new Date())
    - Math.floor(Math.random() * 60) * 1000 * 60 * 60 * 24;
  const created = new Date(randomCreatedDate);

  // the same goes here as above
  const randomDueDate = (new Date())
    - Math.floor(Math.random() * 60) * 1000 * 60 * 60 * 24;
  const due = new Date(randomDueDate);

  const owner = owners[Math.floor(Math.random() * 5)];
  const status = statuses[Math.floor(Math.random() * 4)];
  const effort = Math.ceil(Math.random() * 20);
  const title = titles[Math.floor(Math.random() * 8)];
  const id = initialCount + i + 1;
  const description = '// no description yet';

  const issue = {
    id, title, created, due, owner, status, effort, description,
  };

  db.issues.insertOne(issue);
}

const count = db.issues.count();
db.counters.update({ _id: 'issues' }, { $set: { current: count } });
print('New issue count', count);
