import Image from "next/image";
import { PencilIcon, Trash2Icon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const TeacherCourseCard = ({
  course,
  onEdit,
  onDelete,
  isOwner,
}: TeacherCourseCardProps) => {
  return (
    <Card className="course-card-teacher group">
      <CardHeader className="course-card-teacher__header">
        {course.image && (
          <Image
            src={course.image || "/placeholder.png"}
            alt={course.title}
            width={370}
            height={200}
            className="course-card-teacher__image"
          />
        )}
      </CardHeader>

      <CardContent className="course-card-teacher__content">
        <div className="flex flex-col">
          <CardTitle className="course-card-teacher__title">
            {course.title}
          </CardTitle>

          <CardDescription className="course-card-teacher__category">
            {course.category}
          </CardDescription>

          <p className="mb-2 text-sm">
            Status:{" "}
            <span
              className={cn(
                "rounded px-2 py-1 font-semibold",
                course.status === "Published"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400",
              )}
            >
              {course.status}
            </span>
          </p>

          {course.enrollments && (
            <p className="ml-1 mt-1 inline-block bg-secondary/10 text-sm font-normal text-secondary">
              <span className="font-bold text-white-100">
                {course.enrollments.length}
              </span>{" "}
              Student{course.enrollments.length > 1 ? "s" : ""} Enrolled
            </p>
          )}
        </div>

        <div className="mt-3 w-full gap-2 space-y-2 xl:flex xl:space-y-0">
          {isOwner ? (
            <>
              <div>
                <Button
                  className="course-card-teacher__edit-button"
                  onClick={() => onEdit(course)}
                >
                  <PencilIcon className="mr-2 size-4" />
                  Edit Course
                </Button>
              </div>
              <div>
                <Button
                  className="course-card-teacher__delete-button"
                  onClick={() => onDelete(course)}
                >
                  <Trash2Icon className="mr-2 size-4" />
                  Delete Course
                </Button>
              </div>
            </>
          ) : (
            <p className="text-sm italic text-gray-500">View Only</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
