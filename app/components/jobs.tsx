
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type {JobData} from "@/../../app/page"




export default function Job({ JobData }: { JobData: JobData }) {
  
      return(
          <div className="my-4 mx-6"> 
              <Card className="w-full">
            <CardHeader>
              <CardTitle>{JobData.title}</CardTitle>
              <CardDescription>{JobData.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{JobData.location}</p>
              <p>{JobData.salary ? JobData.salary : "Salary not disclosed"}</p>
            </CardContent>
            <CardFooter>
              <Button>Apply here!</Button>
            </CardFooter>
          </Card>
          </div>
      )
    }

