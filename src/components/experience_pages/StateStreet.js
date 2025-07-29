import ExperiencePage from "./ExperiencePage";
const content = [
    {"type":"project",
    "title": "Observability Dashboards",
    "description": "In order to make information about the health status of our servers easier to view and understand, I"+
    " developed pipelines that would take messy telemetry data from Azure resources and create neat, easy-to-read status indicators"+
    " which would track KPIs like CPU usage, memory consumption, and incoming traffic.",
    skills: ["Azure", "AWS", "Grafana", "python"]
    }
]
const StateStreet = () => {
 return <ExperiencePage title="My Experience at State Street" content={content}/>
}

export default StateStreet;