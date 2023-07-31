"use client"
import React from "react";
import { CardToDropVideo } from "@/components/cardFile";
import { useState } from "react";
import Uploading from "@/components/loading";
import UploadedLink from "@/components/uploadedLink";
export default function Home() {
	const [url, setUrl] = useState<string>("")
	const [loading, setLoading] = useState<boolean>(false);
	return (
		<section className="grid place-items-center w-full h-full">
			{
				(loading && !url) ? <Uploading loading={loading} setLoading={setLoading}/> : (!loading && !url )? <CardToDropVideo setLoading={setLoading} setUrl={setUrl}/>: (!loading && url ) ? <UploadedLink url={url}/> : null 
			
			}
			
		</section>
	);
}
