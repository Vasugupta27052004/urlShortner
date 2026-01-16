🔗 URL Shortener

A simple and efficient URL Shortener built using Node.js, Express, MongoDB, and EJS.
This application converts long URLs into short links, redirects users, and tracks visit counts.

✨ Features

🔗 Convert long URLs into short URLs

🔁 Redirect short URLs to original URLs

📊 Track visit count for each short URL

🧩 Server-side rendering using EJS

🗄️ MongoDB database integration

🛠️ Tech Stack

💻 Backend: Node.js, Express.js

🗄️ Database: MongoDB, Mongoose

🎨 Template Engine: EJS

⚙️ Tools: Nodemon, NanoID / ShortID

📂 Project Structure

url-shortener
models
url.js
views
index.ejs
routes
url.js
index.js
package.json
README.md

⚙️ Installation and Setup

1️⃣ Clone the repository
git clone https://github.com/your-username/url-shortener.git

cd url-shortener

2️⃣ Install dependencies
npm install

3️⃣ Start MongoDB
mongod

4️⃣ Run the project
npm start

For development
npx nodemon index.js

🌐 Usage

Open browser and visit
http://localhost:3000

Enter a long URL to generate a short URL like
http://localhost:3000/url/abc123

Visiting the short URL redirects to the original URL and increases visit count 📈

🔁 Redirect Route Flow

Receive shortId

Fetch original URL from database

Increase visit count

Redirect to original URL

📊 Sample Output

Original URL: https://example.com/very-long-link

Short URL: /url/abc123
Visits: 5

🚀 Future Improvements

🔐 User authentication

📋 Copy to clipboard feature

✏️ Custom short URLs

📈 Analytics dashboard

☁️ Cloud deployment

📜 License

MIT License

👨‍💻 Author

Vasudev
B.Tech Computer Science
Full Stack Developer
