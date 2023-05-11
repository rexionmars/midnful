import React from "react"
import AboutPage from "@/components/About";
import { getPostDetails } from "@/services";


export default function About({ post }) {
    return (
        <div>
            <AboutPage />
        </div>
    )
}
