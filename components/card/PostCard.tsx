import { PostCardType as PostCardProps } from "@/app/lib/PostCardType";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function PostCard({
  userId = 0,
  id = 0,
  title = "Hello Phakley",
  body = "Welcome to Next.js with Tailwind CSS and shadcn/ui",
}: PostCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{body}</CardDescription>
      </CardHeader>
    </Card>
  );
}
