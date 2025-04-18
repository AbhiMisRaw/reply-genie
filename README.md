# Reply-Genie : AI enabled email Reply System
Your AI-Powered Assistant for Smart, Personalized Email Replies 🚀

Ever felt overwhelmed by your inbox? Reply-Genie is here to revolutionize the way you handle emails. 
Powered by cutting-edge AI, it crafts intelligent, context-aware responses that save you time and effort. Whether it's professional communication or casual chats, Reply-Genie adapts to your tone and intent seamlessly.

## ✨ Key Features

- **AI-Powered Reply Suggestions** – Generate email responses tailored to your needs.

- **Customization Options** – Adjust tone, formality, and content with ease.

- **Time-Saving Automation** – No more spending hours drafting replies—let AI do the work.

- **Secure & Private** – Your emails stay confidential, with AI working securely in the background.



## Technologies Used :

### Backend
- Java 21 & Spring Boot 3
- Gemini API by Google

### Frontend
- React and Material UI
- Axios

## Installation & Setup

### Prerequisites

- Java (JDK 21)
- Maven / Gradle
- Google Developer Account to access `Gemini API`
- Node & NPM (for frontend)

### Steps to Run

- Clone the repository:

```shell
git clone https://github.com/your-username/your-project.git
cd your-project
```


- Configure the application properties (src/main/resources/application.properties or .yml):

```properties
spring.application.name=Reply-Genie
gemini.api.url=${GEMINI_URL}
gemini.api.key=${GEMINI_KEY}
```


- Build and run the application:
```shell
mvn clean install
mvn spring-boot:run

```
📬 Contact & Support

For issues and feature requests, please open an issue in the repository. Let’s redefine email communication together! ✉️✨