import * as React from "react";
import Image from "next/image";

type MomentsImageProps = {
	src: string;
	alt: string;
};

export function MomentsImage({ src, alt }: MomentsImageProps) {
	return (
		<div className="relative overflow-hidden rounded-xl group">
			<div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
				<Image
					src={src}
					alt={alt}
					priority
					quality={100}
					width={600}
					height={300}
					className="object-cover w-full h-[250px]"
				/>
				<div className="absolute inset-0 transition-colors group-hover:bg-black/40" />
			</div>
		</div>
	);
}
