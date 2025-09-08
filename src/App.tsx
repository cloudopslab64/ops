import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import {
  GitBranch,
  Github,
  Cloud,
  Terminal,
  Package,
  Settings,
  Workflow,
  Layers,
  Clock,
  Users,
  GraduationCap,
  Star,
  BookOpen,
  Monitor,
  Briefcase,
  FolderOpen,
  Phone,
  MapPin,
  Shield,
  CheckCircle,
  Award,
  Database,
  Lock,
  HardDrive,
  Network,
  BarChart3,
  DollarSign,
  Wrench,
  Eye
} from "lucide-react";

// CloudOpsLab Logo Component
const CloudOpsLabLogo = () => (
  <div className="flex items-center space-x-3">
    <div className="relative">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
        <Cloud className="w-7 h-7 text-white" />
      </div>
      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
        <Settings className="w-3 h-3 text-white" />
      </div>
    </div>
    <div>
      <h2 className="text-2xl text-white tracking-wide">CloudOpsLab</h2>
      <p className="text-blue-200 text-sm">DevOps Excellence Center</p>
    </div>
  </div>
);

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<'devops' | 'aws' | 'both'>('both');

  const devopsTopics = [
    {
      title: "Introduction to DevOps",
      icon: BookOpen,
      description:
        "Foundation concepts, career roadmap, and success strategies for aspiring DevOps engineers",
      skills: [
        "DevOps Roadmap",
        "Career Opportunities",
        "Success Strategies",
        "Engineer Responsibilities",
      ],
      subtopics: [
        "DevOps Roadmap and Career Opportunities",
        "Secrets to Success as a DevOps Engineer",
        "What Does a DevOps Engineer do?",
      ],
    },
    {
      title: "Linux For DevOps",
      icon: Terminal,
      description:
        "Master Linux fundamentals, command line operations, and shell scripting for DevOps automation",
      skills: [
        "AWS EC2",
        "File System",
        "Linux Commands",
        "Shell Scripting",
      ],
      subtopics: [
        "Setting up Linux via AWS EC2",
        "File System Hierarchy",
        "Basic & Advanced Linux Commands",
        "Shell Scripting with Project",
      ],
    },
    {
      title: "Source Code Management",
      icon: GitBranch,
      description:
        "Complete Git mastery including advanced workflows, branching strategies, and conflict resolution",
      skills: [
        "Git Architecture",
        "Branching Strategy",
        "Merge Conflicts",
        "Git Rebase",
      ],
      subtopics: [
        "CVCS vs DVCS & Git Importance",
        "Git Three-stage Architecture",
        "Repository, Commit, Tags, Snapshots",
        "Git stash, revert, reset, rebase, squash, cherrypick",
      ],
    },
    {
      title: "Package Management (Docker)",
      icon: Package,
      description:
        "Containerization from virtualization concepts to advanced Docker operations and networking",
      skills: [
        "Docker Architecture",
        "Custom Images",
        "Docker Compose",
        "Volume Management",
      ],
      subtopics: [
        "Virtualization vs Containerization",
        "Docker Architecture & Components",
        "Custom Docker Images & Dockerfile",
        "Docker Volumes, Port Mapping & Networking",
      ],
    },
    {
      title: "CI/CD Pipeline",
      icon: Workflow,
      description:
        "Build robust continuous integration and deployment pipelines with Jenkins and GitLab CI/CD",
      skills: [
        "Jenkins Workflow",
        "User Management",
        "GitLab CI/CD",
        "Pipeline Automation",
      ],
      subtopics: [
        "CI/CD Pipeline Concepts",
        "Jenkins Installation & Configuration",
        "Jenkins-Linked Projects & Source-code Polling",
        "GitLab CI/CD Projects & Runners",
      ],
    },
    {
      title: "Container Orchestration",
      icon: Settings,
      description:
        "Master Kubernetes for production-grade container orchestration and microservices deployment",
      skills: [
        "K8s Architecture",
        "Pod Lifecycle",
        "Deployments",
        "Services & Networking",
      ],
      subtopics: [
        "Kubernetes Architecture & Components",
        "Pods, Deployments & Services",
        "ConfigMap, Secrets & Volumes",
        "Three-tier K8s Applications with EKS",
      ],
    },
    {
      title: "Cloud Engineering (AWS)",
      icon: Cloud,
      description:
        "Comprehensive AWS services including compute, storage, networking, and managed services",
      skills: [
        "EC2",
        "S3",
        "Auto Scaling",
        "RDS",
        "ECS/ECR",
        "CloudFormation",
      ],
      subtopics: [
        "AWS Global Infrastructure",
        "EC2, S3, Auto Scaling, Load Balancing",
        "RDS, IAM, SNS, SQS",
        "ECS, ECR, CloudFormation & CloudWatch",
      ],
    },
    {
      title: "Infrastructure As Code",
      icon: Layers,
      description:
        "Automate infrastructure provisioning and management using Terraform with hands-on projects",
      skills: [
        "Terraform Basics",
        "Variables & Resources",
        "State Management",
        "Modules",
      ],
      subtopics: [
        "Understanding IaC Concepts",
        "Terraform Basics & Variables",
        "Resources, Attributes & Dependencies",
        "Terraform State, for-each & Modules",
      ],
    },
    {
      title: "Monitoring & Observability",
      icon: Monitor,
      description:
        "Implement comprehensive monitoring solutions with Prometheus, Grafana, and alerting systems",
      skills: [
        "Grafana",
        "Prometheus",
        "Docker Monitoring",
        "Kubernetes Alerting",
      ],
      subtopics: [
        "Grafana and Graphite Setup",
        "Docker and EC2 Logs Monitoring",
        "Prometheus Setup & Configuration",
        "Prometheus and Kubernetes Alerting",
      ],
    },
    {
      title: "Job Assistance & Career",
      icon: Briefcase,
      description:
        "Professional development including resume building, interview preparation, and career guidance",
      skills: [
        "LinkedIn Profile",
        "Resume Building",
        "Mock Interviews",
        "Interview Prep",
      ],
      subtopics: [
        "LinkedIn and Resume Building/Review",
        "Mock Interviews & Practice",
        "DevOps Engineer Interview Experiences",
        "DevOps Interview Questions & Answers",
      ],
    },
    {
      title: "Hands-on Projects",
      icon: FolderOpen,
      description:
        "Real-world projects including CI/CD pipelines, serverless deployments, and production systems",
      skills: [
        "Shell Scripting",
        "CI/CD Pipeline",
        "Serverless",
        "Production Deployment",
      ],
      subtopics: [
        "Linux Server Scrutiny via Shell Script",
        "CI/CD Pipeline with Jenkins, AWS, Docker, K8s",
        "Serverless 3-tier Application Deployment",
        "Continuous Delivery via AWS EKS",
      ],
    },
  ];

  const awsTopics = [
    {
      title: "AWS Overview",
      icon: Cloud,
      description: "Foundation of cloud computing concepts and AWS global infrastructure understanding",
      skills: ["Cloud Computing", "AWS Infrastructure", "Shared Responsibility", "Global Regions"],
      subtopics: [
        "What is Cloud Computing?",
        "Public vs Private vs Hybrid Cloud",
        "AWS Global Infrastructure (Regions, AZs, Edge Locations)",
        "Shared Responsibility Model"
      ]
    },
    {
      title: "AWS Identity & Access Management",
      icon: Lock,
      description: "Master AWS security fundamentals with comprehensive IAM implementation and best practices",
      skills: ["IAM Users", "Groups & Roles", "Policies", "MFA", "Security Best Practices"],
      subtopics: [
        "IAM Users, Groups, and Roles",
        "Policies (Managed vs Inline)",
        "Permission Boundaries",
        "Multi-Factor Authentication (MFA) & Best Practices"
      ]
    },
    {
      title: "Compute Services",
      icon: Settings,
      description: "Complete EC2 mastery including auto scaling, load balancing, and advanced compute operations",
      skills: ["EC2 Instances", "Auto Scaling", "Load Balancers", "AMI Management"],
      subtopics: [
        "EC2 Instance Types, Launch & Management",
        "Key Pairs, Security Groups, Elastic IPs",
        "EBS Volumes, Snapshots & AMI Creation",
        "Auto Scaling Groups & Load Balancers (ALB, NLB, CLB)"
      ]
    },
    {
      title: "Networking",
      icon: Network,
      description: "Build secure and scalable network architectures with VPC, subnets, and advanced networking",
      skills: ["VPC Design", "Subnets", "Route Tables", "Security Groups", "Network ACLs"],
      subtopics: [
        "VPC (Virtual Private Cloud) Architecture",
        "Subnets (Public vs Private) & Route Tables",
        "Internet Gateway, NAT Gateway, VPC Peering",
        "Security Groups vs Network ACLs & IP Management"
      ]
    },
    {
      title: "Storage Services",
      icon: HardDrive,
      description: "Comprehensive storage solutions including S3, EBS, and EFS with lifecycle management",
      skills: ["S3 Management", "EBS Volumes", "EFS", "Lifecycle Policies", "Encryption"],
      subtopics: [
        "S3 Buckets, Objects, Versioning & Lifecycle Policies",
        "Access Control, Static Website Hosting",
        "EBS Volume Types (gp3, io1, sc1, st1) & Snapshots",
        "EFS Mount Targets & Performance Modes"
      ]
    },
    {
      title: "Database Services",
      icon: Database,
      description: "Manage relational and NoSQL databases with RDS, DynamoDB, and database best practices",
      skills: ["RDS Management", "Multi-AZ", "Read Replicas", "DynamoDB", "Database Security"],
      subtopics: [
        "RDS Instance Types & Configuration",
        "Backups, Snapshots & Multi-AZ Deployments",
        "Read Replicas & Performance Optimization",
        "DynamoDB Overview (NoSQL Database)"
      ]
    },
    {
      title: "Monitoring and Logging",
      icon: Monitor,
      description: "Implement comprehensive monitoring, logging, and auditing solutions for AWS resources",
      skills: ["CloudWatch", "CloudTrail", "AWS Config", "Compliance Monitoring"],
      subtopics: [
        "CloudWatch Metrics, Alarms & Dashboards",
        "CloudWatch Logs & Events",
        "CloudTrail Audit & Event History",
        "AWS Config Resource Compliance"
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      description: "Advanced security implementation with AWS security services and compliance frameworks",
      skills: ["AWS Shield", "WAF", "GuardDuty", "KMS", "Trusted Advisor"],
      subtopics: [
        "AWS Shield & WAF (Web Application Firewall)",
        "AWS Trusted Advisor Security Checks",
        "GuardDuty Threat Detection",
        "KMS Key Management & Data Encryption"
      ]
    },
    {
      title: "Backup & Disaster Recovery",
      icon: HardDrive,
      description: "Design robust backup strategies and disaster recovery solutions for business continuity",
      skills: ["Snapshot Management", "Cross-Region Replication", "AMI Management", "DR Planning"],
      subtopics: [
        "Snapshot Management (EBS, RDS)",
        "Cross-Region Replication (S3)",
        "AMI Creation & Management",
        "Designing DR Solutions & RTO/RPO"
      ]
    },
    {
      title: "Cost Management & Billing",
      icon: DollarSign,
      description: "Optimize AWS costs with comprehensive billing analysis and resource optimization strategies",
      skills: ["Cost Explorer", "Budgets", "Billing Reports", "Instance Optimization"],
      subtopics: [
        "AWS Pricing Model & Cost Explorer",
        "Budgets & Billing Alarms",
        "Billing Reports & Cost Analysis",
        "Reserved vs On-Demand vs Spot Instances"
      ]
    },
    {
      title: "Automation & Infrastructure",
      icon: Wrench,
      description: "Automate AWS operations with CloudFormation, Systems Manager, and infrastructure automation",
      skills: ["CloudFormation", "Systems Manager", "Parameter Store", "Patch Manager"],
      subtopics: [
        "CloudFormation Basics (Infrastructure as Code)",
        "Systems Manager Run Commands",
        "Parameter Store & Session Manager",
        "Patch Manager & Automation Documents"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1631624210938-539575f92e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjB0ZWNobm9sb2d5JTIwY29kaW5nfGVufDF8fHx8MTc1NzMzNDU2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="DevOps Technology"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative container mx-auto px-6 py-16">
          {/* Logo and Header */}
          <div className="flex justify-center mb-8">
            <CloudOpsLabLogo />
          </div>
          <div className="text-center text-white">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              Professional Cloud & DevOps Training
            </Badge>
            <h1 className="mb-4 text-5xl text-white">
              CloudOpsLab Training Programs
            </h1>
            <p className="mb-8 text-xl text-blue-100 max-w-3xl mx-auto">
              Transform your career with comprehensive hands-on training in DevOps practices, 
              AWS cloud administration, and automation tools used by industry leaders
            </p>
            <div className="flex justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>10-12 Weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Small Batches</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span>Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Our Courses Overview */}
        <Card className="mb-12 shadow-lg border-0 bg-white/70 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-gray-800">
              Our Training Programs
            </CardTitle>
            <CardDescription className="text-lg max-w-4xl mx-auto">
              Choose from our comprehensive training programs designed to accelerate your career in cloud and DevOps technologies.
              Each course is crafted with industry expertise and hands-on practical learning.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* DevOps Course Card */}
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCourse === 'devops' 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-400 shadow-lg scale-105' 
                    : 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedCourse('devops')}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Workflow className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">Complete DevOps Mastery</CardTitle>
                      <p className="text-blue-600">11 Comprehensive Modules</p>
                    </div>
                  </div>
                  {selectedCourse === 'devops' && (
                    <Badge className="bg-blue-100 text-blue-700 border-blue-300 w-fit">
                      ✓ Selected Course
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Master the complete DevOps lifecycle with practical, industry-relevant training covering 
                    version control, containerization, CI/CD, cloud deployment, and automation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git & GitHub</Badge>
                    <Badge variant="secondary">Docker & Kubernetes</Badge>
                    <Badge variant="secondary">Jenkins CI/CD</Badge>
                    <Badge variant="secondary">AWS Cloud</Badge>
                    <Badge variant="secondary">Terraform</Badge>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>10-12 Weeks</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Max 15 Students</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* AWS Administrator Course Card */}
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCourse === 'aws' 
                    ? 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-400 shadow-lg scale-105' 
                    : 'bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 hover:border-orange-300'
                }`}
                onClick={() => setSelectedCourse('aws')}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">AWS Administrator</CardTitle>
                      <p className="text-orange-600">11 Specialized Modules</p>
                    </div>
                  </div>
                  {selectedCourse === 'aws' && (
                    <Badge className="bg-orange-100 text-orange-700 border-orange-300 w-fit">
                      ✓ Selected Course
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Become an AWS cloud expert with comprehensive training in cloud administration, 
                    security, networking, and cost optimization for enterprise environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">EC2 & VPC</Badge>
                    <Badge variant="secondary">IAM & Security</Badge>
                    <Badge variant="secondary">S3 & Storage</Badge>
                    <Badge variant="secondary">RDS & Databases</Badge>
                    <Badge variant="secondary">CloudWatch</Badge>
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>4-6 Weeks</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Max 12 Students</span>
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Course Selection Controls */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg border">
                <button
                  onClick={() => setSelectedCourse('devops')}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCourse === 'devops'
                      ? 'bg-blue-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-blue-50'
                  }`}
                >
                  DevOps Course
                </button>
                <button
                  onClick={() => setSelectedCourse('aws')}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCourse === 'aws'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-orange-50'
                  }`}
                >
                  AWS Course
                </button>
                <button
                  onClick={() => setSelectedCourse('both')}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCourse === 'both'
                      ? 'bg-purple-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-purple-50'
                  }`}
                >
                  View Both
                </button>
              </div>
            </div>

            {/* Common Benefits */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h4>Hands-on Learning</h4>
                <p className="text-muted-foreground">
                  Real projects and practical exercises
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h4>Industry Tools</h4>
                <p className="text-muted-foreground">
                  Latest technologies and best practices
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                </div>
                <h4>Career Ready</h4>
                <p className="text-muted-foreground">
                  Job-ready skills and certification
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* DevOps Course Curriculum */}
        {(selectedCourse === 'devops' || selectedCourse === 'both') && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Workflow className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl text-gray-800">
                  Complete DevOps Mastery Curriculum
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Eleven comprehensive modules designed to take you from beginner to DevOps professional
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {devopsTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <Card
                    key={topic.title}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            Module {index + 1}: {topic.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base">
                        {topic.description}
                      </CardDescription>
                      <div>
                        <p className="text-sm mb-2">Key Topics:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {topic.subtopics.map((subtopic, subIndex) => (
                            <li key={subIndex} className="flex items-start space-x-2">
                              <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{subtopic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm mb-2">Key Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {topic.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* AWS Administrator Course Curriculum */}
        {(selectedCourse === 'aws' || selectedCourse === 'both') && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Cloud className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl text-gray-800">
                  AWS Administrator Curriculum
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Eleven specialized modules to master AWS cloud administration and become a certified cloud professional
              </p>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {awsTopics.map((topic, index) => {
                const IconComponent = topic.icon;
                return (
                  <Card
                    key={topic.title}
                    className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            Module {index + 1}: {topic.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base">
                        {topic.description}
                      </CardDescription>
                      <div>
                        <p className="text-sm mb-2">Key Topics:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {topic.subtopics.map((subtopic, subIndex) => (
                            <li key={subIndex} className="flex items-start space-x-2">
                              <span className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                              <span>{subtopic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm mb-2">Key Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {topic.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        )}

        <Separator className="my-12" />

        {/* Our Commitment - No Fake Promises */}
        <Card className="mb-12 shadow-xl border-0 bg-gradient-to-r from-green-50 to-emerald-50 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 rounded-full -ml-12 -mb-12 opacity-20"></div>
          <CardHeader className="text-center relative">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl text-gray-800 mb-2">Our Commitment to You</CardTitle>
            <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-1">
              No Fake Promises - Only Real Results
            </Badge>
          </CardHeader>
          <CardContent className="relative">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Unlike institutes that make unrealistic placement promises, we believe in <strong>transparency and authentic career development</strong>. 
                Our focus is on building your genuine skills, not making hollow guarantees.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-gray-800">Honest Guidance</h4>
                <p className="text-sm text-gray-600">Realistic career expectations and honest feedback</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-gray-800">Skill-First Approach</h4>
                <p className="text-sm text-gray-600">Focus on building real competencies that employers value</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-gray-800">Genuine Support</h4>
                <p className="text-sm text-gray-600">Real mentorship and continuous learning support</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="text-gray-800">Quality First</h4>
                <p className="text-sm text-gray-600">Small batches ensure personalized attention and quality</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border border-green-200">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">Your success is built on skills, not false promises</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Course Comparison - Only show when both courses are visible */}
        {selectedCourse === 'both' && (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* DevOps Course Details */}
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Workflow className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">DevOps Course Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>10-12 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span>Live Online + Hands-on Labs</span>
                </div>
                <div className="flex justify-between">
                  <span>Class Size:</span>
                  <span>Maximum 15 Students</span>
                </div>
                <div className="flex justify-between">
                  <span>Prerequisites:</span>
                  <span>Basic Programming Knowledge</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span>End-to-end DevOps Pipeline</span>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-3">What You'll Master:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Complete CI/CD pipeline implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Docker & Kubernetes orchestration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Infrastructure as Code with Terraform</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Monitoring and observability</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* AWS Administrator Course Details */}
          <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-xl">AWS Administrator Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>4-6 Weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span>Live Online + AWS Labs</span>
                </div>
                <div className="flex justify-between">
                  <span>Class Size:</span>
                  <span>Maximum 12 Students</span>
                </div>
                <div className="flex justify-between">
                  <span>Prerequisites:</span>
                  <span>Basic IT Knowledge</span>
                </div>
                <div className="flex justify-between">
                  <span>Focus:</span>
                  <span>AWS Cloud Administration</span>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="mb-3">What You'll Master:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>AWS cloud infrastructure management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Security and compliance implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Cost optimization strategies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>Disaster recovery planning</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        )}

        {/* Contact Information */}
        <Card className="mb-12 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-gray-800">Get In Touch</CardTitle>
            <CardDescription className="text-lg">
              Ready to start your DevOps journey? Contact us today!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Eden Garden, Wing No 2<br />
                    Tathawade, Pune - 411033<br />
                    Maharashtra, India
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg mb-2">Contact Number</h4>
                  <p className="text-gray-600 leading-relaxed">
                    <a href="tel:+918983410527" className="text-blue-600 hover:underline">
                      +91 8983410527
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Call us for course details and enrollment
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="text-center bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
          <CardContent className="py-12">
            <div className="flex justify-center mb-6">
              <CloudOpsLabLogo />
            </div>
            <h3 className="text-2xl mb-4 text-white">
              Ready to Transform Your Career?
            </h3>
            <p className="mb-6 text-blue-100 max-w-2xl mx-auto">
              Join hundreds of successful professionals who have launched their cloud and DevOps careers 
              with our comprehensive training programs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Badge className="bg-white text-blue-600 px-4 py-2">
                💼 100% Job Placement Support
              </Badge>
              <Badge className="bg-white text-blue-600 px-4 py-2">
                🎯 Industry Mentorship
              </Badge>
              <Badge className="bg-white text-blue-600 px-4 py-2">
                🚀 Lifetime Course Updates
              </Badge>
              <Badge className="bg-white text-blue-600 px-4 py-2">
                ☁️ Two Specialized Tracks
              </Badge>
            </div>
            <div className="flex justify-center items-center space-x-6 text-blue-100 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 8983410527</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Tathawade, Pune</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}