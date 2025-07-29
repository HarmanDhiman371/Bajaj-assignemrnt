const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const data = req.body.data;
  const full_name = "Harmanjeet singh";
  const dob = "20042004";

  const user_id = `${full_name.toLowerCase()}_${dob}`;
  const email = "harmanjeet371.be22@chitkara.edu.in";
  const roll_number = "2210990371";

  const isNumeric = (val) => /^[0-9]+$/.test(val);
  const isAlphabet = (val) => /^[a-zA-Z]+$/.test(val);
  const isSpecialChar = (val) => /^[^a-zA-Z0-9]+$/.test(val);

  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let alpha_concat = "";

  data.forEach((item) => {
    if (isNumeric(item)) {
      let num = parseInt(item);
      if (num % 2 === 0) {
        even_numbers.push(item);
      } else {
        odd_numbers.push(item);
      }
      sum += num;
    } else if (isAlphabet(item)) {
      alphabets.push(item.toUpperCase());
      alpha_concat += item;
    } else if (isSpecialChar(item)) {
      special_characters.push(item);
    }
  });

  const reverseCaps = (str) => {
    let res = "";
    let flag = true;
    for (let i = str.length - 1; i >= 0; i--) {
      res += flag ? str[i].toUpperCase() : str[i].toLowerCase();
      flag = !flag;
    }
    return res;
  };

  const response = {
    is_success: true,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alphabets,
    special_characters: special_characters,
    sum: sum.toString(),
    concat_string: reverseCaps(alpha_concat)
  };

  res.status(200).json(response);
});
app.get('/', (req, res) => {
  res.send("✅ Bajaj Assignment API is live. Use POST /bfhl");
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
