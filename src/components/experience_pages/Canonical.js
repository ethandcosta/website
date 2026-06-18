import ExperiencePage from "./ExperiencePage";
const content = [
    {
        "type": "project",
        "title": "Kube Galaxy Test",
        "description": "Kubernetes is a massive umbrella project of several components, each maintained at"
        + " different release schedules by different communities. One major problem we face when delivering solutions"
        + " to enterprise customers is ensuring interoperability between different versions of components."
        + " With Kube Galaxy Test (KGT), you can rapidly test any possible combination of cluster components with a"
        + " simple yaml config at the level of testing you desire (supports CNCF conformance testing) using whatever"
        + " substrate you like (e.g. AWS, vSphere, LXD). I am the active maintainer and lead developer for this project.",
        "skills": ["kubernetes", "python", "Linux", "GitHub Actions", "CI/CD", "juju", "cloud development"]
    },
    {
        "type": "project",
        "title": "Canonical Kubernetes",
        "description": "Architected DISA-STIG and FIPS compliance;"
        + " leveraged Ubuntu kernel primitives by constructing rigid AppArmor confinement profiles"
        + " to isolate daemon execution paths and fine-tuned cgroups container boundaries to prevent"
        + " host-resource starvation. Also patched more than a dozen critical CVEs and added a feature"
        + " to prevent containerd collisions in developer environments like NVIDIA DGX Spark."
        + " Engineered a Go-based heartbeat monitor using the Cobra framework for the k8s snap CLI,"
        + " blocking RPC commands to guarantee synchronous feedback during cluster operations.",
        "skills": ["kubernetes", "Go", "Linux", "software development", "networking"]
    },
    {
        "type": "project",
        "title": "VMware Kubernetes Service (VKS)",
        "description": "Led the integration of Canonical Kubernetes into VMware's cloud, delivering"
        + " security-hardened, production-grade builds for high-sensitivity US government and telco"
        + " clients across 1,000+ enterprise clusters.",
        "skills": ["kubernetes", "CI/CD", "CVEs", "automation", "GitHub Actions", "Launchpad"]
    },
    {
        "type": "project",
        "title": "Ubuntu Distro",
        "description": "Modernized Ubuntu's distribution security model by co-engineering an LLM-integrated"
        + " tool to resolve complex dependency graphs and automate CVE backporting.",
        "skills": ["Linux", "python", "Go", "C", "security", "devops", "AI"]
    },
    {
        "type": "project",
        "title": "Charmed Kubernetes",
        "description": "Streamlined the CI/CD release lifecycle using Jenkins and GitHub Actions and solved"
        + " major production bugs causing I/O starvation on a vSphere cluster used for releases.",
        "skills": ["kubernetes", "python", "Linux", "software development", "Jenkins"]
    },
    {
        "type": "project",
        "title": "MicroK8s",
        "description": "Orchestrated the release lifecycle and platform stability of MicroK8s (v1.29–1.34)"
        + " by implementing critical security backports, resolving complex CI/CD infrastructure bottlenecks,"
        + " and optimizing deployment workflows, significantly enhancing reliability for enterprise-grade container orchestration.",
        "skills": ["kubernetes", "Linux", "Go", "software development", "CVEs", "release process"]
    },
]

const Canonical = () => {
 return <ExperiencePage title="My Experience at Canonical" content={content}/>
}

export default Canonical;
