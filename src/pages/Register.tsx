import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  UserPlus, 
  Lightbulb, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  X,
  Plus
} from "lucide-react";
import twcLogo from "@/assets/twc-logo.png";

// Validation schemas
const teamInfoSchema = z.object({
  teamName: z.string().trim().min(2, "Team name must be at least 2 characters").max(50, "Team name must be less than 50 characters"),
  country: z.string().trim().min(2, "Please enter your country"),
  guardianName: z.string().trim().min(2, "Guardian name must be at least 2 characters").max(100, "Guardian name too long"),
  guardianEmail: z.string().trim().email("Please enter a valid email address"),
  guardianPhone: z.string().trim().min(6, "Please enter a valid phone number").max(20, "Phone number too long"),
});

const memberSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  age: z.number().min(8, "Minimum age is 8").max(18, "Maximum age is 18"),
  role: z.string().trim().min(2, "Please specify a role"),
});

const projectSchema = z.object({
  projectTitle: z.string().trim().min(3, "Project title must be at least 3 characters").max(100, "Title too long"),
  sdgCategory: z.string().min(1, "Please select an SDG category"),
  description: z.string().trim().min(20, "Please provide a brief description (min 20 characters)").max(500, "Description too long"),
});

interface TeamMember {
  name: string;
  age: number;
  role: string;
}

const steps = [
  { id: 1, title: "Team Info", icon: Users },
  { id: 2, title: "Members", icon: UserPlus },
  { id: 3, title: "Project", icon: Lightbulb },
  { id: 4, title: "Review", icon: CheckCircle },
];

const sdgCategories = [
  "No Poverty",
  "Zero Hunger",
  "Good Health and Well-being",
  "Quality Education",
  "Gender Equality",
  "Clean Water and Sanitation",
  "Affordable and Clean Energy",
  "Decent Work and Economic Growth",
  "Industry, Innovation and Infrastructure",
  "Reduced Inequalities",
  "Sustainable Cities and Communities",
  "Responsible Consumption and Production",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace, Justice and Strong Institutions",
  "Partnerships for the Goals",
];

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Form state
  const [teamInfo, setTeamInfo] = useState({
    teamName: "",
    country: "",
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
  });
  
  const [members, setMembers] = useState<TeamMember[]>([
    { name: "", age: 10, role: "Team Leader" },
  ]);
  
  const [project, setProject] = useState({
    projectTitle: "",
    sdgCategory: "",
    description: "",
  });
  
  const [file, setFile] = useState<File | null>(null);

  const validateStep = (step: number): boolean => {
    setErrors({});
    
    try {
      if (step === 1) {
        teamInfoSchema.parse(teamInfo);
      } else if (step === 2) {
        if (members.length > 3) {
          setErrors({ members: "Team can have maximum 3 members" });
          return false;
        }
        members.forEach((member, index) => {
          memberSchema.parse(member);
        });
      } else if (step === 3) {
        projectSchema.parse(project);
      }
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const path = err.path.join(".");
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const addMember = () => {
    if (members.length < 3) {
      setMembers([...members, { name: "", age: 12, role: "" }]);
    }
  };

  const removeMember = (index: number) => {
    if (members.length > 1) {
      setMembers(members.filter((_, i) => i !== index));
    }
  };

  const updateMember = (index: number, field: keyof TeamMember, value: string | number) => {
    const updated = [...members];
    updated[index] = { ...updated[index], [field]: value };
    setMembers(updated);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const allowedTypes = ['application/pdf', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'];
      if (!allowedTypes.includes(selectedFile.type)) {
        toast({ title: "Invalid file type", description: "Please upload a PDF or PowerPoint file", variant: "destructive" });
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast({ title: "File too large", description: "Maximum file size is 10MB", variant: "destructive" });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = () => {
    // In a real app, this would send data to the backend
    toast({
      title: "Registration Submitted! 🎉",
      description: "Thank you for registering. We'll contact you soon with next steps!",
    });
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Register Your Team | Teens World Cup 2025</title>
        <meta name="description" content="Register for Teens World Cup 2025 - the freestyle global innovation challenge for ages 8-18. Win a fully-funded trip to USA!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <img src={twcLogo} alt="TWC" className="h-16 w-auto mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-black text-foreground mb-3">
                Team <span className="text-gradient-hero">Registration</span>
              </h1>
              <p className="text-muted-foreground">
                Join thousands of young innovators from around the world
              </p>
            </div>

            {/* Progress Steps */}
            <div className="max-w-3xl mx-auto mb-10">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.id;
                  const isCompleted = currentStep > step.id;
                  
                  return (
                    <div key={step.id} className="flex items-center flex-1">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-twc-orange text-primary-foreground shadow-glow-orange"
                              : isCompleted
                              ? "bg-twc-green text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`text-xs font-semibold mt-2 ${isActive ? "text-twc-orange" : "text-muted-foreground"}`}>
                          {step.title}
                        </span>
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className={`flex-1 h-1 mx-2 rounded-full transition-colors ${
                            isCompleted ? "bg-twc-green" : "bg-muted"
                          }`}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form Container */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-3xl p-6 md:p-8 shadow-card">
                {/* Step 1: Team Info */}
                {currentStep === 1 && (
                  <div className="space-y-5 animate-slide-up">
                    <h2 className="text-xl font-bold text-foreground mb-6">Team Information</h2>
                    
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Team Name *</label>
                      <input
                        type="text"
                        value={teamInfo.teamName}
                        onChange={(e) => setTeamInfo({ ...teamInfo, teamName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="e.g., Tech Wizards"
                      />
                      {errors.teamName && <p className="text-destructive text-sm mt-1">{errors.teamName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Country *</label>
                      <input
                        type="text"
                        value={teamInfo.country}
                        onChange={(e) => setTeamInfo({ ...teamInfo, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="e.g., United States"
                      />
                      {errors.country && <p className="text-destructive text-sm mt-1">{errors.country}</p>}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <h3 className="text-lg font-bold text-foreground mb-4">Guardian / Mentor Details</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                          <input
                            type="text"
                            value={teamInfo.guardianName}
                            onChange={(e) => setTeamInfo({ ...teamInfo, guardianName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="Guardian's full name"
                          />
                          {errors.guardianName && <p className="text-destructive text-sm mt-1">{errors.guardianName}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                          <input
                            type="email"
                            value={teamInfo.guardianEmail}
                            onChange={(e) => setTeamInfo({ ...teamInfo, guardianEmail: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="guardian@example.com"
                          />
                          {errors.guardianEmail && <p className="text-destructive text-sm mt-1">{errors.guardianEmail}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                          <input
                            type="tel"
                            value={teamInfo.guardianPhone}
                            onChange={(e) => setTeamInfo({ ...teamInfo, guardianPhone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            placeholder="+1 234 567 8900"
                          />
                          {errors.guardianPhone && <p className="text-destructive text-sm mt-1">{errors.guardianPhone}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Team Members */}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-slide-up">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold text-foreground">Team Members</h2>
                      <span className="text-sm text-muted-foreground">1-3 members allowed</span>
                    </div>
                    
                    {errors.members && <p className="text-destructive text-sm mb-4">{errors.members}</p>}

                    {members.map((member, index) => (
                      <div key={index} className="p-4 bg-muted/50 rounded-2xl space-y-4">
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            index === 0 ? "bg-twc-orange text-primary-foreground" : 
                            index === 1 ? "bg-twc-green text-primary-foreground" :
                            index === 2 ? "bg-twc-blue text-primary-foreground" :
                            "bg-twc-yellow text-foreground"
                          }`}>
                            Member {index + 1}
                          </span>
                          {members.length > 1 && (
                            <button
                              onClick={() => removeMember(index)}
                              className="p-1 hover:bg-destructive/10 rounded-full transition-colors"
                            >
                              <X className="w-4 h-4 text-destructive" />
                            </button>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="md:col-span-1">
                            <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                            <input
                              type="text"
                              value={member.name}
                              onChange={(e) => updateMember(index, "name", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                              placeholder="Full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Age (8-18) *</label>
                            <input
                              type="number"
                              min={8}
                              max={18}
                              value={member.age}
                              onChange={(e) => updateMember(index, "age", parseInt(e.target.value) || 6)}
                              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">Role *</label>
                            <input
                              type="text"
                              value={member.role}
                              onChange={(e) => updateMember(index, "role", e.target.value)}
                              className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                              placeholder="e.g., Developer"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    {members.length < 3 && (
                      <button
                        onClick={addMember}
                        className="w-full py-3 border-2 border-dashed border-border rounded-2xl text-muted-foreground hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
                      >
                        <Plus className="w-5 h-5" />
                        Add Team Member
                      </button>
                    )}
                  </div>
                )}

                {/* Step 3: Project Details */}
                {currentStep === 3 && (
                  <div className="space-y-5 animate-slide-up">
                    <h2 className="text-xl font-bold text-foreground mb-6">Project Details</h2>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Project Title *</label>
                      <input
                        type="text"
                        value={project.projectTitle}
                        onChange={(e) => setProject({ ...project, projectTitle: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="e.g., Clean Water Monitor"
                      />
                      {errors.projectTitle && <p className="text-destructive text-sm mt-1">{errors.projectTitle}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">SDG Category *</label>
                      <select
                        value={project.sdgCategory}
                        onChange={(e) => setProject({ ...project, sdgCategory: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="">Select an SDG...</option>
                        {sdgCategories.map((sdg, index) => (
                          <option key={sdg} value={sdg}>
                            {index + 1}. {sdg}
                          </option>
                        ))}
                      </select>
                      {errors.sdgCategory && <p className="text-destructive text-sm mt-1">{errors.sdgCategory}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Project Description *</label>
                      <textarea
                        value={project.description}
                        onChange={(e) => setProject({ ...project, description: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Briefly describe your project idea and how it addresses the SDG..."
                      />
                      <p className="text-xs text-muted-foreground mt-1">{project.description.length}/500 characters</p>
                      {errors.description && <p className="text-destructive text-sm mt-1">{errors.description}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Project Document (Optional)</label>
                      <div className="border-2 border-dashed border-border rounded-2xl p-6 text-center hover:border-primary transition-colors">
                        {file ? (
                          <div className="flex items-center justify-center gap-3">
                            <span className="text-foreground font-medium">{file.name}</span>
                            <button
                              onClick={() => setFile(null)}
                              className="p-1 hover:bg-destructive/10 rounded-full"
                            >
                              <X className="w-4 h-4 text-destructive" />
                            </button>
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-muted-foreground">Click to upload PDF or PPT (max 10MB)</p>
                            <input
                              type="file"
                              accept=".pdf,.ppt,.pptx"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-slide-up">
                    <h2 className="text-xl font-bold text-foreground mb-6">Review Your Application</h2>

                    {/* Team Info Review */}
                    <div className="p-4 bg-twc-orange-light rounded-2xl">
                      <h3 className="font-bold text-twc-orange mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5" /> Team Information
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span className="text-muted-foreground">Team Name:</span>
                        <span className="font-semibold">{teamInfo.teamName}</span>
                        <span className="text-muted-foreground">Country:</span>
                        <span className="font-semibold">{teamInfo.country}</span>
                        <span className="text-muted-foreground">Guardian:</span>
                        <span className="font-semibold">{teamInfo.guardianName}</span>
                        <span className="text-muted-foreground">Email:</span>
                        <span className="font-semibold">{teamInfo.guardianEmail}</span>
                      </div>
                    </div>

                    {/* Members Review */}
                    <div className="p-4 bg-twc-green-light rounded-2xl">
                      <h3 className="font-bold text-twc-green mb-3 flex items-center gap-2">
                        <UserPlus className="w-5 h-5" /> Team Members ({members.length})
                      </h3>
                      <div className="space-y-2">
                        {members.map((member, index) => (
                          <div key={index} className="flex items-center justify-between text-sm">
                            <span className="font-semibold">{member.name}</span>
                            <span className="text-muted-foreground">Age {member.age} • {member.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Review */}
                    <div className="p-4 bg-twc-blue-light rounded-2xl">
                      <h3 className="font-bold text-twc-blue mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5" /> Project Details
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Title: </span>
                          <span className="font-semibold">{project.projectTitle}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">SDG: </span>
                          <span className="font-semibold">{project.sdgCategory}</span>
                        </div>
                        <p className="text-muted-foreground mt-2">{project.description}</p>
                        {file && (
                          <p className="text-muted-foreground">📎 {file.name}</p>
                        )}
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="p-4 bg-muted rounded-2xl">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 w-5 h-5 rounded" required />
                        <span className="text-sm text-muted-foreground">
                          I confirm that all team members are between 6-16 years old and I have parental/guardian consent for their participation. I agree to the competition rules and terms of service.
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                  {currentStep > 1 ? (
                    <Button variant="outline" onClick={handleBack} className="gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                  ) : (
                    <div />
                  )}
                  
                  {currentStep < 4 ? (
                    <Button variant="hero" onClick={handleNext} className="gap-2">
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button variant="green" onClick={handleSubmit} size="lg" className="gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Submit Registration
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Register;
