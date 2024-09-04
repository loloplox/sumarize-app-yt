# YouTube Video Summarizer

## Description

This project allows users to input a YouTube URL and get a summarized view of
the video's information, including title, channel name, views, video length, and
upload date.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Enter a YouTube URL in the input field and click "Resumir" to see the video
   information.

## File Structure

``` 
├── src
│ ├── app
│ │ ├── summarize
│ │ │ └── page.js
│ │ └── page.js 
│ ├── components 
│ │ └── CardYoutube.js 
│ └── lib 
│   └── youtube.js 
├── next.config.mjs 
└── package.json 
```

## Technologies

- JavaScript
- React
- Next.js
- Material-UI

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.