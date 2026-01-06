import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface TrainingCourse {
    title: string
}

interface TrainingCategoryProps {
    title: string
    description: string
    courses: TrainingCourse[]
}

export function TrainingCategoryCard({ title, description, courses }: TrainingCategoryProps) {
    return (<>
        <Card key={title} >
        <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
                <CardDescription className="text-sm">{description}</CardDescription>
            </CardHeader>
            <CardContent>
            <ul className="space-y-2">
                {courses.map((course, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{course.title}</span>
                    </li>
                ))}
            </ul>
                </CardContent>
        </Card>
    </>
    )
}
