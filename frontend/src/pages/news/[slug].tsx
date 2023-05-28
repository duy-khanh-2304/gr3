import BreadCrumbs from '@/components/breadCrumbs/BreadCrumbs';
import { useRouter } from 'next/router'
import React from 'react'

export default function Something() {
  const router = useRouter();
  const {slug} = router.query
  console.log("Route dynamic: ", router)
  console.log("Slug: ", slug)
  return (
    <div>
      <BreadCrumbs/>
      {slug}
    </div>
  )
}
