"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type {JobData} from "@/../../app/page"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"


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
              <Drawer>
                <DrawerTrigger>
                  <Button>apply here</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>
                        Apply for {JobData.title} at {JobData.company}
                      </DrawerTitle>
                      <DrawerDescription>
                        Please fill out the application form below.
                      </DrawerDescription>
                    </DrawerHeader>
                  </div>
                </DrawerContent>
              </Drawer>
            </CardFooter>
          </Card>
        </div>
      )
    }

