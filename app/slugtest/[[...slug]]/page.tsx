'use client'

import { useState } from "react"

export default function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
    const [slug, setSlug] = useState([""])

    params.then(params => {
        console.log("READ PARAMS")
        setSlug(params.slug ? params.slug : [])
        // setSlug(params.slug) This throws an error: "Argument of type 'string[] | undefined' is not assignable to parameter of type 'SetStateAction<string[]>"
    })
}