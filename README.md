# 📝 Return Form Validation Project

A modern, responsive, and accessible return form built with HTML5, CSS3, and vanilla JavaScript. Features real-time validation, elegant UI design with Font Awesome icons, and seamless user experience across all devices.

> 🎨 Built with modern web standards and best practices for frontend development portfolios.

---

## 🚀 Live Demo

[Click here to view the live demo](https://mustafa-sarwari.github.io/Form/)

---

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)

- 🧱 **HTML5** – Semantic markup and form structure
- 🎨 **CSS3** – Modern styling with Grid and Flexbox
- ⚙️ **JavaScript (ES6+)** – Form validation and interaction logic
- 🎯 **Font Awesome** – Icon integration for enhanced UI

---

## ✨ Features

- ✅ **Real-time HTML5 Validation** – Instant feedback on input errors
- 📱 **Fully Responsive Design** – Works seamlessly on mobile, tablet, and desktop
- 🎨 **Modern UI/UX** – Clean interface with gradient backgrounds and icon integration
- 🔒 **Client-side Security** – Pattern matching for email and password validation
- ♿ **Accessibility Ready** – Proper labels, autocomplete attributes, and ARIA compliance
- 🚀 **No Backend Required** – Pure frontend implementation
- 🧹 **Auto-clear Fields** – Form resets after successful submission

---

## 📋 Form Fields

| Field | Type | Validation |
|-------|------|------------|
| **Username** | Text | Required |
| **Email** | Email | Standard email format (`.+@.+\.com`) |
| **Password** | Password | Min 8 chars, 1 uppercase, 1 lowercase, 1 digit |
| **Order Number** | Number | Required, numeric only |
| **Reason of Return** | Textarea | Required, max 1000 characters |

---

## 🎯 How to Use

1. **Open the form** in your browser via the [live demo](https://mustafa-sarwari.github.io/Form/)
2. **Fill out all required fields** with valid information
3. **Click Submit** to process the form
4. **Check the console** to see the submitted data (for demo purposes)
5. The form will **automatically clear** after submission

---

## 💻 Installation & Setup

### Option 1: Open Locally

```bash
# Clone the repository
git clone https://github.com/mustafa-sarwari/Form.git

# Navigate to the project directory
cd Form

# Open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Option 2: Using a Local Server

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

---

## 📂 Project Structure

```
Form/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and layout
├── javascript.js       # Form validation and logic
├── LICENSE             # MIT License
├── README.md           # Project documentation
├── package.json        # Project metadata
├── .gitignore          # Git ignore rules
├── CODE_OF_CONDUCT.md  # Community guidelines
├── CONTRIBUTING.md     # Contribution guidelines
└── SECURITY.md         # Security policy
```

---

## 🔐 Validation Rules

### Password Requirements:
- ✅ Minimum 8 characters
- ✅ At least one uppercase letter (A-Z)
- ✅ At least one lowercase letter (a-z)
- ✅ At least one digit (0-9)

### Email Requirements:
- ✅ Standard email format
- ✅ Must include `@` symbol
- ✅ Must end with `.com`

---

## 🧪 Example Output (Console)

```javascript
Form Data Submitted: [
  "JohnDoe",
  "john@example.com",
  "SecurePass123",
  "456789",
  "I would like to return this product because it doesn't meet my expectations."
]
```

---

## 🌟 Key Highlights

- **Responsive Grid Layout** – Adapts to different screen sizes (mobile-first approach)
- **CSS Custom Properties** – Easy theme customization
- **Event-driven Architecture** – Clean JavaScript with event listeners
- **Accessibility Features** – WCAG compliant with proper form labels
- **Cross-browser Compatible** – Works on all modern browsers

---

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Mobile | < 660px | Single column, stacked layout |
| Tablet | 660px - 930px | Two-column grid for inputs |
| Desktop | > 930px | Optimized grid with side-by-side fields |

---

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mustafa Sarwari**

- 🌐 GitHub: [@mustafa-sarwari](https://github.com/mustafa-sarwari)
- 💼 LinkedIn: [Mustafa Sarwari](https://www.linkedin.com/in/gm-sarwari/)
- 📧 Contact: Via GitHub or LinkedIn

---

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- Google Fonts for the Baskervville typography
- The open-source community for inspiration and best practices

---

<div align="center">
  <p>⭐ Star this repository if you found it helpful!</p>
  <p>Made with ❤️ by Mustafa Sarwari</p>
</div>
