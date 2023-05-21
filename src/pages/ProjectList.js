import jsonScreenshot from "./../images/jsonServer.png"

const ProjectList = () => {
    return (
        <>
            <div>
                Welcome to my portfolio. My name is Wes McKnight, and I am a Software Developer. <br/>This page will track my progress on projects and certifications.<br/><br/><hr/>
            </div>
            <div>
                <br/>
                Click <a target="_blank" rel="noreferrer" href="http://wesmcknight.github.io/wes-react-webpage">here</a> to see my latest project<br/><br/>Description:<br/> This website is a simple to-do list that incorporates many of the React features. This is a project I typed, committed, and deployed, but is not my original work. (Credit to Web Dev Simplified) <br/><br/><hr/>
            </div>
            <div>
                <br/>Click <a target="_blank" rel="noreferrer" href="http://wesmcknight.github.io/react-nucampsite">here</a> to see the end result of a 5 week long React bootcamp<br/><br/>Description:<br/> This website reflects a project continuously worked on throughout Nucamp's Front-End bootcamp. It was created through the React framework, with other libraries, including: Bootstrap, React-strap, Redux, React-Router, and more.<br/><br/>**IMPORTANT NOTE**<br/>Application features may not render unless you have a local JSON server running on port 3001. The purpose of this functionality is to mimic the website making requests to a server.<br/> The JSON file may be downloaded <a target="_blank" rel="noreferrer" href="http://github.com/WesMcKnight/react-nucampsite/tree/main">here</a>.<br/><br/> To run the server:<br/>Go to the JSON link and save the folder labeled "json-server".<br/>Open a terminal to the file location of your JSON server.<br/>Enter this command in the CLI:<br/> <br/>json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000<br/><br/> <img alt="screenshot" src={jsonScreenshot} /> <hr/>
            </div>
        </>
    )
}

export default ProjectList;