"use client"
import React from "react";
import { CardToDropVideo } from "@/components/cardFile";
import { useState } from "react";
import Uploading from "@/components/loading";
export default function Home() {
	const [file, setFile] = useState<File>();
	const [loading, setLoading] = useState<boolean>(true);
	return (
		<section className="grid place-items-center w-full h-full">
			{
				loading ? <Uploading loading={loading} setLoading={setLoading}/> : <CardToDropVideo setLoading={setLoading} />
			}
			
		</section>
	);
}
