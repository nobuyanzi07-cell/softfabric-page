/*Node js Project*/ 
//import data

/*
Node js<fs>
for your data in the .json file.
for each applicant data.
create a message: to inform him/her
that he/she did not get the job.
<meet qualificatino>
but be on the lookout for
new oprtunities from us in the future.

*/
/*
Step 1. ensure your js file can access the data.
*/
const data = require("./data.json");
const fs = require("fs");

/*
Step 2:use a for<while> a loop to go through each data point
-print the data

Step 3:for each data point create a message example
  'Dear <<sir/madam>based on gender>>
   We regret to inform you that you wount be going
   to next stage of the interview.
   the reasone.you not a good fit.
   '
  console.log(the message)

Step 4:create an empty array and
the user data including the messages.
output object should be
 {
    "id": 4,
    "first_name": "Krystle",
    "Last_name": "Rubroe",
    "email": "krubroe3@indiatimes.com",
    "gender": "Female",
    "phone": "244-641-3793",
    "message":<>
  }

Step 5:write this data to a file called output.json.
  Hint do JSON.stringify ->  js object to json notation.
  save this data to your file ie output.json
*/

/*
 for-> async->
 -map <method>
*/

const output = [];

for (let i = 0; i < data.length; i++) {
  const doc = data[i];
  //
  //   const first_name = doc.first_name;
  //   const last_name = doc.last_name;
  //   const full_name=doc.first+doc.last_name
  const { id, first_name, last_name, email, gender, phone } = doc;

  let title = "";
  if (doc.gender === "Male") {
    title = "Sir";
  } else {
    title = "Madam";
  }
  const message = `Dear ${title} ${first_name} ${last_name}, we regret to inform you that you will not be proceeding to the next round of interviews. You did not meet the qualifications we are looking for at this time, but we encourage you to apply for future opportunities with us.`;
  output.push({ id, first_name, last_name, email, gender, phone, message });
}

const outputText = JSON.stringify(output); //text
fs.writeFile("output.json", outputText, (error) => {});
console.log("done, wrote", output.length, "records");