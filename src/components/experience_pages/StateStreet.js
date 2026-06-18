import ExperiencePage from "./ExperiencePage";
const content = [
    {"type":"project",
    "title": "Observability Dashboards",
    "description": "In order to make information about the health status of our servers easier to view and understand, I"+
    " developed pipelines that would take messy telemetry data from Azure resources and create neat, easy-to-read status indicators"+
    " which would track KPIs like CPU usage, memory consumption, and incoming traffic.",
    skills: ["Azure", "AWS", "Grafana", "python"]
    },
    {
        "type":"project",
        "title": "File Injection Chaos Engineering",
        "description": "As State Street manages over $4 trillion in asssets, even a second of downtime can mean millions lost in transactions."+
        " As such, the SRE team embraced the principles of choas engineering, which is a design practice invented by Ben Sloss at Google in"+
        " the early 2000s to preemptively test cloud resilience using controlled failure, to catch problems before they happen in prod. \n"+
        "To that end, I tested the effectiveness of several critical components in State Street's Azure clouds by creating controlled sabotage tests such as"+
        " having a server CPU spike, for example, to test that the load balancers would appropriately redirect traffic. \n"+
        "One of the larger things I tested was a microservice responsible for validating financial documents upload at a batch processing endpoint for suspicious characters,"+
        " as was a commmon strategy for low-scale, high-volume trojan horse attacks done by OFAC-sanctioned foreign actors to launder money into the US. With my tests, we were able to spot"+
        "edge-cases for spoofing that the microservice was missing and added them, creating a more robust and resilient infrastructure.",
        "skills": ["Azure", "Chaos Engineering", "Azure Chaos Studio", "Azure Sentinel", "Anti-Money Laundering"]
    },
    {
        "type": "project",
        "title": "In-House Tooling Chatbot",
        "description": "One of the side projects the team was working on was the development of a chatbot that could allow for user-friendly queries"+
        " for server resource information, which would assist in troubleshooting and status checks. I created a pipeline that would take in the"+
        " resource data stored at API endpoints, download them as JSON files, and parse them into output for the bot.",
        "skills": ["RESTful API", "JSON", "python"]
    }
]
const StateStreet = () => {
 return <ExperiencePage title="My Experience at State Street" content={content}/>
}

export default StateStreet;