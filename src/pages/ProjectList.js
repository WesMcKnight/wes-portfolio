const ProjectList = () => {
    return (
        <>
            <div>
                I want to welcome you to my portfolio. My name is Wes McKnight, and I'm a software developer. This page may never be seen by anyone, and that's alright. The purpose is to have at least SOME external method of tracking progress, and this seems to be a good fit. I'm not quite sure what the end product might be, but again, that's alright.<br/><br/><hr/>
            </div>
            <div>
                <br/>
                Click <a target="_blank" rel="noreferrer" href="http://wesmcknight.github.io/wes-react-webpage">here</a> to see a practice project I have done.<br/><br/>Description:<br/> The above link takes you to a project I typed, committed, and deployed myself, but is originally not my work. Credit to Web Dev Simplified for creating an awesome beginning React project to work on and help me get started.<br/>The website is a simple to-do list that incorporates many of the React features.<br/><br/><hr/>
            </div>
            <div>
                <br/>Click <a target="_blank" rel="noreferrer" href="http://wesmcknight.github.io/react-nucampsite">here</a> to see the end result of a React bootcamp that took roughly 5 weeks and 30 hours per week to complete.<br/><br/>Description:<br/> The above link takes you to a project which was continuously worked on throughout Nucamp's Front-End bootcamp. This website was created through the React framework, with many other libraries, including Bootstrap, React-strap, Redux, React-Router, and many others.<br/><br/>**IMPORTANT NOTE**<br/>Some of the application features will not render unless you have a local JSON server running on port 3001. The purpose of this functionality was to mimic the website making requests to a server. The JSON file may be downloaded <a target="_blank" rel="noreferrer" href="http://github.com/WesMcKnight/react-nucampsite/tree/main">here</a>. To run the server, go to the link, and save the folder labeled "json-server". Once saved, you will need to open a terminal to the file location of your JSON server. Once there, enter this command in the CLI:<br/> <br/>json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000
            </div>
        </>
    )
}

export default ProjectList;