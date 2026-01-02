import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { PostResponse } from '@/app/lib/PostCardType'


function PostCardShadcd({userId,id,title,body}:PostResponse) {
  return (
    <>

   
     <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
        {body}
        </CardDescription>
          <CardDescription>
        {id} {userId}
        </CardDescription>
       
      </CardHeader>
      
    </Card>
     </>
  )
}

export default PostCardShadcd