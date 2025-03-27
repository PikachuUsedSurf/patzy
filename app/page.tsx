import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Job from "./components/jobs"

export interface JobData {
  id: string,
  title: string,
  company: string,
  location: string,
  type: string,
  salary?: string,
  postedDate: string,
}

const jobListings: JobData[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    type: "Full-time",
    salary: "$80k - $120k",
    postedDate: "2025-03-18",
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSys",
    location: "New York, NY",
    type: "Full-time",
    postedDate: "2025-03-17",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    company: "DesignCo",
    location: "San Francisco, CA",
    type: "Contract",
    salary: "$60/hr",
    postedDate: "2025-03-16",
  },
]

export default function Home() {
  return (
   <main className="bg-white text-black flex flex-col min-h-screen">
     <div className="w-full mx-auto p-4 border-b">
       <div className="">
         <div className="flex items-center justify-center w-full space-x-2">
           <Input type="search" placeholder="Type in a Job Title..." className="w-64"/>
           <Button type="submit">Search</Button>
         </div>
       </div>
     </div>
     <div className="grid grid-cols-2 p-4">
        {jobListings.map((job) => (
          <Job key={job.id} JobData={job} />
        ))}
     </div>
   </main>
 );
}
