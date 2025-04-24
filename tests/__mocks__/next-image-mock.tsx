import * as React from "react";

type ImageProps = {
	src?: string;
	alt?: string;
	className?: string;
	"data-testId"?: string;
};

const NextImageMock = React.forwardRef<HTMLImageElement, ImageProps>(
	(props, ref) => {
		const { src, alt, className } = props;
		return (
			<img
				ref={ref}
				src={src}
				alt={alt}
				className={className}
				data-testId="logo"
			/>
		);
	},
);
NextImageMock.displayName = "NextImageMock";

export default NextImageMock;
