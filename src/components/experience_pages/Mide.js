import endaq from "../../imgs/endaq.png";
import ExperiencePage from "./ExperiencePage";
const content = [
    {
        type: "project",
        title: "Periodic Randomized Testing Pipeline",
        description: "Prior to my co-op at MIDE, every firwmare revision was tested by running manually created tests"+
        ", which was incredibly time-consuming and ineffective at ensuring good test coverage. The SDLC was significantly slowed"+
        " not only by having to manually create tests, but also by unhappy customers returning devices that failed because we had"+
        " failed to consider a niche edge case. Over the course of a month, I developed an end-to-end automated continuous delivery"+
        " pipeline that would significantly speed up development time. \n My pipeline, built in GitHub Actions, would get triggered whenever someone attempted to merge"+
        " to a dev branch, or periodically during the off hours of the night, and would automatically generate a batch of tests with randomized values"+
        " for sensor configurations, pull the associated firmware binaries generated in Docker containers, and run them across a series of orchestrated"+
        " lightweight servers attached to runner devices. After the devices were finished recording sample data, it would be retrieved by the pipeline "+
        "and ran through post-processing analysis I generated to determine the firmware accuracy, which was then used as the benchmark for whether the firmware"+
        " passed inspection. All artifacts generated, if novel (like newly created firmware or recording data), would be archived in an SFTP server I created.",
        skills: ["python", "GitHub Actions", "Linux", "Docker", "CI/CD"]
    }, 
    {
        type: "project",
        title: "Automated Update Package Generator",
        description: "ENDAQs are updated using an update.pkg and associated sig file that wrap the firmware binaries for both processor components on the device"+
        " board. Since there were dozens of different revisions for such an update package, my script made it so all the user had to do was specify what revision versions"+
        " they wanted for each binary as well as a couple of other customizable features, such as whether the package should be encrypted, and would automatically generate the update"+
        " by pulling from the appropriate GitHub repos and packing the files itself.",
        skills: ["python", "GitHub Actions", "embedded software", "CI/CD"]
    },
    {
        type: "project",
        title: "Double-Processor Firmware Upgrade", 
        description: "Newer versions of enDAQ have a secondary non-coprocessor (NCP) that allows for supplementary processing to the main controller unit (MCU)"+
        "I wrote the EBML (Extensible Binary Markup Langauge) wrapper code to combine the separate firmare binaries for each processor into one payload.",
        skills: ["EBML", "python", "embedded software"]
    }, 
    {
        type: "project",
        title: "Firmware Tooling",
        description: "To assist firmware devs with writing and debugging new updates to enDAQ, I developed various tooling programs to make interfacing with the firmware"+
        " a less painful process. Some tools include: a debug program that could take in an update pkg and display properties like firmware revision and file size, a "+
        "a script that factory-reset a bricked enDAQ, and an automatic birthing script used in production to do the initial device programming.",
        skills: ["python", "firmware", "tooling"]
    },
    {
        type: "project",
        title: "Accelerometer Tester Jig",
        description: "in coordination with the mech-e and elec-e interns, I wrote the code for a GUI-driven program that would test the accelerometers on enDAQs by having them"+
        " record sensing data while be affixed to a jig that shook them at a particular frequency. The program would then take the sensing wave-form data and perform an FFT analysis"+
        " to determine if the accelerometer was well-calibrated in all 3-dimensions.",
        skills: ["python", "embedded software", "WPython", "numpy"]
    },
    {
        type: "project",
        title: "Looking into Containerization",
        description: "Investigated various containerization softwares, ultimately landing on Docker to containerize the build process for each processor's firmware." +
        " We initially wanted a software that could containerize Windows, but found that no such program existed. This would've been nice for our existing"+
        " SQL DB built on Windows, but we instead had to migrate it to Linux to reflect the lack of support.",
        skills: ["Docker", "Linux", "Windows", "SQL"]
    },
    {
        type: "image",
        caption: "",
        imageUrl: endaq
    }
]

const Mide = () => {
    return <ExperiencePage title="My Experience at MIDE" content={content}/>
};

export default Mide;